# Location Pages Examples

This directory contains practical implementation examples for the location pages system.

## Files

### location-page-example.tsx

Complete working examples demonstrating:

1. **Single Location Page** - How to render one specific location
2. **Dynamic Location Page** - Handle any location via URL parameter
3. **Next.js Static Generation** - Setup for getStaticPaths and getStaticProps
4. **Locations Directory** - Grid view of all service areas
5. **Sample Business Data** - Template for your business information
6. **Sample Pricing Structure** - Complete pricing tiers with all details

## Quick Start

### 1. Copy Business Information

Update the `businessInfo` object with your actual details:

```typescript
const businessInfo = {
  name: 'Your Business Name',
  phone: '(XXX) XXX-XXXX',
  streetAddress: 'Your Street Address',
  postalCode: 'Your ZIP',
  image: 'https://yoursite.com/logo.jpg',
  website: 'https://yoursite.com',
  socialLinks: ['https://facebook.com/...', 'https://instagram.com/...'],
};
```

### 2. Update Pricing

Modify the `pricingTiers` array with your services and prices:

```typescript
const pricingTiers = [
  {
    name: 'Service Category',
    services: [
      {
        name: 'Service Name',
        description: 'Service description',
        price: '$XX',
        duration: 'X hours',
        features: ['Feature 1', 'Feature 2', '...'],
      },
    ],
  },
];
```

### 3. Use in Your App

#### React Router Example

```typescript
import { DynamicLocationPage } from './examples/location-page-example';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/locations/:slug" element={<DynamicLocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### Next.js Example

```typescript
// pages/locations/[slug].tsx
import { DynamicLocationPage, getStaticPaths, getStaticProps } from '../../examples/location-page-example';

export { getStaticPaths, getStaticProps };
export default DynamicLocationPage;
```

#### Simple React Example

```typescript
import { ExampleLocationPage } from './examples/location-page-example';

function App() {
  return <ExampleLocationPage />;
}
```

## Customization

### Add More Services

```typescript
pricingTiers.push({
  name: 'New Category',
  services: [
    {
      name: 'New Service',
      description: 'What it includes',
      price: '$XXX',
      duration: 'X hours',
      features: ['Feature 1', 'Feature 2'],
    },
  ],
});
```

### Modify Locations Directory

The `LocationsDirectory` component can be customized:

- Change grid layout (currently 3 columns on large screens)
- Add filtering or search functionality
- Customize card design
- Add more metadata per location

### Change Styling

All components use Tailwind CSS. Modify classes directly:

```typescript
// Change primary color from blue to another color
className="bg-blue-600" → className="bg-purple-600"
className="text-blue-600" → className="text-purple-600"
```

## Testing

### Test Single Location

```typescript
import { ExampleLocationPage } from './examples/location-page-example';
import { render } from '@testing-library/react';

test('renders Columbia location page', () => {
  const { getByText } = render(<ExampleLocationPage />);
  expect(getByText(/Columbia/i)).toBeInTheDocument();
});
```

### Test Dynamic Routing

```typescript
import { DynamicLocationPage } from './examples/location-page-example';

test('renders any location by slug', () => {
  const { getByText } = render(<DynamicLocationPage slug="lexington" />);
  expect(getByText(/Lexington/i)).toBeInTheDocument();
});
```

## Deployment Checklist

Before deploying:

- [ ] Update businessInfo with real data
- [ ] Update pricingTiers with actual services and prices
- [ ] Add Google Maps API key in ServiceAreaMap.tsx
- [ ] Replace placeholder images with real photos
- [ ] Test all location pages load correctly
- [ ] Validate Schema.org markup
- [ ] Test mobile responsiveness
- [ ] Check page load speed
- [ ] Set up analytics tracking

## Need Help?

Refer to:
- **Main Documentation**: `/docs/location-pages-usage.md`
- **Summary**: `/docs/LOCATION-PAGES-SUMMARY.md`
- **Component Source**: `/src/components/location/`
- **Type Definitions**: `/src/types/location.ts`

## Next Steps

1. Copy businessInfo and pricingTiers to your main app
2. Import LocationPage component where needed
3. Set up routing for all locations
4. Deploy and test
5. Monitor performance and conversions

Good luck! 🚀
