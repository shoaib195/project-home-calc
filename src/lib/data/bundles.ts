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
    description: "Concrete slab plus a compacted gravel sub-base.",
    toolSlugs: ["concrete-calculator", "gravel-calculator"],
  },
  {
    slug: "build-a-deck",
    title: "Build a deck",
    description: "Decking boards over footings on a compacted base.",
    toolSlugs: ["decking-calculator", "gravel-calculator"],
  },
  {
    slug: "paint-a-room",
    title: "Paint a room",
    description: "Wall paint quantity for a full room, coat by coat.",
    toolSlugs: ["paint-calculator", "drywall-calculator"],
  },
  {
    slug: "install-new-flooring",
    title: "Install new flooring",
    description: "Boxes needed for laminate, hardwood, or vinyl plank.",
    toolSlugs: ["flooring-calculator", "cost-estimator"],
  },
  {
    slug: "refresh-a-garden-bed",
    title: "Refresh a garden bed",
    description: "Mulch depth and coverage for beds and borders.",
    toolSlugs: ["mulch-calculator"],
  },
  {
    slug: "re-roof-the-house",
    title: "Re-roof the house",
    description: "Pitch-adjusted area, bundles, and a planning cost roll-up.",
    toolSlugs: ["roofing-calculator", "cost-estimator"],
  },
];
