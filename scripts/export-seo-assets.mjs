import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = join(root, "public", "brand");
const publicDir = join(root, "public");
const appDir = join(root, "src", "app");

const BRAND = { r: 35, g: 80, b: 141, alpha: 1 }; // #23508D

async function main() {
  await mkdir(publicDir, { recursive: true });
  await mkdir(appDir, { recursive: true });

  const fullSvg = await readFile(join(brandDir, "logo-full.svg"));
  const iconSvg = await readFile(join(brandDir, "logo-icon.svg"));

  const logoOverlay = await sharp(fullSvg, { density: 300 })
    .resize({ width: 900, withoutEnlargement: false })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logoOverlay).metadata();
  const left = Math.round((1200 - (logoMeta.width || 900)) / 2);
  const top = Math.round((630 - (logoMeta.height || 225)) / 2);

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: BRAND,
    },
  })
    .composite([{ input: logoOverlay, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, "og-image.png"));
  console.log("Wrote public/og-image.png");

  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(join(appDir, "icon.png"));
  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(join(publicDir, "icon-32.png"));
  await sharp(iconSvg, { density: 300 }).resize(48, 48).png().toFile(join(publicDir, "favicon.png"));
  await sharp(iconSvg, { density: 300 }).resize(180, 180).png().toFile(join(appDir, "apple-icon.png"));
  await sharp(iconSvg, { density: 300 }).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png"));
  console.log("Wrote PNG icons");

  const icoBuffers = await Promise.all(
    [16, 32, 48].map((size) => sharp(iconSvg, { density: 300 }).resize(size, size).png().toBuffer()),
  );
  const ico = await pngToIco(icoBuffers);
  await writeFile(join(publicDir, "favicon.ico"), ico);
  await writeFile(join(appDir, "favicon.ico"), ico);
  console.log("Wrote favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
