import React from 'react';
import { BusinessInfo, AggregateRatingInfo, ReviewInfo } from './StructuredData';

interface LocationSpecificData {
  locationSlug: string;
  coordinates: { lat: number; lng: number };
  serviceRadius: number;
  neighborhoods: string[];
  landmarks: string[];
  localKeywords: string[];
  specificServices: string[];
  pricing: {
    basic: string;
    premium: string;
    ceramic: string;
    paintCorrection: string;
  };
}

interface AdvancedSchemaMarkupProps {
  location: string;
  locationData: LocationSpecificData;
  aggregateRating: AggregateRatingInfo;
  reviews: ReviewInfo[];
}

export const AdvancedSchemaMarkup: React.FC<AdvancedSchemaMarkupProps> = ({
  location,
  locationData,
  aggregateRating,
  reviews
}) => {
  // Location-specific coordinates and service areas
  const locationCoordinates: Record<string, { lat: number; lng: number }> = {
    'lexington-sc': { lat: 33.9816, lng: -81.2362 },
    'columbia-sc': { lat: 34.0007, lng: -81.0348 },
    'irmo-sc': { lat: 34.0851, lng: -81.1821 },
    'west-columbia-sc': { lat: 33.9935, lng: -81.0740 },
    'cayce-sc': { lat: 33.9613, lng: -81.0748 },
    'chapin-sc': { lat: 34.1645, lng: -81.3454 },
    'swansea-sc': { lat: 33.7365, lng: -81.1093 },
    'newberry-sc': { lat: 34.2742, lng: -81.6187 }
  };

  // Advanced LocalBusiness Schema with enhanced features
  const generateAdvancedLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveRepairShop', 'ProfessionalService'],
    '@id': `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}#business`,
    name: `Mikah's Auto Detailing - ${location}`,
    alternateName: ['Mikah\'s Mobile Detailing', 'Mobile Auto Detailing Lexington SC'],
    description: `Professional mobile auto detailing service in ${location}. Paint correction, ceramic coating, interior cleaning at your location. 5.0★ rated with 19+ reviews.`,

    // Enhanced contact information
    telephone: '(803) 667-8731',
    email: 'mikahsautodetailing@gmail.com',
    url: `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}`,

    // Enhanced address and geographic data
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.replace(' SC', ''),
      addressRegion: 'SC',
      addressCountry: 'US',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: locationCoordinates[locationData.locationSlug]?.lat || 33.9816,
          longitude: locationCoordinates[locationData.locationSlug]?.lng || -81.2362
        },
        geoRadius: `${locationData.serviceRadius || 25} mi`
      }
    },

    // Precise geolocation
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationCoordinates[locationData.locationSlug]?.lat || 33.9816,
      longitude: locationCoordinates[locationData.locationSlug]?.lng || -81.2362
    },

    // Enhanced business details
    foundingDate: '2020',
    numberOfEmployees: '1-5',
    paymentAccepted: ['Cash', 'Credit Card', 'Venmo', 'CashApp', 'Check'],
    currenciesAccepted: 'USD',
    priceRange: '$$',

    // Professional credentials and certifications
    award: [
      'IDA Certified Detailer',
      '5.0 Star Google Rating',
      'Top Rated Auto Detailer Lexington SC'
    ],

    // Business hours with flexibility for mobile service
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
      }
    ],

    // Enhanced service area coverage
    areaServed: [
      {
        '@type': 'City',
        name: location.replace(' SC', ''),
        containedInPlace: {
          '@type': 'State',
          name: 'South Carolina'
        }
      },
      ...locationData.neighborhoods.map(neighborhood => ({
        '@type': 'Place',
        name: neighborhood,
        containedInPlace: {
          '@type': 'City',
          name: location.replace(' SC', '')
        }
      }))
    ],

    // Comprehensive service catalog with pricing
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Auto Detailing Services - ${location}`,
      description: `Complete mobile auto detailing services in ${location}`,
      itemListElement: [
        {
          '@type': 'Offer',
          '@id': `https://mikahsmobiledetailingsc.com/services/basic-detail#offer`,
          name: 'Basic Detail Package',
          description: 'Interior full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned. Exterior wheels decontaminated, foam wash, protective wax.',
          price: locationData.pricing.basic,
          priceCurrency: 'USD',
          priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Auto Detailing',
            category: 'Auto Detailing',
            areaServed: location
          },
          validFrom: new Date().toISOString().split('T')[0],
          url: `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}#basic-detail`
        },
        {
          '@type': 'Offer',
          '@id': `https://mikahsmobiledetailingsc.com/services/factory-reset#offer`,
          name: 'Factory Reset Package',
          description: 'Premium mobile detailing with interior shampoo & extraction, brake dust removal, protective wax, complete interior and exterior restoration.',
          price: locationData.pricing.premium,
          priceCurrency: 'USD',
          priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Mobile Detailing',
            category: 'Premium Auto Detailing',
            areaServed: location
          },
          validFrom: new Date().toISOString().split('T')[0],
          url: `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}#factory-reset`
        },
        {
          '@type': 'Offer',
          '@id': `https://mikahsmobiledetailingsc.com/services/ceramic-coating#offer`,
          name: 'Ceramic Coating Service',
          description: 'Professional ceramic coating application with paint correction, thorough wash and decontamination for long-term protection.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '300',
            maxPrice: '1200',
            valueAddedTaxIncluded: false
          },
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            category: 'Paint Protection',
            areaServed: location
          },
          url: `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}#ceramic-coating`
        }
      ]
    },

    // Enhanced social media and online presence
    sameAs: [
      'https://www.google.com/maps/place/Mikah+s+Auto+Detailing',
      'https://www.facebook.com/mikahsautodetailing',
      'https://www.instagram.com/mikahsautodetailing',
      'https://www.yelp.com/biz/mikahs-auto-detailing'
    ],

    // Professional images
    image: [
      'https://mikahsmobiledetailingsc.com/exterior1.jpg',
      'https://mikahsmobiledetailingsc.com/exterior2.jpg',
      'https://mikahsmobiledetailingsc.com/interior1.jpg',
      'https://mikahsmobiledetailingsc.com/ceramic-coating.jpg',
      'https://mikahsmobiledetailingsc.com/paint-correction.jpg'
    ],

    logo: {
      '@type': 'ImageObject',
      url: 'https://mikahsmobiledetailingsc.com/logo.png',
      width: 512,
      height: 512,
      caption: `Mikah's Auto Detailing ${location} Logo`
    },

    // Customer ratings and reviews
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue.toFixed(1),
      reviewCount: aggregateRating.reviewCount.toString(),
      bestRating: aggregateRating.bestRating.toString(),
      worstRating: aggregateRating.worstRating.toString()
    },

    review: reviews.slice(0, 5).map(review => ({
      '@type': 'Review',
      '@id': `https://mikahsmobiledetailingsc.com/reviews/${review.author.replace(/\s+/g, '-').toLowerCase()}`,
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.reviewText,
      datePublished: review.datePublished,
      publisher: {
        '@type': 'Organization',
        name: 'Google'
      }
    })),

    // Enhanced contact points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '(803) 667-8731',
        contactType: 'Customer Service',
        areaServed: 'US-SC',
        availableLanguage: 'English',
        contactOption: 'TollFree',
        hoursAvailable: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          }
        ]
      },
      {
        '@type': 'ContactPoint',
        email: 'mikahsautodetailing@gmail.com',
        contactType: 'Customer Service',
        areaServed: 'US-SC',
        availableLanguage: 'English'
      }
    ],

    // Business specialties
    knowsAbout: [
      'Mobile Auto Detailing',
      'Ceramic Coating Application',
      'Paint Correction',
      'Interior Detailing',
      'Exterior Detailing',
      'Vehicle Paint Protection',
      'Car Care Services',
      ...locationData.localKeywords
    ],

    // Professional memberships
    memberOf: [
      {
        '@type': 'Organization',
        name: 'International Detailing Association (IDA)',
        url: 'https://www.theida.com'
      }
    ],

    // Mobile service emphasis
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Service Type',
        value: '100% Mobile Service'
      },
      {
        '@type': 'PropertyValue',
        name: 'Service Radius',
        value: `${locationData.serviceRadius} miles from ${location}`
      },
      {
        '@type': 'PropertyValue',
        name: 'Specialty',
        value: 'IDA Certified Mobile Auto Detailing'
      },
      {
        '@type': 'PropertyValue',
        name: 'Equipment',
        value: 'Self-contained mobile unit with water and power'
      }
    ]
  });

  // Service-specific schema for major services
  const generateServiceSpecificSchemas = () => [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `https://mikahsmobiledetailingsc.com/services/mobile-detailing-${locationData.locationSlug}#service`,
      name: `Mobile Auto Detailing ${location}`,
      description: `Professional mobile auto detailing service in ${location}. Complete interior and exterior detailing at your location.`,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `https://mikahsmobiledetailingsc.com/locations/${locationData.locationSlug}#business`
      },
      areaServed: {
        '@type': 'City',
        name: location.replace(' SC', ''),
        containedInPlace: {
          '@type': 'State',
          name: 'South Carolina'
        }
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${location} Mobile Detailing Services`,
        itemListElement: locationData.specificServices.map((service, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
            category: 'Auto Detailing'
          },
          areaServed: location
        }))
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue.toFixed(1),
        reviewCount: aggregateRating.reviewCount.toString(),
        bestRating: aggregateRating.bestRating.toString(),
        worstRating: aggregateRating.worstRating.toString()
      }
    }
  ];

  const schemas = [
    generateAdvancedLocalBusinessSchema(),
    ...generateServiceSpecificSchemas()
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas)
      }}
    />
  );
};

// Helper function to get location-specific data
export const getLocationData = (locationSlug: string): LocationSpecificData => {
  const locationDataMap: Record<string, LocationSpecificData> = {
    'lexington-sc': {
      locationSlug: 'lexington-sc',
      coordinates: { lat: 33.9816, lng: -81.2362 },
      serviceRadius: 25,
      neighborhoods: [
        'Lake Murray Shores',
        'Sunset Boulevard',
        'Spence Island',
        'River Club',
        'Oak Grove',
        'Gilbert',
        'Red Bank',
        'Pelion'
      ],
      landmarks: [
        'Lake Murray',
        'Lexington Medical Center',
        'Sunset Boulevard Corridor',
        'Lake Murray Dam',
        'Gilbert Elementary'
      ],
      localKeywords: [
        'Lake Murray auto detailing',
        'Sunset Boulevard mobile detailing',
        'Spence Island car care',
        'Lake house vehicle detailing',
        'medical center area detailing'
      ],
      specificServices: [
        'Lake House Vehicle Detailing',
        'Waterfront Property Mobile Service',
        'Medical Professional Detailing',
        'Lake Murray Boat Detailing',
        'Luxury Vehicle Care'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'columbia-sc': {
      locationSlug: 'columbia-sc',
      coordinates: { lat: 34.0007, lng: -81.0348 },
      serviceRadius: 25,
      neighborhoods: [
        'Five Points',
        'USC Campus Area',
        'Forest Drive',
        'Trenholm Plaza',
        'Congaree Vista',
        'Rosewood',
        'Shandon',
        'Wales Garden'
      ],
      landmarks: [
        'University of South Carolina',
        'State Capitol Building',
        'Five Points District',
        'Colonial Life Arena',
        'Riverbanks Zoo'
      ],
      localKeywords: [
        'USC campus auto detailing',
        'downtown Columbia mobile detailing',
        'Five Points car care',
        'university area vehicle detailing',
        'state government detailing'
      ],
      specificServices: [
        'University Campus Mobile Detailing',
        'Downtown Professional Service',
        'Student Vehicle Care',
        'Government Employee Detailing',
        'Urban Mobile Service'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'irmo-sc': {
      locationSlug: 'irmo-sc',
      coordinates: { lat: 34.0851, lng: -81.1821 },
      serviceRadius: 20,
      neighborhoods: [
        'Harbison District',
        'Lake Murray Dam Area',
        'Ballentine',
        'Crooked Creek',
        'St. Andrews Road',
        'Friarsgate'
      ],
      landmarks: [
        'Lake Murray Dam',
        'Harbison District',
        'Crooked Creek Park',
        'Columbiana Centre Mall',
        'Lake Murray'
      ],
      localKeywords: [
        'Harbison auto detailing',
        'Lake Murray Dam mobile detailing',
        'Ballentine car care',
        'Crooked Creek vehicle detailing',
        'shopping center detailing'
      ],
      specificServices: [
        'Harbison Shopping District Service',
        'Lake Murray Dam Area Detailing',
        'Premium Shopping Center Care',
        'Lake Access Vehicle Service',
        'Family Vehicle Detailing'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'west-columbia-sc': {
      locationSlug: 'west-columbia-sc',
      coordinates: { lat: 33.9935, lng: -81.0740 },
      serviceRadius: 20,
      neighborhoods: [
        'Meeting Street Corridor',
        'State Street District',
        'Airport Boulevard',
        'Sunset Boulevard West',
        'Riverbanks Area'
      ],
      landmarks: [
        'Riverbanks Zoo & Garden',
        'Meeting Street',
        'Columbia Metropolitan Airport',
        'State Street',
        'Congaree River'
      ],
      localKeywords: [
        'Riverbanks Zoo auto detailing',
        'Meeting Street mobile detailing',
        'airport area car care',
        'State Street vehicle detailing',
        'zoo employee detailing'
      ],
      specificServices: [
        'Zoo Employee Vehicle Care',
        'Airport Area Mobile Service',
        'Government District Detailing',
        'Meeting Street Professional Service',
        'Airport Traveler Car Care'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'cayce-sc': {
      locationSlug: 'cayce-sc',
      coordinates: { lat: 33.9613, lng: -81.0748 },
      serviceRadius: 20,
      neighborhoods: [
        'Cayce Riverwalk',
        'Historic Cayce',
        'Knox Abbott Drive',
        'Airport Boulevard',
        'Congaree Creek'
      ],
      landmarks: [
        'Cayce Riverwalk',
        'Historic Cayce District',
        'Columbia Metropolitan Airport',
        'Knox Abbott Drive',
        'Congaree Creek Heritage Preserve'
      ],
      localKeywords: [
        'Cayce Riverwalk auto detailing',
        'historic Cayce mobile detailing',
        'Knox Abbott car care',
        'riverwalk vehicle detailing',
        'historic district detailing'
      ],
      specificServices: [
        'Riverwalk Resident Service',
        'Historic District Vehicle Care',
        'Airport Corridor Mobile Service',
        'Heritage Preserve Area Detailing',
        'Classic Vehicle Restoration'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'chapin-sc': {
      locationSlug: 'chapin-sc',
      coordinates: { lat: 34.1645, lng: -81.3454 },
      serviceRadius: 20,
      neighborhoods: [
        'Timberlake Community',
        'Little Mountain',
        'Prosperity',
        'Lake Murray West Side',
        'Chapin High School Area',
        'Dreher Island',
        'White Rock',
        'St. Peters Church Road'
      ],
      landmarks: [
        'Lake Murray West Side',
        'Chapin High School',
        'Timberlake Community',
        'Little Mountain',
        'Prosperity'
      ],
      localKeywords: [
        'Lake Murray west side auto detailing',
        'Chapin luxury vehicle care',
        'Timberlake mobile detailing',
        'lake house vehicle detailing',
        'Little Mountain car care'
      ],
      specificServices: [
        'Lake House Vehicle Detailing',
        'Luxury Car Care',
        'Waterfront Property Mobile Service',
        'Premium Lake Community Service',
        'Boat and Marine Vehicle Care'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'swansea-sc': {
      locationSlug: 'swansea-sc',
      coordinates: { lat: 33.7365, lng: -81.1093 },
      serviceRadius: 25,
      neighborhoods: [
        'Historic Swansea',
        'Rural Route 5',
        'Country Properties',
        'Swansea High School Area',
        'Railroad District',
        'Swansea Town Center'
      ],
      landmarks: [
        'Historic Swansea District',
        'Swansea High School',
        'Railroad Heritage',
        'Rural Route 5',
        'Swansea Town Center'
      ],
      localKeywords: [
        'Historic Swansea auto detailing',
        'rural Swansea mobile detailing',
        'country property car care',
        'Swansea historic vehicle care',
        'rural mobile detailing service'
      ],
      specificServices: [
        'Rural Property Mobile Service',
        'Historic Vehicle Care',
        'Country Property Detailing',
        'Farm Vehicle Cleaning',
        'Classic Car Restoration Care'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    },
    'newberry-sc': {
      locationSlug: 'newberry-sc',
      coordinates: { lat: 34.2742, lng: -81.6187 },
      serviceRadius: 25,
      neighborhoods: [
        'Newberry College Area',
        'Historic Downtown',
        'Wilson Park',
        'Memorial Park',
        'College Street',
        'Main Street District'
      ],
      landmarks: [
        'Newberry College',
        'Historic Downtown Newberry',
        'Newberry Opera House',
        'Memorial Park',
        'Wilson Park'
      ],
      localKeywords: [
        'Newberry College auto detailing',
        'historic downtown mobile detailing',
        'college area car care',
        'Newberry student vehicle care',
        'Main Street mobile service'
      ],
      specificServices: [
        'College Campus Mobile Service',
        'Historic Downtown Detailing',
        'Student Vehicle Care Packages',
        'Faculty and Staff Service',
        'Town Center Mobile Detailing'
      ],
      pricing: {
        basic: '225',
        premium: '400',
        ceramic: 'Quote',
        paintCorrection: 'Quote'
      }
    }
  };

  return locationDataMap[locationSlug] || locationDataMap['lexington-sc'];
};

export default AdvancedSchemaMarkup;