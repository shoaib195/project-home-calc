import { tools } from "@/lib/data/tools";
import { guides } from "@/lib/data/guides";
import { getCategory } from "@/lib/data/categories";
import type { Tool, Guide } from "@/lib/types";

export interface ToolResult {
  type: "tool";
  item: Tool;
  score: number;
}
export interface GuideResult {
  type: "guide";
  item: Guide;
  score: number;
}
export type SearchResult = ToolResult | GuideResult;

function scoreMatch(haystack: string, q: string): number {
  const h = haystack.toLowerCase();
  if (h === q) return 100;
  if (h.startsWith(q)) return 80;
  if (h.includes(q)) return 50;
  return 0;
}

function toolScore(tool: Tool, q: string): number {
  const category = getCategory(tool.category);
  const name = scoreMatch(tool.name, q);
  const synonym = Math.max(0, ...tool.synonyms.map((s) => scoreMatch(s, q)));
  const categoryScore = category ? scoreMatch(category.name, q) : 0;
  const description = tool.shortDescription.toLowerCase().includes(q) ? 15 : 0;
  const intro = tool.intro.toLowerCase().includes(q) ? 8 : 0;
  return Math.max(name, synonym, categoryScore) + description + intro;
}

function guideScore(guide: Guide, q: string): number {
  const title = scoreMatch(guide.title, q);
  const description = guide.description.toLowerCase().includes(q) ? 20 : 0;
  const intro = guide.intro.toLowerCase().includes(q) ? 10 : 0;
  return title + description + intro;
}

export function search(query: string, corpus?: { tools?: Tool[]; guides?: Guide[] }): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const toolList = corpus?.tools ?? tools;
  const guideList = corpus?.guides ?? guides;

  const toolMatches: ToolResult[] = toolList
    .map((item) => ({ type: "tool" as const, item, score: toolScore(item, q) }))
    .filter((r) => r.score > 0);

  const guideMatches: GuideResult[] = guideList
    .map((item) => ({ type: "guide" as const, item, score: guideScore(item, q) }))
    .filter((r) => r.score > 0);

  return [...toolMatches, ...guideMatches].sort((a, b) => b.score - a.score);
}
