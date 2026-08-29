"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { saveToolAction } from "@/lib/cms/actions";
import { SeoFields } from "@/components/admin/SeoFields";
import type { ToolRow } from "@/lib/cms/types";
import type { Category } from "@/lib/types";

function lines(value: string) {
  return value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function ToolEditor({ initial, categories }: { initial: ToolRow; categories: Category[] }) {
  const router = useRouter();
  const [row, setRow] = useState(initial);
  const [synonyms, setSynonyms] = useState(initial.synonyms.join("\n"));
  const [formula, setFormula] = useState(initial.formula_explanation.join("\n\n"));
  const [exampleTitle, setExampleTitle] = useState(initial.worked_example.title);
  const [exampleSteps, setExampleSteps] = useState(initial.worked_example.steps.join("\n"));
  const [faqText, setFaqText] = useState(
    initial.faq.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")
  );
  const [relatedTools, setRelatedTools] = useState(initial.related_tools.join("\n"));
  const [relatedGuides, setRelatedGuides] = useState(initial.related_guides.join("\n"));
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(false);

  function parseFaq(text: string) {
    const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
    return blocks.map((block) => {
      const q = block.match(/Q:\s*([\s\S]*?)\nA:/i)?.[1]?.trim() ?? "";
      const a = block.match(/A:\s*([\s\S]*)$/i)?.[1]?.trim() ?? "";
      return { question: q, answer: a };
    }).filter((item) => item.question && item.answer);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSaved(false);
    const payload: ToolRow = {
      ...row,
      synonyms: lines(synonyms),
      formula_explanation: formula.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean),
      worked_example: { title: exampleTitle, steps: lines(exampleSteps) },
      faq: parseFaq(faqText),
      related_tools: lines(relatedTools),
      related_guides: lines(relatedGuides),
      meta_title: row.meta_title ?? "",
      meta_description: row.meta_description ?? "",
      meta_keywords: row.meta_keywords ?? "",
      robots_index: row.robots_index !== false,
      updated_at: new Date().toISOString().slice(0, 10),
    };
    const result = await saveToolAction(payload);
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
          Published tools show on the public site within about a minute. Draft tools stay hidden.
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
      <Field label="Name">
        <input className={inputClass} value={row.name} onChange={(e) => setRow({ ...row, name: e.target.value })} required />
      </Field>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Slug">
          <input className={inputClass} value={row.slug} onChange={(e) => setRow({ ...row, slug: e.target.value })} required />
        </Field>
        <Field label="Category">
          <select
            className={inputClass}
            value={row.category_slug}
            onChange={(e) => setRow({ ...row, category_slug: e.target.value })}
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Short description">
        <textarea className={inputClass} rows={2} value={row.short_description} onChange={(e) => setRow({ ...row, short_description: e.target.value })} />
      </Field>
      <Field label="Introduction">
        <textarea className={inputClass} rows={4} value={row.intro} onChange={(e) => setRow({ ...row, intro: e.target.value })} />
      </Field>
      <Field label="Synonyms (one per line)">
        <textarea className={inputClass} rows={4} value={synonyms} onChange={(e) => setSynonyms(e.target.value)} />
      </Field>
      <Field label="How it is calculated (paragraphs separated by a blank line)">
        <textarea className={inputClass} rows={8} value={formula} onChange={(e) => setFormula(e.target.value)} />
      </Field>
      <Field label="Formula">
        <textarea className={`${inputClass} font-mono text-[14px]`} rows={3} value={row.methodology} onChange={(e) => setRow({ ...row, methodology: e.target.value })} />
      </Field>
      <Field label="Worked example title">
        <input className={inputClass} value={exampleTitle} onChange={(e) => setExampleTitle(e.target.value)} />
      </Field>
      <Field label="Worked example steps (one per line)">
        <textarea className={inputClass} rows={5} value={exampleSteps} onChange={(e) => setExampleSteps(e.target.value)} />
      </Field>
      <Field label="FAQ (Q: … then A: …, blank line between items)">
        <textarea className={inputClass} rows={10} value={faqText} onChange={(e) => setFaqText(e.target.value)} />
      </Field>
      <Field label="Related tool slugs">
        <textarea className={inputClass} rows={3} value={relatedTools} onChange={(e) => setRelatedTools(e.target.value)} />
      </Field>
      <Field label="Related guide slugs">
        <textarea className={inputClass} rows={3} value={relatedGuides} onChange={(e) => setRelatedGuides(e.target.value)} />
      </Field>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving…" : "Save tool"}
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
