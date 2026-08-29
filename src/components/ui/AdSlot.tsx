"use client";

import { useEffect, useRef, useState } from "react";
import { adsenseClientId, readStoredConsent } from "@/lib/ads";

interface AdSlotProps {
  label?: string;
  placement?: "inline" | "leaderboard" | "sidebar";
  /** Optional AdSense ad slot ID; falls back to NEXT_PUBLIC_ADSENSE_SLOT_* env */
  slotId?: string;
}

const heights: Record<NonNullable<AdSlotProps["placement"]>, number> = {
  inline: 120,
  leaderboard: 90,
  sidebar: 250,
};

function slotFromEnv(placement: NonNullable<AdSlotProps["placement"]>): string | undefined {
  const map = {
    inline: process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE,
    leaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD,
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR,
  };
  return map[placement]?.trim() || undefined;
}

/**
 * Ad region: nothing until publisher ID + slot ID + accepted cookies.
 * Never shows empty “Advertisement” shells during AdSense review.
 */
export function AdSlot({ label = "Advertisement", placement = "inline", slotId }: AdSlotProps) {
  const client = adsenseClientId();
  const resolvedSlot = slotId ?? slotFromEnv(placement);
  const [allowed, setAllowed] = useState(false);
  const pushed = useRef(false);
  const height = heights[placement];

  useEffect(() => {
    function refresh() {
      setAllowed(readStoredConsent() === "accepted");
    }
    refresh();
    function onConsent(e: Event) {
      setAllowed((e as CustomEvent).detail === "accepted");
    }
    window.addEventListener("phc-consent", onConsent);
    return () => window.removeEventListener("phc-consent", onConsent);
  }, []);

  useEffect(() => {
    if (!client || !allowed || !resolvedSlot || pushed.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      /* AdSense may throw if blocked */
    }
  }, [client, allowed, resolvedSlot]);

  if (!client || !allowed || !resolvedSlot) return null;

  return (
    <aside
      aria-label="Advertisement"
      data-ad-placement={placement}
      className="my-6 overflow-hidden rounded-[var(--radius-sm)] border border-dashed border-border bg-surface-2"
    >
      <p className="border-b border-border px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-text-3">
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: height }}
        data-ad-client={client}
        data-ad-slot={resolvedSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
