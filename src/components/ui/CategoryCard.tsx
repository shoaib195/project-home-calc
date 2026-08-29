import Link from "next/link";
import type { Category } from "@/lib/types";
import { getToolsByCategory } from "@/lib/data/tools";
import { CategoryIcon } from "@/components/ui/CategoryIcon";

export function CategoryCard({ category, toolCount }: { category: Category; toolCount?: number }) {
  const count = toolCount ?? getToolsByCategory(category.slug).length;
  return (
    <Link
      href={`/calculators/${category.slug}`}
      className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-tint text-accent-strong">
        <CategoryIcon slug={category.slug} />
      </span>
      <span>
        <h3 className="font-display text-[16px] font-bold text-text group-hover:text-accent-strong">
          {category.name}
        </h3>
        <p className="mt-1 text-[13.5px] leading-snug text-text-2">{category.description}</p>
        <span className="mt-2 block text-[12px] font-semibold text-text-3">
          {count > 0 ? `${count} calculator${count === 1 ? "" : "s"}` : "Coming soon"}
        </span>
      </span>
    </Link>
  );
}
