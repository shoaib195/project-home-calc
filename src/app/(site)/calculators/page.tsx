import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ToolCard } from "@/components/ui/ToolCard";
import { getCatalog, liveCategoriesFrom, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("calculators");
}

export default async function CalculatorsIndexPage() {
  const catalog = await getCatalog();
  const liveCategories = liveCategoriesFrom(catalog);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators" }]} />
      <h1 className="mt-3 text-[36px] font-extrabold tracking-[-0.015em] text-text">All calculators</h1>
      <div className="mt-3 max-w-3xl space-y-4 text-[16px] leading-relaxed text-text-2">
        <p>
          {catalog.tools.length} free calculators across {liveCategories.length} categories — concrete, gravel, sand,
          topsoil, mulch, paint, wallpaper, flooring, roofing, decking, fencing, and planning costs. Each tool is built
          for the same job: turn tape-measure inputs into an order quantity you can take to a supplier.
        </p>
        <p>
          Every tool page shows the method <em>before</em> the interactive calculator, then a formula, worked example,
          and FAQ. US (feet/inches, yards, tons) and UK (metres, cubic metres, tonnes) units are supported; switching
          units converts what you already typed. Cost lines are planning bands from editable national defaults — not a
          live quote and not a promise of what you will pay locally.
        </p>
        <p>
          Start with a category below if you know the trade, or use search in the header for “concrete”, “paint”, or
          “roof”. When two contractor quotes disagree on thickness, waste, or base depth, open a{" "}
          <Link href="/guides" className="font-semibold text-accent-strong hover:underline">
            guide
          </Link>{" "}
          for the context behind the number. See also{" "}
          <Link href="/methodology" className="font-semibold text-accent-strong hover:underline">
            how we calculate
          </Link>{" "}
          and the{" "}
          <Link href="/legal/disclaimer" className="font-semibold text-accent-strong hover:underline">
            disclaimer
          </Link>
          .
        </p>
        <p>
          These tools do not replace a site visit, structural design, or building-control approval. Confirm quantities
          before you order, especially for load-bearing slabs, roofs, and retaining work.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-14">
        {liveCategories.map((cat) => {
          const catTools = catalog.tools.filter((t) => t.category === cat.slug);
          return (
            <section key={cat.slug} id={cat.slug}>
              <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">{cat.name}</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catTools.map((t) => (
                  <ToolCard key={t.slug} tool={t} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
