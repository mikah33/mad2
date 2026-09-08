import React from 'react';
import { CalendarClock, ChevronRight } from 'lucide-react';

/**
 * The 90-day maintenance-plan pitch, reusable on any page. The retention
 * program is the economic core of the level-ladder pricing (see
 * src/data/offers.ts) — every marketing page should carry at least the
 * compact variant so the loop is never out of sight.
 *
 * variant="banner": one-liner strip (footer, hub pages)
 * variant="card":  standalone callout with CTA (service pages, thank-you)
 */
interface MaintenancePitchProps {
  variant?: 'banner' | 'card';
  /** Optional context line replacing the default body (card variant) */
  context?: string;
  /** Override the CTA; pass null to hide it (e.g. post-booking pages) */
  cta?: { label: string; href: string } | null;
  className?: string;
}

const MaintenancePitch: React.FC<MaintenancePitchProps> = ({ variant = 'card', context, cta, className = '' }) => {
  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 ${className}`}>
        <CalendarClock className="w-5 h-5 text-[#90E0EF] flex-shrink-0 hidden sm:block" />
        <p className="text-white text-sm flex-1">
          <span className="font-bold">Keep your maintenance rate:</span>{' '}
          after a completed full detail, rebook the same vehicle by day 90, with service by day 97 and it's just{' '}
          <span className="font-bold text-[#90E0EF]">$225</span> on our maintenance plan.
        </p>
        <a href="/pricing" className="text-[#90E0EF] font-bold text-sm whitespace-nowrap hover:text-white transition-colors">
          How it works <ChevronRight className="w-4 h-4 inline" />
        </a>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border-2 border-[#0077B6] bg-gradient-to-br from-[#CAF0F8]/60 to-white p-5 sm:p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <CalendarClock className="w-5 h-5 text-[#023E8A]" />
        <h3 className="font-bold text-[#023E8A] text-lg">The 90-Day Maintenance Plan</h3>
      </div>
      <p className="text-gray-700 text-sm mb-4">
        {context ||
          'One full detail gets your car to a level we can maintain. After that, each visit booked by day 90 and completed by day 97 is a flat $225 Level 1 Maintenance Detail — not the $375 reset price. Stay on the schedule, keep the rate.'}
      </p>
      <p className="text-gray-600 text-xs mb-4">Book the same vehicle by day 90 after its last completed detail with us. Service must take place by day 97. Eligibility is verified against our records.</p>
      {cta !== null && (
        <a
          href={cta?.href || '/book'}
          className="inline-block bg-[#023E8A] hover:bg-[#0077B6] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          {cta?.label || 'Start with your reset'} <ChevronRight className="w-4 h-4 inline" />
        </a>
      )}
    </div>
  );
};

export default MaintenancePitch;
