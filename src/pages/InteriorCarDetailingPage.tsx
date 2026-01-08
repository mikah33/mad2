import React from 'react';
import { Car, Shield, Droplets, Zap, Phone, ChevronRight, CheckCircle, Clock, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const InteriorCarDetailingPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const productSchema = generateProductSchema({
    name: "Car Interior Detailing Service",
    description: "Professional car interior detailing service in Columbia SC. Deep cleaning, conditioning, stain removal, and protection for your vehicle's interior.",
    price: "200",
    features: [
      "Steam cleaning and sanitization",
      "Leather conditioning and protection",
      "Fabric and upholstery deep cleaning",
      "Stain and odor removal",
      "Dashboard and console detailing",
      "Window cleaning (interior)",
      "Vacuum and disinfection",
      "UV protection treatment"
    ],
    image: "https://mikahsmobiledetailingsc.com/interior-detailing.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/interior-car-detailing",
    category: "Car Interior Detailing Services"
  });

  const schemas = [productSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Car Interior Detailing Columbia SC | Professional Interior Car Detailing Near Me"
        description="Professional car interior detailing in Columbia SC. Expert steam cleaning, leather conditioning, stain removal, and interior protection. Mobile service available - we come to you!"
        keywords="car interior detailing, interior car detailing columbia sc, car interior detailing near me, automotive interior cleaning, interior auto detailing, mobile interior detailing, professional car interior cleaning"
        canonical="https://mikahsmobiledetailingsc.com/services/interior-car-detailing"
        ogImage="https://mikahsmobiledetailingsc.com/interior-detailing.jpg"
        ogImageAlt="Professional car interior detailing Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Car Interior Detailing in Columbia, SC</h1>
                <p className="text-xl mb-8 text-purple-100">
                  Expert car interior detailing service that restores, protects, and maintains your vehicle's interior. Professional steam cleaning, leather conditioning, stain removal, and complete interior protection in Columbia and Lexington SC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/interior-detailing.jpg" alt="Professional car interior detailing Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Car Interior Detailing Service</h2>
              <p className="text-xl text-gray-600">Professional interior automotive detail service with comprehensive cleaning and protection</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Droplets className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Steam Cleaning</h3>
                <p className="text-gray-600">Professional steam cleaning and sanitization for all interior surfaces</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Shield className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Leather Protection</h3>
                <p className="text-gray-600">Conditioning and UV protection for leather seats and trim</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Zap className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Stain Removal</h3>
                <p className="text-gray-600">Expert removal of stains, spills, and odors from all interior surfaces</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Detailing</h3>
                <p className="text-gray-600">Dashboard, console, cup holders, and all interior components detailed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Interior Car Detailing Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Pre-Treatment Inspection</h4>
                      <p className="text-gray-600">Complete assessment of interior condition and stain identification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Vacuum and Debris Removal</h4>
                      <p className="text-gray-600">Thorough vacuuming of seats, carpets, floor mats, and crevices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Steam Cleaning Treatment</h4>
                      <p className="text-gray-600">Professional steam cleaning for sanitization and deep cleaning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Fabric and Upholstery Care</h4>
                      <p className="text-gray-600">Specialized cleaning for fabric seats, carpet, and upholstery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Leather Conditioning</h4>
                      <p className="text-gray-600">Premium conditioning and UV protection for leather surfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Dashboard and Console Detailing</h4>
                      <p className="text-gray-600">Complete cleaning and protection of all hard surfaces</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/interior-cleaning-process.jpg" alt="Car interior detailing process Columbia SC" className="rounded-lg shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interior Car Detailing Packages</h2>
              <p className="text-xl text-gray-600">Professional interior detailing packages for every need and budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic Interior Detail</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">$200</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Vacuum all surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wipe down all surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Glass cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Basic conditioning</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-bold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete Interior Detail</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">$325</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Basic Detail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Steam cleaning treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stain removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Leather conditioning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>UV protection</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium Interior Detail</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">$450</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Complete Detail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Extraction cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Odor elimination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Premium protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>6-month protection</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Car Interior Detailing FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does car interior detailing take?</h3>
                <p className="text-gray-600">Most interior detailing services take 2-4 hours depending on the package and condition of your vehicle's interior.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can you remove all types of stains?</h3>
                <p className="text-gray-600">We can remove most common stains including food, drinks, pet accidents, and general wear stains. Some permanent stains may be lightened but not completely removed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Is steam cleaning safe for all interior materials?</h3>
                <p className="text-gray-600">Yes, our professional steam cleaning process is safe for all interior materials including leather, fabric, plastic, and vinyl.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How often should I get interior detailing?</h3>
                <p className="text-gray-600">For optimal cleanliness and protection, we recommend interior detailing every 3-6 months, or more frequently for high-use vehicles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Car's Interior?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Professional car interior detailing in Columbia SC. Book your appointment today for expert cleaning and protection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-600 transition">Call (555) 123-4567</a>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default InteriorCarDetailingPage;