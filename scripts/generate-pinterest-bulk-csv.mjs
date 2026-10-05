/**
 * Builds official Pinterest bulk-upload CSV:
 * Title, Media URL, Pinterest board, Thumbnail, Description, Link, Publish date, Keywords
 *
 * Boards that don't exist are created by Pinterest automatically.
 * Media URLs must be publicly reachable (deploy public/pinterest/ first).
 *
 * Usage: node scripts/generate-pinterest-bulk-csv.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
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
  if (/paint|wallpaper|interior painting|exterior house painting/.test(s))
    return "Paint & Wallpaper Calculators";
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
    "diy",
  ];
  const out = [];
  for (const c of candidates) {
    const key = c.replace(/ calculator$/, "");
    if (blob.includes(key) || blob.includes(c)) out.push(c);
  }
  out.push("home improvement", "diy");
  return [...new Set(out)].slice(0, 6);
}

function extractBlocks(source, kind) {
  const items = [];
  const re =
    kind === "tool"
      ? /\{\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?shortDescription:\s*"([^"]*)"/g
      : /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(source))) {
    if (kind === "tool") {
      items.push({ kind: "tool", slug: m[1], category: m[2], name: m[3], short: m[4] });
    } else {
      items.push({ kind: "guide", slug: m[1], title: m[2], description: m[3] });
    }
  }
  return items;
}

/** Priority order for scheduling — topsoil/gravel first. */
function priority(item) {
  const s = item.slug;
  if (/topsoil|mulch/.test(s)) return 1;
  if (/gravel|driveway|crushed/.test(s)) return 2;
  if (/concrete|brick|sand|paver/.test(s)) return 3;
  if (/paint|wallpaper/.test(s)) return 4;
  if (/floor|tile/.test(s)) return 5;
  if (/roof/.test(s)) return 6;
  if (/deck|fence/.test(s)) return 7;
  return 8;
}

function utcDatePlusDays(start, dayOffset, hourUtc) {
  const d = new Date(start);
  d.setUTCDate(d.getUTCDate() + dayOffset);
  d.setUTCHours(hourUtc, 0, 0, 0);
  // YYYY-MM-DDTHH:MM:SS (no Z — Pinterest docs use this form as UTC)
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const h = String(d.getUTCHours()).padStart(2, "0");
  return `${y}-${m}-${day}T${h}:00:00`;
}

function esc(v) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function clip(s, n) {
  const t = ascii(s).replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1).trimEnd() + "...";
}

/** Keep CSV ASCII-safe for Pinterest / Excel on Windows. */
function ascii(s) {
  return String(s)
    .replace(/[\u2013\u2014\u2212]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u00A0/g, " ");
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

const rows = [];
for (const t of tools) {
  rows.push({
    kind: "tool",
    slug: t.slug,
    title: clip(`${t.name} - Free Online Tool`, 100),
    description: clip(
      `${ascii(t.short)} Free calculator with formula on the page. US and UK units.`,
      500,
    ),
    link: `${SITE}/calculators/${t.category}/${t.slug}`,
    board: boardForTool(t.category, t.slug),
    keywords: tagsFrom(t.name, t.short, t.category).join(", "),
    media: `${SITE}/pinterest/${t.slug}-${SIZE}.png`,
  });
}
for (const g of guides) {
  rows.push({
    kind: "guide",
    slug: g.slug,
    title: clip(ascii(g.title), 100),
    description: clip(`${ascii(g.description)} Free guide from Project Home Calc.`, 500),
    link: `${SITE}/guides/${g.slug}`,
    board: boardForGuide(g.slug, g.title),
    keywords: tagsFrom(g.title, g.description).join(", "),
    media: `${SITE}/pinterest/${g.slug}-${SIZE}.png`,
  });
}

rows.sort((a, b) => priority(a) - priority(b) || a.title.localeCompare(b.title));

// Schedule ~4 pins/day starting tomorrow UTC, morning + evening slots
const start = new Date();
start.setUTCDate(start.getUTCDate() + 1);
start.setUTCHours(0, 0, 0, 0);
const hours = [14, 15, 20, 21]; // ~4 slots/day UTC (US daytime spread)

const header = [
  "Title",
  "Media URL",
  "Pinterest board",
  "Thumbnail",
  "Description",
  "Link",
  "Publish date",
  "Keywords",
];

const csvLines = [header.join(",")];
rows.forEach((r, i) => {
  const day = Math.floor(i / hours.length);
  const hour = hours[i % hours.length];
  const publish = utcDatePlusDays(start, day, hour);
  csvLines.push(
    [
      esc(r.title),
      esc(r.media),
      esc(r.board),
      "", // Thumbnail blank for images
      esc(r.description),
      esc(r.link),
      esc(publish),
      esc(r.keywords),
    ].join(","),
  );
});

await mkdir(outDir, { recursive: true });
const outPath = join(outDir, "PINTEREST-BULK-UPLOAD.csv");
await writeFile(outPath, csvLines.join("\n") + "\n", "utf8");

const boards = [...new Set(rows.map((r) => r.board))].sort();
console.log(`Wrote ${outPath}`);
console.log(`Pins: ${rows.length}`);
console.log(`Boards (${boards.length}):`);
for (const b of boards) console.log(`  - ${b}`);
console.log(`Schedule: ~${hours.length}/day starting ${utcDatePlusDays(start, 0, hours[0])}`);
