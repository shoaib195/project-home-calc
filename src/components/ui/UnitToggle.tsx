"use client";

import type { UnitSystem } from "@/lib/format";

interface UnitToggleProps {
  value: UnitSystem;
  onChange: (value: UnitSystem) => void;
}

export function UnitToggle({ value, onChange }: UnitToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Unit system"
      className="inline-flex rounded-[var(--radius-sm)] border border-border-strong bg-surface p-0.5"
    >
      {(
        [
          { key: "imperial", label: "ft / in (US)" },
          { key: "metric", label: "m / cm (UK)" },
        ] as const
      ).map((opt) => (
        <button
          key={opt.key}
          type="button"
          role="radio"
          aria-checked={value === opt.key}
          onClick={() => onChange(opt.key)}
          className={`rounded-[3px] px-3 py-1.5 text-[13px] font-semibold transition-colors duration-150 ${
            value === opt.key
              ? "bg-accent text-white"
              : "text-text-2 hover:bg-surface-2"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
