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
  { path: '', title: "Mobile Detailing Near Me | Columbia SC | From $100 — Mikah's Auto Detailing", description: 'We come to you. 5.0-star mobile car detailing in Columbia, Lexington & Irmo SC. Exterior from $100, full detail $225. Same-day available. Call (803) 667-8731.' },

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
  { path: 'locations/columbia-sc', title: "Car Detailing Columbia SC | $225 Full Detail — Mikah's Auto Detailing", description: 'Mobile car detailing in Columbia SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225 at your driveway. Call (803) 667-8731.' },
  { path: 'locations/lexington-sc', title: "Car Detailing Lexington SC | $225 Full Detail — Mikah's Auto Detailing", description: 'Mobile car detailing in Lexington SC - 5.0-star rated. Interior from $200, exterior from $100, full detail $225. We come to your home or office.' },
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

  const pageUrl = routePath ? `${baseUrl}/${routePath}/` : `${baseUrl}/`;
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

  // City-specific facts so each location page reads uniquely to AI crawlers
  // (grounded in the same local data the React pages use)
  const cityFacts: Record<string, string> = {
    'locations/columbia-sc':
      'We detail vehicles across downtown Columbia, The Vista, Five Points, Shandon, Forest Acres, and Rosewood — at homes, offices, and apartment complexes near the University of South Carolina and Fort Jackson.',
    'locations/lexington-sc':
      'Serving Lexington and the Lake Murray shoreline, including neighborhoods off Highway 378 and Sunset Boulevard. Lake Murray boat owners: we also detail marine vessels dockside with a custom quote.',
    'locations/irmo-sc':
      'Covering Irmo, the Harbison corridor, and Lake Murray communities off Broad River Road. Popular with commuters near Columbiana Centre who want their vehicle detailed while they work.',
    'locations/cayce-sc':
      'Serving Cayce and the Riverland Park area along the Congaree River, plus neighborhoods near Airport Boulevard and the SC Farmers Market. Minutes from our Columbia and West Columbia routes.',
    'locations/west-columbia':
      'We come to West Columbia homes and businesses from the State Street river district to Saluda Gardens and Westover Acres, plus offices along Sunset Boulevard (US-378) and near Lexington Medical Center.',
    'locations/chapin-sc':
      'Serving Chapin — the Capital of Lake Murray — including Timberlake and lakefront communities. We detail daily drivers, trucks, and boats at your home or dock.',
    'locations/swansea-sc':
      'Mobile detailing for Swansea and southern Lexington County. Rural properties welcome — we bring water and power for a full detail at your home, farm, or business.',
    'locations/newberry-sc':
      "Serving Newberry, from the historic downtown around the Newberry Opera House to Newberry College and surrounding Highway 34 communities. Worth the drive — mobile service included.",
    'locations/blythewood-sc':
      'Covering Blythewood and northeast Richland County, including Cobblestone Park, Longcreek, and the I-77 corridor. Convenient scheduling for Blythewood commuters and families.',
  };
  const cityBlock = cityFacts[routePath]
    ? `\n      <h2>Local Mobile Detailing in ${route.title.split('|')[0].replace('Car Detailing', '').trim()}</h2>\n      <p>${cityFacts[routePath]}</p>`
    : '';

  // Inject static, crawler-readable content into #root. AI crawlers (GPTBot,
  // PerplexityBot, ClaudeBot) don't execute JavaScript, so without this every
  // page body is empty to them. React replaces this markup on hydration.
  const h1 = route.title.split('|')[0].trim();

  // Per-page crawler-readable body content. MUST mirror the visible React page
  // content for that route — do not add content here that users cannot see.
  const pageBodies: Record<string, string> = {
    'services/ceramic-coating': `
      <h2>Mobile Ceramic Coating — We Come to You</h2>
      <p>Almost every ceramic installer in Columbia is a fixed shop. You drive across town, leave the car for a few days, and arrange a ride home. We work differently: we bring the equipment, the water, the power, and the lighting to your driveway or your office parking lot.</p>
      <p>That covers Columbia, Lexington, West Columbia, Irmo, Cayce, Chapin, Blythewood, Swansea, and Newberry — with no travel fee anywhere in the Midlands.</p>
      <p>Ceramic coating is mostly preparation. The coating itself goes on in about an hour; getting the paint ready is the real work, and it is where cheaper coating jobs cut corners. Every ceramic job we do includes a full decontamination wash, clay treatment, paint correction, a panel wipe, hand-leveled application, and a proper cure before the vehicle goes back into service.</p>
      <h2>How Ceramic Coating Holds Up in South Carolina</h2>
      <p>The Midlands is genuinely hard on paint, and that is exactly why a coating pays off more here than it would in a dry climate. We get heavy spring pollen that turns mildly acidic once it sits in the rain. Summer brings heat, humidity, and love bugs whose remains etch clear coat within days. Park under the pines and oaks most of us have in our yards and you are dealing with sap. And the UV load fades red and black paint faster than people expect.</p>
      <p>A coating takes that abuse instead of your clear coat. Bug guts, bird droppings, sap, and pollen are all acidic — on bare paint they etch, and on a coated surface you have a real buffer to get them off before damage happens.</p>
      <p>Coating life depends on the vehicle and how it is kept. A garaged car that gets washed properly holds up near the top of the range; a truck that lives outside under trees works harder for it. To keep it performing, wash with a pH-neutral soap and skip automatic brush tunnels — those brushes are what put swirls back into paint you just paid to correct.</p>
      <h2>Ceramic Coating vs. Wax vs. Paint Correction</h2>
      <ul>
        <li><strong>Wax or sealant</strong> — weeks to a few months of protection. Cheap, easy, and temporary.</li>
        <li><strong><a href="/services/paint-correction">Paint correction</a></strong> — removes existing swirls and scratches. It makes paint look new, but it does not protect anything on its own. From $599, and it is already included in your ceramic coating job.</li>
        <li><strong>Ceramic coating</strong> — two to five years of UV and chemical protection over corrected paint. From $999.</li>
      </ul>
      <p>If your paint is in good shape and you want it to stay that way for years, coating is the move. If your paint is dull or swirled and you are not ready for a coating, start with paint correction. One thing worth saying plainly: a ceramic coating is not scratch-proof and it will not stop rock chips. It is chemical and UV protection with serious gloss and much easier washing — not armor.</p>
      <h2>Ceramic Coating FAQ</h2>
      <p><strong>How long does ceramic coating last?</strong> Two to five years with proper maintenance, depending on the product and how the vehicle is driven and stored.</p>
      <p><strong>How much does ceramic coating cost?</strong> From $999, custom quoted after we inspect your paint. The price includes the required paint correction prep.</p>
      <p><strong>Can I wash my car after ceramic coating?</strong> Wait 7 days before the first wash to allow complete curing, then wash normally with a pH-neutral soap.</p>
      <p><strong>Do you come to my location?</strong> Yes — we are mobile and bring all equipment needed for professional installation.</p>`,
  };
  const pageBody = pageBodies[routePath] || '';

  const pricingTable = routePath === 'pricing' ? `
      <h2>How Much Does Car Detailing Cost in 2026?</h2>
      <p>In 2026, most U.S. drivers pay between $150 and $300 for a full car detail, depending on vehicle size and condition. Interior-only details typically run $125–$250 and exterior-only $75–$150. At Mikah's Auto Detailing in Columbia SC, the flat $225 Basic Detail covers the full interior and exterior with mobile service included.</p>
      <table>
        <tr><th>Service</th><th>Typical U.S. Range (2026)</th><th>Our Price</th></tr>
        <tr><td>Exterior detail</td><td>$75–$150</td><td>From $100</td></tr>
        <tr><td>Interior detail</td><td>$125–$250</td><td>From $200</td></tr>
        <tr><td>Full detail (interior + exterior)</td><td>$150–$300</td><td>$225 flat</td></tr>
        <tr><td>Deep-clean / restoration detail</td><td>$250–$450</td><td>$400 flat</td></tr>
        <tr><td>Paint correction</td><td>$500–$1,500+</td><td>From $599</td></tr>
        <tr><td>Ceramic coating</td><td>$1,000–$3,000</td><td>From $999</td></tr>
      </table>` : '';
  const staticBody = `<div id="root"><main>
      <h1>${h1}</h1>
      <p>${route.description}</p>${cityBlock}${pricingTable}
      ${pageBody}
      <h2>Services &amp; 2026 Prices</h2>
      <ul>
        <li><a href="/services/exterior-detailing">Exterior Detail</a> — from $100</li>
        <li><a href="/services/interior-detailing">Interior Detail</a> — from $200</li>
        <li><a href="/services/full-detail">Basic Detail (full interior + exterior)</a> — $225 flat</li>
        <li><a href="/services/full-detail">Factory Reset deep clean</a> — $400 flat</li>
        <li><a href="/services/paint-correction">Paint Correction</a> — from $599</li>
        <li><a href="/services/ceramic-coating">Ceramic Coating (2–5 year protection)</a> — from $999</li>
        <li>Routine Reset subscription — $225/month</li>
      </ul>
      <h2>Service Areas</h2>
      <p>Mobile detailing at your home or office in Columbia, Lexington, West Columbia, Irmo, Cayce, Chapin, Blythewood, Swansea, and Newberry SC. No travel fees in the Midlands.</p>
      <p>5.0-star rated · IDA certified · Call <a href="tel:+18036678731">(803) 667-8731</a> or <a href="/book">book online</a>. See the <a href="/pricing">full 2026 price list</a>.</p>
    </main></div>`;
  html = html.replace('<div id="root"></div>', staticBody);

  // Write HTML file
  const outputPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(outputPath, html);

  generatedCount++;
  console.log(`✅ Generated: /${routePath}/index.html → OG Image: ${ogImageData.image}`);
});

console.log(`\n✨ Successfully generated ${generatedCount} additional HTML files!`);
console.log(`📊 Total pages with enhanced schema: ${generatedCount} (non-blog) + 46 (blogs) = ${generatedCount + 46} pages\n`);
