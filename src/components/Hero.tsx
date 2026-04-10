import React, { useEffect, useRef } from 'react';
import { CheckCircle, Shield, Clock, Star, Phone, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // iOS-optimized video autoplay handling
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Ensure video is muted and ready
          videoRef.current.muted = true;
          videoRef.current.defaultMuted = true;

          // For iOS, we need to load the video first
          if (videoRef.current.readyState < 3) {
            videoRef.current.load();
          }

          // Small delay to ensure video is ready on iOS
          await new Promise(resolve => setTimeout(resolve, 100));

          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };

    // Try to play immediately
    playVideo();

    // iOS requires user interaction for autoplay, so we listen for any touch/click
    const handleInteraction = () => {
      playVideo();
      // Remove listeners after first successful interaction
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    // Listen for various user interaction events
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const handlePhoneClick = () => {
    // Google Ads conversion tracking
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }
    // Meta Pixel lead conversion tracking
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Phone Call - Hero',
        content_category: 'Contact',
        value: 275.0,
        currency: 'USD'
      });
    }
  };

  return (
    <div className="relative text-white min-h-[85vh] md:min-h-[80vh] w-full overflow-hidden flex items-center">
      {/* Fallback Background Image - Shows immediately */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/exterior2.jpg)' }}
      />

      {/* Video Background - Loads lazily after page */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/exterior2.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ WebkitPlaysinline: true } as any}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center md:text-left">
            {/* Trust Signals - Immediately Visible */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-4">
              <div className="flex items-center bg-yellow-400/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-400/40">
                <div className="flex mr-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-yellow-100">5.0 Rated</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                <Users className="w-3.5 h-3.5 mr-1.5 text-[#90E0EF]" />
                <span className="text-sm font-medium">100+ Happy Customers</span>
              </div>
              <div className="flex items-center bg-green-400/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-400/40">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-green-300" />
                <span className="text-sm font-medium text-green-100">Same Day Available</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
              Mobile Auto Detailing in Columbia & Lexington SC
            </h1>

            <p className="text-lg md:text-xl mb-4 text-gray-100 max-w-xl">
              We come to your home or office. Professional interior & exterior detailing from <span className="font-bold text-white">$225</span>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                <CheckCircle className="w-4 h-4 mr-1.5 text-[#90E0EF] flex-shrink-0" />
                <span>We Come To You</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                <Shield className="w-4 h-4 mr-1.5 text-[#90E0EF] flex-shrink-0" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                <CheckCircle className="w-4 h-4 mr-1.5 text-[#90E0EF] flex-shrink-0" />
                <span>Free Quotes</span>
              </div>
            </div>

            {/* Primary CTA - Single Clear Action */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center mb-4">
              <a href="#booking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-white text-lg font-bold rounded-lg transition shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 animate-pulse hover:animate-none">
                  Get Your Free Quote Now
                </button>
              </a>
            </div>

            {/* Phone Number - Prominent */}
            <div className="flex justify-center md:justify-start">
              <a
                href="tel:+18036678731"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-white hover:text-[#90E0EF] transition group"
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-sm text-gray-300 block">Call or Text Now</span>
                  <span className="text-xl font-bold">(803) 667-8731</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Quick Quote Form (Above Fold) */}
          <div className="hidden md:block">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/50 max-w-md ml-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Get Your Free Quote</h3>
                <p className="text-sm text-gray-600">Same-day appointments available</p>
              </div>

              <form className="space-y-3" action="#booking" method="get">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent text-gray-800"
                />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent text-gray-800 bg-white">
                  <option value="">Select a Service</option>
                  <option value="basic">Basic Detail - $200</option>
                  <option value="factory">Factory Reset - $400</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="other">Other Services</option>
                </select>
                <a href="#booking" className="block">
                  <button
                    type="button"
                    className="w-full py-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold rounded-lg hover:from-[#0077B6] hover:to-[#023E8A] transition shadow-lg transform hover:scale-[1.02]"
                  >
                    Get My Free Quote
                  </button>
                </a>
              </form>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-green-500" />
                    <span>Response in 1 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
