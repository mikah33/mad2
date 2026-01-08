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
        title="Professional Mobile Car Detailing in Columbia, SC | Detailing Car Near Me"
        description="#1 mobile car detailing in Columbia SC. Professional automotive detail near me service - we come to you! Interior car detailing, exterior auto detailing, mobile detailing packages. Get a free quote today!"
        keywords="detailing car near me, detailing auto near me, automotive detail near me, car interior detailing, mobile detailing columbia sc, auto detailing columbia sc, mobile car detailing columbia sc, professional mobile detailing, automotive detailing near me"
        canonical="https://mikahsmobiledetailingsc.com"
        schema={schemas}
      />

      <div className="home-page">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Mobile Car Detailing in Columbia, SC</h1>
                <p className="text-xl mb-8 text-blue-100">
                  #1 rated mobile car detailing service in Columbia, SC. Professional automotive detail near me - we bring expert car interior detailing, exterior auto detailing, and mobile detailing packages directly to your location.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#quote" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                    Get Free Quote
                  </a>
                  <a href="tel:5551234567" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition">
                    Call (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <picture>
                  <source srcSet="/exterior3_optimized.webp" type="image/webp" />
                  <img src="/exterior3.jpg" alt="Mobile auto detailing premium exterior wash and ceramic coating prep Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Detailing Services Near You</h2>
              <p className="text-xl text-gray-600">Professional automotive detail services that come to your location in Columbia, SC</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Car Interior Detailing</h3>
                <p className="text-gray-600 mb-6">Deep cleaning, conditioning, and protection for your vehicle's interior</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Steam cleaning and sanitization</li>
                  <li>• Leather conditioning and protection</li>
                  <li>• Stain and odor removal</li>
                  <li>• Vacuum and disinfection</li>
                </ul>
                <p className="font-bold text-blue-600">Starting at $200</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Exterior Auto Detailing</h3>
                <p className="text-gray-600 mb-6">Complete exterior wash, polish, and protection services</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Hand wash and foam contact wash</li>
                  <li>• Wheel decontamination</li>
                  <li>• Protective wax application</li>
                  <li>• Tire and wheel dressing</li>
                </ul>
                <p className="font-bold text-blue-600">Starting at $200</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Full Service Mobile Detailing</h3>
                <p className="text-gray-600 mb-6">Complete interior and exterior detailing packages</p>
                <ul className="text-left text-gray-600 space-y-2 mb-6">
                  <li>• Complete interior detailing</li>
                  <li>• Full exterior detailing</li>
                  <li>• Engine bay cleaning</li>
                  <li>• Monthly maintenance plans</li>
                </ul>
                <p className="font-bold text-blue-600">Starting at $325</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
