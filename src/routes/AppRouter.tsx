import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Page imports - to be created
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { LocationsPage } from '../pages/LocationsPage';
import { LocationDetailPage } from '../pages/LocationDetailPage';
import { BlogPage } from '../pages/blog/BlogPage';
import { BlogPostPage } from '../pages/blog/BlogPostPage';
import { FAQPage } from '../pages/FAQPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

// Layout component - to be created
import { Layout } from '../components/Layout';

export const AppRouter = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home */}
            <Route index element={<HomePage />} />

            {/* Services */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />

            {/* Locations */}
            <Route path="locations" element={<LocationsPage />} />
            <Route path="locations/:locationSlug" element={<LocationDetailPage />} />

            {/* Blog */}
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:postSlug" element={<BlogPostPage />} />

            {/* Other Pages */}
            <Route path="faq" element={<FAQPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};
