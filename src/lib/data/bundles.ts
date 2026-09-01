export interface ProjectBundle {
  slug: string;
  title: string;
  description: string;
  toolSlugs: string[];
}

export const bundles: ProjectBundle[] = [
  {
    slug: "build-a-patio",
    title: "Build a patio",
    description: "Concrete slab or pavers — sub-base, bedding, and top layer quantities.",
    toolSlugs: ["concrete-calculator", "gravel-calculator", "paver-calculator", "sand-calculator"],
  },
  {
    slug: "build-a-deck",
    title: "Build a deck",
    description: "Decking boards and fence-line planning on a compacted base.",
    toolSlugs: ["decking-calculator", "gravel-calculator", "fence-calculator"],
  },
  {
    slug: "paint-a-room",
    title: "Paint a room",
    description: "Paint quantity and a materials-plus-labour cost check.",
    toolSlugs: ["paint-calculator", "paint-cost-calculator", "drywall-calculator"],
  },
  {
    slug: "install-new-flooring",
    title: "Install new flooring",
    description: "Laminate boxes or floor tile counts with waste included.",
    toolSlugs: ["flooring-calculator", "tile-calculator", "cost-estimator"],
  },
  {
    slug: "refresh-a-garden-bed",
    title: "Refresh a garden bed",
    description: "Mulch depth and coverage for beds and borders.",
    toolSlugs: ["mulch-calculator", "paver-calculator"],
  },
  {
    slug: "re-roof-the-house",
    title: "Re-roof the house",
    description: "Pitch-adjusted area, bundles, and a planning cost roll-up.",
    toolSlugs: ["roofing-calculator", "cost-estimator"],
  },
];
