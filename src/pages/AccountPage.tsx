import React from 'react';
import { Helmet } from 'react-helmet-async';
import { User, Phone, Mail, MapPin, Clock, Star, Gift, Settings, ChevronRight } from 'lucide-react';
import BottomNavbar from '../components/BottomNavbar';

const AccountPage: React.FC = () => {
  // Placeholder - will be configured later
  const isLoggedIn = false;

  return (
    <>
      <Helmet>
        <title>Account | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Manage your account, view booking history, and access exclusive offers at Mikah's Auto Detailing." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/account" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] text-white pt-12 pb-16 px-4">
          <div className="container mx-auto max-w-lg text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">My Account</h1>
            <p className="text-[#90E0EF]">Manage your bookings & preferences</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-lg -mt-8">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>

            <div className="space-y-3">
              <a
                href="/book"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-[#CAF0F8] to-white rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Book a Detail</p>
                    <p className="text-sm text-gray-500">Schedule your next service</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="tel:+18036678731"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-sm text-gray-500">(803) 667-8731</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="mailto:mikahsautodetailing@gmail.com"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <p className="text-sm text-gray-500">mikahsautodetailing@gmail.com</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Gift Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-[#0077B6]" />
              <h2 className="text-lg font-bold text-gray-800">Gift Cards</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Give the gift of a professionally detailed vehicle! Perfect for any occasion.
            </p>
            <a
              href="/book"
              className="inline-block bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Purchase Gift Card
            </a>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">Leave a Review</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Enjoyed our service? We'd love to hear your feedback!
            </p>
            <a
              href="https://g.page/r/CxxxxxxxxxxxxxxEB/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Write a Google Review
            </a>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#0077B6]" />
              <h2 className="text-lg font-bold text-gray-800">Service Areas</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Columbia', 'Lexington', 'Irmo', 'West Columbia', 'Cayce'].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-[#CAF0F8] text-[#023E8A] rounded-full text-sm font-medium"
                >
                  {area}, SC
                </span>
              ))}
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-r from-[#CAF0F8] to-[#90E0EF] rounded-2xl p-6 text-center">
            <Settings className="w-10 h-10 text-[#023E8A] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#023E8A] mb-2">Account Features Coming Soon!</h3>
            <p className="text-gray-700 text-sm">
              We're building an account system where you can track your bookings,
              view service history, and earn loyalty rewards.
            </p>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default AccountPage;
