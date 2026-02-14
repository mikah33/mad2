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
      latitude: 34.0007,
      longitude: -81.0348
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
        name: 'Columbia, SC',
        '@id': 'https://en.wikipedia.org/wiki/Columbia,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Lexington, SC',
        '@id': 'https://en.wikipedia.org/wiki/Lexington,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Irmo, SC',
        '@id': 'https://en.wikipedia.org/wiki/Irmo,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'West Columbia, SC'
      },
      {
        '@type': 'City',
        name: 'Cayce, SC',
        '@id': 'https://en.wikipedia.org/wiki/Cayce,_South_Carolina'
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
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: business.name
      },
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

export const generateServiceSchema = (
  service: ServiceInfo,
  business: BusinessInfo,
  aggregateRating?: AggregateRatingInfo,
  reviews?: ReviewInfo[]
) => {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'AutoDetailing',
      name: "Mikah's Mobile Auto Detailing",
      telephone: '+1-803-667-8731',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Columbia',
        addressRegion: 'SC',
        postalCode: '29072',
        addressCountry: 'US'
      }
    },
    areaServed: [
      { '@type': 'City', name: 'Columbia, SC' },
      { '@type': 'City', name: 'Lexington, SC' },
      { '@type': 'City', name: 'Irmo, SC' },
      { '@type': 'City', name: 'West Columbia, SC' },
      { '@type': 'City', name: 'Cayce, SC' }
    ],
    offers: service.price ? {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD'
    } : undefined,
    url: service.url
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
      itemReviewed: {
        '@type': 'Service',
        name: service.name
      },
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
      datePublished: review.datePublished
    }));
  }

  return baseSchema;
};

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

export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  totalTime: howTo.totalTime,
  image: howTo.image,
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image
  }))
});

export const generateOrganizationSchema = (business: BusinessInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mikahsmobiledetailingsc.com/#organization',
  name: business.name,
  url: 'https://mikahsmobiledetailingsc.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mikahsmobiledetailingsc.com/logo.png',
    width: 512,
    height: 512
  },
  image: 'https://mikahsmobiledetailingsc.com/logo.png',
  description: business.description,
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
  sameAs: [
    'https://www.facebook.com/mikahsautodetailing',
    'https://www.instagram.com/mikahsautodetailing',
    'https://www.google.com/maps/place/Mikah+s+Auto+Detailing'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: business.phone,
    contactType: 'Customer Service',
    areaServed: 'US-SC',
    availableLanguage: 'English'
  }
});

export const generateVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  contentUrl: video.contentUrl,
  embedUrl: video.contentUrl
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  priceValidUntil?: string;
  availability?: string;
  features?: string[];
  image?: string;
  url: string;
  brand?: string;
  category?: string;
  aggregateRating?: AggregateRatingInfo;
  reviews?: ReviewInfo[];
}) => {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || 'https://mikahsmobiledetailingsc.com/exterior1.jpg',
    url: product.url,
    brand: {
      '@type': 'Brand',
      name: product.brand || "Mikah's Auto Detailing"
    },
    category: product.category || 'Auto Detailing Services'
  };

  if (product.features && product.features.length > 0) {
    baseSchema.additionalProperty = product.features.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature
    }));
  }

  if (product.price && product.price !== 'Quote') {
    baseSchema.offers = {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency || 'USD',
      priceValidUntil: product.priceValidUntil || new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
      availability: product.availability || 'https://schema.org/InStock',
      url: product.url,
      seller: {
        '@type': 'Organization',
        name: "Mikah's Auto Detailing"
      }
    };
  } else if (product.price === 'Quote') {
    baseSchema.offers = {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: product.url,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false
      },
      seller: {
        '@type': 'Organization',
        name: "Mikah's Auto Detailing"
      }
    };
  }

  if (product.aggregateRating) {
    baseSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.aggregateRating.ratingValue.toFixed(1),
      reviewCount: product.aggregateRating.reviewCount.toString(),
      bestRating: product.aggregateRating.bestRating.toString(),
      worstRating: product.aggregateRating.worstRating.toString()
    };
  }

  if (product.reviews && product.reviews.length > 0) {
    baseSchema.review = product.reviews.map(review => ({
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Product',
        name: product.name
      },
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
      datePublished: review.datePublished
    }));
  }

  return baseSchema;
};

export const generateItemListSchema = (items: Array<{
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: item.name,
      description: item.description,
      url: item.url,
      image: item.image || 'https://mikahsmobiledetailingsc.com/exterior1.jpg',
      offers: item.price ? {
        '@type': 'Offer',
        price: item.price,
        priceCurrency: 'USD'
      } : undefined
    }
  }))
});
