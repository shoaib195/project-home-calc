import type { Category, CategorySlug, FaqItem, Guide, Tool } from "@/lib/types";

export type ContentStatus = "draft" | "published";

export interface ToolRow {
  slug: string;
  category_slug: string;
  name: string;
  short_description: string;
  intro: string;
  synonyms: string[];
  formula_explanation: string[];
  methodology: string;
  worked_example: { title: string; steps: string[] };
  faq: FaqItem[];
  related_tools: string[];
  related_guides: string[];
  status: ContentStatus;
  updated_at: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  robots_index: boolean;
}

export interface GuideRow {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: FaqItem[];
  related_tools: string[];
  status: ContentStatus;
  updated_at: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  robots_index: boolean;
}

export interface CategoryRow {
  slug: string;
  name: string;
  description: string;
  sort_order: number;
}

export interface PageRow {
  slug: string;
  path: string;
  title: string;
  body: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  robots_index: boolean;
  status: ContentStatus;
  updated_at: string;
}

export interface AuditRow {
  id: string;
  actor_email: string | null;
  action: string;
  entity_type: string;
  entity_id: string;
  detail: string | null;
  created_at: string;
}

export function mapTool(row: ToolRow): Tool {
  return {
    slug: row.slug,
    category: row.category_slug as CategorySlug,
    name: row.name,
    shortDescription: row.short_description,
    intro: row.intro,
    synonyms: row.synonyms ?? [],
    formulaExplanation: row.formula_explanation ?? [],
    methodology: row.methodology,
    workedExample: row.worked_example ?? { title: "", steps: [] },
    faq: row.faq ?? [],
    relatedTools: row.related_tools ?? [],
    relatedGuides: row.related_guides ?? [],
    updated: row.updated_at,
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    keywords: row.meta_keywords || undefined,
    index: row.robots_index !== false,
  };
}

export function mapGuide(row: GuideRow): Guide {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    intro: row.intro,
    sections: row.sections ?? [],
    faq: row.faq ?? [],
    relatedTools: row.related_tools ?? [],
    updated: row.updated_at,
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    keywords: row.meta_keywords || undefined,
    index: row.robots_index !== false,
  };
}

export function mapCategory(row: CategoryRow): Category {
  return {
    slug: row.slug as CategorySlug,
    name: row.name,
    description: row.description,
  };
}

export function toolToRow(tool: Tool, status: ContentStatus = "published"): ToolRow {
  return {
    slug: tool.slug,
    category_slug: tool.category,
    name: tool.name,
    short_description: tool.shortDescription,
    intro: tool.intro,
    synonyms: tool.synonyms,
    formula_explanation: tool.formulaExplanation,
    methodology: tool.methodology,
    worked_example: tool.workedExample,
    faq: tool.faq,
    related_tools: tool.relatedTools,
    related_guides: tool.relatedGuides,
    status,
    updated_at: tool.updated,
    meta_title: tool.metaTitle ?? tool.name,
    meta_description: tool.metaDescription ?? tool.shortDescription,
    meta_keywords: tool.keywords ?? tool.synonyms.join(", "),
    robots_index: tool.index !== false,
  };
}

export function guideToRow(guide: Guide, status: ContentStatus = "published"): GuideRow {
  return {
    slug: guide.slug,
    title: guide.title,
    description: guide.description,
    intro: guide.intro,
    sections: guide.sections,
    faq: guide.faq,
    related_tools: guide.relatedTools,
    status,
    updated_at: guide.updated,
    meta_title: guide.metaTitle ?? guide.title,
    meta_description: guide.metaDescription ?? guide.description,
    meta_keywords: guide.keywords ?? "",
    robots_index: guide.index !== false,
  };
}
