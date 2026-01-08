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

  // PRIMARY FOCUS: Mobile detailing keywords targeting high-volume searches
  const mobileDetailingKeywords = [
    'detailing car near me',           // 500k searches
    'automotive detail near me',       // 500k searches
    'car interior detailing',          // 50k searches
    'mobile detailing columbia sc',    // Local target
    'mobile car detailing',
    'mobile auto detailing',
    'mobile detailing near me',
    'mobile automotive detailing',
    'mobile car wash and detail',
    'car detailing near me',
    'auto detailing near me',
    'automotive detailing near me',
    'vehicle detailing near me',
    'mobile car detailing services',
    'interior car detailing services',
    'exterior car detailing services',
    'full service mobile detailing',
    'mobile detailing pricing',
    'car detailing columbia sc',
    'auto detailing columbia sc'
  ];

  // SECONDARY: Ceramic coating and paint correction (not primary focus)
  const secondaryServices = [
    'ceramic coating columbia sc',
    'ceramic coating near me',
    'paint correction columbia sc',
    'paint correction near me',
    'ceramic coating and paint correction'
  ];

  const allKeywords = [...mobileDetailingKeywords, ...secondaryServices];

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': `${baseUrl}/#business`,

    // Basic Information
    name: "Mikah's Auto Detailing",
    legalName: "Mikah's Auto Detailing and Services LLC",
    alternateName: "Mikah's Mobile Detailing",

    // Branding - Mobile Detailing Focus
    slogan: "Premium Mobile Auto Detailing - We Come to You!",
    description: 'Top-rated mobile auto detailing services in Columbia SC and surrounding areas. Specializing in mobile car detailing, interior detailing, exterior detailing, full-service automotive detailing packages. IDA certified mobile detailer serving Columbia, Lexington, Irmo, and Cayce. We bring professional car care directly to your location.',

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

    // Service Area - Mobile Detailing Coverage for "detailing near me" searches
    areaServed: [
      {
        '@type': 'City',
        name: 'Columbia',
        '@id': 'https://www.wikidata.org/wiki/Q49231',
        sameAs: 'https://en.wikipedia.org/wiki/Columbia,_South_Carolina',
        description: 'Mobile car detailing Columbia SC - we come to you'
      },
      {
        '@type': 'City',
        name: 'Lexington',
        '@id': 'https://www.wikidata.org/wiki/Q2004821',
        sameAs: 'https://en.wikipedia.org/wiki/Lexington,_South_Carolina',
        description: 'Mobile auto detailing Lexington SC - professional service'
      },
      {
        '@type': 'City',
        name: 'Irmo',
        '@id': 'https://www.wikidata.org/wiki/Q2004858',
        sameAs: 'https://en.wikipedia.org/wiki/Irmo,_South_Carolina',
        description: 'Mobile detailing Irmo SC - convenient at-home service'
      },
      {
        '@type': 'City',
        name: 'Cayce',
        '@id': 'https://www.wikidata.org/wiki/Q2004694',
        sameAs: 'https://en.wikipedia.org/wiki/Cayce,_South_Carolina',
        description: 'Mobile car detailing Cayce SC - premium mobile service'
      },
      {
        '@type': 'State',
        name: 'South Carolina',
        '@id': 'https://www.wikidata.org/wiki/Q1456',
        sameAs: 'https://en.wikipedia.org/wiki/South_Carolina',
        description: 'Mobile detailing services throughout South Carolina'
      }
    ],

    // ServiceArea Schema for 'detailing near me' optimization
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '34.0007',
        longitude: '-81.0348'
      },
      geoRadius: '25000', // 25km radius from Columbia SC
      description: 'Mobile auto detailing service area covering Columbia, Lexington, Irmo, Cayce and surrounding areas'
    },

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

    // Professional Skills - Mobile Detailing Expertise
    knowsAbout: [
      'Mobile Auto Detailing',
      'Mobile Car Detailing Services',
      'On-Site Vehicle Detailing',
      'Interior Car Detailing',
      'Exterior Auto Detailing',
      'Full Service Mobile Detailing',
      'Mobile Detailing Packages',
      'Automotive Detail Services',
      'Professional Car Cleaning',
      'Mobile Car Wash and Detail',
      'Interior Deep Cleaning',
      'Upholstery Cleaning and Protection',
      'Leather Conditioning',
      'Dashboard and Console Cleaning',
      'Carpet and Floor Mat Cleaning',
      'Odor Elimination',
      'Pet Hair Removal',
      'Stain Removal and Treatment',
      'Exterior Paint Cleaning',
      'Wax and Sealant Application',
      'Tire and Wheel Cleaning',
      'Clay Bar Treatment',
      'Engine Bay Cleaning',
      'Headlight Restoration',
      'Ceramic Coating Application',
      'Paint Correction',
      'Swirl Mark Removal',
      'Scratch Removal'
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

  // Add Mobile Detailing Services (Primary Focus)
  if (includeServices) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Mobile Auto Detailing Services',
      description: 'Professional mobile car detailing services brought to your location',
      itemListElement: [
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/mobile-detailing`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/mobile-detailing#service`,
            name: 'Mobile Car Detailing Services',
            description: 'Complete mobile car detailing service brought to your location. Interior and exterior detailing, vacuuming, cleaning, and protection.',
            serviceType: 'MobileDetailingService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/mobile-detailing`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '150-350'
          }
        },
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/interior-detailing`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/interior-detailing#service`,
            name: 'Car Interior Detailing',
            description: 'Professional interior car detailing: deep cleaning, vacuuming, upholstery cleaning, leather conditioning, dashboard cleaning, and odor removal.',
            serviceType: 'InteriorDetailingService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/interior-detailing`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '100-200'
          }
        },
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/exterior-detailing`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/exterior-detailing#service`,
            name: 'Exterior Auto Detailing',
            description: 'Professional exterior auto detailing: washing, clay bar treatment, polishing, waxing, tire cleaning, and paint protection.',
            serviceType: 'ExteriorDetailingService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/exterior-detailing`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '120-250'
          }
        },
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/full-detail`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/full-detail#service`,
            name: 'Full Service Automotive Detailing',
            description: 'Complete automotive detailing package: full interior and exterior detailing, paint correction, waxing, and protection. Our most comprehensive mobile detailing service.',
            serviceType: 'FullDetailService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/full-detail`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '250-450'
          }
        },
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/mobile-detailing-packages`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/mobile-detailing-packages#service`,
            name: 'Mobile Detailing Pricing Packages',
            description: 'Flexible mobile car detailing packages to fit your budget. Basic, premium, and luxury mobile detailing options available.',
            serviceType: 'MobileDetailingPackages',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC']
          }
        },
        // Secondary Services (Ceramic Coating & Paint Correction)
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/ceramic-coating`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/ceramic-coating#service`,
            name: 'Ceramic Coating Application',
            description: 'Professional ceramic coating application for long-lasting paint protection and enhanced shine.',
            serviceType: 'CeramicCoatingService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/ceramic-coating`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '800-1500'
          }
        },
        {
          '@type': 'Offer',
          '@id': `${baseUrl}/services/paint-correction`,
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/services/paint-correction#service`,
            name: 'Paint Correction Services',
            description: 'Multi-stage paint correction to remove swirl marks, scratches, and oxidation.',
            serviceType: 'PaintCorrectionService',
            provider: {
              '@type': 'LocalBusiness',
              name: "Mikah's Auto Detailing"
            },
            areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'Cayce SC'],
            url: `${baseUrl}/services/paint-correction`
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '400-800'
          }
        }
      ]
    };

    // Add Product Schema for Detailing Packages
    schema.hasProduct = [
      {
        '@type': 'Product',
        '@id': `${baseUrl}/products/basic-mobile-detail`,
        name: 'Basic Mobile Detailing Package',
        description: 'Essential mobile car detailing service including wash, vacuum, and basic interior cleaning.',
        category: 'Mobile Car Detailing',
        brand: {
          '@type': 'Brand',
          name: "Mikah's Auto Detailing"
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '150',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: "Mikah's Auto Detailing"
          }
        }
      },
      {
        '@type': 'Product',
        '@id': `${baseUrl}/products/premium-mobile-detail`,
        name: 'Premium Mobile Detailing Package',
        description: 'Comprehensive mobile auto detailing with interior deep clean, exterior wash, wax, and tire shine.',
        category: 'Mobile Car Detailing',
        brand: {
          '@type': 'Brand',
          name: "Mikah's Auto Detailing"
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '250',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: "Mikah's Auto Detailing"
          }
        }
      },
      {
        '@type': 'Product',
        '@id': `${baseUrl}/products/luxury-mobile-detail`,
        name: 'Luxury Mobile Detailing Package',
        description: 'Ultimate mobile car detailing experience with paint correction, ceramic coating prep, and premium protection.',
        category: 'Mobile Car Detailing',
        brand: {
          '@type': 'Brand',
          name: "Mikah's Auto Detailing"
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '350',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: "Mikah's Auto Detailing"
          }
        }
      }
    ];
  }

  // Add SEO Keywords
  if (includeKeywords) {
    schema.keywords = allKeywords.join(', ');
  }

  // Additional Business Properties (only if not already set by options above)
  if (!schema.priceRange) {
    schema.priceRange = '$$';
  }

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
