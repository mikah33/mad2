import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`text-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-luxury-900 shadow-2xl border-b border-gold-500/20' : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="M.A.Detailing Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-md"
            />
            <h1 className="text-lg sm:text-xl font-bold">Mikah's Auto Detailing</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            <a href="#home" className="hover:text-gold-500 transition text-sm xl:text-base font-medium">Home</a>
            <a href="#services" className="hover:text-gold-500 transition text-sm xl:text-base font-medium">Services</a>
            <a href="#projects" className="hidden xl:flex hover:text-gold-500 transition text-sm xl:text-base font-medium">Recent Projects</a>
            <a href="#faq" className="hover:text-gold-500 transition text-sm xl:text-base font-medium">FAQ</a>
            <a href="#contact" className="hover:text-gold-500 transition text-sm xl:text-base font-medium">Contact</a>
            <a href="#locations" className="flex items-center hover:text-gold-500 transition text-sm xl:text-base font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              Locations
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => window.location.href = 'tel:+18037319901'}
              className="flex items-center px-2 lg:px-3 xl:px-4 py-2 bg-white/10 text-white border border-gold-500/30 rounded-lg hover:bg-gold-500/20 hover:border-gold-500 transition text-xs lg:text-sm xl:text-base whitespace-nowrap backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </button>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-2 lg:px-4 xl:px-6 py-2 bg-gradient-to-r from-luxblue-600 to-luxblue-500 text-white rounded-lg hover:from-luxblue-500 hover:to-luxblue-400 transition font-bold text-xs lg:text-sm xl:text-base whitespace-nowrap shadow-lg shadow-luxblue-500/30"
            >
              <span className="hidden lg:inline">Get Free Quote</span>
              <span className="lg:hidden">Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gold-500/20 border border-gold-500/30 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gold-500/20 bg-luxury-900/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                Recent Projects
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                Contact
              </a>
              <a
                href="#locations"
                onClick={handleLinkClick}
                className="flex items-center px-4 py-2 hover:bg-gold-500/20 hover:text-gold-500 rounded transition font-medium"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Locations
              </a>

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-gold-500/20">
                <button
                  onClick={() => window.location.href = 'tel:+18037319901'}
                  className="w-full flex items-center justify-center px-4 py-3 bg-white/10 text-white border border-gold-500/30 rounded-lg hover:bg-gold-500/20 hover:border-gold-500 transition font-semibold backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-4 py-3 bg-gradient-to-r from-luxblue-600 to-luxblue-500 text-white rounded-lg hover:from-luxblue-500 hover:to-luxblue-400 transition font-bold shadow-lg shadow-luxblue-500/30"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
