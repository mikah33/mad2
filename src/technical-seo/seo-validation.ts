/**
 * Technical SEO Validation and Monitoring Tools
 * Comprehensive validation for schema, meta tags, and performance
 */

export interface SEOValidationResult {
  isValid: boolean;
  score: number;
  errors: string[];
  warnings: string[];
  recommendations: string[];
  metrics?: PerformanceMetrics;
}

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
  loadTime: number;
  imageOptimization: number;
  cacheScore: number;
}

export interface SchemaValidation {
  type: string;
  isValid: boolean;
  errors: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Validate LocalBusiness schema markup
 */
export function validateLocalBusinessSchema(schema: any): SchemaValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Required fields validation
  const requiredFields = [
    '@context',
    '@type',
    'name',
    'address',
    'geo',
    'telephone',
    'openingHoursSpecification'
  ];

  requiredFields.forEach(field => {
    if (!schema[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Address validation
  if (schema.address) {
    const addressRequired = ['addressLocality', 'addressRegion', 'postalCode', 'addressCountry'];
    addressRequired.forEach(field => {
      if (!schema.address[field]) {
        errors.push(`Missing required address field: ${field}`);
      }
    });
  }

  // Geo coordinates validation
  if (schema.geo) {
    if (!schema.geo.latitude || !schema.geo.longitude) {
      errors.push('Missing latitude or longitude in geo coordinates');
    } else {
      const lat = parseFloat(schema.geo.latitude);
      const lng = parseFloat(schema.geo.longitude);
      if (lat < -90 || lat > 90) {
        errors.push('Invalid latitude value');
      }
      if (lng < -180 || lng > 180) {
        errors.push('Invalid longitude value');
      }
    }
  }

  // Telephone validation
  if (schema.telephone && !schema.telephone.match(/^\+?[\d\s\-\(\)]+$/)) {
    warnings.push('Telephone format should follow international standards');
  }

  // Image validation
  if (!schema.image || (Array.isArray(schema.image) && schema.image.length === 0)) {
    warnings.push('Missing business images for better visibility');
  }

  // Opening hours validation
  if (schema.openingHoursSpecification) {
    if (!Array.isArray(schema.openingHoursSpecification)) {
      errors.push('Opening hours specification should be an array');
    } else {
      schema.openingHoursSpecification.forEach((hours: any, index: number) => {
        if (!hours.dayOfWeek || !hours.opens || !hours.closes) {
          errors.push(`Missing opening hours data at index ${index}`);
        }
      });
    }
  }

  // Recommendations
  if (!schema.priceRange) {
    recommendations.push('Add priceRange for better local search visibility');
  }

  if (!schema.areaServed) {
    recommendations.push('Add areaServed to specify service coverage area');
  }

  if (!schema.aggregateRating) {
    recommendations.push('Add aggregateRating to display star ratings in search results');
  }

  if (!schema.serviceArea) {
    recommendations.push('Add serviceArea with geographic boundaries for mobile businesses');
  }

  const isValid = errors.length === 0;

  return {
    type: 'LocalBusiness',
    isValid,
    errors,
    warnings,
    recommendations
  };
}

/**
 * Validate Service schema markup
 */
export function validateServiceSchema(schema: any): SchemaValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  const requiredFields = ['@context', '@type', 'name', 'serviceType', 'provider'];

  requiredFields.forEach(field => {
    if (!schema[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  if (!schema.areaServed) {
    warnings.push('Missing areaServed field for service coverage specification');
  }

  if (!schema.offers) {
    recommendations.push('Add offers to display pricing information in search results');
  }

  if (!schema.serviceAudience) {
    recommendations.push('Add serviceAudience to target specific customer segments');
  }

  const isValid = errors.length === 0;

  return {
    type: 'Service',
    isValid,
    errors,
    warnings,
    recommendations
  };
}

/**
 * Validate FAQ schema markup
 */
export function validateFAQSchema(schema: any): SchemaValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  if (!schema['@context'] || !schema['@type'] || !schema.mainEntity) {
    errors.push('Missing required FAQ schema fields');
  }

  if (schema.mainEntity) {
    if (!Array.isArray(schema.mainEntity)) {
      errors.push('mainEntity should be an array of questions');
    } else {
      schema.mainEntity.forEach((qa: any, index: number) => {
        if (!qa.name || !qa.acceptedAnswer) {
          errors.push(`Question ${index + 1} missing name or acceptedAnswer`);
        }
        if (qa.acceptedAnswer && !qa.acceptedAnswer.text) {
          errors.push(`Question ${index + 1} answer missing text`);
        }
      });

      if (schema.mainEntity.length < 3) {
        recommendations.push('Add more questions (3-10 recommended) for better FAQ coverage');
      }

      if (schema.mainEntity.length > 10) {
        warnings.push('Consider limiting FAQs to 10 or fewer for optimal user experience');
      }
    }
  }

  const isValid = errors.length === 0;

  return {
    type: 'FAQ',
    isValid,
    errors,
    warnings,
    recommendations
  };
}

/**
 * Validate breadcrumb schema markup
 */
export function validateBreadcrumbSchema(schema: any): SchemaValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  if (!schema['@context'] || !schema['@type'] || !schema.itemListElement) {
    errors.push('Missing required breadcrumb schema fields');
  }

  if (schema.itemListElement) {
    if (!Array.isArray(schema.itemListElement)) {
      errors.push('itemListElement should be an array');
    } else {
      schema.itemListElement.forEach((item: any, index: number) => {
        if (!item.position || !item.name || !item.item) {
          errors.push(`Breadcrumb item ${index + 1} missing required fields`);
        }
        if (item.position !== index + 1) {
          errors.push(`Breadcrumb item ${index + 1} position should be ${index + 1}`);
        }
      });

      if (schema.itemListElement.length < 2) {
        warnings.push('Breadcrumbs should have at least 2 levels');
      }
    }
  }

  const isValid = errors.length === 0;

  return {
    type: 'Breadcrumb',
    isValid,
    errors,
    warnings,
    recommendations
  };
}

/**
 * Validate meta tags
 */
export function validateMetaTags(metaTags: any): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Title validation
  if (!metaTags.title) {
    errors.push('Missing page title');
  } else {
    if (metaTags.title.length < 30) {
      warnings.push('Title is too short (recommended 30-60 characters)');
    }
    if (metaTags.title.length > 60) {
      warnings.push('Title may be truncated in search results (over 60 characters)');
    }
  }

  // Description validation
  if (!metaTags.description) {
    errors.push('Missing meta description');
  } else {
    if (metaTags.description.length < 120) {
      warnings.push('Description is too short (recommended 120-160 characters)');
    }
    if (metaTags.description.length > 160) {
      warnings.push('Description may be truncated (over 160 characters)');
    }
  }

  // Keywords validation
  if (!metaTags.keywords || metaTags.keywords.length === 0) {
    recommendations.push('Add relevant keywords for better targeting');
  } else if (metaTags.keywords.length > 20) {
    warnings.push('Too many keywords may dilute relevance');
  }

  // Open Graph validation
  if (!metaTags.ogTitle || !metaTags.ogDescription || !metaTags.ogImage) {
    warnings.push('Missing Open Graph tags for social media optimization');
  }

  // Twitter Cards validation
  if (!metaTags.twitterTitle || !metaTags.twitterDescription) {
    warnings.push('Missing Twitter Card tags for Twitter optimization');
  }

  // Canonical URL validation
  if (!metaTags.canonical) {
    warnings.push('Missing canonical URL');
  } else if (!metaTags.canonical.startsWith('https://')) {
    errors.push('Canonical URL should use HTTPS');
  }

  const score = Math.max(0, 100 - (errors.length * 20) - (warnings.length * 10));
  const isValid = errors.length === 0;

  return {
    isValid,
    score,
    errors,
    warnings,
    recommendations
  };
}

/**
 * Validate page performance
 */
export function validatePerformance(metrics: PerformanceMetrics): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Core Web Vitals validation
  if (metrics.lcp > 2500) {
    errors.push(`LCP too slow: ${metrics.lcp}ms (should be under 2.5s)`);
  } else if (metrics.lcp > 2000) {
    warnings.push(`LCP could be improved: ${metrics.lcp}ms`);
  }

  if (metrics.fid > 100) {
    errors.push(`FID too slow: ${metrics.fid}ms (should be under 100ms)`);
  } else if (metrics.fid > 50) {
    warnings.push(`FID could be improved: ${metrics.fid}ms`);
  }

  if (metrics.cls > 0.1) {
    errors.push(`CLS too high: ${metrics.cls} (should be under 0.1)`);
  } else if (metrics.cls > 0.05) {
    warnings.push(`CLS could be improved: ${metrics.cls}`);
  }

  // Additional performance metrics
  if (metrics.fcp > 1800) {
    warnings.push(`FCP could be faster: ${metrics.fcp}ms`);
  }

  if (metrics.ttfb > 600) {
    warnings.push(`TTFB could be improved: ${metrics.ttfb}ms`);
  }

  if (metrics.imageOptimization < 80) {
    recommendations.push('Optimize images for better performance');
  }

  if (metrics.cacheScore < 80) {
    recommendations.push('Implement better caching strategies');
  }

  // Performance score calculation
  let score = 100;
  score -= errors.length * 25;
  score -= warnings.length * 10;

  const isValid = errors.length === 0 && warnings.length < 3;

  return {
    isValid,
    score: Math.max(0, score),
    errors,
    warnings,
    recommendations,
    metrics
  };
}

/**
 * Comprehensive SEO audit for city page
 */
export function auditCityPage(pageData: {
  url: string;
  schemas: any[];
  metaTags: any;
  performance: PerformanceMetrics;
}): SEOValidationResult {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const allRecommendations: string[] = [];

  // Validate schemas
  pageData.schemas.forEach(schema => {
    let validation: SchemaValidation;

    switch (schema['@type']) {
      case 'LocalBusiness':
      case ['LocalBusiness', 'AutomotiveBusiness']:
        validation = validateLocalBusinessSchema(schema);
        break;
      case 'Service':
        validation = validateServiceSchema(schema);
        break;
      case 'FAQPage':
        validation = validateFAQSchema(schema);
        break;
      case 'BreadcrumbList':
        validation = validateBreadcrumbSchema(schema);
        break;
      default:
        validation = { type: 'Unknown', isValid: true, errors: [], warnings: [], recommendations: [] };
    }

    allErrors.push(...validation.errors.map(e => `${validation.type}: ${e}`));
    allWarnings.push(...validation.warnings.map(w => `${validation.type}: ${w}`));
    allRecommendations.push(...validation.recommendations.map(r => `${validation.type}: ${r}`));
  });

  // Validate meta tags
  const metaValidation = validateMetaTags(pageData.metaTags);
  allErrors.push(...metaValidation.errors);
  allWarnings.push(...metaValidation.warnings);
  allRecommendations.push(...metaValidation.recommendations);

  // Validate performance
  const performanceValidation = validatePerformance(pageData.performance);
  allErrors.push(...performanceValidation.errors);
  allWarnings.push(...performanceValidation.warnings);
  allRecommendations.push(...performanceValidation.recommendations);

  // Calculate overall score
  const schemaScore = (pageData.schemas.length * 20); // 20 points per schema type
  const metaScore = metaValidation.score * 0.3; // 30% weight
  const performanceScore = performanceValidation.score * 0.4; // 40% weight
  const overallScore = Math.max(0, schemaScore + metaScore + performanceScore - (allErrors.length * 15) - (allWarnings.length * 5));

  return {
    isValid: allErrors.length === 0,
    score: Math.min(100, overallScore),
    errors: allErrors,
    warnings: allWarnings,
    recommendations: allRecommendations,
    metrics: pageData.performance
  };
}

/**
 * Generate SEO monitoring script
 */
export function generateSEOMonitoringScript(): string {
  return `
    <script>
      // SEO Performance Monitoring
      class SEOMonitor {
        constructor() {
          this.metrics = {};
          this.initMonitoring();
        }

        initMonitoring() {
          // Monitor Core Web Vitals
          this.observeWebVitals();

          // Monitor schema validation
          this.validateSchemas();

          // Monitor meta tags
          this.validateMetaTags();

          // Send data periodically
          setInterval(() => this.reportMetrics(), 30000);
        }

        observeWebVitals() {
          // LCP Observer
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            this.metrics.lcp = lastEntry.startTime;
          }).observe({ type: 'largest-contentful-paint', buffered: true });

          // CLS Observer
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                this.metrics.cls = (this.metrics.cls || 0) + entry.value;
              }
            }
          }).observe({ type: 'layout-shift', buffered: true });

          // FID Observer
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              this.metrics.fid = entry.processingStart - entry.startTime;
            }
          }).observe({ type: 'first-input', buffered: true });
        }

        validateSchemas() {
          const schemas = document.querySelectorAll('script[type="application/ld+json"]');
          this.metrics.schemaCount = schemas.length;
          this.metrics.schemaValid = true;

          schemas.forEach(script => {
            try {
              JSON.parse(script.textContent);
            } catch (e) {
              this.metrics.schemaValid = false;
            }
          });
        }

        validateMetaTags() {
          const title = document.querySelector('title');
          const description = document.querySelector('meta[name="description"]');
          const canonical = document.querySelector('link[rel="canonical"]');

          this.metrics.hasTitle = !!title;
          this.metrics.hasDescription = !!description;
          this.metrics.hasCanonical = !!canonical;
          this.metrics.titleLength = title ? title.textContent.length : 0;
          this.metrics.descriptionLength = description ? description.content.length : 0;
        }

        reportMetrics() {
          // Send metrics to analytics or monitoring service
          if (typeof gtag !== 'undefined') {
            Object.entries(this.metrics).forEach(([key, value]) => {
              gtag('event', 'seo_metric', {
                metric_name: key,
                metric_value: value,
                page_url: window.location.pathname
              });
            });
          }

          // Log to console in development
          if (window.location.hostname === 'localhost') {
            console.log('SEO Metrics:', this.metrics);
          }
        }
      }

      // Initialize monitoring when page loads
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new SEOMonitor());
      } else {
        new SEOMonitor();
      }
    </script>
  `;
}

export default {
  validateLocalBusinessSchema,
  validateServiceSchema,
  validateFAQSchema,
  validateBreadcrumbSchema,
  validateMetaTags,
  validatePerformance,
  auditCityPage,
  generateSEOMonitoringScript
};