import type { Metadata } from "next";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { getCatalog } from "@/lib/cms/catalog";

export const metadata: Metadata = { title: "Pinterest pins" };

export default async function AdminPinsPage() {
  const catalog = await getCatalog();

  const items = [
    ...catalog.tools.map((t) => ({ slug: t.slug, label: t.name, kind: "Calculator" })),
    ...catalog.guides.map((g) => ({ slug: g.slug, label: g.title, kind: "Guide" })),
  ];

  return (
    <div>
      <AdminPageHeader
        title="Pinterest pins"
        description={`${items.length} ready-made 1000×1500 pin images — one per calculator and guide. Right-click a preview and save it, or use Download, then upload to Pinterest and link it back to that page.`}
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/pin/${item.slug}`}
              alt={`Pinterest pin for ${item.label}`}
              width={1000}
              height={1500}
              className="w-full"
            />
            <div className="p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-3">
                {item.kind}
              </p>
              <p className="mt-1 text-[13.5px] font-semibold leading-snug text-text">{item.label}</p>
              <a
                href={`/pin/${item.slug}`}
                download={`${item.slug}.png`}
                className="mt-2 inline-block text-[13px] font-semibold text-accent-strong hover:underline"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
