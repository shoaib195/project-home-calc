import type { Metadata } from "next";
import Link from "next/link";
import { SearchBox } from "@/components/site/SearchBox";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { search } from "@/lib/search";
import { getCatalog, liveCategoriesFrom, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("search");
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const catalog = await getCatalog();
  const results = search(q, catalog);
  const liveCategories = liveCategoriesFrom(catalog);

  return (
    <div className="mx-auto max-w-[760px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <h1 className="mt-3 text-[30px] font-extrabold tracking-[-0.015em] text-text">Search</h1>
      <div className="mt-5">
        <SearchBox size="lg" autoFocus placeholder="Search calculators and guides" />
      </div>

      {q && (
        <p className="mt-6 text-[14px] text-text-3">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
        </p>
      )}

      {q && results.length === 0 && (
        <div className="mt-4 rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface-2 p-6">
          <p className="text-[14.5px] font-semibold text-text">No tools match &ldquo;{q}&rdquo;.</p>
          <p className="mt-1 text-[14px] text-text-2">Try a shorter word (paint, roof, patio) or browse a category:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {liveCategories.map((c) => (
              <Link key={c.slug} href={`/calculators/${c.slug}`} className="rounded-[3px] bg-surface-3 px-2.5 py-1 text-[12.5px] font-semibold text-text-2 hover:bg-accent-tint hover:text-accent-strong">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {!q && (
        <p className="mt-6 text-[14px] text-text-2">Type at least two characters. Try “concrete”, “paint”, “roof”, or “budget”.</p>
      )}

      {results.length > 0 && (
        <ul className="mt-6 flex flex-col divide-y divide-border rounded-[var(--radius-md)] border border-border">
          {results.map((result) => {
            const href = result.type === "tool" ? `/calculators/${result.item.category}/${result.item.slug}` : `/guides/${result.item.slug}`;
            const label =
              result.type === "tool"
                ? catalog.categories.find((c) => c.slug === result.item.category)?.name
                : "Guide";
            return (
              <li key={href}>
                <Link href={href} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-surface-2">
                  <span>
                    <span className="block text-[15px] font-semibold text-text">
                      {result.type === "tool" ? result.item.name : result.item.title}
                    </span>
                    <span className="block text-[13.5px] text-text-3">
                      {result.type === "tool" ? result.item.shortDescription : result.item.description}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-[3px] bg-surface-3 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.03em] text-text-3">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
