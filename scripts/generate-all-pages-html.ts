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

// Import mobile detailing schema generators
import { generatePageTypeSchema, generateSchemaScript } from '../src/components/seo/MobileDetailingMasterSchema.js';

const distPath = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const baseUrl = 'https://mikahsmobiledetailingsc.com';

// Generate mobile detailing focused schemas for different page types

// OG Image mapping for each page
const ogImageMap: Record<string, { image: string; width: number; height: number }> = {
  '': { image: 'mclarens-og.jpg', width: 1200, height: 630 },

  // Service pages
  'services': { image: 'logo.jpg', width: 1200, height: 630 },
  'services/interior-detailing': { image: 'interior1.jpg', width: 1200, height: 630 },
  'services/exterior-detailing': { image: 'exterior1.jpg', width: 1200, height: 630 },
  'services/ceramic-coating': { image: 'mclarens.jpg', width: 1200, height: 630 },
  'services/paint-correction': { image: 'exterior2.jpg', width: 1200, height: 630 },
  'services/full-detail': { image: 'interior1.jpg', width: 1200, height: 630 },
  'services/mobile-detailing': { image: 'exterior1.jpg', width: 1200, height: 630 },

  // Location pages
  'locations': { image: 'exterior3.jpg', width: 1200, height: 630 },
  'locations/columbia-sc': { image: 'exterior1.jpg', width: 1200, height: 630 },
  'locations/lexington-sc': { image: 'exterior2.jpg', width: 1200, height: 630 },
  'locations/irmo-sc': { image: 'mclarens.jpg', width: 1200, height: 630 },
  'locations/cayce-sc': { image: 'interior1.jpg', width: 1200, height: 630 },
  'locations/west-columbia': { image: 'exterior4.jpg', width: 1200, height: 630 },
  'locations/chapin-sc': { image: 'exterior5.jpg', width: 1200, height: 630 },
  'locations/swansea-sc': { image: 'exterior6.jpg', width: 1200, height: 630 },
  'locations/newberry-sc': { image: 'exterior1.jpg', width: 1200, height: 630 },
  'locations/blythewood-sc': { image: 'exterior3.jpg', width: 1200, height: 630 },

  // Main pages
  'pricing': { image: 'exterior2.jpg', width: 1200, height: 630 },
  'contact': { image: 'logo.jpg', width: 1200, height: 630 },
  'faq': { image: 'exterior4.jpg', width: 1200, height: 630 },
  'faq/ceramic-coating': { image: 'mclarens.jpg', width: 1200, height: 630 },
  'faq/mobile-detailing': { image: 'exterior5.jpg', width: 1200, height: 630 },
  'resources': { image: 'exterior6.jpg', width: 1200, height: 630 },

  // Additional pages
  'blog': { image: 'exterior1.jpg', width: 1200, height: 630 },
  'gallery': { image: 'mclarens.jpg', width: 1200, height: 630 },
  'book': { image: 'logo.jpg', width: 1200, height: 630 },
  'book/thank-you': { image: 'logo.jpg', width: 1200, height: 630 },

  // SEO Landing Pages
  'auto-detailing-services-columbia-sc': { image: 'exterior1.jpg', width: 1200, height: 630 },

  // Marketing Landing Pages
  'lp': { image: 'mclarens-og.jpg', width: 1200, height: 630 },
  'lp-specials': { image: 'mclarens-og.jpg', width: 1200, height: 630 },
};

console.log('\n🚀 Generating pre-rendered HTML files for ALL pages...\n');

// Define all routes that need HTML files
const routes = [
  // Homepage
  { path: '', title: "Mobile Car Detailing Columbia SC | Mikah's Auto Detailing", description: '5.0-star mobile auto detailing in Columbia, Lexington & Irmo SC. We come to you - details from $100, full interior + exterior $225. Call (803) 667-8731.' },

  // Service pages
  { path: 'services', title: 'Auto Detailing Services | Columbia SC', description: 'Mobile detailing services in Columbia SC: interior from $200, exterior from $100, full detail $225, ceramic coating from $999. 5.0-star - we come to you.' },
  { path: 'services/interior-detailing', title: 'Interior Car Detailing From $200 | Columbia SC', description: 'Interior car detailing from $200 in Columbia & Lexington SC. Deep clean, shampoo & extraction, UV protection, odor removal. 5.0-star mobile - we come to you.' },
  { path: 'services/exterior-detailing', title: 'Exterior Car Detailing From $100 | Columbia SC', description: 'Exterior detailing from $100 in Columbia SC: foam wash, wheel decontamination, wax & trim dressing. 5.0-star mobile service at your driveway. (803) 667-8731.' },
  { path: 'services/ceramic-coating', title: 'Ceramic Coating From $999 | Columbia SC', description: 'Professional ceramic coating from $999 in Columbia SC with 2-5 year protection. Paint correction prep included. 5.0-star rated mobile installer.' },
  { path: 'services/paint-correction', title: 'Paint Correction From $599 | Columbia SC', description: 'Paint correction from $599 in Columbia SC - 1-step & 2-step swirl and scratch removal that restores gloss. 5.0-star mobile service. Free quote: (803) 667-8731.' },
  { path: 'services/full-detail', title: 'Full Detail Package $225 Flat | Columbia SC', description: 'Full detail package - $225 flat in Columbia & Lexington SC. Complete interior + exterior with wax protection. 5.0-star mobile detailing, we come to you.' },
  { path: 'services/mobile-detailing', title: 'Mobile Auto Detailing | Columbia SC', description: '5.0-star mobile detailing at your home or office in Columbia, Lexington & Irmo SC. Details from $100, full interior + exterior $225. Same-day available.' },

  // Location pages
  { path: 'locations', title: 'Service Areas | Mobile Detailing in SC', description: 'Mobile car detailing across the Midlands: Columbia, Lexington, West Columbia, Irmo, Cayce, Chapin, Blythewood & more. 5.0-star - we come to you, from $100.' },
  { path: 'locations/columbia-sc', title: 'Car Detailing Columbia SC | Mobile Service', description: 'Mobile car detailing in Columbia SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225 at your driveway. Call (803) 667-8731.' },
  { path: 'locations/lexington-sc', title: 'Car Detailing Lexington SC | Mobile Service', description: 'Mobile car detailing in Lexington SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to your home or office.' },
  { path: 'locations/irmo-sc', title: 'Car Detailing Irmo SC | Mobile Service', description: 'Mobile car detailing in Irmo SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225 at your home or office. (803) 667-8731.' },
  { path: 'locations/cayce-sc', title: 'Car Detailing Cayce SC | Mobile Service', description: 'Mobile car detailing in Cayce SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to you. Call (803) 667-8731.' },
  { path: 'locations/west-columbia', title: 'Car Detailing West Columbia SC | Mobile Service', description: 'Mobile car detailing in West Columbia SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to you. (803) 667-8731.' },
  { path: 'locations/chapin-sc', title: 'Car Detailing Chapin SC | Mobile Service', description: 'Mobile car detailing in Chapin SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225 at your home or office. (803) 667-8731.' },
  { path: 'locations/swansea-sc', title: 'Car Detailing Swansea SC | Mobile Service', description: 'Mobile car detailing in Swansea SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to you. Call (803) 667-8731.' },
  { path: 'locations/newberry-sc', title: 'Car Detailing Newberry SC | Mobile Service', description: 'Mobile car detailing in Newberry SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to you. (803) 667-8731.' },
  { path: 'locations/blythewood-sc', title: 'Car Detailing Blythewood SC | Mobile Service', description: 'Mobile car detailing in Blythewood SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225 at your driveway. (803) 667-8731.' },

  // Main pages
  { path: 'contact', title: 'Contact Us | Book Your Detail', description: 'Contact Mikah\'s Auto Detailing for a free quote. Call (803) 667-8731 or book online.' },
  { path: 'pricing', title: 'Car Detailing Prices 2026 — Columbia SC Price List', description: '2026 car detailing price list for Columbia & Lexington SC: Exterior from $100, Interior from $200, Basic Detail $225, Factory Reset $400. Mobile — we come to you. Free quote: (803) 667-8731.' },
  { path: 'faq', title: 'Frequently Asked Questions | Auto Detailing', description: 'Common questions about auto detailing, ceramic coating, pricing, and our mobile service.' },
  { path: 'faq/ceramic-coating', title: 'Ceramic Coating FAQ | Common Questions', description: 'Frequently asked questions about ceramic coating, application, maintenance, and benefits.' },
  { path: 'faq/mobile-detailing', title: 'Mobile Detailing FAQ | Common Questions', description: 'Frequently asked questions about our mobile detailing service and process.' },
  { path: 'resources', title: 'Auto Detailing Resources | Tips & Guides', description: 'Helpful resources, guides, and tips for maintaining your vehicle between professional details.' },

  // Additional pages
  { path: 'blog', title: 'Auto Detailing Blog | Tips & Guides', description: 'Expert auto detailing tips, car care guides, and industry insights from Columbia SC\'s trusted mobile detailer.' },
  { path: 'gallery', title: 'Gallery | Our Work', description: 'See our professional auto detailing results. Before and after photos of ceramic coating, paint correction, and interior detailing.' },
  { path: 'book', title: 'Book Your Detail | Schedule Online', description: 'Book your professional mobile auto detailing appointment online. Easy scheduling for Columbia, Lexington, and Irmo SC.' },
  { path: 'book/thank-you', title: 'Thank You | Booking Confirmed', description: 'Thank you for booking with Mikah\'s Auto Detailing. We\'ll contact you shortly to confirm your appointment.' },

  // SEO Landing Pages
  { path: 'auto-detailing-services-columbia-sc', title: 'Auto Detailing Services in Columbia, SC | Mobile Detailing', description: 'Professional auto detailing services in Columbia, SC. Mobile detailing, ceramic coating, paint correction, interior & exterior packages. 5-star rated. Call (803) 667-8731!' },

  // Marketing Landing Pages
  { path: 'lp', title: 'Mobile Auto Detailing Columbia SC | Special Offer', description: 'Professional mobile auto detailing in Columbia & Lexington SC. Interior/exterior detailing from $225. 5-star rated. Same day available. Call (803) 667-8731!' },
  { path: 'lp-specials', title: 'Auto Detailing Specials Columbia SC | Limited Time', description: 'Exclusive auto detailing specials in Columbia SC. Save on ceramic coating, full details, and more. Limited time offers!' },
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
  const fullTitle = route.title.includes("Mikah's Auto Detailing") ? route.title : `${route.title} | Mikah's Auto Detailing`;

  // Determine page type and service type for schema generation
  let pageType = 'homepage';
  let serviceType = undefined;

  if (routePath === '') {
    pageType = 'homepage';
  } else if (routePath.startsWith('services/')) {
    pageType = 'service';
    serviceType = routePath.replace('services/', '');
  } else if (routePath.startsWith('locations/')) {
    pageType = 'location';
  } else if (routePath.startsWith('faq')) {
    pageType = 'faq';
  } else if (routePath === 'gallery') {
    pageType = 'gallery';
  } else if (routePath === 'contact') {
    pageType = 'contact';
  }

  // Generate mobile detailing focused schemas
  const schemas = generatePageTypeSchema(pageType, serviceType);
  const schemaScript = `    ${generateSchemaScript(schemas)}`;

  let html = baseHtml;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

  // Update meta description (handle both " />" and "/>" formats)
  html = html.replace(
    /<meta name="description" content="[^"]*"[^>]*>/,
    `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
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

  // Get OG image for this route
  const ogImageData = ogImageMap[routePath] || { image: 'mclarens-og.jpg', width: 1200, height: 630 };
  const ogImageUrl = `${baseUrl}/${ogImageData.image}`;

  // Update OG tags (flexible regex to handle both " />" and "/>" formats)
  html = html.replace(/<meta property="og:title" content="[^"]*"[^>]*>/g, `<meta property="og:title" content="${fullTitle.replace(/"/g, '&quot;')}" />`);
  html = html.replace(
    /<meta property="og:description" content="[^"]*"[^>]*>/g,
    `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(/<meta property="og:url" content="[^"]*"[^>]*>/g, `<meta property="og:url" content="${pageUrl}" />`);

  // Update OG image
  html = html.replace(
    /<meta property="og:image" content="[^"]*"[^>]*>/g,
    `<meta property="og:image" content="${ogImageUrl}" />`
  );

  // Update OG image dimensions
  html = html.replace(
    /<meta property="og:image:width" content="[^"]*"[^>]*>/g,
    `<meta property="og:image:width" content="${ogImageData.width}" />`
  );
  html = html.replace(
    /<meta property="og:image:height" content="[^"]*"[^>]*>/g,
    `<meta property="og:image:height" content="${ogImageData.height}" />`
  );

  // Update Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*"[^>]*>/g, `<meta name="twitter:title" content="${fullTitle.replace(/"/g, '&quot;')}" />`);
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"[^>]*>/g,
    `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );

  // Update Twitter image tag
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"[^>]*>/g,
    `<meta name="twitter:image" content="${ogImageUrl}" />`
  );

  // Inject enhanced schema
  html = html.replace('</head>', `${schemaScript}\n  </head>`);

  // Write HTML file
  const outputPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(outputPath, html);

  generatedCount++;
  console.log(`✅ Generated: /${routePath}/index.html → OG Image: ${ogImageData.image}`);
});

console.log(`\n✨ Successfully generated ${generatedCount} additional HTML files!`);
console.log(`📊 Total pages with enhanced schema: ${generatedCount} (non-blog) + 46 (blogs) = ${generatedCount + 46} pages\n`);
