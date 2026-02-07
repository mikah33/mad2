import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Facebook Pixel PageView
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'PageView');
    }

    // Google Analytics 4 / gtag page_view
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Google Tag Manager dataLayer push (for GTM triggers)
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
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
