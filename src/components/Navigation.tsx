import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    // Check immediately on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Google Ads with Consent Mode V2 (2026 requirements)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag if not already loaded
      if (!(window as any).gtag) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
      }

      // Configure Consent Mode V2 with default denied state
      (window as any).gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });

      // Configure Google Ads
      (window as any).gtag('config', 'AW-16694998422', {
        'allow_enhanced_conversions': true,
        'phone_conversion_number': '+18036678731'
      });

      // Auto-grant consent for US users (adjust based on your privacy policy)
      // For EU users, you'll need a proper consent banner
      const isEU = false; // Set to true if you have EU visitors
      if (!isEU) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  // Enhanced Google Ads conversion tracking for phone calls
  const gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (typeof(url) !== 'undefined') {
        window.location.href = url;
      }
    };

    if ((window as any).gtag) {
      // Set enhanced conversion data if available
      const enhancedData: any = {};

      // You can add customer data here for enhanced conversions
      // enhancedData.email = 'customer@example.com'; // Hash this in production
      // enhancedData.phone_number = '+18036678731';

      if (Object.keys(enhancedData).length > 0) {
        (window as any).gtag('set', 'user_data', enhancedData);
      }

      // Track the conversion with enhanced data
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
        'value': 200.0,
        'currency': 'USD',
        'event_callback': callback
      });
    }
    return false;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Force white background ALWAYS for testing
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        borderBottom: '2px solid #023E8A',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img
              src="/logo.jpg"
              alt="M.A.Detailing Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-md"
              loading="eager"
            />
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">Mikah's Auto Detailing</h1>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            <a href="/#home" className="text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">Home</a>
            <div className="relative group">
              <a href="/services" className="text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">Services</a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-3 space-y-2">
                  <a href="/services/ceramic-coating-columbia-lexington" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Ceramic Coating</a>
                  <a href="/services/interior-detailing" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Interior Detailing</a>
                  <a href="/services/exterior-detailing" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Exterior Detailing</a>
                  <a href="/services/mobile-detailing" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Mobile Detailing</a>
                </div>
              </div>
            </div>
            <a href="/blog" className="text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">Blog</a>
            <a href="/#projects" className="hidden xl:flex text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">Recent Projects</a>
            <a href="/faq" className="text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">FAQ</a>
            <a href="/#contact" className="text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">Contact</a>
            <div className="relative group">
              <a href="/locations" className="flex items-center text-gray-700 hover:text-[#023E8A] transition text-sm xl:text-base font-medium">
                <MapPin className="w-4 h-4 mr-1" />
                Locations
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-3 space-y-2">
                  <a href="/locations/columbia-sc" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Columbia SC</a>
                  <a href="/locations/lexington-sc" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Lexington SC</a>
                  <a href="/locations/west-columbia" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">West Columbia</a>
                  <a href="/locations/irmo-sc" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#023E8A] hover:bg-[#CAF0F8] rounded transition">Irmo SC</a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => gtag_report_conversion('tel:+18036678731')}
              className="flex items-center px-2 lg:px-3 xl:px-4 py-2 rounded-lg transition text-xs lg:text-sm xl:text-base whitespace-nowrap bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </button>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-2 lg:px-4 xl:px-6 py-2 text-white rounded-lg transition font-bold text-xs lg:text-sm xl:text-base whitespace-nowrap shadow-lg"
              style={{
                background: 'linear-gradient(to right, #023E8A, #0077B6)',
                boxShadow: '0 10px 15px -3px rgba(0, 119, 182, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #0077B6, #90E0EF)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #023E8A, #0077B6)';
              }}
            >
              <span className="hidden lg:inline">Get Free Quote</span>
              <span className="lg:hidden">Quote</span>
            </button>
          </div>

          {/* Mobile Contact & Hamburger Buttons */}
          <div className="md:hidden flex items-center gap-2">
            {/* Phone/Text Button */}
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="p-2 rounded-lg transition text-white hover:opacity-90 border border-[#0077B6]"
              style={{ backgroundColor: '#0077B6' }}
              aria-label="Call or Text"
            >
              <Phone className="w-6 h-6" />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition text-gray-700 hover:bg-gray-100 border border-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-300 bg-white shadow-lg">
            <div className="py-4 space-y-3">
              <a
                href="/#home"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                Home
              </a>
              <a
                href="/services"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                Services
              </a>
              <a
                href="/blog"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                Blog
              </a>
              <a
                href="/#projects"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                Recent Projects
              </a>
              <a
                href="/faq"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                FAQ
              </a>
              <a
                href="/#contact"
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                Contact
              </a>
              <a
                href="/locations"
                onClick={handleLinkClick}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#CAF0F8] hover:text-[#023E8A] rounded transition font-medium"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Locations
              </a>

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
                <button
                  onClick={() => gtag_report_conversion('tel:+18036678731')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-4 py-3 text-white rounded-lg transition font-bold shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, #023E8A, #0077B6)',
                    boxShadow: '0 10px 15px -3px rgba(0, 119, 182, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #0077B6, #90E0EF)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #023E8A, #0077B6)';
                  }}
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
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
                className="flex items-center gap-4 p-4 bg-[#CAF0F8] hover:bg-[#90E0EF] rounded-xl transition group"
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
                className="flex items-center gap-4 p-4 bg-[#CAF0F8] hover:bg-[#90E0EF] rounded-xl transition group"
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
    </nav>
  );
};

export default Navigation;
