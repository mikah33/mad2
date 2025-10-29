import React from 'react';
import { Star } from 'lucide-react';
import { reviews as allReviews } from '../data/reviews';

const Testimonials: React.FC = () => {
  // Display the first 3 reviews for the testimonial section
  const displayReviews = allReviews.slice(0, 3).map(review => ({
    name: review.author,
    initial: review.authorInitials,
    text: `"${review.reviewText}"`,
    rating: review.rating,
  }));

  return (
    <section className="py-12 md:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayReviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold mr-3">
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <span className="w-5 h-5 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs mr-2">
                      G
                    </span>
                    Google Review
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">{review.text}</p>
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4">Join Our Happy Customers</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service that has earned us these outstanding reviews.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#quote">
              <button className="px-8 py-4 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-800 transition">
                Get Your Free Quote
              </button>
            </a>
            <a
              href="https://g.page/r/CdSqpNXvv_3aEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-primary-700 font-semibold rounded-lg hover:text-primary-800 transition flex items-center"
            >
              View all 19 Google reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
