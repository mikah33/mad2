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
import { columbiaNeighborhoods } from '../data/neighborhoods';

export const LocationColumbiaPage = () => {
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

  // FAQs based on REAL search terms
  const locationFAQs = [
    {
      question: 'How much does mobile detailing cost in Columbia SC?',
      answer: 'Mobile detailing in Columbia SC starts at $225 for our Basic Detail Package and $400 for our Factory Reset Package. Ceramic coatings, paint corrections, and specialty services require quotes based on vehicle size and condition. We provide free quotes for all Columbia residents.'
    },
    {
      question: 'What is the best mobile car detailing service in Columbia SC?',
      answer: "Mikah's Auto Detailing is the top-rated mobile detailing service in Columbia SC with a 5.0-star rating from 19 Google reviews. We're IDA certified, fully insured, and bring professional equipment directly to your location anywhere in Columbia, Lexington, or Irmo."
    },
    {
      question: 'Do you offer mobile car detailing in Lexington SC?',
      answer: 'Yes! We provide full mobile car detailing service throughout Lexington SC. Our mobile unit comes equipped with everything needed for professional interior detailing, exterior washing, ceramic coating, and paint correction at your home or office in Lexington.'
    },
    {
      question: 'Where can I find car detailing on Two Notch Road in Columbia SC?',
      answer: 'We provide mobile car detailing service to all locations along Two Notch Road in Columbia SC. Instead of traveling to a shop, we come directly to you with our fully-equipped mobile unit. Service available for homes, apartments, and businesses on Two Notch.'
    },
    {
      question: 'How long does interior car detailing take in Columbia SC?',
      answer: 'Interior car detailing in Columbia SC typically takes 2-4 hours depending on the package. Our Basic Detail Package takes 2-3 hours while our Factory Reset Package with shampoo & extraction takes 3-4 hours. We work at your location so you can continue your day while we detail your vehicle.'
    },
    {
      question: 'Do you offer mobile car wash services in Columbia SC?',
      answer: 'Yes! Our mobile car wash service in Columbia SC includes hand washing, waxing, and exterior detailing starting at $225 for our Basic Detail Package. We bring water, power, and all equipment needed. Perfect for Columbia residents who want professional results without leaving home.'
    },
    {
      question: 'What areas of Columbia SC do you serve for mobile detailing?',
      answer: 'We serve all of Columbia SC including Downtown, Five Points, The Vista, Shandon, Forest Acres, Two Notch Road, Harbison, and surrounding areas. We also service West Columbia, Lexington, Irmo, Cayce, and all locations within 25 miles of Columbia.'
    },
    {
      question: 'Can I find reviews for mobile detailing in Columbia SC?',
      answer: 'Yes! We have 19 verified Google reviews with a perfect 5.0-star rating. Customers praise our professional mobile service, attention to detail, and convenient at-home detailing. Search "Mikah\'s Auto Detailing Columbia SC" on Google to read our reviews.'
    },
    {
      question: 'Where can I get car detailing in Columbia SC?',
      answer: "Mikah's Auto Detailing offers professional car detailing throughout Columbia SC. As a mobile service, we come directly to your home, office, or any location in the Columbia area. We serve Downtown, Five Points, The Vista, Shandon, Forest Acres, Harbison, Northeast Columbia, and all surrounding neighborhoods. No need to drop off your vehicle — we bring everything to you. Call (803) 667-8731 to schedule."
    },
    {
      question: "What's the best mobile detailing service in Columbia SC?",
      answer: "Mikah's Auto Detailing is Columbia SC's highest-rated mobile detailing service with a perfect 5.0-star Google rating from 19 verified reviews. We're IDA certified, fully insured, and offer comprehensive mobile detailing packages starting at $225. Our mobile unit is fully self-contained with onboard water, power, and professional-grade equipment — we can detail your vehicle anywhere in Columbia SC."
    }
  ];

  // All keywords
  const allKeywords = [
    'mobile detailing columbia sc', 'mobile detailing columbia sc prices', 'car detailing columbia sc',
    'mobile detailing columbia sc reviews', 'best mobile detailing columbia sc', 'mobile detailing columbia sc cost',
    'interior car detailing columbia sc', 'car detailing two notch columbia sc', 'mobile car detailing lexington sc',
    'mobile car detailing columbia sc', 'top rated car detailing columbia sc', 'car detailing columbia sc prices',
    'best mobile car detailing columbia sc', 'car detailing west columbia sc', 'mobile car wash columbia sc',
    'mobile car wash columbia sc prices', 'full service mobile car wash columbia sc', 'best mobile car wash columbia sc',
    'full service car wash columbia sc', 'car detailing near me columbia sc', 'mobile car detailing near me columbia sc',
    'interior car detailing near me columbia sc', 'car detailing near me columbia sc prices',
    'best car detailing near me columbia sc', 'best car detailing columbia sc',
    'mobile interior car detailing columbia sc', 'interior car detailing columbia sc prices',
    'interior car detailing columbia sc reviews', 'best interior car detailing columbia sc',
    'interior car detailing columbia sc cost', 'best car detailing columbia sc reviews',
    'best car detailing columbia sc reddit', 'mobile best car detailing columbia sc',
    'best car detailing columbia sc prices', 'best car detailing columbia sc cost'
  ];

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: "Mikah's Auto Detailing - Columbia SC",
      description: 'Professional mobile car detailing in Columbia SC. Interior detailing, exterior detailing, ceramic coating, paint correction. 5.0★ rated with 19 reviews.',
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: '',
        city: 'Columbia',
        state: 'SC',
        zip: '29201'
      }
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(locationFAQs);
  const enhancedLocalBusinessSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [gmbSchema, localBusinessSchema, faqSchema, enhancedLocalBusinessSchema];

  // Get location-specific data for advanced schema
  const locationData = getLocationData('columbia-sc');

  return (
    <>
      <SEOHead
        title="Car Detailing Columbia SC | Mobile Detailing From $225 | Mikah's"
        description="Best car detailing in Columbia SC. 5.0★ rated mobile detailing from $225. Interior, exterior, ceramic coating & paint correction — we come to you! Call (803) 667-8731."
        keywords="auto detailing services columbia sc, auto detailing services in columbia sc, columbia detailing, columbia auto detail, auto detail columbia, columbia mobile detailing, detailing columbia sc, car detailing columbia sc, mobile auto detailing columbia sc, professional car detailing columbia, best columbia detailing"
        canonical="https://mikahsmobiledetailingsc.com/locations/columbia-sc"
        ogDescription="Best car detailing in Columbia SC. 5.0★ rated mobile detailing from $225. Interior, exterior, ceramic coating & paint correction — we come to you! Call (803) 667-8731."
        twitterDescription="Best car detailing in Columbia SC. 5.0★ rated mobile detailing from $225. Interior, exterior, ceramic coating & paint correction — we come to you! Call (803) 667-8731."
        schema={schemas}
      />

      <AdvancedSchemaMarkup
        location="Columbia SC"
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
              { label: 'Columbia SC', path: '/locations/columbia-sc' }
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
              <span className="text-sm md:text-base font-semibold">Mobile Detailing Columbia, SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Car Detailing
              <br />
              <span className="text-primary-300">Columbia SC</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              Columbia SC's #1 car detailing service — mobile detailing that comes to you. Interior & exterior detailing, ceramic coating, paint correction at your location. 5.0★ rated with 19 Google reviews. From $225.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-300">
              ✨ Trusted. Local. Exceptional Results.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5.0★ (19 Reviews)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>IDA Certified</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Same Day</span>
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

        {/* Intro content targeting broader "car detailing columbia sc" keyword */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Looking for professional <strong>car detailing in Columbia SC</strong>? Mikah's Auto Detailing is the top-rated <strong>mobile detailing in Columbia SC</strong> — we bring the detail shop to your driveway, office parking lot, or anywhere in the Columbia metro. Our fully equipped mobile unit handles everything from basic maintenance details to full ceramic coating installations without you ever leaving home. With a perfect 5.0-star Google rating, IDA certification, and packages starting at just $225, Columbia residents trust us for <strong>mobile car detailing</strong> that delivers shop-quality results with unmatched convenience. Whether you're in Five Points, Forest Acres, Harbison, or anywhere along the I-20 or I-26 corridors, we come to you — no drop-offs, no waiting rooms, no hassle.
              </p>
            </div>
          </div>
        </section>

        {/* Columbia Neighborhoods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Columbia SC Neighborhoods We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing service throughout Columbia's finest neighborhoods. We come to you!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {columbiaNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  to={`/locations/columbia-sc/${neighborhood.slug}`}
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
                to="/locations/columbia-sc/neighborhoods"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All Columbia Neighborhoods
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services with ACTUAL pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Columbia Auto Detail Services & Pricing
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional Columbia detailing at your location. Expert auto detail columbia services for all vehicles. Mobile service included in all pricing.
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
              Columbia SC Areas We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional mobile detailing service throughout greater Columbia
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Downtown Columbia', 'Two Notch Road', 'Five Points', 'The Vista', 'Shandon',
                'Forest Acres', 'Harbison', 'West Columbia', 'Lexington SC', 'Irmo SC',
                'Cayce SC', 'Blythewood SC'].map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                  <MapPin className="w-5 h-5 text-primary-700 mb-2" />
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>

            {/* Near Me SEO Block */}
            <div className="mt-12 bg-primary-50 rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Looking for Car Detailing Near Me in Columbia SC?</h3>
              <p className="text-gray-700">
                Mikah's Auto Detailing is the highest-rated mobile car detailing near me service in Columbia SC. We bring professional detailing equipment, purified water, and premium products directly to your driveway, apartment complex, or office parking lot. No need to search for "mobile detailing near me" — we serve all of Columbia, from Downtown to Northeast Columbia, same day availability. <a href="tel:8036678731" className="text-primary-700 font-semibold hover:underline">Call (803) 667-8731</a> for a free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Local Context Section - Columbia SC */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Services in Columbia, SC
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding Columbia's unique environment and why your vehicle deserves professional care
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Columbia, South Carolina is a city where southern charm meets urban energy. From the historic grounds of the South Carolina State House to the bustling corridors near the University of South Carolina campus, our capital city demands vehicles that look their best. Whether you are commuting down Two Notch Road, heading to a Gamecocks game at Williams-Brice Stadium, or taking the family to Riverbanks Zoo, a professionally detailed vehicle reflects the pride Columbia residents take in their community.
              </p>

              <p>
                Living in Columbia means dealing with weather conditions that can be particularly tough on vehicles. Our hot, humid summers with temperatures regularly exceeding 95 degrees cause intense UV damage to paint, dashboards, and leather interiors. The brutal South Carolina sun fades paint, cracks vinyl, and deteriorates rubber seals faster than anywhere else on the East Coast. Then there is pollen season, when that yellow-green dust coats every surface from March through May, creating an acidic layer that etches into clear coats if not removed properly. The red clay soil found throughout the Midlands leaves stubborn stains on wheel wells, rocker panels, and undercarriages that standard car washes simply cannot remove.
              </p>

              <p>
                For busy Columbia professionals working in the Vista, Forest Acres, or along the Harbison corridor, finding time for vehicle maintenance is challenging. That is exactly why mobile auto detailing services in Columbia, SC have become essential for residents who value both their time and their vehicles. Instead of spending your Saturday waiting at a detail shop, our mobile service comes directly to your home in Shandon, your office near Colonial Life Arena, or wherever you need us throughout the greater Columbia area. We bring professional-grade equipment, purified water systems, and premium products directly to your location.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Professional Detailing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Professional Detailing Matters in Columbia
            </h2>
            <p className="text-center text-gray-600 mb-8">
              The difference between DIY and professional auto detailing services Columbia SC residents trust
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Many vehicle owners attempt DIY detailing, but there is a significant difference between a weekend wash and professional auto detailing services in Columbia, SC. Professional detailers use specialized tools like dual-action polishers, steam cleaners, and extraction equipment that deliver results impossible to achieve with consumer products. We understand paint correction at a molecular level, knowing exactly how much clear coat removal is safe and how to restore oxidized finishes to showroom condition.
              </p>

              <p>
                Protection against South Carolina's relentless sun damage requires more than drugstore wax. Professional ceramic coatings and paint sealants create a sacrificial barrier that absorbs UV rays before they reach your clear coat. This protection is critical for vehicles parked outside in Columbia, where daily sun exposure accelerates paint deterioration. Our ceramic coating services provide 2-5 years of protection, far exceeding the few weeks you might get from consumer wax products.
              </p>

              <p>
                Maintaining your vehicle's value is another compelling reason to invest in professional detailing. In the Columbia automotive market, well-maintained vehicles command significantly higher resale prices. A vehicle with documented professional detailing history signals to buyers that the owner cared for their investment. Regular professional detailing prevents permanent damage from contamination, bird droppings, tree sap, and industrial fallout that cannot be reversed once it bonds with your paint. Our Factory Reset Package restores vehicles to near-original condition, addressing the specific challenges Columbia vehicles face daily.
              </p>

              <p>
                The convenience factor of mobile service cannot be overstated for Columbia residents. Rather than driving to a shop, waiting for hours, then driving home, you can continue your normal routine while we work. Work from home while we detail your car in the driveway. Stay productive at your office near Main Street while we transform your vehicle in the parking lot. This time savings alone makes professional mobile detailing the smart choice for busy Columbia professionals and families.
              </p>
            </div>
          </div>
        </section>

        {/* Our Columbia Commitment */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Commitment to Columbia
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Local business, local owner, exceptional results
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Mikah's Auto Detailing is not a franchise or corporate chain. We are a locally owned and operated business serving the Columbia community with the personal attention that only a local business can provide. As a Columbia area resident, I understand the specific challenges our vehicles face and take pride in helping my neighbors protect their investments.
              </p>

              <p>
                We offer same-day service availability for most appointments because we know life happens and schedules change. Need your car detailed before an important meeting downtown? Have unexpected guests arriving and want your vehicle presentable? We work to accommodate the real scheduling needs of Columbia residents. Our service area covers not just Columbia proper, but extends throughout the Midlands including West Columbia, Cayce, Lexington, Irmo, Blythewood, and everywhere in between.
              </p>

              <p>
                Being IDA certified means we adhere to the highest standards in the detailing industry. We carry full insurance coverage for your peace of mind, and we stand behind every detail with a satisfaction guarantee. When you choose our auto detailing services in Columbia, SC, you are supporting a local business that reinvests in this community. From sponsoring local youth sports to participating in community events, we are committed to Columbia beyond just the services we provide.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Our Columbia Detail Services Include
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Comprehensive auto detailing tailored for Columbia area vehicles
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Our Basic Detail Package at $225 addresses the everyday challenges Columbia vehicles face. The interior service includes a thorough wipe-down of all surfaces, application of UV-protective conditioner to prevent the dashboard cracking common in South Carolina heat, complete vacuuming, sanitization to eliminate bacteria and allergens, and streak-free glass cleaning. The exterior portion includes wheel decontamination to remove brake dust buildup, a foam wash using pH-balanced soap that is safe for all finishes, application of protective wax to guard against UV damage, and wheel and tire dressing for that fresh, finished look.
              </p>

              <p>
                The Factory Reset Package at $400 takes detailing to the next level for vehicles that need deeper restoration. This service includes everything in the Basic Package plus light stain removal targeting those coffee spills and food marks that accumulate over time, full carpet and upholstery shampoo with hot water extraction to pull embedded dirt from fabric fibers, and comprehensive brake dust removal that addresses the iron contamination embedded in your wheels. This package is particularly popular among Columbia residents dealing with red clay staining and the accumulated pollen residue that builds up during our extended allergy season.
              </p>

              <p>
                Our Ceramic Coating service provides the ultimate protection for Columbia's harsh conditions. We begin with thorough decontamination including clay bar treatment to remove bonded surface contamination. Paint correction follows if needed, removing swirl marks and light scratches that detract from the finish. The professional-grade ceramic coating is then applied in a controlled environment, creating a semi-permanent bond with your paint that provides hydrophobic water-beading, enhanced gloss, and protection from UV rays, bird droppings, and tree sap for years rather than weeks. For vehicles regularly parked under Columbia's oak trees or exposed to the intense summer sun, ceramic coating is the best investment you can make in paint protection.
              </p>

              <p>
                Paint Correction services restore damaged finishes that have accumulated swirl marks, scratches, and oxidation over time. Using professional-grade compounds and polishes with dual-action and rotary polishers, we carefully remove clear coat imperfections to reveal the original depth and clarity of your paint. Single-stage correction addresses light damage while our two-stage correction is reserved for heavily marred finishes requiring more aggressive treatment. Every paint correction includes finishing polish and protection to maintain results.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking Matrix */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <InternalLinkingMatrix
              currentLocation="Columbia SC"
              currentSlug="columbia-sc"
              showServiceAreas={true}
              showNearbyServices={true}
            />
          </div>
        </section>

        {/* Landmark and Community Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <LandmarkContent
              location="Columbia SC"
              locationSlug="columbia-sc"
            />
          </div>
        </section>

        {/* FAQs based on REAL search terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mobile Detailing Columbia SC - Frequently Asked
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
              Ready for Professional Mobile Detailing?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Best mobile car detailing in Columbia SC. 5.0★ rating from 19 reviews. We come to you!
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
              Serving Columbia, Lexington, Irmo, West Columbia, Two Notch Road & all surrounding areas
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationColumbiaPage;
