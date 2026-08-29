import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Faq } from "@/components/ui/Faq";
import { AdSlot } from "@/components/ui/AdSlot";
import { ToolCard } from "@/components/ui/ToolCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { guides as seedGuides } from "@/lib/data/guides";
import { getCatalog } from "@/lib/cms/catalog";

export function generateStaticParams() {
  return seedGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const catalog = await getCatalog();
  const guide = catalog.guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle || guide.title,
    description: guide.metaDescription || guide.description,
    path: `/guides/${guide.slug}`,
    index: guide.index !== false,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const catalog = await getCatalog();
  const guide = catalog.guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedTools = guide.relatedTools
    .map((s) => catalog.tools.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const path = `/guides/${guide.slug}`;

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.description,
            path,
            updated: guide.updated,
          }),
          faqJsonLd(guide.faq),
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text sm:text-[38px]">{guide.title}</h1>
      <p className="mt-2 text-[13px] text-text-3">
        {SITE_NAME} editorial · Updated {guide.updated}
      </p>
      <p className="mt-4 text-[17px] leading-relaxed text-text-2">{guide.intro}</p>

      {guide.sections.length > 2 && (
        <nav aria-label="Table of contents" className="mt-6 rounded-[var(--radius-md)] border border-border bg-surface-2 p-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-text-3">On this page</p>
          <ul className="mt-2 flex flex-col gap-1">
            {guide.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slugify(s.heading)}`} className="text-[13.5px] text-accent-strong hover:underline">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article className="mt-8 flex flex-col gap-10">
        {guide.sections.map((section, i) => (
          <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-24">
            <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.body.map((p, j) => (
                <p key={j} className="text-[15.5px] leading-relaxed text-text-2">
                  {p}
                </p>
              ))}
            </div>
            {i === 1 && (
              <div className="mt-6">
                <AdSlot />
              </div>
            )}
          </section>
        ))}

        {relatedTools.length > 0 && (
          <section>
            <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">Use a calculator for this</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedTools.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-[22px] font-bold tracking-[-0.01em] text-text">Frequently asked questions</h2>
          <div className="mt-4">
            <Faq items={guide.faq} />
          </div>
        </section>
      </article>

      <div className="mt-10">
        <AdSlot />
      </div>
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
