/**
 * Image optimization utilities for better Core Web Vitals
 */

export interface OptimizedImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Generate optimized image sources for WebP and JPEG
 */
export const generateImageSources = (src: string) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '_optimized.webp');
  const jpegSrc = src.replace(/\.(jpg|jpeg|png)$/i, '_optimized.jpg');
  return { webpSrc, jpegSrc };
};

/**
 * Generate detailing-specific alt text with SEO keywords
 */
export const generateDetailingAltText = (baseTitle: string, service: string): string => {
  const seoKeywords = {
    exterior: 'mobile auto detailing exterior wash Columbia SC',
    paintCorrection: 'paint correction swirl removal Columbia SC professional detailing',
    ceramic: 'ceramic coating application paint protection Columbia SC',
    interior: 'interior auto detailing deep cleaning Columbia SC',
    mobile: 'mobile car detailing service Columbia SC on-site'
  };

  const serviceKeyword = seoKeywords[service as keyof typeof seoKeywords] ||
                        'professional auto detailing Columbia SC';

  return `${baseTitle} - ${serviceKeyword}`;
};

/**
 * Sizes attribute for responsive images
 */
export const generateSizes = (breakpoints: { mobile?: number; tablet?: number; desktop?: number }) => {
  const { mobile = 350, tablet = 768, desktop = 1200 } = breakpoints;
  return `(max-width: 640px) ${mobile}px, (max-width: 1024px) ${tablet}px, ${desktop}px`;
};

/**
 * Critical detailing images that should load with high priority
 */
export const CRITICAL_IMAGES = [
  '/exterior3.jpg',
  '/exterior4.jpg',
  '/exterior5.jpg',
  '/paintcorrection.jpg'
];

/**
 * Check if image should be high priority
 */
export const isHighPriorityImage = (src: string): boolean => {
  return CRITICAL_IMAGES.some(criticalSrc => src.includes(criticalSrc.replace('/', '')));
};