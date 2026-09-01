const DEFAULT_SITE_URL = "https://www.projecthomecalc.com";

function isUsableSiteUrl(value: string): boolean {
  try {
    const { hostname, protocol } = new URL(value);
    if (protocol !== "http:" && protocol !== "https:") return false;
    if (!hostname || hostname === "localhost") return false;
    // Preview deployments should not become canonical SEO URLs.
    if (hostname.endsWith(".vercel.app")) return false;
    return true;
  } catch {
    return false;
  }
}

/**
 * Resolve a valid absolute site origin.
 * Empty NEXT_PUBLIC_SITE_URL on Vercel must not crash `new URL("")`.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv && isUsableSiteUrl(fromEnv)) {
    return new URL(fromEnv).origin;
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    const withProtocol = production.startsWith("http") ? production : `https://${production}`;
    if (isUsableSiteUrl(withProtocol)) {
      return new URL(withProtocol).origin;
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const withProtocol = vercel.startsWith("http") ? vercel : `https://${vercel}`;
    if (isUsableSiteUrl(withProtocol)) {
      return new URL(withProtocol).origin;
    }
  }

  return DEFAULT_SITE_URL;
}

export const SITE_NAME = "Project Home Calc";
export const SITE_URL = resolveSiteUrl();
export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL?.trim() || process.env.SMTP_TO?.trim() || "shoaib.octachat@gmail.com";
export const SITE_TAGLINE = "Free calculators for material quantities and planning costs.";
export const SITE_DESCRIPTION =
  "Free construction and material calculators for concrete, gravel, sand, paint, tile, roofing, and 19+ home projects — US and UK units, formulas on every page.";

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
