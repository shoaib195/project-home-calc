import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GuideCard } from "@/components/ui/GuideCard";
import { getCatalog, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("guides");
}

export default async function GuidesIndexPage() {
  const catalog = await getCatalog();
  const list = catalog.guides;
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <h1 className="mt-3 text-[36px] font-extrabold tracking-[-0.015em] text-text">Guides</h1>
      <div className="mt-3 max-w-3xl space-y-4 text-[16px] leading-relaxed text-text-2">
        <p>
          These guides sit next to the calculators. Use them when you need the measuring method, a waste percentage that
          matches the layout, or a plain explanation of why two quotes disagree on materials. There are{" "}
          {list.length} articles covering patios, driveways, paint, wallpaper, roofing, fencing, brickwork, insulation,
          and more.
        </p>
        <p>
          Each article is written for a real planning decision — patio thickness, paint coats, topsoil depth, wallpaper
          pattern match, flooring packs — with worked numbers you can re-run in the linked tool. They are planning notes,
          not structural designs or local price guarantees. Where US and UK units differ, the guide says so and points
          you back to the calculator’s unit toggle.
        </p>
        <p>
          Prefer a calculator first? Browse the{" "}
          <a href="/calculators" className="font-semibold text-accent-strong hover:underline">
            full calculator list
          </a>
          , then come back here when the result needs context. For site-wide assumptions, see{" "}
          <a href="/methodology" className="font-semibold text-accent-strong hover:underline">
            how we calculate
          </a>
          ,{" "}
          <a href="/data-sources" className="font-semibold text-accent-strong hover:underline">
            data sources
          </a>
          , and{" "}
          <a href="/reference-charts" className="font-semibold text-accent-strong hover:underline">
            reference charts
          </a>
          .
        </p>
        <p>
          Spotted an error in a worked example or a missing topic?{" "}
          <a href="/contact" className="font-semibold text-accent-strong hover:underline">
            Contact us
          </a>{" "}
          with the guide URL and what you expected — we update pages when defaults or methods change.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </div>
  );
}
