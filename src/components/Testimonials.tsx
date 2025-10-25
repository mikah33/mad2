import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'William Warren',
      initial: 'WW',
      text: '"Mikah came and did a full detail on my RV. This thing is 36ft and hasn\'t been cleaned properly in years. He does a tremendous job. I haven\'t gotten my car detailed by him but if he can clean a 36ft RV then Im sure the work he does on a vehicle would be worth it"',
      rating: 5,
    },
    {
      name: 'Deborah Autry',
      initial: 'DA',
      text: '"They did an exceptional job on our vehicle! Besides needing a good cleaning, we had a ton of dog hair! They surpassed my expectations on that alone! Very pleased!"',
      rating: 5,
    },
    {
      name: 'Humberto Acevedo',
      initial: 'HA',
      text: '"Great service and results. Will definitely be calling them again."',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-2">
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
              <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
                Get Your Free Quote
              </button>
            </a>
            <a
              href="#reviews"
              className="px-8 py-4 text-orange-500 font-semibold rounded-lg hover:text-orange-600 transition flex items-center"
            >
              View more of our reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
