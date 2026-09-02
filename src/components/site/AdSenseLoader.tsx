import Script from "next/script";
import { adsenseClientId } from "@/lib/ads";

/**
 * Google AdSense library — matches the official snippet in AdSense → Get code.
 * Loads when NEXT_PUBLIC_ADSENSE_CLIENT is set so Google can verify the site.
 * Consent Mode v2 (ConsentDefaultsScript) keeps ad_storage denied until the visitor accepts optional cookies.
 */
export function AdSenseLoader() {
  const client = adsenseClientId();
  if (!client) return null;

  return (
    <Script
      id="adsense-loader"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
