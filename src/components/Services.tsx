import React from 'react';
import { Sparkles, Star, Shield, Wrench, Zap, Anchor, RotateCw } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string[];
  color: string;
}

const Services: React.FC<{ onSelectService: (service: string) => void }> = ({ onSelectService }) => {
  const getServiceUrl = (title: string): string => {
    const urlMap: { [key: string]: string } = {
      'Basic Detail Package': '/services/full-detail',
      'Factory Reset Package': '/services/full-detail',
      'Ceramic Coatings': '/services/ceramic-coating',
      'Paint Corrections': '/services/paint-correction',
      'Specialty Services': '/services/interior-detailing',
      'Marine & RV Detailing': '/services/exterior-detailing',
      'Routine Reset': '/services/mobile-detailing',
    };
    return urlMap[title] || '/services/full-detail';
  };

  const services: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail Package',
      price: '$200',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Wheels decontaminated, foam contact wash, protective wax layer, wheels & tires dressed'
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset Package',
      price: '$325',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Foam contact wash, brake dust removal, protective wax layer, tires & rims dressed',
        'Add-On Services: Weather Stripping Restoration ($50), Scratch Removal ($80/panel)'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ceramic Coatings',
      price: 'Quote',
      color: 'bg-green-500',
      description: [
        'Achieve long-term paint protection with our professional-grade ceramic application',
        'We meticulously prepare your vehicle with thorough wash and decontamination',
        'Ensures maximum durability and an incredible shine that lasts'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Paint Corrections',
      price: 'Quote',
      color: 'bg-green-600',
      description: [
        "Restore your vehicle's flawless finish with expert paint correction",
        'Effectively remove swirl marks, light scratches, and oxidation',
        'Single-stage or two-stage correction options bring back original luster'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Specialty Services',
      price: 'Quote',
      color: 'bg-purple-500',
      description: [
        'Interior-only or Exterior-only detail',
        'Odor Removal / Ozone Treatment',
        'Engine Bay Detail'
      ]
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine & RV Detailing',
      price: 'Quote',
      color: 'bg-blue-500',
      description: [
        'Marine Detailing',
        'RV Detailing',
        'Motorcycle Detailing'
      ]
    },
    {
      icon: <RotateCw className="w-8 h-8" />,
      title: 'Routine Reset',
      price: '$175/Month',
      color: 'bg-orange-500',
      description: [
        'Stay consistently clean with our monthly subscription designed to keep your vehicle clean, protected, and consistent — every month.',
        "✅What's Included:",
        '• 2x Exterior Details per Month',
        '• 1x Interior Reset per Month',
        '• 1x Engine Bay Cleaning (first visit of each month)',
        '• Priority Scheduling - You pick the times',
        '💰 Pricing: First 2 months: $300 upfront (limited-time offer)',
        'After that: $175/month • Cancel anytime. No rollovers.',
        '⚠️ Want to stay consistently clean without falling behind? The Routine Reset is your system.'
      ]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Professional Services</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Choose from our comprehensive range of detailing services. Select a service
          below to automatically update your quote request.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`${service.color} text-white p-3 rounded-lg`}>
                  {service.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800">{service.price}</div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>

              <ul className="space-y-2 mb-6">
                {service.description.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex-1 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition"
                >
                  Get Quote
                </button>
                <a
                  href={getServiceUrl(service.title)}
                  className="flex-1 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-center text-sm"
                >
                  View {service.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
