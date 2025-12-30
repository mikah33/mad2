import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import BottomNavbar from '../components/BottomNavbar';

const ReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Reviews | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Read customer reviews and testimonials for Mikah's Auto Detailing in Columbia, SC. See why we're the trusted choice for professional mobile detailing." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/reviews" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pb-20">
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
                <h1 className="text-lg font-bold text-[#023E8A]">Reviews</h1>
              </div>
              <div className="w-16" />
            </div>
          </div>
        </div>

        <Testimonials />

        {/* Leave a Review CTA */}
        <div className="container mx-auto px-4 max-w-lg mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Love Our Service?</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Leave us a review on Google.
            </p>
            <a
              href="https://g.page/r/CxxxxxxxxxxxxxxEB/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default ReviewsPage;
