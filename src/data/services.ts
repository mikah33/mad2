export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'interior' | 'exterior' | 'specialty' | 'mobile';
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
    name: 'Mobile Auto Detailing',
    slug: 'mobile-detailing',
    category: 'mobile',
    shortDescription: 'Professional detailing that comes to you',
    features: [
      'On-location service',
      'Flexible scheduling',
      'Commercial and residential'
    ],
    pricing: { starting: '129', range: '129-299' },
    duration: '2-4 hours',
    featured: true,
    popular: true
  },
  {
    id: 'svc-002',
    name: 'Interior Detailing',
    slug: 'interior-detailing',
    category: 'interior',
    shortDescription: 'Deep cleaning and restoration of your vehicle interior',
    features: [
      'Steam cleaning',
      'Leather conditioning',
      'Odor elimination',
      'Stain removal'
    ],
    pricing: { starting: '149', range: '149-249' },
    duration: '2-3 hours',
    featured: true
  },
  {
    id: 'svc-003',
    name: 'Exterior Detailing',
    slug: 'exterior-detailing',
    category: 'exterior',
    shortDescription: 'Complete exterior wash, polish, and protection',
    features: [
      'Hand wash',
      'Clay bar treatment',
      'Polish and wax',
      'Tire and wheel cleaning'
    ],
    pricing: { starting: '99', range: '99-199' },
    duration: '2-3 hours',
    featured: true
  },
  {
    id: 'svc-004',
    name: 'Ceramic Coating',
    slug: 'ceramic-coating',
    category: 'specialty',
    shortDescription: 'Long-lasting paint protection with hydrophobic properties',
    features: [
      'Multi-year protection',
      'UV resistance',
      'Chemical resistance',
      'Enhanced gloss'
    ],
    pricing: { starting: '599', range: '599-1299' },
    duration: '1-2 days',
    featured: true,
    popular: true
  },
  {
    id: 'svc-005',
    name: 'Paint Correction',
    slug: 'paint-correction',
    category: 'specialty',
    shortDescription: 'Remove swirls, scratches, and imperfections',
    features: [
      'Multi-stage polishing',
      'Swirl removal',
      'Scratch removal',
      'Paint depth restoration'
    ],
    pricing: { starting: '399', range: '399-899' },
    duration: '4-8 hours',
    featured: true
  },
  {
    id: 'svc-006',
    name: 'Headlight Restoration',
    slug: 'headlight-restoration',
    category: 'exterior',
    shortDescription: 'Restore clarity and brightness to foggy headlights',
    pricing: { starting: '79', range: '79-129' },
    duration: '1 hour'
  },
  // Add more services as needed
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
