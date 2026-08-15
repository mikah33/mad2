import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageViewTracker from './PageViewTracker';
import EngagementTracker from './EngagementTracker';

/**
 * Routes are code-split (see router.tsx), so the Outlet needs a Suspense
 * boundary. The fallback reserves full viewport height so swapping a chunk in
 * doesn't collapse the page and shift layout (CLS).
 */
export const RootLayout = () => {
  return (
    <>
      <PageViewTracker />
      <EngagementTracker />
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
