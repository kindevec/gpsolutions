const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  console.log('Shoulder top line scan (x: 0..120):');
  for (let x = 0; x <= 120; x += 10) {
    let topY = -1;
    let rgb = [];
    for (let y = 200; y < 400; y++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Suit is navy blue (b > r + 5, avg < 80)
      if (b > r + 5 || (r < 60 && g < 60 && b < 80 && (r+g+b)/3 < 55)) {
        topY = y;
        rgb = [r, g, b];
        break;
      }
    }
    console.log(`x=${x}: suit starts at y=${topY}, rgb=[${rgb.join(',')}]`);
  }
});
