import { categories } from "@/lib/data/categories";
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import type { ContentStatus, PageRow } from "@/lib/cms/types";

function page(row: Omit<PageRow, "updated_at"> & { updated_at?: string }): PageRow {
  return { ...row, updated_at: row.updated_at ?? "2026-08-29" };
}

const STATIC: PageRow[] = [
  page({
    slug: "home",
    path: "/",
    title: "Home",
    body: "",
    meta_title: "Material & cost calculators for home projects",
    meta_description: SITE_DESCRIPTION,
    meta_keywords: "home improvement calculator, material estimator, concrete calculator, paint calculator",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "calculators",
    path: "/calculators",
    title: "All Calculators",
    body: "",
    meta_title: "All Calculators",
    meta_description: "Browse every free home improvement and construction calculator on Project Home Calc, organized by category.",
    meta_keywords: "calculators, material quantities, home improvement",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "guides",
    path: "/guides",
    title: "Guides",
    body: "",
    meta_title: "Guides",
    meta_description:
      "How to measure waste, slab thickness, paint quantity, and contractor quote lines — notes that go with the calculators.",
    meta_keywords: "home improvement guides, material estimating",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "about",
    path: "/about",
    title: "About",
    body: `${SITE_NAME} is a free set of material and planning-cost calculators for homeowners and small projects in the US and UK. No account. Pick a tool, enter dimensions, read the quantity — and the formula sits on the same page.

## Who runs it

We write and maintain the calculators and guides ourselves. If a number looks wrong, email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}) with the tool URL and the inputs you used. We don’t invent fake reviews, fake credentials, or fake user counts.

## How a result is produced

Each tool page shows the formula, a worked example, and the assumptions behind any cost range. Cost defaults are typical national prices you can override. Treat them as planning bands, not a supplier quote.

## What we don’t claim

These tools don’t replace a site visit, a structural design, or a local contractor’s price. Confirm quantities before you order, and check code for anything structural. See the [disclaimer](/legal/disclaimer).

## Funding

The site may show labelled ads (for example Google AdSense) and, later, labelled partner links. Ads stay off calculator controls and results. We don’t ask anyone to click ads. Partner blocks stay hidden until a real URL exists.

## Contact

Bugs, missing tools, or privacy requests: [contact](/contact) or [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).`,
    meta_title: "About",
    meta_description: `What ${SITE_NAME} is: free calculators with formulas on the page, labelled estimates, no account.`,
    meta_keywords: "about, methodology, home improvement calculators",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "contact",
    path: "/contact",
    title: "Contact",
    body: `Use this page for calculator corrections, guide feedback, missing-tool requests, and privacy questions.

## Email

Write to [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}). We aim to reply to clear, actionable messages. The form below sends your message by email — we do not keep a separate database of submissions.

## What to include

- The calculator or guide URL
- The inputs you used (if reporting a calculation issue)
- What you expected versus what you saw

For privacy or data requests, say so in the subject line so we can prioritise them.`,
    meta_title: "Contact",
    meta_description: `Get in touch with ${SITE_NAME} about calculator errors, missing tools, or privacy requests.`,
    meta_keywords: "contact, support",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "privacy",
    path: "/legal/privacy",
    title: "Privacy Policy",
    body: `This policy describes how ${SITE_NAME} handles information. It is written for a real website, not as legal advice. If you have a privacy request, email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).

## Who we are

${SITE_NAME} provides free home-improvement calculators and guides. Calculators work entirely in your browser without creating an account.

## What we collect

- **Calculator inputs** are processed in your browser. We do not send dimensions or cost figures to our servers when you use a calculator.
- **Contact messages** you send by email include whatever you put in the message. Use that channel only for information you are comfortable sharing.
- **Contact form** submissions are emailed to us via SMTP. We do not store them in a separate database.
- **Technical logs** may be collected by our hosting provider (for example page requests, IP address, browser type) as part of running a website. We do not use those logs to identify you for marketing.
- **Theme preference** is stored in your browser (localStorage) so light or dark mode persists. It is not sent to us.

## Cookies and advertising

We may use cookies or similar technology for essential site function and, when advertising is enabled, for ads served by **Google AdSense** (or a similar partner). Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.

- Google's use of advertising cookies is described in [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites) and [Google's Advertising Technologies](https://policies.google.com/technologies/ads).
- You can opt out of personalised Google ads at [Google Ads Settings](https://adssettings.google.com).
- You can also visit [aboutads.info](https://www.aboutads.info) for industry opt-out tools where available.

We use a cookie banner and Google Consent Mode so advertising cookies stay off until you choose **Accept**. Choosing **Essential only** keeps advertising storage denied. See our [Cookie Policy](/legal/cookies). We do not sell your personal information. We do not encourage visitors to click ads.

## Affiliate links

Some pages may include labelled partner recommendations. Those links are optional, kept separate from calculator results, and are not shown until a real partner URL exists. If we earn a commission, it does not change calculated quantities.

## Your rights

Depending on where you live (including the UK GDPR and similar US state laws), you may have rights to access, correct, or delete personal information we hold about you. Because calculators do not create an account, the main personal data we might hold is email you send us. Write to ${CONTACT_EMAIL} to make a request. For privacy or data requests, mark the subject clearly.

## Children

This site is intended for adults planning home projects. We do not knowingly collect personal information from children.

## Changes

We will update this page when our practices change. The date at the top is the latest revision.`,
    meta_title: "Privacy Policy",
    meta_description: `How ${SITE_NAME} handles information, cookies, and advertising. Calculator inputs stay in your browser unless you choose to contact us.`,
    meta_keywords: "privacy, cookies, GDPR",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "terms",
    path: "/legal/terms",
    title: "Terms of Use",
    body: `By using ${SITE_NAME} you agree to these terms. If you do not agree, do not use the site. Questions: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).

## The service

We publish free calculators, guides, and related pages to help you plan home improvement work. You may use every calculator and guide without creating an account.

## Estimates only

Every quantity and cost on this site is a **planning estimate**. Results depend on the numbers you enter and on simplified formulas stated on each tool page. They are not a survey, structural design, building-control approval, or a contractor quote. Always confirm with a qualified professional and your supplier before you buy materials or start work. See the [Disclaimer](/legal/disclaimer).

## Acceptable use

Do not misuse the site (for example attempting to disrupt it, scrape it in a way that harms the service, or presenting our results as certified professional output). Calculators are for personal and small-business planning.

## Intellectual property

Site design, copy, and software are owned by ${SITE_NAME} or its licensors. You may not copy the service as a competing product. You may quote short excerpts with attribution when discussing a specific calculation.

## Advertising and partner links

The site may display advertisements and, later, labelled partner links. Ads are not advice. Partner links will not be styled as calculator controls.

## Limitation of liability

To the fullest extent permitted by law, ${SITE_NAME} is not liable for decisions you make using these tools, including material shortages, over-ordering, cost overruns, or construction defects. UK users retain rights that cannot be excluded under consumer law.

## Changes

We may update these terms. Continued use after a change means you accept the updated terms. The date at the top is the latest revision.`,
    meta_title: "Terms of Use",
    meta_description: `Terms for using ${SITE_NAME}, including that every calculator result is a planning estimate, not a professional specification or quote.`,
    meta_keywords: "terms of use",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "cookies",
    path: "/legal/cookies",
    title: "Cookie Policy",
    body: `This page explains cookies and similar storage on ${SITE_NAME}. For personal data more broadly, see the [Privacy Policy](/legal/privacy). Questions: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).

## What we use today

- **Theme preference** — stored in your browser via localStorage (not a third-party cookie) so light or dark mode stays as you left it.
- **Essential hosting cookies** — our hosting or CDN provider may set cookies required to deliver the site securely.

## Consent (Consent Mode)

On first visit we show a cookie banner so you can accept optional advertising cookies or continue with essential storage only. Your choice is stored in your browser under the localStorage key phc-cookie-consent. Clear site data to see the banner again.

We implement Google Consent Mode defaults with advertising storage denied until you choose **Accept**. **Essential only** keeps ad_storage, ad_user_data, and ad_personalization denied. The AdSense script loads only after Accept when a publisher ID is configured.

## Advertising cookies (when enabled)

When Google AdSense is connected and you have accepted optional cookies, Google may use cookies or advertising identifiers to serve and measure ads, including personalised ads based on prior visits to this or other sites.

- Google may use cookies as described in [How Google uses cookies in advertising](https://policies.google.com/technologies/ads).
- Opt out of personalised ads via [Google Ads Settings](https://adssettings.google.com).
- Additional opt-out tools: [aboutads.info](https://www.aboutads.info).

## How to control cookies

You can delete cookies and site data in your browser settings, choose **Essential only** on our banner, or use browser and industry opt-out tools for advertising cookies. Blocking all cookies may affect how some sites remember preferences.

## Changes

We will update this page if we add analytics or advertising cookies. The date at the top is the latest revision.`,
    meta_title: "Cookie Policy",
    meta_description: `How ${SITE_NAME} uses cookies and similar storage, including theme preference and future advertising cookies.`,
    meta_keywords: "cookies, advertising cookies",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "disclaimer",
    path: "/legal/disclaimer",
    title: "Disclaimer",
    body: `${SITE_NAME} publishes calculators and written guides for planning home improvement work. Nothing here is professional engineering, architectural, surveying, or legal advice.

## Estimates are not quotes

Material quantities, waste allowances, and cost ranges are planning figures based on the inputs you provide and the formulas shown on each tool page. Local prices, site conditions, building regulations, and workmanship all change the real number. Confirm quantities and pricing with a supplier or contractor before you order or build.

## Safety and regulations

Structural work, electrical work, gas, roofing at height, and anything covered by building control or local code needs a qualified professional. Do not treat a calculator result as a specification.

## Content accuracy

We explain methodology in plain language and keep “last updated” dates on tools and guides. Formulas can still be simplified. If you spot an error, email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).

## Advertising

Advertisements and any future partner links are not endorsements and are kept visually separate from calculator controls and results. See [Terms of Use](/legal/terms) and the [Privacy Policy](/legal/privacy).`,
    meta_title: "Disclaimer",
    meta_description: `${SITE_NAME} calculators produce planning estimates only. They are not professional advice, quotes, or building-code approvals.`,
    meta_keywords: "disclaimer, estimates",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "sitemap",
    path: "/sitemap",
    title: "Sitemap",
    body: "",
    meta_title: "Sitemap",
    meta_description: "A human-readable map of Project Home Calc calculators, guides, and company pages.",
    meta_keywords: "sitemap",
    robots_index: true,
    status: "published",
  }),
  page({
    slug: "projects",
    path: "/projects",
    title: "Project Planner",
    body: "",
    meta_title: "Project Planner",
    meta_description: "A future place to save calculations from multiple tools into one project. Calculators work today without an account.",
    meta_keywords: "",
    robots_index: false,
    status: "published",
  }),
  page({
    slug: "sign-in",
    path: "/account/sign-in",
    title: "Sign in",
    body: "",
    meta_title: "Sign in",
    meta_description: "Accounts are not required to use Project Home Calc calculators. Sign in will be used later for saved projects.",
    meta_keywords: "",
    robots_index: false,
    status: "published",
  }),
  page({
    slug: "search",
    path: "/search",
    title: "Search",
    body: "",
    meta_title: "Search",
    meta_description: "Search Project Home Calc calculators and guides.",
    meta_keywords: "",
    robots_index: false,
    status: "published",
  }),
];

export function defaultPages(): PageRow[] {
  const categoryPages = categories.map((c) =>
    page({
      slug: `category-${c.slug}`,
      path: `/calculators/${c.slug}`,
      title: `${c.name} Calculators`,
      body: "",
      meta_title: `${c.name} Calculators`,
      meta_description: c.description,
      meta_keywords: c.name.toLowerCase(),
      robots_index: true,
      status: "published" as ContentStatus,
    })
  );
  return [...STATIC, ...categoryPages];
}

export function defaultPage(slug: string): PageRow | undefined {
  return defaultPages().find((p) => p.slug === slug);
}

export function mergePages(stored: PageRow[]): PageRow[] {
  return defaultPages().map((fallback) => {
    const row = stored.find((p) => p.slug === fallback.slug);
    if (!row) return fallback;
    return {
      ...fallback,
      ...row,
      path: row.path || fallback.path,
      body: row.body || fallback.body,
      meta_title: row.meta_title || fallback.meta_title,
      meta_description: row.meta_description || fallback.meta_description,
    };
  });
}
