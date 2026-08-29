export const SITE_NAME = "Project Home Calc";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://projecthomecalc.com";
export const CONTACT_EMAIL = "hello@projecthomecalc.com";
export const SITE_TAGLINE = "Simple, accurate tools for planning your next home project.";
export const SITE_DESCRIPTION =
  "Free calculators and practical tools to estimate materials, costs, and quantities for home improvement projects in the US and UK.";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}
