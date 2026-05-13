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
import { LocationChapinPage } from './pages/LocationChapinPage';
import { LocationSwanseaPage } from './pages/LocationSwanseaPage';
import { LocationNewberryPage } from './pages/LocationNewberryPage';
import { LocationBlythewoodPage } from './pages/LocationBlythewoodPage';
import PricingPage from './pages/PricingPage';
import BookingPage from './pages/BookingPage';
import ThankYouPage from './pages/ThankYouPage';
import AccountPage from './pages/AccountPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ReviewUsPage from './pages/ReviewUsPage';
import LandingPage from './pages/LandingPage';
import LandingPageSpecials from './pages/LandingPageSpecials';
import AutoDetailingServicesColumbiaPage from './pages/AutoDetailingServicesColumbiaPage';
import NiceTryJeffrey from './pages/NiceTryJeffrey';
import { NotFoundPage } from './pages/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import { NeighborhoodPage, CityHubPage } from './pages/neighborhoods';
import RootLayout from './components/RootLayout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
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
        path: '/locations/chapin-sc',
        element: <LocationChapinPage />,
      },
      {
        path: '/locations/swansea-sc',
        element: <LocationSwanseaPage />,
      },
      {
        path: '/locations/newberry-sc',
        element: <LocationNewberryPage />,
      },
      {
        path: '/locations/blythewood-sc',
        element: <LocationBlythewoodPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/book',
        element: <BookingPage />,
      },
      {
        path: '/book/thank-you',
        element: <ThankYouPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/reviews',
        element: <ReviewsPage />,
      },
      {
        path: '/review-us',
        element: <ReviewUsPage />,
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
      {
        path: '/lp',
        element: <LandingPage />,
      },
      {
        path: '/lp-specials',
        element: <LandingPageSpecials />,
      },
      {
        path: '/auto-detailing-services-columbia-sc',
        element: <AutoDetailingServicesColumbiaPage />,
      },
      {
        path: '/nice-try-jeffrey',
        element: <NiceTryJeffrey />,
      },
      // Neighborhood landing pages (SEO-optimized URL structure)
      {
        path: '/locations/:citySlug/:neighborhoodSlug',
        element: <NeighborhoodPage />,
      },
      // City hub pages (shows all neighborhoods in a city)
      {
        path: '/locations/:citySlug/neighborhoods',
        element: <CityHubPage />,
      },
      // Legacy neighborhood routes (redirect support)
      {
        path: '/neighborhoods/:neighborhoodSlug',
        element: <NeighborhoodPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
