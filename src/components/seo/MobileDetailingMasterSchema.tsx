/**
 * Mobile Detailing Master Schema - Comprehensive schema implementation
 * Combines all mobile detailing schemas with mobile business prioritization
 * Targets: "detailing car near me", "automotive detail near me", "car interior detailing"
 */

import { generateEnhancedLocalBusinessSchema } from './EnhancedLocalBusinessSchema';
import { generateMobileDetailingServiceSchema, generateMobileDetailingFAQSchema } from './MobileDetailingServiceSchema';
import { generateMobileDetailingProductSchemas, generateMobileDetailingPackageListSchema } from './MobileDetailingProductSchema';
import { generateAutomotiveBusinessSchema, generateAutomotiveOrganizationSchema } from './AutomotiveBusinessSchema';

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface MobileDetailingMasterSchemaOptions {
  pageType?: 'homepage' | 'service' | 'location' | 'faq' | 'gallery' | 'contact';
  serviceType?: 'mobile-detailing' | 'interior-detailing' | 'exterior-detailing' | 'full-detail';
  includeProducts?: boolean;
  includeServices?: boolean;
  includeFAQ?: boolean;
  includeReviews?: boolean;
}

/**
 * Generate comprehensive mobile detailing schema collection
 */
export const generateMobileDetailingMasterSchema = (
  options: MobileDetailingMasterSchemaOptions = {}
) => {
  const {
    pageType = 'homepage',
    serviceType = 'mobile-detailing',
    includeProducts = true,
    includeServices = true,
    includeFAQ = false,
    includeReviews = true
  } = options;

  const schemas: any[] = [];

  // 1. Primary LocalBusiness Schema (Enhanced for Mobile Detailing)
  const localBusinessSchema = generateEnhancedLocalBusinessSchema({
    includeReviews,
    includeServices,
    includePaymentMethods: true,
    includeKeywords: true
  });
  schemas.push(localBusinessSchema);

  // 2. Automotive Business Schema
  const automotiveBusinessSchema = generateAutomotiveBusinessSchema({
    includeSpecializations: true,
    includeEquipment: true,
    includeCertifications: true,
    includeServiceRadius: true
  });
  schemas.push(automotiveBusinessSchema);

  // 3. Organization Schema
  const organizationSchema = generateAutomotiveOrganizationSchema();
  schemas.push(organizationSchema);

  // 4. Service Schema (if requested)
  if (includeServices) {
    const serviceSchema = generateMobileDetailingServiceSchema({
      serviceType,
      includePackages: true,
      includePricing: true,
      includeServiceArea: true
    });
    if (serviceSchema) {
      schemas.push(serviceSchema);
    }
  }

  // 5. Product Schemas (if requested)
  if (includeProducts) {
    const productSchemas = generateMobileDetailingProductSchemas({
      includeReviews,
      includeDelivery: true,
      includeWarranty: true
    });
    schemas.push(...productSchemas);

    // Product List Schema
    const packageListSchema = generateMobileDetailingPackageListSchema();
    schemas.push(packageListSchema);
  }

  // 6. FAQ Schema (if requested)
  if (includeFAQ) {
    const faqSchema = generateMobileDetailingFAQSchema();
    schemas.push(faqSchema);
  }

  // 7. Page-specific schemas
  if (pageType === 'homepage') {
    // Website Schema for homepage
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: "Mikah's Auto Detailing",
      url: baseUrl,
      description: 'Professional mobile auto detailing services in Columbia SC. We specialize in mobile car detailing, bringing premium automotive care directly to your location.',
      publisher: {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#business`
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        },
        {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/book`,
            name: 'Book Mobile Detailing Service'
          },
          name: 'Book Appointment'
        }
      ],
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#business`
      }
    });
  }

  if (pageType === 'service') {
    // Service Page Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${baseUrl}/services/${serviceType}`,
      name: `${serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} | Mikah's Auto Detailing`,
      description: `Professional ${serviceType.replace('-', ' ')} services in Columbia SC. Mobile automotive detailing brought to your location.`,
      url: `${baseUrl}/services/${serviceType}`,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`
      },
      about: {
        '@type': 'Service',
        '@id': `${baseUrl}/services/${serviceType}#service`
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${baseUrl}/exterior1.jpg`
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${baseUrl}/services`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
            item: `${baseUrl}/services/${serviceType}`
          }
        ]
      }
    });
  }

  if (pageType === 'location') {
    // Location Page Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${baseUrl}/locations/columbia-sc`,
      name: 'Mobile Car Detailing Columbia SC | Mikah\'s Auto Detailing',
      description: 'Professional mobile car detailing in Columbia SC. We bring expert automotive detailing services directly to your location.',
      url: `${baseUrl}/locations/columbia-sc`,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`
      },
      about: {
        '@type': 'Place',
        name: 'Columbia, SC',
        description: 'Mobile detailing service area'
      }
    });
  }

  return schemas;
};

/**
 * Generate schema script tag for HTML injection
 */
export const generateSchemaScript = (schemas: any[]) => {
  if (schemas.length === 1) {
    return `<script type="application/ld+json">
${JSON.stringify(schemas[0], null, 2)}
</script>`;
  } else {
    return `<script type="application/ld+json">
${JSON.stringify(schemas, null, 2)}
</script>`;
  }
};

/**
 * Generate complete schema for different page types
 */
export const generatePageTypeSchema = (pageType: string, serviceType?: string) => {
  const options: MobileDetailingMasterSchemaOptions = {
    pageType: pageType as any,
    serviceType: serviceType as any,
    includeProducts: pageType === 'homepage' || pageType === 'service',
    includeServices: true,
    includeFAQ: pageType === 'faq',
    includeReviews: true
  };

  return generateMobileDetailingMasterSchema(options);
};

/**
 * Mobile Detailing Keywords Collection for SEO
 */
export const mobileDetailingKeywords = {
  primary: [
    'detailing car near me',           // 500k searches
    'automotive detail near me',       // 500k searches
    'car interior detailing',          // 50k searches
    'mobile detailing columbia sc',
    'mobile car detailing',
    'mobile auto detailing',
    'mobile detailing near me'
  ],
  secondary: [
    'interior car detailing services',
    'exterior auto detailing services',
    'full service mobile detailing',
    'mobile detailing pricing',
    'automotive detailing packages',
    'mobile car wash and detail'
  ],
  longTail: [
    'professional mobile car detailing columbia sc',
    'mobile auto detailing services near me',
    'car interior detailing and cleaning services',
    'mobile detailing packages and pricing',
    'automotive detail service columbia south carolina'
  ],
  locations: [
    'mobile detailing columbia sc',
    'mobile detailing lexington sc',
    'mobile detailing irmo sc',
    'mobile detailing cayce sc'
  ]
};

export default {
  generateMobileDetailingMasterSchema,
  generateSchemaScript,
  generatePageTypeSchema,
  mobileDetailingKeywords
};