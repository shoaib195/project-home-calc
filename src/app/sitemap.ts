import type { MetadataRoute } from "next";
import { getCatalog, getResolvedPages, liveCategoriesFrom } from "@/lib/cms/catalog";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const catalog = await getCatalog();
  const pages = await getResolvedPages();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => p.robots_index && p.status === "published" && !p.slug.startsWith("category-") && p.path !== "/search")
    .map((p) => ({
      url: `${SITE_URL}${p.path === "/" ? "/" : p.path}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : now,
      changeFrequency: p.path === "/" ? "weekly" : "monthly",
      priority: p.path === "/" ? 1 : p.path === "/calculators" ? 0.9 : 0.6,
    }));

  const liveCategories = liveCategoriesFrom(catalog);
  const categoryRoutes: MetadataRoute.Sitemap = liveCategories
    .filter((c) => {
      const page = pages.find((p) => p.slug === `category-${c.slug}`);
      return !page || (page.robots_index && page.status === "published");
    })
    .map((c) => ({
      url: `${SITE_URL}/calculators/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const toolRoutes: MetadataRoute.Sitemap = catalog.tools
    .filter((t) => t.index !== false)
    .map((t) => ({
      url: `${SITE_URL}/calculators/${t.category}/${t.slug}`,
      lastModified: new Date(t.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const guideRoutes: MetadataRoute.Sitemap = catalog.guides
    .filter((g) => g.index !== false)
    .map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...guideRoutes];
}
