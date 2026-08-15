import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import RootLayout from './components/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * Route code-splitting.
 *
 * Every page component used to be imported eagerly, so a visitor landing on the
 * homepage downloaded all 44 pages plus the neighborhoods dataset in one 1.0MB
 * bundle — the reason mobile Lighthouse performance sat at 46.
 *
 * App (the homepage) and NotFoundPage stay EAGER on purpose: the homepage takes
 * the most traffic and is what Lighthouse measures, so it must not wait on a
 * second network round-trip, and the catch-all is tiny. Everything else loads on
 * demand. Static HTML for every route is still prerendered at build time
 * (scripts/generate-all-pages-html.ts), so crawlers never wait on a chunk.
 */
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const InteriorDetailingPage = lazy(() => import('./pages/InteriorDetailingPage'));
const OdorStainRemovalPage = lazy(() => import('./pages/OdorStainRemovalPage'));
const ExteriorDetailingPage = lazy(() => import('./pages/ExteriorDetailingPage'));
const CeramicCoatingPage = lazy(() => import('./pages/CeramicCoatingPage'));
const PaintCorrectionPage = lazy(() => import('./pages/PaintCorrectionPage'));
const FullDetailPage = lazy(() => import('./pages/FullDetailPage'));
const MobileDetailingPage = lazy(() => import('./pages/MobileDetailingPage'));
const BlogPage = lazy(() => import('./pages/blog/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const CeramicCoatingFAQPage = lazy(() => import('./pages/CeramicCoatingFAQPage').then((m) => ({ default: m.CeramicCoatingFAQPage })));
const MobileDetailingFAQPage = lazy(() => import('./pages/MobileDetailingFAQPage').then((m) => ({ default: m.MobileDetailingFAQPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then((m) => ({ default: m.TermsOfServicePage })));
const LocationsPage = lazy(() => import('./pages/LocationsPage').then((m) => ({ default: m.LocationsPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })));
const LocationColumbiaPage = lazy(() => import('./pages/LocationColumbiaPage'));
const LocationLexingtonPage = lazy(() => import('./pages/LocationLexingtonPage'));
const LocationIrmoPage = lazy(() => import('./pages/LocationIrmoPage'));
const LocationCayecPage = lazy(() => import('./pages/LocationCayecPage'));
const LocationWestColumbiaPage = lazy(() => import('./pages/LocationWestColumbiaPage'));
const LocationChapinPage = lazy(() => import('./pages/LocationChapinPage').then((m) => ({ default: m.LocationChapinPage })));
const LocationSwanseaPage = lazy(() => import('./pages/LocationSwanseaPage').then((m) => ({ default: m.LocationSwanseaPage })));
const LocationNewberryPage = lazy(() => import('./pages/LocationNewberryPage').then((m) => ({ default: m.LocationNewberryPage })));
const LocationBlythewoodPage = lazy(() => import('./pages/LocationBlythewoodPage').then((m) => ({ default: m.LocationBlythewoodPage })));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ReviewUsPage = lazy(() => import('./pages/ReviewUsPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LandingPageSpecials = lazy(() => import('./pages/LandingPageSpecials'));
const NiceTryJeffrey = lazy(() => import('./pages/NiceTryJeffrey'));
const NeighborhoodPage = lazy(() => import('./pages/neighborhoods').then((m) => ({ default: m.NeighborhoodPage })));
const CityHubPage = lazy(() => import('./pages/neighborhoods').then((m) => ({ default: m.CityHubPage })));

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
        path: '/services/odor-stain-removal',
        element: <OdorStainRemovalPage />,
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
