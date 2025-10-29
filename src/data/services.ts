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
    name: 'Basic Detail Package',
    slug: 'full-detail',
    category: 'package',
    shortDescription: 'Complete interior and exterior detail',
    description: 'Interior: Full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned, door jambs cleaned & waxed. Exterior: Wheels decontaminated, foam contact wash, protective wax layer, wheels & tires dressed.',
    features: [
      'Interior full wipe down',
      'Conditioner + UV protection',
      'Vacuum & disinfection',
      'Glass cleaned',
      'Door jambs cleaned & waxed',
      'Wheels decontaminated',
      'Foam contact wash',
      'Protective wax layer',
      'Wheels & tires dressed'
    ],
    pricing: { starting: '200' },
    duration: '2-3 hours',
    featured: true
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
    pricing: { starting: '325' },
    duration: '3-4 hours',
    featured: true,
    popular: true
  },
  {
    id: 'svc-003',
    name: 'Interior Detailing',
    slug: 'interior-detailing',
    category: 'interior',
    shortDescription: 'Deep cleaning and restoration of your vehicle interior',
    features: [
      'Steam cleaning',
      'Leather conditioning',
      'Odor elimination',
      'Stain removal',
      'Vacuum & disinfection',
      'UV protection'
    ],
    pricing: { starting: '200', range: '200-325' },
    duration: '2-3 hours',
    featured: true
  },
  {
    id: 'svc-004',
    name: 'Exterior Detailing',
    slug: 'exterior-detailing',
    category: 'exterior',
    shortDescription: 'Complete exterior wash, polish, and protection',
    features: [
      'Hand wash',
      'Foam contact wash',
      'Wheel decontamination',
      'Protective wax layer',
      'Tire and wheel dressing',
      'Brake dust removal'
    ],
    pricing: { starting: '200' },
    duration: '2-3 hours',
    featured: true
  },
  {
    id: 'svc-005',
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    category: 'specialty',
    shortDescription: 'Long-lasting paint protection with hydrophobic properties',
    description: 'Professional-grade ceramic application with thorough wash and decontamination. Long-term paint protection with maximum durability and incredible shine that lasts.',
    features: [
      'Multi-year protection',
      'UV resistance',
      'Chemical resistance',
      'Enhanced gloss',
      'Hydrophobic properties',
      'Professional-grade application'
    ],
    pricing: { starting: 'Quote' },
    duration: '1-2 days',
    featured: true,
    popular: true
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
    pricing: { starting: '175', range: '175/month' },
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
