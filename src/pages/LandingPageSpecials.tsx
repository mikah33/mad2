import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, X, Facebook, Instagram } from 'lucide-react';
import BookingTimelineSpecials from '../components/BookingTimelineSpecials';

const LandingPageSpecials: React.FC = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Track page view when component mounts
  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Special Offers - Mobile Auto Detailing',
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
        'value': 275.0,
        'currency': 'USD',
        'event_callback': callback,
      });
    }
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Special Offers - Mobile Auto Detailing Columbia SC | Mikah's Detailing</title>
        <meta
          name="description"
          content="Special pricing on mobile auto detailing in Columbia & Lexington SC. Basic Detail $199, Factory Reset $350. We come to you! Same-day service, 5-star rated."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/lp-specials" />

        {/* Google Tag Manager */}
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WBS8H6B2');
        `}</script>

        {/* Google Ads gtag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16694998422"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Consent Mode v2
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
          });

          gtag('js', new Date());
          gtag('config', 'AW-16694998422', {
            'enhanced_conversions': true,
            'consent_mode': 'enabled'
          });

          // Auto-grant consent after page load for better conversion tracking
          setTimeout(function() {
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted'
            });
          }, 3000);
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#023E8A]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBS8H6B2"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>

        {/* Header - White */}
        <header className="bg-white py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Mikah's Auto Detailing"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-md"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-gray-900">Mikah's Auto Detailing</span>
                <p className="text-xs text-gray-600">MOBILE DETAILING</p>
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

        {/* Hero Section - Video Background */}
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
          <div className="relative max-w-4xl mx-auto">
            {/* Yellow Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#FFD700] text-center mb-4 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Special Offers<br />Limited Time Only!
            </h1>
            <p className="text-lg sm:text-xl text-white/90 text-center mb-4 tracking-wide">
              5 Years of 5-Star Service.
            </p>
            <p className="text-sm sm:text-base text-white/70 text-center mb-8 tracking-widest uppercase" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Mobile · Insured · Trusted By Columbia
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('booking-flow')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition"
              >
                View Specials
              </button>
              <button
                onClick={() => document.getElementById('booking-flow')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#023E8A] hover:bg-[#0077B6] text-white font-bold px-6 py-3 rounded-lg transition shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative h-8 md:h-12 bg-[#FAFAFA]">
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

        {/* Booking Flow */}
        <section id="booking-flow" className="bg-[#FAFAFA] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-16 sm:mb-20 md:mb-24">
              {/* Text on left */}
              <div className="relative z-20 max-w-sm sm:max-w-md md:max-w-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  Special Offers<br />Available Now!
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600">Choose your service:</p>
              </div>
              {/* Mikah cutout - positioned right */}
              <div
                className="absolute -top-12 sm:-top-16 md:-top-20 -right-20 sm:-right-16 md:-right-12 w-72 sm:w-88 md:w-[26rem] lg:w-[30rem] h-auto z-10 pointer-events-none"
              >
                <img
                  src="/me3-optimized.png"
                  alt="Mikah - Your Local Detailer"
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
                <BookingTimelineSpecials />
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

        {/* Final CTA - Dark Blue */}
        <section className="bg-[#012A5E] py-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-[#90E0EF] mb-6">Call or text us now for your special pricing quote</p>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-[#023E8A] font-bold py-4 px-8 rounded-lg text-xl hover:bg-[#E8E8E8] transition transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              (803) 667-8731
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#012A5E] py-6 px-4 text-center text-[#90E0EF] text-sm border-t border-[#023E8A]">
          <p>&copy; {new Date().getFullYear()} Mikah's Auto Detailing • Columbia & Lexington SC</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
          </div>
        </footer>

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

        {/* Call/Text Popup Modal - Same as Navigation */}
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

export default LandingPageSpecials;