import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ServicesPage } from './pages/ServicesPage';
import InteriorDetailingPage from './pages/InteriorDetailingPage';
import ExteriorDetailingPage from './pages/ExteriorDetailingPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import PaintCorrectionPage from './pages/PaintCorrectionPage';
import FullDetailPage from './pages/FullDetailPage';
import MobileDetailingPage from './pages/MobileDetailingPage';
import { BlogPage } from './pages/blog/BlogPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { FAQPage } from './pages/FAQPage';
import { CeramicCoatingFAQPage } from './pages/CeramicCoatingFAQPage';
import { MobileDetailingFAQPage } from './pages/MobileDetailingFAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { LocationsPage } from './pages/LocationsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import LocationColumbiaPage from './pages/LocationColumbiaPage';
import LocationLexingtonPage from './pages/LocationLexingtonPage';
import LocationIrmoPage from './pages/LocationIrmoPage';
import LocationCayecPage from './pages/LocationCayecPage';
import LocationWestColumbiaPage from './pages/LocationWestColumbiaPage';
import PricingPage from './pages/PricingPage';
import ErrorBoundary from './components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
    errorElement: <ErrorBoundary />,
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
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPostPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/faq/ceramic-coating',
    element: <CeramicCoatingFAQPage />,
  },
  {
    path: '/faq/mobile-detailing',
    element: <MobileDetailingFAQPage />,
  },
  {
    path: '/locations',
    element: <LocationsPage />,
  },
  {
    path: '/locations/columbia-sc',
    element: <LocationColumbiaPage />,
  },
  {
    path: '/locations/lexington-sc',
    element: <LocationLexingtonPage />,
  },
  {
    path: '/locations/irmo-sc',
    element: <LocationIrmoPage />,
  },
  {
    path: '/locations/cayce-sc',
    element: <LocationCayecPage />,
  },
  {
    path: '/locations/west-columbia',
    element: <LocationWestColumbiaPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms',
    element: <TermsOfServicePage />,
  },
]);
