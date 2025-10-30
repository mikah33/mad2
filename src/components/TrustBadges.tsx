import React from 'react';
import { CheckCircle, Truck, ThumbsUp } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-md">
            <CheckCircle className="w-6 h-6 text-[#0077B6] mr-3" />
            <span className="font-semibold text-gray-800">Free Estimates</span>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-md">
            <Truck className="w-6 h-6 text-[#023E8A] mr-3" />
            <span className="font-semibold text-gray-800">Mobile Service Available</span>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-md">
            <ThumbsUp className="w-6 h-6 text-[#0077B6] mr-3" />
            <span className="font-semibold text-gray-800">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
