import type { ReactNode } from "react";

type Tone = "info" | "success" | "warning" | "danger";

const toneStyles: Record<Tone, { bg: string; text: string; icon: ReactNode }> = {
  info: {
    bg: "bg-info-bg",
    text: "text-info",
    icon: (
      <path
        d="M10 9v5m0-8v.01M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  success: {
    bg: "bg-success-bg",
    text: "text-success",
    icon: (
      <path
        d="m5 10.5 3 3 7-7M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  warning: {
    bg: "bg-warning-bg",
    text: "text-warning",
    icon: (
      <path
        d="M10 7.5v4M10 14.5v.01M8.6 2.9 1.8 15a1.5 1.5 0 0 0 1.3 2.2h13.8a1.5 1.5 0 0 0 1.3-2.2L11.4 2.9a1.5 1.5 0 0 0-2.8 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  danger: {
    bg: "bg-danger-bg",
    text: "text-danger",
    icon: (
      <path
        d="M10 6v5m0 3.01.01-.01M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
};

interface AlertProps {
  tone: Tone;
  title?: string;
  children: ReactNode;
}

export function Alert({ tone, title, children }: AlertProps) {
  const styles = toneStyles[tone];
  return (
    <div className={`flex gap-3 rounded-[var(--radius-md)] px-4 py-3.5 ${styles.bg}`} role={tone === "danger" ? "alert" : undefined}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`mt-0.5 shrink-0 ${styles.text}`} aria-hidden="true">
        {styles.icon}
      </svg>
      <div className={`text-[14px] leading-snug ${styles.text}`}>
        {title && <p className="font-semibold">{title}</p>}
        <div className="text-text-2">{children}</div>
      </div>
    </div>
  );
}
