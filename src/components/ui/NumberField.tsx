"use client";

import { useId } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  helperText?: string;
  error?: string;
}

export function NumberField({
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 1,
  helperText,
  error,
}: NumberFieldProps) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  function clamp(next: number) {
    let v = next;
    if (Number.isFinite(min)) v = Math.max(min, v);
    if (typeof max === "number") v = Math.min(max, v);
    return v;
  }

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
        {label}
      </label>
      <div
        className={`flex items-stretch rounded-[var(--radius-sm)] border bg-surface ${
          error ? "border-danger" : "border-border-strong focus-within:border-accent"
        }`}
      >
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          min={min}
          max={max}
          step={step}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          aria-invalid={Boolean(error)}
          onChange={(e) => {
            const parsed = parseFloat(e.target.value);
            onChange(Number.isFinite(parsed) ? clamp(parsed) : NaN);
          }}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[16px] font-medium text-text outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {unit && (
          <span className="flex items-center border-l border-border px-3 text-sm font-medium text-text-3">
            {unit}
          </span>
        )}
        <div className="flex flex-col border-l border-border">
          <button
            type="button"
            aria-label={`Increase ${label}`}
            onClick={() => onChange(clamp((Number.isFinite(value) ? value : 0) + step))}
            className="flex h-1/2 min-h-[22px] w-9 items-center justify-center text-text-3 hover:bg-surface-2 hover:text-text"
          >
            +
          </button>
          <button
            type="button"
            aria-label={`Decrease ${label}`}
            onClick={() => onChange(clamp((Number.isFinite(value) ? value : 0) - step))}
            className="flex h-1/2 min-h-[22px] w-9 items-center justify-center border-t border-border text-text-3 hover:bg-surface-2 hover:text-text"
          >
            −
          </button>
        </div>
      </div>
      {error ? (
        <p id={errorId} className="mt-1.5 flex items-center gap-1 text-[13px] font-medium text-danger">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 6v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10" cy="13.5" r="1" fill="currentColor" />
          </svg>
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="mt-1.5 text-[13px] text-text-3">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
