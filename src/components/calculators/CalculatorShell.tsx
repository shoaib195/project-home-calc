import type { ReactNode } from "react";

interface CalculatorShellProps {
  inputs: ReactNode;
  results: ReactNode;
}

export function CalculatorShell({ inputs, results }: CalculatorShellProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.9fr)] lg:items-start">
      <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 sm:p-6">
        {inputs}
      </div>
      <div className="rounded-[var(--radius-md)] border border-accent/40 bg-accent-tint/50 p-5 sm:p-6 lg:sticky lg:top-24">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.06em] text-accent-strong">Results</p>
        {results}
      </div>
    </div>
  );
}

export function AdvancedFields({ children }: { children: ReactNode }) {
  return (
    <details className="group mt-4 rounded-[var(--radius-sm)] border border-border bg-surface-2">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 py-3 text-[13.5px] font-semibold text-text-2 marker:content-none [&::-webkit-details-marker]:hidden">
        Add cost details
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-text-3 transition-transform duration-150 group-open:rotate-45" aria-hidden="true">
          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="flex flex-col gap-4 border-t border-border p-4">{children}</div>
    </details>
  );
}
