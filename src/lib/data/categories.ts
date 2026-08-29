import type { Category } from "@/lib/types";
import { getToolsByCategory } from "@/lib/data/tools";

export const categories: Category[] = [
  {
    slug: "construction",
    name: "Construction",
    description: "Concrete volume and gravel for slabs, pads, and footings — formula on each tool page.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    description: "Mulch and yard material volumes from bed area and depth.",
  },
  {
    slug: "flooring",
    name: "Flooring",
    description: "Room area to pack count, with a waste allowance for cuts.",
  },
  {
    slug: "painting",
    name: "Painting",
    description: "Wall paint from perimeter, height, coats, and door/window deductions.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    description: "Footprint and pitch to approximate squares or packs for planning.",
  },
  {
    slug: "deck-fence",
    name: "Deck & Fence",
    description: "Decking board count with width and gap — framing is a separate takeoff.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    description: "Room jobs such as drywall sheet counts for simple rectangles.",
  },
  {
    slug: "cost-estimation",
    name: "Cost Estimation",
    description: "Materials, labour, and markup rolled into a planning cost range.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Categories that currently have at least one live tool — use in nav, sitemap, and hubs. */
export function getLiveCategories(): Category[] {
  return categories.filter((c) => getToolsByCategory(c.slug).length > 0);
}
