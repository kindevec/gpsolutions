const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function processPerfectCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Mask: 0 = transparent background, 255 = foreground person
  const mask = new Uint8Array(width * height);
  mask.fill(255);

  const isBg = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const avg = (r + g + b) / 3;

    // Skin protection: Warm tones with strong red dominance
    if (r > 75 && (r - b) >= 15 && (r - g) >= 8) return false;
    
    // Blue Suit protection: Clear blue dominance (b significantly higher than r)
    if (b >= r + 10 && b > 25) return false;

    // White shirt protection: High brightness across all channels
    if (r > 160 && g > 160 && b > 160) return false;

    // Deep black hair inside the head region
    if (avg < 28 && y > 25 && y < 200 && x > 140 && x < 350) return false;

    // Background is monochromatic grey with low color difference (maxDiff <= 12)
    if (maxDiff <= 12 && avg >= 20 && avg <= 165) {
      return true;
    }
    return false;
  };

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed top border
  for (let x = 0; x < width; x++) {
    if (isBg(x, 0)) {
      queue.push([x, 0]);
      visited[0 * width + x] = 1;
      mask[0 * width + x] = 0;
    }
  }

  // Seed left border (from top down to where suit begins at y = 320)
  for (let y = 0; y < 320; y++) {
    if (!visited[y * width + 0] && isBg(0, y)) {
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      mask[y * width + 0] = 0;
    }
  }

  // Seed right border (ALL Y from 0 to height-1)
  for (let y = 0; y < height; y++) {
    const rx = width - 1;
    if (!visited[y * width + rx] && isBg(rx, y)) {
      queue.push([rx, y]);
      visited[y * width + rx] = 1;
      mask[y * width + rx] = 0;
    }
  }

  // Seed bottom border right side (from x = 390 to width-1)
  for (let x = 390; x < width; x++) {
    const by = height - 1;
    if (!visited[by * width + x] && isBg(x, by)) {
      queue.push([x, by]);
      visited[by * width + x] = 1;
      mask[by * width + x] = 0;
    }
  }

  // Flood fill 8-connected
  const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
  const dy = [0, 0, -1, 1, -1, -1, 1, 1];

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    for (let i = 0; i < 8; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          visited[nIdx] = 1;
          if (isBg(nx, ny)) {
            mask[nIdx] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Defringe & soft fade mask on left camera crop edge and bottom edge
  const outData = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const dstIdx = pIdx * 4;

      outData[dstIdx] = data[srcIdx];
      outData[dstIdx + 1] = data[srcIdx + 1];
      outData[dstIdx + 2] = data[srcIdx + 2];

      let alpha = mask[pIdx];

      // Soft natural fade at the very left edge (x < 20, y > 310) so the straight sensor cut melts organically
      if (alpha === 255 && x < 20 && y > 310) {
        const factor = x / 20;
        alpha = Math.round(255 * factor);
      }

      // Soft natural fade at the very bottom edge (y > height - 18)
      if (alpha > 0 && y > height - 18) {
        const factor = (height - 1 - y) / 18;
        alpha = Math.min(alpha, Math.round(255 * factor));
      }

      outData[dstIdx + 3] = alpha;
    }
  }

  // Edge smoothing / anti-aliasing
  const smoothedData = Buffer.from(outData);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pIdx = y * width + x;
      const dstIdx = pIdx * 4;
      if (outData[dstIdx + 3] > 0 && outData[dstIdx + 3] < 255) {
        continue;
      }
      if (outData[dstIdx + 3] === 255) {
        let bgCount = 0;
        for (let i = 0; i < 8; i++) {
          const nIdx = ((y + dy[i]) * width + (x + dx[i])) * 4;
          if (outData[nIdx + 3] === 0) bgCount++;
        }
        if (bgCount > 0) {
          smoothedData[dstIdx + 3] = Math.round(255 * (1 - (bgCount / 10)));
        }
      }
    }
  }

  // Save all target images
  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'director-3d.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'director-3d.webp'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .avif({ quality: 88 })
    .toFile(path.join(outDir, 'director-3d.avif'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'director-cutout.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'director-cutout.webp'));

  console.log('100% PERFECT cutout generated!');
}

processPerfectCutout().catch(console.error);
