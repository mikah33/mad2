/**
 * Location Page Implementation Example
 *
 * This file demonstrates how to use the LocationPage component
 * with sample business data and pricing structure.
 */

import React from 'react';
import { LocationPage } from '../src/components/location/LocationPage';
import { locations } from '../src/data/locations';
import { additionalLocations } from '../src/data/additional-locations';
import { PricingTier } from '../src/types/location';

// Combine all location data
const allLocations = [...locations, ...additionalLocations];

// Business information - UPDATE WITH YOUR ACTUAL INFORMATION
const businessInfo = {
  name: 'Mikahs Auto Detailing',
  phone: '(803) 555-0123', // UPDATE THIS
  streetAddress: '123 Main Street', // UPDATE THIS
  postalCode: '29201', // UPDATE THIS
  image: 'https://yoursite.com/images/business-logo.jpg', // UPDATE THIS
  website: 'https://yoursite.com', // UPDATE THIS
  socialLinks: [
    'https://facebook.com/mikahsautodetailing', // UPDATE THIS
    'https://instagram.com/mikahsautodetailing', // UPDATE THIS
    'https://twitter.com/mikahsauto', // OPTIONAL
  ],
};

// Pricing structure - UPDATE WITH YOUR ACTUAL SERVICES AND PRICES
const pricingTiers: PricingTier[] = [
  {
    name: 'Essential Services',
    services: [
      {
        name: 'Express Exterior Wash',
        description: 'Quick hand wash with tire shine and window cleaning',
        price: '$49',
        duration: '45 minutes',
        features: [
          'Hand wash exterior with premium soap',
          'Wheel and tire cleaning',
          'Tire shine application',
          'All windows cleaned inside and out',
          'Quick dry and final inspection',
        ],
      },
      {
        name: 'Interior Detail',
        description: 'Deep cleaning and protection for your vehicle interior',
        price: '$99',
        duration: '2 hours',
        features: [
          'Thorough vacuum of all surfaces',
          'Leather conditioning or fabric treatment',
          'Dashboard and console detailed',
          'Door jambs and panels cleaned',
          'Windows streak-free cleaned',
          'Air freshener application',
        ],
      },
      {
        name: 'Basic Combo',
        description: 'Exterior wash plus basic interior cleaning',
        price: '$129',
        duration: '2.5 hours',
        features: [
          'Everything in Express Exterior Wash',
          'Vacuum and basic interior cleaning',
          'Dashboard wipe down',
          'Floor mats cleaned',
          'Windows inside and out',
        ],
      },
    ],
  },
  {
    name: 'Premium Packages',
    services: [
      {
        name: 'Complete Detail',
        description: 'Full interior and exterior restoration and protection',
        price: '$199',
        duration: '4-5 hours',
        features: [
          'Everything in Express Exterior Wash',
          'Everything in Interior Detail',
          'Clay bar treatment for paint',
          'Paint sealant application',
          'Engine bay cleaning and dressing',
          'Headlight restoration (if needed)',
          'Pet hair removal',
          'Odor elimination treatment',
        ],
      },
      {
        name: 'Paint Correction',
        description: 'Remove swirls, scratches, and oxidation',
        price: '$299',
        duration: '6-8 hours',
        features: [
          'Multi-stage machine polishing',
          'Swirl mark removal',
          'Light scratch removal',
          'Paint depth enhancement',
          'Premium wax application',
          'Clay bar treatment included',
          '6-month protection guarantee',
        ],
      },
      {
        name: 'Ceramic Coating',
        description: 'Ultimate long-term paint protection',
        price: '$599+',
        duration: 'Full day',
        features: [
          'Complete paint correction included',
          'Professional ceramic coating application',
          '3-5 year protection (depending on package)',
          'Extreme hydrophobic properties',
          'UV and chemical protection',
          'Enhanced gloss and depth',
          'Easier maintenance and cleaning',
          'Warranty included',
        ],
      },
    ],
  },
  {
    name: 'Specialty Services',
    services: [
      {
        name: 'Boat & RV Detailing',
        description: 'Specialized cleaning for boats and recreational vehicles',
        price: 'Custom Quote',
        duration: 'Varies',
        features: [
          'Hull cleaning and waxing',
          'Interior cabin detailing',
          'Teak and vinyl restoration',
          'Oxidation removal',
          'Metal polishing',
          'Canvas and upholstery cleaning',
        ],
      },
      {
        name: 'Fleet Services',
        description: 'Volume pricing for business vehicle fleets',
        price: 'Custom Quote',
        duration: 'Scheduled',
        features: [
          'Dedicated service scheduling',
          'Volume discounts available',
          'On-site service at your business',
          'Customized maintenance plans',
          'Priority booking',
          'Detailed service reports',
        ],
      },
      {
        name: 'Headlight Restoration',
        description: 'Restore clarity and brightness to foggy headlights',
        price: '$79',
        duration: '1 hour',
        features: [
          'Remove oxidation and yellowing',
          'Multi-stage sanding process',
          'UV protection coating',
          'Significant visibility improvement',
          'Safer night driving',
          'Stand-alone or add-on service',
        ],
      },
    ],
  },
];

// Example: Single Location Page Component
export function ExampleLocationPage() {
  // Get Columbia location as example
  const location = allLocations.find(loc => loc.slug === 'columbia');

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <LocationPage
      location={location}
      pricingTiers={pricingTiers}
      businessInfo={businessInfo}
    />
  );
}

// Example: Dynamic Location Page (for use with Next.js or React Router)
export function DynamicLocationPage({ slug }: { slug: string }) {
  const location = allLocations.find(loc => loc.slug === slug);

  if (!location) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find a page for this location.
        </p>
        <a
          href="/locations"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          View All Locations
        </a>
      </div>
    );
  }

  return (
    <LocationPage
      location={location}
      pricingTiers={pricingTiers}
      businessInfo={businessInfo}
    />
  );
}

// Example: Next.js Static Generation Setup
export async function getStaticPaths() {
  const paths = allLocations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' for ISR
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const location = allLocations.find((loc) => loc.slug === params.slug);

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
      pricingTiers,
      businessInfo,
    },
    revalidate: 86400, // Revalidate once per day (optional, for ISR)
  };
}

// Example: Locations Directory Page
export function LocationsDirectory() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Professional mobile car detailing throughout the Columbia, SC metro area.
            Find your city below.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allLocations.map((location) => (
              <a
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {location.city}
                  </h2>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {location.county}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{location.description}</p>

                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    Service Radius: {location.serviceArea.radius} miles
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    {location.serviceArea.zipCodes.length} ZIP codes served
                  </div>
                </div>

                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your City?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're expanding our service area constantly. Contact us to see if we can
            serve your location!
          </p>
          <a
            href={`tel:${businessInfo.phone}`}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
          >
            Call {businessInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

// Export all for use in your application
export default ExampleLocationPage;
export { allLocations, businessInfo, pricingTiers };
