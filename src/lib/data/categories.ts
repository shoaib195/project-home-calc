import type { Category } from "@/lib/types";
import { getToolsByCategory } from "@/lib/data/tools";

export const categories: Category[] = [
  {
    slug: "construction",
    name: "Construction",
    description:
      "Concrete, gravel, and other core building-material calculators for foundations, slabs, and footings.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    description:
      "Mulch, soil, and yard-material calculators for garden beds, borders, and outdoor projects.",
  },
  {
    slug: "flooring",
    name: "Flooring",
    description:
      "Work out how much flooring material to order for any room, with waste allowance built in.",
  },
  {
    slug: "painting",
    name: "Painting",
    description:
      "Estimate paint quantity by room size, coat count, and door or window deductions.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    description:
      "Roofing-material calculators for shingles, underlayment, and pitch-adjusted coverage.",
  },
  {
    slug: "deck-fence",
    name: "Deck & Fence",
    description:
      "Decking boards, fence panels, and post spacing for outdoor structure projects.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    description: "General-purpose calculators for everyday renovation and repair projects.",
  },
  {
    slug: "cost-estimation",
    name: "Cost Estimation",
    description:
      "Combine materials, labor, and markup into a full project cost estimate.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Categories that currently have at least one live tool — use in nav, sitemap, and hubs. */
export function getLiveCategories(): Category[] {
  return categories.filter((c) => getToolsByCategory(c.slug).length > 0);
}
