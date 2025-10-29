#!/usr/bin/env node
/**
 * Script to remove schema generation from all React page components
 * Prevents duplicate schemas (static HTML has schemas via generate-all-pages-html.ts)
 */

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

const pages = [
  'CeramicCoatingPage.tsx',
  'ContactPage.tsx',
  'ExteriorDetailingPage.tsx',
  'FAQPage.tsx',
  'FullDetailPage.tsx',
  'HomePage.tsx',
  'InteriorDetailingPage.tsx',
  'LocationCayecPage.tsx',
  'LocationColumbiaPage.tsx',
  'LocationDetailPage.tsx',
  'LocationIrmoPage.tsx',
  'LocationLexingtonPage.tsx',
  'MobileDetailingPage.tsx',
  'PaintCorrectionPage.tsx',
  'ResourcesPage.tsx',
  'ServicesPage.tsx'
];

console.log(`Fixing ${pages.length} pages...`);

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  ${page} - NOT FOUND`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove import statements for schema generators
  content = content.replace(/import\s+\{\s*generateEnhancedLocalBusinessSchema\s*\}\s+from\s+['"].*?['"];?\n?/g, '');
  content = content.replace(/import\s+\{\s*generateLocalBusinessSchema[^}]*\}\s+from\s+['"].*?['"];?\n?/g, '');
  content = content.replace(/import\s+\{\s*generateOrganizationSchema\s*\}\s+from\s+['"].*?['"];?\n?/g, '');

  // Find and remove schema variable declarations
  // Pattern: const schemas = [...]; or const enhancedSchema = ...; etc
  content = content.replace(/const\s+(schemas|.*?Schema)\s*=\s*(?:generateEnhancedLocalBusinessSchema\(\)|generateLocalBusinessSchema\([^)]*\)|\[[^\]]*generateEnhancedLocalBusinessSchema\(\)[^\]]*\]);?\n?/g, '');

  // Remove schema prop from SEOHead
  content = content.replace(/(\s+schema=\{[^}]+\})/g, '');

  // Add comment if not present
  if (!content.includes('NOTE: Enhanced LocalBusiness schema is pre-rendered')) {
    const exportMatch = content.match(/export\s+(?:const|function)\s+\w+/);
    if (exportMatch) {
      const insertPos = content.indexOf(exportMatch[0]) + exportMatch[0].length;
      const comment = `\n\n  // NOTE: Enhanced LocalBusiness schema is pre-rendered in static HTML via generate-all-pages-html.ts\n  // DO NOT add schemas here to avoid duplication in production builds\n`;
      content = content.slice(0, insertPos) + ' = () => {' + comment + content.slice(insertPos + ' = () => {'.length);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ ${page} - FIXED`);
});

console.log('\nDone! All pages fixed.');
console.log('Run "npm run build" to rebuild the site.');
