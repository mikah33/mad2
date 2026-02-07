import { LocationData } from '../types/location';

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string;
  priceRange: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
  areaServed: {
    '@type': string;
    name: string;
  };
}

export function generateLocalBusinessSchema(
  location: LocationData,
  businessInfo: {
    name: string;
    phone: string;
    streetAddress: string;
    postalCode: string;
    image: string;
    website: string;
    socialLinks: string[];
  }
): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDetailing',
    name: `${businessInfo.name} - ${location.city}`,
    image: businessInfo.image,
    '@id': `${businessInfo.website}/locations/${location.slug}`,
    url: `${businessInfo.website}/locations/${location.slug}`,
    telephone: '+1-803-667-8731',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.streetAddress,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: businessInfo.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: businessInfo.socialLinks,
    areaServed: {
      '@type': 'City',
      name: `${location.city}, ${location.state}`,
    },
  };
}

export function generateBreadcrumbSchema(location: LocationData, websiteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: `${websiteUrl}/locations`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.city,
        item: `${websiteUrl}/locations/${location.slug}`,
      },
    ],
  };
}
