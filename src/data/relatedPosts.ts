/**
 * Related Posts Mapping
 *
 * Each blog post is mapped to 3-4 related posts based on topic similarity.
 * Priority is given to high-value SEO keyword posts (those with priority 0.9 in sitemap).
 *
 * Topics grouped by:
 * - Ceramic coating
 * - Mobile detailing
 * - Interior/exterior services
 * - Pricing and value
 * - Columbia SC locations (Columbia, Lexington, Irmo)
 * - Car wash vs detailing
 */

export const relatedPostsMap: Record<string, string[]> = {
  // === CERAMIC COATING CLUSTER ===

  'ceramic-coating-vs-wax-south-carolina': [
    '02-ceramic-coating-vs-ppf',
    '03-ceramic-coating-longevity-south-carolina',
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-near-me-columbia-sc'
  ],

  '02-ceramic-coating-vs-ppf': [
    'ceramic-coating-vs-wax-south-carolina',
    '05-ceramic-coating-cost-benefit-analysis',
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-columbia-sc-pro'
  ],

  '03-ceramic-coating-longevity-south-carolina': [
    '06-ceramic-coating-maintenance-guide',
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-vs-wax-south-carolina',
    'ceramic-coating-near-me-columbia-sc'
  ],

  '04-professional-ceramic-coating-what-to-expect': [
    '05-ceramic-coating-cost-benefit-analysis',
    '03-ceramic-coating-longevity-south-carolina',
    '06-ceramic-coating-maintenance-guide',
    'ceramic-coating-columbia-sc-pro'
  ],

  '05-ceramic-coating-cost-benefit-analysis': [
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-vs-wax-south-carolina',
    'car-detailing-prices-value-breakdown',
    'ceramic-coating-near-me-columbia-sc'
  ],

  '06-ceramic-coating-maintenance-guide': [
    '03-ceramic-coating-longevity-south-carolina',
    'maintain-car-between-details',
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-columbia-sc-pro'
  ],

  'ceramic-coating-near-me-columbia-sc': [
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-vs-wax-south-carolina',
    '05-ceramic-coating-cost-benefit-analysis',
    'ceramic-coating-columbia-sc-pro'
  ],

  'ceramic-coating-columbia-sc-pro': [
    '04-professional-ceramic-coating-what-to-expect',
    'ceramic-coating-near-me-columbia-sc',
    '03-ceramic-coating-longevity-south-carolina',
    '05-ceramic-coating-cost-benefit-analysis'
  ],

  // === MOBILE DETAILING CLUSTER ===

  'ultimate-guide-mobile-car-detailing-columbia-sc': [
    '01-best-car-detailing-near-me-columbia-sc',
    '02-mobile-car-detailing-columbia-sc-guide',
    'mobile-detailing-near-me-columbia-sc',
    'mobile-detailing-columbia-sc-complete'
  ],

  '01-best-car-detailing-near-me-columbia-sc': [
    'ultimate-guide-mobile-car-detailing-columbia-sc',
    'car-detailing-near-me-columbia-sc',
    'finding-best-car-detailing-near-me',
    'professional-car-detailing-columbia-sc-guide'
  ],

  '02-mobile-car-detailing-columbia-sc-guide': [
    'ultimate-guide-mobile-car-detailing-columbia-sc',
    '03-mobile-auto-detailing-vs-traditional-shops',
    'mobile-detailing-near-me-columbia-sc',
    'mobile-detailing-columbia-sc-complete'
  ],

  '03-mobile-auto-detailing-vs-traditional-shops': [
    'mobile-vs-shop-detailing-comparison',
    '02-mobile-car-detailing-columbia-sc-guide',
    'car-wash-vs-detailing-columbia-sc',
    'mobile-detailing-columbia-sc-complete'
  ],

  '04-auto-detailing-services-columbia-sc': [
    'what-expect-professional-auto-detailing',
    'professional-car-detailing-columbia-sc-guide',
    'car-detailing-columbia-sc-complete',
    'auto-detailing-near-me-columbia-sc'
  ],

  'mobile-detailing-near-me-columbia-sc': [
    '02-mobile-car-detailing-columbia-sc-guide',
    'ultimate-guide-mobile-car-detailing-columbia-sc',
    'good-mobile-car-detailing-services-columbia-sc',
    'mobile-detailing-columbia-sc-complete'
  ],

  'mobile-detailing-columbia-sc-complete': [
    'mobile-detailing-near-me-columbia-sc',
    '02-mobile-car-detailing-columbia-sc-guide',
    'mobile-detailing-columbia-sc-prices-guide',
    'mobile-car-detail-columbia-sc'
  ],

  'mobile-detailing-columbia-sc-prices-guide': [
    'car-detailing-prices-value-breakdown',
    'mobile-detailing-columbia-sc-prices-2025',
    'mobile-detailing-columbia-sc-complete',
    '05-ceramic-coating-cost-benefit-analysis'
  ],

  'mobile-detailing-columbia-sc-prices-2025': [
    'mobile-detailing-columbia-sc-prices-guide',
    'car-detailing-prices-value-breakdown',
    'anyone-know-mobile-car-detailer-columbia',
    'good-mobile-car-detailing-services-columbia-sc'
  ],

  'good-mobile-car-detailing-services-columbia-sc': [
    '01-best-car-detailing-near-me-columbia-sc',
    'finding-best-car-detailing-near-me',
    'anyone-know-mobile-car-detailer-columbia',
    'mobile-detailing-near-me-columbia-sc'
  ],

  'anyone-know-mobile-car-detailer-columbia': [
    'good-mobile-car-detailing-services-columbia-sc',
    'finding-best-car-detailing-near-me',
    'mobile-detailing-near-me-columbia-sc',
    'car-detailing-near-me-columbia-sc'
  ],

  'mobile-car-detail-columbia-sc': [
    'mobile-detailing-columbia-sc-complete',
    'car-detail-columbia-sc',
    'best-auto-detailing-columbia-sc',
    'professional-car-detailing-columbia-sc-guide'
  ],

  // === INTERIOR/EXTERIOR SERVICES ===

  'interior-car-detailing-complete-guide': [
    '05-interior-car-detailing-deep-cleaning',
    'what-expect-professional-auto-detailing',
    'interior-car-detailing-columbia-sc',
    'car-detailing-columbia-sc-complete'
  ],

  '05-interior-car-detailing-deep-cleaning': [
    'interior-car-detailing-complete-guide',
    'interior-car-detailing-columbia-sc',
    'what-expect-professional-auto-detailing',
    'car-detailing-columbia-sc-complete'
  ],

  'interior-car-detailing-columbia-sc': [
    '05-interior-car-detailing-deep-cleaning',
    'interior-car-detailing-complete-guide',
    'professional-car-detailing-columbia-sc-guide',
    'car-detailing-columbia-sc-complete'
  ],

  'paint-correction-before-after-guide': [
    'ceramic-coating-vs-wax-south-carolina',
    '04-professional-ceramic-coating-what-to-expect',
    'what-expect-professional-auto-detailing',
    'best-auto-detailing-columbia-sc'
  ],

  // === CAR WASH VS DETAILING ===

  'car-wash-vs-detailing-columbia-sc': [
    'full-service-car-wash-vs-detailing-columbia-sc',
    'mobile-vs-shop-detailing-comparison',
    '03-mobile-auto-detailing-vs-traditional-shops',
    'what-expect-professional-auto-detailing'
  ],

  'full-service-car-wash-vs-detailing-columbia-sc': [
    'car-wash-vs-detailing-columbia-sc',
    'mobile-vs-shop-detailing-comparison',
    'car-detailing-prices-value-breakdown',
    'professional-car-detailing-columbia-sc-guide'
  ],

  'mobile-vs-shop-detailing-comparison': [
    '03-mobile-auto-detailing-vs-traditional-shops',
    'car-wash-vs-detailing-columbia-sc',
    'full-service-car-wash-vs-detailing-columbia-sc',
    '02-mobile-car-detailing-columbia-sc-guide'
  ],

  // === PRICING & VALUE ===

  'car-detailing-prices-value-breakdown': [
    'mobile-detailing-columbia-sc-prices-guide',
    '05-ceramic-coating-cost-benefit-analysis',
    'mobile-detailing-columbia-sc-prices-2025',
    'finding-best-car-detailing-near-me'
  ],

  // === LEXINGTON SC AREA ===

  'best-car-detailing-lexington-sc': [
    'mobile-car-wash-lexington-sc-guide',
    'mobile-car-detailing-lexington-sc-complete-guide',
    'auto-detailing-lexington-sc',
    '01-best-car-detailing-near-me-columbia-sc'
  ],

  'mobile-car-wash-lexington-sc-guide': [
    'best-car-detailing-lexington-sc',
    'mobile-car-detailing-lexington-sc-complete-guide',
    'auto-detailing-lexington-sc',
    'car-wash-vs-detailing-columbia-sc'
  ],

  'mobile-car-detailing-lexington-sc-complete-guide': [
    'best-car-detailing-lexington-sc',
    'mobile-car-wash-lexington-sc-guide',
    'auto-detailing-lexington-sc',
    '02-mobile-car-detailing-columbia-sc-guide'
  ],

  'auto-detailing-lexington-sc': [
    'best-car-detailing-lexington-sc',
    'mobile-car-detailing-lexington-sc-complete-guide',
    'mobile-car-wash-lexington-sc-guide',
    'auto-detailing-near-me-columbia-sc'
  ],

  // === COMPREHENSIVE GUIDES ===

  'car-detail-columbia-sc': [
    'car-detailing-columbia-sc-complete',
    'professional-car-detailing-columbia-sc-guide',
    'best-auto-detailing-columbia-sc',
    'what-expect-professional-auto-detailing'
  ],

  'car-detailing-columbia-sc-complete': [
    'car-detail-columbia-sc',
    'professional-car-detailing-columbia-sc-guide',
    'interior-car-detailing-columbia-sc',
    '04-auto-detailing-services-columbia-sc'
  ],

  'professional-car-detailing-columbia-sc-guide': [
    'what-expect-professional-auto-detailing',
    'car-detailing-columbia-sc-complete',
    '04-auto-detailing-services-columbia-sc',
    'best-auto-detailing-columbia-sc'
  ],

  'best-auto-detailing-columbia-sc': [
    '01-best-car-detailing-near-me-columbia-sc',
    'finding-best-car-detailing-near-me',
    'professional-car-detailing-columbia-sc-guide',
    'car-detail-columbia-sc'
  ],

  'what-expect-professional-auto-detailing': [
    'professional-car-detailing-columbia-sc-guide',
    '04-auto-detailing-services-columbia-sc',
    'car-detailing-columbia-sc-complete',
    'interior-car-detailing-complete-guide'
  ],

  // === "NEAR ME" SEARCH QUERIES ===

  'car-detailing-near-me-columbia-sc': [
    'finding-best-car-detailing-near-me',
    'auto-detailing-near-me-columbia-sc',
    'car-detailing-near-me-columbia',
    '01-best-car-detailing-near-me-columbia-sc'
  ],

  'car-detailing-near-me-columbia': [
    'car-detailing-near-me-columbia-sc',
    'finding-best-car-detailing-near-me',
    'mobile-detailing-near-me-columbia-sc',
    'auto-detailing-near-me-columbia-sc'
  ],

  'auto-detailing-near-me-columbia-sc': [
    'car-detailing-near-me-columbia-sc',
    'finding-best-car-detailing-near-me',
    '04-auto-detailing-services-columbia-sc',
    'professional-car-detailing-columbia-sc-guide'
  ],

  'finding-best-car-detailing-near-me': [
    'car-detailing-near-me-columbia-sc',
    '01-best-car-detailing-near-me-columbia-sc',
    'good-mobile-car-detailing-services-columbia-sc',
    'best-auto-detailing-columbia-sc'
  ],

  // === MAINTENANCE & CARE ===

  'how-often-detail-car-south-carolina': [
    '06-how-often-should-you-detail-your-car',
    'maintain-car-between-details',
    'signs-your-car-needs-detailing',
    'prepare-car-summer-south-carolina'
  ],

  '06-how-often-should-you-detail-your-car': [
    'how-often-detail-car-south-carolina',
    'maintain-car-between-details',
    'signs-your-car-needs-detailing',
    '06-ceramic-coating-maintenance-guide'
  ],

  'maintain-car-between-details': [
    'how-often-detail-car-south-carolina',
    '06-how-often-should-you-detail-your-car',
    '06-ceramic-coating-maintenance-guide',
    'signs-your-car-needs-detailing'
  ],

  'signs-your-car-needs-detailing': [
    'how-often-detail-car-south-carolina',
    'maintain-car-between-details',
    'what-expect-professional-auto-detailing',
    '06-how-often-should-you-detail-your-car'
  ],

  'prepare-car-summer-south-carolina': [
    'how-often-detail-car-south-carolina',
    'maintain-car-between-details',
    'ceramic-coating-vs-wax-south-carolina',
    '03-ceramic-coating-longevity-south-carolina'
  ]
};

/**
 * Get related posts for a given blog post slug
 * Falls back to category-based related posts if no manual mapping exists
 */
export const getRelatedPosts = (slug: string): string[] => {
  return relatedPostsMap[slug] || [];
};
