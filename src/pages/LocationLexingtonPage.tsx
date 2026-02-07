import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, Shield, Award, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { services } from '../data/services';
import { aggregateRating, reviews } from '../data/reviews';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InternalLinkingMatrix } from '../components/seo/InternalLinkingMatrix';
import { LandmarkContent } from '../components/seo/LandmarkContent';
import { AdvancedSchemaMarkup, getLocationData } from '../components/seo/AdvancedSchemaMarkup';

export const LocationLexingtonPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };
    playVideo();
  }, []);

  // Real services from homepage
  const realServices = [
    {
      title: 'Basic Detail Package',
      price: '$225',
      duration: '2-3 hours',
      description: 'Interior full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned. Exterior wheels decontaminated, foam wash, protective wax, wheels & tires dressed.',
      link: '/services/full-detail'
    },
    {
      title: 'Factory Reset Package',
      price: '$400',
      duration: '3-4 hours',
      description: 'Interior wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned. Exterior foam wash, brake dust removal, protective wax, tires & rims dressed.',
      link: '/services/full-detail'
    },
    {
      title: 'Ceramic Coatings',
      price: 'Quote',
      duration: '1-2 days',
      description: 'Professional-grade ceramic application with thorough wash and decontamination. Long-term paint protection with maximum durability and incredible shine that lasts.',
      link: '/services/ceramic-coating'
    },
    {
      title: 'Paint Corrections',
      price: 'Quote',
      duration: '4-8 hours',
      description: 'Expert paint correction to remove swirl marks, light scratches, and oxidation. Single-stage or two-stage correction options bring back original luster.',
      link: '/services/paint-correction'
    },
    {
      title: 'Specialty Services',
      price: 'Quote',
      duration: 'Varies',
      description: 'Interior-only or Exterior-only detail, Odor Removal / Ozone Treatment, Engine Bay Detail',
      link: '/services/interior-detailing'
    },
    {
      title: 'Routine Reset',
      price: '$250/Month',
      duration: 'Monthly',
      description: '2x Exterior Details + 1x Interior Reset + 1x Engine Bay Cleaning per month. Priority scheduling. First 2 months: $300 upfront.',
      link: '/services/mobile-detailing'
    }
  ];

  // FAQs based on REAL search terms - Lexington specific
  const locationFAQs = [
    {
      question: 'How much does car detailing cost in Lexington SC?',
      answer: 'Car detailing in Lexington SC starts at $225 for our Basic Detail Package and $400 for our Factory Reset Package. Ceramic coatings, paint corrections, and specialty services require quotes based on vehicle size and condition. We provide free quotes for all Lexington residents.'
    },
    {
      question: 'What is the best mobile car detailing service in Lexington SC?',
      answer: "Mikah's Auto Detailing is the top-rated mobile detailing service in Lexington SC with a 5.0-star rating from 19 Google reviews. We're IDA certified, fully insured, and bring professional equipment directly to your location anywhere in Lexington, Lake Murray, or surrounding areas."
    },
    {
      question: 'Do you offer ceramic coating in Lexington SC?',
      answer: 'Yes! We provide professional ceramic coating services throughout Lexington SC. Our mobile unit comes equipped for ceramic coating application at your home or office. We include paint correction, prep work, and professional-grade ceramic coating with 2-5 year protection.'
    },
    {
      question: 'Where can I find car detailing near Lake Murray in Lexington SC?',
      answer: 'We provide mobile car detailing service to all locations around Lake Murray including Lexington, Spence Island, River Club, Oak Grove, and Lake Murray Shores. Instead of traveling to a shop, we come directly to you with our fully-equipped mobile unit.'
    },
    {
      question: 'How long does auto detailing take in Lexington SC?',
      answer: 'Auto detailing in Lexington SC typically takes 2-4 hours depending on the package. Our Basic Detail Package takes 2-3 hours while our Factory Reset Package with shampoo & extraction takes 3-4 hours. We work at your location so you can continue your day while we detail your vehicle.'
    },
    {
      question: 'Do you offer mobile detailing in Lexington SC?',
      answer: 'Yes! Our mobile detailing service in Lexington SC includes complete interior detailing, exterior detailing, and ceramic coating starting at $225 for our Basic Detail Package. We bring water, power, and all equipment needed. Perfect for Lexington residents who want professional results without leaving home.'
    },
    {
      question: 'What areas of Lexington SC do you serve for auto detailing?',
      answer: 'We serve all of Lexington SC including Lake Murray Shores, Spence Island, River Club, Oak Grove, Red Bank, Gilbert, Pelion, Sunset Boulevard area, and all locations within 25 miles of Lexington. We also service Columbia, Irmo, Cayce, and West Columbia.'
    },
    {
      question: 'Can I find reviews for mobile detailing in Lexington SC?',
      answer: 'Yes! We have 19 verified Google reviews with a perfect 5.0-star rating. Customers praise our professional mobile service, attention to detail, and convenient at-home detailing. Search "Mikah\'s Auto Detailing Lexington SC" on Google to read our reviews.'
    }
  ];

  // All keywords - Set 1 + Set 2 combined with Lexington
  const allKeywords = [
    // Set 2 keywords with Lexington
    'car detailing near me lexington sc', 'car detail shops near me lexington sc', 'vehicle detailing near me lexington sc',
    'mobile auto detailing lexington sc', 'auto detailing lexington sc', 'mobile car detailing lexington sc',
    'mobile detailing near me lexington sc', 'car detailing lexington sc', 'detailing near me lexington sc',
    'interior car detailing near me lexington sc', 'automotive detailing near me lexington sc', 'car detailing services lexington sc',
    'car mobile detailing lexington sc', 'auto detail shops near me lexington sc', 'automotive detailing lexington sc',
    'auto detailing mobile lexington sc', 'auto detailing services lexington sc', 'auto mobile detailing lexington sc',
    'mobile vehicle detailing near me lexington sc', 'mobile car detailing lexington sc', 'mobile detailing lexington sc',
    'mobile vehicle detailing lexington sc', 'detailed car cleaning services lexington sc', 'auto detailers near me mobile lexington sc',
    'auto detailing near me mobile lexington sc', 'auto car detailing lexington sc', 'automotive detail shops near me lexington sc',
    'car auto detailing lexington sc', 'mobile detailing car lexington sc', 'detailing near me mobile lexington sc',
    'detailing mobile near me lexington sc', 'auto detailing mobile near me lexington sc', 'detailing lexington sc',
    'vehicle detailing services lexington sc', 'automotive detail lexington sc', 'detail car mobile lexington sc',
    'mobile automotive detailing lexington sc', 'automobile detailing services lexington sc', 'auto mobile detail lexington sc',
    'car detailing in lexington sc', 'automotive car detailing lexington sc', 'car car detailing lexington sc',
    'auto detailing cars lexington sc', 'car detailing car detailing lexington sc', 'car detailing cars lexington sc',
    'car detailing detailing lexington sc', 'car detailing car lexington sc', 'detailing automotive lexington sc',
    'car detailing auto lexington sc', 'detailing on a car lexington sc', 'auto det lexington sc',
    'mobile auto detailing lexington sc', 'car cleaning lexington sc',
    // Set 1 keywords with Lexington
    'car maintenance lexington sc', 'ceramic coating lexington sc', 'auto ceramic coating lexington sc',
    'car ceramic coating lexington sc', 'automotive ceramic coating lexington sc', 'auto detailing lexington sc',
    'auto detailing services lexington sc', 'car detailing service lexington sc', 'car detailing lexington sc',
    'detailing auto lexington sc', 'automotive detailing lexington sc', 'car services lexington sc',
    'car waxing lexington sc', 'vehicle interior cleaning lexington sc', 'vehicle detailing services lexington sc',
    'car service lexington sc', 'auto interior cleaning lexington sc', 'coating for ceramic lexington sc',
    'detail car cleaning services lexington sc', 'auto waxing lexington sc', 'detailing automobile lexington sc',
    'auto shop lexington sc', 'car for service lexington sc', 'automotive mobile detailing lexington sc',
    'in car cleaning lexington sc', 'paint automobile lexington sc', 'interior cleaning of a car lexington sc',
    'vehicle ceramic coating lexington sc', 'ceramic paint lexington sc', 'professional ceramic coating lexington sc',
    'ceramic paint coating lexington sc', 'coating car lexington sc', 'ceramic paint protection lexington sc',
    'ceramic coating service lexington sc', 'detailing services lexington sc', 'car ceramic lexington sc',
    'ceramic coating for your car lexington sc', 'auto coating lexington sc', 'interior detailing lexington sc',
    'ceramic detailing lexington sc', 'car detailing ceramic coating lexington sc'
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: "Mikah's Auto Detailing - Lexington SC",
      description: 'Professional mobile car detailing in Lexington SC. Interior detailing, exterior detailing, ceramic coating, paint correction. 5.0★ rated with 19 reviews.',
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: '',
        city: 'Lexington',
        state: 'SC',
        zip: '29072'
      }
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(locationFAQs);
  const enhancedLocalBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedLocalBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('lexington-sc');

  return (
    <>
      <SEOHead
        title="Car Detailing Lexington SC | Mobile Service | Book Today"
        description="Lexington SC's top-rated mobile detailing service. Full interior/exterior details from $200. We bring professional equipment to you. Free quotes - call (803) 667-8731!"
        keywords={allKeywords.join(', ')}
        canonical="https://mikahsmobiledetailingsc.com/locations/lexington-sc"
        ogDescription="Lexington SC's top-rated mobile detailing service. Full interior/exterior details from $200. We bring professional equipment to you. Free quotes - call (803) 667-8731!"
        twitterDescription="Lexington SC's top-rated mobile detailing service. Full interior/exterior details from $200. We bring professional equipment to you. Free quotes - call (803) 667-8731!"
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="Lexington SC"
        locationData={locationData}
        aggregateRating={aggregateRating}
        reviews={reviews}
      />

      <Navigation />

      <div className="bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: 'Lexington SC', path: '/locations/lexington-sc' }
            ]}
          />
        </div>
      </div>


      <div className="min-h-screen bg-white">
        {/* Hero Video Section */}
        <div className="relative text-white min-h-screen w-full overflow-hidden flex items-center">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-24 pb-12">
            <div className="flex items-center justify-center gap-2 text-primary-300 mb-6">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-semibold">Mobile Detailing Lexington, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Professional Auto Detailing
              <br />
              <span className="text-primary-300">Lexington, SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              Expert mobile car detailing serving Lexington & Lake Murray. Ceramic coating, interior
              detailing, paint correction. 5.0★ rated with 19 reviews. We come to you!
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-300">
              ✨ Lake Murray's Trusted Detailer
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5.0★ (19 Reviews)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Ceramic Coating</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>IDA Certified</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Same Day Service</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="tel:8036678731">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (803) 667-8731
                </button>
              </a>
              <a href="/#quote">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary-700 text-white text-base md:text-lg font-bold rounded-lg hover:bg-primary-800 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Your Free Quote
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Services with ACTUAL pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Services & Prices - Lexington SC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional car detailing at your Lexington, Lake Murray, or Sunset Blvd location. All prices include mobile service.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realServices.map((service, i) => (
                <Link key={i} to={service.link} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition group">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-700 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t mt-auto">
                    <div>
                      <div className="text-2xl font-bold text-primary-700">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary-700 group-hover:translate-x-2 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Lexington SC Areas We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional mobile detailing service throughout greater Lexington & Lake Murray
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Lake Murray Shores', 'Spence Island', 'River Club', 'Oak Grove', 'Red Bank',
                'Gilbert', 'Pelion', 'Batesburg-Leesville', 'Summit', 'Cottages at Murray',
                'Sunset Boulevard', 'Lexington Medical Center'].map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                  <MapPin className="w-5 h-5 text-primary-700 mb-2" />
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking Matrix */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <InternalLinkingMatrix
              currentLocation="Lexington SC"
              currentSlug="lexington-sc"
              showServiceAreas={true}
              showNearbyServices={true}
            />
          </div>
        </section>

        {/* Landmark and Community Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <LandmarkContent
              location="Lexington SC"
              locationSlug="lexington-sc"
            />
          </div>
        </section>

        {/* FAQs based on REAL search terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mobile Detailing Lexington SC - Frequently Asked
            </h2>
            <div className="space-y-6">
              {locationFAQs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Auto Detailing?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Best mobile car detailing in Lexington SC. 5.0★ rating from 19 reviews. We come to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call (803) 667-8731
              </a>
              <Link
                to="/#quote"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Get Free Quote Online
              </Link>
            </div>
            <p className="text-primary-200 mt-6">
              Serving Lexington, Lake Murray, Sunset Blvd, Gilbert, Oak Grove & all surrounding areas
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationLexingtonPage;
