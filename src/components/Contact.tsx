import React from 'react';
import { Phone, Globe, MapPin, Clock, Star, CheckCircle, MessageCircle } from 'lucide-react';
import { trackPhoneClick, trackTextClick } from '../utils/analytics';

const Contact: React.FC = () => {
  const handlePhoneClick = () => trackPhoneClick('contact');
  const handleTextClick = () => trackTextClick('contact');

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header with Social Proof & Testimonial */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-300">4.9/5 Stars • 31+ Reviews</span>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto mb-6 border border-gray-700">
            <div className="flex text-yellow-400 justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-white italic text-lg mb-3">
              "Mikah did an amazing job on my BMW! The car looks brand new. Professional, punctual, and the mobile service was so convenient. Highly recommended!"
            </p>
            <p className="text-gray-400 text-sm">- Sarah M., Columbia SC</p>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied customers throughout Columbia SC and Lexington SC.
            Professional mobile auto detailing with same-day availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-[#90E0EF] mr-2" />
              Get Your Free Quote Today
            </h3>

            {/* Enhanced Urgent CTA with Multiple Options */}
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-6 mb-8 border-2 border-[#90E0EF] shadow-2xl">
              <div className="flex items-center justify-center mb-3">
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                  LIMITED TIME
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">🔥 Same Day Service Available!</h4>
              <p className="text-sm opacity-90 mb-2 text-center">Book today, get detailed today. Call now for immediate scheduling.</p>
              <p className="text-xs text-[#CAF0F8] mb-4 text-center font-semibold">
                ⚡ Next available slot: Today at 2:00 PM
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <a
                  href="tel:+18036678731"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center px-6 py-3 bg-white text-[#023E8A] font-bold rounded-lg hover:bg-[#CAF0F8] transition-all shadow-lg transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (803) 667-8731
                </a>

                <a
                  href="sms:+18036678731?body=Hi! I'd like to book a mobile detailing service. When is your next available slot?"
                  onClick={handleTextClick}
                  className="flex items-center justify-center px-6 py-3 bg-[#90E0EF] text-[#023E8A] font-bold rounded-lg hover:bg-white transition-all shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Text for Quote
                </a>
              </div>

              <div className="text-center">
                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-[#CAF0F8] hover:text-white underline font-medium"
                >
                  📝 Or get instant online quote below
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call or Text</p>
                  <a href="tel:8036678731" className="text-xl font-bold hover:text-[#90E0EF]">
                    (803) 667-8731
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Website</p>
                  <a
                    href="https://mikahsmobiledetailingsc.com"
                    className="text-lg hover:text-[#90E0EF]"
                  >
                    mikahsmobiledetailingsc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Service Area</p>
                  <p className="text-lg font-semibold mb-2">Columbia, SC & Surrounding Areas</p>
                  <p className="text-sm text-gray-400">
                    Lexington • West Columbia • Irmo • Cayce • Forest Acres
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#023E8A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Business Hours</p>
                  <p className="text-lg font-semibold">Mon-Sat: 8AM-6PM</p>
                  <p className="text-sm text-gray-400">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Service Areas & Social Proof */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#023E8A] rounded flex items-center justify-center mr-3">
                📍
              </span>
              Serving 500+ Happy Customers
            </h3>

            {/* Customer Density Stats */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 mb-6 border border-gray-600">
              <h4 className="font-bold text-lg mb-4 text-center text-[#90E0EF]">📊 Local Customer Activity</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-2xl font-bold text-white">31+</span>
                  <p className="text-xs text-gray-400">5-Star Reviews</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">500+</span>
                  <p className="text-xs text-gray-400">Cars Detailed</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">2-4</span>
                  <p className="text-xs text-gray-400">Daily Bookings</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">15min</span>
                  <p className="text-xs text-gray-400">Avg Response</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800 rounded-xl overflow-hidden mb-6 h-64 border-2 border-gray-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104913.00000000001!2d-81.0348!3d34.0007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0x668c5c8a4c8a4a8a!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mikah's Mobile Detailing Service Area - Columbia SC"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-[#90E0EF] mr-2">📍</span>
                  Primary Service Areas
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Columbia, SC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Lexington, SC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    West Columbia, SC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Irmo, SC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Cayce, SC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Forest Acres, SC
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-[#90E0EF] mr-2">🚗</span>
                  Mobile Convenience
                </h4>
                <p className="text-sm text-gray-300 mb-3 font-medium">
                  We come to you! Service at your:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Home or Residence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Office or Workplace
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Apartment Complex
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#90E0EF] mr-2" />
                    Any Convenient Location
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-bold rounded-lg hover:from-[#0077B6] hover:to-[#023E8A] transition-all shadow-lg transform hover:scale-105"
              >
                📝 Get Your Free Quote - Same Day Service Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
