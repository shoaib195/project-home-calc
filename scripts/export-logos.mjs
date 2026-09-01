import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = join(root, "public", "brand");

const exports_ = [
  { svg: "logo-icon.svg", png: "logo-icon-1024.png", width: 1024 },
  { svg: "logo-icon.svg", png: "logo-icon-512.png", width: 512 },
  { svg: "logo-icon.svg", png: "logo-icon-256.png", width: 256 },
  { svg: "logo-full.svg", png: "logo-full-2400x600.png", width: 2400 },
  { svg: "logo-full.svg", png: "logo-full-1200x300.png", width: 1200 },
];

await mkdir(brandDir, { recursive: true });

for (const item of exports_) {
  const svgPath = join(brandDir, item.svg);
  const pngPath = join(brandDir, item.png);
  const svg = await readFile(svgPath);
  await sharp(svg, { density: 300 })
    .resize({ width: item.width, withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile(pngPath);
  console.log(`Wrote ${item.png}`);
}

console.log("Done — files in public/brand/");
