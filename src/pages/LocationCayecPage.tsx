import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Phone, Mail, Shield, CheckCircle, Star,
  Sparkles, Award, TrendingUp, Users, ChevronRight, ArrowRight
} from 'lucide-react';
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
import { cayceNeighborhoods } from '../data/neighborhoods';

const LocationCayecPage = () => {
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
      description: 'Interior full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned, door jambs cleaned & waxed. Exterior: Wheels decontaminated, foam contact wash, protective wax layer, wheels & tires dressed.',
      features: [
        'Interior full wipe down',
        'Conditioner + UV protection',
        'Vacuum & disinfection',
        'Glass cleaning',
        'Door jambs cleaned & waxed',
        'Wheels decontaminated',
        'Foam contact wash',
        'Protective wax layer',
        'Wheels & tires dressed'
      ],
      link: '/services/full-detail'
    },
    {
      title: 'Factory Reset Package',
      price: '$400',
      duration: '3-4 hours',
      description: 'Everything in Basic Package PLUS: Shampoo seats/carpet, hot water extraction, steam clean, deep condition leather, bug removal, clay bar treatment, paint sealant.',
      features: [
        'All Basic Package services',
        'Shampoo seats & carpet',
        'Hot water extraction',
        'Steam cleaning',
        'Deep condition leather',
        'Bug removal',
        'Clay bar treatment',
        'Paint sealant application'
      ],
      link: '/services/full-detail'
    },
    {
      title: 'Ceramic Coating',
      price: 'Quote',
      duration: '1-2 days',
      description: 'Professional ceramic coating application for long-lasting paint protection. Includes full paint correction, decontamination, and multi-year warranty.',
      features: [
        'Paint correction & decontamination',
        'Professional ceramic coating',
        'Multi-year protection',
        'Hydrophobic properties',
        'UV protection',
        'Scratch resistance',
        'Enhanced gloss finish',
        'Warranty included'
      ],
      link: '/services/ceramic-coating'
    },
    {
      title: 'Routine Reset',
      price: '$250/Month',
      duration: 'Monthly',
      description: 'Monthly maintenance package to keep your vehicle looking showroom fresh year-round. Perfect for busy professionals and car enthusiasts.',
      features: [
        'Monthly full detail service',
        'Interior maintenance',
        'Exterior wash & wax',
        'Wheel & tire care',
        'Glass cleaning',
        'Priority scheduling',
        'Consistent results',
        'Best value for regular care'
      ],
      link: '/services/mobile-detailing'
    }
  ];

  // FAQs for Cayce SC with real search term patterns
  const locationFAQs = [
    {
      question: 'How much does mobile detailing cost in Cayce SC?',
      answer: 'Mobile detailing in Cayce SC starts at $225 for our Basic Detail Package and $400 for our Factory Reset Package. We also offer ceramic coating (custom quote) and monthly maintenance at $250/month. All services include professional products, experienced technicians, and satisfaction guarantee.'
    },
    {
      question: 'Do you offer car detailing near West Columbia and Cayce?',
      answer: 'Yes! We provide comprehensive mobile auto detailing throughout Cayce, West Columbia, Springdale, Airport area, and surrounding neighborhoods. Our mobile service brings professional detailing directly to your home, office, or preferred location.'
    },
    {
      question: 'What areas do you serve in Cayce SC?',
      answer: 'We serve all of Cayce SC including West Columbia, Springdale, Airport Area, Sunset, Congaree Vista, New Brookland, Riverbanks Zoo area, and near Columbia Metropolitan Airport. Our mobile service covers a 20-mile radius from downtown Columbia.'
    },
    {
      question: 'How long does car detailing take in Cayce?',
      answer: 'Our Basic Detail Package takes 2-3 hours, Factory Reset Package takes 3-4 hours, and ceramic coating requires 1-2 days for proper curing. We schedule appointments to ensure thorough, quality work without rushing.'
    },
    {
      question: 'Do you offer ceramic coating in Cayce SC?',
      answer: 'Yes, we provide professional ceramic coating services in Cayce SC with multi-year protection. Our process includes paint correction, full decontamination, and professional-grade ceramic coating application. Contact us for a custom quote based on your vehicle.'
    },
    {
      question: 'What makes your Cayce mobile detailing service different?',
      answer: 'We combine professional experience with premium products, mobile convenience, and 100% satisfaction guarantee. With 19 five-star Google reviews and 5+ years experience, we deliver consistent, high-quality results throughout Cayce and West Columbia.'
    },
    {
      question: 'Can you detail my car at Columbia Metropolitan Airport area?',
      answer: 'Absolutely! We provide mobile detailing services throughout the Airport area, Springdale, and surrounding Cayce neighborhoods. Our mobile service means we come to you - whether at home, work, or another convenient location.'
    },
    {
      question: 'Do you detail cars near Riverbanks Zoo?',
      answer: 'Yes, we serve the Riverbanks Zoo area, West Columbia, and all of Cayce SC. Our mobile detailing service covers the entire region including New Brookland, Congaree Vista, and Sunset neighborhoods. Schedule online or call (803) 667-8731.'
    }
  ];

  // All keywords - Set 1 + Set 2 combined with cayce sc
  const allKeywords = [
    // Set 1 - Ceramic Coating keywords with cayce sc
    'ceramic coating cayce sc',
    'ceramic coating cayce sc prices',
    'ceramic coating cayce sc cost',
    'ceramic coating cayce sc reviews',
    'Best ceramic coating cayce sc',
    'Ceramic coating cost cayce sc',
    'Ceramic coating for cars cayce sc',
    'Ceramic coating near me cayce sc',
    'Ceramic paint protection cayce sc',
    'Car ceramic coating cayce sc',
    'Auto ceramic coating cayce sc',
    'Ceramic car coating cayce sc',
    'Professional ceramic coating cayce sc',
    'Ceramic coating services cayce sc',
    'Ceramic coating shops cayce sc',
    'Best ceramic coating for cars cayce sc',
    'Ceramic coating application cayce sc',
    'Ceramic coating protection cayce sc',
    'Ceramic coating specialists cayce sc',
    'Affordable ceramic coating cayce sc',
    'Cheap ceramic coating cayce sc',
    'Ceramic coating deals cayce sc',
    'Ceramic coating packages cayce sc',
    'Ceramic coating warranty cayce sc',
    'Ceramic coating maintenance cayce sc',
    'Ceramic coating benefits cayce sc',
    'Ceramic coating vs wax cayce sc',
    'How much is ceramic coating cayce sc',
    'Where to get ceramic coating cayce sc',
    'Ceramic coating before and after cayce sc',

    // Set 2 - Car Detailing keywords with cayce sc
    'car detailing cayce sc',
    'car detailing cayce sc prices',
    'car detailing cayce sc cost',
    'car detailing cayce sc reviews',
    'mobile detailing cayce sc',
    'mobile detailing cayce sc prices',
    'mobile detailing cayce sc reviews',
    'auto detailing cayce sc',
    'auto detailing cayce sc prices',
    'interior car detailing cayce sc',
    'exterior car detailing cayce sc',
    'full car detailing cayce sc',
    'professional car detailing cayce sc',
    'best car detailing cayce sc',
    'affordable car detailing cayce sc',
    'cheap car detailing cayce sc',
    'car detailing services cayce sc',
    'car detailing near me cayce sc',
    'mobile car wash cayce sc',
    'mobile auto detailing cayce sc',
    'car wash and detail cayce sc',
    'luxury car detailing cayce sc',
    'SUV detailing cayce sc',
    'truck detailing cayce sc',
    'paint correction cayce sc',
    'car wax service cayce sc',
    'car polish cayce sc',
    'headlight restoration cayce sc',
    'engine bay cleaning cayce sc',
    'pet hair removal cayce sc',
    'odor removal cayce sc',
    'leather conditioning cayce sc',
    'scratch removal cayce sc',
    'swirl mark removal cayce sc',

    // Location-specific additions
    'car detailing west columbia sc',
    'mobile detailing west columbia sc',
    'ceramic coating west columbia sc',
    'car detailing springdale sc',
    'car detailing airport area columbia sc',
    'car detailing riverbanks zoo',
    'car detailing new brookland sc',
    'mobile car wash west columbia sc',
    'auto detailing cayce west columbia',
    'car detailing near columbia airport',
    'mobile detailing sunset sc',
    'car detailing congaree vista',

    // Service-specific
    'interior detailing cayce sc',
    'exterior detailing cayce sc',
    'full detail package cayce sc',
    'monthly car detailing cayce sc',
    'car detailing subscription cayce sc',
    'detailing membership cayce sc',

    // Quality indicators
    'best mobile detailing cayce sc',
    '5 star car detailing cayce sc',
    'top rated detailing cayce sc',
    'professional auto detailing cayce sc',
    'expert car detailing cayce sc',
    'premium car detailing cayce sc'
  ];

  // Service areas specific to Cayce
  const serviceAreas = [
    'West Columbia',
    'Cayce',
    'Springdale',
    'Airport Area',
    'Sunset',
    'Congaree Vista',
    'New Brookland',
    'Riverbanks Zoo Area',
    'Columbia Metropolitan Airport',
    'Guignard Park',
    '12th Street Extension',
    'Knox Abbott Drive'
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Mikah's Auto Detailing - Cayce SC",
    description: "Professional mobile car detailing and ceramic coating services in Cayce, West Columbia, and surrounding areas. Expert paint correction, interior detailing, and premium protection.",
    phone: '(803) 667-8731',
    email: 'mikahsautodetailing@gmail.com',
    address: {
      street: '',
      city: 'Cayce',
      state: 'SC',
      zip: '29033'
    }
  }, aggregateRating, reviews);
  const faqSchema = generateFAQSchema(locationFAQs);
  const enhancedLocalBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedLocalBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('cayce-sc');

  return (
    <>
      <SEOHead
        title="Auto Detailing Cayce SC | Mobile Service | Mikah's Detailing"
        description="Professional mobile auto detailing in Cayce SC. Full detail packages from $200. We come to your location. 5-star service. Call (803) 667-8731 for free quote!"
        keywords={allKeywords.join(', ')}
        canonical="https://mikahsmobiledetailingsc.com/locations/cayce-sc"
        ogDescription="Professional mobile auto detailing in Cayce SC. Full detail packages from $200. We come to your location. 5-star service. Call (803) 667-8731 for free quote!"
        twitterDescription="Professional mobile auto detailing in Cayce SC. Full detail packages from $200. We come to your location. 5-star service. Call (803) 667-8731 for free quote!"
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="Cayce SC"
        locationData={locationData}
        aggregateRating={aggregateRating}
        reviews={reviews}
      />

      <div className="min-h-screen bg-gray-50">
        <Navigation />

      <div className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: 'Cayce SC', path: '/locations/cayce-sc' }
            ]}
          />
        </div>
      </div>


        {/* Hero Video Section - Full Screen */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/90 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Full Service Detailing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Expert Auto Detailing<br />
              <span className="text-primary-300">Cayce & West Columbia, SC</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              ✨ Riverbank's Preferred Detailer
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm sm:text-base mb-8 md:mb-10 px-4">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-primary-300" />
                <span className="font-semibold">19 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-primary-300" />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="/#quote"
                className="w-full sm:w-auto px-8 py-4 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-800 transition text-center shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </a>
              <a
                href="tel:8036678731"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition text-center shadow-lg hover:shadow-xl"
              >
                Call (803) 667-8731
              </a>
            </div>
          </div>
        </div>

        {/* Cayce Neighborhoods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Cayce SC Neighborhoods We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing service throughout Cayce's neighborhoods. We come to you!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cayceNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  to={`/locations/cayce-sc/${neighborhood.slug}`}
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
                to="/locations/cayce-sc/neighborhoods"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All Cayce Neighborhoods
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Cayce Trusts <span className="text-primary-700">Mikah's Auto Detailing</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Results</h3>
                <p className="text-gray-600">
                  Professional-grade products and techniques deliver showroom-quality results every time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Convenience</h3>
                <p className="text-gray-600">
                  We come to you anywhere in Cayce, West Columbia, Airport area, or surrounding neighborhoods.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">100% Satisfaction</h3>
                <p className="text-gray-600">
                  Every service backed by our satisfaction guarantee. 19 five-star reviews prove our commitment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Our <span className="text-primary-700">Cayce Services</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing and ceramic coating services for Cayce, West Columbia, and surrounding areas
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {realServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-700">{service.price}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#quote"
                    className="block w-full py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition text-center"
                  >
                    Book {service.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Areas We <span className="text-primary-700">Serve in Cayce</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing throughout Cayce, West Columbia, and surrounding neighborhoods
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition group"
                >
                  <MapPin className="w-5 h-5 text-primary-700 flex-shrink-0" />
                  <span className="text-gray-700 group-hover:text-primary-700 font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Don't see your area? We serve a 20-mile radius from downtown Columbia.
              </p>
              <a
                href="tel:8036678731"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition"
              >
                <Phone className="w-5 h-5" />
                Call to Confirm Service Area
              </a>
            </div>
          </div>
        </div>

        {/* Internal Linking Matrix */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <InternalLinkingMatrix
              currentLocation="Cayce SC"
              currentSlug="cayce-sc"
              showServiceAreas={true}
              showNearbyServices={true}
            />
          </div>
        </section>

        {/* Landmark and Community Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <LandmarkContent
              location="Cayce SC"
              locationSlug="cayce-sc"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Frequently Asked <span className="text-primary-700">Questions</span>
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Common questions about our Cayce & West Columbia mobile detailing services
            </p>

            <div className="space-y-6">
              {locationFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <ChevronRight className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-9 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Have more questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8036678731"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition"
                >
                  <Phone className="w-5 h-5" />
                  (803) 667-8731
                </a>
                <a
                  href="mailto:mikahsautodetailing@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 border-2 border-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="py-16 bg-primary-700 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                  5.0
                </div>
                <p className="text-primary-100 text-lg">Average Rating</p>
                <p className="text-primary-200 text-sm mt-1">Based on 19 Google reviews</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  <TrendingUp className="w-12 h-12 text-primary-300" />
                  1000+
                </div>
                <p className="text-primary-100 text-lg">Cars Detailed</p>
                <p className="text-primary-200 text-sm mt-1">In Cayce & West Columbia area</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  <Award className="w-12 h-12 text-primary-300" />
                  5+
                </div>
                <p className="text-primary-100 text-lg">Years Experience</p>
                <p className="text-primary-200 text-sm mt-1">Professional auto detailing</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://g.page/r/CdSqpNXvv_3aEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                Read All 19 Google Reviews
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience the best mobile car detailing in Cayce & West Columbia. Professional service, premium results, 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="px-8 py-4 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-800 transition shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote Now
              </a>
              <a
                href="tel:8036678731"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition"
              >
                Call (803) 667-8731
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LocationCayecPage;
