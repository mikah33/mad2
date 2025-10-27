import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { mobileDetailingFAQs, generateMobileDetailingFAQSchema } from '../data/faqs/mobile-detailing-faqs';
import { Car } from 'lucide-react';

export const MobileDetailingFAQPage: React.FC = () => {
  // Group FAQs by category
  const categories = Array.from(new Set(mobileDetailingFAQs.map(faq => faq.category)));

  return (
    <>
      <Helmet>
        <title>Mobile Detailing FAQs | Car Detailing Near Me Columbia SC</title>
        <meta
          name="description"
          content="Find answers to all your mobile car detailing questions. Learn about mobile auto detailing services, pricing, scheduling, and service areas in Columbia SC."
        />
        <meta
          name="keywords"
          content="mobile car detailing, car detailing near me, mobile detailing columbia sc, auto detailing near me, mobile auto detailing, car detailing services"
        />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/faq/mobile-detailing" />

        <meta property="og:title" content="Mobile Detailing FAQs | Mikah's Auto Detailing" />
        <meta property="og:description" content="Expert answers to mobile detailing questions. Learn about services, pricing, and how mobile car detailing works in Columbia SC." />
        <meta property="og:url" content="https://mikahsmobiledetailingsc.com/faq/mobile-detailing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mikahsmobiledetailingsc.com/exterior1.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(generateMobileDetailingFAQSchema())}
        </script>
      </Helmet>

      <Navigation />


      <div className="py-12 md:py-20 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section with Image */}
          <div className="text-center mb-12">
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/exterior1.jpg"
                alt="Mobile car detailing service in Columbia SC"
                className="w-full h-64 md:h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-white">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Car className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">Mobile Detailing FAQs</h1>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about mobile car detailing in Columbia SC.
              Get answers about mobile auto detailing services, pricing, scheduling, and what to expect.
            </p>
          </div>

          {/* FAQ Categories */}
          {categories.map((category, catIndex) => {
            const categoryFAQs = mobileDetailingFAQs.filter(faq => faq.category === category);

            return (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-primary-500 pb-2">
                  {category}
                </h2>

                <div className="space-y-6">
                  {categoryFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.keywords.slice(0, 3).map((keyword, ki) => (
                          <span
                            key={ki}
                            className="text-xs bg-primary-100 text-primary-800 px-3 py-1 rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl p-8 md:p-12 text-center text-white mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready for Mobile Detailing?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Experience the convenience of professional mobile car detailing in Columbia SC.
              We bring showroom-quality results to your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18036678731"
                className="px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition"
              >
                Call (803) 667-8731
              </a>
              <a
                href="/#quote"
                className="px-8 py-4 bg-primary-800 text-white font-bold rounded-lg hover:bg-primary-900 transition border-2 border-white"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/faq/ceramic-coating" className="text-primary-700 hover:underline font-semibold">
                Ceramic Coating FAQs →
              </a>
              <a href="/faq" className="text-primary-700 hover:underline font-semibold">
                All FAQs →
              </a>
              <a href="/services" className="text-primary-700 hover:underline font-semibold">
                Our Services →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MobileDetailingFAQPage;
