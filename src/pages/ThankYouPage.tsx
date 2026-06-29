import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Home, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import { trackLeadSubmit, LeadData } from '../utils/analytics';

// GoHighLevel booking widget for the "Book Your Detail" calendar.
// Optional self-scheduling: the lead is already captured (sent to n8n) before
// this page loads, so booking here is a bonus — it lets the customer lock in a
// date and pay the $25 non-refundable deposit (via Square) instead of waiting
// for a callback.
const GHL_BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/LjeRjfzqnTtUi0ACqHZ2';
const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  // Single source of truth for the booking-form lead conversion.
  // Fires GA4 generate_lead + Google Ads conversion + Meta Lead, with
  // Enhanced Conversions data from the submitted form (if available).
  useEffect(() => {
    let lead: LeadData | undefined;
    try {
      const stored = sessionStorage.getItem('lead_ec');
      if (stored) {
        lead = JSON.parse(stored);
        sessionStorage.removeItem('lead_ec');
      }
    } catch {
      /* ignore parse/storage errors */
    }
    trackLeadSubmit(lead);
  }, []);

  // Load the GoHighLevel embed script once. It auto-resizes the booking iframe
  // via postMessage so the calendar fits its content without an inner scrollbar.
  useEffect(() => {
    if (!document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) {
      const s = document.createElement('script');
      s.src = GHL_EMBED_SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Thank you for your booking request. We'll contact you shortly!" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT (desktop): Optional self-schedule calendar. On mobile it drops
              below the thank-you content via the order utilities. */}
          <div className="order-2 lg:order-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-[#0077B6]" />
              <h2 className="font-bold text-gray-800 text-lg text-center">
                Want to lock in your date now?
              </h2>
            </div>
            <p className="text-gray-600 text-sm text-center mb-4">
              <span className="font-semibold">Optional.</span> Reserve your appointment instantly with a{' '}
              <span className="font-semibold">$25 non-refundable deposit</span> (applied toward your total).
              Prefer to wait? No problem — we'll still reach out using the steps shown here.
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src={GHL_BOOKING_URL}
                title="Book your detailing appointment"
                scrolling="no"
                id="LjeRjfzqnTtUi0ACqHZ2_booking"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '720px' }}
              />
            </div>
          </div>

          {/* RIGHT (desktop): Thank-you confirmation, next steps, and actions. */}
          <div className="order-1 lg:order-2 text-center">
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
      </div>

      <BottomNavbar />
    </>
  );
};

export default ThankYouPage;
