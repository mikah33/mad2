import React from 'react';
import { LocationData } from '../../types/location';

interface ServiceAreaMapProps {
  location: LocationData;
}

const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ location }) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.coordinates.latitude},${location.coordinates.longitude}&zoom=11`;

  return (
    <section className="service-area-map py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Service Area in {location.city}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We proudly serve {location.city} and surrounding areas within a{' '}
            {location.serviceArea.radius}-mile radius
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Service area map for ${location.city}`}
              />
            </div>

            {/* Service Area Details */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Areas We Cover
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Primary City</p>
                      <p className="text-gray-700">{location.city}, SC</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Service Radius</p>
                      <p className="text-gray-700">
                        {location.serviceArea.radius} miles from {location.city}
                      </p>
                    </div>
                  </div>

                  {location.neighborhoods.length > 0 && (
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">
                          Neighborhoods Served
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {location.neighborhoods.slice(0, 6).map((neighborhood) => (
                            <span
                              key={neighborhood}
                              className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-blue-200"
                            >
                              {neighborhood}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {location.serviceArea.zipCodes.length > 0 && (
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Zip Codes</p>
                        <p className="text-gray-700">
                          {location.serviceArea.zipCodes.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {location.nearbyLocations.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Nearby Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {location.nearbyLocations.map((nearbyCity) => (
                      <a
                        key={nearbyCity}
                        href={`/locations/${nearbyCity.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {nearbyCity}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
