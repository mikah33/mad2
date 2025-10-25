import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema } from '../components/seo/StructuredData';
import { businessInfo } from '../data/business';

export const HomePage = () => {
  const schema = generateLocalBusinessSchema({
    name: businessInfo.name,
    description: businessInfo.description,
    phone: businessInfo.phone,
    email: businessInfo.email,
    address: businessInfo.address,
    hours: businessInfo.hours,
    priceRange: businessInfo.priceRange
  });

  return (
    <>
      <SEOHead
        title="Professional Mobile Auto Detailing"
        description="Premium mobile auto detailing services in Phoenix, AZ. Professional ceramic coating, paint correction, and interior/exterior detailing. Book today!"
        keywords="auto detailing, mobile detailing, ceramic coating, paint correction, Phoenix AZ"
        canonical="https://mikahsautodetailing.com"
        schema={schema}
      />

      <div className="home-page">
        {/* Content placeholder */}
        <h1>Home Page</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
