import Link from "next/link";
import type { Tool } from "@/lib/types";
import { getCategory } from "@/lib/data/categories";

export function ToolCard({ tool }: { tool: Tool }) {
  const category = getCategory(tool.category);
  return (
    <Link
      href={`/calculators/${tool.category}/${tool.slug}`}
      className="group flex flex-col gap-2 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.04em] text-text-3">
        {category?.name}
      </span>
      <h3 className="font-display text-[17px] font-bold text-text group-hover:text-accent-strong">
        {tool.name}
      </h3>
      <p className="text-[14px] leading-snug text-text-2">{tool.shortDescription}</p>
      <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-accent-strong">
        Calculate
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
          <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
