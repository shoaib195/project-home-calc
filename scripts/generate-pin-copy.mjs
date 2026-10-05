/**
 * Builds public/pinterest/PIN-COPY.md — ready Title / Description / Link / Tags
 * for every calculator and guide pin image.
 *
 * Usage: node scripts/generate-pin-copy.mjs
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "src", "lib", "data");
const outDir = join(root, "public", "pinterest");
const SIZE = "1000x1500";
const SITE = "https://www.projecthomecalc.com";

const BOARD_BY_CATEGORY = {
  construction: "Concrete & Slab Calculators",
  landscaping: "Topsoil & Garden Bed Planning",
  flooring: "Flooring & Tile Planning",
  painting: "Paint & Wallpaper Calculators",
  roofing: "Roofing Estimates",
  "deck-fence": "Decking & Fence Projects",
  "home-improvement": "Home Renovation Budgeting",
  "cost-estimation": "Home Renovation Budgeting",
};

function boardForGuide(slug, title) {
  const s = `${slug} ${title}`.toLowerCase();
  if (/gravel|driveway|crushed/.test(s)) return "Gravel & Driveway Projects";
  if (/topsoil|mulch|paver|garden|lawn|sand/.test(s)) return "Topsoil & Garden Bed Planning";
  if (/paint|wallpaper|interior painting|exterior house painting/.test(s)) return "Paint & Wallpaper Calculators";
  if (/floor|tile|bathroom floor/.test(s)) return "Flooring & Tile Planning";
  if (/roof/.test(s)) return "Roofing Estimates";
  if (/deck|fence|joist/.test(s)) return "Decking & Fence Projects";
  if (/concrete|slab|brick|mortar|ready-mix|bags of concrete|fence posts/.test(s))
    return "Concrete & Slab Calculators";
  if (/budget|cost|quote|contractor|units|waste|measure/.test(s)) return "Home Renovation Budgeting";
  return "DIY Measuring Tips";
}

function boardForTool(category, slug) {
  if (slug.includes("gravel")) return "Gravel & Driveway Projects";
  if (slug.includes("topsoil") || slug.includes("mulch") || slug.includes("paver"))
    return "Topsoil & Garden Bed Planning";
  if (category === "construction" && !slug.includes("gravel")) return "Concrete & Slab Calculators";
  return BOARD_BY_CATEGORY[category] || "DIY Measuring Tips";
}

function tagsFrom(...parts) {
  const raw = parts
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s&/-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const phrases = [];
  const blob = parts.join(" ").toLowerCase();

  const candidates = [
    "topsoil calculator",
    "gravel calculator",
    "concrete calculator",
    "paint calculator",
    "flooring calculator",
    "mulch calculator",
    "wallpaper calculator",
    "roofing calculator",
    "tile calculator",
    "sand calculator",
    "brick calculator",
    "fence calculator",
    "decking calculator",
    "drywall calculator",
    "insulation calculator",
    "paver calculator",
    "home improvement",
    "diy garden",
    "landscaping",
    "raised garden bed",
    "driveway gravel",
    "home renovation",
    "diy project",
    "construction calculator",
  ];

  for (const c of candidates) {
    if (blob.includes(c.replace(/ calculator$/, "")) || blob.includes(c)) phrases.push(c);
  }

  // Always add a few generic useful tags
  phrases.push("home improvement", "diy");

  // Dedupe, max 6
  return [...new Set(phrases)].slice(0, 6);
}

function extractBlocks(source, kind) {
  const items = [];
  // Split on object starts that have slug
  const re =
    kind === "tool"
      ? /\{\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?shortDescription:\s*"([^"]*)"/g
      : /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]*)"/g;

  let m;
  while ((m = re.exec(source))) {
    if (kind === "tool") {
      items.push({
        kind: "tool",
        slug: m[1],
        category: m[2],
        name: m[3],
        short: m[4],
      });
    } else {
      items.push({
        kind: "guide",
        slug: m[1],
        title: m[2],
        description: m[3],
      });
    }
  }
  return items;
}

const toolFiles = ["tools.ts", "tools-extra.ts"];
const guideFiles = ["guides.ts", "guides-extra.ts", "guides-batch2.ts", "guides-batch3.ts"];

const tools = [];
for (const f of toolFiles) {
  tools.push(...extractBlocks(await readFile(join(dataDir, f), "utf8"), "tool"));
}
const guides = [];
for (const f of guideFiles) {
  guides.push(...extractBlocks(await readFile(join(dataDir, f), "utf8"), "guide"));
}

await mkdir(outDir, { recursive: true });

const existing = new Set(
  (await readdir(outDir)).filter((n) => n.endsWith(".png")).map((n) => n.replace(`-${SIZE}.png`, "")),
);

function pinBlock({ image, title, description, link, board, tags }) {
  return [
    `### ${title}`,
    "",
    `| Field | Copy this |`,
    `| --- | --- |`,
    `| **Image file** | \`${image}\` |`,
    `| **Title** | ${title} |`,
    `| **Description** | ${description} |`,
    `| **Link** | ${link} |`,
    `| **Board** | ${board} |`,
    `| **Tagged topics** | ${tags.join(" · ")} |`,
    "",
  ].join("\n");
}

const lines = [];
lines.push(`# Pinterest pin copy — Project Home Calc`);
lines.push(``);
lines.push(`Ready Title / Description / Link / Tags for every pin image in this folder.`);
lines.push(`Generated for image size **${SIZE}**. Mark as AI-modified = **OFF**.`);
lines.push(``);
lines.push(`**How to use:** open the matching \`.png\`, paste Title / Description / Link, pick Board, add tags one by one, Publish.`);
lines.push(``);
lines.push(`Tools: **${tools.length}** · Guides: **${guides.length}** · Images on disk: **${existing.size}**`);
lines.push(``);
lines.push(`---`);
lines.push(``);
lines.push(`## Calculators`);
lines.push(``);

for (const t of tools) {
  const image = `${t.slug}-${SIZE}.png`;
  const link = `${SITE}/calculators/${t.category}/${t.slug}`;
  const title = `${t.name} — Free Online Tool`;
  const description = `${t.short} Free calculator with formula on the page. US and UK units.`;
  const board = boardForTool(t.category, t.slug);
  const tags = tagsFrom(t.name, t.short, t.category);
  if (!existing.has(t.slug)) lines.push(`> ⚠️ Image missing: \`${image}\``);
  lines.push(pinBlock({ image, title, description, link, board, tags }));
}

lines.push(`---`);
lines.push(``);
lines.push(`## Guides`);
lines.push(``);

for (const g of guides) {
  const image = `${g.slug}-${SIZE}.png`;
  const link = `${SITE}/guides/${g.slug}`;
  const title = g.title;
  const description = `${g.description} Free guide from Project Home Calc.`;
  const board = boardForGuide(g.slug, g.title);
  const tags = tagsFrom(g.title, g.description);
  if (!existing.has(g.slug)) lines.push(`> ⚠️ Image missing: \`${image}\``);
  lines.push(pinBlock({ image, title, description, link, board, tags }));
}

const mdPath = join(outDir, "PIN-COPY.md");
await writeFile(mdPath, lines.join("\n"), "utf8");

// Also a flat CSV for spreadsheet users
const csvRows = [["kind", "slug", "image", "title", "description", "link", "board", "tags"]];
for (const t of tools) {
  csvRows.push([
    "calculator",
    t.slug,
    `${t.slug}-${SIZE}.png`,
    `${t.name} — Free Online Tool`,
    `${t.short} Free calculator with formula on the page. US and UK units.`,
    `${SITE}/calculators/${t.category}/${t.slug}`,
    boardForTool(t.category, t.slug),
    tagsFrom(t.name, t.short, t.category).join("; "),
  ]);
}
for (const g of guides) {
  csvRows.push([
    "guide",
    g.slug,
    `${g.slug}-${SIZE}.png`,
    g.title,
    `${g.description} Free guide from Project Home Calc.`,
    `${SITE}/guides/${g.slug}`,
    boardForGuide(g.slug, g.title),
    tagsFrom(g.title, g.description).join("; "),
  ]);
}
function esc(v) {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
const csvPath = join(outDir, "PIN-COPY.csv");
await writeFile(csvPath, csvRows.map((r) => r.map(esc).join(",")).join("\n") + "\n", "utf8");

console.log(`Wrote ${mdPath}`);
console.log(`Wrote ${csvPath}`);
console.log(`tools=${tools.length} guides=${guides.length}`);
