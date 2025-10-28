import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema } from '../components/seo/StructuredData';
import { businessInfo } from '../data/business';
import { reviews, aggregateRating } from '../data/reviews';

export const HomePage = () => {
  // Generate comprehensive LocalBusiness schema with reviews and aggregate rating
  const schema = generateLocalBusinessSchema(
    {
      name: businessInfo.name,
      description: businessInfo.description,
      phone: businessInfo.phone,
      email: businessInfo.email,
      address: businessInfo.address,
      hours: businessInfo.hours,
      priceRange: businessInfo.priceRange
    },
    aggregateRating,
    reviews
  );

  return (
    <>
      <SEOHead
        title="Best Car Detailing in Columbia SC | Mikah's Mobile Auto Detailing"
        description="Columbia SC's best mobile auto detailing service. Professional ceramic coating, paint correction, interior/exterior detailing. IDA certified, fully insured. We come to you! Book your free quote today."
        keywords="best car detailing columbia sc, auto detailing Columbia SC, mobile detailing Lexington SC, ceramic coating, paint correction, car detailing near me, interior detailing, exterior detailing, mobile car wash Columbia"
        canonical="https://mikahsmobiledetailingsc.com"
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
