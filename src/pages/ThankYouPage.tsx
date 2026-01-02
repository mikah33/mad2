import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  // Google Ads Conversion Tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Thank you for your booking request. We'll contact you shortly!" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your booking request has been received. We'll contact you within a few minutes!
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 text-left">
            <h2 className="font-bold text-gray-800 mb-3">What happens next?</h2>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#0077B6] font-bold">1.</span>
                <span>We'll review your request and vehicle details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0077B6] font-bold">2.</span>
                <span>You'll receive a call or text to confirm your appointment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0077B6] font-bold">3.</span>
                <span>We'll come to you at your scheduled time!</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center gap-2 bg-[#023E8A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0077B6] transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
            <a
              href="tel:+18036678731"
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (803) 667-8731
            </a>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default ThankYouPage;
