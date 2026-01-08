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
 */
export const generateMobileDetailingFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/faq/mobile-detailing`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide mobile car detailing near me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We provide mobile car detailing services throughout Columbia SC, Lexington, Irmo, Cayce, and surrounding areas. We come directly to your location with all our professional equipment.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does mobile auto detailing include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mobile auto detailing includes interior vacuuming and cleaning, exterior washing and waxing, tire cleaning, dashboard cleaning, and paint protection. We offer packages from basic to luxury detailing.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does mobile car detailing cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile car detailing pricing ranges from $150-$350 depending on the package and vehicle size. We offer basic, premium, and luxury mobile detailing packages to fit your budget.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer same-day mobile detailing service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we often provide same-day mobile detailing service in Columbia SC area, subject to availability. Call (803) 667-8731 to schedule your mobile detailing appointment.'
        }
      }
    ]
  };
};

export default {
  generateMobileDetailingServiceSchema,
  generateMobileDetailingFAQSchema
};