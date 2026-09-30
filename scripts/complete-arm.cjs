const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function createCompletedArmCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const origW = info.width; // 480
  const origH = info.height; // 491
  const channels = info.channels;

  // We add 65px of canvas to the left so the left arm has full natural width and robust presence
  const padLeft = 65;
  const newW = origW + padLeft; // 545
  const newH = origH; // 491

  // Create new RGBA buffer
  const outData = Buffer.alloc(newW * newH * 4);

  // 1. First, build the clean base mask for the original image
  const isOrigBg = (x, y) => {
    const idx = (y * origW + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    
    // Navy suit
    if ((b - r >= 6) && (b - g >= 3) && b >= 22) return false;
    // Skin
    if (r >= 65 && (r - b >= 9) && (r - g >= 3)) return false;
    // Dark hair / shadows
    const avg = (r + g + b) / 3;
    if (avg < 40) return false;
    // White shirt
    if (r >= 155 && g >= 155 && b >= 155) return false;
    // Hair highlights
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    if ((r - b >= 6 || r - g >= 4) && maxDiff >= 7) return false;

    // Everything else in studio neutral grey is background
    if (maxDiff <= 6 && avg >= 40 && avg <= 170) return true;
    return false;
  };

  const origMask = new Uint8Array(origW * origH);
  origMask.fill(255);
  const visited = new Uint8Array(origW * origH);
  const queue = [];

  for (let x = 0; x < origW; x++) {
    if (isOrigBg(x, 0)) { queue.push([x, 0]); visited[0 * origW + x] = 1; origMask[0 * origW + x] = 0; }
  }
  for (let y = 0; y < 315; y++) {
    if (!visited[y * origW + 0] && isOrigBg(0, y)) { queue.push([0, y]); visited[y * origW + 0] = 1; origMask[y * origW + 0] = 0; }
  }
  for (let y = 0; y < origH; y++) {
    const rx = origW - 1;
    if (!visited[y * origW + rx] && isOrigBg(rx, y)) { queue.push([rx, y]); visited[y * origW + rx] = 1; origMask[y * origW + rx] = 0; }
  }
  for (let x = 430; x < origW; x++) {
    const by = origH - 1;
    if (!visited[by * origW + x] && isOrigBg(x, by)) { queue.push([x, by]); visited[by * origW + x] = 1; origMask[by * origW + x] = 0; }
  }

  const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
  const dy = [0, 0, -1, 1, -1, -1, 1, 1];
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    for (let i = 0; i < 8; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < origW && ny >= 0 && ny < origH) {
        const nIdx = ny * origW + nx;
        if (!visited[nIdx]) {
          visited[nIdx] = 1;
          if (isOrigBg(nx, ny)) {
            origMask[nIdx] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Clear stray dots / specks above the shoulder and around outer border
  for (let y = 0; y < origH; y++) {
    for (let x = 0; x < origW; x++) {
      const pIdx = y * origW + x;
      if (origMask[pIdx] === 255) {
        if (x < 130 && y < 270 + (130 - x) * 0.45) {
          origMask[pIdx] = 0;
        }
        if (y < 26 || (x < 130 && y < 290) || (x > 350 && y < 280) || (x > 440)) {
          const idx = pIdx * channels;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
          if (maxDiff <= 6) {
            origMask[pIdx] = 0;
          }
        }
      }
    }
  }

  // 2. Copy original pixels into new padded canvas (shifted right by padLeft)
  for (let y = 0; y < origH; y++) {
    for (let x = 0; x < origW; x++) {
      const origIdx = (y * origW + x) * channels;
      const newX = x + padLeft;
      const newIdx = (y * newW + newX) * 4;

      outData[newIdx] = data[origIdx];
      outData[newIdx + 1] = data[origIdx + 1];
      outData[newIdx + 2] = data[origIdx + 2];
      outData[newIdx + 3] = origMask[y * origW + x];
    }
  }

  // 3. Complete the Left Shoulder & Arm Curve with wider, fuller proportions
  const getArmOuterX = (y) => {
    if (y < 336) return 999; // above shoulder top
    if (y <= 375) {
      // Smooth convex curve over the shoulder pad / deltoid cap
      const t = (y - 336) / 39;
      return 65 - 55 * Math.sin(t * Math.PI * 0.5); // 65 -> 10
    }
    if (y <= 435) {
      // Upper arm / triceps & biceps curve
      const t = (y - 375) / 60;
      return 10 - 3 * Math.sin(t * Math.PI); // reaches ~7 around y=405
    }
    // Lower sleeve tapering down to bottom
    const t = (y - 435) / 56;
    return 10 + 6 * t; // 10 -> 16 at bottom
  };

  const getShoulderTopY = (x) => {
    if (x >= padLeft) return 327;
    // Slope from x = 65 (y = 327) down to shoulder point at x = 25 (y = 342)
    const dxCap = (padLeft - x) / (padLeft - 20);
    return 327 + 15 * Math.pow(Math.min(1, dxCap), 1.2);
  };

  // Synthesize suit texture & lighting for the extended arm (x from 0 to padLeft):
  for (let y = 320; y < newH; y++) {
    const armOuterX = getArmOuterX(y);

    for (let x = 0; x <= padLeft; x++) {
      const topY = getShoulderTopY(x);
      
      // Is this pixel inside the completed arm?
      if (y >= topY && x >= armOuterX) {
        const dstIdx = (y * newW + x) * 4;

        // Sample texture and color from corresponding interior suit region
        const sampleOffset = (padLeft - x);
        const sampleX = padLeft + Math.min(sampleOffset, 55);
        const sampleIdx = (y * newW + sampleX) * 4;

        let r = outData[sampleIdx];
        let g = outData[sampleIdx + 1];
        let b = outData[sampleIdx + 2];

        // Lighting model for natural 3D curvature
        const distFromEdge = x - armOuterX;
        const distFromTop = y - topY;

        // Shoulder crest highlight at top-edge
        if (distFromTop >= 0 && distFromTop <= 5) {
          const rim = (5 - distFromTop) / 5;
          r = Math.min(255, r + Math.round(18 * rim));
          g = Math.min(255, g + Math.round(22 * rim));
          b = Math.min(255, b + Math.round(35 * rim));
        }

        // Outer edge subtle soft falloff
        if (distFromEdge < 14) {
          const shadowFactor = 0.72 + 0.28 * (distFromEdge / 14);
          r = Math.round(r * shadowFactor);
          g = Math.round(g * shadowFactor);
          b = Math.round(b * shadowFactor);
        }

        // Anti-aliased outer edge
        let alpha = 255;
        if (distFromEdge < 1.5) {
          alpha = Math.round(255 * (distFromEdge / 1.5));
        } else if (distFromTop < 1.5) {
          alpha = Math.round(255 * (distFromTop / 1.5));
        }

        outData[dstIdx] = r;
        outData[dstIdx + 1] = g;
        outData[dstIdx + 2] = b;
        outData[dstIdx + 3] = Math.max(0, Math.min(255, alpha));
      }
    }
  }

  // 4. Smooth silhouette anti-aliasing across all boundary edges
  const smoothedData = Buffer.from(outData);
  for (let y = 1; y < newH - 1; y++) {
    for (let x = 1; x < newW - 1; x++) {
      const pIdx = y * newW + x;
      const dstIdx = pIdx * 4;
      if (outData[dstIdx + 3] === 255) {
        let bgNeighbors = 0;
        for (let i = 0; i < 8; i++) {
          const nIdx = ((y + dy[i]) * newW + (x + dx[i])) * 4;
          if (outData[nIdx + 3] === 0) {
            bgNeighbors++;
          }
        }
        if (bgNeighbors > 0) {
          smoothedData[dstIdx + 3] = Math.round(255 * (1 - (bgNeighbors / 12)));
        }
      }
    }
  }

  // Save all optimized formats
  await sharp(smoothedData, { raw: { width: newW, height: newH, channels: 4 } })
    .png({ quality: 98 })
    .toFile(path.join(outDir, 'director-3d.png'));

  await sharp(smoothedData, { raw: { width: newW, height: newH, channels: 4 } })
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'director-3d.webp'));

  await sharp(smoothedData, { raw: { width: newW, height: newH, channels: 4 } })
    .avif({ quality: 90 })
    .toFile(path.join(outDir, 'director-3d.avif'));

  await sharp(smoothedData, { raw: { width: newW, height: newH, channels: 4 } })
    .png({ quality: 98 })
    .toFile(path.join(outDir, 'director-cutout.png'));

  await sharp(smoothedData, { raw: { width: newW, height: newH, channels: 4 } })
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'director-cutout.webp'));

  console.log(`Generated wider arm cutout (${newW}x${newH})!`);
}

createCompletedArmCutout().catch(console.error);
