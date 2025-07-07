// Script untuk generate favicon otomatis
// Jalankan: node generate-favicon.js

const fs = require('fs');
const path = require('path');

// Buat folder public jika belum ada
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// SVG Favicon dengan design modern
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0070f3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0050d0;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#bgGradient)" filter="url(#shadow)"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" 
        font-size="55" font-weight="bold" fill="white" 
        font-family="Arial, sans-serif" 
        style="text-shadow: 0px 2px 4px rgba(0,0,0,0.3)">S</text>
</svg>`;

// Alternative design - Code icon
const svgCodeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0070f3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0050d0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#bgGradient)"/>
  <g transform="translate(50, 50)">
    <text x="-25" y="5" font-size="40" font-weight="bold" fill="white" font-family="monospace">&lt;/&gt;</text>
  </g>
</svg>`;

// Alternative design - Modern S
const svgModernS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0070f3;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0090ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100" height="100" rx="25" fill="#0a0a0a"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" 
        font-size="60" font-weight="900" fill="url(#bgGradient)" 
        font-family="Arial Black, sans-serif" filter="url(#glow)">S</text>
</svg>`;

// Simpan SVG files
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
fs.writeFileSync(path.join(publicDir, 'favicon-code.svg'), svgCodeIcon);
fs.writeFileSync(path.join(publicDir, 'favicon-modern.svg'), svgModernS);

console.log('✅ Favicon SVG files created successfully!');
console.log('\n📁 Files created:');
console.log('   - public/favicon.svg (default)');
console.log('   - public/favicon-code.svg (code icon)');
console.log('   - public/favicon-modern.svg (modern style)');
console.log('\n🎯 Next steps:');
console.log('1. Choose your favorite design');
console.log('2. Convert to ICO: https://cloudconvert.com/svg-to-ico');
console.log('3. Save as public/favicon.ico');
console.log('4. Deploy your changes!');

// Buat contoh HTML untuk preview
const previewHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Favicon Preview</title>
    <style>
        body { font-family: Arial; padding: 20px; background: #f0f0f0; }
        .preview { display: inline-block; margin: 20px; text-align: center; }
        .icon { width: 64px; height: 64px; display: block; margin: 0 auto 10px; }
        .icon-large { width: 128px; height: 128px; }
    </style>
</head>
<body>
    <h1>Favicon Preview</h1>
    
    <div class="preview">
        <img src="favicon.svg" class="icon icon-large">
        <h3>Default</h3>
    </div>
    
    <div class="preview">
        <img src="favicon-code.svg" class="icon icon-large">
        <h3>Code Icon</h3>
    </div>
    
    <div class="preview">
        <img src="favicon-modern.svg" class="icon icon-large">
        <h3>Modern S</h3>
    </div>
    
    <h2>Different Sizes:</h2>
    <div class="preview">
        <img src="favicon.svg" class="icon" style="width: 16px; height: 16px;">
        <p>16x16</p>
    </div>
    <div class="preview">
        <img src="favicon.svg" class="icon" style="width: 32px; height: 32px;">
        <p>32x32</p>
    </div>
    <div class="preview">
        <img src="favicon.svg" class="icon">
        <p>64x64</p>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'favicon-preview.html'), previewHTML);

console.log('\n👁️  Preview: Open public/favicon-preview.html in browser');