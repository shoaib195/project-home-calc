import type { Metadata } from "next";
import Link from "next/link";
import { SearchBox } from "@/components/site/SearchBox";
import { ToolCard } from "@/components/ui/ToolCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { GuideCard } from "@/components/ui/GuideCard";
import { AdSlot } from "@/components/ui/AdSlot";
import { Faq } from "@/components/ui/Faq";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { adsEnabled } from "@/lib/ads";
import { getCatalog, liveCategoriesFrom, pageSeoMetadata } from "@/lib/cms/catalog";
import { bundles } from "@/lib/data/bundles";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("home");
}

const popularSlugs = [
  "concrete-calculator",
  "paint-calculator",
  "flooring-calculator",
  "roofing-calculator",
  "mulch-calculator",
  "cost-estimator",
];

const homeFaq = [
  {
    question: "Do I need to create an account to use a calculator?",
    answer: "No. Open a tool, enter dimensions, and read the result. Nothing here requires a login.",
  },
  {
    question: "How accurate are the cost estimates?",
    answer:
      "They’re planning ranges from typical national prices you can override. Confirm with a local supplier or contractor before you buy — regional pricing moves a lot.",
  },
  {
    question: "Can I use these tools for both US and UK measurements?",
    answer:
      "Yes. Each calculator has a unit toggle (feet/inches or metres/centimetres). Switching converts what you already typed; it doesn’t wipe the form. Cost currency follows the unit system.",
  },
  {
    question: "Is this site free to use?",
    answer:
      "Yes. Calculators and guides are free. If ads are turned on later, they’re labelled and kept off the Calculate controls.",
  },
];

export default async function HomePage() {
  const catalog = await getCatalog();
  const popularTools = popularSlugs
    .map((slug) => catalog.tools.find((t) => t.slug === slug))
    .filter((t): t is (typeof catalog.tools)[number] => Boolean(t));
  const liveCategories = liveCategoriesFrom(catalog);
  const { guides, tools } = catalog;

  return (
    <div>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <section className="relative overflow-hidden border-b border-border bg-surface-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-accent-2">
              Free calculators for the US &amp; UK
            </p>
            <h1 className="mt-4 text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-text">
              Work out materials before you order.
            </h1>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-text-2">
              Concrete, paint, flooring, roofing, gravel, and more — quantity plus a planning cost range, with the
              formula on the same page so you can check it.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchBox size="lg" placeholder="Search calculators — try “concrete”, “paint”, or “roof”" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <LinkButton href="/calculators">Browse calculators</LinkButton>
              <LinkButton href="#browse-by-project" variant="secondary">
                Browse by project
              </LinkButton>
            </div>
            <p className="mt-5 text-[13px] text-text-3">No account required. Results update as you type.</p>
          </div>
          <div className="hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 lg:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-text-3">Example — concrete slab</p>
            <p className="mt-3 font-display text-[15px] font-bold text-text">10 ft × 10 ft × 4 in</p>
            <div className="mt-5 border-t border-border pt-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-text-3">Concrete required</p>
              <p className="mt-1 font-mono text-[40px] font-bold leading-none text-accent-strong">1.23 yd³</p>
              <p className="mt-3 text-[13px] text-text-2">Recommended with 10% waste: 1.36 yd³ · estimate, not a quote</p>
            </div>
            <Link href="/calculators/construction/concrete-calculator" className="mt-6 inline-block text-[14px] font-semibold text-accent-strong hover:underline">
              Open the concrete calculator →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Popular calculators</h2>
          <Link href="/calculators" className="hidden text-[14px] font-semibold text-accent-strong hover:underline sm:block">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section id="browse-by-project" className="border-y border-border bg-surface-2 py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Browse by project</h2>
          <p className="mt-2 max-w-xl text-[15px] text-text-2">
            A patio usually needs concrete and gravel. A room redo often needs paint and flooring. Pick a bundle and open the tools you need.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <div key={bundle.slug} className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
                <h3 className="font-display text-[16px] font-bold text-text">{bundle.title}</h3>
                <p className="mt-1 text-[13.5px] text-text-2">{bundle.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {bundle.toolSlugs.map((slug) => {
                    const tool = tools.find((t) => t.slug === slug);
                    if (!tool) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/calculators/${tool.category}/${tool.slug}`}
                        className="rounded-[3px] bg-accent-tint px-2.5 py-1 text-[12.5px] font-semibold text-accent-strong hover:bg-surface-3"
                      >
                        {tool.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Browse by trade</h2>
        <p className="mt-2 max-w-xl text-[15px] text-text-2">
          Construction, painting, flooring, roofing, landscaping, and cost — open a category or search from the header.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {liveCategories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              toolCount={tools.filter((t) => t.category === cat.slug).length}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2 py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Three steps</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Pick a calculator", body: "Search “concrete” or “paint”, or open a category." },
              { step: "2", title: "Enter dimensions", body: "Use feet or metres. Switching units converts what you typed." },
              { step: "3", title: "Read the estimate", body: "Quantity, optional cost range, and the formula underneath." },
            ].map((s) => (
              <div key={s.step}>
                <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-accent font-mono text-[15px] font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-[17px] font-bold text-text">{s.title}</h3>
                <p className="mt-1 text-[14.5px] text-text-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {adsEnabled() ? (
        <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
          <AdSlot placement="leaderboard" />
        </section>
      ) : null}

      <section className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">What’s on each tool page</h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-text-2">
              The calculator, the formula in plain text, a worked example, and the assumptions behind any cost range.
              If the number looks odd, you can see why — then change an input or ask a supplier.
            </p>
            <Link href="/about" className="mt-4 inline-block text-[14px] font-semibold text-accent-strong hover:underline">
              How we calculate →
            </Link>
          </div>
          <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-6">
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-[14.5px] text-text-2">
                  <strong className="text-text">Formula on the page</strong> — not only a result.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-[14.5px] text-text-2">
                  <strong className="text-text">Costs shown as ranges</strong> — local prices won’t match a national default.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-[14.5px] text-text-2">
                  <strong className="text-text">No account</strong> — tools work in the browser.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Guides on materials &amp; budgets</h2>
          <Link href="/guides" className="hidden text-[14px] font-semibold text-accent-strong hover:underline sm:block">
            View all guides →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guides.slice(0, 4).map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
        <Link href="/guides" className="mt-4 inline-block text-[14px] font-semibold text-accent-strong hover:underline sm:hidden">
          View all guides →
        </Link>
      </section>

      <section className="mx-auto max-w-[720px] px-4 py-16 sm:px-6">
        <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Frequently asked questions</h2>
        <div className="mt-6">
          <Faq items={homeFaq} />
        </div>
      </section>

      <section className="border-t border-border bg-accent-tint">
        <div className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6">
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-text">Need a quantity?</h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-text-2">
            Start with concrete or paint — most people do — or browse the full list.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/calculators/construction/concrete-calculator">Concrete calculator</LinkButton>
            <LinkButton href="/calculators" variant="secondary">
              All calculators
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-success" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="m6.5 10 2.3 2.3L14 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
