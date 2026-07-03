import React from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import StickyCallButton from './StickyCallButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-20 md:pb-6 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile: CTA First */}
        <div className="md:hidden mb-8">
          <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Get Your Free Quote</h4>
            <p className="text-gray-100 text-sm mb-4">Professional detailing for your vehicle</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+18036678731"
                className="px-4 py-3 bg-white text-[#023E8A] font-bold rounded-lg transition text-center hover:bg-[#CAF0F8]"
              >
                Call (803) 667-8731
              </a>
              <a
                href="/book"
                className="px-4 py-3 bg-[#90E0EF] text-[#023E8A] font-bold rounded-lg transition text-center hover:bg-white"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Our Professional Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#90E0EF]">Our Professional Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/services/mobile-detailing" className="hover:text-[#90E0EF] transition block">
                  Mobile Car Detailing Near Me
                </a>
              </li>
              <li>
                <a href="/services/ceramic-coating" className="hover:text-[#90E0EF] transition block">
                  Ceramic Coating Columbia SC
                </a>
              </li>
              <li>
                <a href="/services/interior-detailing" className="hover:text-[#90E0EF] transition block">
                  Car Interior Detailing
                </a>
              </li>
              <li>
                <a href="/services/exterior-detailing" className="hover:text-[#90E0EF] transition block">
                  Exterior Auto Detailing
                </a>
              </li>
              <li>
                <a href="/services/full-detail" className="hover:text-[#90E0EF] transition block">
                  Full Service Auto Detailing
                </a>
              </li>
              <li>
                <a href="/services/paint-correction" className="hover:text-[#90E0EF] transition block">
                  Paint Correction Services
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#90E0EF] transition block font-semibold">
                  View All Services & Pricing →
                </a>
              </li>
            </ul>
          </div>

          {/* Service Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#90E0EF]">Service Locations</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/locations/columbia-sc" className="hover:text-[#90E0EF] transition block">
                  Mobile Detailing Columbia SC
                </a>
              </li>
              <li>
                <a href="/locations/lexington-sc" className="hover:text-[#90E0EF] transition block">
                  Mobile Detailing Lexington SC
                </a>
              </li>
              <li>
                <a href="/locations/irmo-sc" className="hover:text-[#90E0EF] transition block">
                  Mobile Detailing Irmo SC
                </a>
              </li>
              <li>
                <a href="/locations/west-columbia" className="hover:text-[#90E0EF] transition block">
                  Mobile Detailing West Columbia SC
                </a>
              </li>
              <li>
                <a href="/locations/cayce-sc" className="hover:text-[#90E0EF] transition block">
                  Mobile Detailing Cayce SC
                </a>
              </li>
              <li>
                <a href="/locations" className="hover:text-[#90E0EF] transition block font-semibold">
                  View All Service Areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#90E0EF]">Resources & Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/blog" className="hover:text-[#90E0EF] transition block">
                  Auto Detailing Tips & Guides
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#90E0EF] transition block">
                  Car Detailing Prices
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#90E0EF] transition block">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-[#90E0EF] transition block">
                  Recent Detailing Projects
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-[#90E0EF] transition block">
                  Customer Resources
                </a>
              </li>
              <li>
                <a href="/book" className="hover:text-[#90E0EF] transition block font-semibold">
                  Book Your Detail Today →
                </a>
              </li>
            </ul>
          </div>

          {/* Get Your Free Quote - Desktop Only */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">Get Your Free Quote</h4>
              <p className="text-gray-100 text-sm mb-4">Professional detailing for your vehicle</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+18036678731"
                  className="px-4 py-3 bg-white text-[#023E8A] font-bold rounded-lg transition text-center hover:bg-[#CAF0F8]"
                >
                  Call (803) 667-8731
                </a>
                <a
                  href="/book"
                  className="px-4 py-3 bg-[#90E0EF] text-[#023E8A] font-bold rounded-lg transition text-center hover:bg-white"
                >
                  Request Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            <p className="font-semibold text-gray-300">Mikahs Auto Detailing and Services LLC</p>
            <p className="text-xs mt-1">
              Mobile auto detailing serving Lexington, Columbia &amp; surrounding areas · Lexington, SC 29072
            </p>
            <p className="text-xs mt-1">
              <a href="mailto:mikahsautodetailing@gmail.com" className="hover:text-[#90E0EF] transition">
                mikahsautodetailing@gmail.com
              </a>
              {' '}·{' '}
              <a href="tel:+18036678731" className="hover:text-[#90E0EF] transition">(803) 667-8731</a>
            </p>
            <p className="text-xs mt-2">
              © 2026 Mikahs Auto Detailing and Services LLC. All rights reserved.{' '}
              <a href="/privacy" className="hover:text-[#90E0EF] underline">Privacy Policy</a>
              {' '}·{' '}
              <a href="/terms" className="hover:text-[#90E0EF] underline">Terms of Service</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+18036678731"
              className="flex items-center text-gray-400 hover:text-[#90E0EF] transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              (803) 667-8731
            </a>
            <a
              href="https://www.instagram.com/mikahsautodetail_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition hover:bg-[#023E8A]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/MikahsDetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition hover:bg-[#023E8A]"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Call Button - Mobile Only */}
      <StickyCallButton />
    </footer>
  );
};

export default Footer;
