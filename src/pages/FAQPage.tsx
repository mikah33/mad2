import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { FAQSection } from '../components/FAQSection';
import { faqs, generateFAQSchema } from '../data/faqs-comprehensive';
import Footer from '../components/Footer';
import BottomNavbar from '../components/BottomNavbar';

export const FAQPage = () => {
  const navigate = useNavigate();
  const faqSchema = generateFAQSchema(faqs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [faqSchema, enhancedBusinessSchema];

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions - Mobile Auto Detailing Columbia SC | Mikahs Auto Detailing"
        description="Get answers to your auto detailing questions. Learn about mobile detailing services, pricing, ceramic coating, interior/exterior cleaning in Columbia, Lexington & Irmo SC."
        keywords="auto detailing FAQ Columbia SC, mobile detailing questions, ceramic coating FAQ, interior detailing questions, exterior detailing FAQ, detailing pricing Columbia, car detailing services Lexington SC"
        canonical="https://mikahsmobiledetailingsc.com/faq"
        schema={schemas}
      />

      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center h-14">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-[#023E8A] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <div className="flex-1 text-center">
                <h1 className="text-lg font-bold text-[#023E8A]">FAQs</h1>
              </div>
              <div className="w-16" />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] text-white py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">How Can We Help?</h2>
            <p className="text-[#90E0EF] text-sm">
              Find answers to common questions about our mobile detailing services
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-4 -mt-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/faq/ceramic-coating"
                  className="flex flex-col items-center p-3 bg-gradient-to-br from-[#CAF0F8] to-white rounded-lg hover:shadow-md transition-all"
                >
                  <span className="text-2xl mb-1">🛡️</span>
                  <span className="text-sm font-semibold text-gray-800">Ceramic Coating</span>
                  <span className="text-xs text-gray-500">FAQs</span>
                </a>
                <a
                  href="/faq/mobile-detailing"
                  className="flex flex-col items-center p-3 bg-gradient-to-br from-[#CAF0F8] to-white rounded-lg hover:shadow-md transition-all"
                >
                  <span className="text-2xl mb-1">🚗</span>
                  <span className="text-sm font-semibold text-gray-800">Mobile Detailing</span>
                  <span className="text-xs text-gray-500">FAQs</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main FAQ Section */}
        <div className="px-4 mt-6">
          <div className="max-w-2xl mx-auto">
            <FAQSection
              showSearch={true}
              showCategoryFilter={true}
              title=""
              description=""
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 mt-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Still Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our team is happy to help with any questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+18036678731"
                  className="px-6 py-3 bg-[#023E8A] text-white font-semibold rounded-lg hover:bg-[#0077B6] transition-colors"
                >
                  Call (803) 667-8731
                </a>
                <a
                  href="/book"
                  className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNavbar />
    </>
  );
};
