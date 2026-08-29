const DEFAULT_SITE_URL = "https://projecthomecalc.com";

/**
 * Resolve a valid absolute site origin.
 * Empty NEXT_PUBLIC_SITE_URL on Vercel must not crash `new URL("")`.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* invalid — fall through */
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const withProtocol = vercel.startsWith("http") ? vercel : `https://${vercel}`;
    try {
      return new URL(withProtocol).origin;
    } catch {
      /* fall through */
    }
  }

  return DEFAULT_SITE_URL;
}

export const SITE_NAME = "Project Home Calc";
export const SITE_URL = resolveSiteUrl();
export const CONTACT_EMAIL = "hello@projecthomecalc.com";
export const SITE_TAGLINE = "Free calculators for material quantities and planning costs.";
export const SITE_DESCRIPTION =
  "Free US and UK calculators for concrete, paint, flooring, roofing, gravel, and project cost — with the formula shown on every tool page.";

/** Display dates on legal pages (en-GB), e.g. 2026-08-29 → 29 August 2026 */
export function formatDisplayDate(isoOrText: string): string {
  const parsed = new Date(isoOrText);
  if (!Number.isNaN(parsed.getTime()) && /^\d{4}-\d{2}-\d{2}/.test(isoOrText)) {
    return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }
  return isoOrText;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}
