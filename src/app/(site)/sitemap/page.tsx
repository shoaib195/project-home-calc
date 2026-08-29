import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getCatalog, liveCategoriesFrom, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("sitemap");
}

export default async function HtmlSitemapPage() {
  const catalog = await getCatalog();
  const liveCategories = liveCategoriesFrom(catalog);

  return (
    <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text">Sitemap</h1>
      <p className="mt-2 text-[16px] text-text-2">
        {catalog.tools.length} calculators and {catalog.guides.length} guides. Search engines can also read{" "}
        <a href="/sitemap.xml" className="font-semibold text-accent-strong underline">
          sitemap.xml
        </a>
        .
      </p>

      <section className="mt-10">
        <h2 className="text-[18px] font-bold text-text">Company</h2>
        <ul className="mt-3 flex flex-col gap-2 text-[15px]">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/contact", "Contact"],
            ["/guides", "Guides"],
            ["/legal/privacy", "Privacy"],
            ["/legal/terms", "Terms"],
            ["/legal/cookies", "Cookies"],
            ["/legal/disclaimer", "Disclaimer"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="text-accent-strong hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-[18px] font-bold text-text">Calculators</h2>
        <div className="mt-4 flex flex-col gap-6">
          {liveCategories.map((cat) => (
            <div key={cat.slug}>
              <Link href={`/calculators/${cat.slug}`} className="font-semibold text-text hover:text-accent-strong">
                {cat.name}
              </Link>
              <ul className="mt-2 flex flex-col gap-1 pl-4">
                {catalog.tools
                  .filter((t) => t.category === cat.slug)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link href={`/calculators/${t.category}/${t.slug}`} className="text-[14.5px] text-accent-strong hover:underline">
                        {t.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-[18px] font-bold text-text">Guides</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {catalog.guides.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="text-[15px] text-accent-strong hover:underline">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
