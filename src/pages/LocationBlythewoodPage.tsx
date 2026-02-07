import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, Shield, Award, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { aggregateRating, reviews } from '../data/reviews';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InternalLinkingMatrix } from '../components/seo/InternalLinkingMatrix';
import { LandmarkContent } from '../components/seo/LandmarkContent';
import { AdvancedSchemaMarkup, getLocationData } from '../components/seo/AdvancedSchemaMarkup';

export const LocationBlythewoodPage = () => {
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

  // Real services with correct pricing
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

  // Blythewood-specific FAQs
  const locationFAQs = [
    {
      question: 'Do you provide mobile auto detailing in Blythewood SC?',
      answer: 'Yes! We provide premium mobile auto detailing service throughout Blythewood SC and the surrounding communities. We come directly to your home, office, or country club with all professional equipment needed for a showroom-quality detail.'
    },
    {
      question: 'What areas of Blythewood SC do you serve?',
      answer: 'We serve all of Blythewood including Killian, Ridgewood, Longtown, Cobblestone Park, The Summit, and all areas within 25 miles. We specialize in serving the upscale neighborhoods and communities that Blythewood is known for.'
    },
    {
      question: 'How much does car detailing cost in Blythewood SC?',
      answer: 'Our car detailing prices in Blythewood SC start at $225 for our Basic Detail Package and $400 for our Factory Reset Package. We offer premium detailing services tailored to luxury vehicles and high-end automobiles common in the Blythewood area.'
    },
    {
      question: 'Do you specialize in luxury vehicle detailing in Blythewood?',
      answer: 'Absolutely! We specialize in luxury and high-end vehicle detailing in Blythewood. Our IDA-certified techniques are perfect for BMW, Mercedes, Lexus, Tesla, and other premium vehicles. We understand the care these vehicles require.'
    },
    {
      question: 'What makes your Blythewood auto detailing service special?',
      answer: 'We understand that Blythewood residents expect premium quality. Our mobile service brings the same professional-grade equipment and products used by high-end dealerships directly to your location. We offer white-glove service with attention to every detail your luxury vehicle deserves.'
    }
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Mikah's Auto Detailing - Blythewood SC",
    description: 'Premium mobile car detailing in Blythewood SC. Luxury vehicle care, ceramic coating, paint correction. 5.0 rated serving Killian, Ridgewood, Longtown.',
    phone: '(803) 667-8731',
    email: 'mikahsautodetailing@gmail.com',
    address: {
      street: '',
      city: 'Blythewood',
      state: 'SC',
      zip: '29016'
    }
  }, aggregateRating, reviews);

  const faqSchema = generateFAQSchema(locationFAQs);
  const enhancedLocalBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedLocalBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('blythewood-sc');

  return (
    <>
      <SEOHead
        title="Car Detailing Blythewood SC | Mobile Service | Mikah's Auto Detailing"
        description="Blythewood's trusted mobile car detailing service. Full detail packages from $225. We come to your home or office. 5-star rated. Call (803) 667-8731!"
        keywords="car detailing blythewood sc, auto detailing blythewood, mobile detailing blythewood sc, luxury car detailing blythewood, killian auto detailing, ridgewood car care, longtown mobile detailing"
        canonical="https://mikahsmobiledetailingsc.com/locations/blythewood-sc"
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="Blythewood SC"
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
              { label: 'Blythewood SC', path: '/locations/blythewood-sc' }
            ]}
          />
        </div>
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Video Section */}
        <div className="relative text-white min-h-screen w-full overflow-hidden flex items-center">
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

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-24 pb-12">
            <div className="flex items-center justify-center gap-2 text-primary-300 mb-6">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-semibold">Mobile Detailing Blythewood, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Mobile Car Detailing in
              <br />
              <span className="text-primary-300">Blythewood, SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              Premium mobile car detailing for Blythewood's discerning residents. Luxury vehicle care, ceramic coating, and paint correction. 5.0 rated with 19 reviews.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-300">
              Premium Quality Service for Blythewood's Finest Vehicles
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5.0 (19 Reviews)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Luxury Vehicle Specialist</span>
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

        {/* Professional Detailing for Blythewood Residents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Professional Detailing for Blythewood Residents
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Blythewood is known for its upscale communities and discerning residents who appreciate quality. Our premium mobile detailing service brings dealership-quality care directly to your driveway. We specialize in luxury vehicles and understand the meticulous attention your vehicle deserves.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Award className="w-12 h-12 text-primary-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">White-Glove Service</h3>
                <p className="text-gray-600">Premium detailing experience with attention to every detail. Perfect for luxury and high-end vehicles.</p>
              </div>
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-primary-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">IDA Certified</h3>
                <p className="text-gray-600">Professionally trained and certified by the International Detailing Association.</p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-primary-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Convenience</h3>
                <p className="text-gray-600">We come to your home, office, or country club. No need to leave Blythewood.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services with ACTUAL pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Services & Prices - Blythewood SC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional car detailing at your Blythewood, Killian, or Ridgewood location. All prices include mobile service.
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
              Blythewood SC Areas We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional mobile detailing service throughout Blythewood and surrounding upscale communities
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Blythewood Town Center', 'Killian', 'Ridgewood', 'Longtown',
                'Cobblestone Park', 'The Summit', 'Richland Northeast', 'Elgin',
                'Pontiac', 'Winnsboro Road Area', 'Blythewood High School Area', 'Doko Manor'].map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                  <MapPin className="w-5 h-5 text-primary-700 mb-2" />
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Blythewood Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Join our satisfied customers in Blythewood and the Midlands
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((review, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.reviewText}"</p>
                  <div className="font-semibold">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.datePublished}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking Matrix */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <InternalLinkingMatrix
              currentLocation="Blythewood SC"
              currentSlug="blythewood-sc"
              showServiceAreas={true}
              showNearbyServices={true}
            />
          </div>
        </section>

        {/* Landmark and Community Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <LandmarkContent
              location="Blythewood SC"
              locationSlug="blythewood-sc"
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mobile Detailing Blythewood SC - Frequently Asked
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
              Ready for Premium Auto Detailing?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Best mobile car detailing in Blythewood SC. 5.0 rating from 19 reviews. We come to your home or office!
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
              Serving Blythewood, Killian, Ridgewood, Longtown & all surrounding communities
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationBlythewoodPage;
