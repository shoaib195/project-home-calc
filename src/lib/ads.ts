/** AdSense + Consent Mode helpers. Ads stay off until publisher ID is set AND user accepts optional cookies. */

export const CONSENT_STORAGE_KEY = "phc-cookie-consent";

export type CookieConsentValue = "accepted" | "essential";

export function adsenseClientId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
  return id || undefined;
}

/** Publisher ID for ads.txt (pub-xxx from ca-pub-xxx). */
export function adsensePublisherId(): string | undefined {
  const client = adsenseClientId();
  if (!client) return undefined;
  if (client.startsWith("pub-")) return client;
  if (client.startsWith("ca-pub-")) return client.slice(3);
  return undefined;
}

export function adsEnabled(): boolean {
  return Boolean(adsenseClientId());
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    adsbygoogle?: unknown[];
  }
}

export function ensureGtag(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

/** Consent Mode v2 defaults — call once before any ad/analytics tags. */
export function applyConsentDefault(): void {
  ensureGtag();
  window.gtag?.("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
}

export function updateConsentMode(value: CookieConsentValue): void {
  ensureGtag();
  const granted = value === "accepted";
  window.gtag?.("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function readStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (v === "accepted" || v === "essential") return v;
  } catch {
    /* ignore */
  }
  return null;
}
