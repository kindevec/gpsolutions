const sharp = require('sharp');
const path = require('path');

const imgPath = path.resolve(__dirname, '../public/images/director-3d.png');

sharp(imgPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const width = info.width;
  const height = info.height;
  console.log(`director-3d.png: ${width}x${height}`);

  // Let's find any non-zero alpha pixels in areas that might be background
  // For example:
  // x: 130..155, y: 80..200
  // x: 330..360, y: 80..200
  // x: 0..100, y: 0..200
  let greyCount = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
      if (a > 0) {
        const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
        if (maxDiff <= 4 && (r+g+b)/3 > 50 && (r+g+b)/3 < 150) {
          greyCount++;
          if (greyCount <= 10) {
            console.log(`Grey pixel still active: (${x},${y}) -> RGB=[${r},${g},${b}], alpha=${a}`);
          }
        }
      }
    }
  }
  console.log(`Total grey non-transparent pixels in current director-3d.png: ${greyCount}`);
});
