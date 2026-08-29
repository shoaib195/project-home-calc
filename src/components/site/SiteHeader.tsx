"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLiveCategories } from "@/lib/data/categories";
import { tools as seedTools } from "@/lib/data/tools";
import { SearchBox } from "@/components/site/SearchBox";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { Category, Tool } from "@/lib/types";

export function SiteHeader({ tools, categories }: { tools?: Tool[]; categories?: Category[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState<string | null>(null);
  const catalogTools = tools ?? seedTools;
  const liveCategories = categories ?? getLiveCategories();

  function toolsIn(slug: string) {
    return catalogTools.filter((t) => t.category === slug);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    if (!drawerOpen) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <>
    <header
      className={`sticky top-0 z-[100] border-b bg-surface/95 backdrop-blur transition-[border-color,box-shadow] duration-150 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-[1280px] items-center gap-6 px-4 transition-[height] duration-150 sm:px-6 ${scrolled ? "h-14" : "h-20"}`}>
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-[17px] font-extrabold tracking-[-0.01em] text-text">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] bg-accent text-white">
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 17.5V7l7.5-5 7.5 5v10.5M2.5 17.5h15M7 17.5v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="hidden sm:inline">Project Home Calc</span>
        </Link>

        <nav className="relative hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              className="flex min-h-11 items-center gap-1 rounded-[var(--radius-sm)] px-3 py-2 text-[14px] font-semibold text-text-2 hover:bg-surface-2 hover:text-text"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Calculators
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute left-0 top-full w-[640px] rounded-[var(--radius-md)] border border-border bg-surface p-5">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  {liveCategories.map((cat) => {
                    const catTools = toolsIn(cat.slug);
                    return (
                      <div key={cat.slug}>
                        <Link
                          href={`/calculators/${cat.slug}`}
                          className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.03em] text-text hover:text-accent-strong"
                        >
                          <CategoryIcon slug={cat.slug} />
                          {cat.name}
                        </Link>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {catTools.slice(0, 4).map((t) => (
                            <li key={t.slug}>
                              <Link
                                href={`/calculators/${t.category}/${t.slug}`}
                                className="text-[13.5px] text-text-2 hover:text-accent-strong hover:underline"
                              >
                                {t.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <Link href="/calculators" className="text-[13.5px] font-semibold text-accent-strong hover:underline">
                    View all calculators →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/guides" className="rounded-[var(--radius-sm)] px-3 py-2 text-[14px] font-semibold text-text-2 hover:bg-surface-2 hover:text-text">
            Guides
          </Link>
          <Link href="/projects" className="rounded-[var(--radius-sm)] px-3 py-2 text-[14px] font-semibold text-text-2 hover:bg-surface-2 hover:text-text">
            Projects
          </Link>
        </nav>

        <div className="hidden max-w-xs flex-1 lg:block">
          <SearchBox size="md" />
        </div>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          <ThemeToggle />
          <Link href="/account/sign-in" className="rounded-[var(--radius-sm)] px-3 py-2 text-[14px] font-semibold text-text-2 hover:bg-surface-2 hover:text-text">
            Sign in
          </Link>
          <Link
            href="/projects"
            className="rounded-[var(--radius-sm)] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-accent-strong"
          >
            Save a project
          </Link>
        </div>

        <div className="ml-auto flex items-center lg:hidden">
          <ThemeToggle compact />
          <Link
            href="/search"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-text-2 hover:bg-surface-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path d="m17 17-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-text-2 hover:bg-surface-2"
          >
            {drawerOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[400] lg:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-ink-950/50"
          />
          <div className="relative z-10 flex h-dvh w-[min(100%,20rem)] flex-col bg-surface pt-[env(safe-area-inset-top)] shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-[16px] font-extrabold text-text">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-text-2 hover:bg-surface-2"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="m4 4 10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.05em] text-text-3">Calculators</p>
              <div className="flex flex-col">
                {liveCategories.map((cat) => {
                  const isOpen = drawerCategory === cat.slug;
                  const catTools = toolsIn(cat.slug);
                  return (
                    <div key={cat.slug} className="border-b border-border">
                      <button
                        onClick={() => setDrawerCategory(isOpen ? null : cat.slug)}
                        aria-expanded={isOpen}
                        className="flex min-h-11 w-full items-center justify-between py-3 text-left text-[15px] font-semibold text-text"
                      >
                        {cat.name}
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                          className={`text-text-3 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="m3 5 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <ul className="pb-3 pl-3">
                          {catTools.map((t) => (
                            <li key={t.slug}>
                              <Link
                                href={`/calculators/${t.category}/${t.slug}`}
                                onClick={() => setDrawerOpen(false)}
                                className="block py-2 text-[14px] text-text-2"
                              >
                                {t.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <Link href="/guides" onClick={() => setDrawerOpen(false)} className="py-3 text-[15px] font-semibold text-text">
                  Guides
                </Link>
                <Link href="/projects" onClick={() => setDrawerOpen(false)} className="py-3 text-[15px] font-semibold text-text">
                  Projects
                </Link>
                <Link href="/about" onClick={() => setDrawerOpen(false)} className="py-3 text-[15px] font-semibold text-text">
                  About
                </Link>
                <Link href="/contact" onClick={() => setDrawerOpen(false)} className="py-3 text-[15px] font-semibold text-text">
                  Contact
                </Link>
                <Link href="/account/sign-in" onClick={() => setDrawerOpen(false)} className="py-3 text-[15px] font-semibold text-text">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="border-t border-border p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <Link
                href="/projects"
                onClick={() => setDrawerOpen(false)}
                className="flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] bg-accent px-4 py-3 text-[15px] font-semibold text-white"
              >
                Save a project
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
