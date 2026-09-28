import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'public/images/heroes',
  'public/images/servicios-contables',
  'public/images/servicios-laborales',
  'public/images/servicios-tributarios',
  'public/images',
  'public',
  'src/assets',
];
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const formatSize = (bytes) => (bytes / 1024).toFixed(2) + ' KB';

async function optimizeImages() {
  let totalOriginal = 0;
  let totalWebp = 0;
  let totalAvif = 0;
  let processedCount = 0;

  console.log('🚀 Iniciando optimización multimedia con Sharp (WebP y AVIF)...\n');
  console.log('------------------------------------------------------------------------------------------------');
  console.log(`| ${'Archivo Original'.padEnd(35)} | ${'Original'.padEnd(10)} | ${'WebP'.padEnd(10)} | ${'AVIF'.padEnd(10)} | ${'Ahorro WebP'.padEnd(11)} | ${'Ahorro AVIF'.padEnd(11)} |`);
  console.log('------------------------------------------------------------------------------------------------');

  for (const relDir of TARGET_DIRS) {
    const dirPath = path.resolve(process.cwd(), relDir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!EXTENSIONS.includes(ext)) continue;

      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) continue;
      const originalSize = stat.size;

      const parsed = path.parse(filePath);
      const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
      const avifPath = path.join(parsed.dir, `${parsed.name}.avif`);

      // Convert to WebP
      await sharp(filePath)
        .webp({ quality: 80, alphaQuality: 85, effort: 6 })
        .toFile(webpPath);

      // Convert to AVIF
      await sharp(filePath)
        .avif({ quality: 65, effort: 6, chromaSubsampling: '4:2:0' })
        .toFile(avifPath);

      const webpSize = fs.statSync(webpPath).size;
      const avifSize = fs.statSync(avifPath).size;

      const webpSavings = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);
      const avifSavings = (((originalSize - avifSize) / originalSize) * 100).toFixed(1);

      totalOriginal += originalSize;
      totalWebp += webpSize;
      totalAvif += avifSize;
      processedCount++;

      const relName = path.join(relDir, file).replace(/\\/g, '/');
      console.log(
        `| ${relName.padEnd(35)} | ${formatSize(originalSize).padEnd(10)} | ${formatSize(webpSize).padEnd(10)} | ${formatSize(avifSize).padEnd(10)} | ${(webpSavings + '%').padEnd(11)} | ${(avifSavings + '%').padEnd(11)} |`
      );
    }
  }

  console.log('------------------------------------------------------------------------------------------------');
  console.log(`\n📊 RESUMEN DE OPTIMIZACIÓN MULTIMEDIA (${processedCount} imágenes procesadas):`);
  console.log(`- Tamaño Total Original:  ${formatSize(totalOriginal)} (${(totalOriginal / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`- Tamaño Total WebP:      ${formatSize(totalWebp)} (${(totalWebp / (1024 * 1024)).toFixed(2)} MB) -> Ahorro de ${(((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`- Tamaño Total AVIF:      ${formatSize(totalAvif)} (${(totalAvif / (1024 * 1024)).toFixed(2)} MB) -> Ahorro de ${(((totalOriginal - totalAvif) / totalOriginal) * 100).toFixed(1)}%\n`);
}

optimizeImages().catch((err) => {
  console.error('❌ Error optimizando imágenes:', err);
  process.exit(1);
});
