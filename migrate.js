const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/components').filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (!content.startsWith("'use client';") && !content.startsWith('"use client";')) {
    content = '"use client";\n' + content;
    changed = true;
  }

  if (content.includes('react-router-dom')) {
    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, imports) => {
      let newImports = [];
      if (imports.includes('Link')) newImports.push("import Link from 'next/link';");
      if (imports.includes('useLocation')) newImports.push("import { usePathname } from 'next/navigation';");
      return newImports.join('\n');
    });
    
    content = content.replace(/useLocation\(\)/g, 'usePathname()');
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log('Done replacing components');
