import { ImageResponse } from "next/og";
import { getCatalog } from "@/lib/cms/catalog";
import { SITE_NAME } from "@/lib/site";

/** Pinterest's preferred pin ratio is 2:3. */
const WIDTH = 1000;
const HEIGHT = 1500;

const NAVY = "#10141b";
const NAVY_2 = "#1d4074";
const AMBER = "#d8890f";
const MUTED = "#a9b2bd";

/** Long guide titles need to step down or they overflow the card. */
function titleSize(title: string): number {
  if (title.length > 60) return 76;
  if (title.length > 42) return 88;
  return 104;
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const catalog = await getCatalog();

  const tool = catalog.tools.find((t) => t.slug === slug);
  const guide = catalog.guides.find((g) => g.slug === slug);
  if (!tool && !guide) return new Response("Not found", { status: 404 });

  const category = tool ? catalog.categories.find((c) => c.slug === tool.category) : undefined;
  const kicker = tool ? (category?.name ?? "Calculator") : "Guide";
  const title = tool ? tool.name : guide!.title;
  const blurb = tool ? tool.shortDescription : guide!.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          backgroundImage: `linear-gradient(145deg, ${NAVY_2} 0%, ${NAVY} 55%)`,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 10, height: 44, backgroundColor: AMBER }} />
          <div
            style={{
              marginLeft: 20,
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: AMBER,
            }}
          >
            {kicker}
          </div>
        </div>

        {/* Grows to fill the card so the pin never reads as half-empty. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            paddingBottom: 60,
          }}
        >
          <div
            style={{
              fontSize: titleSize(title),
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#ffffff",
            }}
          >
            {title}
          </div>

          <div style={{ marginTop: 44, fontSize: 38, lineHeight: 1.45, color: MUTED }}>{blurb}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, backgroundColor: "#2d3541" }} />
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#ffffff" }}>{SITE_NAME}</div>
              <div style={{ marginTop: 8, fontSize: 26, color: MUTED }}>
                Free calculator · US &amp; UK units
              </div>
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: AMBER }}>
              projecthomecalc.com
            </div>
          </div>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT },
  );
}
