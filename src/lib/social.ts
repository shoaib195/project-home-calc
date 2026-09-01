export type SocialNetwork = "linkedin" | "x" | "facebook" | "instagram";

export interface SocialLink {
  id: SocialNetwork;
  label: string;
  href: string;
}

/** Official Project Home Calc social profiles — single source of truth. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "linkedin",
    label: "Project Home Calc on LinkedIn",
    href: "https://www.linkedin.com/company/project-home-calc/",
  },
  {
    id: "x",
    label: "Project Home Calc on X",
    href: "https://x.com/projecthomecalc",
  },
  {
    id: "facebook",
    label: "Project Home Calc on Facebook",
    href: "https://www.facebook.com/projecthomecalc",
  },
  {
    id: "instagram",
    label: "Project Home Calc on Instagram",
    href: "https://www.instagram.com/projecthomecalc/",
  },
] as const;

export function socialProfileUrls(): string[] {
  return SOCIAL_LINKS.map((link) => link.href);
}
