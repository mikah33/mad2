/**
 * Mobile Detailing Service Schema - Specialized schema for mobile car detailing services
 * Targeting high-volume keywords: "detailing car near me", "automotive detail near me"
 */

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface MobileDetailingServiceOptions {
  serviceType?: 'mobile-detailing' | 'interior-detailing' | 'exterior-detailing' | 'full-detail';
  includePackages?: boolean;
  includePricing?: boolean;
  includeServiceArea?: boolean;
}

/**
 * Generate specialized Service schema for mobile detailing services
 */
export const generateMobileDetailingServiceSchema = (
  options: MobileDetailingServiceOptions = {}
) => {
  const {
    serviceType = 'mobile-detailing',
    includePackages = true,
    includePricing = true,
    includeServiceArea = true
  } = options;

  const serviceSchemas = {
    'mobile-detailing': {
      name: 'Mobile Car Detailing Services',
      description: 'Professional mobile car detailing services brought to your location in Columbia SC. Complete interior and exterior detailing, we come to you!',
      serviceType: 'MobileDetailingService',
      keywords: [
        'mobile car detailing',
        'mobile auto detailing',
        'mobile detailing near me',
        'car detailing near me',
        'automotive detail near me',
        'mobile car wash',
        'mobile detailing columbia sc'
      ]
    },
    'ceramic-coating': {
      name: 'Ceramic Coating Application Service',
      description: 'Professional ceramic coating application for long-lasting paint protection and enhanced vehicle appearance.',
      serviceType: 'CeramicCoatingService',
      keywords: [
        'ceramic coating',
        'ceramic coating near me',
        'paint protection',
        'automotive ceramic coating'
      ]
    },
    'paint-correction': {
      name: 'Paint Correction Services',
      description: 'Multi-stage paint correction to remove swirl marks, scratches, and oxidation from your vehicle paint.',
      serviceType: 'PaintCorrectionService',
      keywords: [
        'paint correction',
        'swirl mark removal',
        'scratch removal',
        'paint restoration'
      ]
    },
    'interior-detailing': {
      name: 'Car Interior Detailing Service',
      description: 'Professional car interior detailing: deep cleaning, vacuuming, upholstery cleaning, leather conditioning, dashboard cleaning, and odor removal.',
      serviceType: 'InteriorDetailingService',
      keywords: [
        'car interior detailing',
        'interior detailing near me',
        'car interior cleaning',
        'upholstery cleaning',
        'leather conditioning',
        'interior car detailing columbia sc'
      ]
    },
    'exterior-detailing': {
      name: 'Exterior Auto Detailing Service',
      description: 'Professional exterior auto detailing: washing, clay bar treatment, polishing, waxing, tire cleaning, and paint protection.',
      serviceType: 'ExteriorDetailingService',
      keywords: [
        'exterior auto detailing',
        'exterior car detailing',
        'car washing and waxing',
        'paint protection',
        'exterior detailing near me'
      ]
    },
    'full-detail': {
      name: 'Full Service Automotive Detailing',
      description: 'Complete automotive detailing package: full interior and exterior detailing, paint correction, waxing, and protection.',
      serviceType: 'FullDetailService',
      keywords: [
        'full service automotive detailing',
        'complete car detailing',
        'automotive detail service',
        'full car detail near me'
      ]
    }
  };

  const selectedService = serviceSchemas[serviceType];

  // Fallback if service type not found
  if (!selectedService) {
    console.warn(`Service type "${serviceType}" not found in serviceSchemas`);
    return null;
  }

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/services/${serviceType}#service`,

    // Service Information
    name: selectedService.name,
    description: selectedService.description,
    serviceType: selectedService.serviceType,

    // Provider Information
    provider: {
      '@type': ['LocalBusiness', 'AutomotiveBusiness'],
      '@id': `${baseUrl}/#business`,
      name: "Mikah's Auto Detailing",
      alternateName: "Mikah's Mobile Detailing",
      url: baseUrl,
      telephone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com'
    },

    // Brand
    brand: {
      '@type': 'Brand',
      name: "Mikah's Auto Detailing",
      logo: `${baseUrl}/logo.jpg`
    },

    // Service Details
    category: 'Mobile Auto Detailing',
    keywords: selectedService.keywords.join(', '),

    // Availability
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00'
    },

    // Service Features
    serviceOutput: {
      '@type': 'Thing',
      name: 'Professional Vehicle Detailing',
      description: 'Clean, protected, and professionally detailed vehicle'
    },

    // Certifications
    hasCertification: [
      {
        '@type': 'Certification',
        name: 'IDA Certified Mobile Detailer',
        issuedBy: {
          '@type': 'Organization',
          name: 'International Detailing Association'
        }
      }
    ]
  };

  // Add service area if requested
  if (includeServiceArea) {
    schema.areaServed = [
      {
        '@type': 'City',
        name: 'Columbia',
        description: 'Mobile car detailing Columbia SC'
      },
      {
        '@type': 'City',
        name: 'Lexington',
        description: 'Mobile auto detailing Lexington SC'
      },
      {
        '@type': 'City',
        name: 'Irmo',
        description: 'Mobile detailing Irmo SC'
      },
      {
        '@type': 'City',
        name: 'Cayce',
        description: 'Mobile car detailing Cayce SC'
      }
    ];

    schema.serviceArea = {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '34.0007',
        longitude: '-81.0348'
      },
      geoRadius: '25000'
    };
  }

  // Add pricing information if requested
  if (includePricing) {
    const pricingMap = {
      'mobile-detailing': { min: '150', max: '350' },
      'interior-detailing': { min: '100', max: '200' },
      'exterior-detailing': { min: '120', max: '250' },
      'full-detail': { min: '250', max: '450' },
      'ceramic-coating': { min: '800', max: '1500' },
      'paint-correction': { min: '400', max: '800' }
    };

    const pricing = pricingMap[serviceType];
    if (!pricing) {
      console.warn(`No pricing found for service type: ${serviceType}`);
      return schema; // Return without pricing
    }
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: `${pricing.min}-${pricing.max}`,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: pricing.min,
        maxPrice: pricing.max,
        valueAddedTaxIncluded: false
      },
      seller: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing"
      }
    };
  }

  // Add service packages if requested
  if (includePackages && serviceType === 'mobile-detailing') {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Mobile Detailing Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic Mobile Detailing',
            description: 'Essential mobile car detailing with wash, vacuum, and basic interior cleaning'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '150'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Mobile Detailing',
            description: 'Comprehensive mobile detailing with interior deep clean, exterior wash, wax, and tire shine'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '250'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Mobile Detailing',
            description: 'Ultimate mobile detailing with paint correction and premium protection'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '350'
          }
        }
      ]
    };
  }

  return schema;
};

/**
 * Generate FAQ Schema for mobile detailing services
 * Updated with critical "People Also Ask" questions for enhanced SEO
 */
export const generateMobileDetailingFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/faq/mobile-detailing`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does mobile detailing cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile detailing services start at $75 for basic exterior washes and range up to $400+ for comprehensive packages. Pricing depends on vehicle size, service selected, and condition. We offer competitive rates with no hidden fees - get your personalized quote by calling (803) 667-8731.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in a mobile detailing service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile detailing packages include exterior wash and wax, interior vacuuming and cleaning, dashboard conditioning, window cleaning, tire shine, and wheel cleaning. Premium packages add paint correction, ceramic coating, deep interior shampooing, and leather conditioning. We bring all equipment, water, and eco-friendly products to your location.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often should you detail your vehicle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most vehicles should be professionally detailed every 3-6 months to maintain optimal appearance and protect resale value. Daily drivers in Columbia\'s climate may benefit from quarterly service, while garage-kept vehicles can go 6 months. Our subscription service provides convenient regular maintenance at discounted rates.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of ceramic coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic coating provides long-lasting paint protection, enhanced gloss, easier cleaning, and UV protection. It creates a hydrophobic barrier that repels water, dirt, and contaminants while maintaining your vehicle\'s showroom shine for years. Columbia\'s humid climate and intense sun make ceramic coating especially valuable for preserving your investment.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does ceramic coating last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional ceramic coating typically lasts 2-5 years depending on the product grade and maintenance. Our premium ceramic packages include 3-year warranties with proper care. The coating\'s durability makes it more cost-effective than traditional wax, which needs reapplication every 3-4 months.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide mobile services in Lexington and Columbia, SC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We specialize in mobile auto detailing throughout Lexington, Columbia, and surrounding South Carolina areas. We come directly to your home, office, or any convenient location with all professional equipment. Mobile service eliminates your travel time and provides ultimate convenience.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does a typical detailing service take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The duration varies depending on the service selected. A basic detail typically takes 2-3 hours, while our comprehensive packages can take 4-6 hours. Ceramic coating applications require 6-8 hours. We\'ll provide a specific time estimate when you book.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve in the Columbia region?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We proudly serve Lexington, Columbia, West Columbia, Irmo, Cayce, Forest Acres, Blythewood, and surrounding Midlands areas. Our mobile service covers a 30-mile radius from Columbia, ensuring convenient professional detailing wherever you are in the greater Columbia metropolitan area.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is mobile detailing as effective as shop detailing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile detailing delivers the same professional results as shop-based services. We use commercial-grade equipment, professional products, and bring our own water supply. Mobile service offers superior convenience while maintaining the highest quality standards - many clients prefer the personalized attention and time savings.'
        }
      },
      {
        '@type': 'Question',
        name: 'What forms of payment do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and convenient digital payment methods including Venmo, Cash App, and Zelle. Payment is collected upon service completion to your satisfaction.'
        }
      }
    ]
  };
};

export default {
  generateMobileDetailingServiceSchema,
  generateMobileDetailingFAQSchema
};