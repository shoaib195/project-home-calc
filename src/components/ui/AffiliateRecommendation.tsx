interface Recommendation {
  name: string;
  description: string;
  href?: string;
}

export function AffiliateRecommendation({
  title = "Partner recommendations",
  items,
}: {
  title?: string;
  items: Recommendation[];
}) {
  const live = items.filter((item) => Boolean(item.href));
  if (live.length === 0) return null;

  return (
    <aside className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-display text-[15px] font-bold text-text">{title}</h3>
        <span className="rounded-[3px] bg-accent-2-tint px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.04em] text-accent-2">
          Partner links
        </span>
      </div>
      <p className="mb-3 text-[12.5px] text-text-3">
        Optional shopping links. They are not part of the calculation and do not change the numbers above.
      </p>
      <ul className="flex flex-col gap-3">
        {live.map((item) => (
          <li key={item.name} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
            <a href={item.href} className="group flex items-start justify-between gap-4" rel="sponsored nofollow">
              <span>
                <span className="block text-[14px] font-semibold text-text group-hover:text-accent-strong">{item.name}</span>
                <span className="block text-[13px] text-text-3">{item.description}</span>
              </span>
              <span className="shrink-0 text-[13px] font-semibold text-accent-2">View</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
