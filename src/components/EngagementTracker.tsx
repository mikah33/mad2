import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  captureClickIds,
  installContactLinkTracking,
  installCtaClickTracking,
  installFunnelAbandonTracking,
  trackPageEngagement,
} from '../utils/analytics';

/**
 * Site-wide engagement tracking:
 *  - installs one delegated listener for every tel:/sms: link (once)
 *  - installs one delegated listener for every button/link click (cta_click)
 *  - installs booking-funnel abandon reporting (booking_abandon / booking_resume)
 *  - tracks scroll depth + section views + per-section dwell time, re-armed on
 *    each route change
 */
export const EngagementTracker = () => {
  const location = useLocation();

  // Capture ad click IDs and install the global one-time listeners.
  useEffect(() => {
    captureClickIds();
    installContactLinkTracking();
    installCtaClickTracking();
    installFunnelAbandonTracking();
  }, []);

  // Re-arm scroll depth + section observers for each page.
  useEffect(() => {
    const cleanup = trackPageEngagement(location.pathname);
    return cleanup;
  }, [location.pathname]);

  return null;
};

export default EngagementTracker;
