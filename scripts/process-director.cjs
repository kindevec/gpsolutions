const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/ara/.gemini/antigravity/brain/2cbecdb9-6808-4594-8322-75bf7f0b73ab/.user_uploaded/media_1790787602001.png';
const outDir = path.resolve(__dirname, '../public/images');

async function processImage() {
  const metadata = await sharp(inputPath).metadata();
  console.log('Input metadata:', metadata);
  
  // Save as high-res PNG
  await sharp(inputPath).png({ quality: 95 }).toFile(path.join(outDir, 'director-3d.png'));
  // Save as WEBP
  await sharp(inputPath).webp({ quality: 90 }).toFile(path.join(outDir, 'director-3d.webp'));
  // Save as AVIF
  await sharp(inputPath).avif({ quality: 85 }).toFile(path.join(outDir, 'director-3d.avif'));
  
  // Also save as director-photo
  await sharp(inputPath).png({ quality: 95 }).toFile(path.join(outDir, 'director-photo.png'));
  await sharp(inputPath).webp({ quality: 90 }).toFile(path.join(outDir, 'director-photo.webp'));
  await sharp(inputPath).avif({ quality: 85 }).toFile(path.join(outDir, 'director-photo.avif'));

  console.log('Director images saved successfully in:', outDir);
}

processImage().catch(console.error);
