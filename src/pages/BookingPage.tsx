import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookingTimeline from '../components/BookingTimeline';
import BottomNavbar from '../components/BottomNavbar';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Book Your Detail | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Book your professional mobile auto detailing service in Columbia, SC. Get a personalized quote for ceramic coating, paint correction, interior and exterior detailing." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/book" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center h-14">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-[#023E8A] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <div className="flex-1 text-center">
                <h1 className="text-lg font-bold text-[#023E8A]">Book Your Detail</h1>
              </div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>
          </div>
        </div>

        {/* Booking Timeline Component */}
        <BookingTimeline />

        {/* Quick Contact */}
        <div className="container mx-auto px-4 max-w-6xl mt-8 mb-24">
          <div className="bg-[#CAF0F8] rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#023E8A] mb-2">Need Help Choosing?</h3>
            <p className="text-gray-700 mb-4">
              Call us and we'll help you find the perfect package for your vehicle.
            </p>
            <a
              href="tel:+18036678731"
              className="inline-flex items-center gap-2 bg-[#023E8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0077B6] transition-colors"
            >
              📞 Call (803) 667-8731
            </a>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default BookingPage;
