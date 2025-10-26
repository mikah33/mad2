# Location Pages Implementation Guide

## Overview

This system creates SEO-optimized, locally-relevant landing pages for car detailing services across the Columbia, SC metro area. Each location page includes unique content, local landmarks, testimonials, FAQs, and Schema.org structured data.

## Features

- **18 Unique Location Pages**: Columbia, Lexington, Irmo, West Columbia, Cayce, Forest Acres, Dentsville, Blythewood, Chapin, Elgin, and more
- **800+ Words Per Page**: Unique, locally-relevant content
- **Schema.org Markup**: LocalBusiness and Breadcrumb structured data
- **Local Testimonials**: 3 unique reviews per location
- **Location-Specific FAQs**: 5-6 questions tailored to each area
- **Service Area Maps**: Interactive maps with coverage information
- **Internal Linking**: Connects to nearby locations
- **Mobile Responsive**: Built with Tailwind CSS

## File Structure

```
src/
├── types/
│   └── location.ts               # TypeScript interfaces
├── utils/
│   └── schema.ts                 # Schema.org markup generators
├── components/
│   └── location/
│       ├── LocationPage.tsx      # Main page component
│       ├── LocationFAQ.tsx       # FAQ section with Schema
│       ├── ServiceAreaMap.tsx    # Interactive map component
│       └── TestimonialsSection.tsx # Reviews section
└── data/
    ├── locations.ts              # First 5 locations (Columbia, Lexington, Irmo, West Columbia, Cayce)
    └── additional-locations.ts   # Additional 5 locations (Forest Acres, Dentsville, Blythewood, Chapin, Elgin)
```

## Usage Example

### 1. Import Location Data

```typescript
import { locations } from '../data/locations';
import { additionalLocations } from '../data/additional-locations';
import { LocationPage } from '../components/location/LocationPage';

// Combine all locations
const allLocations = [...locations, ...additionalLocations];
```

### 2. Create a Single Location Page

```typescript
import React from 'react';
import { LocationPage } from '../components/location/LocationPage';
import { locations } from '../data/locations';

// Business information (reused across all pages)
const businessInfo = {
  name: 'Mikahs Auto Detailing',
  phone: '(803) 555-0123',
  streetAddress: '123 Main Street',
  postalCode: '29201',
  image: 'https://yoursite.com/images/business.jpg',
  website: 'https://yoursite.com',
  socialLinks: [
    'https://facebook.com/mikahsauto',
    'https://instagram.com/mikahsauto',
  ],
};

// Pricing tiers (reused across all pages)
const pricingTiers = [
  {
    name: 'Essential Services',
    services: [
      {
        name: 'Express Exterior Wash',
        description: 'Hand wash, dry, and tire shine',
        price: '$49',
        duration: '45 min',
        features: [
          'Hand wash exterior',
          'Wheel cleaning',
          'Tire shine',
          'Windows cleaned',
          'Quick dry and inspect',
        ],
      },
      // ... more services
    ],
  },
  // ... more tiers
];

// Get specific location
const columbiaLocation = locations.find(loc => loc.slug === 'columbia');

function ColumbiaPage() {
  return (
    <LocationPage
      location={columbiaLocation}
      pricingTiers={pricingTiers}
      businessInfo={businessInfo}
    />
  );
}

export default ColumbiaPage;
```

### 3. Generate All Location Pages (Next.js Example)

```typescript
// pages/locations/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { LocationPage } from '../../components/location/LocationPage';
import { locations } from '../../data/locations';
import { additionalLocations } from '../../data/additional-locations';

const allLocations = [...locations, ...additionalLocations];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allLocations.map((location) => ({
    params: { slug: location.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = allLocations.find((loc) => loc.slug === params?.slug);

  return {
    props: {
      location,
      businessInfo: {
        name: 'Mikahs Auto Detailing',
        phone: '(803) 555-0123',
        streetAddress: '123 Main Street',
        postalCode: '29201',
        image: 'https://yoursite.com/images/business.jpg',
        website: 'https://yoursite.com',
        socialLinks: [
          'https://facebook.com/mikahsauto',
          'https://instagram.com/mikahsauto',
        ],
      },
      pricingTiers: [
        // Your pricing data
      ],
    },
  };
};

export default LocationPage;
```

### 4. Create a Locations Directory Page

```typescript
// pages/locations/index.tsx
import React from 'react';
import Link from 'next/link';
import { locations } from '../../data/locations';
import { additionalLocations } from '../../data/additional-locations';

const allLocations = [...locations, ...additionalLocations];

function LocationsDirectory() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Service Areas
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allLocations.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{location.city}, SC</h2>
            <p className="text-gray-600 mb-4">{location.description}</p>
            <p className="text-blue-600 font-semibold">
              Learn More →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LocationsDirectory;
```

## SEO Implementation

### Meta Tags

Each page includes optimized meta tags:

```typescript
// Add to your page head
<Head>
  <title>{location.metaTitle}</title>
  <meta name="description" content={location.metaDescription} />
  <link rel="canonical" href={`https://yoursite.com/locations/${location.slug}`} />

  {/* Open Graph */}
  <meta property="og:title" content={location.metaTitle} />
  <meta property="og:description" content={location.metaDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://yoursite.com/locations/${location.slug}`} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={location.metaTitle} />
  <meta name="twitter:description" content={location.metaDescription} />
</Head>
```

### Schema.org Structured Data

Schema markup is automatically generated and included in each LocationPage component:
- LocalBusiness schema with geo-coordinates
- BreadcrumbList schema
- FAQPage schema (in LocationFAQ component)

## Google Maps Integration

To display actual maps, replace the API key placeholder:

```typescript
// In ServiceAreaMap.tsx
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.coordinates.latitude},${location.coordinates.longitude}&zoom=11`;
```

Get your API key from: https://console.cloud.google.com/

## Customization

### Adding New Locations

1. Open `src/data/locations.ts` or create a new file
2. Add new LocationData object following the existing pattern:

```typescript
{
  city: 'New City',
  state: 'SC',
  slug: 'new-city',
  coordinates: { latitude: 34.0000, longitude: -81.0000 },
  county: 'County Name',
  population: 10000,
  description: 'Brief description...',
  // ... fill in all required fields
}
```

### Customizing Styling

All components use Tailwind CSS. Modify classes in the component files:
- `/src/components/location/LocationPage.tsx` - Main layout
- `/src/components/location/LocationFAQ.tsx` - FAQ styling
- `/src/components/location/ServiceAreaMap.tsx` - Map section
- `/src/components/location/TestimonialsSection.tsx` - Reviews styling

### Adding Services/Pricing

Update the `pricingTiers` data passed to LocationPage:

```typescript
const pricingTiers = [
  {
    name: 'Service Category',
    services: [
      {
        name: 'Service Name',
        description: 'Description',
        price: '$XX',
        duration: 'X hours',
        features: ['Feature 1', 'Feature 2', '...'],
      },
    ],
  },
];
```

## Performance Optimization

### Image Optimization
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Optimize testimonial images

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

const ServiceAreaMap = dynamic(
  () => import('../components/location/ServiceAreaMap'),
  { ssr: false }
);
```

### Caching
- Enable static generation for all location pages
- Set up CDN caching headers
- Implement incremental static regeneration if content updates frequently

## Analytics Tracking

Track location page performance:

```typescript
// Add to LocationPage component
useEffect(() => {
  // Google Analytics
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: location.metaTitle,
    city: location.city,
  });

  // Track CTA clicks
  document.querySelectorAll('a[href*="tel:"]').forEach(el => {
    el.addEventListener('click', () => {
      gtag('event', 'phone_click', { city: location.city });
    });
  });
}, [location]);
```

## Content Quality Checklist

For each location page, ensure:
- ✅ 800+ words of unique content
- ✅ Local landmarks mentioned (5-6)
- ✅ Neighborhood names included
- ✅ 3 unique testimonials
- ✅ 5-6 location-specific FAQs
- ✅ Accurate geo-coordinates
- ✅ Valid zip codes
- ✅ Links to nearby locations
- ✅ Local keywords naturally integrated
- ✅ H1 includes city name and service
- ✅ Schema.org markup validated

## Testing

### Validate Schema.org Markup
Use Google's Rich Results Test:
https://search.google.com/test/rich-results

### Check Mobile Responsiveness
Test on multiple devices and screen sizes

### Verify Links
Ensure all internal links work correctly

### Test Loading Speed
Use Google PageSpeed Insights to optimize

## Deployment

1. Build static pages: `npm run build`
2. Deploy to hosting platform (Vercel, Netlify, etc.)
3. Submit sitemap to Google Search Console
4. Monitor search performance

## Support

For questions or issues:
- Review component source code in `/src/components/location/`
- Check TypeScript interfaces in `/src/types/location.ts`
- Examine location data structure in `/src/data/`

## Future Enhancements

Consider adding:
- Customer review schema (aggregate ratings)
- Service-specific landing pages per location
- Seasonal content variations
- Local event mentions
- Community involvement highlights
- Before/after image galleries
- Video testimonials
- Live chat integration
- Online booking system integration
