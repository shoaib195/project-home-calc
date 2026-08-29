import { createServerSupabase } from "@/lib/supabase/server";
import { categories as seedCategories } from "@/lib/data/categories";
import { tools as seedTools } from "@/lib/data/tools";
import { guides as seedGuides } from "@/lib/data/guides";
import { defaultPage, defaultPages, mergePages } from "@/lib/cms/pages";
import {
  guideToRow,
  mapCategory,
  toolToRow,
  type AuditRow,
  type CategoryRow,
  type GuideRow,
  type PageRow,
  type ToolRow,
} from "@/lib/cms/types";

export async function getAdminUser() {
  const supabase = await createServerSupabase();
  if (!supabase) return { supabase: null, user: null, isAdmin: false };
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return { supabase, user: null, isAdmin: false };
  const { data } = await supabase.from("admin_emails").select("email").ilike("email", user.email).maybeSingle();
  return { supabase, user, isAdmin: Boolean(data) };
}

function seedToolRows(): ToolRow[] {
  return seedTools.map((t) => toolToRow(t));
}

function seedGuideRows(): GuideRow[] {
  return seedGuides.map((g) => guideToRow(g));
}

export async function getAdminLists() {
  const { supabase, isAdmin } = await getAdminUser();
  if (!supabase || !isAdmin) {
    return {
      source: "seed" as const,
      tools: seedToolRows(),
      guides: seedGuideRows(),
      categories: seedCategories,
      pages: defaultPages(),
      audit: [] as AuditRow[],
      connected: false,
    };
  }

  const [{ data: toolRows }, { data: guideRows }, { data: categoryRows }, { data: pageRows }, { data: auditRows }] =
    await Promise.all([
      supabase.from("tools").select("*").order("name"),
      supabase.from("guides").select("*").order("title"),
      supabase.from("categories").select("*").order("sort_order"),
      supabase.from("site_pages").select("*").order("slug"),
      supabase.from("audit_log").select("*").order("created_at", { ascending: false }).limit(50),
    ]);

  const tools = ((toolRows ?? []) as ToolRow[]).length
    ? ((toolRows ?? []) as ToolRow[]).map((row) => normalizeToolRow(row))
    : seedToolRows();
  const guides = ((guideRows ?? []) as GuideRow[]).length
    ? ((guideRows ?? []) as GuideRow[]).map((row) => normalizeGuideRow(row))
    : seedGuideRows();

  return {
    source: toolRows?.length ? ("supabase" as const) : ("seed" as const),
    tools,
    guides,
    categories: categoryRows?.length ? (categoryRows as CategoryRow[]).map(mapCategory) : seedCategories,
    pages: mergePages((pageRows ?? []) as PageRow[]),
    audit: (auditRows ?? []) as AuditRow[],
    connected: true,
  };
}

export async function getAdminTool(slug: string): Promise<ToolRow | null> {
  const { supabase, isAdmin } = await getAdminUser();
  const fallback = seedTools.find((t) => t.slug === slug);
  if (!supabase || !isAdmin) return fallback ? toolToRow(fallback) : null;
  const { data } = await supabase.from("tools").select("*").eq("slug", slug).maybeSingle();
  if (data) return normalizeToolRow(data as ToolRow);
  return fallback ? toolToRow(fallback) : null;
}

export async function getAdminGuide(slug: string): Promise<GuideRow | null> {
  const { supabase, isAdmin } = await getAdminUser();
  const fallback = seedGuides.find((g) => g.slug === slug);
  if (!supabase || !isAdmin) return fallback ? guideToRow(fallback) : null;
  const { data } = await supabase.from("guides").select("*").eq("slug", slug).maybeSingle();
  if (data) return normalizeGuideRow(data as GuideRow);
  return fallback ? guideToRow(fallback) : null;
}

export async function getAdminPage(slug: string): Promise<PageRow | null> {
  const lists = await getAdminLists();
  return lists.pages.find((p) => p.slug === slug) ?? defaultPage(slug) ?? null;
}

function normalizeToolRow(row: ToolRow): ToolRow {
  const seed = seedTools.find((t) => t.slug === row.slug);
  const base = seed ? toolToRow(seed) : row;
  return {
    ...base,
    ...row,
    synonyms: row.synonyms?.length ? row.synonyms : base.synonyms,
    formula_explanation: row.formula_explanation?.length ? row.formula_explanation : base.formula_explanation,
    faq: row.faq?.length ? row.faq : base.faq,
    worked_example: row.worked_example?.title ? row.worked_example : base.worked_example,
    related_tools: row.related_tools ?? base.related_tools,
    related_guides: row.related_guides ?? base.related_guides,
    meta_title: row.meta_title || base.meta_title,
    meta_description: row.meta_description || base.meta_description,
    meta_keywords: row.meta_keywords ?? base.meta_keywords,
    robots_index: row.robots_index !== false,
    status: row.status ?? "published",
  };
}

function normalizeGuideRow(row: GuideRow): GuideRow {
  const seed = seedGuides.find((g) => g.slug === row.slug);
  const base = seed ? guideToRow(seed) : row;
  return {
    ...base,
    ...row,
    sections: row.sections?.length ? row.sections : base.sections,
    faq: row.faq?.length ? row.faq : base.faq,
    meta_title: row.meta_title || base.meta_title,
    meta_description: row.meta_description || base.meta_description,
    meta_keywords: row.meta_keywords ?? base.meta_keywords,
    robots_index: row.robots_index !== false,
    status: row.status ?? "published",
  };
}
