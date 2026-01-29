import React from 'react';
import { CheckCircle, Truck, ThumbsUp, Star, Phone, Shield, Clock } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const handlePhoneClick = () => {
    // Google Ads conversion tracking (if global function exists)
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }

    // Meta Pixel lead conversion tracking
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Phone Call - TrustBadges',
        content_category: 'Contact',
        value: 275.0,
        currency: 'USD'
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-6 md:py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Why Choose Mikah's Auto Detailing?</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Join hundreds of satisfied customers throughout Columbia SC and Lexington SC</p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mb-4 md:mb-8">
          <div className="flex flex-col items-center bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-2 md:p-3 rounded-full mb-2 md:mb-3">
              <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#0077B6]" />
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-lg mb-1">Free Estimates</span>
            <p className="text-gray-600 text-center text-xs md:text-sm">No hidden fees</p>
          </div>

          <div className="flex flex-col items-center bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-2 md:p-3 rounded-full mb-2 md:mb-3">
              <Truck className="w-5 h-5 md:w-8 md:h-8 text-[#023E8A]" />
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-lg mb-1">We Come to You</span>
            <p className="text-gray-600 text-center text-xs md:text-sm">Mobile service</p>
          </div>

          <div className="flex flex-col items-center bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-2 md:p-3 rounded-full mb-2 md:mb-3">
              <Star className="w-5 h-5 md:w-8 md:h-8 text-[#0077B6]" />
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-lg mb-1">4.9/5 Stars</span>
            <p className="text-gray-600 text-center text-xs md:text-sm">31+ reviews</p>
          </div>

          <div className="flex flex-col items-center bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-2 md:p-3 rounded-full mb-2 md:mb-3">
              <Shield className="w-5 h-5 md:w-8 md:h-8 text-[#023E8A]" />
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-lg mb-1">Fully Insured</span>
            <p className="text-gray-600 text-center text-xs md:text-sm">Licensed & bonded</p>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-2 md:p-4 rounded-lg md:rounded-xl text-center">
            <Clock className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2" />
            <span className="font-semibold block text-xs md:text-base">Same Day</span>
            <span className="text-xs md:text-sm opacity-90 hidden md:block">Book today, detailed today</span>
          </div>

          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-2 md:p-4 rounded-lg md:rounded-xl text-center">
            <ThumbsUp className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2" />
            <span className="font-semibold block text-xs md:text-base">100% Satisfaction</span>
            <span className="text-xs md:text-sm opacity-90 hidden md:block">Not happy? We'll make it right</span>
          </div>

          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-2 md:p-4 rounded-lg md:rounded-xl text-center">
            <CheckCircle className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2" />
            <span className="font-semibold block text-xs md:text-base">IDA Certified</span>
            <span className="text-xs md:text-sm opacity-90 hidden md:block">Professional training</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center text-white shadow-2xl">
          <h3 className="text-lg md:text-3xl font-bold mb-2">Ready for a Professional Detail?</h3>
          <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90">Join 500+ happy customers in Columbia SC & Lexington SC area</p>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center max-w-lg mx-auto">
            <a
              href="tel:+18036678731"
              onClick={handlePhoneClick}
              className="flex items-center justify-center w-full sm:w-auto px-4 md:px-8 py-3 md:py-4 bg-white text-[#023E8A] font-bold rounded-lg hover:bg-[#CAF0F8] transition-all shadow-lg transform hover:scale-105 text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Call (803) 667-8731
            </a>

            <button
              onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="w-full sm:w-auto px-4 md:px-8 py-3 md:py-4 bg-[#90E0EF] text-[#023E8A] font-bold rounded-lg hover:bg-white transition-all shadow-lg transform hover:scale-105 text-sm md:text-base"
            >
              Get Free Quote Online
            </button>
          </div>

          <p className="text-xs md:text-sm mt-2 md:mt-4 opacity-75">📍 Serving Columbia, Lexington, Irmo, West Columbia & Cayce SC</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
