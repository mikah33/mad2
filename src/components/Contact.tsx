import React from 'react';
import { Phone, Globe, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-400 mb-8">
              Ready to restore your vehicle's beauty? Get in touch with Mikah's Auto Detailing for
              professional, reliable service in Columbia, SC and surrounding areas.
            </p>

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

          {/* Map & Service Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#023E8A] rounded flex items-center justify-center mr-3">
                📍
              </span>
              Our Service Area
            </h3>

            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl overflow-hidden mb-6 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104913.00000000001!2d-81.0348!3d34.0007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0x668c5c8a4c8a4a8a!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service Area Map"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-[#90E0EF] mr-2">📍</span>
                  Primary Service Areas
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Columbia, SC</li>
                  <li>• Lexington, SC</li>
                  <li>• West Columbia, SC</li>
                  <li>• Irmo, SC</li>
                  <li>• Cayce, SC</li>
                  <li>• Forest Acres, SC</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-[#90E0EF] mr-2">🚗</span>
                  Mobile Service
                </h4>
                <p className="text-sm text-gray-400 mb-3">
                  We come to you! Mobile detailing at your:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Home or Residence</li>
                  <li>• Office or Workplace</li>
                  <li>• Apartment Complex</li>
                  <li>• Other Convenient Location</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="#quote">
                <button className="w-full px-8 py-4 bg-[#023E8A] text-white font-bold rounded-lg hover:bg-[#0077B6] transition">
                  📝 Get Your Free Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
