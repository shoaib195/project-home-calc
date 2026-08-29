import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CookieConsent } from "@/components/site/CookieConsent";
import { AdSenseLoader } from "@/components/site/AdSenseLoader";
import { getCatalog, liveCategoriesFrom } from "@/lib/cms/catalog";

export const revalidate = 60;

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const catalog = await getCatalog();
  const liveCategories = liveCategoriesFrom(catalog);

  return (
    <>
      <SiteHeader tools={catalog.tools} categories={liveCategories} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter tools={catalog.tools} categories={liveCategories} />
      <CookieConsent />
      <AdSenseLoader />
    </>
  );
}
