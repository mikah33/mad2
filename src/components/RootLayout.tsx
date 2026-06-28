import { Outlet } from 'react-router-dom';
import PageViewTracker from './PageViewTracker';
import EngagementTracker from './EngagementTracker';
import GHLChatWidget from './GHLChatWidget';

export const RootLayout = () => {
  return (
    <>
      <PageViewTracker />
      <EngagementTracker />
      <GHLChatWidget />
      <Outlet />
    </>
  );
};

export default RootLayout;
