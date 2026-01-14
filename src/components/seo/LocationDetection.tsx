import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation as NavigationIcon, ArrowRight, Star, Clock } from 'lucide-react';

interface LocationData {
  name: string;
  slug: string;
  distance: number;
  estimatedTime: string;
  specialties: string[];
  coordinates: { lat: number; lng: number };
}

interface UserLocation {
  lat: number;
  lng: number;
  city?: string;
  state?: string;
}

interface LocationDetectionProps {
  showNearestLocations?: number;
  showCallout?: boolean;
  compact?: boolean;
}

export const LocationDetection: React.FC<LocationDetectionProps> = ({
  showNearestLocations = 3,
  showCallout = true,
  compact = false
}) => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
  const [nearestLocations, setNearestLocations] = useState<LocationData[]>([]);

  // Service area locations with coordinates (South Carolina locations)
  const serviceLocations: LocationData[] = [
    {
      name: 'Lexington SC',
      slug: 'lexington-sc',
      distance: 0,
      estimatedTime: '',
      specialties: ['Lake Murray Detailing', 'Sunset Boulevard Service', 'Medical Center Area'],
      coordinates: { lat: 33.9816, lng: -81.2362 }
    },
    {
      name: 'Columbia SC',
      slug: 'columbia-sc',
      distance: 0,
      estimatedTime: '',
      specialties: ['USC Campus Service', 'Downtown Detailing', 'Five Points Area'],
      coordinates: { lat: 34.0007, lng: -81.0348 }
    },
    {
      name: 'Irmo SC',
      slug: 'irmo-sc',
      distance: 0,
      estimatedTime: '',
      specialties: ['Harbison District', 'Lake Murray Dam', 'Premium Vehicles'],
      coordinates: { lat: 34.0851, lng: -81.1821 }
    },
    {
      name: 'West Columbia SC',
      slug: 'west-columbia-sc',
      distance: 0,
      estimatedTime: '',
      specialties: ['Meeting Street Corridor', 'Airport Road', 'Government District'],
      coordinates: { lat: 33.9935, lng: -81.0740 }
    },
    {
      name: 'Cayce SC',
      slug: 'cayce-sc',
      distance: 0,
      estimatedTime: '',
      specialties: ['Riverwalk District', 'Historic Cayce', 'Airport Boulevard'],
      coordinates: { lat: 33.9613, lng: -81.0748 }
    }
  ];

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Estimate travel time based on distance
  const estimateTravelTime = (distance: number): string => {
    const avgSpeedMph = 35; // Average speed in urban areas
    const timeHours = distance / avgSpeedMph;
    const timeMinutes = Math.round(timeHours * 60);

    if (timeMinutes < 60) {
      return `${timeMinutes} min`;
    } else {
      const hours = Math.floor(timeMinutes / 60);
      const minutes = timeMinutes % 60;
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
  };

  // Get user's location
  const getUserLocation = () => {
    setIsLoading(true);
    setLocationPermissionDenied(false);

    if (!navigator.geolocation) {
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        calculateNearestLocations(location);
        setIsLoading(false);
      },
      (error) => {
        setLocationPermissionDenied(true);
        setIsLoading(false);
        // Fallback: show all locations without distance
        setNearestLocations(serviceLocations.slice(0, showNearestLocations));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  // Calculate nearest service locations
  const calculateNearestLocations = (userLoc: UserLocation) => {
    const locationsWithDistance = serviceLocations.map(location => ({
      ...location,
      distance: calculateDistance(userLoc.lat, userLoc.lng, location.coordinates.lat, location.coordinates.lng),
      estimatedTime: ''
    }));

    // Sort by distance and add estimated time
    const sorted = locationsWithDistance
      .sort((a, b) => a.distance - b.distance)
      .slice(0, showNearestLocations)
      .map(location => ({
        ...location,
        estimatedTime: estimateTravelTime(location.distance)
      }));

    setNearestLocations(sorted);
  };

  // Check if user is likely in South Carolina based on coordinates
  const isInSouthCarolina = (lat: number, lng: number): boolean => {
    // Rough bounds for South Carolina
    return lat >= 32.0 && lat <= 35.2 && lng >= -83.5 && lng <= -78.5;
  };

  useEffect(() => {
    // Auto-detect location on component mount
    if (navigator.geolocation) {
      getUserLocation();
    } else {
      setNearestLocations(serviceLocations.slice(0, showNearestLocations));
    }
  }, [showNearestLocations]);

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-200 rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 text-primary-600 mr-2" />
              <span className="font-semibold text-primary-800">Mobile Service to Your Location</span>
            </div>
            {userLocation && nearestLocations.length > 0 && (
              <div className="text-sm text-primary-700">
                Nearest service: <strong>{nearestLocations[0].name}</strong>
                <span className="text-primary-600"> ({Math.round(nearestLocations[0].distance)} miles, {nearestLocations[0].estimatedTime})</span>
              </div>
            )}
          </div>
          <button
            onClick={getUserLocation}
            className="text-primary-600 hover:text-primary-800 transition"
            disabled={isLoading}
          >
            <NavigationIcon className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
      {/* Location Detection Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-primary-600 mr-3" />
          <div>
            <h3 className="text-xl font-bold">Find Your Nearest Mobile Detailing Service</h3>
            <p className="text-gray-600 text-sm">Get personalized service information for your area</p>
          </div>
        </div>
        <button
          onClick={getUserLocation}
          disabled={isLoading}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 disabled:opacity-50"
        >
          <NavigationIcon className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Locating...' : 'Find Me'}
        </button>
      </div>

      {/* Location Status */}
      {userLocation && isInSouthCarolina(userLocation.lat, userLocation.lng) && showCallout && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-green-600 mr-2" />
            <div className="text-green-800">
              <p className="font-semibold">Great news! You're in our service area.</p>
              <p className="text-sm">We provide mobile auto detailing directly to your location.</p>
            </div>
          </div>
        </div>
      )}

      {locationPermissionDenied && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <div className="text-blue-800">
              <p className="font-semibold">Location access not available</p>
              <p className="text-sm">Showing all service areas. Call (803) 667-8731 to confirm we serve your area.</p>
            </div>
          </div>
        </div>
      )}

      {/* Nearest Locations */}
      {nearestLocations.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            {userLocation ? 'Your Nearest Service Areas' : 'Our Service Areas'}
            {userLocation && (
              <Clock className="w-4 h-4 text-gray-500 ml-2" />
            )}
          </h4>

          <div className="space-y-4">
            {nearestLocations.map((location, index) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group block border border-gray-200 hover:border-primary-300 rounded-lg p-4 transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h5 className="text-lg font-semibold group-hover:text-primary-600 transition">
                        {location.name}
                      </h5>
                      {index === 0 && userLocation && (
                        <span className="ml-2 bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                          Closest
                        </span>
                      )}
                    </div>

                    {userLocation && (
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{Math.round(location.distance)} miles away</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{location.estimatedTime}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {location.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Service Area Coverage */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start">
          <Star className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-gray-800 mb-1">100% Mobile Service</p>
            <p className="text-gray-600">
              We bring all equipment directly to your location - no need to travel. Serving all areas within 25 miles of our locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetection;