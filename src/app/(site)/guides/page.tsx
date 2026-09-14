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
      <div className="mt-3 max-w-3xl space-y-3 text-[16px] leading-relaxed text-text-2">
        <p>
          These guides sit next to the calculators. Use them when you need the measuring method, a waste percentage that
          matches the layout, or a plain explanation of why two quotes disagree on materials.
        </p>
        <p>
          Each article is written for a real planning decision — patio thickness, paint coats, topsoil depth, wallpaper
          pattern match, flooring packs — with worked numbers you can re-run in the linked tool. They are planning notes,
          not structural designs or local price guarantees.
        </p>
        <p>
          Prefer a calculator first? Browse the{" "}
          <a href="/calculators" className="font-semibold text-accent-strong hover:underline">
            full calculator list
          </a>
          , then come back here when the result needs context.
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
