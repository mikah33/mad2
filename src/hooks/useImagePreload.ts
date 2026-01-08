import { useEffect } from 'react';

/**
 * Preload critical images for better Core Web Vitals
 */
export const useImagePreload = (imageSources: string[]) => {
  useEffect(() => {
    const preloadImages = imageSources.map(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;

      // Add WebP preload if supported
      if ('WebPSupported' in window || CSS?.supports?.('image', 'webp')) {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '_optimized.webp');
        link.href = webpSrc;
      }

      document.head.appendChild(link);
      return link;
    });

    // Cleanup
    return () => {
      preloadImages.forEach(link => {
        if (link.parentNode) {
          document.head.removeChild(link);
        }
      });
    };
  }, [imageSources]);
};

/**
 * Critical detailing images to preload
 */
export const CRITICAL_DETAILING_IMAGES = [
  '/exterior3.jpg',
  '/exterior4.jpg',
  '/exterior5.jpg',
  '/paintcorrection.jpg'
];