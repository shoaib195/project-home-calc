import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Faq } from "@/components/ui/Faq";
import { AdSlot } from "@/components/ui/AdSlot";
import { ToolCard } from "@/components/ui/ToolCard";
import { GuideCard } from "@/components/ui/GuideCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, softwareAppJsonLd } from "@/lib/seo";
import { tools as seedTools } from "@/lib/data/tools";
import { getCatalog } from "@/lib/cms/catalog";
import { calculatorRegistry } from "@/components/calculators/registry";

export function generateStaticParams() {
  return seedTools.map((t) => ({ category: t.category, tool: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; tool: string }>;
}): Promise<Metadata> {
  const { category, tool: slug } = await params;
  const catalog = await getCatalog();
  const tool = catalog.tools.find((t) => t.slug === slug);
  if (!tool || tool.category !== category) return {};
  return pageMetadata({
    title: tool.metaTitle || tool.name,
    description: tool.metaDescription || tool.shortDescription,
    path: `/calculators/${tool.category}/${tool.slug}`,
    index: tool.index !== false,
    keywords: tool.keywords,
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ category: string; tool: string }>;
}) {
  const { category: categorySlug, tool: toolSlug } = await params;
  const catalog = await getCatalog();
  const tool = catalog.tools.find((t) => t.slug === toolSlug);
  const category = catalog.categories.find((c) => c.slug === categorySlug);
  if (!tool || !category || tool.category !== categorySlug) notFound();

  const CalculatorComponent = calculatorRegistry[tool.slug];
  const relatedTools = tool.relatedTools
    .map((slug) => catalog.tools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const relatedGuides = catalog.guides.filter((g) => tool.relatedGuides.includes(g.slug));
  const path = `/calculators/${tool.category}/${tool.slug}`;

  return (
    <div className="mx-auto max-w-[1120px] px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: category.name, path: `/calculators/${category.slug}` },
            { name: tool.name, path },
          ]),
          softwareAppJsonLd({ name: tool.name, description: tool.shortDescription, path }),
          faqJsonLd(tool.faq),
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: category.name, href: `/calculators/${category.slug}` },
          { label: tool.name },
        ]}
      />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text sm:text-[38px]">{tool.name}</h1>
      <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-text-2">{tool.intro}</p>

      <div className="mt-6">
        {CalculatorComponent ? (
          <CalculatorComponent />
        ) : (
          <div className="rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface-2 p-8 text-center text-[14px] text-text-2">
            This calculator is being built. Check back soon.
          </div>
        )}
      </div>

      <article className="mt-14 flex flex-col gap-10">
        <section>
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">How this is calculated</h2>
          <div className="mt-3 flex flex-col gap-3">
            {tool.formulaExplanation.map((p, i) => (
              <p key={i} className="max-w-[68ch] text-[15px] leading-relaxed text-text-2">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">Formula &amp; methodology</h2>
          <p className="mt-3 rounded-[var(--radius-sm)] border border-border bg-surface-2 px-4 py-3 font-mono text-[14px] text-text">
            {tool.methodology}
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">Worked example</h2>
          <h3 className="mt-3 font-display text-[16px] font-bold text-text">{tool.workedExample.title}</h3>
          <ol className="mt-2 flex flex-col gap-1.5">
            {tool.workedExample.steps.map((step, i) => (
              <li key={i} className="max-w-[68ch] text-[15px] leading-relaxed text-text-2">
                <span className="mr-2 font-mono text-[13px] font-bold text-accent-strong">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <AdSlot />

        <section>
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">Frequently asked questions</h2>
          <div className="mt-4">
            <Faq items={tool.faq} />
          </div>
        </section>

        <p className="text-[12.5px] text-text-3">Last updated {tool.updated}. Formulas are planning methods — confirm with a supplier before you order.</p>
      </article>

      {(relatedTools.length > 0 || relatedGuides.length > 0) && (
        <section className="mt-14 border-t border-border pt-8">
          {relatedTools.length > 0 && (
            <>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.04em] text-text-3">Related tools</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedTools.map((t) => (
                  <ToolCard key={t.slug} tool={t} />
                ))}
              </div>
            </>
          )}
          {relatedGuides.length > 0 && (
            <>
              <h2 className="mt-8 text-[13px] font-bold uppercase tracking-[0.04em] text-text-3">Related guides</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedGuides.map((g) => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      <div className="mt-10">
        <AdSlot />
      </div>

      <div className="mt-8">
        <Link href={`/calculators/${category.slug}`} className="text-[14px] font-semibold text-accent-strong hover:underline">
          ← Back to {category.name} calculators
        </Link>
      </div>
    </div>
  );
}
