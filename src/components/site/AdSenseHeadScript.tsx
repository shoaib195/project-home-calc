import { adsenseClientId } from "@/lib/ads";

/** Static AdSense snippet in `<head>` — required for AdSense site verification crawlers. */
export function AdSenseHeadScript() {
  const client = adsenseClientId();
  if (!client) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
