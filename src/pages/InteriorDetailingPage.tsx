import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, CheckCircle, Clock, DollarSign, Phone, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { generateProductSchema } from '../components/seo/StructuredData';

const InteriorDetailingPage: React.FC = () => {
  const scrollToQuote = () => {
    window.location.href = '/#quote';
  };

  const productSchema = generateProductSchema({
    name: "Interior Car Detailing Service",
    description: "Professional interior car detailing services in Columbia SC. Deep cleaning, stain removal, odor elimination, leather conditioning, and fabric protection for all vehicle types.",
    price: "200",
    features: [
      "Complete vacuum service",
      "Professional steam cleaning",
      "Stain removal",
      "Leather cleaning and conditioning",
      "Dashboard and console detail",
      "Door panels cleaning",
      "Window cleaning",
      "Air vent cleaning",
      "UV protection application"
    ],
    image: "https://mikahsmobiledetailingsc.com/interior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/interior-detailing",
    category: "Auto Detailing Services"
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior Car Detailing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mikah's Auto Detailing",
      "image": "https://mikahsautodetailing.com/logo.png",
      "@id": "https://mikahsautodetailing.com",
      "url": "https://mikahsautodetailing.com",
      "telephone": "(803) 667-8731",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Columbia",
        "addressRegion": "SC",
        "postalCode": "29201",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0007,
        "longitude": -81.0348
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Columbia",
          "addressRegion": "SC"
        },
        {
          "@type": "City",
          "name": "Lexington",
          "addressRegion": "SC"
        },
        {
          "@type": "City",
          "name": "West Columbia",
          "addressRegion": "SC"
        },
        {
          "@type": "City",
          "name": "Irmo",
          "addressRegion": "SC"
        },
        {
          "@type": "City",
          "name": "Cayce",
          "addressRegion": "SC"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    },
    "description": "Professional interior car detailing services in Columbia SC. Deep cleaning, stain removal, odor elimination, leather conditioning, and fabric protection for all vehicle types.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0007,
        "longitude": -81.0348
      },
      "geoRadius": "25 miles"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "149",
        "maxPrice": "249",
        "priceCurrency": "USD"
      }
    }
  };

  const schemas = [structuredData, productSchema];

  const faqs = [
    {
      question: "How long does interior detailing take?",
      answer: "Professional interior detailing typically takes 2-3 hours depending on vehicle size and condition. Heavily soiled vehicles or those requiring pet hair removal may take additional time."
    },
    {
      question: "Can you remove pet hair and odors?",
      answer: "Yes! We specialize in pet hair removal using professional tools and enzymatic treatments for odor elimination. We can remove pet odors and dander from all interior surfaces including carpets, seats, and air vents."
    },
    {
      question: "What's included in interior detailing?",
      answer: "Our interior detailing includes complete vacuum, steam cleaning, stain removal, leather conditioning, dashboard and console cleaning, window cleaning, odor elimination, and UV protectant application on all surfaces."
    },
    {
      question: "Can you remove smoke smell?",
      answer: "Yes, we offer smoke odor removal using deep cleaning and ozone treatment. This service effectively eliminates 90-95% of smoke odor, though heavily smoked vehicles may require repeat treatments."
    },
    {
      question: "Is interior detailing safe for leather seats?",
      answer: "Absolutely. We use pH-balanced leather cleaners and premium conditioners specifically designed for automotive leather. Our process cleans, conditions, and protects leather without causing damage."
    },
    {
      question: "Do you come to my location?",
      answer: "Yes! We're a mobile auto detailing service serving Columbia, Lexington, West Columbia, Irmo, Cayce, and surrounding SC areas. We bring all equipment, water, and power to your home or office."
    },
    {
      question: "How often should I get interior detailing?",
      answer: "We recommend interior detailing every 3-4 months for regular maintenance. Families with children or pets may benefit from more frequent detailing every 2-3 months."
    },
    {
      question: "Can you remove stains from seats?",
      answer: "Yes, we can remove most stains using professional-grade spot removers and hot water extraction. Results depend on stain type, age, and fabric, but we're successful with the majority of stains."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Interior Car Detailing Columbia SC | Mobile Auto Detailing Services</title>
        <meta name="description" content="Professional interior car detailing in Columbia SC. Deep cleaning, stain removal, odor elimination, leather conditioning. Mobile service to your location. Book now!" />
        <meta name="keywords" content="interior car detailing, car interior cleaning Columbia SC, interior detailing near me, leather conditioning, stain removal, odor elimination, pet hair removal, auto interior detailing Lexington SC, mobile car detailing, vehicle interior cleaning, car upholstery cleaning, dashboard cleaning, carpet cleaning Columbia" />

        <meta property="og:title" content="Interior Car Detailing Columbia SC | Mobile Auto Detailing" />
        <meta property="og:description" content="Professional interior car detailing in Columbia SC. Deep cleaning, stain removal, odor elimination, leather conditioning. Mobile service to your location." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikahsautodetailing.com/services/interior-detailing" />
        <meta property="og:image" content="https://mikahsautodetailing.com/interior1.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Car Detailing Columbia SC" />
        <meta name="twitter:description" content="Professional interior car detailing in Columbia SC. Deep cleaning, stain removal, odor elimination." />
        <meta name="twitter:image" content="https://mikahsautodetailing.com/interior1.jpg" />

        <link rel="canonical" content="https://mikahsautodetailing.com/services/interior-detailing" />

        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional Interior Car Detailing in Columbia, SC
                </h1>
                <p className="text-xl mb-8 text-orange-100">
                  Transform your vehicle's interior with deep cleaning, stain removal, odor elimination,
                  and premium protection. Mobile service throughout Columbia, Lexington, and surrounding areas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToQuote}
                    className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
                  >
                    Get Free Quote <ChevronRight className="w-5 h-5" />
                  </button>
                  <a
                    href="tel:5551234567"
                    className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> (555) 123-4567
                  </a>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="hidden md:block">
                <img
                  src="/interior1.jpg"
                  alt="Professional interior car detailing Columbia SC"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Interior Detailing Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Deep Professional Cleaning</h3>
                <p className="text-gray-600">
                  Professional steam cleaning and hot water extraction remove dirt, allergens, and bacteria that
                  regular vacuuming can't touch. We clean every crevice, vent, and surface.
                </p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Stain & Odor Removal</h3>
                <p className="text-gray-600">
                  Remove stubborn stains, pet odors, smoke smell, and mildew using professional-grade treatments
                  and enzymatic cleaners. Ozone treatment available for severe odors.
                </p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Phone className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile Convenience</h3>
                <p className="text-gray-600">
                  We come to your location in Columbia, Lexington, West Columbia, Irmo, or Cayce.
                  No need to waste time at a car wash - we bring everything needed.
                </p>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Interior Detailing Process
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Complete Vacuum Service:</strong> Deep vacuum of all surfaces including seats, carpets,
                      trunk, and under seats. Compressed air removes debris from crevices.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Professional Steam Cleaning:</strong> Steam kills 99.9% of bacteria while deep cleaning
                      all surfaces, vents, and hard-to-reach areas.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Stain Removal:</strong> Professional spot removers and hot water extraction tackle
                      coffee, food, grease, and other stubborn stains.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Leather Treatment:</strong> pH-balanced leather cleaner removes dirt without damage.
                      Premium conditioner prevents cracking and fading.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Dashboard & Console Detail:</strong> All plastics, vinyl, and trim cleaned and dressed.
                      Cup holders and storage compartments detailed.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Door Panels & Pockets:</strong> Complete cleaning of door panels, handles, and storage areas.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Window Cleaning:</strong> All interior windows cleaned to crystal clarity with
                      streak-free finish.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Air Vent Cleaning:</strong> All vents cleaned and treated to improve air quality.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>UV Protection:</strong> Final protectant application on dashboard and trim prevents
                      fading and cracking.
                    <Chatbot />
      </div>
                  </li>
                </ul>
              <Chatbot />
      </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Special Treatments Available</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Pet Hair Removal:</strong> Specialized tools extract embedded pet hair from all surfaces.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Smoke Odor Elimination:</strong> Ozone treatment removes smoke smell effectively.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Mold & Mildew Treatment:</strong> Antimicrobial treatments eliminate mold and odors.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Fabric Protection:</strong> Scotchgard or ceramic coating helps prevent future stains.
                    <Chatbot />
      </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Car Seat Cleaning:</strong> Safe cleaning for infant seats and car seats.
                    <Chatbot />
      </div>
                  </li>
                </ul>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-8 h-8 text-orange-600" />
                    <h4 className="text-xl font-bold">Pricing</h4>
                  <Chatbot />
      </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Starting at $149-$249</strong>
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Pricing varies by vehicle size and condition. SUVs and trucks typically $20-40 more than sedans.
                  </p>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold">Duration: 2-3 hours</span>
                  <Chatbot />
      </div>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Interior Detailing Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Before Interior Detailing</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Stained seats and carpets from spills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Embedded pet hair in upholstery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Dusty dashboard and dirty vents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Unpleasant odors from food, pets, or smoke</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Cracked or dried-out leather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Grimy cup holders and storage areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Streaky or dirty windows</span>
                  </li>
                </ul>
                <img
                  src="/interior2.jpg"
                  alt="Car interior before detailing"
                  className="mt-6 rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              <Chatbot />
      </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">After Interior Detailing</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Like-new seats and spotless carpets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Pet hair completely removed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Clean, protected dashboard and vents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Fresh-smelling interior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Conditioned, soft leather protected from UV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Detailed cup holders and storage areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Crystal-clear, streak-free windows</span>
                  </li>
                </ul>
                <img
                  src="/interior1.jpg"
                  alt="Car interior after professional detailing"
                  className="mt-6 rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Interior Detailing Service Areas
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              We provide mobile interior car detailing throughout the Columbia-Lexington metro area and
              surrounding South Carolina communities. We come to your home, office, or preferred location.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Primary Service Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Columbia, SC</li>
                  <li>• Lexington, SC</li>
                  <li>• West Columbia, SC</li>
                  <li>• Cayce, SC</li>
                  <li>• Irmo, SC</li>
                  <li>• Forest Acres, SC</li>
                </ul>
              <Chatbot />
      </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Extended Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Blythewood, SC</li>
                  <li>• Chapin, SC</li>
                  <li>• Elgin, SC</li>
                  <li>• Hopkins, SC</li>
                  <li>• Ballentine, SC</li>
                  <li>• St. Andrews, SC</li>
                </ul>
              <Chatbot />
      </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Lake Communities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lake Murray area</li>
                  <li>• Lake Carolina</li>
                  <li>• Harbison area</li>
                  <li>• Seven Oaks</li>
                  <li>• Dentsville</li>
                  <li>• Within 25-mile radius</li>
                </ul>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Interior Detailing FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                <Chatbot />
      </div>
              ))}
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Interior?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Book professional interior car detailing in Columbia, Lexington, or surrounding areas today.
              Mobile service means we come to you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToQuote}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                Get Free Quote <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="tel:5551234567"
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call (555) 123-4567
              </a>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <Footer />
      <Chatbot />
      </div>
    </>
  );
};

export default InteriorDetailingPage;
