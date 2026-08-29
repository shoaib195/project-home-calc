import { categories as seedCategories } from "@/lib/data/categories";
import { tools as seedTools } from "@/lib/data/tools";
import { guides as seedGuides } from "@/lib/data/guides";
import { createPublicSupabase } from "@/lib/supabase/public";
import { mapCategory, mapGuide, mapTool, type CategoryRow, type GuideRow, type PageRow, type ToolRow } from "@/lib/cms/types";
import { defaultPages, mergePages } from "@/lib/cms/pages";
import type { Category, Guide, Tool } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export interface Catalog {
  source: "supabase" | "seed";
  categories: Category[];
  tools: Tool[];
  guides: Guide[];
}

export async function getCatalog(): Promise<Catalog> {
  const seed: Catalog = { source: "seed", categories: seedCategories, tools: seedTools, guides: seedGuides };
  const supabase = createPublicSupabase();
  if (!supabase) return seed;

  try {
    const [{ data: categoryRows }, { data: toolRows }, { data: guideRows }] = await Promise.all([
      supabase.from("categories").select("*").order("sort_order"),
      supabase.from("tools").select("*").eq("status", "published"),
      supabase.from("guides").select("*").eq("status", "published"),
    ]);

    if (!toolRows?.length) return seed;

    return {
      source: "supabase",
      tools: (toolRows as ToolRow[]).map(mapTool),
      guides: ((guideRows ?? []) as GuideRow[]).map(mapGuide),
      categories: categoryRows?.length ? (categoryRows as CategoryRow[]).map(mapCategory) : seedCategories,
    };
  } catch {
    return seed;
  }
}

export function liveCategoriesFrom(catalog: Catalog): Category[] {
  return catalog.categories.filter((c) => catalog.tools.some((t) => t.category === c.slug));
}

export async function getResolvedPages(): Promise<PageRow[]> {
  const fallback = defaultPages();
  const supabase = createPublicSupabase();
  if (!supabase) return fallback;
  try {
    const { data } = await supabase.from("site_pages").select("*");
    return mergePages((data ?? []) as PageRow[]);
  } catch {
    return fallback;
  }
}

export async function getResolvedPage(slug: string): Promise<PageRow | undefined> {
  const pages = await getResolvedPages();
  return pages.find((p) => p.slug === slug);
}

export async function pageSeoMetadata(slug: string): Promise<Metadata> {
  const page = await getResolvedPage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.meta_title || page.title,
    description: page.meta_description,
    path: page.path,
    index: page.robots_index && page.status === "published",
    keywords: page.meta_keywords,
  });
}
