import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CSSblq-gPlXUEBM/review';

const ReviewUsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);

    // If 4-5 stars, redirect to Google review
    if (rating >= 4) {
      window.open(GOOGLE_REVIEW_URL, '_blank');
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);

    // Send feedback to your webhook/backend
    try {
      // You can add a webhook here to collect feedback
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayRating = hoveredRating ?? selectedRating ?? 0;

  return (
    <>
      <Helmet>
        <title>Review Us | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="Share your experience with Mikah's Auto Detailing. We value your feedback and strive to provide the best mobile detailing service in Columbia, SC." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/review-us" />
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
                <h1 className="text-lg font-bold text-[#023E8A]">Review Us</h1>
              </div>
              <div className="w-16" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-lg py-8">
          {!selectedRating ? (
            // Star Rating Selection
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">How Did We Do?</h2>
              <p className="text-gray-600 mb-8">
                Let us know about your experience with Mikah's Auto Detailing
              </p>

              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  >
                    <Star
                      className={`w-12 h-12 sm:w-14 sm:h-14 transition-colors ${
                        star <= displayRating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Tap a star to rate your experience
              </p>
            </div>
          ) : selectedRating <= 3 ? (
            // Feedback Form for 1-3 stars
            !isSubmitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-8 h-8 ${
                          star <= selectedRating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    We're Sorry to Hear That
                  </h2>
                  <p className="text-gray-600">
                    Please let us know how we can improve next time
                  </p>
                </div>

                <form onSubmit={handleFeedbackSubmit}>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what went wrong with your experience..."
                    className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023E8A] focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || !feedback.trim()}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Feedback
                      </>
                    )}
                  </button>
                </form>

                <button
                  onClick={() => setSelectedRating(null)}
                  className="w-full mt-3 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  Change my rating
                </button>
              </div>
            ) : (
              // Thank You Message after submission
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You for Your Feedback
                </h2>
                <p className="text-gray-600 mb-6">
                  We appreciate you taking the time to share your experience. Your feedback helps us improve our service.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Back to Home
                </button>
              </div>
            )
          ) : (
            // Redirecting message for 4-5 stars (shown briefly before redirect)
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 ${
                      star <= selectedRating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                We're so glad you had a great experience! A new tab has opened for you to leave a Google review.
              </p>
              <div className="space-y-3">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Leave a Google Review
                </a>
                <button
                  onClick={() => navigate('/')}
                  className="w-full text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default ReviewUsPage;
