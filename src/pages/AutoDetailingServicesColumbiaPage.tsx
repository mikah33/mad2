import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Facebook, Instagram, Star, CheckCircle, MapPin, Clock, Shield, Award, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { aggregateRating, reviews } from '../data/reviews';
import BookingTimeline from '../components/BookingTimeline';
import Footer from '../components/Footer';

const AutoDetailingServicesColumbiaPage: React.FC = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Track page view when component mounts
  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Auto Detailing Services Columbia SC',
        page_location: window.location.href,
        send_to: 'AW-16694998422'
      });
    }
  }, []);

  // Same tracking function as Navigation component
  const gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (typeof url !== 'undefined') {
        window.location.href = url;
      }
    };

    if ((window as any).gtag) {
      const enhancedData: any = {};
      if (Object.keys(enhancedData).length > 0) {
        (window as any).gtag('set', 'user_data', enhancedData);
      }

      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
        'value': 225.0,
        'currency': 'USD',
        'event_callback': callback,
      });
    }
    return false;
  };

  // FAQs optimized for "auto detailing services in columbia, sc"
  const seoFAQs = [
    {
      question: 'What auto detailing services do you offer in Columbia, SC?',
      answer: 'We offer comprehensive auto detailing services in Columbia, SC including interior detailing, exterior detailing, ceramic coating, paint correction, and full detail packages. Our mobile service brings professional auto detailing directly to your home or office anywhere in Columbia.'
    },
    {
      question: 'How much do auto detailing services cost in Columbia, SC?',
      answer: 'Our auto detailing services in Columbia, SC start at $225 for our Basic Detail Package. The Factory Reset Package is $400 and includes full interior shampoo and extraction. Ceramic coating and paint correction services are quoted based on vehicle size and condition.'
    },
    {
      question: 'Do you provide mobile auto detailing services in Columbia, SC?',
      answer: 'Yes! All our auto detailing services in Columbia, SC are mobile. We come to your location with professional equipment and supplies. No need to drop off your car - we bring the detail shop to you in Columbia, Lexington, Irmo, and surrounding areas.'
    },
    {
      question: 'What areas near Columbia, SC do you serve for auto detailing?',
      answer: 'Our auto detailing services cover all of Columbia, SC plus Lexington, Irmo, West Columbia, Cayce, Blythewood, Forest Acres, Harbison, and surrounding areas within 25 miles. We serve both residential and commercial locations.'
    },
    {
      question: 'How long does auto detailing take in Columbia, SC?',
      answer: 'Auto detailing service times vary: Basic Detail takes 2-3 hours, Factory Reset takes 3-4 hours, and ceramic coating takes 1-2 days. We work at your Columbia location so you can continue your day while we detail your vehicle.'
    },
    {
      question: 'Why choose professional auto detailing services in Columbia, SC?',
      answer: "Professional auto detailing in Columbia, SC protects your vehicle from South Carolina's intense sun, humidity, and red clay. Our IDA-certified detailers use commercial-grade products that provide superior protection compared to DIY methods, maintaining your vehicle's value."
    }
  ];

  // Generate schemas
  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: "Mikah's Auto Detailing - Auto Detailing Services Columbia SC",
      description: 'Professional auto detailing services in Columbia, SC. Mobile interior & exterior detailing, ceramic coating, paint correction. 5-star rated, IDA certified.',
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

  const faqSchema = generateFAQSchema(seoFAQs);
  const enhancedSchema = generateEnhancedLocalBusinessSchema();
  const schemas = [localBusinessSchema, faqSchema, enhancedSchema];

  return (
    <>
      <SEOHead
        title="Auto Detailing Services in Columbia, SC | Mobile Detailing | Mikah's"
        description="Professional auto detailing services in Columbia, SC. Mobile detailing, ceramic coating, paint correction, interior & exterior packages. 5-star rated. Call (803) 667-8731!"
        keywords="auto detailing services in columbia sc, auto detailing services columbia sc, car detailing columbia sc, mobile auto detailing columbia, professional auto detailing columbia sc, auto detailing near me columbia"
        canonical="https://mikahsmobiledetailingsc.com/auto-detailing-services-columbia-sc"
        schema={schemas}
      />

      <div className="min-h-screen bg-[#023E8A]">
        {/* ============================================ */}
        {/* SECTION 1: Header - Identical to LandingPage */}
        {/* ============================================ */}
        <header className="bg-white py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Mikah's Auto Detailing - Auto detailing services in Columbia, SC"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-md"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-gray-900">Mikah's Auto Detailing</span>
                <p className="text-xs text-gray-600">AUTO DETAILING SERVICES COLUMBIA SC</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Got questions? We're here to help you!</p>
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="text-xl sm:text-2xl font-bold text-[#023E8A] hover:text-[#0077B6] transition"
              >
                (803) 667-8731
              </button>
            </div>
          </div>
        </header>

        {/* ============================================ */}
        {/* SECTION 2: Hero - Identical to LandingPage */}
        {/* ============================================ */}
        <section className="relative py-24 sm:py-32 px-4">
          {/* Fallback Background Image - Shows immediately */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/exterior6.jpg)' }}
          />

          {/* Video Background - Loads with optimization */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/exterior6.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            webkit-playsinline="true"
          >
            <source src="/lp-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          {/* Wave overlay at bottom of hero */}
          <svg
            className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-10"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a2a3a" stopOpacity="0" />
                <stop offset="50%" stopColor="#1a2a3a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1a2a3a" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0 80L48 85C96 90 192 100 288 110C384 120 480 130 576 125C672 120 768 100 864 90C960 80 1056 80 1152 85C1248 90 1344 100 1392 105L1440 110V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0Z"
              fill="url(#waveGradient)"
            />
          </svg>
          <div className="relative z-20 max-w-4xl mx-auto">
            {/* Yellow Headline - SEO Optimized */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#FFD700] text-center mb-4 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Auto Detailing Services<br />in Columbia, SC
            </h1>
            <p className="text-lg sm:text-xl text-white/90 text-center mb-4 tracking-wide">
              5 Years of 5-Star Service.
            </p>
            <p className="text-sm sm:text-base text-white/70 text-center mb-8 tracking-widest uppercase" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Mobile · Insured · Trusted By Columbia
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition"
              >
                Our Services
              </button>
              <button
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="bg-[#023E8A] hover:bg-[#0077B6] text-white font-bold px-6 py-3 rounded-lg transition shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative h-8 md:h-12 bg-white">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L48 8.3C96 16.7 192 33.3 288 41.7C384 50 480 50 576 45.8C672 41.7 768 33.3 864 29.2C960 25 1056 25 1152 29.2C1248 33.3 1344 41.7 1392 45.8L1440 50V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"
              fill="#1a2a3a"
            />
          </svg>
        </div>

        {/* ============================================ */}
        {/* SEO CONTENT SECTIONS BELOW */}
        {/* ============================================ */}

        {/* Trust Badges Section */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#CAF0F8] rounded-full flex items-center justify-center mb-3">
                  <Star className="w-7 h-7 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-900">5.0 Star Rated</p>
                <p className="text-sm text-gray-600">19 Google Reviews</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#CAF0F8] rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-7 h-7 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-900">IDA Certified</p>
                <p className="text-sm text-gray-600">Professional Standards</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#CAF0F8] rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-7 h-7 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-900">Mobile Service</p>
                <p className="text-sm text-gray-600">We Come to You</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#CAF0F8] rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-7 h-7 text-[#023E8A]" />
                </div>
                <p className="font-bold text-gray-900">Same Day</p>
                <p className="text-sm text-gray-600">Appointments Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Auto Detailing Services Section */}
        <section id="services-section" className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Professional Auto Detailing Services in Columbia, SC
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Looking for auto detailing services in Columbia, SC? Mikah's Auto Detailing brings professional,
              showroom-quality results directly to your home or office. Our mobile auto detailing services
              are perfect for busy Columbia residents who want convenience without sacrificing quality.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/gallery/exterior-detail-1.jpg"
                  alt="Professional auto detailing services Columbia SC - exterior detail results"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Exterior Auto Detailing</h3>
                  <p className="text-gray-700 mb-4">
                    Our exterior auto detailing services in Columbia, SC include hand wash, clay bar treatment,
                    paint decontamination, and protective wax or sealant application. We protect your vehicle
                    from South Carolina's intense UV rays and environmental contaminants.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Hand wash & foam bath
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Clay bar decontamination
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Protective wax or sealant
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Wheels & tires dressed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/gallery/interior-detail-1.jpg"
                  alt="Interior auto detailing services Columbia SC - deep cleaning results"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Interior Auto Detailing</h3>
                  <p className="text-gray-700 mb-4">
                    Our interior auto detailing services in Columbia, SC transform your vehicle's cabin.
                    We deep clean every surface, condition leather, extract stains, and eliminate odors
                    for a fresh, like-new interior.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Deep vacuum & extraction
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Leather conditioning
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Stain & odor removal
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      UV protection applied
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Award className="w-10 h-10 text-[#023E8A] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ceramic Coating</h3>
                <p className="text-gray-600 text-sm">
                  Premium ceramic coating services in Columbia, SC. 2-5 years of paint protection with incredible gloss.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Star className="w-10 h-10 text-[#023E8A] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paint Correction</h3>
                <p className="text-gray-600 text-sm">
                  Remove swirl marks, scratches, and oxidation. Professional paint correction restores showroom shine.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <CheckCircle className="w-10 h-10 text-[#023E8A] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Full Detail Packages</h3>
                <p className="text-gray-600 text-sm">
                  Complete interior + exterior auto detailing packages starting at $225. Everything your car needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Columbia Chooses Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Why Columbia Chooses Our Auto Detailing Services
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              South Carolina's climate presents unique challenges for vehicle care. Hot summers, high humidity,
              pollen season, and red clay all take a toll on your car. Our auto detailing services in Columbia, SC
              are specifically designed to combat these local conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">UV Protection for SC Sun</h3>
                    <p className="text-gray-600">Our detailing products protect against South Carolina's intense UV rays that fade paint and crack interiors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Red Clay Removal Experts</h3>
                    <p className="text-gray-600">We know how to properly remove stubborn red clay without damaging your paint or wheel finish.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Pollen Season Ready</h3>
                    <p className="text-gray-600">Our ceramic coatings and sealants make pollen easy to wash off during Columbia's notorious pollen season.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Humidity Defense</h3>
                    <p className="text-gray-600">We use products that resist humidity-related issues like water spots and interior mildew.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mobile Convenience</h3>
                    <p className="text-gray-600">We come to your Columbia home or office. No need to sit in a waiting room - we work while you do.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Local Owner, Local Trust</h3>
                    <p className="text-gray-600">Mikah is a Columbia local who takes pride in serving the community with exceptional auto detailing services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Auto Detailing Services Near You in Columbia, SC
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Downtown Columbia', 'Forest Acres', 'Harbison', 'Two Notch Road',
                'Five Points', 'The Vista', 'Shandon', 'Lexington SC',
                'Irmo SC', 'West Columbia', 'Cayce SC', 'Blythewood SC'].map((area, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                  <MapPin className="w-5 h-5 text-[#023E8A] mx-auto mb-2" />
                  <span className="font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Flow */}
        <section id="booking-section" className="bg-[#FAFAFA] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-16 sm:mb-20 md:mb-24">
              {/* Text on left */}
              <div className="relative z-20 max-w-sm sm:max-w-md md:max-w-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  Book Auto Detailing<br />Services Now.
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600">Choose your service:</p>
              </div>
              {/* Mikah cutout - positioned right */}
              <div
                className="absolute -top-12 sm:-top-16 md:-top-20 -right-20 sm:-right-16 md:-right-12 w-72 sm:w-88 md:w-[26rem] lg:w-[30rem] h-auto z-10 pointer-events-none"
              >
                <img
                  src="/me3-optimized.png"
                  alt="Mikah - Your local auto detailing services Columbia SC professional"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                  style={{
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <BookingTimeline />
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="https://www.facebook.com/MikahsDetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                <Facebook className="w-5 h-5" />
                View Our Work on Facebook
              </a>
              <a
                href="https://www.instagram.com/mikahsautodetail_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                <Instagram className="w-5 h-5" />
                Follow Us on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              What Columbia Says About Our Auto Detailing Services
            </h2>
            <div className="flex justify-center items-center gap-2 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-gray-900">5.0</span>
              <span className="text-gray-600">(19 Google Reviews)</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#023E8A] text-white flex items-center justify-center font-bold mr-3">
                      {review.authorInitials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{review.reviewText}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Auto Detailing Services Columbia SC - FAQ
            </h2>
            <div className="space-y-4">
              {seoFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Dark Blue */}
        <section className="bg-[#012A5E] py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready for Professional Auto Detailing Services?
            </h2>
            <p className="text-[#90E0EF] mb-6">Call or text us now for your free quote in Columbia, SC</p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-[#023E8A] font-bold py-4 px-8 rounded-lg text-xl hover:bg-[#E8E8E8] transition transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              (803) 667-8731
            </button>
          </div>
        </section>

        <Footer />

        {/* Sticky Mobile CTA - Direct Call with Tracking */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#023E8A] py-2 px-3 md:hidden z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.2)]">
          <a
            href="tel:+18036678731"
            onClick={() => gtag_report_conversion()}
            className="flex items-center justify-center gap-1 w-full text-white font-bold text-base"
          >
            <Phone className="w-4 h-4" />
            Call: (803) 667-8731
          </a>
        </div>

        {/* Call/Text Popup Modal */}
        {isContactPopupOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsContactPopupOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <button
                  onClick={() => setIsContactPopupOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Options */}
              <div className="p-4 space-y-3">
                {/* Call Option */}
                <a
                  href="tel:+18036678731"
                  onClick={() => {
                    gtag_report_conversion();
                    setIsContactPopupOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 bg-[#E8E8E8] hover:bg-[#90E0EF] rounded-xl transition group"
                >
                  <div className="p-3 bg-[#0077B6] text-white rounded-full group-hover:bg-[#023E8A] transition">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Call Us</div>
                    <div className="text-gray-600">(803) 667-8731</div>
                  </div>
                </a>

                {/* Text Option */}
                <a
                  href="sms:+18036678731"
                  onClick={() => {
                    gtag_report_conversion();
                    setIsContactPopupOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 bg-[#E8E8E8] hover:bg-[#90E0EF] rounded-xl transition group"
                >
                  <div className="p-3 bg-[#0077B6] text-white rounded-full group-hover:bg-[#023E8A] transition">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Text Us</div>
                    <div className="text-gray-600">(803) 667-8731</div>
                  </div>
                </a>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => setIsContactPopupOpen(false)}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AutoDetailingServicesColumbiaPage;
