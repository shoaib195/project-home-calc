interface MetricProps {
  label: string;
  value: string;
  emphasis?: "primary" | "secondary";
  helperText?: string;
}

export function Metric({ label, value, emphasis = "secondary", helperText }: MetricProps) {
  const isPrimary = emphasis === "primary";
  return (
    <div>
      <div className="text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">{label}</div>
      <div
        className={`tabular-nums font-mono font-bold text-accent-strong ${
          isPrimary ? "text-[clamp(32px,5vw,44px)] leading-none mt-1.5" : "text-[22px] leading-none mt-1"
        }`}
      >
        {value}
      </div>
      {helperText && <p className="mt-1.5 text-[13px] text-text-3">{helperText}</p>}
    </div>
  );
}
