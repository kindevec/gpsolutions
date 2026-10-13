const sharp = require('sharp');
const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  console.log('Size:', info.width, 'x', info.height, 'Channels:', info.channels);
  
  console.log('Top hair pixels (x: 200..300, y: 20..60):');
  for (let y = 20; y <= 60; y += 10) {
    let row = `y=${y}: `;
    for (let x = 200; x <= 300; x += 20) {
      const idx = (y * info.width + x) * info.channels;
      row += `x=${x}:[${data[idx]},${data[idx+1]},${data[idx+2]}] `;
    }
    console.log(row);
  }

  console.log('\nLeft of head/ear (x: 130..180, y: 60..180):');
  for (let y = 60; y <= 180; y += 30) {
    let row = `y=${y}: `;
    for (let x = 130; x <= 180; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      row += `x=${x}:[${data[idx]},${data[idx+1]},${data[idx+2]}] `;
    }
    console.log(row);
  }

  console.log('\nRight of head/ear (x: 310..370, y: 60..180):');
  for (let y = 60; y <= 180; y += 30) {
    let row = `y=${y}: `;
    for (let x = 310; x <= 370; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      row += `x=${x}:[${data[idx]},${data[idx+1]},${data[idx+2]}] `;
    }
    console.log(row);
  }

  console.log('\nArm / Shoulder Left (x: 0..80, y: 300..450):');
  for (let y = 300; y <= 450; y += 30) {
    let row = `y=${y}: `;
    for (let x = 0; x <= 80; x += 20) {
      const idx = (y * info.width + x) * info.channels;
      row += `x=${x}:[${data[idx]},${data[idx+1]},${data[idx+2]}] `;
    }
    console.log(row);
  }
});
