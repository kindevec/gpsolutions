const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function removeBackground() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Create an alpha mask array of size width * height
  // 0 = background, 1 = foreground (man)
  const isBg = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);

  // Function to check if a pixel is neutral grey background
  // Background has |R-G| < 12, |G-B| < 12, |R-B| < 12, and intensity between 30 and 110
  // Whereas skin has higher R than B (R - B > 25), suit is dark navy (B > R or very dark), white shirt is bright (R,G,B > 180)
  function isBgPixel(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const diffRG = Math.abs(r - g);
    const diffGB = Math.abs(g - b);
    const diffRB = Math.abs(r - b);
    const maxDiff = Math.max(diffRG, diffGB, diffRB);

    // If maxDiff is low (neutral grey) and within background luminance range
    const avg = (r + g + b) / 3;
    if (maxDiff <= 12 && avg >= 30 && avg <= 110) {
      // Check skin tone protection (skin has R > G > B and warm tint)
      if (r > b + 15 && r > 90) return false;
      return true;
    }
    return false;
  }

  // Flood fill from borders
  const queue = [];
  
  // Seed from top row, left and right edges, and upper corners
  for (let x = 0; x < width; x++) {
    if (isBgPixel(x, 0)) {
      queue.push([x, 0]);
      visited[0 * width + x] = 1;
      isBg[0 * width + x] = 1;
    }
  }
  for (let y = 0; y < Math.floor(height * 0.75); y++) {
    if (isBgPixel(0, y) && !visited[y * width + 0]) {
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      isBg[y * width + 0] = 1;
    }
    if (isBgPixel(width - 1, y) && !visited[y * width + (width - 1)]) {
      queue.push([width - 1, y]);
      visited[y * width + (width - 1)] = 1;
      isBg[y * width + (width - 1)] = 1;
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
          if (isBgPixel(nx, ny)) {
            isBg[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Create new RGBA buffer
  const outBuffer = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const dstIdx = pIdx * 4;

      outBuffer[dstIdx] = data[srcIdx];
      outBuffer[dstIdx + 1] = data[srcIdx + 1];
      outBuffer[dstIdx + 2] = data[srcIdx + 2];

      if (isBg[pIdx]) {
        outBuffer[dstIdx + 3] = 0; // Transparent
      } else {
        outBuffer[dstIdx + 3] = 255; // Opaque
      }
    }
  }

  // Smooth / Feather the alpha edges slightly
  const smoothedBuffer = Buffer.from(outBuffer);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pIdx = y * width + x;
      const dstIdx = pIdx * 4;
      if (outBuffer[dstIdx + 3] > 0) {
        // Count transparent neighbors
        let transNeighbors = 0;
        for (let i = 0; i < 8; i++) {
          const nIdx = ((y + dy[i]) * width + (x + dx[i])) * 4;
          if (outBuffer[nIdx + 3] === 0) transNeighbors++;
        }
        if (transNeighbors > 2) {
          // edge pixel, soften alpha
          smoothedBuffer[dstIdx + 3] = Math.round(255 * (1 - transNeighbors / 10));
        }
      }
    }
  }

  // Write outputs
  await sharp(smoothedBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png({ quality: 95 })
  .toFile(path.join(outDir, 'director-3d.png'));

  await sharp(smoothedBuffer, {
    raw: { width, height, channels: 4 }
  })
  .webp({ quality: 90 })
  .toFile(path.join(outDir, 'director-3d.webp'));

  await sharp(smoothedBuffer, {
    raw: { width, height, channels: 4 }
  })
  .avif({ quality: 85 })
  .toFile(path.join(outDir, 'director-3d.avif'));

  // Also save director-cutout
  await sharp(smoothedBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png({ quality: 95 })
  .toFile(path.join(outDir, 'director-cutout.png'));

  console.log('Transparent cutout saved successfully!');
}

removeBackground().catch(console.error);
