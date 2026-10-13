const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  console.log('Scanning column by column for hair start from top (y=0..120):');
  for (let x = 160; x <= 340; x += 10) {
    let topHairY = -1;
    let topHairRgb = [];
    for (let y = 0; y < 150; y++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
      const avg = (r + g + b) / 3;
      
      // Is it definitely not background?
      // Background has maxDiff <= 7 and avg between 50 and 150
      // Hair is either darker (avg < 55) or has warm/color tone (maxDiff > 8 or r-b >= 8 or r-g >= 6)
      const isHairOrSkin = (avg < 50) || (r - b >= 9) || (r - g >= 6) || (maxDiff >= 10);
      if (isHairOrSkin) {
        topHairY = y;
        topHairRgb = [r, g, b];
        break;
      }
    }
    console.log(`x=${x}: first non-bg pixel at y=${topHairY}, RGB=[${topHairRgb.join(',')}]`);
  }
});
