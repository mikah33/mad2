import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const ServicesPage = () => {
  return (
    <>
      <SEOHead
        title="Auto Detailing Services"
        description="Comprehensive auto detailing services including mobile detailing, ceramic coating, paint correction, interior and exterior detailing."
        keywords="auto detailing services, mobile detailing, ceramic coating, paint correction"
        canonical="https://mikahsautodetailing.com/services"
      />

      <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />

      <div className="services-page">
        {/* Content placeholder */}
        <h1>Our Services</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
