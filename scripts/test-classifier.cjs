const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Let's test the exact foreground rules
  const isForegroundPixel = (r, g, b) => {
    // 1. Navy suit: distinctly blue
    if ((b - r >= 8) && (b - g >= 5) && b >= 25) return 'suit';
    // 2. Skin (face, ears, neck, forehead, lips): warm reddish/golden
    if (r >= 70 && (r - b >= 10) && (r - g >= 3)) return 'skin';
    // 3. Dark hair / dark suit shadows / pupils
    const avg = (r + g + b) / 3;
    if (avg < 40) return 'dark';
    // 4. White shirt / collar / teeth / bright highlights
    if (r >= 160 && g >= 160 && b >= 160) return 'white';
    // 5. Hair with warm highlights / brown tones
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    if ((r - b >= 6 || r - g >= 5) && maxDiff >= 7) return 'hair_warm';

    return null; // Otherwise neutral grey background
  };

  let countBg = 0;
  let countFg = 0;
  const fgTypes = {};

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const fg = isForegroundPixel(r, g, b);
      if (fg) {
        countFg++;
        fgTypes[fg] = (fgTypes[fg] || 0) + 1;
      } else {
        countBg++;
      }
    }
  }

  console.log(`Total pixels: ${width * height}`);
  console.log(`Foreground pixels: ${countFg}`, fgTypes);
  console.log(`Background pixels: ${countBg}`);
});
