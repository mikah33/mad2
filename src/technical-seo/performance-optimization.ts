/**
 * Performance Optimization Utilities for Technical SEO
 * Advanced performance optimizations for city pages
 */

export interface PerformanceConfig {
  enableLazyLoading: boolean;
  enableCriticalCSS: boolean;
  enableImageOptimization: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
}

export interface ImageOptimizationConfig {
  formats: string[];
  sizes: number[];
  quality: number;
  enableWebP: boolean;
  enableAVIF: boolean;
  lazyLoadThreshold: string;
}

/**
 * Critical CSS inlining for above-the-fold content
 */
export function generateCriticalCSS(): string {
  return `
    <style>
      /* Critical CSS for above-the-fold content */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        color: #333333;
      }

      .hero-section {
        background: linear-gradient(135deg, #023E8A 0%, #0077B6 100%);
        color: white;
        padding: 60px 20px;
        text-align: center;
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-content h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        margin: 0 0 1rem;
        line-height: 1.2;
      }

      .hero-content p {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        margin: 0 0 2rem;
        opacity: 0.9;
      }

      .cta-button {
        background: linear-gradient(45deg, #FF6B35, #F7931E);
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: transform 0.2s ease;
      }

      .cta-button:hover {
        transform: translateY(-2px);
      }

      .navigation {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 15px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* Performance optimizations */
      img {
        height: auto;
        max-width: 100%;
      }

      .lazy-load {
        opacity: 0;
        transition: opacity 0.3s;
      }

      .lazy-load.loaded {
        opacity: 1;
      }

      /* Mobile-first responsive design */
      @media (max-width: 768px) {
        .hero-section {
          padding: 40px 15px;
        }

        .container {
          padding: 0 15px;
        }
      }
    </style>
  `;
}

/**
 * Lazy loading implementation for images and content
 */
export function generateLazyLoadingScript(): string {
  return `
    <script>
      // Intersection Observer for lazy loading
      const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;

            // Load the image
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }

            // Load srcset if available
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }

            // Add loaded class for transition
            img.classList.add('loaded');

            // Stop observing this image
            lazyLoadObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '100px 0px',
        threshold: 0.01
      });

      // Initialize lazy loading when DOM is ready
      document.addEventListener('DOMContentLoaded', function() {
        const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
        lazyImages.forEach(img => {
          img.classList.add('lazy-load');
          lazyLoadObserver.observe(img);
        });
      });

      // Fallback for browsers without Intersection Observer
      if (!window.IntersectionObserver) {
        document.addEventListener('DOMContentLoaded', function() {
          const lazyImages = document.querySelectorAll('img[data-src]');
          lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          });
        });
      }
    </script>
  `;
}

/**
 * Resource prefetching for improved performance
 */
export function generateResourcePrefetching(cityKey: string): string {
  const resourceHints = [
    // DNS prefetching for external resources
    '<link rel="dns-prefetch" href="//www.google-analytics.com">',
    '<link rel="dns-prefetch" href="//www.googletagmanager.com">',
    '<link rel="dns-prefetch" href="//connect.facebook.net">',
    '<link rel="dns-prefetch" href="//fonts.googleapis.com">',
    '<link rel="dns-prefetch" href="//fonts.gstatic.com">',

    // Preconnect for critical resources
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link rel="preconnect" href="https://www.google-analytics.com">',

    // Preload critical resources
    '<link rel="preload" href="/assets/fonts/primary-font.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="/hero-bg.webp" as="image">',
    '<link rel="preload" href="/logo.svg" as="image">',

    // Module preload for JS
    '<link rel="modulepreload" href="/assets/main.js">',
    '<link rel="modulepreload" href="/assets/navigation.js">',

    // Prefetch for likely next pages
    `<link rel="prefetch" href="/contact">`,
    `<link rel="prefetch" href="/services">`,
    `<link rel="prefetch" href="/pricing">`
  ];

  return resourceHints.join('\n    ');
}

/**
 * Generate optimized image markup with multiple formats
 */
export function generateOptimizedImageMarkup(
  src: string,
  alt: string,
  width: number,
  height: number,
  cityName: string
): string {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  return `
    <picture>
      <source srcset="${avifSrc}" type="image/avif">
      <source srcset="${webpSrc}" type="image/webp">
      <img
        data-src="${src}"
        alt="${alt} - ${cityName} Mobile Auto Detailing"
        width="${width}"
        height="${height}"
        loading="lazy"
        decoding="async"
        class="lazy-load"
        style="aspect-ratio: ${width}/${height};"
      >
    </picture>
  `;
}

/**
 * Service Worker registration for caching
 */
export function generateServiceWorkerScript(): string {
  return `
    <script>
      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
              console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    </script>
  `;
}

/**
 * Generate Service Worker content for caching strategies
 */
export function generateServiceWorkerContent(): string {
  return `
    // Service Worker for caching strategies
    const CACHE_NAME = 'mikah-detailing-v1';
    const urlsToCache = [
      '/',
      '/assets/main.css',
      '/assets/main.js',
      '/logo.svg',
      '/favicon.ico',
      '/offline.html'
    ];

    self.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            return cache.addAll(urlsToCache);
          })
      );
    });

    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Return cached version or fetch from network
            if (response) {
              return response;
            }
            return fetch(event.request);
          }
        )
      );
    });

    self.addEventListener('activate', function(event) {
      event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });
  `;
}

/**
 * Core Web Vitals monitoring
 */
export function generateWebVitalsScript(): string {
  return `
    <script>
      // Core Web Vitals monitoring
      function getCLS(onPerfEntry) {
        if (typeof onPerfEntry === 'function') {
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                onPerfEntry(entry);
              }
            }
          }).observe({ type: 'layout-shift', buffered: true });
        }
      }

      function getFID(onPerfEntry) {
        if (typeof onPerfEntry === 'function') {
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              onPerfEntry(entry);
            }
          }).observe({ type: 'first-input', buffered: true });
        }
      }

      function getFCP(onPerfEntry) {
        if (typeof onPerfEntry === 'function') {
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                onPerfEntry(entry);
              }
            }
          }).observe({ type: 'paint', buffered: true });
        }
      }

      function getLCP(onPerfEntry) {
        if (typeof onPerfEntry === 'function') {
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            onPerfEntry(lastEntry);
          }).observe({ type: 'largest-contentful-paint', buffered: true });
        }
      }

      // Send metrics to Google Analytics
      function sendToGA(metric) {
        if (typeof gtag !== 'undefined') {
          gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_category: 'Web Vitals',
            event_label: metric.id,
            non_interaction: true
          });
        }
      }

      // Initialize monitoring
      getCLS(sendToGA);
      getFID(sendToGA);
      getFCP(sendToGA);
      getLCP(sendToGA);
    </script>
  `;
}

/**
 * Mobile optimization styles
 */
export function generateMobileOptimizationCSS(): string {
  return `
    <style>
      /* Mobile-first responsive optimizations */
      @media (max-width: 480px) {
        .hero-content h1 {
          font-size: 2rem;
          line-height: 1.1;
        }

        .hero-content p {
          font-size: 1rem;
        }

        .cta-button {
          padding: 12px 24px;
          font-size: 1rem;
        }

        .services-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .testimonial-card {
          padding: 20px;
        }
      }

      /* Tablet optimizations */
      @media (min-width: 481px) and (max-width: 768px) {
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* Touch-friendly interactions */
      .cta-button,
      .contact-button {
        min-height: 44px;
        min-width: 44px;
      }

      /* Reduce animations on low-power devices */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .hero-section {
          background: #000000;
          color: #ffffff;
        }

        .cta-button {
          background: #ffffff;
          color: #000000;
          border: 2px solid #ffffff;
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        :root {
          --bg-color: #1a1a1a;
          --text-color: #ffffff;
          --card-bg: #2a2a2a;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-color);
        }

        .service-card {
          background: var(--card-bg);
          border: 1px solid #444;
        }
      }
    </style>
  `;
}

export default {
  generateCriticalCSS,
  generateLazyLoadingScript,
  generateResourcePrefetching,
  generateOptimizedImageMarkup,
  generateServiceWorkerScript,
  generateServiceWorkerContent,
  generateWebVitalsScript,
  generateMobileOptimizationCSS
};