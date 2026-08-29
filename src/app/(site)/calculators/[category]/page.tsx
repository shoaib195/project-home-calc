import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ToolCard } from "@/components/ui/ToolCard";
import { GuideCard } from "@/components/ui/GuideCard";
import { AdSlot } from "@/components/ui/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getLiveCategories } from "@/lib/data/categories";
import { getCatalog, getResolvedPage, liveCategoriesFrom } from "@/lib/cms/catalog";

export function generateStaticParams() {
  return getLiveCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const catalog = await getCatalog();
  const category = catalog.categories.find((c) => c.slug === slug);
  if (!category) return {};
  const page = await getResolvedPage(`category-${slug}`);
  return pageMetadata({
    title: page?.meta_title || `${category.name} Calculators`,
    description: page?.meta_description || category.description,
    path: `/calculators/${category.slug}`,
    index: page ? page.robots_index && page.status === "published" : true,
    keywords: page?.meta_keywords,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const catalog = await getCatalog();
  const category = catalog.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const catTools = catalog.tools.filter((t) => t.category === category.slug);
  if (catTools.length === 0) notFound();

  const relatedGuides = catalog.guides.filter((g) => catTools.some((t) => g.relatedTools.includes(t.slug)));
  const otherCategories = liveCategoriesFrom(catalog).filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Calculators", path: "/calculators" },
          { name: category.name, path: `/calculators/${category.slug}` },
        ])}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: category.name }]} />
      <h1 className="mt-3 text-[36px] font-extrabold tracking-[-0.015em] text-text">{category.name} Calculators</h1>
      <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-text-2">{category.description}</p>

      <section className="mt-10">
        <h2 className="text-[13px] font-bold uppercase tracking-[0.04em] text-text-3">
          {catTools.length} calculator{catTools.length === 1 ? "" : "s"}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catTools.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </section>

      <div className="mt-10">
        <AdSlot />
      </div>

      {relatedGuides.length > 0 && (
        <section className="mt-10">
          <h2 className="text-[20px] font-bold tracking-[-0.01em] text-text">Related guides</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 border-t border-border pt-8">
        <h2 className="text-[13px] font-bold uppercase tracking-[0.04em] text-text-3">Related categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {otherCategories.map((c) => (
            <a
              key={c.slug}
              href={`/calculators/${c.slug}`}
              className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-1.5 text-[13.5px] font-semibold text-text-2 hover:border-accent hover:text-accent-strong"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
