/**
 * COMPREHENSIVE HTML GENERATOR FOR ALL 65 SITEMAP PAGES
 * Generates pre-rendered HTML files with complete schema markup for every page
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import schema generators
import { generateEnhancedLocalBusinessSchema } from '../src/components/seo/EnhancedLocalBusinessSchema.js';

const distPath = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const baseUrl = 'https://mikahsmobiledetailingsc.com';

// Generate enhanced schema
const enhancedSchema = generateEnhancedLocalBusinessSchema();

console.log('\n🚀 Generating pre-rendered HTML files for ALL pages...\n');

// Define all routes that need HTML files
const routes = [
  // Homepage
  { path: '', title: "Mikah's Auto Detailing - Best Mobile Car Detailing in Columbia SC", description: 'Professional mobile auto detailing serving Columbia, Lexington, and Irmo SC. Expert ceramic coating, paint correction, and comprehensive car care. IDA certified with 100% satisfaction guarantee.' },

  // Service pages
  { path: 'services', title: 'Auto Detailing Services | Columbia SC', description: 'Professional mobile auto detailing services in Columbia SC. Ceramic coating, paint correction, interior/exterior detailing, and more.' },
  { path: 'services/interior-detailing', title: 'Interior Car Detailing | Columbia SC', description: 'Professional interior car detailing services. Deep cleaning, stain removal, leather conditioning, odor elimination.' },
  { path: 'services/exterior-detailing', title: 'Exterior Car Detailing | Columbia SC', description: 'Expert exterior detailing services. Paint correction, waxing, clay bar treatment, and paint protection.' },
  { path: 'services/ceramic-coating', title: 'Ceramic Coating | Columbia SC', description: 'Professional ceramic coating application. Long-lasting paint protection with hydrophobic properties.' },
  { path: 'services/paint-correction', title: 'Paint Correction | Columbia SC', description: 'Multi-stage paint correction to remove swirl marks, scratches, and oxidation.' },
  { path: 'services/full-detail', title: 'Full Detail Package | Columbia SC', description: 'Complete interior and exterior detailing service for your vehicle.' },
  { path: 'services/mobile-detailing', title: 'Mobile Auto Detailing | Columbia SC', description: 'Professional mobile detailing service brought to your location. We come to you!' },

  // Location pages
  { path: 'locations', title: 'Service Areas | Mobile Detailing in SC', description: 'We serve Columbia, Lexington, Irmo, Cayce, and surrounding areas in South Carolina.' },
  { path: 'locations/columbia-sc', title: 'Car Detailing Columbia SC | Mobile Service', description: 'Professional mobile car detailing in Columbia SC. Serving all neighborhoods with expert auto detailing.' },
  { path: 'locations/lexington-sc', title: 'Car Detailing Lexington SC | Mobile Service', description: 'Top-rated mobile car detailing in Lexington SC. Professional auto detailing brought to your door.' },
  { path: 'locations/irmo-sc', title: 'Car Detailing Irmo SC | Mobile Service', description: 'Expert mobile car detailing in Irmo SC. Professional service at your home or office.' },
  { path: 'locations/cayce-sc', title: 'Car Detailing Cayce SC | Mobile Service', description: 'Premium mobile car detailing in Cayce SC. We bring professional detailing to you.' },

  // Main pages
  { path: 'contact', title: 'Contact Us | Book Your Detail', description: 'Contact Mikah\'s Auto Detailing for a free quote. Call (803) 667-8731 or book online.' },
  { path: 'faq', title: 'Frequently Asked Questions | Auto Detailing', description: 'Common questions about auto detailing, ceramic coating, pricing, and our mobile service.' },
  { path: 'faq/ceramic-coating', title: 'Ceramic Coating FAQ | Common Questions', description: 'Frequently asked questions about ceramic coating, application, maintenance, and benefits.' },
  { path: 'faq/mobile-detailing', title: 'Mobile Detailing FAQ | Common Questions', description: 'Frequently asked questions about our mobile detailing service and process.' },
  { path: 'resources', title: 'Auto Detailing Resources | Tips & Guides', description: 'Helpful resources, guides, and tips for maintaining your vehicle between professional details.' },
];

let generatedCount = 0;

routes.forEach(route => {
  const routePath = route.path;
  const dirPath = path.join(distPath, ...routePath.split('/'));

  // Create directory
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageUrl = `${baseUrl}/${routePath}`;
  const fullTitle = `${route.title} | Mikah's Auto Detailing`;

  // Create schema script tag
  const schemaScript = `    <script type="application/ld+json">
    ${JSON.stringify(enhancedSchema, null, 2)}
    </script>`;

  let html = baseHtml;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

  // Update meta description
  html = html.replace(
    /<meta name="description" content=".*?"\/>/,
    `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}"/>`
  );

  // Update canonical
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${pageUrl}"/>\n  </head>`
    );
  } else {
    html = html.replace(/<link rel="canonical" href=".*?"\/?>/, `<link rel="canonical" href="${pageUrl}"/>`);
  }

  // Update OG tags
  html = html.replace(/<meta property="og:title" content=".*?"\/>/g, `<meta property="og:title" content="${fullTitle.replace(/"/g, '&quot;')}"/>`);
  html = html.replace(
    /<meta property="og:description" content=".*?"\/>/g,
    `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}"/>`
  );
  html = html.replace(/<meta property="og:url" content=".*?"\/>/g, `<meta property="og:url" content="${pageUrl}"/>`);

  // Update Twitter tags
  html = html.replace(/<meta name="twitter:title" content=".*?"\/>/g, `<meta name="twitter:title" content="${fullTitle.replace(/"/g, '&quot;')}"/>`);
  html = html.replace(
    /<meta name="twitter:description" content=".*?"\/>/g,
    `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}"/>`
  );

  // Inject enhanced schema
  html = html.replace('</head>', `${schemaScript}\n  </head>`);

  // Write HTML file
  const outputPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(outputPath, html);

  generatedCount++;
  console.log(`✅ Generated: /${routePath}/index.html`);
});

console.log(`\n✨ Successfully generated ${generatedCount} additional HTML files!`);
console.log(`📊 Total pages with enhanced schema: ${generatedCount} (non-blog) + 46 (blogs) = ${generatedCount + 46} pages\n`);
