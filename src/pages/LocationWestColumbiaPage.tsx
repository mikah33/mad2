import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, CheckCircle, Shield, Award, ArrowRight, Quote } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { generateGMBSchema } from '../components/seo/GMBSchema';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InternalLinkingMatrix } from '../components/seo/InternalLinkingMatrix';
import { LandmarkContent } from '../components/seo/LandmarkContent';
import { AdvancedSchemaMarkup, getLocationData } from '../components/seo/AdvancedSchemaMarkup';
import { aggregateRating, reviews } from '../data/reviews';
import { westColumbiaNeighborhoods } from '../data/neighborhoods';

export const LocationWestColumbiaPage = () => {
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

  const westColumbiaFAQs = [
    {
      question: "Do you provide mobile auto detailing in West Columbia SC?",
      answer: "Yes! We provide full mobile auto detailing service throughout West Columbia, SC. We come directly to your home, office, or any location in West Columbia with all our professional equipment. No need to drive anywhere - we bring the detail shop to you!"
    },
    {
      question: "What areas of West Columbia do you serve?",
      answer: "We serve all of West Columbia including Triangle City, Brookland, the Cayce border areas, Sunset Boulevard, Meeting Street, State Street, Augusta Road, and all surrounding neighborhoods. If you're in West Columbia or the Greater Columbia area, we can reach you."
    },
    {
      question: "How much does car detailing cost in West Columbia SC?",
      answer: "Our car detailing prices in West Columbia are: Interior Detail starting at $200, Exterior Detail starting at $200, and Full Detail (interior + exterior) starting at $225. Mobile service is included - no extra fees for coming to your West Columbia location!"
    },
    {
      question: "How do I book mobile detailing in West Columbia?",
      answer: "Booking is easy! Call us at (803) 667-8731 or request a quote through our website. We'll schedule a convenient time to come to your West Columbia location and provide professional detailing service right in your driveway or parking lot."
    },
    {
      question: "What's included in a full detail in West Columbia?",
      answer: "Our full detail in West Columbia includes complete interior cleaning (vacuum, wipe down, UV protection, glass cleaning, disinfection) plus full exterior service (foam wash, decontamination, protective wax, wheel and tire dressing). All for just $225!"
    },
    {
      question: "Do you offer same-day detailing in West Columbia SC?",
      answer: "Yes! We offer same-day appointments when available. Call (803) 667-8731 to check our schedule. We serve West Columbia, Triangle City, Brookland, and Cayce border areas with flexible scheduling including weekends."
    },
    {
      question: "Are you insured and certified for auto detailing?",
      answer: "Absolutely! Mikah's Auto Detailing is fully insured and IDA certified. We bring professional-grade equipment and use premium products on every West Columbia vehicle we service. Your car is in expert hands."
    },
    {
      question: "Can you remove pet hair and odors in West Columbia?",
      answer: "Yes! We specialize in interior detailing that includes pet hair removal, deep extraction cleaning, and odor treatment. Many West Columbia pet owners trust us to restore their vehicle's interior. Ask about our specialty odor removal service."
    }
  ];

  const servicePackages = [
    {
      title: 'Interior Detail',
      price: '$200',
      duration: '1.5-2 hours',
      description: 'Complete interior restoration including vacuum, full wipe down, conditioner + UV protection, disinfection, and crystal clear glass cleaning.',
      features: ['Full vacuum & extraction', 'Dashboard & console cleaning', 'UV protection applied', 'Glass cleaned inside', 'Air freshening'],
      link: '/services/interior-detailing'
    },
    {
      title: 'Exterior Detail',
      price: '$200',
      duration: '1.5-2 hours',
      description: 'Full exterior transformation with foam wash, wheel decontamination, protective wax, and professional tire dressing.',
      features: ['Foam cannon wash', 'Clay bar treatment', 'Hand wax applied', 'Wheels decontaminated', 'Tires dressed'],
      link: '/services/exterior-detailing'
    },
    {
      title: 'Full Detail',
      price: '$225',
      duration: '2-3 hours',
      description: 'The complete package - interior and exterior detailing combined for total vehicle restoration.',
      features: ['Everything in Interior', 'Everything in Exterior', 'Best value package', 'Most popular choice'],
      link: '/services/full-detail',
      popular: true
    },
    {
      title: 'Factory Reset Package',
      price: '$400',
      duration: '3-4 hours',
      description: 'Deep cleaning with shampoo & extraction, light stain removal, brake dust removal, and premium protection.',
      features: ['Shampoo & extraction', 'Light stain removal', 'Brake dust removal', 'Premium wax finish'],
      link: '/services/full-detail'
    },
    {
      title: 'Ceramic Coating',
      price: 'Quote',
      duration: '1-2 days',
      description: 'Professional-grade ceramic application with thorough prep work. Long-term paint protection lasting 2-5 years.',
      features: ['Paint correction included', 'Professional prep', '2-5 year protection', 'Incredible shine'],
      link: '/services/ceramic-coating'
    },
    {
      title: 'Paint Correction',
      price: 'Quote',
      duration: '4-8 hours',
      description: 'Expert correction to remove swirl marks, light scratches, and oxidation. Restore your paint to showroom condition.',
      features: ['Swirl mark removal', 'Scratch correction', 'Oxidation removal', 'Mirror finish'],
      link: '/services/paint-correction'
    }
  ];

  const neighborhoods = [
    'Triangle City',
    'Brookland',
    'Cayce Border Areas',
    'Sunset Boulevard',
    'Meeting Street Area',
    'State Street',
    'Augusta Road',
    'Jarvis Klapman Boulevard',
    'Charleston Highway',
    'Platt Springs Road',
    'Airport Boulevard',
    'Springdale'
  ];

  const testimonials = [
    {
      name: "Marcus T.",
      location: "Triangle City, West Columbia",
      rating: 5,
      text: "Best mobile detailing in West Columbia! Mikah came right to my house and my truck looks brand new. The interior detail was worth every penny of the $200.",
      service: "Interior Detail"
    },
    {
      name: "Jennifer L.",
      location: "Brookland, West Columbia",
      rating: 5,
      text: "Finally found a reliable detailer in West Columbia. The full detail for $225 is an amazing value. My car hasn't looked this good since I bought it!",
      service: "Full Detail"
    },
    {
      name: "David R.",
      location: "Near Cayce, West Columbia",
      rating: 5,
      text: "Professional, on time, and the results speak for themselves. Living near the Cayce border, it's so convenient having them come to me. Highly recommend!",
      service: "Exterior Detail"
    },
    {
      name: "Ashley M.",
      location: "Sunset Blvd Area",
      rating: 5,
      text: "Got my SUV detailed while working from home. The attention to detail is incredible. They got out stains I thought were permanent. 5 stars all the way!",
      service: "Factory Reset Package"
    }
  ];

  // Comprehensive keyword list for West Columbia
  const allKeywords = [
    'auto detailing west columbia sc', 'car detailing west columbia', 'mobile detailing west columbia sc',
    'car detailing west columbia sc', 'mobile car detailing west columbia', 'auto detail west columbia',
    'car wash west columbia sc', 'interior detailing west columbia', 'exterior detailing west columbia',
    'ceramic coating west columbia sc', 'paint correction west columbia', 'mobile auto detailing west columbia',
    'best car detailing west columbia sc', 'professional detailing west columbia', 'car cleaning west columbia',
    'vehicle detailing west columbia sc', 'detail shop west columbia', 'auto detailers west columbia sc',
    'mobile car wash west columbia sc', 'full detail west columbia', 'interior car cleaning west columbia',
    'triangle city car detailing', 'brookland auto detailing', 'cayce border detailing',
    'west columbia car care', 'west columbia auto care', 'detailing near me west columbia'
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: "Mikah's Auto Detailing - West Columbia SC",
      description: "West Columbia's premier mobile detailing service. Full car details from $200. We bring the detail shop to you. 5-star rated. Serving Triangle City, Brookland, Cayce border areas.",
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: 'Serving West Columbia',
        city: 'West Columbia',
        state: 'SC',
        zip: '29169'
      },
      priceRange: '$$'
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(westColumbiaFAQs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('west-columbia-sc');

  return (
    <>
      <SEOHead
        title="Auto Detailing Services West Columbia & Columbia SC | Mobile | From $200"
        description="Mobile auto detailing services in West Columbia & Columbia SC. Interior/exterior from $200. We come to you — same day available. 5-star rated. Call (803) 667-8731!"
        keywords={allKeywords.join(', ')}
        canonical="https://mikahsmobiledetailingsc.com/locations/west-columbia"
        ogDescription="Mobile auto detailing services in West Columbia & Columbia SC. Interior/exterior from $200. We come to you — same day available. 5-star rated. Call (803) 667-8731!"
        twitterDescription="Mobile auto detailing services in West Columbia & Columbia SC. Interior/exterior from $200. We come to you — same day available. 5-star rated. Call (803) 667-8731!"
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="West Columbia SC"
        locationData={locationData}
        aggregateRating={aggregateRating}
        reviews={reviews}
      />

      <Navigation />

      <div className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: 'West Columbia SC', path: '/locations/west-columbia-sc' }
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
              <span className="text-sm md:text-base font-semibold">Serving West Columbia, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Mobile Auto Detailing
              <br />
              <span className="text-primary-300">in West Columbia, SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              West Columbia's premier mobile detailing service. Full car details from $200.
              We bring the detail shop to you - home or office. 5-star rated!
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-300">
              Interior $200 | Exterior $200 | Full Detail $225
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>100% Mobile</span>
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

        {/* West Columbia Neighborhoods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              West Columbia SC Neighborhoods We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing service throughout West Columbia's neighborhoods. We come to you!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {westColumbiaNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  to={`/locations/west-columbia-sc/${neighborhood.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-all hover:shadow-lg border border-gray-100 hover:border-primary-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-100 transition">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition">
                        {neighborhood.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {neighborhood.shortDescription}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium text-sm">
                        View Services
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/locations/west-columbia-sc/neighborhoods"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All West Columbia Neighborhoods
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why West Columbia Residents Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why West Columbia Residents Choose Us
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The trusted choice for mobile auto detailing in West Columbia, Triangle City, Brookland, and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="bg-primary-500 text-white p-4 rounded-full inline-block mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Mobile Service</h3>
                <p className="text-gray-600">We come to your West Columbia home, office, or anywhere convenient. No driving required!</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="bg-primary-500 text-white p-4 rounded-full inline-block mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
                <p className="text-gray-600">Trusted by West Columbia residents with consistently excellent reviews and results.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="bg-primary-500 text-white p-4 rounded-full inline-block mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Quality detailing from $200. Full details just $225 - no hidden fees or surprises.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="bg-primary-500 text-white p-4 rounded-full inline-block mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Same-day appointments available. Weekends too. Work with your schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages with Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Packages - West Columbia SC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing at your West Columbia location. All prices include mobile service - we come to you!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePackages.map((pkg, i) => (
                <Link
                  key={i}
                  to={pkg.link}
                  className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition group relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-700 transition">
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-primary-700">{pkg.price}</span>
                    <span className="text-gray-500 text-sm">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-end pt-4 border-t">
                    <span className="text-primary-700 font-semibold group-hover:translate-x-1 transition flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve in West Columbia */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                West Columbia Areas We Serve
              </h2>
              <p className="text-gray-600 text-lg">
                Mobile detailing service throughout all West Columbia neighborhoods and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow text-center hover:shadow-lg transition hover:bg-primary-50">
                  <MapPin className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">{neighborhood}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't see your area? We likely serve it! Call <a href="tel:8036678731" className="text-primary-600 font-semibold hover:underline">(803) 667-8731</a> to confirm.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What West Columbia Customers Say
              </h2>
              <p className="text-gray-600 text-lg">
                Real reviews from real customers in West Columbia and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                      <Quote className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/reviews"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Read More Reviews <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                West Columbia Auto Detailing FAQs
              </h2>
              <p className="text-gray-600">
                Common questions about our mobile detailing service in West Columbia
              </p>
            </div>

            <div className="space-y-6">
              {westColumbiaFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your West Columbia Mobile Detailing Today
            </h2>
            <p className="text-xl mb-4 text-primary-100">
              Professional auto detailing service comes to you - call now or request a free quote
            </p>
            <p className="text-2xl font-bold mb-8 text-white">
              Interior $200 | Exterior $200 | Full Detail $225
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call (803) 667-8731
              </a>
              <a
                href="/#quote"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg transform hover:scale-105"
              >
                Get Free Quote Online
              </a>
            </div>
            <p className="text-primary-200 mt-8">
              Serving West Columbia, Triangle City, Brookland, Cayce border areas & all surrounding neighborhoods
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationWestColumbiaPage;
