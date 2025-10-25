import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import InteriorDetailingPage from './pages/InteriorDetailingPage';
import ExteriorDetailingPage from './pages/ExteriorDetailingPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import PaintCorrectionPage from './pages/PaintCorrectionPage';
import FullDetailPage from './pages/FullDetailPage';
import MobileDetailingPage from './pages/MobileDetailingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services/interior-detailing',
    element: <InteriorDetailingPage />,
  },
  {
    path: '/services/exterior-detailing',
    element: <ExteriorDetailingPage />,
  },
  {
    path: '/services/ceramic-coating',
    element: <CeramicCoatingPage />,
  },
  {
    path: '/services/paint-correction',
    element: <PaintCorrectionPage />,
  },
  {
    path: '/services/full-detail',
    element: <FullDetailPage />,
  },
  {
    path: '/services/mobile-detailing',
    element: <MobileDetailingPage />,
  },
]);
