import sharp from 'sharp';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

const sizes = [192, 512];
const svgBuffer = readFileSync(join(publicDir, 'logo.svg'));

async function generateIcons() {
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .toFile(join(publicDir, `pwa-${size}x${size}.png`));
  }
}

generateIcons().catch(console.error);
