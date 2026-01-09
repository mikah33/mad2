import React from 'react';
import { Phone } from 'lucide-react';

const StickyCallButton: React.FC = () => {
  const gtag_report_conversion = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
        'value': 200.0,
        'currency': 'USD',
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FF6B00] py-1 px-2 md:hidden z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.2)]">
      <a
        href="tel:+18036678731"
        onClick={() => gtag_report_conversion()}
        className="flex items-center justify-center gap-1 w-full text-white font-semibold text-sm"
      >
        <Phone className="w-3 h-3" />
        Call: (803) 667-8731
      </a>
    </div>
  );
};

export default StickyCallButton;
