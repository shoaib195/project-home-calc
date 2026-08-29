"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";
import { categories } from "@/lib/data/categories";
import { tools } from "@/lib/data/tools";
import { guides } from "@/lib/data/guides";
import { guideToRow, toolToRow, type ContentStatus, type GuideRow, type PageRow, type ToolRow } from "@/lib/cms/types";
import { defaultPages } from "@/lib/cms/pages";

async function requireAdmin() {
  const supabase = await createServerSupabase();
  if (!supabase) throw new Error("Supabase is not configured.");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) throw new Error("Sign in required.");
  const { data: allowed } = await supabase
    .from("admin_emails")
    .select("email")
    .ilike("email", user.email)
    .maybeSingle();
  if (!allowed) throw new Error("This account is not on the admin allowlist.");
  return { supabase, email: user.email };
}

async function audit(
  supabase: Awaited<ReturnType<typeof createServerSupabase>>,
  email: string,
  action: string,
  entityType: string,
  entityId: string,
  detail?: string
) {
  if (!supabase) return;
  await supabase.from("audit_log").insert({
    actor_email: email,
    action,
    entity_type: entityType,
    entity_id: entityId,
    detail: detail ?? null,
  });
}

export async function seedCatalogAction(): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();

    const categoryRows = categories.map((c, i) => ({
      slug: c.slug,
      name: c.name,
      description: c.description,
      sort_order: i,
    }));

    const { error: catError } = await supabase.from("categories").upsert(categoryRows);
    if (catError) throw new Error(catError.message);

    const { error: toolError } = await supabase.from("tools").upsert(tools.map((t) => toolToRow(t)));
    if (toolError) throw new Error(toolError.message);

    const { error: guideError } = await supabase.from("guides").upsert(guides.map((g) => guideToRow(g)));
    if (guideError) throw new Error(guideError.message);

    const { error: pageError } = await supabase.from("site_pages").upsert(defaultPages());
    if (pageError) throw new Error(pageError.message);

    await audit(supabase, email, "seed", "catalog", "built-in", `${tools.length} tools, ${guides.length} guides`);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Seed failed." };
  }
}

export async function saveToolAction(row: ToolRow): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const { error } = await supabase.from("tools").upsert(row);
    if (error) throw new Error(error.message);
    await audit(supabase, email, "save", "tool", row.slug, row.status);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Save failed." };
  }
}

export async function saveGuideAction(row: GuideRow): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const { error } = await supabase.from("guides").upsert(row);
    if (error) throw new Error(error.message);
    await audit(supabase, email, "save", "guide", row.slug, row.status);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Save failed." };
  }
}

export async function setToolStatusAction(
  slug: string,
  status: ContentStatus
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const seed = tools.find((t) => t.slug === slug);
    const { data: current } = await supabase.from("tools").select("*").eq("slug", slug).maybeSingle();
    const row = { ...(seed ? toolToRow(seed) : (current as ToolRow)), ...(current as ToolRow | null), slug, status, updated_at: new Date().toISOString().slice(0, 10) };
    const { error } = await supabase.from("tools").upsert(row);
    if (error) throw new Error(error.message);
    await audit(supabase, email, status === "published" ? "publish" : "unpublish", "tool", slug);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Update failed." };
  }
}

export async function setGuideStatusAction(
  slug: string,
  status: ContentStatus
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const seed = guides.find((g) => g.slug === slug);
    const { data: current } = await supabase.from("guides").select("*").eq("slug", slug).maybeSingle();
    const row = { ...(seed ? guideToRow(seed) : (current as GuideRow)), ...(current as GuideRow | null), slug, status, updated_at: new Date().toISOString().slice(0, 10) };
    const { error } = await supabase.from("guides").upsert(row);
    if (error) throw new Error(error.message);
    await audit(supabase, email, status === "published" ? "publish" : "unpublish", "guide", slug);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Update failed." };
  }
}

export async function savePageAction(row: PageRow): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const { error } = await supabase.from("site_pages").upsert({
      ...row,
      updated_at: new Date().toISOString().slice(0, 10),
    });
    if (error) throw new Error(error.message);
    await audit(supabase, email, "save", "page", row.slug, row.status);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Save failed." };
  }
}

export async function setPageStatusAction(
  slug: string,
  status: ContentStatus
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const current = (await supabase.from("site_pages").select("*").eq("slug", slug).maybeSingle()).data as PageRow | null;
    const { defaultPage } = await import("@/lib/cms/pages");
    const row = { ...(defaultPage(slug) as PageRow), ...(current ?? {}), slug, status, updated_at: new Date().toISOString().slice(0, 10) };
    const { error } = await supabase.from("site_pages").upsert(row);
    if (error) throw new Error(error.message);
    await audit(supabase, email, status === "published" ? "publish" : "unpublish", "page", slug);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Update failed." };
  }
}

export async function setRobotsIndexAction(
  entity: "tool" | "guide" | "page",
  slug: string,
  robotsIndex: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const table = entity === "tool" ? "tools" : entity === "guide" ? "guides" : "site_pages";
    if (entity === "page") {
      const current = (await supabase.from("site_pages").select("*").eq("slug", slug).maybeSingle()).data as PageRow | null;
      const { defaultPage } = await import("@/lib/cms/pages");
      const row = {
        ...(defaultPage(slug) as PageRow),
        ...(current ?? {}),
        slug,
        robots_index: robotsIndex,
        updated_at: new Date().toISOString().slice(0, 10),
      };
      const { error } = await supabase.from("site_pages").upsert(row);
      if (error) throw new Error(error.message);
    } else {
      const { data: current } = await supabase.from(table).select("*").eq("slug", slug).maybeSingle();
      if (!current) {
        if (entity === "tool") {
          const seed = tools.find((t) => t.slug === slug);
          if (!seed) throw new Error("Unknown tool");
          const { error } = await supabase.from("tools").upsert({ ...toolToRow(seed), robots_index: robotsIndex });
          if (error) throw new Error(error.message);
        } else {
          const seed = guides.find((g) => g.slug === slug);
          if (!seed) throw new Error("Unknown guide");
          const { error } = await supabase.from("guides").upsert({ ...guideToRow(seed), robots_index: robotsIndex });
          if (error) throw new Error(error.message);
        }
      } else {
        const { error } = await supabase.from(table).update({ robots_index: robotsIndex }).eq("slug", slug);
        if (error) throw new Error(error.message);
      }
    }
    await audit(supabase, email, robotsIndex ? "index" : "noindex", entity, slug);
    revalidatePath("/", "layout");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Update failed." };
  }
}

export async function saveSettingAction(key: string, value: Record<string, unknown>): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { supabase, email } = await requireAdmin();
    const { error } = await supabase.from("site_settings").upsert({ key, value, updated_at: new Date().toISOString() });
    if (error) throw new Error(error.message);
    await audit(supabase, email, "save", "setting", key);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Save failed." };
  }
}
