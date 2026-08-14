import React from 'react';
import { CheckCircle, Clock, DollarSign, Phone, ChevronRight, Wind, Sparkles, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const OdorStainRemovalPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: 'Odor & Stain Removal', path: '/services/odor-stain-removal' }
  ];

  const productSchema = generateProductSchema({
    name: "Car Odor & Stain Removal Service",
    description: "Professional car odor removal and interior stain treatment in Columbia SC. Pet odors, smoke smell, mildew, and spills treated with steam cleaning, enzymatic cleaners, hot water extraction, and ozone treatment. Mobile service - we come to you.",
    price: "250",
    features: [
      "Odor source inspection and treatment",
      "Enzymatic cleaner application",
      "Professional steam cleaning",
      "Hot water extraction for stains",
      "Ozone treatment for stubborn odors",
      "Pet odor and dander removal",
      "Smoke smell elimination",
      "Mildew treatment"
    ],
    image: "https://mikahsmobiledetailingsc.com/interior2.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/odor-stain-removal",
    category: "Auto Detailing Services"
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car Odor and Stain Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mikah's Auto Detailing",
      "image": "https://mikahsmobiledetailingsc.com/logo.png",
      "@id": "https://mikahsmobiledetailingsc.com",
      "url": "https://mikahsmobiledetailingsc.com",
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
        { "@type": "City", "name": "Columbia", "addressRegion": "SC" },
        { "@type": "City", "name": "Lexington", "addressRegion": "SC" },
        { "@type": "City", "name": "West Columbia", "addressRegion": "SC" },
        { "@type": "City", "name": "Irmo", "addressRegion": "SC" },
        { "@type": "City", "name": "Cayce", "addressRegion": "SC" }
      ],
      "priceRange": "$$"
    },
    "description": "Professional car odor removal and interior stain removal in Columbia and Lexington SC. Pet odor, smoke smell, mildew, and spill treatment with steam, enzymatic cleaners, and ozone. Mobile service.",
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
        "minPrice": "250",
        "priceCurrency": "USD"
      }
    }
  };

  const schemas = [structuredData, productSchema, generateEnhancedLocalBusinessSchema()];

  const faqs = [
    {
      question: "How much does car odor removal cost in Columbia SC?",
      answer: "Standalone odor removal is $250. If your interior also needs deep cleaning, odor removal with a full interior steam & shampoo is $400 - the better option for smoke, pet, or mildew odors that have soaked into carpets and seats. We come to your home or office anywhere in the Columbia-Lexington area."
    },
    {
      question: "Does detailing remove pet odor from a car?",
      answer: "Yes. Pet odors come from dander and oils embedded in carpet and upholstery, so we combine enzymatic cleaners that break down the odor source with steam cleaning and hot water extraction. Severe or long-standing pet odors may also get an ozone treatment."
    },
    {
      question: "Can you remove smoke smell from a car?",
      answer: "In most cases, yes. We deep clean all soft surfaces, treat the ventilation system, and use ozone treatment to neutralize smoke odor. Most of the smell is gone after one treatment; heavily smoked-in vehicles may need a repeat treatment."
    },
    {
      question: "How long does odor and stain removal take?",
      answer: "Plan on about 3 hours. Standalone odor removal can be quicker, while the combined odor removal + full interior steam & shampoo uses the full window. Since we're mobile, the whole service happens at your driveway in Columbia, Lexington, or nearby."
    },
    {
      question: "Can you remove every stain from car seats and carpet?",
      answer: "We're honest about this: no. Light and moderate stains - coffee, soda, food, dirt, most spills - usually come out with hot water extraction. Old set-in stains, dye transfer, bleach spots, and ink may lighten significantly but can't always be fully removed. We'll tell you what to expect before we start."
    },
    {
      question: "Where do you offer interior stain removal near me?",
      answer: "We're a mobile detailing service covering Columbia, Lexington, West Columbia, Cayce, Irmo, Chapin, Blythewood, and surrounding SC areas within about 25 miles. We bring water, power, and all equipment to your location."
    }
  ];

  return (
    <>
      <SEOHead
        title="Car Odor & Stain Removal Columbia SC | From $250"
        description="Car odor & stain removal from $250 in Columbia & Lexington SC. Pet odor, smoke smell, spills - $400 with full interior steam & shampoo. (803) 667-8731."
        keywords="car odor removal near me, interior stain removal near me, car odor removal columbia sc, car stain removal, pet odor removal car, smoke smell removal car, ozone treatment car, car seat stain removal, mobile odor removal lexington sc"
        canonical="https://mikahsmobiledetailingsc.com/services/odor-stain-removal/"
        ogImage="https://mikahsmobiledetailingsc.com/interior2.jpg"
        ogImageAlt="Car odor and stain removal service in Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={breadcrumbItems} className="py-4" />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Car Odor Removal &amp; Interior Stain Removal in Columbia, SC
                </h1>
                <p className="text-xl mb-8 text-orange-100">
                  Pet odor, smoke smell, mildew, spilled milk, coffee stains - we treat the source,
                  not just the symptom. $250 standalone, $400 with a full interior steam &amp; shampoo.
                  Mobile service across Columbia and Lexington - we come to you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/book"
                    className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
                  >
                    Book Online <ChevronRight className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+18036678731"
                    className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> (803) 667-8731
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/interior2.jpg"
                  alt="Car odor and stain removal columbia sc - professional interior treatment for pet odor and stains"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Treat */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Odors &amp; Stains We Treat
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Wind className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Odor Removal</h3>
                <p className="text-gray-600">
                  Pet odors, cigarette and smoke smell, mildew from wet carpet, spilled milk, food,
                  and gym gear. We use enzymatic cleaners and ozone treatment to neutralize odors at
                  the source instead of masking them with fragrance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Stain Removal</h3>
                <p className="text-gray-600">
                  Coffee, soda, food, mud, and everyday spills on seats, carpet, and headliner.
                  Professional spot treatment plus hot water extraction lifts light-to-moderate
                  stains that store-bought cleaners leave behind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Phone className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile - We Come to You</h3>
                <p className="text-gray-600">
                  Searching "car odor removal near me" in Columbia or Lexington? We bring water,
                  power, and professional equipment to your driveway or office - no shop visit needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Our Odor &amp; Stain Removal Works
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Source Inspection:</strong> We find where the odor or stain actually
                      lives - carpet padding, seat foam, vents - so treatment targets the cause.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Enzymatic Treatment:</strong> Enzyme cleaners break down organic odor
                      sources like pet accidents, milk, and food rather than covering them up.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Steam Cleaning:</strong> High-temperature steam sanitizes surfaces and
                      kills odor-causing bacteria in fabric, vents, and crevices.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Spot Treatment &amp; Hot Water Extraction:</strong> Professional-grade
                      spot removers and extraction pull stains out of seats and carpet.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Ozone Treatment:</strong> For stubborn odors like smoke, ozone
                      neutralizes odor molecules throughout the cabin and ventilation system.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Full Interior Steam &amp; Shampoo ($400 option):</strong> Adds a
                      complete interior shampoo and extraction of all carpet and upholstery - the
                      right call when odors have soaked into soft surfaces.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-8 h-8 text-orange-600" />
                    <h3 className="text-xl font-bold">Odor &amp; Stain Removal Pricing</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-bold text-lg">Odor Removal - $250</p>
                      <p className="text-gray-600 text-sm">
                        Standalone treatment: inspection, enzymatic cleaning, steam, and ozone as needed.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-orange-500">
                      <p className="font-bold text-lg">Odor Removal + Full Interior Steam &amp; Shampoo - $400</p>
                      <p className="text-gray-600 text-sm">
                        Best for smoke, pet, and mildew odors. Complete interior steam clean and
                        shampoo with extraction, plus the full odor treatment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold">Duration: about 3 hours</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Just need a deep clean without odor treatment? See our{' '}
                    <a href="/services/interior-detailing/" className="text-orange-600 font-semibold hover:underline">
                      interior detailing
                    </a>{' '}
                    from $200, or compare everything on our{' '}
                    <a href="/pricing/" className="text-orange-600 font-semibold hover:underline">
                      pricing page
                    </a>.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                    <h3 className="text-xl font-bold">Honest Expectations</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Light and moderate stains - coffee, soda, food, dirt - usually come out
                    completely. Old set-in stains, dye transfer, bleach spots, and ink often
                    improve dramatically but can't always be fully removed.
                  </p>
                  <p className="text-gray-700">
                    We'll assess your interior before we start and tell you exactly what's
                    realistic. No detailer who promises 100% stain removal on every stain is
                    being straight with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Mobile Odor &amp; Stain Removal Near You
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              We serve Columbia, Lexington, West Columbia, Cayce, Irmo, Chapin, Blythewood, and
              surrounding South Carolina communities within about 25 miles. Home, office, or
              apartment parking lot - we bring everything.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/book"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition flex items-center gap-2"
              >
                Book Online <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+18036678731"
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call (803) 667-8731
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Car Odor &amp; Stain Removal FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Fresh-Smelling, Stain-Free Interior?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Book odor and stain removal in Columbia, Lexington, or surrounding areas.
              $250 standalone or $400 with a full interior steam &amp; shampoo - we come to you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/book"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                Book Online <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+18036678731"
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call (803) 667-8731
              </a>
            </div>
            <p className="mt-8 text-orange-100">
              Also see:{' '}
              <a href="/services/interior-detailing/" className="underline font-semibold">
                Interior Detailing from $200
              </a>{' '}
              ·{' '}
              <a href="/pricing/" className="underline font-semibold">
                Full Pricing
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OdorStainRemovalPage;
