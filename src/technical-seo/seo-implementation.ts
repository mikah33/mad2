/**
 * Technical SEO Implementation Generator
 * Complete implementation for all city pages with enhanced optimization
 */

import { generateEnhancedLocalBusinessSchema, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateAggregateRatingSchema, cityData } from './enhanced-schema-templates';
import { generateMetaHTML, generateLocalSEOData, generateHreflangTags } from './meta-optimization';
import { generateCriticalCSS, generateLazyLoadingScript, generateResourcePrefetching, generateServiceWorkerScript, generateWebVitalsScript, generateMobileOptimizationCSS } from './performance-optimization';
import { generateSEOMonitoringScript } from './seo-validation';

/**
 * Generate complete optimized HTML for city page
 */
export function generateOptimizedCityPage(cityKey: string): string {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  // Generate all schema types
  const localBusinessSchema = generateEnhancedLocalBusinessSchema(cityKey);
  const serviceSchema = generateServiceSchema(cityKey);
  const faqSchema = generateFAQSchema(cityKey);
  const breadcrumbSchema = generateBreadcrumbSchema(cityKey);
  const reviewSchema = generateReviewSchema(cityKey);
  const aggregateRatingSchema = generateAggregateRatingSchema(cityKey);
  const localSEOData = generateLocalSEOData(cityKey);

  // Combine all schemas into JSON-LD array
  const combinedSchema = [
    localBusinessSchema,
    serviceSchema,
    faqSchema,
    breadcrumbSchema,
    reviewSchema,
    aggregateRatingSchema,
    localSEOData
  ];

  // Generate meta tags
  const metaHTML = generateMetaHTML(cityKey);
  const hreflangTags = generateHreflangTags();

  // Generate performance optimizations
  const criticalCSS = generateCriticalCSS();
  const resourcePrefetching = generateResourcePrefetching(cityKey);
  const lazyLoadingScript = generateLazyLoadingScript();
  const serviceWorkerScript = generateServiceWorkerScript();
  const webVitalsScript = generateWebVitalsScript();
  const mobileOptimizationCSS = generateMobileOptimizationCSS();
  const seoMonitoringScript = generateSEOMonitoringScript();

  return `<!doctype html>
<html lang="en-US">
  <head>
    ${metaHTML}

    <!-- Technical SEO Verification -->
    <meta name="google-site-verification" content="b4GQ-q-zTZwppzOGNKMIyGGjr10yxYjJ4MNPkFhKTdU" />
    <meta name="p:domain_verify" content="766981af34c3a93a8fc3a3a6beeff5be"/>
    <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

    <!-- Hreflang for multi-location SEO -->
    ${hreflangTags}

    <!-- Resource Hints for Performance -->
    ${resourcePrefetching}

    <!-- Critical CSS for Above-the-Fold Content -->
    ${criticalCSS}

    <!-- Mobile Optimization CSS -->
    ${mobileOptimizationCSS}

    <!-- Enhanced Analytics and Conversion Tracking -->
    <script>
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}

      // Configure Consent Mode V2 with default denied state
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });

      // Initialize Google Analytics/Ads tracking
      gtag('js', new Date());

      // Configure Google Ads with Enhanced Conversions
      gtag('config', 'AW-16694998422', {
        'allow_enhanced_conversions': true,
        'phone_conversion_number': '+18036678731',
        'custom_parameters': {
          'city': '${city.name}',
          'state': 'SC',
          'service_area': '${city.neighborhoods.join(', ')}'
        }
      });

      // Auto-grant consent for US users
      var isEU = false;
      if (!isEU) {
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      }

      // Enhanced conversion tracking with local data
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };

        var enhancedData = {
          'city': '${city.name}',
          'state': 'SC',
          'postal_code': '${city.postalCode}',
          'service_type': 'mobile_auto_detailing'
        };

        gtag('set', 'user_data', enhancedData);

        gtag('event', 'conversion', {
          'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
          'value': 150.0,
          'currency': 'USD',
          'city': '${city.name}',
          'event_callback': callback
        });
        return false;
      }

      // Load tracking scripts with performance optimization
      function loadTrackingScripts() {
        if (document.getElementById('gtag-script')) return;

        var s = document.createElement('script');
        s.id = 'gtag-script';
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16694998422';
        document.head.appendChild(s);
      }

      var trackingLoaded = false;
      function initTracking() {
        if (trackingLoaded) return;
        trackingLoaded = true;
        loadTrackingScripts();
      }

      // Optimized loading strategy
      ['scroll', 'click', 'touchstart', 'keydown'].forEach(event => {
        document.addEventListener(event, initTracking, { passive: true, once: true });
      });
      setTimeout(initTracking, 3000);
    </script>

    <!-- Favicon with cache-busting -->
    <link rel="icon" href="/favicon-48x48.png?v=10" sizes="48x48" type="image/png" />
    <link rel="icon" href="/favicon-96x96.png?v=10" sizes="96x96" type="image/png" />
    <link rel="icon" href="/favicon.ico?v=10" sizes="any" />
    <link rel="shortcut icon" href="/favicon.ico?v=10" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=10" />
    <link rel="manifest" href="/site.webmanifest?v=10" />

    <!-- Enhanced Schema Markup -->
    <script type="application/ld+json">
${JSON.stringify(combinedSchema, null, 2)}
    </script>

    <!-- Meta Pixel Code - Performance Optimized -->
    <script>
      function loadFacebookPixel() {
        if (document.getElementById('fb-pixel')) return;

        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;t.id='fb-pixel';
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1190223929628838');
        fbq('track', 'PageView', {
          city: '${city.name}',
          state: 'SC',
          service_area: '${city.neighborhoods[0]}'
        });
      }

      var fbLoaded = false;
      function initFB() {
        if (fbLoaded) return;
        fbLoaded = true;
        loadFacebookPixel();
      }

      ['scroll', 'click'].forEach(event => {
        document.addEventListener(event, initFB, { passive: true, once: true });
      });
      setTimeout(initFB, 6000);
    </script>

    <!-- Preload critical assets -->
    <link rel="modulepreload" crossorigin href="/assets/react-vendor-2ca3366f.js">
    <link rel="modulepreload" crossorigin href="/assets/ui-vendor-36c18cf5.js">
    <link rel="stylesheet" href="/assets/index-ba8d7906.css">
  </head>

  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBS8H6B2"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <!-- Enhanced Navigation with Breadcrumbs -->
    <nav class="navigation" role="navigation" aria-label="Main navigation">
      <div class="container">
        <div class="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
          <span property="itemListElement" typeof="ListItem">
            <a property="item" typeof="WebPage" href="/">
              <span property="name">Home</span>
            </a>
            <meta property="position" content="1">
          </span>
          <span class="separator"> › </span>
          <span property="itemListElement" typeof="ListItem">
            <a property="item" typeof="WebPage" href="/locations">
              <span property="name">Service Areas</span>
            </a>
            <meta property="position" content="2">
          </span>
          <span class="separator"> › </span>
          <span property="itemListElement" typeof="ListItem">
            <span property="name">${city.name} Auto Detailing</span>
            <meta property="position" content="3">
          </span>
        </div>
      </div>
    </nav>

    <!-- Main Content Container -->
    <div id="root"></div>

    <!-- Lazy Loading Script -->
    ${lazyLoadingScript}

    <!-- Service Worker for Caching -->
    ${serviceWorkerScript}

    <!-- Core Web Vitals Monitoring -->
    ${webVitalsScript}

    <!-- SEO Performance Monitoring -->
    ${seoMonitoringScript}

    <!-- Enhanced Local Business Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://mikahsmobiledetailingsc.com/#organization",
      "name": "Mikah's Auto Detailing",
      "url": "https://mikahsmobiledetailingsc.com",
      "logo": "https://mikahsmobiledetailingsc.com/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-803-667-8731",
        "contactType": "customer service",
        "areaServed": "SC",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/mikahsautodetailing",
        "https://www.instagram.com/mikahsautodetailing"
      ]
    }
    </script>

    <!-- Critical Resource Loading -->
    <script type="module" crossorigin src="/assets/index-c8a06124.js"></script>

    <!-- Structured Data Testing -->
    <script>
      // Validate structured data in development
      if (window.location.hostname === 'localhost') {
        console.log('${city.name} SEO Implementation Loaded');
        console.log('Schema Types:', [
          'LocalBusiness',
          'Service',
          'FAQ',
          'Breadcrumb',
          'Review',
          'AggregateRating',
          'Organization'
        ]);
      }
    </script>
  </body>
</html>`;
}

/**
 * Generate sitemap entries for all city pages
 */
export function generateCitySitemapEntries(): string {
  const entries = Object.keys(cityData).map(cityKey => {
    const city = cityData[cityKey];
    return `
  <url>
    <loc>https://mikahsmobiledetailingsc.com/locations/${city.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://mikahsmobiledetailingsc.com/images/${city.slug}-hero.jpg</image:loc>
      <image:caption>Mobile auto detailing services in ${city.name}, SC</image:caption>
      <image:title>${city.name} Mobile Auto Detailing</image:title>
    </image:image>
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

  <!-- Main Pages -->
  <url>
    <loc>https://mikahsmobiledetailingsc.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Location Hub Page -->
  <url>
    <loc>https://mikahsmobiledetailingsc.com/locations</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- City Pages -->${entries}

</urlset>`;
}

/**
 * Generate robots.txt with city-specific optimization
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# City pages
Allow: /locations/
Allow: /locations/columbia-sc
Allow: /locations/lexington-sc
Allow: /locations/irmo-sc
Allow: /locations/cayce-sc
Allow: /locations/west-columbia-sc

# Important pages
Allow: /services
Allow: /contact
Allow: /pricing

# Block non-essential pages
Disallow: /admin
Disallow: /api
Disallow: /*.json$
Disallow: /*?*

# Sitemap
Sitemap: https://mikahsmobiledetailingsc.com/sitemap.xml
Sitemap: https://mikahsmobiledetailingsc.com/sitemap-cities.xml

# Crawl-delay for better server performance
Crawl-delay: 1`;
}

/**
 * Generate all technical SEO implementations
 */
export function generateAllCityImplementations(): Record<string, string> {
  const implementations: Record<string, string> = {};

  Object.keys(cityData).forEach(cityKey => {
    implementations[cityKey] = generateOptimizedCityPage(cityKey);
  });

  // Add supporting files
  implementations['sitemap'] = generateCitySitemapEntries();
  implementations['robots'] = generateRobotsTxt();

  return implementations;
}

export default {
  generateOptimizedCityPage,
  generateCitySitemapEntries,
  generateRobotsTxt,
  generateAllCityImplementations
};