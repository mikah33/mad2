import { Outlet } from 'react-router-dom';
import PageViewTracker from './PageViewTracker';

export const RootLayout = () => {
  return (
    <>
      <PageViewTracker />
      <Outlet />
    </>
  );
};

export default RootLayout;
