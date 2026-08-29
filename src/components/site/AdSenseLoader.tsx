"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { adsenseClientId, readStoredConsent } from "@/lib/ads";

/** Loads the AdSense library only when publisher ID is set and the visitor accepted optional cookies. */
export function AdSenseLoader() {
  const client = adsenseClientId();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    function refresh() {
      setAllowed(readStoredConsent() === "accepted");
    }
    refresh();
    function onConsent(e: Event) {
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === "accepted");
    }
    window.addEventListener("phc-consent", onConsent);
    return () => window.removeEventListener("phc-consent", onConsent);
  }, []);

  if (!client || !allowed) return null;

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
