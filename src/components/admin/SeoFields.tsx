import type { ContentStatus } from "@/lib/cms/types";

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-border-strong bg-surface px-3 py-2.5 text-[15px] text-text outline-none focus:border-accent";

export function SeoFields({
  metaTitle,
  metaDescription,
  metaKeywords,
  robotsIndex,
  status,
  onChange,
}: {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  robotsIndex: boolean;
  status: ContentStatus;
  onChange: (patch: {
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    robots_index?: boolean;
    status?: ContentStatus;
  }) => void;
}) {
  return (
    <section className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-5">
      <h2 className="font-display text-[16px] font-bold text-text">Search listing</h2>
      <p className="mt-1 text-[13px] text-text-3">Title, description, and keywords for this URL. Indexing controls whether Google is asked to list it.</p>
      <div className="mt-4 flex flex-col gap-4">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Meta title</span>
          <input className={inputClass} value={metaTitle} onChange={(e) => onChange({ meta_title: e.target.value })} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Meta description</span>
          <textarea className={inputClass} rows={3} value={metaDescription} onChange={(e) => onChange({ meta_description: e.target.value })} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Keywords</span>
          <input
            className={inputClass}
            value={metaKeywords}
            onChange={(e) => onChange({ meta_keywords: e.target.value })}
            placeholder="concrete, slab, patio — comma separated"
          />
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Publish</span>
            <select className={inputClass} value={status} onChange={(e) => onChange({ status: e.target.value as ContentStatus })}>
              <option value="published">Published — visible on the site</option>
              <option value="draft">Draft — hidden from nav and sitemap</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Google index</span>
            <select
              className={inputClass}
              value={robotsIndex ? "index" : "noindex"}
              onChange={(e) => onChange({ robots_index: e.target.value === "index" })}
            >
              <option value="index">Index this page</option>
              <option value="noindex">Noindex — do not list in Google</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}

export { inputClass as adminInputClass };
