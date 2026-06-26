import React from 'react';
import { Car, Shield, Droplets, Star, Phone, ChevronRight, CheckCircle, Clock, Sparkles, Package } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const FullServiceMobileDetailingPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const productSchema = generateProductSchema({
    name: "Full Service Mobile Detailing",
    description: "Complete mobile car detailing service combining professional car interior detailing and exterior auto detailing. Full service automotive detail at your location in Columbia SC.",
    price: "325",
    features: [
      "Complete car interior detailing",
      "Professional exterior auto detailing",
      "Mobile service at your location",
      "Steam cleaning and sanitization",
      "Paint protection and wax application",
      "Wheel and tire detailing",
      "Dashboard and console detailing",
      "Engine bay cleaning (optional)",
      "30-day satisfaction guarantee"
    ],
    image: "https://mikahsmobiledetailingsc.com/full-service-detailing.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/full-service-mobile-detailing",
    category: "Full Service Mobile Detailing"
  });

  const schemas = [productSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Full Service Mobile Detailing Columbia SC | Complete Car Interior & Exterior Auto Detailing"
        description="Complete full service mobile detailing in Columbia SC. Professional car interior detailing + exterior auto detailing at your location. Best value mobile automotive detail package!"
        keywords="full service mobile detailing, mobile car detailing columbia sc, car interior detailing, exterior auto detailing, automotive detail near me, complete mobile detailing service, professional car detailing columbia sc"
        canonical="https://mikahsmobiledetailingsc.com/services/full-service-mobile-detailing"
        ogImage="https://mikahsmobiledetailingsc.com/full-service-detailing.jpg"
        ogImageAlt="Full service mobile detailing Columbia SC - complete interior and exterior"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Full Service Mobile Detailing in Columbia, SC</h1>
                <p className="text-xl mb-8 text-indigo-100">
                  Complete mobile car detailing service combining professional car interior detailing and exterior auto detailing. Best value full service automotive detail package - we bring everything needed to your location in Columbia and Lexington SC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/full-service-detailing.jpg" alt="Full service auto detailing services columbia sc - complete interior and exterior mobile car care" className="rounded-lg shadow-2xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Full Service Mobile Detailing</h2>
              <p className="text-xl text-gray-600">Professional car interior detailing + exterior auto detailing in one comprehensive package</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-12 h-12 text-indigo-500" />
                  <h3 className="text-2xl font-bold">Interior Car Detailing</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete vacuum service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional steam cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Leather cleaning and conditioning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fabric and upholstery deep cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stain and odor removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dashboard and console detailing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Door panel and trim cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Interior window cleaning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-12 h-12 text-indigo-500" />
                  <h3 className="text-2xl font-bold">Exterior Auto Detailing</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional hand wash</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paint decontamination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wheel and tire deep cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paint polish and enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Protective wax application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tire and wheel dressing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chrome and trim polishing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exterior window cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Full Service Mobile Detailing Process</h2>
              <p className="text-xl text-gray-600">Professional 8-step process for complete automotive detail service</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold mb-2">Inspection & Setup</h3>
                <p className="text-gray-600">Complete vehicle assessment and mobile unit setup at your location</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold mb-2">Interior Preparation</h3>
                <p className="text-gray-600">Remove personal items and begin interior car detailing process</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold mb-2">Exterior Wash</h3>
                <p className="text-gray-600">Professional hand wash and decontamination of vehicle exterior</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-lg font-bold mb-2">Interior Deep Clean</h3>
                <p className="text-gray-600">Steam cleaning, vacuuming, and conditioning of all interior surfaces</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
                <h3 className="text-lg font-bold mb-2">Paint Enhancement</h3>
                <p className="text-gray-600">Polish and enhance paint for maximum gloss and shine</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">6</div>
                <h3 className="text-lg font-bold mb-2">Protection Application</h3>
                <p className="text-gray-600">Apply protective wax and conditioning treatments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">7</div>
                <h3 className="text-lg font-bold mb-2">Final Details</h3>
                <p className="text-gray-600">Tire dressing, trim restoration, and final touch-ups</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">8</div>
                <h3 className="text-lg font-bold mb-2">Quality Check</h3>
                <p className="text-gray-600">Final inspection and walkthrough with customer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Full Service Mobile Detailing Packages</h2>
              <p className="text-xl text-gray-600">Complete car care packages with professional car interior detailing and exterior auto detailing</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <Package className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Standard Full Service</h3>
                  <div className="text-3xl font-bold text-indigo-600">$325</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete interior car detailing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Full exterior auto detailing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Steam cleaning and vacuuming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hand wash and wax protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wheel and tire detailing</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
                  Book Standard Package
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-indigo-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-full font-bold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Package className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Premium Full Service</h3>
                  <div className="text-3xl font-bold text-indigo-600">$450</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Standard Package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paint enhancement and polishing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Premium leather conditioning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Engine bay cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3-month protection guarantee</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
                  Book Premium Package
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <Package className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Deluxe Full Service</h3>
                  <div className="text-3xl font-bold text-indigo-600">$650</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Premium Package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paint correction (1-stage)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Premium sealant protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Odor elimination treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>6-month protection guarantee</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
                  Book Deluxe Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Full Service Mobile Detailing?</h2>
              <p className="text-xl text-gray-600">Benefits of professional mobile automotive detail service</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Time Saving Convenience</h3>
                <p className="text-gray-600">No need to drive to detailing shops. We bring complete mobile car detailing service to your location.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Shield className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Protection</h3>
                <p className="text-gray-600">Both interior and exterior protection in one service - car interior detailing plus exterior auto detailing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Star className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional Results</h3>
                <p className="text-gray-600">Commercial-grade equipment and products deliver superior results compared to traditional car washes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Droplets className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Conservation</h3>
                <p className="text-gray-600">Our mobile detailing process uses less water than traditional car washes while delivering better results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Car className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Vehicle Value</h3>
                <p className="text-gray-600">Regular full service mobile detailing maintains your vehicle's appearance and helps preserve resale value.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Package className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Best Value Package</h3>
                <p className="text-gray-600">Save money with our full service packages compared to booking interior and exterior services separately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Full Service Mobile Detailing FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does full service mobile detailing take?</h3>
                <p className="text-gray-600">Our full service mobile detailing typically takes 4-6 hours depending on vehicle size and condition. This includes complete car interior detailing and exterior auto detailing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">What's included in the full service package?</h3>
                <p className="text-gray-600">Complete car interior detailing (steam cleaning, vacuuming, conditioning) plus full exterior auto detailing (wash, polish, wax, wheel cleaning) all performed at your location.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do you bring everything needed for mobile detailing?</h3>
                <p className="text-gray-600">Yes! Our mobile units are completely self-contained with water, power, equipment, and all products needed for professional automotive detail service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How often should I get full service mobile detailing?</h3>
                <p className="text-gray-600">For optimal vehicle care, we recommend full service mobile detailing every 3-4 months, or more frequently for high-use vehicles or harsh conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can you add ceramic coating to full service detailing?</h3>
                <p className="text-gray-600">Yes! Ceramic coating is available as an add-on to our full service packages. This provides additional paint protection beyond our standard wax application.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Complete Car Care?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Full service mobile detailing in Columbia SC - professional car interior detailing and exterior auto detailing at your location. Book today for the ultimate automotive detail experience!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-600 transition">Call (555) 123-4567</a>
            </div>
          </div>
        </section>

        <Footer />
        
      </div>
    </>
  );
};

export default FullServiceMobileDetailingPage;