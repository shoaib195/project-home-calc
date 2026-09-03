import type { Metadata } from "next";
import { Public_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/site/ThemeScript";
import { ConsentDefaultsScript } from "@/components/site/ConsentDefaultsScript";
import { AdSenseHeadScript } from "@/components/site/AdSenseHeadScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { GoogleAnalytics } from "@next/third-parties/google";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — free material and cost calculators`,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Material & cost calculators for home projects`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Material & cost calculators for home projects`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@projecthomecalc",
    title: `${SITE_NAME} — Material & cost calculators for home projects`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "KMJuEOoNN44G5ovF-Fr9_CMZwuSWJ-nZXh5VCsgRKBk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${publicSans.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <ConsentDefaultsScript />
        <ThemeScript />
        <AdSenseHeadScript />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[600] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
