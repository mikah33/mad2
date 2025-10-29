export interface Location {
  id: string;
  city: string;
  state: string;
  slug: string;
  zipCodes: string[];
  neighborhoods?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  serviceRadius?: number; // miles
  description?: string;
  population?: number;
  featured?: boolean;
}

export const locations: Location[] = [
  // Only include locations with actual pages
  {
    id: 'loc-001',
    city: 'Columbia',
    state: 'South Carolina',
    slug: 'columbia-sc',
    zipCodes: ['29201', '29203', '29204', '29205', '29206', '29209'],
    neighborhoods: ['Downtown Columbia', 'The Vista', 'Five Points', 'Forest Acres', 'Shandon', 'Rosewood'],
    coordinates: { lat: 34.0007, lng: -81.0348 },
    serviceRadius: 20,
    description: 'Premium mobile auto detailing serving downtown Columbia, The Vista, Five Points, and surrounding neighborhoods. Professional ceramic coating, paint correction, and interior detailing brought to your home or office.',
    population: 131674,
    featured: true
  },
  {
    id: 'loc-003',
    city: 'Lexington',
    state: 'South Carolina',
    slug: 'lexington-sc',
    zipCodes: ['29072', '29073'],
    neighborhoods: ['Downtown Lexington', 'Lake Murray', 'Oak Grove', 'Red Bank'],
    coordinates: { lat: 33.9816, lng: -81.2362 },
    serviceRadius: 15,
    description: 'Best mobile detailing Lexington SC. Professional auto detailing services near Lake Murray. Ceramic coating, interior detailing, and paint correction at your location. Free quotes!',
    population: 23568,
    featured: true
  },
  {
    id: 'loc-004',
    city: 'Irmo',
    state: 'South Carolina',
    slug: 'irmo-sc',
    zipCodes: ['29063'],
    neighborhoods: ['Harbison', 'Lake Murray Shores', 'Friarsgate'],
    coordinates: { lat: 34.0858, lng: -81.1834 },
    serviceRadius: 15,
    description: 'Top-rated mobile car detailing Irmo SC. Serving Harbison and Lake Murray areas with professional ceramic coating and full auto detailing. We come to you!',
    population: 12097,
    featured: true
  },
  {
    id: 'loc-006',
    city: 'Cayce',
    state: 'South Carolina',
    slug: 'cayce-sc',
    zipCodes: ['29033', '29169'],
    neighborhoods: ['Historic Cayce', 'Riverland'],
    coordinates: { lat: 33.9665, lng: -81.0726 },
    serviceRadius: 12,
    description: 'Best car detailing Cayce SC. Mobile detailing service for Cayce and Riverland areas. Professional ceramic coating and interior/exterior detailing. Book online 24/7!',
    population: 13789,
    featured: true
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(loc => loc.slug === slug);
};

export const getFeaturedLocations = (): Location[] => {
  return locations.filter(loc => loc.featured);
};

export const getLocationsByState = (state: string): Location[] => {
  return locations.filter(loc => loc.state === state);
};
