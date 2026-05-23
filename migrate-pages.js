const fs = require('fs');
const path = require('path');

const pages = [
  { src: 'TradingPage.tsx', dest: 'trading' },
  { src: 'MarketPage.tsx', dest: 'market' },
  { src: 'CompanyPage.tsx', dest: 'company' },
  { src: 'PartnersPage.tsx', dest: 'partners' }
];

const srcDir = 'c:\\Users\\anask\\Desktop\\rakizfx-trading\\src\\pages';
const appDir = 'c:\\Users\\anask\\Desktop\\Rakizzz\\rakizfx-next\\src\\app';

pages.forEach(page => {
  const srcFile = path.join(srcDir, page.src);
  const destDir = path.join(appDir, page.dest);
  const destFile = path.join(destDir, 'page.tsx');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  let content = fs.readFileSync(srcFile, 'utf8');

  // Add "use client" if it uses hooks or motion
  if (content.includes('useState') || content.includes('useEffect') || content.includes('motion')) {
    content = '"use client";\n\n' + content;
  }

  // Replace ../components/ with @/components/
  content = content.replace(/\.\.\/components\//g, '@/components/');
  
  // Replace ../lib/ with @/lib/
  content = content.replace(/\.\.\/lib\//g, '@/lib/');

  // Replace react-router-dom Link and useLocation
  if (content.includes('react-router-dom')) {
    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, imports) => {
      let newImports = [];
      if (imports.includes('Link')) newImports.push("import Link from 'next/link';");
      if (imports.includes('useLocation')) newImports.push("import { usePathname } from 'next/navigation';");
      return newImports.join('\n');
    });
    
    content = content.replace(/useLocation\(\)/g, 'usePathname()');
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
  }

  fs.writeFileSync(destFile, content);
  console.log(`Migrated ${page.src} to ${page.dest}/page.tsx`);
});
