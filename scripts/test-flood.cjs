const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Let's test flood-fill with different maxDiff thresholds (3, 4, 5, 6)
  for (const maxDiffThresh of [3, 4, 5, 6, 7]) {
    const visited = new Uint8Array(width * height);
    const queue = [];

    const isBg = (x, y) => {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
      const avg = (r + g + b) / 3;

      // Never background:
      if (b > r + 6 && b > 25) return false; // Navy suit
      if (r > 70 && r - b >= 10 && r - g >= 3) return false; // Skin
      if (r > 165 && g > 165 && b > 165) return false; // White collar/shirt
      if (avg < 42) return false; // Deep dark hair / suit shadow

      return maxDiff <= maxDiffThresh;
    };

    // Seed borders:
    for (let x = 0; x < width; x++) {
      if (isBg(x, 0)) { queue.push([x, 0]); visited[0 * width + x] = 1; }
    }
    for (let y = 0; y < 315; y++) {
      if (!visited[y * width + 0] && isBg(0, y)) { queue.push([0, y]); visited[y * width + 0] = 1; }
    }
    for (let y = 0; y < height; y++) {
      const rx = width - 1;
      if (!visited[y * width + rx] && isBg(rx, y)) { queue.push([rx, y]); visited[y * width + rx] = 1; }
    }
    for (let x = 425; x < width; x++) {
      const by = height - 1;
      if (!visited[by * width + x] && isBg(x, by)) { queue.push([x, by]); visited[by * width + x] = 1; }
    }

    let head = 0;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    while (head < queue.length) {
      const [cx, cy] = queue[head++];
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nIdx = ny * width + nx;
          if (!visited[nIdx] && isBg(nx, ny)) {
            visited[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }

    console.log(`Threshold maxDiff <= ${maxDiffThresh}: total bg pixels = ${head}`);
    
    // Check specific points:
    // 1. (150, 150) -> should be BG (visited = 1)
    // 2. (345, 150) -> should be BG (visited = 1)
    // 3. (250, 30) -> should be FG (visited = 0)
    // 4. (250, 50) -> should be FG (visited = 0)
    // 5. (200, 42) -> should be FG (visited = 0)
    // 6. (300, 42) -> should be FG (visited = 0)
    console.log(`  (150, 150) left of ear is BG: ${visited[150 * width + 150] === 1}`);
    console.log(`  (345, 150) right of ear is BG: ${visited[150 * width + 345] === 1}`);
    console.log(`  (250, 30) hair top is FG: ${visited[30 * width + 250] === 0}`);
    console.log(`  (200, 42) hair left is FG: ${visited[42 * width + 200] === 0}`);
    console.log(`  (300, 42) hair right is FG: ${visited[42 * width + 300] === 0}`);
  }
});
