import React from 'react';
import { Sparkles, CheckCircle, Clock, DollarSign, Phone, ChevronRight, Droplets } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const ExteriorDetailingPage: React.FC = () => {
  const scrollToQuote = () => {
    window.location.href = '/#quote';
  };

  const productSchema = generateProductSchema({
    name: "Exterior Car Detailing Service",
    description: "Professional exterior car detailing in Columbia SC. Hand wash, clay bar treatment, paint correction, wax protection, and wheel detailing. Mobile service available.",
    price: "200",
    features: [
      "Hand wash using premium products",
      "Wheel and tire deep cleaning",
      "Clay bar treatment to remove contaminants",
      "Hand polish",
      "Wax or sealant application",
      "Trim restoration",
      "Tire dressing",
      "Door jamb cleaning",
      "Exterior glass treatment"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/exterior-detailing",
    category: "Auto Detailing Services"
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior Car Detailing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mikah's Auto Detailing",
      "image": "https://mikahsautodetailing.com/logo.png",
      "@id": "https://mikahsautodetailing.com",
      "url": "https://mikahsautodetailing.com",
      "telephone": "(803) 667-8731",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Columbia",
        "addressRegion": "SC",
        "postalCode": "29201",
        "addressCountry": "US"
      },
      "areaServed": ["Columbia SC", "Lexington SC", "West Columbia SC", "Irmo SC", "Cayce SC"],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    },
    "description": "Professional exterior car detailing in Columbia SC. Hand wash, clay bar treatment, paint correction, wax protection, and wheel detailing. Mobile service available.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "99",
        "maxPrice": "199",
        "priceCurrency": "USD"
      }
    }
  };

  const schemas = [structuredData, productSchema, generateEnhancedLocalBusinessSchema()];

  const faqs = [
    {
      question: "What's included in exterior detailing?",
      answer: "Our exterior detailing includes hand wash using premium products, wheel and tire deep cleaning, clay bar treatment to remove contaminants, hand polish, wax or sealant application, trim restoration, tire dressing, door jamb cleaning, and exterior glass treatment."
    },
    {
      question: "How is this different from a car wash?",
      answer: "Car washes provide basic surface cleaning. Professional exterior detailing includes contaminant removal (clay bar), paint correction to remove light imperfections, hand wax or sealant protection that lasts months, and meticulous attention to wheels, trim, and details that car washes miss."
    },
    {
      question: "How long does exterior detailing last?",
      answer: "With proper maintenance, exterior detailing results last 2-4 months. The protective wax or sealant degrades over time from UV exposure, weather, and washing. For longer-lasting protection, consider ceramic coating which lasts years."
    },
    {
      question: "Can you remove water spots and oxidation?",
      answer: "Yes! Clay bar treatment removes bonded contaminants and light water spots. Polishing removes oxidation and restores paint clarity. For severe water etching or heavy oxidation, paint correction may be needed."
    },
    {
      question: "Do you come to my location?",
      answer: "Yes! We're a mobile auto detailing service serving Columbia, Lexington, West Columbia, Irmo, Cayce, and all surrounding SC areas within 25 miles. We bring all equipment, water, and power."
    },
    {
      question: "What's the difference between wax and sealant?",
      answer: "Carnauba wax provides deep, warm shine and lasts 1-3 months. Synthetic sealants last longer (3-6 months) and offer better water beading. We'll recommend the best option based on your preferences and usage."
    },
    {
      question: "How often should I get exterior detailing?",
      answer: "We recommend full exterior detailing every 3-4 months for optimal paint protection and appearance. Between details, regular maintenance washes help preserve the protection."
    },
    {
      question: "Can you detail my truck or SUV?",
      answer: "Absolutely! We detail all vehicle types including cars, trucks, SUVs, vans, motorcycles, and RVs. Larger vehicles may have slight price adjustments due to increased surface area and time."
    }
  ];

  return (
    <>
      <SEOHead
        title="Exterior Detailing Columbia SC | Auto Detailing Services | Hand Wash"
        description="Professional auto detailing services in Columbia, SC. Exterior hand wash, clay bar, wax protection, paint enhancement. Mobile service. 5-star rated. Call (803) 667-8731!"
        keywords="auto detailing services columbia sc, exterior car detailing, car wash Columbia SC, auto detailing services in columbia sc, hand car wash, clay bar treatment, car wax, paint protection, mobile car wash columbia sc, exterior detailing"
        canonical="https://mikahsmobiledetailingsc.com/services/exterior-detailing"
        ogImage="https://mikahsmobiledetailingsc.com/exterior1.jpg"
        ogImageAlt="Professional exterior auto detailing services in Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20 pb-20 md:pt-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Expert Exterior Car Detailing in Columbia, SC
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Restore your vehicle's showroom shine with professional hand washing, clay bar treatment,
                  polishing, and protective wax. Mobile service throughout Columbia, Lexington, and beyond.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToQuote}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2"
                  >
                    Get Free Quote <ChevronRight className="w-5 h-5" />
                  </button>
                  <a
                    href="tel:5551234567"
                    className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> (555) 123-4567
                  </a>
                
      </div>
              
      </div>
              <div className="hidden md:block">
                <img
                  src="/exterior1.jpg"
                  alt="Professional exterior auto detailing services columbia sc - ceramic shine and paint protection"
                  className="rounded-lg shadow-2xl"
                />
              
      </div>
            
      </div>
          
      </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Professional Exterior Detailing?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Showroom Shine</h3>
                <p className="text-gray-600">
                  Hand washing and polishing restore deep gloss and mirror-like reflections. Our process
                  enhances paint depth and clarity far beyond automatic car washes.
                </p>
              
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Droplets className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Paint Protection</h3>
                <p className="text-gray-600">
                  Premium wax or sealant creates a protective barrier against UV rays, contaminants,
                  water spots, and environmental damage. Keeps your vehicle looking newer longer.
                </p>
              
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Contaminant Removal</h3>
                <p className="text-gray-600">
                  Clay bar treatment safely removes bonded contaminants like tree sap, rail dust, tar,
                  and industrial fallout that washing alone can't eliminate.
                </p>
              
      </div>
            
      </div>
          
      </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Exterior Detailing Process
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Complete Service Includes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1
      </div>
                    <div>
                      <strong className="block">Pre-Rinse & Wheel Cleaning</strong>
                      <p className="text-gray-600">Thorough pre-rinse removes loose dirt. Wheels deep cleaned with acid-free cleaners to remove brake dust and grime.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2
      </div>
                    <div>
                      <strong className="block">Two-Bucket Hand Wash</strong>
                      <p className="text-gray-600">Professional two-bucket method using premium microfiber mitts and pH-neutral soap prevents scratches and swirls.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3
      </div>
                    <div>
                      <strong className="block">Clay Bar Treatment</strong>
                      <p className="text-gray-600">Removes bonded contaminants including tree sap, rail dust, tar, and industrial fallout for smooth-as-glass paint.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4
      </div>
                    <div>
                      <strong className="block">Hand Polish</strong>
                      <p className="text-gray-600">Removes minor imperfections and enhances gloss for deep, wet-look shine.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5
      </div>
                    <div>
                      <strong className="block">Wax or Sealant Application</strong>
                      <p className="text-gray-600">Premium carnauba wax or synthetic sealant hand-applied for maximum protection and water beading.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">6
      </div>
                    <div>
                      <strong className="block">Trim & Tire Dressing</strong>
                      <p className="text-gray-600">Plastic and rubber trim restored to deep black. Tires dressed for clean, professional finish.</p>
                    
      </div>
                  
      </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">7
      </div>
                    <div>
                      <strong className="block">Glass Treatment & Final Inspection</strong>
                      <p className="text-gray-600">Exterior glass cleaned and treated with rain repellent. Comprehensive quality check ensures perfection.</p>
                    
      </div>
                  
      </div>
                
      </div>
              
      </div>

              <div>
                <picture>
                  <source srcSet="/exterior3_optimized.webp" type="image/webp" />
                  <img
                  src="/exterior3.jpg"
                  alt="Professional exterior auto detailing services columbia sc - premium wash and ceramic coating prep"
                  className="rounded-lg shadow-lg mb-6"
                />
                </picture>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                    <h4 className="text-xl font-bold">Pricing</h4>
                  
      </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Starting at $99-$199</strong>
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Pricing varies by vehicle size. SUVs and trucks $20-40 more than sedans.
                  </p>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Duration: 2-3 hours</span>
                  
      </div>
                
      </div>

                <h3 className="text-xl font-bold mb-4">Additional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Headlight Restoration:</strong> $79-$129</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Engine Bay Detailing:</strong> Custom quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Bug & Tar Removal:</strong> Included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Water Spot Removal:</strong> Included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Chrome Polishing:</strong> Included</span>
                  </li>
                </ul>
              
      </div>
            
      </div>
          
      </div>
        </section>

        {/* Before/After */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Exterior Detailing Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Before Detailing</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Dull, faded paint lacking depth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Water spots and bonded contaminants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Brake dust buildup on wheels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Faded trim and dull tires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Bug splatter and tar deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Light scratches and swirl marks visible</span>
                  </li>
                </ul>
                <img
                  src="/exterior2.jpg"
                  alt="Exterior auto detailing services columbia sc - before treatment showing dull paint and contaminants"
                  className="rounded-lg shadow-lg w-full"
                />
              
      </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">After Professional Detailing</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Deep, mirror-like gloss and shine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Smooth, contaminant-free paint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Spotless wheels and calipers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Restored black trim and dressed tires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Clean surface, protected by wax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Enhanced paint depth and clarity</span>
                  </li>
                </ul>
                <img
                  src="/exterior1.jpg"
                  alt="Exterior auto detailing services columbia sc - after professional treatment with mirror shine"
                  className="rounded-lg shadow-lg w-full"
                />
              
      </div>
            
      </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <picture>
                  <source srcSet="/exterior4_optimized.webp" type="image/webp" />
                  <img src="/exterior4.jpg" alt="Auto detailing services columbia sc - paint correction with swirl removal and scratch repair" className="rounded-lg shadow-lg" loading="lazy" />
                </picture>
              <picture>
                  <source srcSet="/exterior5_optimized.webp" type="image/webp" />
                  <img src="/exterior5.jpg" alt="Auto detailing services columbia sc - ceramic coating application for paint protection" className="rounded-lg shadow-lg" loading="lazy" />
                </picture>
              <img src="/exterior6.jpg" alt="Auto detailing services columbia sc results - mirror finish with ceramic coating protection" className="rounded-lg shadow-lg" loading="lazy" />
            
      </div>
          
      </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-8">Mobile Exterior Detailing Service Areas</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              Serving Columbia, Lexington, West Columbia, Irmo, Cayce, and all surrounding South Carolina areas
              within 25 miles. We bring professional exterior detailing to your location.
            </p>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
              <div className="bg-blue-50 p-4 rounded-lg">Columbia SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Lexington SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">West Columbia SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Irmo SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Cayce SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Forest Acres SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Blythewood SC
      </div>
              <div className="bg-blue-50 p-4 rounded-lg">Lake Murray Area
      </div>
            
      </div>
          
      </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Exterior Detailing FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                
      </div>
              ))}
            
      </div>
          
      </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Professional Exterior Detailing?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the difference of professional hand washing and paint protection.
              Mobile service throughout Columbia and Lexington SC.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToQuote}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                Get Free Quote
              </button>
              <a
                href="tel:5551234567"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition"
              >
                Call (555) 123-4567
              </a>
            
      </div>
          
      </div>
        </section>

        <Footer />
      
      </div>
    </>
  );
};

export default ExteriorDetailingPage;
