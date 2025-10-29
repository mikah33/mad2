import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema, generateVideoSchema } from '../components/seo/StructuredData';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import { businessInfo } from '../data/business';
import { reviews, aggregateRating } from '../data/reviews';
import { faqs } from '../data/faqs-comprehensive';

export const HomePage = () => {
  // Get top FAQs for homepage (most common questions)
  const homepageFAQs = [
    faqs.find(f => f.id === 'gen-1'), // What is difference between detailing and car wash
    faqs.find(f => f.id === 'gen-2'), // How long does detailing take
    faqs.find(f => f.id === 'gen-3'), // How often should I detail
    faqs.find(f => f.id === 'mob-1'), // How much does mobile detailing cost
    faqs.find(f => f.id === 'cer-2'), // What is ceramic coating
  ].filter(Boolean).map(f => ({ question: f!.question, answer: f!.answer }));

  // Generate comprehensive LocalBusiness schema with reviews and aggregate rating
  const localBusinessSchema = generateLocalBusinessSchema(
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

  // Generate GMB schema with all reviews
  const gmbSchema = generateGMBSchema();

  // Generate FAQ schema for common questions
  const faqSchema = generateFAQSchema(homepageFAQs);

  // Generate Video schema for hero video
  const videoSchema = generateVideoSchema({
    name: "Professional Mobile Auto Detailing in Columbia SC - Mikah's Auto Detailing",
    description: "Watch our professional mobile auto detailing service in action. We bring expert ceramic coating, paint correction, and interior/exterior detailing directly to your location in Columbia, Lexington, Irmo, and surrounding South Carolina areas.",
    thumbnailUrl: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    uploadDate: "2024-10-01",
    duration: "PT2M30S",
    contentUrl: "https://mikahsmobiledetailingsc.com/hero-video.mp4"
  });

  // Combine schemas
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, videoSchema];

  return (
    <>
      <SEOHead
        title="Best Car Detailing in Columbia SC | Mikah's Mobile Auto Detailing"
        description="Columbia SC's best mobile auto detailing service. Professional ceramic coating, paint correction, interior/exterior detailing. IDA certified, fully insured. We come to you! Book your free quote today."
        keywords="best car detailing columbia sc, auto detailing Columbia SC, mobile detailing Lexington SC, ceramic coating, paint correction, car detailing near me, interior detailing, exterior detailing, mobile car wash Columbia"
        canonical="https://mikahsmobiledetailingsc.com"
        schema={schemas}
      />

      <div className="home-page">
        {/* Content placeholder */}
        <h1>Home Page</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
