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

export const LocationIrmoPage = () => {
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
      price: '$200',
      duration: '2-3 hours',
      description: 'Interior full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned. Exterior wheels decontaminated, foam wash, protective wax, wheels & tires dressed.',
      link: '/services/full-detail'
    },
    {
      title: 'Factory Reset Package',
      price: '$325',
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
      price: '$175/Month',
      duration: 'Monthly',
      description: '2x Exterior Details + 1x Interior Reset + 1x Engine Bay Cleaning per month. Priority scheduling. First 2 months: $300 upfront.',
      link: '/services/mobile-detailing'
    }
  ];

  // FAQs based on REAL search terms - Irmo specific
  const locationFAQs = [
    {
      question: 'How much does car detailing cost in Irmo SC?',
      answer: 'Car detailing in Irmo SC starts at $200 for our Basic Detail Package and $325 for our Factory Reset Package. Ceramic coatings, paint corrections, and specialty services require quotes based on vehicle size and condition. We provide free quotes for all Irmo residents.'
    },
    {
      question: 'What is the best mobile car detailing service in Irmo SC?',
      answer: "Mikah's Auto Detailing is the top-rated mobile detailing service in Irmo SC with a 5.0-star rating from 19 Google reviews. We're IDA certified, fully insured, and bring professional equipment directly to your location anywhere in Irmo, Harbison, or Chapin."
    },
    {
      question: 'Do you offer ceramic coating in Irmo SC?',
      answer: 'Yes! We provide professional ceramic coating services throughout Irmo SC. Our mobile unit comes equipped for ceramic coating application at your home or office. We include paint correction, prep work, and professional-grade ceramic coating with 2-5 year protection.'
    },
    {
      question: 'Where can I find car detailing near Harbison in Irmo SC?',
      answer: 'We provide mobile car detailing service to all locations around Harbison including Irmo, Seven Oaks, Ballentine, and Lake Murray Boulevard area. Instead of traveling to a shop, we come directly to you with our fully-equipped mobile unit.'
    },
    {
      question: 'How long does auto detailing take in Irmo SC?',
      answer: 'Auto detailing in Irmo SC typically takes 2-4 hours depending on the package. Our Basic Detail Package takes 2-3 hours while our Factory Reset Package with shampoo & extraction takes 3-4 hours. We work at your location so you can continue your day while we detail your vehicle.'
    },
    {
      question: 'Do you offer mobile detailing in Irmo SC?',
      answer: 'Yes! Our mobile detailing service in Irmo SC includes complete interior detailing, exterior detailing, and ceramic coating starting at $200 for our Basic Detail Package. We bring water, power, and all equipment needed. Perfect for Irmo residents who want professional results without leaving home.'
    },
    {
      question: 'What areas of Irmo SC do you serve for auto detailing?',
      answer: 'We serve all of Irmo SC including Harbison, Seven Oaks, Lake Murray Dam Area, Chapin Town Center, Crooked Creek, Ballentine, Little Mountain, White Rock, and all locations within 25 miles of Irmo. We also service Columbia, Lexington, and West Columbia.'
    },
    {
      question: 'Can I find reviews for mobile detailing in Irmo SC?',
      answer: 'Yes! We have 19 verified Google reviews with a perfect 5.0-star rating. Customers praise our professional mobile service, attention to detail, and convenient at-home detailing. Search "Mikah\'s Auto Detailing Irmo SC" on Google to read our reviews.'
    }
  ];

  // All keywords - Set 1 + Set 2 combined with Irmo
  const allKeywords = [
    // Set 2 keywords with Irmo
    'car detailing near me irmo sc', 'car detail shops near me irmo sc', 'vehicle detailing near me irmo sc',
    'mobile auto detailing irmo sc', 'auto detailing irmo sc', 'mobile car detailing irmo sc',
    'mobile detailing near me irmo sc', 'car detailing irmo sc', 'detailing near me irmo sc',
    'interior car detailing near me irmo sc', 'automotive detailing near me irmo sc', 'car detailing services irmo sc',
    'car mobile detailing irmo sc', 'auto detail shops near me irmo sc', 'automotive detailing irmo sc',
    'auto detailing mobile irmo sc', 'auto detailing services irmo sc', 'auto mobile detailing irmo sc',
    'mobile vehicle detailing near me irmo sc', 'mobile car detailing irmo sc', 'mobile detailing irmo sc',
    'mobile vehicle detailing irmo sc', 'detailed car cleaning services irmo sc', 'auto detailers near me mobile irmo sc',
    'auto detailing near me mobile irmo sc', 'auto car detailing irmo sc', 'automotive detail shops near me irmo sc',
    'car auto detailing irmo sc', 'mobile detailing car irmo sc', 'detailing near me mobile irmo sc',
    'detailing mobile near me irmo sc', 'auto detailing mobile near me irmo sc', 'detailing irmo sc',
    'vehicle detailing services irmo sc', 'automotive detail irmo sc', 'detail car mobile irmo sc',
    'mobile automotive detailing irmo sc', 'automobile detailing services irmo sc', 'auto mobile detail irmo sc',
    'car detailing in irmo sc', 'automotive car detailing irmo sc', 'car car detailing irmo sc',
    'auto detailing cars irmo sc', 'car detailing car detailing irmo sc', 'car detailing cars irmo sc',
    'car detailing detailing irmo sc', 'car detailing car irmo sc', 'detailing automotive irmo sc',
    'car detailing auto irmo sc', 'detailing on a car irmo sc', 'auto det irmo sc',
    'mobile auto detailing irmo sc', 'car cleaning irmo sc',
    // Set 1 keywords with Irmo
    'car maintenance irmo sc', 'ceramic coating irmo sc', 'auto ceramic coating irmo sc',
    'car ceramic coating irmo sc', 'automotive ceramic coating irmo sc', 'auto detailing irmo sc',
    'auto detailing services irmo sc', 'car detailing service irmo sc', 'car detailing irmo sc',
    'detailing auto irmo sc', 'automotive detailing irmo sc', 'car services irmo sc',
    'car waxing irmo sc', 'vehicle interior cleaning irmo sc', 'vehicle detailing services irmo sc',
    'car service irmo sc', 'auto interior cleaning irmo sc', 'coating for ceramic irmo sc',
    'detail car cleaning services irmo sc', 'auto waxing irmo sc', 'detailing automobile irmo sc',
    'auto shop irmo sc', 'car for service irmo sc', 'automotive mobile detailing irmo sc',
    'in car cleaning irmo sc', 'paint automobile irmo sc', 'interior cleaning of a car irmo sc',
    'vehicle ceramic coating irmo sc', 'ceramic paint irmo sc', 'professional ceramic coating irmo sc',
    'ceramic paint coating irmo sc', 'coating car irmo sc', 'ceramic paint protection irmo sc',
    'ceramic coating service irmo sc', 'detailing services irmo sc', 'car ceramic irmo sc',
    'ceramic coating for your car irmo sc', 'auto coating irmo sc', 'interior detailing irmo sc',
    'ceramic detailing irmo sc', 'car detailing ceramic coating irmo sc'
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: "Mikah's Auto Detailing - Irmo SC",
      description: 'Professional mobile car detailing in Irmo SC. Interior detailing, exterior detailing, ceramic coating, paint correction. 5.0★ rated with 19 reviews.',
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: '',
        city: 'Irmo',
        state: 'SC',
        zip: '29063'
      }
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(locationFAQs);
  const enhancedLocalBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedLocalBusinessSchema];

  return (
    <>
      <SEOHead
        title="Mobile Detailing Irmo SC | Best Car Detailing & Ceramic Coating Harbison"
        description="Best mobile detailing Irmo SC. Professional car detailing & ceramic coating at your location. $200+ Interior/exterior detailing. 5.0★ 19 reviews. Serving Harbison, Seven Oaks, Chapin. Free quotes!"
        keywords={allKeywords.join(', ')}
        canonical="https://mikahsmobiledetailingsc.com/locations/irmo-sc"
        schema={schemas}
      />

      <Navigation />

      <div className="bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: 'Irmo SC', path: '/locations/irmo-sc' }
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
              <span className="text-sm md:text-base font-semibold">Mobile Detailing Irmo, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Premier Mobile Detailing
              <br />
              <span className="text-primary-300">Irmo & Harbison, SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              Expert mobile car detailing serving Irmo, Harbison & Chapin. Ceramic coating, interior
              detailing, paint correction. 5.0★ rated with 19 reviews. We come to you!
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-300">
              ✨ Northwest Columbia's Top Choice
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5.0★ (19 Reviews)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Paint Correction</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>IDA Certified</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Same Day Available</span>
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
              Auto Detailing Services & Prices - Irmo SC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional car detailing at your Irmo, Harbison, or Chapin location. All prices include mobile service.
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
              Irmo SC Areas We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional mobile detailing service throughout Irmo, Harbison & Northwest Columbia
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Harbison', 'Seven Oaks', 'Lake Murray Dam', 'Chapin Town Center', 'Crooked Creek',
                'Ballentine', 'Little Mountain', 'White Rock', 'Lake Murray Blvd', 'Columbiana Centre',
                'Harbison State Forest', 'Dutch Fork'].map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                  <MapPin className="w-5 h-5 text-primary-700 mb-2" />
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs based on REAL search terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mobile Detailing Irmo SC - Frequently Asked
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
              Best mobile car detailing in Irmo SC. 5.0★ rating from 19 reviews. We come to you!
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
              Serving Irmo, Harbison, Seven Oaks, Chapin, Ballentine & all surrounding areas
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationIrmoPage;
