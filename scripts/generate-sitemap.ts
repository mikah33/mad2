import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES modules __dirname alternative
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data files (optional - may not exist)
let services: any[] = [];
let locations: any[] = [];
let blogPosts: any[] = [];
let neighborhoods: any[] = [];
let cities: any[] = [];

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

try {
  const blogModule = await import('../src/data/blog.js');
  blogPosts = blogModule.blogPosts || [];
} catch (e) {
  console.log('⚠️  Blog posts not found, skipping blog URLs');
}

try {
  const neighborhoodsModule = await import('../src/data/neighborhoods.js');
  neighborhoods = neighborhoodsModule.neighborhoods || [];
  cities = neighborhoodsModule.cities || [];
} catch (e) {
  console.log('⚠️  Neighborhoods not found, skipping neighborhood URLs');
}

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SITE_URL = 'https://mikahsmobiledetailingsc.com';
const currentDate = new Date().toISOString().split('T')[0];

/**
 * Generate sitemap.xml with mobile detailing business prioritization
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

  // Mobile detailing service pages (HIGH PRIORITY - Primary Business Focus)
  const mobileDetailingPages = [
    'mobile-detailing',      // Primary service - highest priority
    'interior-detailing',    // High-volume keyword target
    'exterior-detailing',    // Core mobile service
    'full-detail'           // Complete mobile package
  ];

  mobileDetailingPages.forEach((slug) => {
    urls.push({
      loc: `${SITE_URL}/services/${slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',    // More frequent updates for primary services
      priority: 0.95,         // Higher priority for mobile detailing focus
    });
  });

  // Secondary service pages (Ceramic coating, paint correction - not primary focus)
  const secondaryServicePages = [
    'ceramic-coating',
    'paint-correction'
  ];

  secondaryServicePages.forEach((slug) => {
    urls.push({
      loc: `${SITE_URL}/services/${slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,          // Lower priority - secondary to mobile detailing
    });
  });

  // Note: Service URLs are handled by mobileDetailingPages and secondaryServicePages above
  // Removed duplicate service URL generation from data file to prevent 404s

  // Locations listing page
  urls.push({
    loc: `${SITE_URL}/locations`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // Individual location pages from data file
  locations.forEach((location) => {
    urls.push({
      loc: `${SITE_URL}/locations/${location.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  // Additional location pages (hardcoded to ensure all are included)
  const additionalLocationSlugs = [
    'columbia-sc',
    'lexington-sc',
    'irmo-sc',
    'cayce-sc',
    'west-columbia-sc',
    'chapin-sc',
    'swansea-sc',
    'newberry-sc',
    'blythewood-sc'
  ];

  additionalLocationSlugs.forEach((slug) => {
    const url = `${SITE_URL}/locations/${slug}`;
    // Only add if not already in urls
    if (!urls.find(u => u.loc === url)) {
      urls.push({
        loc: url,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.9,
      });
    }
  });

  // City hub pages (neighborhoods overview for each city)
  if (cities.length > 0) {
    cities.forEach((city: any) => {
      urls.push({
        loc: `${SITE_URL}/locations/${city.slug}/neighborhoods`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.85,
      });
    });
  }

  // Individual neighborhood pages
  if (neighborhoods.length > 0) {
    neighborhoods.forEach((neighborhood: any) => {
      urls.push({
        loc: `${SITE_URL}/locations/${neighborhood.citySlug}/${neighborhood.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
      });
    });
  }

  // Blog listing page
  urls.push({
    loc: `${SITE_URL}/blog`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.8,
  });

  // Blog posts - dynamically added from blog.ts
  if (blogPosts.length > 0) {
    blogPosts.forEach((post) => {
      urls.push({
        loc: `${SITE_URL}/blog/${post.slug}`,
        lastmod: post.dateModified || post.datePublished || currentDate,
        changefreq: 'monthly',
        priority: post.featured ? 0.9 : 0.8,
      });
    });
  }

  // FAQ pages
  urls.push({
    loc: `${SITE_URL}/faq`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
  });

  // Specialty FAQ pages
  urls.push({
    loc: `${SITE_URL}/faq/ceramic-coating`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  urls.push({
    loc: `${SITE_URL}/faq/mobile-detailing`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // Resources page
  urls.push({
    loc: `${SITE_URL}/resources`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
  });

  // Contact page
  urls.push({
    loc: `${SITE_URL}/contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
  });

  // Review Us page
  urls.push({
    loc: `${SITE_URL}/review-us`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.6,
  });

  // Reviews page
  urls.push({
    loc: `${SITE_URL}/reviews`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.7,
  });

  // Gallery page
  urls.push({
    loc: `${SITE_URL}/gallery`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.7,
  });

  // Pricing page
  urls.push({
    loc: `${SITE_URL}/pricing`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // Booking page
  urls.push({
    loc: `${SITE_URL}/book`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.9,
  });

  // SEO Landing Pages (High Priority - Target Keywords)
  urls.push({
    loc: `${SITE_URL}/auto-detailing-services-columbia-sc`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.95,
  });

  // Marketing Landing Pages
  urls.push({
    loc: `${SITE_URL}/lp`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9,
  });

  urls.push({
    loc: `${SITE_URL}/lp-specials`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9,
  });

  // Legal Pages
  urls.push({
    loc: `${SITE_URL}/privacy`,
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: 0.3,
  });

  urls.push({
    loc: `${SITE_URL}/terms`,
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: 0.3,
  });

  // Deduplicate URLs by loc (keep first occurrence)
  const uniqueUrls = Array.from(
    new Map(urls.map(url => [url.loc, url])).values()
  );

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  uniqueUrls.forEach((url) => {
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
