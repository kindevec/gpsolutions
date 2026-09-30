const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function processCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Mask: 0 = transparent background, 255 = foreground person
  const mask = new Uint8Array(width * height);
  // Default all to 255 (person)
  mask.fill(255);

  const isBg = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const avg = (r + g + b) / 3;

    // Skin protection
    if (r > 80 && (r - b) > 15) return false;
    // Suit protection (navy blue has b > r + 5)
    if (b > r + 4 && b > 20) return false;
    // White shirt protection
    if (avg > 160 && (r > 160 || g > 160 || b > 160)) return false;
    // Dark hair protection (deep blacks/dark brown)
    if (avg < 32 && y > 30 && y < 200 && x > 140 && x < 350) return false;

    // Background is neutral grey across the entire background range
    if (maxDiff <= 9 && avg >= 30 && avg <= 150) {
      return true;
    }
    return false;
  };

  // Flood fill from borders to only remove external background
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

  // Seed left border (upper half above suit)
  for (let y = 0; y < 300; y++) {
    if (!visited[y * width + 0] && isBg(0, y)) {
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      mask[y * width + 0] = 0;
    }
  }

  // Seed right border (upper half above suit)
  for (let y = 0; y < 310; y++) {
    const rx = width - 1;
    if (!visited[y * width + rx] && isBg(rx, y)) {
      queue.push([rx, y]);
      visited[y * width + rx] = 1;
      mask[y * width + rx] = 0;
    }
  }

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
            mask[nIdx] = 0; // Mark background
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Build output RGBA buffer
  const outData = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const dstIdx = pIdx * 4;

      outData[dstIdx] = data[srcIdx];
      outData[dstIdx + 1] = data[srcIdx + 1];
      outData[dstIdx + 2] = data[srcIdx + 2];
      outData[dstIdx + 3] = mask[pIdx];
    }
  }

  // Edge anti-aliasing / smoothing (feathering 1.5px)
  const smoothedData = Buffer.from(outData);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pIdx = y * width + x;
      const dstIdx = pIdx * 4;
      if (outData[dstIdx + 3] === 255) {
        // Count surrounding transparent pixels
        let bgCount = 0;
        for (let i = 0; i < 8; i++) {
          const nIdx = ((y + dy[i]) * width + (x + dx[i])) * 4;
          if (outData[nIdx + 3] === 0) bgCount++;
        }
        if (bgCount > 0) {
          // Smooth alpha transition
          smoothedData[dstIdx + 3] = Math.round(255 * (1 - (bgCount / 10)));
        }
      }
    }
  }

  // Save the PNG, WEBP, and AVIF versions
  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'director-3d.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'director-3d.webp'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .avif({ quality: 88 })
    .toFile(path.join(outDir, 'director-3d.avif'));

  // Also save director-cutout files
  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'director-cutout.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'director-cutout.webp'));

  console.log('Clean cutout generated with no background and full shoulders/arms/hair preserved!');
}

processCutout().catch(console.error);
