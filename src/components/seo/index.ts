// SEO Components barrel export
export { SEOHead } from './SEOHead';
export { Breadcrumbs } from './Breadcrumbs';
export {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBlogPostSchema,
  generateBreadcrumbSchema
} from './StructuredData';
export type {
  BusinessInfo,
  ServiceInfo,
  FAQItem,
  BlogPostInfo
} from './StructuredData';
export {
  generateEnhancedLocalBusinessSchema,
  generateAutoDetailingSchema
} from './EnhancedLocalBusinessSchema';
export {
  generateMobileDetailingServiceSchema,
  generateMobileDetailingFAQSchema,
  generateExtendedFAQSchema
} from './MobileDetailingServiceSchema';
