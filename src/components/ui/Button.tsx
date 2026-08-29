import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold transition-colors duration-150 ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:bg-surface-3 disabled:text-text-disabled disabled:border-transparent";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong border border-transparent",
  secondary:
    "bg-surface text-text border border-border-strong hover:bg-surface-2",
  ghost: "bg-transparent text-accent-strong hover:bg-accent-tint border border-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-[15px] min-h-11",
  sm: "px-3 py-1.5 text-sm min-h-9",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
