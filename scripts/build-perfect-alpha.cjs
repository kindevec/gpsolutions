const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function generatePerfectDirectorCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // 1. Classifier for definite foreground
  const isForegroundPixel = (r, g, b) => {
    // A. Navy suit: distinctly blue
    if ((b - r >= 7) && (b - g >= 4) && b >= 24) return true;
    // B. Skin (face, ears, neck, forehead, lips, nose): warm reddish/golden
    if (r >= 65 && (r - b >= 9) && (r - g >= 3)) return true;
    // C. Very dark hair / suit shadow / pupil / eyebrows
    const avg = (r + g + b) / 3;
    if (avg < 40) return true;
    // D. White shirt / collar / teeth
    if (r >= 155 && g >= 155 && b >= 155) return true;
    // E. Hair with warm highlights / brown tones
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    if ((r - b >= 6 || r - g >= 4) && maxDiff >= 7) return true;

    return false;
  };

  // Background criteria: neutral studio grey
  const isBackgroundPixel = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    
    // If it is definitely foreground, cannot be background
    if (isForegroundPixel(r, g, b)) return false;

    // Neutral grey studio backdrop
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    const avg = (r + g + b) / 3;
    if (maxDiff <= 6 && avg >= 40 && avg <= 170) {
      return true;
    }

    return false;
  };

  // 2. Flood fill from outer image edges to mark all true background
  const mask = new Uint8Array(width * height);
  mask.fill(255); // Default to foreground

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed top edge (all x)
  for (let x = 0; x < width; x++) {
    if (isBackgroundPixel(x, 0)) {
      queue.push([x, 0]);
      visited[0 * width + x] = 1;
      mask[0 * width + x] = 0;
    }
  }

  // Seed left edge (y < 315, above shoulder)
  for (let y = 0; y < 315; y++) {
    if (!visited[y * width + 0] && isBackgroundPixel(0, y)) {
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      mask[y * width + 0] = 0;
    }
  }

  // Seed right edge (all y)
  for (let y = 0; y < height; y++) {
    const rx = width - 1;
    if (!visited[y * width + rx] && isBackgroundPixel(rx, y)) {
      queue.push([rx, y]);
      visited[y * width + rx] = 1;
      mask[y * width + rx] = 0;
    }
  }

  // Seed bottom edge (x > 430, right of suit)
  for (let x = 430; x < width; x++) {
    const by = height - 1;
    if (!visited[by * width + x] && isBackgroundPixel(x, by)) {
      queue.push([x, by]);
      visited[by * width + x] = 1;
      mask[by * width + x] = 0;
    }
  }

  // 8-way flood fill
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
          if (isBackgroundPixel(nx, ny)) {
            mask[nIdx] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // 3. Clean any remaining outer background artifacts
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      if (mask[pIdx] === 255) {
        // Outside the person's anatomical bounding box
        if (y < 26 || (x < 130 && y < 290) || (x > 350 && y < 280) || (x > 440)) {
          const idx = pIdx * channels;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (!isForegroundPixel(r, g, b)) {
            mask[pIdx] = 0;
          }
        }
      }
    }
  }

  // 4. Smooth silhouette boundary with subtle anti-aliasing
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
          // Feather boundary smoothly
          smoothedData[dstIdx + 3] = Math.round(255 * (1 - (bgNeighbors / 12)));
        }
      }
    }
  }

  // Save all optimized web formats
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

  console.log('Processed perfect director-3d cutout successfully!');
}

generatePerfectDirectorCutout().catch(console.error);
