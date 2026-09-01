import Link from "next/link";
import { getLiveCategories } from "@/lib/data/categories";
import { tools as seedTools } from "@/lib/data/tools";
import { SocialLinks } from "@/components/site/SocialLinks";
import type { Category, Tool } from "@/lib/types";

export function SiteFooter({ tools, categories }: { tools?: Tool[]; categories?: Category[] }) {
  const catalogTools = tools ?? seedTools;
  const liveCategories = categories ?? getLiveCategories();
  const topTools = catalogTools.slice(0, 6);

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-[16px] font-extrabold text-text">
              <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-accent text-white">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 17.5V7l7.5-5 7.5 5v10.5M2.5 17.5h15M7 17.5v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Project Home Calc
            </Link>
            <p className="mt-3 max-w-[28ch] text-[13.5px] leading-snug text-text-3">
              Free calculators for material quantities and planning costs.
            </p>
            <SocialLinks className="mt-5" showLabel />
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-text-3">Calculators</p>
            <ul className="mt-3 flex flex-col gap-2">
              {topTools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/calculators/${t.category}/${t.slug}`} className="text-[13.5px] text-text-2 hover:text-accent-strong">
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/calculators" className="text-[13.5px] font-semibold text-accent-strong">
                  View all
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-text-3">Categories</p>
            <ul className="mt-3 flex flex-col gap-2">
              {liveCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/calculators/${c.slug}`} className="text-[13.5px] text-text-2 hover:text-accent-strong">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-text-3">Resources</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li><Link href="/guides" className="text-[13.5px] text-text-2 hover:text-accent-strong">Guides</Link></li>
              <li><Link href="/methodology" className="text-[13.5px] text-text-2 hover:text-accent-strong">How we calculate</Link></li>
              <li><Link href="/reference-charts" className="text-[13.5px] text-text-2 hover:text-accent-strong">Reference charts</Link></li>
              <li><Link href="/data-sources" className="text-[13.5px] text-text-2 hover:text-accent-strong">Data sources</Link></li>
              <li><Link href="/suggest-calculator" className="text-[13.5px] text-text-2 hover:text-accent-strong">Suggest a calculator</Link></li>
              <li><Link href="/about" className="text-[13.5px] text-text-2 hover:text-accent-strong">About</Link></li>
              <li><Link href="/sitemap" className="text-[13.5px] text-text-2 hover:text-accent-strong">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-text-3">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li><Link href="/about" className="text-[13.5px] text-text-2 hover:text-accent-strong">About</Link></li>
              <li><Link href="/contact" className="text-[13.5px] text-text-2 hover:text-accent-strong">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-[13.5px] text-text-2 hover:text-accent-strong">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-[13.5px] text-text-2 hover:text-accent-strong">Terms</Link></li>
              <li><Link href="/legal/cookies" className="text-[13.5px] text-text-2 hover:text-accent-strong">Cookies</Link></li>
              <li><Link href="/legal/disclaimer" className="text-[13.5px] text-text-2 hover:text-accent-strong">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-[12.5px] text-text-3">
            © {new Date().getFullYear()} Project Home Calc. Estimates are planning figures, not quotes — confirm quantities and pricing with your supplier or contractor.
          </p>
        </div>
      </div>
    </footer>
  );
}
