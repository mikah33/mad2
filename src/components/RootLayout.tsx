import { Outlet } from 'react-router-dom';
import PageViewTracker from './PageViewTracker';
import EngagementTracker from './EngagementTracker';

export const RootLayout = () => {
  return (
    <>
      <PageViewTracker />
      <EngagementTracker />
      <Outlet />
    </>
  );
};

export default RootLayout;
