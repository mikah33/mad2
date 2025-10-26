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

export interface ReviewInfo {
  author: string;
  rating: number;
  reviewText: string;
  datePublished: string;
  platform?: string;
}

export interface AggregateRatingInfo {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export const generateLocalBusinessSchema = (
  business: BusinessInfo,
  aggregateRating?: AggregateRatingInfo,
  reviews?: ReviewInfo[]
) => {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mikahsmobiledetailingsc.com',
    name: business.name,
    description: business.description,
    image: [
      'https://mikahsmobiledetailingsc.com/logo.png',
      'https://mikahsmobiledetailingsc.com/exterior1.jpg',
      'https://mikahsmobiledetailingsc.com/exterior2.jpg',
      'https://mikahsmobiledetailingsc.com/interior1.jpg'
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://mikahsmobiledetailingsc.com/logo.png',
      width: 512,
      height: 512,
      caption: "Mikah's Auto Detailing Logo"
    },
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
      latitude: 33.9981,
      longitude: -81.0320
    },
    url: 'https://mikahsmobiledetailingsc.com',
    priceRange: business.priceRange || '$$',
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
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Auto Detailing',
            description: 'Professional mobile auto detailing service that comes to you'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            description: 'Premium ceramic coating for long-lasting paint protection'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Correction',
            description: 'Professional paint correction to restore your vehicle\'s finish'
          }
        }
      ]
    }
  };

  if (aggregateRating) {
    baseSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue.toFixed(1),
      reviewCount: aggregateRating.reviewCount.toString(),
      bestRating: aggregateRating.bestRating.toString(),
      worstRating: aggregateRating.worstRating.toString()
    };
  }

  if (reviews && reviews.length > 0) {
    baseSchema.review = reviews.map(review => ({
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
        name: review.platform || 'Google'
      }
    }));
  }

  return baseSchema;
};

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
