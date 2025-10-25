export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours?: string[];
  priceRange?: string;
}

export interface ServiceInfo {
  name: string;
  description: string;
  price?: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPostInfo {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export const generateLocalBusinessSchema = (business: BusinessInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mikahsautodetailing.com',
  name: business.name,
  description: business.description,
  image: 'https://mikahsautodetailing.com/images/business-photo.jpg',
  telephone: business.phone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0, // TODO: Add actual coordinates
    longitude: 0
  },
  url: 'https://mikahsautodetailing.com',
  priceRange: business.priceRange || '$$',
  openingHoursSpecification: business.hours?.map(hour => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: hour
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100'
  }
});

export const generateServiceSchema = (service: ServiceInfo, business: BusinessInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.state
    }
  },
  areaServed: {
    '@type': 'City',
    name: business.address.city
  },
  offers: service.price ? {
    '@type': 'Offer',
    price: service.price,
    priceCurrency: 'USD'
  } : undefined,
  url: service.url
});

export const generateFAQSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateBlogPostSchema = (post: BlogPostInfo, business: BusinessInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image || 'https://mikahsautodetailing.com/images/blog-default.jpg',
  datePublished: post.datePublished,
  dateModified: post.dateModified || post.datePublished,
  author: {
    '@type': 'Person',
    name: post.author
  },
  publisher: {
    '@type': 'Organization',
    name: business.name,
    logo: {
      '@type': 'ImageObject',
      url: 'https://mikahsautodetailing.com/logo.png'
    }
  },
  url: post.url,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': post.url
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
});
