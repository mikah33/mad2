/**
 * Enhanced LocalBusiness Schema with comprehensive business details
 * Includes: certifications, skills, awards, reviews, payment methods, hours, keywords, etc.
 */

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface EnhancedLocalBusinessSchemaOptions {
  includeReviews?: boolean;
  includeAwards?: boolean;
  includePaymentMethods?: boolean;
  includeServices?: boolean;
  includeKeywords?: boolean;
}

/**
 * Generate ultra-comprehensive LocalBusiness schema with ALL business details
 */
export const generateEnhancedLocalBusinessSchema = (
  options: EnhancedLocalBusinessSchemaOptions = {}
) => {
  const {
    includeReviews = true,
    includeAwards = true,
    includePaymentMethods = true,
    includeServices = true,
    includeKeywords = true
  } = options;

  // Set 2: Car detailing keywords (primary focus)
  const primaryKeywords = [
    'car detailing near me', 'mobile car detailing', 'auto detailing', 'mobile auto detailing',
    'car detailing columbia sc', 'mobile detailing columbia sc', 'auto detailing columbia sc',
    'interior car detailing', 'mobile car detailing columbia sc', 'auto detailing near me',
    'mobile detailing near me', 'car detailing services', 'automotive detailing',
    'vehicle detailing', 'auto detailing services', 'car detail shops', 'mobile detailing',
    'car detailing lexington sc', 'auto detailing lexington sc', 'vehicle detailing services',
    'automotive detail', 'mobile automotive detailing', 'auto mobile detailing',
    'car detailing irmo sc', 'mobile car wash', 'car cleaning services'
  ];

  // Set 1: Ceramic coating keywords (secondary)
  const secondaryKeywords = [
    'ceramic coating', 'ceramic coating columbia sc', 'auto ceramic coating', 'car ceramic coating',
    'automotive ceramic coating', 'ceramic coating service', 'professional ceramic coating',
    'ceramic paint protection', 'ceramic paint coating', 'vehicle ceramic coating',
    'ceramic detailing', 'car detailing ceramic coating', 'ceramic coating for cars'
  ];

  const allKeywords = [...primaryKeywords, ...secondaryKeywords];

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,

    // Basic Information
    name: "Mikah's Auto Detailing",
    legalName: "Mikah's Auto Detailing and Services LLC",
    alternateName: "Mikah's Mobile Detailing",

    // Branding
    slogan: "Mobile Detailing in Columbia SC - We Come to You",
    description: 'Professional mobile auto detailing services in Columbia, Lexington, Irmo, and Cayce SC. Expert ceramic coating, paint correction, interior and exterior detailing. IDA certified with 5-star reviews. We bring premium car care to your doorstep.',

    // Contact Information
    url: baseUrl,
    telephone: '(803) 667-8731',
    email: 'mikahsautodetailing@gmail.com',

    // Physical Address
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Columbia',
      addressRegion: 'SC',
      postalCode: '29072',
      addressCountry: 'US'
    },

    // Geographic Coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.0007',
      longitude: '-81.0348'
    },

    // Service Area - Cities Served
    areaServed: [
      {
        '@type': 'City',
        name: 'Columbia',
        '@id': 'https://www.wikidata.org/wiki/Q49231',
        sameAs: 'https://en.wikipedia.org/wiki/Columbia,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Lexington',
        '@id': 'https://www.wikidata.org/wiki/Q2004821',
        sameAs: 'https://en.wikipedia.org/wiki/Lexington,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Irmo',
        '@id': 'https://www.wikidata.org/wiki/Q2004858',
        sameAs: 'https://en.wikipedia.org/wiki/Irmo,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Cayce',
        '@id': 'https://www.wikidata.org/wiki/Q2004694',
        sameAs: 'https://en.wikipedia.org/wiki/Cayce,_South_Carolina'
      },
      {
        '@type': 'State',
        name: 'South Carolina',
        '@id': 'https://www.wikidata.org/wiki/Q1456',
        sameAs: 'https://en.wikipedia.org/wiki/South_Carolina'
      }
    ],

    // Business Hours (9 AM - 5 PM Every Day)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],

    // Founder
    founder: {
      '@type': 'Person',
      name: 'Mikah Albertson',
      jobTitle: 'Owner & Master Detailer',
      email: 'mikahsautodetailing@gmail.com'
    },

    // Logo & Images
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.jpg`,
      width: 480,
      height: 480,
      caption: "Mikah's Auto Detailing Logo"
    },

    image: [
      `${baseUrl}/logo.jpg`,
      `${baseUrl}/exterior1.jpg`,
      `${baseUrl}/exterior2.jpg`,
      `${baseUrl}/mclarens.jpg`,
      `${baseUrl}/interior1.jpg`
    ],

    // Price Range
    priceRange: '$$$',

    // Certifications
    hasCertification: [
      {
        '@type': 'Certification',
        name: 'IDA Certified Detailer',
        issuedBy: {
          '@type': 'Organization',
          name: 'International Detailing Association'
        },
        description: 'Certified professional auto detailer with advanced training in paint correction, ceramic coatings, and interior restoration'
      },
      {
        '@type': 'Certification',
        name: 'Ceramic Pro Certified Installer',
        description: 'Authorized installer of professional-grade ceramic coating systems'
      }
    ],

    // Professional Skills
    knowsAbout: [
      'Mobile Auto Detailing',
      'Ceramic Coating Application',
      'Paint Correction',
      'Interior Detailing',
      'Exterior Detailing',
      'Paint Protection',
      'Swirl Mark Removal',
      'Leather Conditioning',
      'Engine Bay Detailing',
      'Headlight Restoration',
      'Scratch Removal',
      'Clay Bar Treatment',
      'Wax and Sealant Application',
      'Steam Cleaning',
      'Odor Removal',
      'Pet Hair Removal',
      'Stain Removal'
    ],

    // Social Media & Web Presence
    sameAs: [
      'https://www.facebook.com/mikahsautodetailing',
      'https://www.instagram.com/mikahsautodetailing',
      'https://www.google.com/maps/place/Mikah+s+Auto+Detailing',
      'https://www.yelp.com/biz/mikahs-auto-detailing-columbia'
    ],

    // Contact Point
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(803) 667-8731',
      contactType: 'Customer Service',
      email: 'mikahsautodetailing@gmail.com',
      areaServed: 'US-SC',
      availableLanguage: 'English',
      contactOption: ['TollFree', 'HearingImpairedSupported'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00'
      }
    }
  };

  // Add Aggregate Rating (12 Facebook + 19 Google = 31 total reviews, average 4.95 stars)
  if (includeReviews) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '31',
      reviewCount: '31'
    };
  }

  // Add Award
  if (includeAwards) {
    schema.award = [
      {
        '@type': 'Award',
        name: 'Best Detailer in Columbia SC on Yelp',
        url: 'https://biz.yelp.com/biz_info/OB2NZTtXBrkYWffG8nmxig',
        issuedBy: {
          '@type': 'Organization',
          name: 'Yelp'
        },
        dateAwarded: '2024'
      }
    ];
  }

  // Add Accepted Payment Methods
  if (includePaymentMethods) {
    schema.paymentAccepted = [
      'Cash',
      'Check',
      'Credit Card',
      'Debit Card',
      'PayPal',
      'Zelle',
      'Cash App',
      'Cryptocurrency',
      'Visa',
      'Mastercard',
      'American Express',
      'Discover'
    ];

    schema.currenciesAccepted = 'USD, BTC, ETH';
  }

  // Add Services Offered
  if (includeServices) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Auto Detailing',
            description: 'Complete mobile detailing service brought to your location',
            serviceType: 'Mobile Detailing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            description: 'Professional ceramic coating application for long-lasting paint protection',
            serviceType: 'Ceramic Coating'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Correction',
            description: 'Multi-stage paint correction to remove swirl marks, scratches, and oxidation',
            serviceType: 'Paint Correction'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Detailing',
            description: 'Deep cleaning of interior surfaces, upholstery, and carpet',
            serviceType: 'Interior Detailing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exterior Detailing',
            description: 'Thorough exterior wash, clay bar treatment, and wax protection',
            serviceType: 'Exterior Detailing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Detail Package',
            description: 'Complete interior and exterior detailing service',
            serviceType: 'Full Detail'
          }
        }
      ]
    };
  }

  // Add SEO Keywords
  if (includeKeywords) {
    schema.keywords = allKeywords.join(', ');
  }

  // Additional Business Properties
  schema.priceRange = '$$$';
  schema.currenciesAccepted = 'USD, BTC, ETH';
  schema.paymentAccepted = 'Cash, Credit Card, Debit Card, PayPal, Zelle, Cash App, Cryptocurrency';

  // Business Features
  schema.amenityFeature = [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Mobile Service',
      value: true
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Same-Day Service Available',
      value: true
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Eco-Friendly Products',
      value: true
    }
  ];

  schema.makesOffer = [
    {
      '@type': 'Offer',
      name: 'Free Quotes',
      description: 'Get a free, no-obligation quote for your vehicle detailing needs'
    }
  ];

  return schema;
};

export default {
  generateEnhancedLocalBusinessSchema
};
