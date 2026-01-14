import React from 'react';
import { MapPin, Phone, Clock, Star, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { InternalLinkingMatrix } from '../components/seo/InternalLinkingMatrix';
import { LandmarkContent } from '../components/seo/LandmarkContent';
import { AdvancedSchemaMarkup, getLocationData } from '../components/seo/AdvancedSchemaMarkup';

export const LocationWestColumbiaPage = () => {
  const westColumbiaFAQs = [
    {
      question: "Do you provide mobile auto detailing in West Columbia SC?",
      answer: "Yes! We provide full mobile auto detailing service throughout West Columbia, SC. We come directly to your home, office, or any location in West Columbia with all our professional equipment. No need to drive anywhere - we bring the detail shop to you!"
    },
    {
      question: "What areas of West Columbia do you serve?",
      answer: "We serve all of West Columbia including Sunset Boulevard, Meeting Street, State Street, Augusta Road, and all surrounding neighborhoods. If you're in West Columbia or the Greater Columbia area, we can reach you with our mobile detailing service."
    },
    {
      question: "How much does car detailing cost in West Columbia SC?",
      answer: "Our car detailing prices in West Columbia start at $225 for our Basic Detail Package and $400 for our Factory Reset Package. Mobile service is included - no extra fees for coming to your West Columbia location. We offer free quotes!"
    },
    {
      question: "How do I book mobile detailing in West Columbia?",
      answer: "Booking is easy! Call us at (803) 667-8731 or request a quote through our website. We'll schedule a convenient time to come to your West Columbia location and provide professional detailing service right in your driveway or parking lot."
    }
  ];

  const services = [
    {
      title: 'Mobile Auto Detailing',
      description: 'Complete interior and exterior detailing at your West Columbia location',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: 'Ceramic Coating',
      description: 'Professional paint protection with lasting shine',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Interior Detailing',
      description: 'Deep cleaning, shampooing, and conditioning',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Paint Correction',
      description: 'Remove swirls, scratches, and restore finish',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const neighborhoods = [
    'Sunset Boulevard',
    'Meeting Street Area',
    'State Street',
    'Augusta Road',
    'Jarvis Klapman Boulevard',
    'Charleston Highway',
    'Platt Springs Road',
    'Airport Boulevard'
  ];

  // Generate schemas
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Mikah's Auto Detailing - West Columbia",
    description: "Professional mobile auto detailing service in West Columbia, SC. We come to you with expert ceramic coating, paint correction, and interior/exterior detailing.",
    phone: "(803) 667-8731",
    email: "contact@mikahsmobiledetailingsc.com",
    address: {
      street: "Serving West Columbia",
      city: "West Columbia",
      state: "SC",
      zip: "29169"
    },
    priceRange: "$$"
  });

  const faqSchema = generateFAQSchema(westColumbiaFAQs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [localBusinessSchema, faqSchema, enhancedBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('west-columbia-sc');

  return (
    <>
      <SEOHead
        title="Auto Detailing West Columbia SC | Mobile Car Detailing Service"
        description="Professional auto detailing in West Columbia SC. Mobile car detailing service - we come to you! Interior/exterior detailing, ceramic coating, paint correction. Serving all West Columbia neighborhoods. Call (803) 667-8731!"
        keywords="auto detailing west columbia sc, car detailing west columbia sc, mobile detailing west columbia, west columbia auto detailing, car detailing near me, mobile car wash west columbia"
        canonical="https://mikahsmobiledetailingsc.com/locations/west-columbia"
        ogType="website"
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="West Columbia SC"
        locationData={locationData}
        aggregateRating={{ ratingValue: 5.0, reviewCount: 19, bestRating: 5, worstRating: 1 }}
        reviews={[]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">Serving West Columbia, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Auto Detailing West Columbia SC
              <br />
              <span className="text-primary-300">Mobile Car Detailing Service</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional mobile auto detailing throughout West Columbia. We bring expert car detailing, ceramic coating, and paint correction directly to your location!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 inline-flex items-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:8036678731"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (803) 667-8731
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Car Detailing Services in West Columbia
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Full-service mobile auto detailing at your West Columbia location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
                <div className="bg-primary-500 text-white p-4 rounded-lg inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              West Columbia Areas We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Mobile detailing service throughout all West Columbia neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us for West Columbia Auto Detailing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Mobile</h3>
              <p className="text-gray-600">We come to your West Columbia home or office</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Trusted by West Columbia residents</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Same-day and weekend appointments available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Matrix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <InternalLinkingMatrix
            currentLocation="West Columbia SC"
            currentSlug="west-columbia-sc"
            showServiceAreas={true}
            showNearbyServices={true}
          />
        </div>
      </section>

      {/* Landmark and Community Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <LandmarkContent
            location="West Columbia SC"
            locationSlug="west-columbia-sc"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              West Columbia Auto Detailing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {westColumbiaFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your West Columbia Mobile Detailing Today
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Professional auto detailing service comes to you - call now or request a free quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8036678731"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              Call (803) 667-8731
            </a>
            <a
              href="/#quote"
              className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationWestColumbiaPage;
