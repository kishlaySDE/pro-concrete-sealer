const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');

  // Fix text gradients
  content = content.replace(/bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent/g, 'text-orange-500');
  
  // Fix background gradients
  content = content.replace(/bg-gradient-to-br from-red-500 to-yellow-400/g, 'bg-orange-500');
  content = content.replace(/bg-gradient-to-r from-red-500 to-yellow-400/g, 'bg-orange-500');
  content = content.replace(/bg-gradient-to-r from-red-500 via-yellow-400 to-red-500/g, 'bg-orange-500');
  
  // Clean up <center> tags
  content = content.replace(/<center>|<\/center>/g, '');

  if (file === 'Hero.jsx') {
      content = content.replace('max-w-2xl text-left', 'max-w-4xl mx-auto text-center flex flex-col items-center');
      content = content.replace('flex flex-wrap gap-4 mt-8', 'flex flex-wrap gap-4 mt-8 justify-center w-full');
  }

  // Ensure content in Industries grid is truly centered (flex col items center)
  if (file === 'Industries.jsx') {
      content = content.replace('grid grid-cols-2', 'grid grid-cols-2 place-items-center');
      content = content.replace('group bg-gray-900', 'group flex flex-col items-center justify-center bg-gray-900 w-full h-full');
  }

  if (file === 'WhoWeHelp.jsx') {
      content = content.replace('group relative bg-gradient-to-b', 'group relative flex flex-col items-center text-center bg-gray-900');
      // For flex items to be centered:
      content = content.replace('space-y-2', 'space-y-2 flex flex-col items-center');
      content = content.replace(/flex items-center gap-2/g, 'flex items-center justify-center gap-2');
  }

  if (file === 'Process.jsx') {
      content = content.replace('bg-gray-950 border border-gray-800', 'bg-gray-950 border border-gray-800 flex flex-col items-center text-center');
  }

  fs.writeFileSync(p, content);
});

// Also fix index.css to ensure root is perfectly aligned
const cssPath = path.join(process.cwd(), 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
// If I changed it to text-align: left, I revert to center
cssContent = cssContent.replace('text-align: left;', 'text-align: center;');
fs.writeFileSync(cssPath, cssContent);

console.log('Script completed successfully!');
