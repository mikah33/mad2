import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const LocationsPage = () => {
  return (
    <>
      <SEOHead
        title="Service Locations"
        description="Mobile auto detailing services available throughout Phoenix, Scottsdale, Tempe, Mesa, and surrounding Arizona cities."
        keywords="mobile detailing Phoenix, auto detailing Scottsdale, car detailing Tempe"
        canonical="https://mikahsautodetailing.com/locations"
      />

      <Breadcrumbs items={[{ name: 'Locations', url: '/locations' }]} />

      <div className="locations-page">
        {/* Content placeholder */}
        <h1>Service Locations</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
