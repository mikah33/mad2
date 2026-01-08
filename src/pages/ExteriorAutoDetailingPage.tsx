import React from 'react';
import { Car, Shield, Droplets, Star, Phone, ChevronRight, CheckCircle, Clock, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const ExteriorAutoDetailingPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const productSchema = generateProductSchema({
    name: "Exterior Auto Detailing Service",
    description: "Professional exterior auto detailing service in Columbia SC. Hand wash, polish, wax, paint protection, and wheel detailing for your vehicle.",
    price: "200",
    features: [
      "Hand wash and foam contact wash",
      "Wheel decontamination and cleaning",
      "Paint decontamination",
      "Protective wax application",
      "Tire and wheel dressing",
      "Chrome and trim polishing",
      "Paint protection",
      "Brake dust removal"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior-detailing.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/exterior-auto-detailing",
    category: "Exterior Auto Detailing Services"
  });

  const schemas = [productSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Exterior Auto Detailing Columbia SC | Professional Automotive Exterior Detailing Near Me"
        description="Professional exterior auto detailing in Columbia SC. Expert hand wash, paint protection, wax application, and wheel detailing. Mobile service available - we come to you!"
        keywords="exterior auto detailing, exterior auto detailing columbia sc, automotive exterior detailing, exterior car detailing near me, auto exterior cleaning, mobile exterior detailing, professional car exterior detailing"
        canonical="https://mikahsmobiledetailingsc.com/services/exterior-auto-detailing"
        ogImage="https://mikahsmobiledetailingsc.com/exterior-detailing.jpg"
        ogImageAlt="Professional exterior auto detailing Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Exterior Auto Detailing in Columbia, SC</h1>
                <p className="text-xl mb-8 text-green-100">
                  Expert exterior auto detailing service that protects, enhances, and maintains your vehicle's exterior appearance. Professional hand washing, paint protection, wax application, and wheel detailing in Columbia and Lexington SC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/exterior-detailing.jpg" alt="Professional exterior auto detailing Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Exterior Auto Detailing Service</h2>
              <p className="text-xl text-gray-600">Professional automotive exterior detail service with comprehensive cleaning and protection</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Droplets className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Hand Wash</h3>
                <p className="text-gray-600">Professional hand wash and foam contact wash for superior cleaning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Paint Protection</h3>
                <p className="text-gray-600">Protective wax and sealant application for long-lasting paint protection</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Car className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Wheel Detailing</h3>
                <p className="text-gray-600">Complete wheel cleaning, decontamination, and tire dressing</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Star className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Paint Enhancement</h3>
                <p className="text-gray-600">Polish and enhancement to restore your vehicle's original shine</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Exterior Auto Detailing Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Pre-Wash Inspection</h4>
                      <p className="text-gray-600">Complete assessment of paint condition and contamination levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Wheel and Tire Cleaning</h4>
                      <p className="text-gray-600">Decontamination and deep cleaning of wheels, tires, and wheel wells</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Paint Decontamination</h4>
                      <p className="text-gray-600">Iron fallout removal and clay bar treatment for smooth paint surface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Hand Wash and Foam Treatment</h4>
                      <p className="text-gray-600">Safe hand washing techniques with premium soaps and microfiber</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Paint Polish and Enhancement</h4>
                      <p className="text-gray-600">Professional polishing to enhance gloss and remove minor imperfections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Protection Application</h4>
                      <p className="text-gray-600">Premium wax or sealant application for lasting protection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/exterior-washing-process.jpg" alt="Exterior auto detailing process Columbia SC" className="rounded-lg shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exterior Auto Detailing Packages</h2>
              <p className="text-xl text-gray-600">Professional exterior detailing packages for every vehicle and budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic Exterior Wash</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$150</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hand wash and rinse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wheel and tire cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Window cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Quick dry and wipe down</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete Exterior Detail</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$250</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Basic Wash</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paint decontamination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Polish and enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Protective wax application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tire and wheel dressing</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium Exterior Detail</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$400</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Everything in Complete Detail</span>
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
                    <span>Chrome and trim polish</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>6-month protection guarantee</span>
                  </li>
                </ul>
                <button onClick={scrollToQuote} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Paint Protection Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Professional Exterior Auto Detailing?</h2>
              <p className="text-xl text-gray-600">Benefits of professional automotive exterior detailing service</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Paint Protection</h3>
                <p className="text-gray-600">Professional wax and sealant protect your paint from UV rays, contaminants, and environmental damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enhanced Appearance</h3>
                <p className="text-gray-600">Professional polishing and detailing restore your vehicle's original shine and luster.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Lasting Results</h3>
                <p className="text-gray-600">Quality products and techniques provide longer-lasting protection and easier maintenance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Droplets className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Repellency</h3>
                <p className="text-gray-600">Professional protection creates hydrophobic properties for better water beading and easier cleaning.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Car className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Resale Value</h3>
                <p className="text-gray-600">Regular professional detailing maintains your vehicle's appearance and helps preserve its value.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Sparkles className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional Results</h3>
                <p className="text-gray-600">Expert techniques and commercial-grade products deliver superior results compared to DIY washing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Exterior Auto Detailing FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How often should I get exterior detailing?</h3>
                <p className="text-gray-600">For optimal protection and appearance, we recommend exterior detailing every 2-3 months, or more frequently for vehicles exposed to harsh conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">What's the difference between wax and sealant?</h3>
                <p className="text-gray-600">Wax provides deeper shine and warmth but lasts 2-3 months. Sealants offer longer protection (6+ months) and better durability but with slightly less depth of shine.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can you remove scratches and swirl marks?</h3>
                <p className="text-gray-600">Light scratches and swirl marks can often be removed with paint correction. Deeper scratches may require more extensive paint correction services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does exterior detailing take?</h3>
                <p className="text-gray-600">Depending on the package and vehicle condition, exterior detailing typically takes 2-5 hours for complete service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect and Enhance Your Vehicle?</h2>
            <p className="text-xl mb-8 text-green-100">
              Professional exterior auto detailing in Columbia SC. Book your appointment today for expert paint protection and enhancement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">Call (555) 123-4567</a>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default ExteriorAutoDetailingPage;