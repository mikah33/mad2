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
      isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
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
            <a href="#home" className="hover:text-orange-500 transition text-sm xl:text-base">Home</a>
            <a href="#services" className="hover:text-orange-500 transition text-sm xl:text-base">Services</a>
            <a href="#projects" className="hidden xl:flex hover:text-orange-500 transition text-sm xl:text-base">Recent Projects</a>
            <a href="#faq" className="hover:text-orange-500 transition text-sm xl:text-base">FAQ</a>
            <a href="#contact" className="hover:text-orange-500 transition text-sm xl:text-base">Contact</a>
            <a href="#locations" className="flex items-center hover:text-orange-500 transition text-sm xl:text-base">
              <MapPin className="w-4 h-4 mr-1" />
              Locations
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => window.location.href = 'tel:+18037319901'}
              className="flex items-center px-2 lg:px-3 xl:px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition text-xs lg:text-sm xl:text-base whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </button>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-2 lg:px-4 xl:px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold text-xs lg:text-sm xl:text-base whitespace-nowrap"
            >
              <span className="hidden lg:inline">Get Free Quote</span>
              <span className="lg:hidden">Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="py-4 space-y-3">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                Recent Projects
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                Contact
              </a>
              <a
                href="#locations"
                onClick={handleLinkClick}
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Locations
              </a>

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-700">
                <button
                  onClick={() => window.location.href = 'tel:+18037319901'}
                  className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
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
