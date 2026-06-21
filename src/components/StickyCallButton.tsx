import React from 'react';
import { Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

const StickyCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FF6B00] py-1 px-2 md:hidden z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.2)]">
      <a
        href="tel:+18036678731"
        onClick={() => trackPhoneClick('sticky_button')}
        className="flex items-center justify-center gap-1 w-full text-white font-semibold text-sm"
      >
        <Phone className="w-3 h-3" />
        Call: (803) 667-8731
      </a>
    </div>
  );
};

export default StickyCallButton;
