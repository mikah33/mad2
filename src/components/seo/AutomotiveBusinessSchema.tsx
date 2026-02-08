/**
 * Automotive Business Schema - Specialized schema for automotive detailing business
 * Combines LocalBusiness with AutomotiveBusiness for enhanced mobile detailing visibility
 */

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface AutomotiveBusinessOptions {
  includeSpecializations?: boolean;
  includeEquipment?: boolean;
  includeCertifications?: boolean;
  includeServiceRadius?: boolean;
}

/**
 * Generate comprehensive AutomotiveBusiness schema for mobile detailing
 */
export const generateAutomotiveBusinessSchema = (
  options: AutomotiveBusinessOptions = {}
) => {
  const {
    includeSpecializations = true,
    includeEquipment = true,
    includeCertifications = true,
    includeServiceRadius = true
  } = options;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#automotive-business`,

    // Business Identity
    name: "Mikah's Auto Detailing",
    legalName: "Mikah's Auto Detailing and Services LLC",
    alternateName: ["Mikah's Mobile Detailing", "Mikah's Mobile Auto Detailing"],

    // Automotive Business Classification
    businessType: 'Mobile Auto Detailing Service',
    industryType: 'Automotive Services',

    // Contact Information
    url: baseUrl,
    telephone: '(803) 667-8731',
    email: 'mikahsautodetailing@gmail.com',

    // Physical Location
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

    // Business Description
    description: 'Professional mobile automotive detailing business serving Columbia SC and surrounding areas. Specializing in mobile car detailing, interior detailing, exterior detailing, paint correction, and ceramic coating services. We bring professional automotive care directly to your location.',

    // Slogan
    slogan: 'Premium Mobile Auto Detailing - We Come to You!',

    // Business Hours
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],

    // Founder/Owner
    founder: {
      '@type': 'Person',
      name: 'Mikah Albertson',
      jobTitle: 'Owner & Master Mobile Detailer',
      email: 'mikahsautodetailing@gmail.com',
      knowsAbout: [
        'Mobile Auto Detailing',
        'Paint Correction',
        'Ceramic Coating Application',
        'Interior Restoration',
        'Automotive Surface Preparation'
      ]
    },

    // Service Categories
    serviceCategory: [
      'Mobile Auto Detailing',
      'Mobile Car Detailing',
      'Interior Car Detailing',
      'Exterior Auto Detailing',
      'Paint Correction Services',
      'Ceramic Coating Application',
      'Automotive Cleaning Services',
      'Vehicle Maintenance Services'
    ],

    // Target Audience
    audience: {
      '@type': 'Audience',
      audienceType: 'Car Owners, Vehicle Enthusiasts, Luxury Car Owners, Fleet Managers',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Columbia Metropolitan Area, SC'
      }
    },

    // Business Features
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mobile Service',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'On-Site Professional Equipment',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Eco-Friendly Products',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Same-Day Service Available',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Insurance and Bonded',
        value: true
      }
    ],

    // Payment Methods
    paymentAccepted: [
      'Cash', 'Check', 'Credit Card', 'Debit Card', 'PayPal', 'Zelle', 'Cash App'
    ],

    // Price Range
    priceRange: '$$-$$$',

    // Currency
    currenciesAccepted: 'USD',

    // Social Media
    sameAs: [
      'https://www.facebook.com/mikahsautodetailing',
      'https://www.instagram.com/mikahsautodetailing',
      'https://www.google.com/maps/place/Mikah+s+Auto+Detailing'
    ],

    // Reviews
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '31',
      reviewCount: '31'
    },

    // Logo and Images
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.jpg`,
      width: 480,
      height: 480
    },

    image: [
      `${baseUrl}/logo.jpg`,
      `${baseUrl}/mclarens.jpg`,
      `${baseUrl}/exterior1.jpg`,
      `${baseUrl}/interior1.jpg`
    ]
  };

  // Add service area if requested
  if (includeServiceRadius) {
    schema.serviceArea = {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '34.0007',
        longitude: '-81.0348'
      },
      geoRadius: '25000', // 25km radius
      description: 'Mobile detailing service radius covering Columbia, Lexington, Irmo, Cayce and surrounding areas'
    };

    schema.areaServed = [
      {
        '@type': 'City',
        name: 'Columbia',
        description: 'Mobile auto detailing Columbia SC'
      },
      {
        '@type': 'City',
        name: 'Lexington',
        description: 'Mobile car detailing Lexington SC'
      },
      {
        '@type': 'City',
        name: 'Irmo',
        description: 'Mobile detailing services Irmo SC'
      },
      {
        '@type': 'City',
        name: 'Cayce',
        description: 'Mobile automotive detailing Cayce SC'
      }
    ];
  }

  // Add specializations if requested
  if (includeSpecializations) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Mobile Automotive Detailing Services',
      description: 'Comprehensive mobile detailing services for all vehicle types',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Vehicle Mobile Detailing',
            description: 'Specialized mobile detailing for luxury and exotic vehicles',
            category: 'Luxury Auto Detailing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fleet Mobile Detailing',
            description: 'Mobile detailing services for commercial vehicle fleets',
            category: 'Commercial Fleet Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Motorcycle Mobile Detailing',
            description: 'Professional mobile detailing for motorcycles and recreational vehicles',
            category: 'Motorcycle Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RV and Boat Mobile Detailing',
            description: 'Mobile detailing for recreational vehicles and marine vessels',
            category: 'RV and Marine Services'
          }
        }
      ]
    };

    schema.serviceType = [
      'Mobile Auto Detailing',
      'Paint Correction',
      'Ceramic Coating',
      'Interior Restoration',
      'Headlight Restoration',
      'Engine Bay Cleaning',
      'Leather Conditioning',
      'Odor Removal',
      'Paint Protection Film',
      'Scratch Removal'
    ];
  }

  // Add professional equipment if requested (using Thing type to avoid Product schema requirements)
  if (includeEquipment) {
    schema.knowsAbout = [
      'Professional Mobile Detailing Trailer',
      'Pressure Washing Equipment',
      'Steam Cleaning Equipment',
      'Paint Correction Tools',
      'Ceramic Coating Application Equipment'
    ];

    schema.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'Professional mobile detailing trailer with water supply and power'
      },
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'High-quality pressure washers and foam cannons'
      },
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'Professional steam cleaners for interior detailing'
      },
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'Professional polishers, buffers, and correction compounds'
      },
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'Specialized tools for ceramic coating application'
      }
    ];
  }

  // Add certifications if requested
  if (includeCertifications) {
    schema.hasCertification = [
      {
        '@type': 'Certification',
        name: 'IDA Certified Mobile Detailer',
        issuedBy: {
          '@type': 'Organization',
          name: 'International Detailing Association',
          url: 'https://www.the-ida.com'
        },
        description: 'Professional certification in automotive detailing practices and mobile service delivery'
      },
      {
        '@type': 'Certification',
        name: 'Ceramic Pro Certified Installer',
        issuedBy: {
          '@type': 'Organization',
          name: 'Ceramic Pro'
        },
        description: 'Authorized installer of professional ceramic coating systems'
      },
      {
        '@type': 'Certification',
        name: 'Mobile Detailing Business License',
        issuedBy: {
          '@type': 'GovernmentOrganization',
          name: 'South Carolina Department of Commerce'
        },
        description: 'Licensed mobile detailing business in South Carolina'
      }
    ];

    schema.accreditedBy = {
      '@type': 'Organization',
      name: 'International Detailing Association',
      url: 'https://www.the-ida.com'
    };
  }

  return schema;
};

/**
 * Generate Organization schema for the automotive business
 */
export const generateAutomotiveOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,

    name: "Mikah's Auto Detailing",
    legalName: "Mikah's Auto Detailing and Services LLC",
    url: baseUrl,
    logo: `${baseUrl}/logo.jpg`,

    // Organization Type
    organizationType: 'Automotive Service Business',

    // Contact Information
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '(803) 667-8731',
        contactType: 'Customer Service',
        email: 'mikahsautodetailing@gmail.com',
        areaServed: 'US-SC',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '17:00'
        }
      },
      {
        '@type': 'ContactPoint',
        telephone: '(803) 667-8731',
        contactType: 'Booking and Scheduling',
        email: 'mikahsautodetailing@gmail.com',
        description: 'Mobile detailing appointment booking'
      }
    ],

    // Address
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Columbia',
      addressRegion: 'SC',
      postalCode: '29072',
      addressCountry: 'US'
    },

    // Founding Information
    foundingDate: '2020',
    foundingLocation: {
      '@type': 'Place',
      name: 'Columbia, SC'
    },

    // Number of Employees
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '1-5'
    },

    // Industry
    naics: '811192', // Car Washes (includes mobile detailing)
    isicV4: '4520', // Maintenance and repair of motor vehicles

    // Keywords
    keywords: 'mobile auto detailing, mobile car detailing, automotive detailing business, car care services, Columbia SC',

    // Social Media
    sameAs: [
      'https://www.facebook.com/mikahsautodetailing',
      'https://www.instagram.com/mikahsautodetailing'
    ]
  };
};

export default {
  generateAutomotiveBusinessSchema,
  generateAutomotiveOrganizationSchema
};