import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Facebook Pixel PageView
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }

    // Google Analytics 4 / gtag page_view
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Google Tag Manager dataLayer push (for GTM triggers)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          search: location.search,
          title: document.title
        }
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default PageViewTracker;
