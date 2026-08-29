interface AdSlotProps {
  label?: string;
  placement?: "inline" | "leaderboard" | "sidebar";
}

const heights: Record<NonNullable<AdSlotProps["placement"]>, number> = {
  inline: 120,
  leaderboard: 90,
  sidebar: 250,
};

export function AdSlot({ label = "Advertisement", placement = "inline" }: AdSlotProps) {
  const height = heights[placement];
  return (
    <aside
      aria-label="Advertisement"
      style={{ minHeight: height }}
      className="flex items-center justify-center rounded-[var(--radius-sm)] border border-dashed border-border bg-surface-2 px-3"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-3">{label}</span>
    </aside>
  );
}
