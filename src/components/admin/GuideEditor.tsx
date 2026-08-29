"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { saveGuideAction } from "@/lib/cms/actions";
import { SeoFields } from "@/components/admin/SeoFields";
import type { GuideRow } from "@/lib/cms/types";

function lines(value: string) {
  return value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function GuideEditor({ initial }: { initial: GuideRow }) {
  const router = useRouter();
  const [row, setRow] = useState(initial);
  const [sectionsText, setSectionsText] = useState(
    initial.sections.map((s) => `# ${s.heading}\n${s.body.join("\n\n")}`).join("\n\n")
  );
  const [faqText, setFaqText] = useState(
    initial.faq.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")
  );
  const [relatedTools, setRelatedTools] = useState(initial.related_tools.join("\n"));
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(false);

  function parseSections(text: string) {
    const parts = text.split(/\n(?=# )/);
    return parts
      .map((part) => {
        const linesIn = part.trim().split("\n");
        const heading = linesIn[0]?.replace(/^#\s*/, "").trim() ?? "";
        const body = linesIn.slice(1).join("\n").trim().split(/\n\s*\n/).filter(Boolean);
        return { heading, body };
      })
      .filter((s) => s.heading);
  }

  function parseFaq(text: string) {
    return text
      .split(/\n\s*\n/)
      .map((block) => {
        const q = block.match(/Q:\s*([\s\S]*?)\nA:/i)?.[1]?.trim() ?? "";
        const a = block.match(/A:\s*([\s\S]*)$/i)?.[1]?.trim() ?? "";
        return { question: q, answer: a };
      })
      .filter((item) => item.question && item.answer);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSaved(false);
    const payload: GuideRow = {
      ...row,
      sections: parseSections(sectionsText),
      faq: parseFaq(faqText),
      related_tools: lines(relatedTools),
      meta_title: row.meta_title ?? "",
      meta_description: row.meta_description ?? "",
      meta_keywords: row.meta_keywords ?? "",
      robots_index: row.robots_index !== false,
      updated_at: new Date().toISOString().slice(0, 10),
    };
    const result = await saveGuideAction(payload);
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
          Keep this written like a person who has actually priced or built the job — not a keyword article.
        </Alert>
      )}
      <SeoFields
        metaTitle={row.meta_title ?? ""}
        metaDescription={row.meta_description ?? ""}
        metaKeywords={row.meta_keywords ?? ""}
        robotsIndex={row.robots_index !== false}
        status={row.status}
        onChange={(patch) => setRow({ ...row, ...patch })}
      />
      <Field label="Title">
        <input className={inputClass} value={row.title} onChange={(e) => setRow({ ...row, title: e.target.value })} required />
      </Field>
      <Field label="Slug">
        <input className={inputClass} value={row.slug} onChange={(e) => setRow({ ...row, slug: e.target.value })} required />
      </Field>
      <Field label="Short description">
        <textarea className={inputClass} rows={2} value={row.description} onChange={(e) => setRow({ ...row, description: e.target.value })} />
      </Field>
      <Field label="Introduction">
        <textarea className={inputClass} rows={4} value={row.intro} onChange={(e) => setRow({ ...row, intro: e.target.value })} />
      </Field>
      <Field label="Sections (# Heading, then paragraphs, blank line between sections)">
        <textarea className={inputClass} rows={16} value={sectionsText} onChange={(e) => setSectionsText(e.target.value)} />
      </Field>
      <Field label="FAQ (Q: then A:)">
        <textarea className={inputClass} rows={8} value={faqText} onChange={(e) => setFaqText(e.target.value)} />
      </Field>
      <Field label="Related tool slugs">
        <textarea className={inputClass} rows={3} value={relatedTools} onChange={(e) => setRelatedTools(e.target.value)} />
      </Field>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving…" : "Save guide"}
      </Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-border-strong bg-surface px-3 py-2.5 text-[15px] text-text outline-none focus:border-accent";
