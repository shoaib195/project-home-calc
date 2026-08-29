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
      <p className="mt-2 max-w-2xl text-[16px] text-text-2">
        Waste factors, slab thickness, paint quantity, roof packs, and how to read a materials line on a quote — for US and UK projects.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </div>
  );
}
