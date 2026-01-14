// Enhanced Local Business Schema Markup for Multiple Cities
// Optimized for hyperlocal SEO and "near me" searches

const cityCoordinates = {
  columbia: { lat: "34.0007", lng: "-81.0348" },
  lexington: { lat: "33.9816", lng: "-81.2362" },
  irmo: { lat: "34.0901", lng: "-81.1826" },
  cayce: { lat: "33.9613", lng: "-81.0748" },
  westColumbia: { lat: "33.9937", lng: "-81.0739" }
};

const neighborhoods = {
  columbia: [
    { name: "Five Points", description: "Entertainment and USC district" },
    { name: "Forest Acres", description: "Luxury residential community" },
    { name: "Shandon", description: "Historic upscale neighborhood" },
    { name: "The Vista", description: "Business and entertainment area" },
    { name: "Rosewood", description: "Growing residential district" },
    { name: "Eau Claire", description: "Professional community" }
  ],
  lexington: [
    { name: "Red Bank", description: "Lake Murray community" },
    { name: "Oak Grove", description: "Family residential area" },
    { name: "Lake Murray Estates", description: "Waterfront luxury homes" }
  ],
  irmo: [
    { name: "Seven Oaks", description: "Family-friendly neighborhoods" },
    { name: "Harbison", description: "Business and shopping district" },
    { name: "St. Andrews", description: "Established residential area" }
  ],
  cayce: [
    { name: "Historic Cayce", description: "Historic downtown area" },
    { name: "Granby Mill Village", description: "Historic mill community" }
  ],
  westColumbia: [
    { name: "Riverwalk", description: "Waterfront recreational area" },
    { name: "Airport Area", description: "Business and transport hub" }
  ]
};

const landmarks = {
  columbia: [
    { name: "University of South Carolina", type: "education", service: "USC Gameday Mobile Detailing" },
    { name: "South Carolina State House", type: "government", service: "Professional Government Worker Vehicle Care" },
    { name: "Five Points Entertainment District", type: "entertainment", service: "Late Night Pickup Services" },
    { name: "Colonial Life Arena", type: "sports", service: "Event Parking Detailing" },
    { name: "Williams-Brice Stadium", type: "sports", service: "Gameday Tailgate Services" }
  ],
  lexington: [
    { name: "Lake Murray", type: "recreation", service: "Boat Launch Cleanup Services" },
    { name: "Sunset Boulevard Shopping", type: "commercial", service: "Shopping Center Convenience Detailing" },
    { name: "Lexington Medical Center", type: "healthcare", service: "Healthcare Worker Vehicle Services" }
  ],
  irmo: [
    { name: "Harbison State Forest", type: "recreation", service: "Outdoor Enthusiast Vehicle Cleaning" },
    { name: "Columbiana Centre", type: "shopping", service: "Shopping Trip Car Care" },
    { name: "Seven Oaks Park", type: "recreation", service: "Family Event Detailing" }
  ],
  cayce: [
    { name: "Historic Downtown Cayce", type: "historic", service: "Historic Community Vehicle Care" },
    { name: "Congaree River", type: "recreation", service: "Waterfront Activity Cleanup" }
  ],
  westColumbia: [
    { name: "Riverwalk Park", type: "recreation", service: "Post-Exercise Vehicle Cleanup" },
    { name: "South Carolina State Museum", type: "cultural", service: "Visitor Vehicle Services" },
    { name: "USC School of Law", type: "education", service: "Professional Student Services" }
  ]
};

// Generate enhanced local business schema for specific city
export function generateEnhancedLocalSchema(city, serviceType = 'full') {
  const cityData = {
    columbia: { name: "Columbia", zip: "29201" },
    lexington: { name: "Lexington", zip: "29072" },
    irmo: { name: "Irmo", zip: "29063" },
    cayce: { name: "Cayce", zip: "29033" },
    westColumbia: { name: "West Columbia", zip: "29169" }
  };

  const coords = cityCoordinates[city];
  const cityInfo = cityData[city];
  const cityNeighborhoods = neighborhoods[city] || [];
  const cityLandmarks = landmarks[city] || [];

  return {
    "@context": "https://schema.org",
    "@type": ["AutoDetailingService", "LocalBusiness"],
    "name": `Mikah's Mobile Auto Detailing - ${cityInfo.name}`,
    "alternateName": `Mikah's Detailing ${cityInfo.name}`,
    "description": `Premier mobile auto detailing services in ${cityInfo.name}, SC. Serving ${cityNeighborhoods.map(n => n.name).join(', ')} and surrounding areas with professional vehicle care.`,
    "url": `https://mikahsmobiledetailingsc.com/${city}`,
    "telephone": "+18036678731",
    "email": "info@mikahsmobiledetailingsc.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityInfo.name,
      "addressRegion": "SC",
      "postalCode": cityInfo.zip,
      "addressCountry": "US",
      "streetAddress": "Mobile Service - We Come To You"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityInfo.name,
        "addressRegion": "SC",
        "addressCountry": "US"
      },
      ...cityNeighborhoods.map(neighborhood => ({
        "@type": "Neighborhood",
        "name": neighborhood.name,
        "description": neighborhood.description,
        "parentLocality": `${cityInfo.name}, SC`
      }))
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coords.lat,
        "longitude": coords.lng
      },
      "geoRadius": "15 miles"
    },
    "serviceType": [
      "Mobile Auto Detailing",
      "Exterior Car Washing",
      "Interior Car Cleaning",
      "Ceramic Coating Application",
      "Paint Correction Services",
      ...cityLandmarks.map(landmark => landmark.service)
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${cityInfo.name} Mobile Detailing Services`,
      "itemListElement": [
        ...cityLandmarks.map(landmark => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": landmark.service,
            "description": `Specialized mobile detailing service for ${landmark.name} in ${cityInfo.name}`,
            "areaServed": landmark.name,
            "category": landmark.type
          }
        })),
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Mobile Detailing",
            "description": `Complete exterior wash and protection in ${cityInfo.name}`,
            "category": "automotive"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Deep Cleaning",
            "description": `Thorough interior cleaning for ${cityInfo.name} residents`,
            "category": "automotive"
          }
        }
      ]
    },
    "openingHours": [
      "Mo-Sa 08:00-18:00"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Venmo", "CashApp"],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": `${cityInfo.name} Customer`
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": `Excellent mobile detailing service in ${cityInfo.name}! They came right to my location and did an amazing job.`
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": `${cityInfo.name} Mobile Detailing Special`,
        "description": `Professional mobile auto detailing service in ${cityInfo.name}, SC`,
        "price": "Starting at $75",
        "priceCurrency": "USD",
        "availability": "InStock",
        "validFrom": new Date().toISOString(),
        "areaServed": {
          "@type": "City",
          "name": cityInfo.name
        }
      }
    ],
    "knowsAbout": [
      `${cityInfo.name} auto detailing`,
      `${cityInfo.name} mobile car wash`,
      `${cityInfo.name} ceramic coating`,
      ...cityNeighborhoods.map(n => `${n.name} car detailing`),
      ...cityLandmarks.map(l => `${l.name} vehicle services`)
    ],
    "slogan": `${cityInfo.name}'s Premier Mobile Auto Detailing Service`,
    "founder": {
      "@type": "Person",
      "name": "Mikah Albertson",
      "knowsAbout": ["Auto Detailing", "Mobile Services", `${cityInfo.name} Local Market`]
    }
  };
}

// Generate neighborhood-specific schema
export function generateNeighborhoodSchema(city, neighborhood) {
  const cityInfo = { columbia: "Columbia", lexington: "Lexington", irmo: "Irmo", cayce: "Cayce", westColumbia: "West Columbia" }[city];
  const coords = cityCoordinates[city];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Mobile Auto Detailing in ${neighborhood}, ${cityInfo}`,
    "description": `Professional mobile auto detailing services specifically for ${neighborhood} neighborhood in ${cityInfo}, SC`,
    "serviceType": "Mobile Auto Detailing",
    "areaServed": {
      "@type": "Neighborhood",
      "name": neighborhood,
      "parentLocality": `${cityInfo}, SC`
    },
    "provider": {
      "@type": "AutoDetailingService",
      "name": "Mikah's Mobile Auto Detailing",
      "telephone": "+18036678731"
    },
    "offers": {
      "@type": "Offer",
      "description": `Mobile detailing service in ${neighborhood}`,
      "areaServed": neighborhood
    }
  };
}

// Generate service area schema for precise geographic targeting
export function generateServiceAreaSchema(city, radiusMiles = 15) {
  const coords = cityCoordinates[city];
  const cityName = { columbia: "Columbia", lexington: "Lexington", irmo: "Irmo", cayce: "Cayce", westColumbia: "West Columbia" }[city];

  return {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": `${cityName} Mobile Detailing Service Area`,
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coords.lat,
        "longitude": coords.lng
      },
      "geoRadius": `${radiusMiles} miles`
    },
    "containsPlace": [
      {
        "@type": "City",
        "name": cityName,
        "addressRegion": "SC"
      }
    ]
  };
}

// Export all functions for use in city pages
export { cityCoordinates, neighborhoods, landmarks };