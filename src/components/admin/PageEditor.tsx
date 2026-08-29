"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { SeoFields, adminInputClass } from "@/components/admin/SeoFields";
import { savePageAction } from "@/lib/cms/actions";
import type { PageRow } from "@/lib/cms/types";

export function PageEditor({ initial }: { initial: PageRow }) {
  const router = useRouter();
  const [row, setRow] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSaved(false);
    const result = await savePageAction({
      ...row,
      updated_at: new Date().toISOString().slice(0, 10),
    });
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSaved(true);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-3xl flex-col gap-5">
      {error && (
        <Alert tone="danger" title="Could not save">
          {error}
        </Alert>
      )}
      {saved && (
        <Alert tone="success" title="Saved">
          Meta tags go live on the public URL. Body copy is used on About, Contact, and legal pages.
        </Alert>
      )}
      <SeoFields
        metaTitle={row.meta_title}
        metaDescription={row.meta_description}
        metaKeywords={row.meta_keywords}
        robotsIndex={row.robots_index}
        status={row.status}
        onChange={(patch) => setRow({ ...row, ...patch })}
      />
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Title</label>
        <input className={adminInputClass} value={row.title} onChange={(e) => setRow({ ...row, title: e.target.value })} />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Public path</label>
        <input className={adminInputClass} value={row.path} readOnly />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">Body</label>
        <textarea
          rows={16}
          className={adminInputClass}
          value={row.body}
          onChange={(e) => setRow({ ...row, body: e.target.value })}
          placeholder={row.body ? undefined : "Leave blank to keep the designed layout (home, calculator hubs)."}
        />
        <p className="mt-1.5 text-[12.5px] text-text-3">Use ## for headings. Calculator pages keep their interactive layout; edit those under Calculators.</p>
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving…" : "Save page"}
      </Button>
    </form>
  );
}
