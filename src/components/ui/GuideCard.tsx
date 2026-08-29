import Link from "next/link";
import type { Guide } from "@/lib/types";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col gap-2 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.04em] text-text-3">Guide</span>
      <h3 className="font-display text-[17px] font-bold text-text group-hover:text-accent-strong">
        {guide.title}
      </h3>
      <p className="text-[14px] leading-snug text-text-2">{guide.description}</p>
    </Link>
  );
}
