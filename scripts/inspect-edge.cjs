const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Check column x=250 from y=15 to y=45
  console.log('Column x=250:');
  for (let y = 15; y <= 45; y++) {
    const idx = (y * width + 250) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    const avg = Math.round((r + g + b) / 3);
    console.log(`y=${y}: RGB=[${r},${g},${b}], avg=${avg}, maxDiff=${maxDiff}`);
  }

  // Check column x=200 from y=25 to y=50
  console.log('\nColumn x=200:');
  for (let y = 25; y <= 50; y++) {
    const idx = (y * width + 200) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    const avg = Math.round((r + g + b) / 3);
    console.log(`y=${y}: RGB=[${r},${g},${b}], avg=${avg}, maxDiff=${maxDiff}`);
  }

  // Check column x=300 from y=25 to y=55
  console.log('\nColumn x=300:');
  for (let y = 25; y <= 55; y++) {
    const idx = (y * width + 300) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
    const avg = Math.round((r + g + b) / 3);
    console.log(`y=${y}: RGB=[${r},${g},${b}], avg=${avg}, maxDiff=${maxDiff}`);
  }
});
