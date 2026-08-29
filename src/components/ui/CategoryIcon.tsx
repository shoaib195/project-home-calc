import type { CategorySlug } from "@/lib/types";

const paths: Record<CategorySlug, string> = {
  construction: "M3 17 17 3m-4 0 4 4m-14 10 4 4M3 13l4 4M13 3 3 13",
  landscaping: "M10 18v-6M10 12C6 12 4 9 4 5c4 0 7 2 7 6M10 12c0-4 3-7 7-7 0 4-2 7-7 7Z",
  flooring: "M2.5 2.5h15v15h-15v-15Zm5 0v15m5-15v15M2.5 7.5h15m-15 5h15",
  painting: "M4 12V6a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8m-4 3h5a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
  roofing: "M2 10 10 3l8 7M4 9v8h12V9M8.5 17v-4h3v4",
  "deck-fence": "M4 3v14M9 3v14M14 3v14M2 7h5m2 0h5M2 13h5m2 0h5",
  "home-improvement": "M3 9.5 10 4l7 5.5V17a1 1 0 0 1-1 1h-3v-5H7v5H4a1 1 0 0 1-1-1V9.5Z",
  "cost-estimation": "M5 2.5h10v15H5v-15Zm2 3.5h6M7 9h6M7 12.5h3.5M7 15.5h2",
};

export function CategoryIcon({ slug }: { slug: CategorySlug }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={paths[slug]} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
