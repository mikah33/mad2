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
  {
    id: 'loc-001',
    city: 'Phoenix',
    state: 'Arizona',
    slug: 'phoenix-az',
    zipCodes: ['85001', '85002', '85003', '85004'],
    neighborhoods: ['Downtown', 'Midtown', 'Arcadia', 'North Phoenix'],
    coordinates: { lat: 33.4484, lng: -112.0740 },
    serviceRadius: 15,
    featured: true
  },
  {
    id: 'loc-002',
    city: 'Scottsdale',
    state: 'Arizona',
    slug: 'scottsdale-az',
    zipCodes: ['85250', '85251', '85254', '85255'],
    neighborhoods: ['Old Town', 'North Scottsdale', 'South Scottsdale'],
    coordinates: { lat: 33.4942, lng: -111.9261 },
    serviceRadius: 10,
    featured: true
  },
  {
    id: 'loc-003',
    city: 'Tempe',
    state: 'Arizona',
    slug: 'tempe-az',
    zipCodes: ['85281', '85282', '85283', '85284'],
    neighborhoods: ['Downtown Tempe', 'ASU Campus', 'South Tempe'],
    coordinates: { lat: 33.4255, lng: -111.9400 },
    serviceRadius: 10,
    featured: true
  },
  // Add more locations as needed
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
