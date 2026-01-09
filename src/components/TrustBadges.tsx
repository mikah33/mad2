import React from 'react';
import { CheckCircle, Truck, ThumbsUp, Star, Phone, Shield, Clock } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const handlePhoneClick = () => {
    // Track conversion
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12 md:py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Mikah's Auto Detailing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join hundreds of satisfied customers throughout Columbia SC and Lexington SC</p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-3 rounded-full mb-3">
              <CheckCircle className="w-8 h-8 text-[#0077B6]" />
            </div>
            <span className="font-bold text-gray-900 text-lg mb-1">Free Estimates</span>
            <p className="text-gray-600 text-center text-sm">No hidden fees or surprises</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-3 rounded-full mb-3">
              <Truck className="w-8 h-8 text-[#023E8A]" />
            </div>
            <span className="font-bold text-gray-900 text-lg mb-1">We Come to You</span>
            <p className="text-gray-600 text-center text-sm">Mobile service to your home or office</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-3 rounded-full mb-3">
              <Star className="w-8 h-8 text-[#0077B6]" />
            </div>
            <span className="font-bold text-gray-900 text-lg mb-1">4.9/5 Stars</span>
            <p className="text-gray-600 text-center text-sm">31+ verified customer reviews</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="bg-[#CAF0F8] p-3 rounded-full mb-3">
              <Shield className="w-8 h-8 text-[#023E8A]" />
            </div>
            <span className="font-bold text-gray-900 text-lg mb-1">Fully Insured</span>
            <p className="text-gray-600 text-center text-sm">Licensed & bonded professionals</p>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-4 rounded-xl text-center">
            <Clock className="w-6 h-6 mx-auto mb-2" />
            <span className="font-semibold block">Same Day Service</span>
            <span className="text-sm opacity-90">Book today, detailed today</span>
          </div>

          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-4 rounded-xl text-center">
            <ThumbsUp className="w-6 h-6 mx-auto mb-2" />
            <span className="font-semibold block">100% Satisfaction</span>
            <span className="text-sm opacity-90">Not happy? We'll make it right</span>
          </div>

          <div className="bg-gradient-to-r from-[#0077B6] to-[#023E8A] text-white p-4 rounded-xl text-center">
            <CheckCircle className="w-6 h-6 mx-auto mb-2" />
            <span className="font-semibold block">IDA Certified</span>
            <span className="text-sm opacity-90">Professional training & certification</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready for a Professional Detail?</h3>
          <p className="text-lg mb-6 opacity-90">Join 500+ happy customers in Columbia SC & Lexington SC area</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <a
              href="tel:+18036678731"
              onClick={handlePhoneClick}
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-[#023E8A] font-bold rounded-lg hover:bg-[#CAF0F8] transition-all shadow-lg transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (803) 667-8731
            </a>

            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-[#90E0EF] text-[#023E8A] font-bold rounded-lg hover:bg-white transition-all shadow-lg transform hover:scale-105"
            >
              Get Free Quote Online
            </button>
          </div>

          <p className="text-sm mt-4 opacity-75">📍 Serving Columbia, Lexington, Irmo, West Columbia & Cayce SC</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
