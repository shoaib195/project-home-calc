import type { FaqItem } from "@/lib/types";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-[var(--radius-md)] border border-border">
      {items.map((item, i) => (
        <details key={i} className="group px-4 py-3.5 open:pb-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-text marker:content-none">
            {item.question}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0 text-text-3 transition-transform duration-150 group-open:rotate-45"
              aria-hidden="true"
            >
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="mt-2 text-[15px] leading-relaxed text-text-2">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
