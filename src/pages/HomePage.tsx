import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema, generateVideoSchema, generateItemListSchema } from '../components/seo/StructuredData';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { businessInfo } from '../data/business';
import { reviews, aggregateRating } from '../data/reviews';
import { faqs } from '../data/faqs-comprehensive';
import { services, getFeaturedServices } from '../data/services';

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

  // Generate ItemList schema for featured services
  const featuredServices = getFeaturedServices();
  const itemListSchema = generateItemListSchema(
    featuredServices.map(service => ({
      name: service.name,
      description: service.description || service.shortDescription,
      url: `https://mikahsmobiledetailingsc.com/services/${service.slug}`,
      image: service.image || `https://mikahsmobiledetailingsc.com/exterior1.jpg`,
      price: service.pricing?.starting !== 'Quote' ? service.pricing?.starting : undefined
    }))
  );

  // Generate enhanced comprehensive LocalBusiness schema
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  // Combine schemas
  const schemas = [gmbSchema, localBusinessSchema, enhancedBusinessSchema, faqSchema, videoSchema, itemListSchema];

  return (
    <>
      <SEOHead
        title="Mobile Auto Detailing Columbia SC | Best Car Detailing Near Me"
        description="#1 mobile auto detailing in Columbia SC. Professional mobile car detailing service - we come to you! Interior/exterior detailing, ceramic coating, paint correction. Get a free quote today!"
        keywords="mobile auto detailing, mobile auto detailing columbia sc, mobile car detailing columbia sc, car detailing near me, auto detailing columbia sc, mobile automotive detailing, best car detailing columbia sc, interior car detailing, exterior detailing, ceramic coating columbia sc"
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
