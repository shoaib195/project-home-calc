"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { search } from "@/lib/search";
import { getCategory, getLiveCategories } from "@/lib/data/categories";

interface SearchBoxProps {
  size?: "md" | "lg";
  placeholder?: string;
  autoFocus?: boolean;
  onNavigate?: () => void;
}

export function SearchBox({
  size = "md",
  placeholder = "Search calculators — try “concrete” or “paint”",
  autoFocus,
  onNavigate,
}: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = search(query).slice(0, 7);

  function goToResults() {
    if (query.trim().length === 0) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          goToResults();
        }}
        className={`flex items-center gap-2 rounded-[var(--radius-sm)] border border-border-strong bg-surface ${
          size === "lg" ? "px-4 py-3.5" : "px-3 py-2"
        } focus-within:border-accent`}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-text-3">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="m17 17-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete="list"
          autoFocus={autoFocus}
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className={`w-full min-w-0 bg-transparent text-text outline-none placeholder:text-text-3 ${
            size === "lg" ? "text-[16px]" : "text-[14px]"
          }`}
        />
      </form>

      {open && query.trim().length >= 2 && (
        <div
          id={listboxId}
          className="absolute left-0 right-0 top-full z-[200] mt-2 max-h-[70vh] overflow-y-auto rounded-[var(--radius-md)] border border-border bg-surface shadow-[0_8px_24px_rgba(16,20,27,0.12)]"
        >
          {results.length === 0 ? (
            <div className="p-5">
              <p className="text-[14px] font-medium text-text">
                No tools match &ldquo;{query}&rdquo;.
              </p>
              <p className="mt-1 text-[13px] text-text-3">Try one of these categories instead:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {getLiveCategories().slice(0, 6).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/calculators/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-[3px] bg-surface-2 px-2.5 py-1 text-[12.5px] font-semibold text-text-2 hover:bg-accent-tint hover:text-accent-strong"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <ul className="py-2">
              {results.map((result) => {
                const href =
                  result.type === "tool"
                    ? `/calculators/${result.item.category}/${result.item.slug}`
                    : `/guides/${result.item.slug}`;
                const label = result.type === "tool" ? getCategory(result.item.category)?.name : "Guide";
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => {
                        setOpen(false);
                        onNavigate?.();
                      }}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-surface-2"
                    >
                      <span>
                        <span className="block text-[14px] font-semibold text-text">
                          {result.type === "tool" ? result.item.name : result.item.title}
                        </span>
                        <span className="block text-[12.5px] text-text-3">
                          {result.type === "tool" ? result.item.shortDescription : result.item.description}
                        </span>
                      </span>
                      <span className="shrink-0 rounded-[3px] bg-surface-3 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.03em] text-text-3">
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="mt-1 border-t border-border pt-1">
                <button
                  type="button"
                  onClick={goToResults}
                  className="w-full px-4 py-2.5 text-left text-[13px] font-semibold text-accent-strong hover:bg-surface-2"
                >
                  View all results for &ldquo;{query}&rdquo;
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
