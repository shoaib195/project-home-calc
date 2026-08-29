import { adsensePublisherId } from "@/lib/ads";

/** Serves /ads.txt for AdSense authorization when NEXT_PUBLIC_ADSENSE_CLIENT is set. */
export function GET() {
  const pub = adsensePublisherId();
  if (!pub) {
    return new Response(
      "# Project Home Calc — ads.txt\n# Set NEXT_PUBLIC_ADSENSE_CLIENT after AdSense approval to publish the publisher line.\n",
      {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      },
    );
  }

  const body = `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
