import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES modules __dirname alternative
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data files (optional - may not exist)
let services: any[] = [];
let locations: any[] = [];

try {
  const servicesModule = await import('../src/data/services.js');
  services = servicesModule.services || [];
} catch (e) {
  // services.js doesn't exist, use hardcoded service pages
}

try {
  const locationsModule = await import('../src/data/locations.js');
  locations = locationsModule.locations || [];
} catch (e) {
  // locations.js doesn't exist
}

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SITE_URL = 'https://mikahsautodetailing.com';
const currentDate = new Date().toISOString().split('T')[0];

/**
 * Generate sitemap.xml with all website URLs
 */
function generateSitemap(): string {
  const urls: SitemapURL[] = [];

  // Homepage
  urls.push({
    loc: `${SITE_URL}/`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 1.0,
  });

  // Services listing page
  urls.push({
    loc: `${SITE_URL}/services`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // Individual service pages
  const servicePages = [
    'interior-detailing',
    'exterior-detailing',
    'ceramic-coating',
    'paint-correction',
    'full-detail',
    'mobile-detailing'
  ];

  servicePages.forEach((slug) => {
    urls.push({
      loc: `${SITE_URL}/services/${slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  // Legacy service pages (if they exist from data file)
  if (typeof services !== 'undefined') {
    services.forEach((service) => {
      urls.push({
        loc: `${SITE_URL}/services/${service.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.9,
      });
    });
  }

  // Locations listing page
  urls.push({
    loc: `${SITE_URL}/locations`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // Individual location pages
  locations.forEach((location) => {
    urls.push({
      loc: `${SITE_URL}/locations/${location.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  // Blog listing page
  urls.push({
    loc: `${SITE_URL}/blog`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.8,
  });

  // Blog posts (to be populated when blog posts are added)
  // Example blog posts - replace with actual blog data when available
  const blogPosts = [
    // { slug: 'ceramic-coating-guide', date: currentDate },
    // { slug: 'interior-detailing-tips', date: currentDate },
  ];

  blogPosts.forEach((post) => {
    urls.push({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // FAQ page
  urls.push({
    loc: `${SITE_URL}/faq`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
  });

  // Contact page
  urls.push({
    loc: `${SITE_URL}/contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
  });

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach((url) => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  return xml;
}

/**
 * Write sitemap to public directory
 */
function writeSitemap(): void {
  const sitemap = generateSitemap();
  const outputPath = resolve(__dirname, '../public/sitemap.xml');

  writeFileSync(outputPath, sitemap, 'utf-8');
  console.log('✅ Sitemap generated successfully at:', outputPath);
  console.log(`📄 Total URLs: ${sitemap.split('<url>').length - 1}`);
}

// Execute
try {
  writeSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
