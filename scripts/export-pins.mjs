import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Writes a Pinterest pin PNG for every calculator and guide into public/pinterest/.
 * Reuses the /pin/[slug] route, so a built server must already be running:
 *   npm run build && npm run start
 *   npm run export:pins
 */
const BASE = process.env.PIN_BASE_URL || "http://localhost:3000";
const SIZE = "1000x1500";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "pinterest");

const sitemap = await fetch(`${BASE}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`Cannot read sitemap at ${BASE} (${r.status}). Is the server running?`);
  return r.text();
});

const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const slugs = paths
  .filter((p) => /^\/calculators\/[^/]+\/[^/]+$/.test(p) || /^\/guides\/[^/]+$/.test(p))
  .map((p) => p.split("/").pop());

if (!slugs.length) throw new Error("No calculator or guide URLs found in the sitemap.");

await mkdir(outDir, { recursive: true });

let written = 0;
for (const slug of slugs) {
  const response = await fetch(`${BASE}/pin/${slug}`);
  if (!response.ok) {
    console.warn(`Skipped ${slug} (${response.status})`);
    continue;
  }
  const file = `${slug}-${SIZE}.png`;
  await writeFile(join(outDir, file), Buffer.from(await response.arrayBuffer()));
  console.log(`Wrote ${file}`);
  written += 1;
}

console.log(`Done — ${written} pins in public/pinterest/`);
