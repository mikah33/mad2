// Service Area Optimization for Enhanced Local SEO
// Precise geographic targeting for maximum "near me" search visibility

export const serviceAreaConfigurations = {
  columbia: {
    primary: {
      center: { lat: 34.0007, lng: -81.0348 },
      radius: 15, // miles
      priority: "HIGH"
    },
    neighborhoods: [
      {
        name: "Five Points",
        center: { lat: 34.0015, lng: -81.0305 },
        radius: 2,
        specialization: "USC Gameday Services",
        keywords: ["five points mobile detailing", "usc student car wash", "gameday vehicle prep"]
      },
      {
        name: "Forest Acres",
        center: { lat: 34.0325, lng: -80.9947 },
        radius: 3,
        specialization: "Luxury Vehicle Care",
        keywords: ["forest acres luxury detailing", "upscale columbia car care", "premium vehicle services"]
      },
      {
        name: "Shandon",
        center: { lat: 34.0175, lng: -81.0525 },
        radius: 2,
        specialization: "Historic Luxury District",
        keywords: ["shandon neighborhood detailing", "historic columbia car care", "luxury residential services"]
      },
      {
        name: "Downtown Columbia",
        center: { lat: 33.9986, lng: -81.0353 },
        radius: 2,
        specialization: "Professional Business Services",
        keywords: ["downtown columbia auto detailing", "state house car care", "business district mobile wash"]
      },
      {
        name: "The Vista",
        center: { lat: 33.9945, lng: -81.0375 },
        radius: 1.5,
        specialization: "Entertainment District",
        keywords: ["vista entertainment detailing", "nightlife car care", "restaurant district vehicle services"]
      }
    ],
    landmarks: [
      {
        name: "University of South Carolina",
        location: { lat: 34.0224, lng: -81.0304 },
        serviceRadius: 3,
        specialServices: ["gameday detailing", "student parking services", "tailgate prep"],
        peakTimes: ["gameday weekends", "graduation", "orientation"]
      },
      {
        name: "South Carolina State House",
        location: { lat: 34.0006, lng: -81.0353 },
        serviceRadius: 1,
        specialServices: ["government worker convenience", "lunch break detailing", "professional image care"],
        peakTimes: ["legislative session", "lunch hours", "government events"]
      },
      {
        name: "Williams-Brice Stadium",
        location: { lat: 33.9733, lng: -81.0199 },
        serviceRadius: 2,
        specialServices: ["tailgate lot detailing", "pregame prep", "postgame cleanup"],
        peakTimes: ["football season saturdays", "cocky events", "graduation ceremonies"]
      }
    ]
  },

  lexington: {
    primary: {
      center: { lat: 33.9816, lng: -81.2362 },
      radius: 12,
      priority: "CURRENT_FOCUS"
    },
    neighborhoods: [
      {
        name: "Red Bank",
        center: { lat: 33.9950, lng: -81.2150 },
        radius: 2,
        specialization: "Lake Community Services",
        keywords: ["red bank mobile detailing", "lake murray car care", "waterfront vehicle services"]
      },
      {
        name: "Oak Grove",
        center: { lat: 33.9700, lng: -81.2500 },
        radius: 2,
        specialization: "Family Residential Services",
        keywords: ["oak grove family detailing", "lexington family car care", "suburban vehicle services"]
      },
      {
        name: "Sunset Boulevard Corridor",
        center: { lat: 33.9816, lng: -81.2100 },
        radius: 3,
        specialization: "Commercial Strip Services",
        keywords: ["sunset boulevard car detailing", "shopping center vehicle care", "commercial strip mobile wash"]
      }
    ],
    landmarks: [
      {
        name: "Lake Murray",
        location: { lat: 34.0450, lng: -81.2167 },
        serviceRadius: 5,
        specialServices: ["boat launch cleanup", "lake house services", "waterfront property care"],
        peakTimes: ["summer weekends", "holidays", "boating season"]
      },
      {
        name: "Lexington Medical Center",
        location: { lat: 33.9733, lng: -81.2333 },
        serviceRadius: 2,
        specialServices: ["healthcare worker convenience", "shift change services", "visitor vehicle care"],
        peakTimes: ["shift changes", "visiting hours", "medical conferences"]
      }
    ]
  },

  irmo: {
    primary: {
      center: { lat: 34.0901, lng: -81.1826 },
      radius: 10,
      priority: "MEDIUM"
    },
    neighborhoods: [
      {
        name: "Seven Oaks",
        center: { lat: 34.0850, lng: -81.1750 },
        radius: 2,
        specialization: "Family Community Services",
        keywords: ["seven oaks mobile detailing", "irmo family car care", "neighborhood vehicle services"]
      },
      {
        name: "Harbison Business District",
        center: { lat: 34.0950, lng: -81.1900 },
        radius: 2,
        specialization: "Professional Business Services",
        keywords: ["harbison business detailing", "professional car care irmo", "business district mobile wash"]
      }
    ],
    landmarks: [
      {
        name: "Columbiana Centre",
        location: { lat: 34.0950, lng: -81.1900 },
        serviceRadius: 2,
        specialServices: ["shopping trip vehicle care", "family outing detailing", "retail convenience services"],
        peakTimes: ["weekends", "holidays", "back to school"]
      },
      {
        name: "Harbison State Forest",
        location: { lat: 34.1150, lng: -81.1667 },
        serviceRadius: 3,
        specialServices: ["outdoor enthusiast cleanup", "hiking trip prep", "recreation vehicle care"],
        peakTimes: ["weekends", "holidays", "spring/fall seasons"]
      }
    ]
  },

  cayce: {
    primary: {
      center: { lat: 33.9613, lng: -81.0748 },
      radius: 8,
      priority: "MEDIUM"
    },
    neighborhoods: [
      {
        name: "Historic Cayce",
        center: { lat: 33.9600, lng: -81.0700 },
        radius: 1.5,
        specialization: "Heritage Community Services",
        keywords: ["historic cayce detailing", "heritage car care", "community vehicle services"]
      },
      {
        name: "Granby Mill Village",
        center: { lat: 33.9650, lng: -81.0800 },
        radius: 1,
        specialization: "Historic Mill Community",
        keywords: ["granby mill detailing", "historic mill car care", "village vehicle services"]
      }
    ],
    landmarks: [
      {
        name: "Congaree River",
        location: { lat: 33.9500, lng: -81.0600 },
        serviceRadius: 2,
        specialServices: ["river recreation cleanup", "fishing trip prep", "waterside vehicle care"],
        peakTimes: ["fishing season", "recreation weekends", "summer activities"]
      }
    ]
  },

  westColumbia: {
    primary: {
      center: { lat: 33.9937, lng: -81.0739 },
      radius: 10,
      priority: "HIGH"
    },
    neighborhoods: [
      {
        name: "Riverwalk",
        center: { lat: 33.9900, lng: -81.0650 },
        radius: 2,
        specialization: "Recreation and Fitness Services",
        keywords: ["riverwalk mobile detailing", "fitness activity car care", "recreation vehicle services"]
      },
      {
        name: "Airport Area",
        center: { lat: 33.9950, lng: -81.1200 },
        radius: 3,
        specialization: "Business Travel Services",
        keywords: ["airport area car detailing", "business traveler vehicle care", "professional travel services"]
      }
    ],
    landmarks: [
      {
        name: "USC School of Law",
        location: { lat: 33.9970, lng: -81.0250 },
        serviceRadius: 1,
        specialServices: ["law student convenience", "professional networking", "court appearance prep"],
        peakTimes: ["exam periods", "bar exam season", "graduation"]
      },
      {
        name: "South Carolina State Museum",
        location: { lat: 33.9885, lng: -81.0456 },
        serviceRadius: 1,
        specialServices: ["visitor vehicle care", "event attendee services", "cultural activity cleanup"],
        peakTimes: ["special exhibitions", "school field trips", "weekend events"]
      }
    ]
  }
};

// Generate precise service area schema for each location
export function generateServiceAreaSchema(city, includeNeighborhoods = true) {
  const config = serviceAreaConfigurations[city];
  if (!config) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": `${city.charAt(0).toUpperCase() + city.slice(1)} Mobile Detailing Service Area`,
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": config.primary.center.lat.toString(),
        "longitude": config.primary.center.lng.toString()
      },
      "geoRadius": `${config.primary.radius} miles`
    },
    "containsPlace": []
  };

  if (includeNeighborhoods && config.neighborhoods) {
    schema.containsPlace = config.neighborhoods.map(neighborhood => ({
      "@type": "Neighborhood",
      "name": neighborhood.name,
      "description": neighborhood.specialization,
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": neighborhood.center.lat.toString(),
          "longitude": neighborhood.center.lng.toString()
        },
        "geoRadius": `${neighborhood.radius} miles`
      }
    }));
  }

  return schema;
}

// Generate landmark-specific service schema
export function generateLandmarkServiceSchema(city, landmarkName) {
  const config = serviceAreaConfigurations[city];
  if (!config || !config.landmarks) return null;

  const landmark = config.landmarks.find(l => l.name === landmarkName);
  if (!landmark) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Mobile Detailing near ${landmark.name}`,
    "description": `Specialized mobile auto detailing services for ${landmark.name} in ${city}`,
    "serviceType": landmark.specialServices,
    "areaServed": {
      "@type": "Place",
      "name": landmark.name,
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": landmark.location.lat.toString(),
          "longitude": landmark.location.lng.toString()
        },
        "geoRadius": `${landmark.serviceRadius} miles`
      }
    },
    "availableAtOrFrom": {
      "@type": "Place",
      "name": landmark.name
    }
  };
}

// Calculate travel time between locations
export function calculateTravelTime(fromLocation, toLocation, trafficMultiplier = 1.2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (toLocation.lat - fromLocation.lat) * Math.PI / 180;
  const dLng = (toLocation.lng - fromLocation.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(fromLocation.lat * Math.PI / 180) * Math.cos(toLocation.lat * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  // Assume average speed of 30 mph in city traffic
  const baseTime = (distance / 30) * 60; // minutes
  return Math.round(baseTime * trafficMultiplier);
}

// Generate travel time matrix for service area
export function generateTravelTimeMatrix(city) {
  const config = serviceAreaConfigurations[city];
  if (!config) return null;

  const matrix = {};
  const baseLocation = config.primary.center;

  config.neighborhoods?.forEach(neighborhood => {
    matrix[neighborhood.name] = calculateTravelTime(baseLocation, neighborhood.center);
  });

  config.landmarks?.forEach(landmark => {
    matrix[landmark.name] = calculateTravelTime(baseLocation, landmark.location);
  });

  return matrix;
}

// Optimize service routing based on geographic clusters
export function optimizeServiceRouting(city, appointments) {
  const config = serviceAreaConfigurations[city];
  if (!config) return appointments;

  // Group appointments by proximity to reduce travel time
  const clusters = [];

  appointments.forEach(appointment => {
    let assignedCluster = false;

    for (let cluster of clusters) {
      const avgLat = cluster.reduce((sum, apt) => sum + apt.location.lat, 0) / cluster.length;
      const avgLng = cluster.reduce((sum, apt) => sum + apt.location.lng, 0) / cluster.length;

      const distance = calculateTravelTime(
        { lat: avgLat, lng: avgLng },
        appointment.location
      );

      if (distance <= 15) { // 15 minute threshold
        cluster.push(appointment);
        assignedCluster = true;
        break;
      }
    }

    if (!assignedCluster) {
      clusters.push([appointment]);
    }
  });

  // Return optimized routing order
  return clusters.flat();
}

export default {
  serviceAreaConfigurations,
  generateServiceAreaSchema,
  generateLandmarkServiceSchema,
  calculateTravelTime,
  generateTravelTimeMatrix,
  optimizeServiceRouting
};