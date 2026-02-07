import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageCircle, X } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if booking section is in view
      const bookingSection = document.getElementById('booking');
      const contactSection = document.getElementById('contact');

      if (bookingSection || contactSection) {
        const section = bookingSection || contactSection;
        const rect = section!.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hide CTA when booking/contact section is visible in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gtag_report_conversion = (conversionType: 'call' | 'text' | 'book') => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
        'value': conversionType === 'book' ? 150.0 : 200.0,
        'currency': 'USD',
      });
    }
    // Meta Pixel tracking
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: `${conversionType === 'call' ? 'Phone Call' : conversionType === 'text' ? 'Text Message' : 'Book Online'} - Sticky CTA`,
        content_category: 'Contact',
        value: 275.0,
        currency: 'USD'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
        {/* Background bar */}
        <div
          className="flex items-stretch shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
          style={{ backgroundColor: '#023E8A' }}
        >
          {/* Call Now Button - Opens Popup */}
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm transition-all active:opacity-80 border-r border-white/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </button>

          {/* Book Online Button */}
          <a
            href="/book"
            onClick={() => gtag_report_conversion('book')}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm transition-all active:opacity-80"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online</span>
          </a>
        </div>
      </div>

      {/* Call/Text Popup Modal */}
      {isContactPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 md:hidden"
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
                  gtag_report_conversion('call');
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
                  gtag_report_conversion('text');
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
    </>
  );
};

export default StickyMobileCTA;
