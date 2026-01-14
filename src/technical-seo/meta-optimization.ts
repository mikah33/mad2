/**
 * Meta Tag Optimization for City-Specific Pages
 * Advanced meta tag generation for local SEO
 */

import { cityData, CityData } from './enhanced-schema-templates';

export interface MetaTagConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  structured?: any;
}

/**
 * Generate optimized meta tags for each city
 */
export function generateCityMetaTags(cityKey: string): MetaTagConfig {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  const baseKeywords = [
    'mobile auto detailing',
    'car detailing',
    'mobile car wash',
    'ceramic coating',
    'paint correction',
    'interior detailing',
    'exterior detailing',
    'auto detailing services',
    'mobile detailing'
  ];

  const citySpecificKeywords = [
    ...baseKeywords.map(keyword => `${keyword} ${city.name} SC`),
    ...baseKeywords.map(keyword => `${keyword} ${city.name}`),
    `mobile detailing ${city.name}`,
    `car detailing near me ${city.name}`,
    `auto detailing ${city.name} South Carolina`,
    ...city.neighborhoods.map(neighborhood => `mobile detailing ${neighborhood}`),
    `${city.postalCode} auto detailing`,
    `${city.areaCode} mobile car wash`
  ];

  const title = `Mobile Auto Detailing ${city.name} SC | Professional Car Detailing Services | Mikah's Auto Detailing`;
  const description = `Premier mobile auto detailing services in ${city.name}, SC. Professional car detailing, ceramic coating, and paint correction at your location. Serving ${city.neighborhoods.slice(0, 3).join(', ')} and all of ${city.name}. Book now: (803) 667-8731`;

  return {
    title,
    description,
    keywords: citySpecificKeywords,
    canonical: `https://mikahsmobiledetailingsc.com/locations/${city.slug}`,
    ogTitle: `Top Mobile Auto Detailing in ${city.name}, SC | Mikah's Mobile Detailing`,
    ogDescription: `Experience premium mobile auto detailing services in ${city.name}, South Carolina. We come to you with professional car detailing, ceramic coating, and interior/exterior cleaning. Trusted by ${city.name} residents.`,
    ogImage: `https://mikahsmobiledetailingsc.com/og-images/${city.slug}-detailing.jpg`,
    ogUrl: `https://mikahsmobiledetailingsc.com/locations/${city.slug}`,
    twitterTitle: `🚗 Mobile Auto Detailing ${city.name} SC | Professional Car Care`,
    twitterDescription: `Premium mobile auto detailing in ${city.name}, SC. We bring professional car care to your driveway. Ceramic coating, paint correction & more. Book today!`,
    twitterImage: `https://mikahsmobiledetailingsc.com/twitter-images/${city.slug}-mobile-detailing.jpg`
  };
}

/**
 * Generate complete HTML meta section for city pages
 */
export function generateMetaHTML(cityKey: string): string {
  const metaTags = generateCityMetaTags(cityKey);
  const city = cityData[cityKey];

  return `
    <!-- Optimized Meta Tags for ${city.name}, SC -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Primary SEO Meta Tags -->
    <title>${metaTags.title}</title>
    <meta name="description" content="${metaTags.description}" />
    <meta name="keywords" content="${metaTags.keywords.join(', ')}" />
    <meta name="author" content="Mikah's Auto Detailing" />
    <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large" />
    <meta name="googlebot" content="index, follow, max-snippet:160, max-image-preview:large" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${metaTags.canonical}" />

    <!-- Geographic Meta Tags -->
    <meta name="geo.region" content="US-SC" />
    <meta name="geo.placename" content="${city.name}, South Carolina" />
    <meta name="geo.position" content="${city.coordinates.latitude};${city.coordinates.longitude}" />
    <meta name="ICBM" content="${city.coordinates.latitude}, ${city.coordinates.longitude}" />

    <!-- Local Business Meta Tags -->
    <meta name="business:contact_data:locality" content="${city.name}" />
    <meta name="business:contact_data:region" content="SC" />
    <meta name="business:contact_data:postal_code" content="${city.postalCode}" />
    <meta name="business:contact_data:country_name" content="United States" />

    <!-- Open Graph / Facebook Meta Tags -->
    <meta property="og:type" content="business.business" />
    <meta property="og:site_name" content="Mikah's Auto Detailing" />
    <meta property="og:title" content="${metaTags.ogTitle}" />
    <meta property="og:description" content="${metaTags.ogDescription}" />
    <meta property="og:url" content="${metaTags.ogUrl}" />
    <meta property="og:image" content="${metaTags.ogImage}" />
    <meta property="og:image:secure_url" content="${metaTags.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Mobile auto detailing service in ${city.name}, SC" />
    <meta property="og:locale" content="en_US" />

    <!-- Business-specific Open Graph -->
    <meta property="business:contact_data:street_address" content="Mobile Service - ${city.name}" />
    <meta property="business:contact_data:locality" content="${city.name}" />
    <meta property="business:contact_data:region" content="SC" />
    <meta property="business:contact_data:postal_code" content="${city.postalCode}" />
    <meta property="business:contact_data:country_name" content="United States" />
    <meta property="business:contact_data:phone_number" content="+1-803-667-8731" />
    <meta property="business:contact_data:email" content="mikahsautodetailing@gmail.com" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@mikahsdetailing" />
    <meta name="twitter:creator" content="@mikahsdetailing" />
    <meta name="twitter:title" content="${metaTags.twitterTitle}" />
    <meta name="twitter:description" content="${metaTags.twitterDescription}" />
    <meta name="twitter:image" content="${metaTags.twitterImage}" />
    <meta name="twitter:image:alt" content="Professional mobile auto detailing in ${city.name}, SC" />

    <!-- Additional SEO Meta Tags -->
    <meta name="application-name" content="Mikah's Auto Detailing" />
    <meta name="apple-mobile-web-app-title" content="Mikah's Detailing" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#023E8A" />
    <meta name="msapplication-TileColor" content="#023E8A" />
    <meta name="msapplication-navbutton-color" content="#023E8A" />

    <!-- Rich Snippets Preparation -->
    <meta name="rating" content="4.9" />
    <meta name="price-range" content="$$" />
    <meta name="payment-methods" content="Cash, Credit Card, Venmo, PayPal" />
    <meta name="service-area" content="${city.name}, ${city.neighborhoods.join(', ')}" />

    <!-- Mobile Optimization -->
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="email=no" />

    <!-- Language and Content -->
    <meta name="language" content="English" />
    <meta name="content-language" content="en-US" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />
    <meta name="revisit-after" content="7 days" />

    <!-- Local SEO Signals -->
    <meta name="city" content="${city.name}" />
    <meta name="state" content="South Carolina" />
    <meta name="zip-code" content="${city.postalCode}" />
    <meta name="area-code" content="${city.areaCode}" />
    <meta name="timezone" content="${city.timezone}" />
  `;
}

/**
 * Generate structured data for local SEO
 */
export function generateLocalSEOData(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`,
        "name": "Mikah's Auto Detailing",
        "url": `https://mikahsmobiledetailingsc.com/locations/${city.slug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": "SC",
          "postalCode": city.postalCode,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": city.coordinates.latitude,
          "longitude": city.coordinates.longitude
        },
        "telephone": "(803) 667-8731",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "servesCuisine": null,
        "priceRange": "$$",
        "acceptsReservations": "True",
        "hasMap": `https://www.google.com/maps/place/${city.coordinates.latitude},${city.coordinates.longitude}`,
        "isAccessibleForFree": false
      },
      {
        "@type": "WebPage",
        "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#webpage`,
        "url": `https://mikahsmobiledetailingsc.com/locations/${city.slug}`,
        "name": `Mobile Auto Detailing ${city.name} SC | Mikah's Auto Detailing`,
        "description": `Professional mobile auto detailing services in ${city.name}, SC. Car detailing, ceramic coating, and paint correction at your location.`,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://mikahsmobiledetailingsc.com/#website"
        },
        "about": {
          "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://mikahsmobiledetailingsc.com/images/${city.slug}-hero.jpg`,
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "WebSite",
        "@id": "https://mikahsmobiledetailingsc.com/#website",
        "url": "https://mikahsmobiledetailingsc.com",
        "name": "Mikah's Auto Detailing",
        "description": "Premium mobile auto detailing services in South Carolina",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mikahsmobiledetailingsc.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };
}

/**
 * Generate hreflang tags for multi-location SEO
 */
export function generateHreflangTags(): string {
  const locations = Object.keys(cityData);

  const hreflangTags = locations.map(cityKey => {
    const city = cityData[cityKey];
    return `<link rel="alternate" hreflang="en-${city.name.toLowerCase()}" href="https://mikahsmobiledetailingsc.com/locations/${city.slug}" />`;
  }).join('\n    ');

  return `
    <!-- Hreflang for multi-location SEO -->
    <link rel="alternate" hreflang="en" href="https://mikahsmobiledetailingsc.com" />
    <link rel="alternate" hreflang="en-us" href="https://mikahsmobiledetailingsc.com" />
    ${hreflangTags}
  `;
}

export default {
  generateCityMetaTags,
  generateMetaHTML,
  generateLocalSEOData,
  generateHreflangTags
};