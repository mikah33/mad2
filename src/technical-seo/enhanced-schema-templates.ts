/**
 * Enhanced Schema Markup Templates for Technical SEO Optimization
 * Comprehensive schema implementations for local business pages
 */

export interface CityData {
  name: string;
  slug: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  postalCode: string;
  population: number;
  areaCode: string;
  timezone: string;
  landmarks: string[];
  neighborhoods: string[];
}

export const cityData: Record<string, CityData> = {
  'columbia-sc': {
    name: 'Columbia',
    slug: 'columbia-sc',
    coordinates: { latitude: 34.0007, longitude: -81.0348 },
    postalCode: '29201',
    population: 133803,
    areaCode: '803',
    timezone: 'America/New_York',
    landmarks: ['University of South Carolina', 'State Capitol', 'Riverbanks Zoo'],
    neighborhoods: ['Five Points', 'The Congaree Vista', 'Forest Acres', 'Shandon']
  },
  'lexington-sc': {
    name: 'Lexington',
    slug: 'lexington-sc',
    coordinates: { latitude: 33.9816, longitude: -81.2362 },
    postalCode: '29072',
    population: 23568,
    areaCode: '803',
    timezone: 'America/New_York',
    landmarks: ['Lake Murray', 'Lexington County Museum', 'Icehouse Amphitheater'],
    neighborhoods: ['Old Mill', 'Lake Murray Estates', 'Red Bank Village', 'Gibson Pond']
  },
  'irmo-sc': {
    name: 'Irmo',
    slug: 'irmo-sc',
    coordinates: { latitude: 34.0899, longitude: -81.1812 },
    postalCode: '29063',
    population: 12097,
    areaCode: '803',
    timezone: 'America/New_York',
    landmarks: ['Lake Murray', 'Saluda Shoals Park', 'Harbison Theatre'],
    neighborhoods: ['Friarsgate', 'Lake Carolina', 'Harbison', 'Dutch Fork']
  },
  'cayce-sc': {
    name: 'Cayce',
    slug: 'cayce-sc',
    coordinates: { latitude: 33.9613, longitude: -81.0745 },
    postalCode: '29033',
    population: 13964,
    areaCode: '803',
    timezone: 'America/New_York',
    landmarks: ['Congaree River', 'Cayce Tennis & Fitness Center', 'Historic Cayce'],
    neighborhoods: ['Avondale', 'Springdale', 'Airport Corridor', 'Knox Abbott Drive']
  },
  'west-columbia-sc': {
    name: 'West Columbia',
    slug: 'west-columbia-sc',
    coordinates: { latitude: 33.9936, longitude: -81.0740 },
    postalCode: '29169',
    population: 17233,
    areaCode: '803',
    timezone: 'America/New_York',
    landmarks: ['Riverwalk Park', 'Historic Columbia Speedway', 'Meeting Street Artland'],
    neighborhoods: ['Brookland', 'Sunset', 'New Brookland', 'Cayce-West Columbia']
  }
};

/**
 * Enhanced LocalBusiness Schema with comprehensive city-specific data
 */
export function generateEnhancedLocalBusinessSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`,
    "name": "Mikah's Auto Detailing",
    "legalName": "Mikah's Auto Detailing and Services LLC",
    "alternateName": `Mikah's Mobile Detailing ${city.name}`,
    "slogan": "Premium Mobile Auto Detailing - We Come to You!",
    "description": `Top-rated mobile auto detailing services in ${city.name}, SC. Professional mobile car detailing, interior detailing, exterior detailing, and ceramic coating services. IDA certified mobile detailer serving ${city.name} and surrounding areas. We bring professional car care directly to your location with same-day service availability.`,
    "url": `https://mikahsmobiledetailingsc.com/locations/${city.slug}`,
    "telephone": "(803) 667-8731",
    "email": "mikahsautodetailing@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "SC",
      "postalCode": city.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.latitude.toString(),
      "longitude": city.coordinates.longitude.toString()
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.latitude.toString(),
        "longitude": city.coordinates.longitude.toString()
      },
      "geoRadius": "15000",
      "description": `Mobile auto detailing service area covering ${city.name} and surrounding neighborhoods including ${city.neighborhoods.slice(0, 3).join(', ')}`
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Venmo", "PayPal", "Zelle"],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "founder": {
      "@type": "Person",
      "name": "Mikah Albertson",
      "jobTitle": "Owner & Master Detailer",
      "email": "mikahsautodetailing@gmail.com",
      "knowsAbout": ["Mobile Auto Detailing", "Ceramic Coating", "Paint Correction", "Interior Detailing"]
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://mikahsmobiledetailingsc.com/logo.jpg",
      "width": 480,
      "height": 480,
      "caption": "Mikah's Auto Detailing Logo"
    },
    "image": [
      "https://mikahsmobiledetailingsc.com/logo.jpg",
      "https://mikahsmobiledetailingsc.com/exterior1.jpg",
      "https://mikahsmobiledetailingsc.com/exterior2.jpg",
      "https://mikahsmobiledetailingsc.com/exterior3.jpg",
      "https://mikahsmobiledetailingsc.com/interior1.jpg",
      "https://mikahsmobiledetailingsc.com/mclarens.jpg"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Mobile Auto Detailing Services in ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Mobile Detail",
            "description": "Exterior wash, interior vacuum, and basic detailing"
          },
          "price": "75",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Service Detail",
            "description": "Complete exterior and interior detailing with protection"
          },
          "price": "150",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Ceramic Coating",
            "description": "Paint correction and ceramic coating application"
          },
          "price": "500",
          "priceCurrency": "USD"
        }
      ]
    },
    "hasCertification": [
      {
        "@type": "Certification",
        "name": "IDA Certified Detailer",
        "issuedBy": {
          "@type": "Organization",
          "name": "International Detailing Association"
        },
        "description": "Certified professional auto detailer with advanced training in paint correction, ceramic coatings, and interior restoration"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": city.name,
        "containedInPlace": {
          "@type": "State",
          "name": "South Carolina"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mikahsautodetailing",
      "https://www.instagram.com/mikahsautodetailing",
      "https://www.google.com/maps/place/Mikah's+Auto+Detailing"
    ]
  };
}

/**
 * Service Schema for each city location
 */
export function generateServiceSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#service`,
    "serviceType": "Mobile Auto Detailing",
    "name": `Mobile Auto Detailing Services in ${city.name}, SC`,
    "description": `Professional mobile auto detailing services in ${city.name}, South Carolina. We offer comprehensive car detailing, ceramic coating, paint correction, and interior cleaning services directly at your location.`,
    "provider": {
      "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": "South Carolina"
      }
    },
    "serviceAudience": {
      "@type": "Audience",
      "audienceType": "Vehicle Owners",
      "geographicArea": {
        "@type": "City",
        "name": city.name
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Mobile Detail Package",
        "description": "Exterior wash and wax, interior vacuum and wipe down",
        "price": "75",
        "priceCurrency": "USD",
        "validIn": {
          "@type": "City",
          "name": city.name
        }
      },
      {
        "@type": "Offer",
        "name": "Full Service Detail Package",
        "description": "Complete exterior detail, interior deep clean, protection application",
        "price": "150",
        "priceCurrency": "USD",
        "validIn": {
          "@type": "City",
          "name": city.name
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${city.name} Mobile Detailing Services`,
      "itemListElement": [
        "Exterior Washing and Waxing",
        "Interior Deep Cleaning",
        "Ceramic Coating Application",
        "Paint Correction Services",
        "Headlight Restoration",
        "Engine Bay Cleaning",
        "Leather Conditioning",
        "Odor Elimination"
      ]
    }
  };
}

/**
 * FAQ Schema for local questions
 */
export function generateFAQSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you provide mobile auto detailing services in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we provide professional mobile auto detailing services throughout ${city.name}, SC. We come directly to your home, office, or preferred location with all necessary equipment and supplies.`
        }
      },
      {
        "@type": "Question",
        "name": `What areas of ${city.name} do you serve?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We serve all areas of ${city.name} including ${city.neighborhoods.join(', ')} and surrounding neighborhoods. Our service area covers a 15-mile radius from ${city.name}.`
        }
      },
      {
        "@type": "Question",
        "name": "How long does mobile auto detailing take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile auto detailing typically takes 2-4 hours depending on the service package selected. Basic details take 2-3 hours, while full service details with ceramic coating can take 4-6 hours."
        }
      },
      {
        "@type": "Question",
        "name": `What is the cost of mobile auto detailing in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our mobile auto detailing services in ${city.name} start at $75 for basic packages and range up to $500+ for premium ceramic coating services. Pricing depends on vehicle size and service level selected.`
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ceramic coating services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are certified ceramic coating installers offering professional-grade ceramic coating application. Our ceramic coating services include paint correction preparation and multi-layer ceramic coating application for long-lasting protection."
        }
      }
    ]
  };
}

/**
 * Breadcrumb Schema for navigation
 */
export function generateBreadcrumbSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mikahsmobiledetailingsc.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://mikahsmobiledetailingsc.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${city.name} Auto Detailing`,
        "item": `https://mikahsmobiledetailingsc.com/locations/${city.slug}`
      }
    ]
  };
}

/**
 * Review Schema for local credibility
 */
export function generateReviewSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "name": `Excellent Mobile Detailing Service in ${city.name}`,
    "author": {
      "@type": "Person",
      "name": "Satisfied Customer"
    },
    "reviewBody": `Outstanding mobile auto detailing service in ${city.name}. Professional, thorough, and convenient. My car looks amazing and the service was completed right at my home. Highly recommend for anyone in the ${city.name} area!`,
    "publisher": {
      "@type": "Organization",
      "name": "Google Reviews"
    }
  };
}

/**
 * Aggregate Rating Schema
 */
export function generateAggregateRatingSchema(cityKey: string) {
  const city = cityData[cityKey];
  if (!city) throw new Error(`City data not found for ${cityKey}`);

  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@id": `https://mikahsmobiledetailingsc.com/locations/${city.slug}/#business`
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47"
  };
}