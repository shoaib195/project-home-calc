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
      <p className="mt-2 max-w-2xl text-[16px] text-text-2">
        {catalog.tools.length} free calculators across {liveCategories.length} categories. Browse by category below, or use search to jump straight to a tool.
      </p>

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
