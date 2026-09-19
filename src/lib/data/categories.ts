import type { Category } from "@/lib/types";
import { getToolsByCategory } from "@/lib/data/tools";

export const categories: Category[] = [
  {
    slug: "construction",
    name: "Construction",
    description:
      "Concrete, gravel, sand, brick, and cost tools for slabs, pads, footings, and masonry — with formulas and worked examples on every page.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    description:
      "Mulch, topsoil, pavers, and yard material volumes from bed area and depth, including bedding sand for patio stacks.",
  },
  {
    slug: "flooring",
    name: "Flooring",
    description:
      "Flooring boxes and floor tile counts with a waste allowance for cuts, doorways, and pattern layouts.",
  },
  {
    slug: "painting",
    name: "Painting",
    description:
      "Wall paint and wallpaper roll counts from room size, openings, coats, and pattern waste — plus a paint cost band.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    description:
      "Footprint and pitch to approximate roof area, squares, or packs for planning — with waste you can edit.",
  },
  {
    slug: "deck-fence",
    name: "Deck & Fence",
    description:
      "Decking board counts and fence panel, post, and rail planning for straight runs on level ground.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    description:
      "Drywall sheet counts, insulation rolls, and room boarding jobs from wall or ceiling area.",
  },
  {
    slug: "cost-estimation",
    name: "Cost Estimation",
    description:
      "Materials, labour, markup, and contingency rolled into a planning cost range you can compare to quotes.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Categories that currently have at least one live tool — use in nav, sitemap, and hubs. */
export function getLiveCategories(): Category[] {
  return categories.filter((c) => getToolsByCategory(c.slug).length > 0);
}
