/**
 * Mobile Detailing Product Schema - Product schemas for detailing packages and pricing
 * Targets "mobile detailing pricing" and package-specific searches
 */

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface MobileDetailingProductOptions {
  includeReviews?: boolean;
  includeDelivery?: boolean;
  includeWarranty?: boolean;
}

/**
 * Generate Product schemas for mobile detailing packages
 */
export const generateMobileDetailingProductSchemas = (
  options: MobileDetailingProductOptions = {}
) => {
  const {
    includeReviews = true,
    includeDelivery = true,
    includeWarranty = true
  } = options;

  const baseProduct = {
    '@context': 'https://schema.org',
    brand: {
      '@type': 'Brand',
      name: "Mikah's Auto Detailing",
      logo: `${baseUrl}/logo.jpg`
    },
    category: 'Mobile Car Detailing Services',
    manufacturer: {
      '@type': 'LocalBusiness',
      name: "Mikah's Auto Detailing"
    },
    seller: {
      '@type': 'LocalBusiness',
      name: "Mikah's Auto Detailing",
      telephone: '(803) 667-8731',
      url: baseUrl
    }
  };

  const products = [
    {
      '@type': 'Product',
      '@id': `${baseUrl}/products/basic-mobile-detailing`,
      name: 'Basic Mobile Car Detailing Package',
      description: 'Essential mobile car detailing service perfect for regular maintenance. Includes exterior wash, interior vacuum, basic cleaning, and tire shine. Great value for keeping your car clean.',
      sku: 'MAD-BASIC-001',
      image: [
        `${baseUrl}/exterior1.jpg`,
        `${baseUrl}/interior1.jpg`
      ],
      keywords: 'basic mobile detailing, affordable car detailing, mobile car wash, basic auto detailing package',
      ...baseProduct,
      offers: {
        '@type': 'Offer',
        '@id': `${baseUrl}/products/basic-mobile-detailing/offer`,
        price: '150',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        url: `${baseUrl}/book`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '150',
          priceCurrency: 'USD',
          eligibleDuration: {
            '@type': 'QuantitativeValue',
            value: '2-3',
            unitCode: 'HUR'
          }
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY'
            }
          }
        }
      }
    },
    {
      '@type': 'Product',
      '@id': `${baseUrl}/products/premium-mobile-detailing`,
      name: 'Premium Mobile Car Detailing Package',
      description: 'Comprehensive mobile auto detailing for the discerning car owner. Includes deep interior cleaning, exterior wash and wax, tire and wheel detailing, dashboard conditioning, and paint protection.',
      sku: 'MAD-PREMIUM-002',
      image: [
        `${baseUrl}/mclarens.jpg`,
        `${baseUrl}/exterior2.jpg`
      ],
      keywords: 'premium mobile detailing, comprehensive car detailing, mobile auto detailing, professional car care',
      ...baseProduct,
      offers: {
        '@type': 'Offer',
        '@id': `${baseUrl}/products/premium-mobile-detailing/offer`,
        price: '250',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        url: `${baseUrl}/book`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '250',
          priceCurrency: 'USD',
          eligibleDuration: {
            '@type': 'QuantitativeValue',
            value: '3-4',
            unitCode: 'HUR'
          }
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY'
            }
          }
        }
      }
    },
    {
      '@type': 'Product',
      '@id': `${baseUrl}/products/luxury-mobile-detailing`,
      name: 'Luxury Mobile Car Detailing Package',
      description: 'Ultimate mobile car detailing experience for luxury and exotic vehicles. Includes paint correction, premium wax application, interior deep cleaning, leather conditioning, engine bay cleaning, and ceramic coating preparation.',
      sku: 'MAD-LUXURY-003',
      image: [
        `${baseUrl}/mclarens.jpg`,
        `${baseUrl}/exterior3.jpg`
      ],
      keywords: 'luxury mobile detailing, premium car detailing, exotic car detailing, paint correction mobile service',
      ...baseProduct,
      offers: {
        '@type': 'Offer',
        '@id': `${baseUrl}/products/luxury-mobile-detailing/offer`,
        price: '350',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        url: `${baseUrl}/book`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '350',
          priceCurrency: 'USD',
          eligibleDuration: {
            '@type': 'QuantitativeValue',
            value: '4-6',
            unitCode: 'HUR'
          }
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY'
            }
          }
        }
      }
    },
    {
      '@type': 'Product',
      '@id': `${baseUrl}/products/interior-detailing-service`,
      name: 'Car Interior Detailing Service',
      description: 'Specialized interior car detailing focusing on deep cleaning, stain removal, upholstery protection, and odor elimination. Perfect for maintaining your vehicle\'s interior.',
      sku: 'MAD-INTERIOR-004',
      image: [
        `${baseUrl}/interior1.jpg`
      ],
      keywords: 'car interior detailing, interior cleaning service, upholstery cleaning, leather conditioning',
      ...baseProduct,
      offers: {
        '@type': 'AggregateOffer',
        '@id': `${baseUrl}/products/interior-detailing-service/offer`,
        lowPrice: '100',
        highPrice: '200',
        priceCurrency: 'USD',
        offerCount: '3',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        validThrough: '2026-12-31',
        url: `${baseUrl}/services/interior-detailing`
      }
    }
  ];

  // Add reviews if requested
  if (includeReviews) {
    products.forEach((product: any) => {
      product.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '31'
      };

      product.review = [
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Product',
            name: product.name
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          },
          author: {
            '@type': 'Person',
            name: 'Sarah Johnson'
          },
          reviewBody: 'Excellent mobile detailing service! They came to my office and made my car look brand new. Professional and thorough.',
          datePublished: '2024-12-15'
        },
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Product',
            name: product.name
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          },
          author: {
            '@type': 'Person',
            name: 'Mike Davis'
          },
          reviewBody: 'Best mobile detailing in Columbia! The convenience of having them come to you is amazing. Great value and quality.',
          datePublished: '2024-11-28'
        }
      ];
    });
  }

  // Add delivery information if requested
  if (includeDelivery) {
    products.forEach((product: any) => {
      if (product.offers) {
        product.offers.deliveryMethod = {
          '@type': 'DeliveryMethod',
          name: 'Mobile Service Delivery',
          description: 'We come to your location with all professional equipment'
        };

        product.offers.hasMerchantReturnPolicy = {
          '@type': 'MerchantReturnPolicy',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 7,
          returnMethod: 'https://schema.org/ReturnAtKiosk'
        };
      }
    });
  }

  // Add warranty information if requested
  if (includeWarranty) {
    products.forEach((product: any) => {
      product.warranty = {
        '@type': 'WarrantyPromise',
        durationOfWarranty: {
          '@type': 'QuantitativeValue',
          value: 30,
          unitCode: 'DAY'
        },
        warrantyScope: 'Satisfaction guarantee on all mobile detailing services'
      };
    });
  }

  return products;
};

/**
 * Generate ItemList schema for mobile detailing packages
 */
export const generateMobileDetailingPackageListSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/services#packages`,
    name: 'Mobile Car Detailing Packages',
    description: 'Professional mobile car detailing packages in Columbia SC - we come to you!',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Basic Mobile Detailing',
          description: 'Essential mobile car detailing package',
          image: `${baseUrl}/exterior1.jpg`,
          brand: {
            '@type': 'Brand',
            name: "Mikah's Auto Detailing"
          },
          offers: {
            '@type': 'Offer',
            price: '150',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2026-12-31',
            url: `${baseUrl}/book`
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Premium Mobile Detailing',
          description: 'Comprehensive mobile auto detailing',
          image: `${baseUrl}/mclarens.jpg`,
          brand: {
            '@type': 'Brand',
            name: "Mikah's Auto Detailing"
          },
          offers: {
            '@type': 'Offer',
            price: '250',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2026-12-31',
            url: `${baseUrl}/book`
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'Luxury Mobile Detailing',
          description: 'Ultimate mobile car detailing experience',
          image: `${baseUrl}/mclarens.jpg`,
          brand: {
            '@type': 'Brand',
            name: "Mikah's Auto Detailing"
          },
          offers: {
            '@type': 'Offer',
            price: '350',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2026-12-31',
            url: `${baseUrl}/book`
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          name: 'Interior Detailing Service',
          description: 'Specialized interior car detailing',
          image: `${baseUrl}/interior1.jpg`,
          brand: {
            '@type': 'Brand',
            name: "Mikah's Auto Detailing"
          },
          offers: {
            '@type': 'Offer',
            price: '100',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2026-12-31',
            url: `${baseUrl}/services/interior-detailing`
          }
        }
      }
    ]
  };
};

export default {
  generateMobileDetailingProductSchemas,
  generateMobileDetailingPackageListSchema
};