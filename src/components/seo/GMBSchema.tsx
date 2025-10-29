import { aggregateRating, reviews } from '../../data/reviews';

export const generateGMBSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mikahsmobiledetailingsc.com/#localbusiness',
  name: "Mikah's Auto Detailing",
  image: [
    'https://mikahsmobiledetailingsc.com/logo.png',
    'https://mikahsmobiledetailingsc.com/exterior1.jpg',
    'https://mikahsmobiledetailingsc.com/exterior2.jpg',
    'https://mikahsmobiledetailingsc.com/interior1.jpg'
  ],
  '@id': 'https://mikahsmobiledetailingsc.com',
  url: 'https://mikahsmobiledetailingsc.com',
  telephone: '(803) 667-8731',
  email: 'mikahsautodetailing@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Columbia',
    addressRegion: 'SC',
    postalCode: '29201',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.9981,
    longitude: -81.0320
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: aggregateRating.ratingValue.toFixed(1),
    reviewCount: aggregateRating.reviewCount.toString(),
    bestRating: '5',
    worstRating: '5'
  },
  review: reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.reviewText,
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: review.platform
    }
  })),
  areaServed: [
    {
      '@type': 'City',
      name: 'Columbia',
      '@id': 'https://en.wikipedia.org/wiki/Columbia,_South_Carolina'
    },
    {
      '@type': 'City',
      name: 'Lexington',
      '@id': 'https://en.wikipedia.org/wiki/Lexington,_South_Carolina'
    },
    {
      '@type': 'City',
      name: 'Irmo',
      '@id': 'https://en.wikipedia.org/wiki/Irmo,_South_Carolina'
    },
    {
      '@type': 'City',
      name: 'West Columbia'
    },
    {
      '@type': 'City',
      name: 'Cayce'
    },
    {
      '@type': 'City',
      name: 'Blythewood'
    },
    {
      '@type': 'Neighborhood',
      name: 'Downtown Columbia'
    },
    {
      '@type': 'Neighborhood',
      name: 'Two Notch Road'
    },
    {
      '@type': 'Neighborhood',
      name: 'Five Points'
    },
    {
      '@type': 'Neighborhood',
      name: 'The Vista'
    },
    {
      '@type': 'Neighborhood',
      name: 'Shandon'
    },
    {
      '@type': 'Neighborhood',
      name: 'Forest Acres'
    },
    {
      '@type': 'Neighborhood',
      name: 'Harbison'
    }
  ],
  sameAs: [
    'https://www.facebook.com/mikahsautodetailing',
    'https://www.instagram.com/mikahsautodetailing',
    'https://www.google.com/maps/place/Mikah+s+Auto+Detailing',
    'https://g.page/r/CdSqpNXvv_3aEBM'
  ]
});
