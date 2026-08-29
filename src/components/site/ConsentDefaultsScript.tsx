import Script from "next/script";

/**
 * Sets Google Consent Mode v2 defaults before any ad tags.
 * Pairs with CookieConsent updates via gtag('consent','update',...).
 */
export function ConsentDefaultsScript() {
  const code = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`;

  return (
    <Script id="phc-consent-defaults" strategy="beforeInteractive">
      {code}
    </Script>
  );
}
