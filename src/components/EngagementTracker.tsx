import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureClickIds, installContactLinkTracking, trackPageEngagement } from '../utils/analytics';

/**
 * Site-wide engagement tracking:
 *  - installs one delegated listener for every tel:/sms: link (once)
 *  - tracks scroll depth + section views, re-armed on each route change
 */
export const EngagementTracker = () => {
  const location = useLocation();

  // Capture ad click IDs and install the global call/text listener once.
  useEffect(() => {
    captureClickIds();
    installContactLinkTracking();
  }, []);

  // Re-arm scroll depth + section observers for each page.
  useEffect(() => {
    const cleanup = trackPageEngagement(location.pathname);
    return cleanup;
  }, [location.pathname]);

  return null;
};

export default EngagementTracker;
