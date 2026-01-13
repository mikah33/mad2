export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'interior' | 'exterior' | 'specialty' | 'mobile' | 'package';
  shortDescription: string;
  description?: string;
  features?: string[];
  pricing?: {
    starting: string;
    range?: string;
  };
  duration?: string;
  icon?: string;
  image?: string;
  featured?: boolean;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'svc-001',
    name: 'Mobile Car Detailing Package',
    slug: 'mobile-detailing',
    category: 'mobile',
    shortDescription: 'Professional mobile car detailing - complete interior and exterior detail at your location',
    description: 'Our most popular mobile car detailing package includes complete interior car detailing and exterior auto detailing service. We come to your location in Columbia SC with everything needed for professional automotive detail service.',
    features: [
      'Complete car interior detailing',
      'Professional exterior auto detailing',
      'Mobile service - we come to you',
      'Vacuum & sanitization',
      'Glass cleaning inside and out',
      'Wheel decontamination and dressing',
      'Foam contact wash',
      'Protective wax application',
      'Tire and wheel dressing'
    ],
    pricing: { starting: '225' },
    duration: '3-4 hours',
    featured: true,
    popular: true
  },
  {
    id: 'svc-002',
    name: 'Factory Reset Package',
    slug: 'full-detail',
    category: 'package',
    shortDescription: 'Deep interior and exterior restoration',
    description: 'Interior: Full wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned, door jambs cleaned & waxed. Exterior: Foam contact wash, brake dust removal, protective wax layer, tires & rims dressed.',
    features: [
      'Interior full wipe down',
      'Conditioner + UV protection',
      'Vacuum + disinfection',
      'Light stain removal',
      'Shampoo & extraction',
      'Glass cleaned',
      'Door jambs cleaned & waxed',
      'Foam contact wash',
      'Brake dust removal',
      'Protective wax layer',
      'Tires & rims dressed'
    ],
    pricing: { starting: '400' },
    duration: '3-4 hours',
    featured: true,
    popular: true
  },
  {
    id: 'svc-003',
    name: 'Car Interior Detailing',
    slug: 'interior-detailing',
    category: 'interior',
    shortDescription: 'Professional car interior detailing with deep cleaning and restoration of your vehicle interior',
    description: 'Complete car interior detailing service including steam cleaning, leather conditioning, stain removal, and UV protection. Perfect for customers searching "car interior detailing near me" in Columbia SC.',
    features: [
      'Professional steam cleaning and sanitization',
      'Leather cleaning and conditioning',
      'Fabric and upholstery deep cleaning',
      'Stain and odor removal',
      'Complete vacuum and disinfection',
      'Dashboard and console detailing',
      'UV protection treatment',
      'Window cleaning (interior)'
    ],
    pricing: { starting: '200', range: '200-450' },
    duration: '2-4 hours',
    featured: true
  },
  {
    id: 'svc-004',
    name: 'Exterior Auto Detailing',
    slug: 'exterior-detailing',
    category: 'exterior',
    shortDescription: 'Professional exterior auto detailing with complete wash, polish, and paint protection',
    description: 'Comprehensive exterior auto detailing service including hand wash, paint decontamination, polishing, and protection. Expert automotive exterior detailing for Columbia SC customers.',
    features: [
      'Professional hand wash and foam treatment',
      'Paint decontamination and clay bar',
      'Wheel and tire decontamination',
      'Paint polish and enhancement',
      'Protective wax or sealant application',
      'Tire and wheel dressing',
      'Chrome and trim polishing',
      'Brake dust removal'
    ],
    pricing: { starting: '200', range: '200-400' },
    duration: '2-5 hours',
    featured: true
  },
  {
    id: 'svc-005',
    name: 'Ceramic Coating (Add-On)',
    slug: 'ceramic-coating',
    category: 'specialty',
    shortDescription: 'Premium paint protection add-on service with long-lasting hydrophobic properties',
    description: 'Professional ceramic coating add-on service available with our mobile car detailing packages. Perfect enhancement to our exterior auto detailing service for maximum paint protection.',
    features: [
      'Add-on to mobile detailing service',
      'Multi-year paint protection',
      'UV and chemical resistance',
      'Enhanced gloss and shine',
      'Hydrophobic water repelling',
      'Professional-grade application',
      'Requires exterior detailing first'
    ],
    pricing: { starting: 'Quote' },
    duration: '4-8 hours additional',
    featured: false,
    popular: false
  },
  {
    id: 'svc-006',
    name: 'Paint Correction',
    slug: 'paint-correction',
    category: 'specialty',
    shortDescription: 'Remove swirls, scratches, and imperfections',
    description: 'Expert paint correction to remove swirl marks, light scratches, and oxidation. Single-stage or two-stage correction options bring back original luster.',
    features: [
      'Multi-stage polishing',
      'Swirl removal',
      'Scratch removal',
      'Oxidation removal',
      'Paint depth restoration',
      'Single or two-stage options'
    ],
    pricing: { starting: 'Quote' },
    duration: '4-8 hours',
    featured: true
  },
  {
    id: 'svc-007',
    name: 'Mobile Auto Detailing',
    slug: 'mobile-detailing',
    category: 'mobile',
    shortDescription: 'Professional detailing that comes to you',
    description: 'Routine Reset: 2x Exterior Details + 1x Interior Reset + 1x Engine Bay Cleaning per month. Priority scheduling.',
    features: [
      'On-location service',
      'Flexible scheduling',
      'Commercial and residential',
      '2x Exterior Details per Month',
      '1x Interior Reset per Month',
      '1x Engine Bay Cleaning'
    ],
    pricing: { starting: '250', range: '250/month' },
    duration: 'Monthly',
    featured: true,
    popular: true
  },
  {
    id: 'svc-008',
    name: 'Specialty Services',
    slug: 'interior-detailing',
    category: 'specialty',
    shortDescription: 'Custom detailing services',
    description: 'Interior-only or Exterior-only detail, Odor Removal / Ozone Treatment, Engine Bay Detail',
    features: [
      'Interior-only detail',
      'Exterior-only detail',
      'Odor Removal',
      'Ozone Treatment',
      'Engine Bay Detail'
    ],
    pricing: { starting: 'Quote' },
    duration: 'Varies'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(svc => svc.slug === slug);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(svc => svc.featured);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(svc => svc.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(svc => svc.popular);
};
