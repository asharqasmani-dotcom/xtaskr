const fs = require('node:fs');
const sharp = require('/Users/bstar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const manifest = JSON.parse(fs.readFileSync('output/imagegen/manifest.json','utf8'));
(async () => {
 for (const asset of manifest.assets) {
  fs.copyFileSync(asset.generatedPath, asset.projectOriginal);
  await sharp(asset.projectOriginal).resize(asset.width,asset.height,{fit:asset.alpha?'contain':'cover',position:'centre',background:{r:0,g:0,b:0,alpha:0}}).webp({quality:90,alphaQuality:100}).toFile(asset.websiteAsset);
 }
 console.log('Saved optimized project assets:',manifest.assets.length);
})();
