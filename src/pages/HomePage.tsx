import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema, generateVideoSchema, generateItemListSchema } from '../components/seo/StructuredData';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { businessInfo } from '../data/business';
import { reviews, aggregateRating } from '../data/reviews';
import { faqs } from '../data/faqs-comprehensive';
import { services, getFeaturedServices } from '../data/services';
import { Star, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';

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

  // Get featured testimonials for social proof section
  const featuredTestimonials = reviews.slice(0, 4);

  return (
    <>
      <SEOHead
        title="Mobile Auto Detailing Services Columbia & Lexington SC | 5-Star | Mikah's"
        description="#1 mobile auto detailing services in Columbia, Lexington & West Columbia SC. Interior/exterior from $225. 5.0★ rated. Same day available. Call (803) 667-8731!"
        keywords="mobile auto detailing services columbia sc, mobile car detailing lexington sc, auto detailing services columbia sc, car detailing near me, interior car detailing columbia, exterior auto detailing, same day car detailing, mobile detailing services"
        canonical="https://mikahsmobiledetailingsc.com"
        schema={schemas}
      />

      <div className="home-page">
        {/* Hero Section - Now handled by Hero component, keeping for SEO fallback */}
        <section className="relative bg-gradient-to-br from-[#023E8A] to-[#0077B6] text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Trust Signals - Above the Fold */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center bg-yellow-400/20 px-3 py-1.5 rounded-full border border-yellow-400/40">
                    <div className="flex mr-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">5.0 Rated</span>
                  </div>
                  <div className="flex items-center bg-white/15 px-3 py-1.5 rounded-full">
                    <span className="text-sm font-medium">100+ Happy Customers</span>
                  </div>
                  <div className="flex items-center bg-green-400/20 px-3 py-1.5 rounded-full border border-green-400/40">
                    <Clock className="w-4 h-4 mr-1 text-green-300" />
                    <span className="text-sm text-green-100">Same Day Available</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Auto Detailing in Columbia & Lexington SC</h1>
                <p className="text-xl mb-6 text-blue-100">
                  We come to you - same day appointments available. Professional interior & exterior detailing from <span className="font-bold text-white">$225</span>.
                </p>

                {/* Single Clear CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="#booking" className="inline-block">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-xl transform hover:scale-105">
                      Get Your Free Quote Now
                    </button>
                  </a>
                </div>

                {/* Phone Number - Prominent */}
                <a href="tel:+18036678731" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition">
                  <Phone className="w-5 h-5" />
                  <span className="text-xl font-bold">(803) 667-8731</span>
                  <span className="text-sm text-blue-200">- Call or Text</span>
                </a>
              </div>
              <div className="hidden md:block">
                <picture>
                  <source srcSet="/exterior3_optimized.webp" type="image/webp" />
                  <img src="/exterior3.jpg" alt="Professional exterior auto detailing services columbia sc - premium wash with ceramic coating prep" className="rounded-lg shadow-2xl" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Immediately After Hero */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Trust Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-800">5.0</span>
                <a
                  href="https://g.page/r/CdSqpNXvv_3aEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B6] hover:underline text-sm"
                >
                  (19 Google Reviews)
                </a>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Trusted by 100+ Columbia & Lexington Residents
              </h2>
              <p className="text-gray-600">See why customers choose Mikah's for their auto detailing needs</p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {featuredTestimonials.map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#023E8A] text-white flex items-center justify-center font-bold mr-3 text-sm">
                      {review.authorInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{review.author}</p>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">Google</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic line-clamp-4">"{review.reviewText}"</p>
                </div>
              ))}
            </div>

            {/* Google Review Badge & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://g.page/r/CdSqpNXvv_3aEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200 hover:shadow-md transition"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google Reviews for auto detailing services columbia sc" className="w-5 h-5" />
                <span className="font-medium text-gray-700">View All Google Reviews</span>
              </a>
              <a href="#booking">
                <button className="px-6 py-3 bg-[#023E8A] text-white font-bold rounded-lg hover:bg-[#0077B6] transition shadow">
                  Get Your Free Quote
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Quick Benefits */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-[#CAF0F8] rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-800">We Come To You</p>
                <p className="text-sm text-gray-600">Mobile service at your location</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-[#CAF0F8] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-800">Same Day Service</p>
                <p className="text-sm text-gray-600">Book today, detailed today</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-[#CAF0F8] rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-800">100% Satisfaction</p>
                <p className="text-sm text-gray-600">Not happy? We make it right</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-[#CAF0F8] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-800">5-Star Rated</p>
                <p className="text-sm text-gray-600">Perfect reviews on Google</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Mobile Detailing Services</h2>
              <p className="text-lg text-gray-600">Professional auto detailing that comes to your Columbia or Lexington location</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block bg-[#CAF0F8] text-[#023E8A] px-3 py-1 rounded-full text-sm font-medium mb-2">Most Popular</span>
                  <h3 className="text-xl font-bold">Interior Detailing</h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">Deep cleaning & conditioning for your vehicle's interior</p>
                <ul className="text-gray-600 space-y-2 mb-4 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Steam cleaning & sanitization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Leather conditioning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Stain & odor removal</li>
                </ul>
                <div className="text-center">
                  <p className="font-bold text-[#023E8A] text-xl mb-3">From $200</p>
                  <a href="#booking" className="block w-full py-2 bg-[#023E8A] text-white font-semibold rounded-lg hover:bg-[#0077B6] transition text-center">
                    Get Quote
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-[#0077B6] relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0077B6] text-white px-4 py-1 rounded-full text-sm font-bold">Best Value</span>
                </div>
                <div className="text-center mb-4 pt-2">
                  <h3 className="text-xl font-bold">Full Detail Package</h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">Complete interior + exterior detailing</p>
                <ul className="text-gray-600 space-y-2 mb-4 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Complete interior detail</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Full exterior detail</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Engine bay cleaning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Protective wax application</li>
                </ul>
                <div className="text-center">
                  <p className="font-bold text-[#023E8A] text-xl mb-3">From $325</p>
                  <a href="#booking" className="block w-full py-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-lg hover:from-[#0077B6] hover:to-[#023E8A] transition text-center">
                    Get Quote
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="text-center mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2">Premium</span>
                  <h3 className="text-xl font-bold">Ceramic Coating</h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">Long-lasting protection & showroom shine</p>
                <ul className="text-gray-600 space-y-2 mb-4 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Paint correction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />Ceramic coating application</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />2-5 year protection</li>
                </ul>
                <div className="text-center">
                  <p className="font-bold text-[#023E8A] text-xl mb-3">Custom Quote</p>
                  <a href="#booking" className="block w-full py-2 bg-[#023E8A] text-white font-semibold rounded-lg hover:bg-[#0077B6] transition text-center">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-10 text-center text-gray-600">
              <p className="mb-2 font-medium">We serve all Midlands SC locations:</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="/locations/columbia-sc" className="text-[#0077B6] hover:underline">Car Detailing Columbia SC</a>
                <span>|</span>
                <a href="/locations/lexington-sc" className="text-[#0077B6] hover:underline">Mobile Car Detailing Lexington SC</a>
                <span>|</span>
                <a href="/locations/irmo-sc" className="text-[#0077B6] hover:underline">Irmo SC</a>
                <span>|</span>
                <a href="/locations/west-columbia-sc" className="text-[#0077B6] hover:underline">West Columbia SC</a>
                <span>|</span>
                <a href="/locations/cayce-sc" className="text-[#0077B6] hover:underline">Cayce SC</a>
              </div>
            </div>

            {/* Urgency CTA */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Same-day appointments available - Book now!</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#booking">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-lg transform hover:scale-105">
                    Get Your Free Quote Now
                  </button>
                </a>
                <a href="tel:+18036678731" className="flex items-center gap-2 text-[#023E8A] font-semibold hover:text-[#0077B6] transition">
                  <Phone className="w-5 h-5" />
                  <span>Or call (803) 667-8731</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
