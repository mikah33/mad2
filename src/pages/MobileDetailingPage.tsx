import React from 'react';
import { Truck, Phone, ChevronRight, CheckCircle, MapPin, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const MobileDetailingPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: 'Mobile Detailing', path: '/services/mobile-detailing' }
  ];

  const productSchema = generateProductSchema({
    name: "Mobile Auto Detailing Service",
    description: "Professional mobile car detailing at your location. Detailing car near me service in Columbia SC. We bring all equipment, water, and power to your home, office, or preferred location.",
    price: "175",
    features: [
      "Mobile detailing service",
      "On-location car detailing",
      "Flexible scheduling",
      "Commercial and residential",
      "2x Exterior Details per Month",
      "1x Interior Reset per Month",
      "1x Engine Bay Cleaning",
      "Fully self-contained unit",
      "100+ gallons of water",
      "Professional equipment"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior3.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/mobile-detailing",
    category: "Auto Detailing Services"
  });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Car Detailing Near Me - Columbia & Lexington SC",
    "serviceType": "Auto Detailing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mikah's Auto Detailing",
      "telephone": "(803) 667-8731"
    },
    "areaServed": [
      { "@type": "City", "name": "Columbia", "addressRegion": "SC" },
      { "@type": "City", "name": "Lexington", "addressRegion": "SC" }
    ],
    "offers": {
      "@type": "Offer",
      "price": "225",
      "priceCurrency": "USD",
      "description": "Basic Detail Package - Interior & Exterior"
    },
    "description": "Professional mobile car detailing service in Columbia and Lexington SC. We come to your location with all equipment needed.",
    "url": "https://mikahsmobiledetailingsc.com/services/mobile-detailing"
  };

  const schemas = [productSchema, serviceSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Mobile Detailing Near Me | Columbia & Lexington SC | Mikah's"
        description="Mobile car detailing near you in Columbia & Lexington SC. We come to your home or office from $225. Same day available. 5-star rated. Call (803) 667-8731."
        keywords="auto detailing services columbia sc, mobile car detailing near me, detailing car near me, automotive detail near me, car interior detailing, mobile detailing columbia sc, auto detailing services in columbia sc, mobile automotive detailing, professional car detailing columbia sc"
        canonical="https://mikahsmobiledetailingsc.com/services/mobile-detailing"
        ogImage="https://mikahsmobiledetailingsc.com/exterior3.jpg"
        ogImageAlt="Professional mobile auto detailing services in Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={breadcrumbItems} className="py-4" />
        </div>

        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Mobile Car Detailing Near Me in Columbia, SC</h1>
                <p className="text-xl mb-8 text-blue-100">
                  #1 mobile automotive detail near me service in Columbia SC. Professional car interior detailing and exterior auto detailing at your location. No need to waste time at car washes - we bring everything needed directly to you throughout Columbia and Lexington SC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                    Book Online <ChevronRight className="w-5 h-5 inline" />
                  </a>
                  <button onClick={scrollToQuote} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:8036678731" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition">
                    <Phone className="w-5 h-5 inline" /> (803) 667-8731
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <picture>
                  <source srcSet="/exterior3_optimized.webp" type="image/webp" />
                  <img src="/exterior3.jpg" alt="Mobile auto detailing services columbia sc - premium exterior wash and ceramic coating prep" className="rounded-lg shadow-2xl" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mobile Car Detailing Near Me Service?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Save Your Time</h3>
                <p className="text-gray-600">
                  No more wasting hours at the car wash. Work from home, run errands, or relax while we perform professional mobile car detailing at your location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Truck className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fully Self-Contained Mobile Unit</h3>
                <p className="text-gray-600">
                  We bring everything needed for professional automotive detail - 100+ gallons of water, quiet generators, professional equipment, and premium products. You provide nothing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile Service Anywhere</h3>
                <p className="text-gray-600">
                  Home driveway, office parking lot, apartment complex, storage facility - our mobile detailing service comes to you anywhere in Columbia or Lexington area.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Detailing Service Areas in Columbia SC</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              We provide mobile auto detailing throughout the Columbia-Lexington metro area and surrounding
              South Carolina communities within 25 miles. Professional automotive detail service wherever you need it.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Columbia Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Downtown Columbia</li>
                  <li>• Forest Acres</li>
                  <li>• The Vista</li>
                  <li>• Five Points</li>
                  <li>• Shandon</li>
                  <li>• Olympia</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Lexington Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Lexington</li>
                  <li>• West Columbia</li>
                  <li>• Cayce</li>
                  <li>• South Congaree</li>
                  <li>• Red Bank</li>
                  <li>• Oak Grove</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Irmo Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Irmo</li>
                  <li>• St. Andrews</li>
                  <li>• Seven Oaks</li>
                  <li>• Harbison</li>
                  <li>• Chapin</li>
                  <li>• Ballentine</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Extended Areas</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Blythewood</li>
                  <li>• Elgin</li>
                  <li>• Hopkins</li>
                  <li>• Lake Murray</li>
                  <li>• Lake Carolina</li>
                  <li>• Dentsville</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mobile Car Detailing Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Interior Car Detailing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete vacuum service</li>
                  <li>• Professional steam cleaning</li>
                  <li>• Stain removal</li>
                  <li>• Leather cleaning and conditioning</li>
                  <li>• Dashboard and console detail</li>
                  <li>• Door panels cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Air vent cleaning</li>
                </ul>
                <div className="mt-6">
                  <a href="/services/interior-detailing" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More About Interior Detailing →
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Exterior Auto Detailing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional hand wash</li>
                  <li>• Clay bar treatment</li>
                  <li>• Paint decontamination</li>
                  <li>• Wheel and tire cleaning</li>
                  <li>• Chrome polishing</li>
                  <li>• Trim restoration</li>
                  <li>• Wax or sealant application</li>
                  <li>• Engine bay cleaning</li>
                </ul>
                <div className="mt-6">
                  <a href="/services/exterior-detailing" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More About Exterior Detailing →
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Full Detail Package</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete interior detailing</li>
                  <li>• Complete exterior detailing</li>
                  <li>• Engine bay cleaning</li>
                  <li>• Trunk/cargo area detail</li>
                  <li>• Door jamb cleaning</li>
                  <li>• Tire dressing</li>
                  <li>• Interior protection</li>
                  <li>• 30-day guarantee</li>
                </ul>
                <div className="mt-6">
                  <a href="/services/full-detail" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More About Full Detail →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Mobile Detailing Process Works</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Book Your Mobile Detailing Appointment</h3>
                    <p className="text-gray-600">Call, text, or use our online form. Choose your preferred date, time, and location for our mobile car detailing service. We confirm within hours.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We Arrive at Your Location</h3>
                    <p className="text-gray-600">Our mobile detailing unit arrives on time with everything needed for professional automotive detail - water, power, equipment, and premium products.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Mobile Car Detailing Service</h3>
                    <p className="text-gray-600">We perform complete car interior detailing and exterior auto detailing while you work from home, stay at the office, or go about your day.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Final Walkthrough & Quality Check</h3>
                    <p className="text-gray-600">We inspect our mobile detailing work, show you the results, and ensure you're completely satisfied with our automotive detail service before we leave.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Car Detailing Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need to provide water or electricity for mobile detailing?</h3>
                <p className="text-gray-600">No! Our mobile detailing units are completely self-contained with 100+ gallon water tanks and quiet generators. You just provide access to your vehicle for our automotive detail service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Where exactly do you perform the mobile car detailing service?</h3>
                <p className="text-gray-600">Anywhere you have parking - driveway, garage, office parking lot, apartment complex, storage facility. We just need space to work around the vehicle for our professional mobile detailing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need to be home during the mobile detailing service?</h3>
                <p className="text-gray-600">Not necessarily. Many customers provide vehicle access and go about their day. We communicate via phone when we arrive and finish our automotive detail service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Is your mobile detailing generator loud?</h3>
                <p className="text-gray-600">Our commercial-grade generators are designed for quiet operation - much quieter than typical construction generators. Most customers barely hear them from inside during our mobile car detailing service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can you provide mobile detailing at apartment complexes?</h3>
                <p className="text-gray-600">Yes! We regularly provide mobile car detailing services at apartment complexes throughout Columbia and Lexington. Just confirm with your complex management before booking.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">What makes your mobile detailing service better than others?</h3>
                <p className="text-gray-600">Our mobile car detailing service uses professional-grade equipment, premium products, and certified techniques. We're fully insured and guarantee satisfaction with every automotive detail service we provide.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Premium Mobile Car Detailing Near Me</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional mobile automotive detail service at your location in Columbia, Lexington, and surrounding SC areas.
              Save time, get superior results with our expert car interior detailing and exterior auto detailing services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/book" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                Book Online
              </a>
              <button onClick={scrollToQuote} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                Get Free Mobile Detailing Quote
              </button>
              <a href="tel:8036678731" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition">
                Call (803) 667-8731
              </a>
            </div>
          </div>
        </section>

        <Footer />
        
      </div>
    </>
  );
};

export default MobileDetailingPage;