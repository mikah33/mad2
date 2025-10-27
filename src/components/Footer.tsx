import React from 'react';
import { Phone, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-6 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-primary-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-primary-500 transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-primary-500 transition">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="/#quote" className="hover:text-primary-500 transition">
                  Get Quote
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary-500 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services/full-detail" className="flex items-center hover:text-primary-500 transition">
                  <span className="text-primary-500 mr-2">✨</span>
                  Auto Detailing
                </a>
              </li>
              <li>
                <a href="/services/ceramic-coating" className="flex items-center hover:text-primary-500 transition">
                  <span className="text-primary-500 mr-2">✨</span>
                  Ceramic Coatings
                </a>
              </li>
              <li>
                <a href="/services/paint-correction" className="flex items-center hover:text-primary-500 transition">
                  <span className="text-primary-500 mr-2">✨</span>
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="/services/exterior-detailing" className="flex items-center hover:text-primary-500 transition">
                  <span className="text-primary-500 mr-2">✨</span>
                  Marine & RV Detailing
                </a>
              </li>
              <li>
                <a href="/services/mobile-detailing" className="flex items-center hover:text-primary-500 transition">
                  <span className="text-primary-500 mr-2">✨</span>
                  Mobile Service
                </a>
              </li>
            </ul>
          </div>

          {/* Free Estimates */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-2">Free Estimates</h4>
            <p className="text-gray-400 text-sm mb-4">Get your personalized quote today</p>
            <div className="flex gap-3">
              <a
                href="tel:+18036678731"
                className="flex-1 px-4 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition text-center"
              >
                Call Now
              </a>
              <a
                href="/#quote"
                className="flex-1 px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Mikah's Auto Detailing. All rights reserved.
            <br />
            <span className="text-xs">Professional auto detailing services in Columbia, SC</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+18036678731"
              className="flex items-center text-gray-400 hover:text-primary-500 transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              (803) 667-8731
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
