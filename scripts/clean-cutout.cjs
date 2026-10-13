const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function processCleanCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Mask: 0 = background (transparent), 255 = foreground (opaque)
  const mask = new Uint8Array(width * height);
  mask.fill(255);

  const isBg = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    
    // 1. Navy suit protection (left shoulder, right shoulder, lapels)
    if ((b >= r + 5 || b >= g + 4) && b > 20) return false;
    
    // 2. Skin tone protection (ears, face, neck)
    if (r > 65 && (r - b) >= 9 && (r - g) >= 3) return false;
    
    // 3. White shirt / collar
    if (r > 155 && g > 155 && b > 155) return false;

    // 4. Very dark hair & deep shadows
    const avg = (r + g + b) / 3;
    if (avg < 40) return false;

    // 5. Hair with warm highlights / brown tones
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    if ((r - b >= 7 || r - g >= 5) && maxDiff >= 7) return false;

    // Everything else in studio neutral grey is background!
    // Neutral grey has maxDiff <= 5
    if (maxDiff <= 5 && avg >= 45 && avg <= 165) {
      return true;
    }
    
    // Also catch slight gradient grey if maxDiff <= 7 and no color saturation
    if (maxDiff <= 7 && avg >= 60 && avg <= 150 && Math.abs(r - b) <= 4 && Math.abs(r - g) <= 4) {
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

  // Seed left border (down to y = 320 before left arm starts)
  for (let y = 0; y < 320; y++) {
    if (!visited[y * width + 0] && isBg(0, y)) {
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      mask[y * width + 0] = 0;
    }
  }

  // Seed right border (entire right side)
  for (let y = 0; y < height; y++) {
    const rx = width - 1;
    if (!visited[y * width + rx] && isBg(rx, y)) {
      queue.push([rx, y]);
      visited[y * width + rx] = 1;
      mask[y * width + rx] = 0;
    }
  }

  // Seed bottom border right corner (suit ends around x ~ 435 at bottom)
  for (let x = 435; x < width; x++) {
    const by = height - 1;
    if (!visited[by * width + x] && isBg(x, by)) {
      queue.push([x, by]);
      visited[by * width + x] = 1;
      mask[by * width + x] = 0;
    }
  }

  // 8-way flood fill to reach all background pockets
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

  // Let's count remaining background-colored pixels that might be detached islands
  let islandCount = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      if (mask[pIdx] === 255) {
        const idx = pIdx * channels;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
        const avg = (r + g + b) / 3;
        // If it looks like background (grey, uncolored) and is outside the person's body:
        // Person's body is between x ~ 50..430 and y ~ 28..490
        if (maxDiff <= 4 && avg >= 60 && avg <= 150) {
          // Check if this pixel is near outer borders or in ear hollows
          // If y < 25 or (x < 130 && y < 300) or (x > 350 && y < 300): definitely bg island!
          if (y < 25 || (x < 140 && y < 300) || (x > 350 && y < 300) || (x > 430)) {
            mask[pIdx] = 0;
            islandCount++;
          }
        }
      }
    }
  }

  console.log(`Flood filled ${head} bg pixels. Removed ${islandCount} detached bg islands.`);

  // Build RGBA output
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

      // Clean anti-aliased edge softening for smooth silhouette
      outData[dstIdx + 3] = alpha;
    }
  }

  // Soften only the boundary 1-2px for natural integration
  const smoothedData = Buffer.from(outData);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pIdx = y * width + x;
      const dstIdx = pIdx * 4;
      if (outData[dstIdx + 3] === 255) {
        let bgNeighbors = 0;
        for (let i = 0; i < 8; i++) {
          const nIdx = ((y + dy[i]) * width + (x + dx[i])) * 4;
          if (outData[nIdx + 3] === 0) {
            bgNeighbors++;
          }
        }
        if (bgNeighbors > 0) {
          // Natural alpha feathering at exact edge
          smoothedData[dstIdx + 3] = Math.round(255 * (1 - (bgNeighbors / 12)));
        }
      }
    }
  }

  // Save all image formats
  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 98 })
    .toFile(path.join(outDir, 'director-3d.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'director-3d.webp'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .avif({ quality: 90 })
    .toFile(path.join(outDir, 'director-3d.avif'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .png({ quality: 98 })
    .toFile(path.join(outDir, 'director-cutout.png'));

  await sharp(smoothedData, { raw: { width, height, channels: 4 } })
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'director-cutout.webp'));

  console.log('Successfully generated flawless director-3d cutout images!');
}

processCleanCutout().catch(console.error);
