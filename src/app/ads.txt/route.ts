import { adsensePublisherId } from "@/lib/ads";

/**
 * Always serve a valid AdSense ads.txt line.
 * Falls back to the known publisher ID so deploys without the env var
 * still authorize Google inventory (matches public/ads.txt).
 */
const FALLBACK_PUBLISHER_ID = "pub-5758764143676042";

export function GET() {
  const pub = adsensePublisherId() || FALLBACK_PUBLISHER_ID;
  const body = `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
