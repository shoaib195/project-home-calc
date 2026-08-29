import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent" | "amber";
}

const tones = {
  neutral: "bg-surface-3 text-text-2",
  accent: "bg-accent-tint text-accent-strong",
  amber: "bg-accent-2-tint text-accent-2",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[3px] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.04em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
