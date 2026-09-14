import type { Metadata } from "next";
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
      <div className="mt-3 max-w-3xl space-y-3 text-[16px] leading-relaxed text-text-2">
        <p>
          {catalog.tools.length} free calculators across {liveCategories.length} categories — concrete, gravel, sand,
          topsoil, mulch, paint, wallpaper, flooring, roofing, decking, fencing, and planning costs.
        </p>
        <p>
          Every tool page shows the formula, a worked example, and a FAQ. US and UK units are supported. Results are
          planning figures: confirm with a supplier or contractor before you order. For the “why” behind waste and
          thickness, see the{" "}
          <a href="/guides" className="font-semibold text-accent-strong hover:underline">
            guides
          </a>
          .
        </p>
        <p>Browse by category below, or use search in the header to jump straight to a tool.</p>
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
