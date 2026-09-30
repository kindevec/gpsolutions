const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  console.log('Lateral scan for foreground bounds per row:');
  for (let y = 30; y < height; y += 20) {
    let leftX = -1;
    let rightX = -1;
    
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
      const avg = (r + g + b) / 3;

      // Check if pixel is foreground:
      // Suit: b > r + 5 (navy blue) or dark (avg < 45)
      // Skin: r > 70 && (r - b >= 12) && (r - g >= 4)
      // Shirt: r > 150 && g > 150 && b > 150
      // Hair: avg < 48 or (r - b >= 8) or (r - g >= 5) or maxDiff >= 10
      const isForeground = (b > r + 5 && b > 25) || 
                           (r > 70 && r - b >= 12 && r - g >= 4) || 
                           (r > 160 && g > 160 && b > 160) || 
                           (avg < 45) || 
                           (r - b >= 8 && maxDiff >= 8);
      
      if (isForeground) {
        if (leftX === -1) leftX = x;
        rightX = x;
      }
    }
    console.log(`y=${y}: leftX=${leftX}, rightX=${rightX}`);
  }
});
