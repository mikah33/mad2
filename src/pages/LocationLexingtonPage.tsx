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
import { lexingtonNeighborhoods } from '../data/neighborhoods';

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
    },
    {
      question: 'Do you detail boats or RVs near Lake Murray?',
      answer: 'Yes! We offer detailing for boats, RVs, and larger vehicles throughout the Lake Murray and Lexington SC area. Our mobile unit comes equipped for larger vehicle detailing. Water spots, mineral deposits, and oxidation from lake exposure are common issues we address. Contact us at (803) 667-8731 for a custom quote based on your vehicle size.'
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
        title="Mobile Car Detailing Lexington SC | Mobile Detailing From $225 | Mikah's"
        description="Top-rated mobile car detailing in Lexington SC. Mobile detailing from $225 with 5.0★ Google rating. Interior, exterior, ceramic coating. We come to you! Call (803) 667-8731."
        keywords={allKeywords.join(', ') + ', auto detailing services columbia sc'}
        canonical="https://mikahsmobiledetailingsc.com/locations/lexington-sc"
        ogDescription="Lexington SC's top mobile car detailing service. Interior, exterior, ceramic coating from $225. Lake Murray area. Call (803) 667-8731."
        twitterDescription="Lexington SC's top mobile car detailing service. Interior, exterior, ceramic coating from $225. Lake Murray area. Call (803) 667-8731."
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="Lexington SC"
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
              Mobile Car Detailing
              <br />
              <span className="text-primary-300">in Lexington SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              Lexington SC's #1 mobile detailing service. Professional mobile car detailing for interior, exterior, ceramic coating & paint correction — all at your location. Serving Lake Murray & all of Lexington County. 5.0★ rated with 19 Google reviews. From $225.
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

        {/* Intro content targeting both keyword variations */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Looking for <strong>mobile car detailing in Lexington SC</strong>? Mikah's Auto Detailing is the highest-rated <strong>mobile detailing</strong> service in the Lexington area, bringing professional-grade equipment and products directly to your home, office, or any location in Lexington County. Whether you're near Lake Murray, Sunset Boulevard, or anywhere along the I-20 corridor, our fully self-contained mobile unit comes to you — no need to drop off your vehicle or wait at a shop. With a perfect 5.0-star Google rating from 19 verified reviews, Lexington residents trust us for everything from basic maintenance details to full ceramic coating installations. Our <strong>mobile detailing in Lexington SC</strong> starts at just $225, and every package includes the convenience of at-your-door service at no extra charge.
              </p>
            </div>
          </div>
        </section>

        {/* Services with ACTUAL pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Mobile Car Detailing Services & Prices — Lexington SC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing at your Lexington, Lake Murray, or Sunset Blvd location. All prices include mobile service — we come to you.
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

        {/* Lexington Neighborhoods - Detailed Pages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Lexington SC Neighborhoods We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Click any neighborhood for detailed service information, local landmarks, and booking
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lexingtonNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  to={`/locations/lexington-sc/${neighborhood.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 hover:shadow-lg transition border border-gray-200 hover:border-primary-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary-700 transition">
                      {neighborhood.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{neighborhood.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.popularServices.map((service, i) => (
                      <span
                        key={i}
                        className="bg-white text-primary-700 px-2 py-1 rounded text-xs font-medium border border-primary-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/locations/lexington-sc/neighborhoods"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition"
              >
                View all Lexington neighborhoods
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Additional Lexington SC Areas
            </h2>
            <p className="text-center text-gray-600 mb-12">
              We also serve these locations throughout greater Lexington & Lake Murray
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Lake Murray Shores', 'Spence Island', 'River Club', 'Oak Grove', 'Red Bank',
                'Gilbert', 'Pelion', 'Batesburg-Leesville', 'Summit', 'Cottages at Murray',
                'Sunset Boulevard', 'Lexington Medical Center'].map((area, i) => (
                <div key={i} className="bg-white rounded-lg p-4 hover:bg-gray-50 transition border border-gray-200">
                  <MapPin className="w-5 h-5 text-primary-700 mb-2" />
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>

            {/* Near Me SEO Block */}
            <div className="mt-12 bg-primary-50 rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Mobile Detailing Near Me in Lexington SC</h3>
              <p className="text-gray-700">
                Searching for mobile detailing near me in Lexington? Mikah's Auto Detailing brings professional car detailing directly to your home or office anywhere in Lexington County. From Lake Murray Shores to Sunset Boulevard, Gilbert to Red Bank — we're your local mobile detailer. Same day availability, from $225. <a href="tel:8036678731" className="text-primary-700 font-semibold hover:underline">Call (803) 667-8731</a> for your free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Local Context Section - Lexington SC */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Services for Lexington and Lake Murray
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding the unique needs of vehicles in the Lake Murray area
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Lexington, South Carolina offers the perfect blend of small-town charm and modern convenience, centered around the beautiful shores of Lake Murray. This 50,000-acre reservoir is the crown jewel of our community, drawing boaters, fishermen, and outdoor enthusiasts throughout the year. For vehicle owners in Lexington, proximity to the lake brings specific detailing challenges that require professional attention. Boats being towed, jet skis on trailers, and frequent trips down dusty lake access roads all take their toll on vehicles that need extra care.
              </p>

              <p>
                The Lake Murray lifestyle means vehicles in Lexington face unique environmental factors. Humidity levels near the water accelerate oxidation on paint and metal components. Sand and grit from lake access points scratch interiors and accumulate in carpet fibers where vacuuming alone cannot reach them. Salt and minerals from lake water splash onto exteriors during boat loading and unloading at marinas like Dreher Island State Park and Spence Island. Our mobile auto detailing service addresses these specific challenges, bringing professional-grade equipment directly to homes throughout the Lake Murray Shores community, Sunset Boulevard corridor, and all Lexington neighborhoods.
              </p>

              <p>
                Living along the Sunset Boulevard shopping corridor means convenience is never far away, but finding time for vehicle maintenance between work, family, and recreation can still be difficult. Lexington families juggling school drop-offs at Lexington High School, activities at the YMCA, and weekends at the lake appreciate the convenience of mobile detailing. Instead of adding another errand to your busy schedule, our service comes to your home in River Club, your office near Lexington Medical Center, or anywhere throughout the Lexington County area. Professional results without leaving your property.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Professional Detailing - Lexington */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Lexington Vehicles Need Professional Care
            </h2>
            <p className="text-center text-gray-600 mb-8">
              The benefits of expert detailing for Lake Murray area residents
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Professional detailing provides protection that DIY methods simply cannot match, especially important for vehicles exposed to the Lake Murray environment. Our ceramic coating service creates a hydrophobic barrier that repels water, mud, and lake minerals before they can bond with your paint. This protection is invaluable for vehicles that regularly tow boats or spend time near the water where splash and spray are inevitable.
              </p>

              <p>
                The South Carolina sun beats down on Lexington just as intensely as Columbia, and vehicles parked without garage protection suffer accelerated paint fade and interior deterioration. Professional UV-protective treatments applied during our detail services shield dashboards, leather seats, and rubber seals from the cracking and fading that prematurely age interiors. Regular professional maintenance extends the life of these components significantly compared to untreated vehicles.
              </p>

              <p>
                For boat owners and outdoor enthusiasts who store equipment in their vehicles, interior detailing becomes particularly important. Sand tracked in from lake beaches, moisture from wet gear, and the general wear from active lifestyles accumulate quickly. Our extraction equipment removes embedded debris from carpet and upholstery fibers, while our ozone treatment option eliminates musty odors that develop from damp conditions. The Factory Reset Package is especially popular among Lexington residents who want to restore interiors worn by lake lifestyle usage.
              </p>

              <p>
                Vehicle resale values in Lexington remain strong, and maintaining your investment through professional detailing protects that value. Whether you drive a family SUV along Sunset Boulevard, a luxury vehicle through the River Club community, or a truck that tows your boat to Dreher Island, regular professional detailing keeps your vehicle looking its best and preserves its market value for when the time comes to sell or trade.
              </p>
            </div>
          </div>
        </section>

        {/* Our Lexington Commitment */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Serving the Lexington Community
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Your local mobile detailing partner
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                As a locally owned business serving Lexington County, we understand that this community values quality, reliability, and personal service. We are not a distant corporate operation but rather your neighbors who take pride in helping Lexington residents maintain their vehicles. Every detail we perform reflects our commitment to excellence and our appreciation for the trust you place in our service.
              </p>

              <p>
                Our mobile service covers all of Lexington including Lake Murray communities, Gilbert, Pelion, Batesburg-Leesville, and everywhere in between. We offer flexible scheduling including same-day appointments when available, understanding that Lexington families have busy schedules between work, school, and weekend lake activities. Early morning and evening appointments can be arranged to work around your commitments.
              </p>

              <p>
                Being IDA certified demonstrates our commitment to professional standards and ongoing education in the latest detailing techniques. We carry comprehensive insurance for your protection and stand behind our work with a satisfaction guarantee. When you choose our service for your Lexington vehicle, you are choosing a local business invested in this community, from supporting local sports teams to participating in Lake Murray area events.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown - Lexington */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Detail Services for Lexington Vehicles
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Professional packages addressing Lake Murray area conditions
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The Basic Detail Package at $225 provides comprehensive care for vehicles maintained on a regular schedule. Interior service includes complete surface cleaning with UV-protective conditioner application, thorough vacuuming, sanitization, and glass cleaning. The exterior receives wheel decontamination, foam wash with pH-balanced products, protective wax application, and wheel and tire dressing. This package is ideal for Lexington residents who want to maintain their vehicle between more intensive services.
              </p>

              <p>
                Our Factory Reset Package at $400 addresses the deeper restoration needs of vehicles exposed to Lake Murray conditions. This includes everything in the Basic Package plus stain removal, full carpet and upholstery shampoo with hot water extraction, and comprehensive brake dust removal. For vehicles that have accumulated sand, lake residue, or wear from outdoor activities, this package restores interiors and exteriors to near-original condition.
              </p>

              <p>
                Ceramic Coating provides long-term protection particularly valuable for Lake Murray area vehicles. After thorough decontamination and any needed paint correction, professional ceramic coating creates a durable barrier against water, minerals, UV rays, and environmental contamination. For boat owners and lake enthusiasts whose vehicles face regular exposure to water and road debris, ceramic coating reduces maintenance effort while providing superior protection lasting years rather than weeks.
              </p>

              <p>
                Paint Correction restores finishes damaged by swirl marks, scratches, and oxidation. Lexington vehicles frequently develop these imperfections from automatic car washes, improper washing techniques, or environmental exposure. Our correction process uses professional compounds and polishes to carefully remove clear coat damage, revealing the original depth and clarity of your paint. Single-stage correction handles light damage while two-stage correction addresses more severe marring.
              </p>
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
