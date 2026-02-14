export interface ImageMetadata {
  url: string;
  alt: string;
  width: number;
  height: number;
  type: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/svg+xml';
  caption?: string;
  photographer?: string;
  category: 'logo' | 'service' | 'project' | 'social' | 'favicon';
}

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export const images: Record<string, ImageMetadata> = {
  // Logo & Branding
  logo: {
    url: `${baseUrl}/logo.png`,
    alt: "Mikah's Auto Detailing Columbia SC - Professional auto detailing services columbia sc logo",
    width: 512,
    height: 512,
    type: 'image/png',
    category: 'logo'
  },
  logoJpg: {
    url: `${baseUrl}/logo.jpg`,
    alt: "Mikah's Auto Detailing Columbia SC - Professional auto detailing services columbia sc business logo",
    width: 400,
    height: 400,
    type: 'image/jpeg',
    category: 'logo'
  },

  // Social Media & OG Images
  ogDefault: {
    url: `${baseUrl}/logo.png`,
    alt: "Mikah's Auto Detailing - Premium auto detailing services columbia sc serving Lexington and Irmo",
    width: 1200,
    height: 630,
    type: 'image/png',
    category: 'social',
    caption: 'Professional auto detailing services columbia sc serving Lexington, and Irmo SC'
  },

  // Service Images
  exterior1: {
    url: `${baseUrl}/exterior1.jpg`,
    alt: 'Professional exterior auto detailing services columbia sc - pristine paint finish with ceramic shine',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Exterior detailing with premium polish and protection'
  },
  exterior2: {
    url: `${baseUrl}/exterior2.jpg`,
    alt: 'Auto detailing services columbia sc results - spotless exterior finish and professional car care',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Complete exterior wash and detail in Columbia SC'
  },
  exterior3: {
    url: `${baseUrl}/exterior3.jpg`,
    alt: 'Professional auto detailing services columbia sc - premium exterior car detailing with ceramic coating prep',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Professional exterior detailing showcase in Columbia SC'
  },
  exterior4: {
    url: `${baseUrl}/exterior4.jpg`,
    alt: 'Auto detailing services columbia sc - ceramic coating application on luxury vehicle with paint protection',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Ceramic coating application on luxury vehicle in Columbia SC'
  },
  exterior5: {
    url: `${baseUrl}/exterior5.jpg`,
    alt: 'Auto detailing services columbia sc - paint correction removing swirls and scratches for flawless finish',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Paint correction revealing deep gloss finish in Columbia SC'
  },
  exterior6: {
    url: `${baseUrl}/exterior6.jpg`,
    alt: 'Mobile auto detailing services columbia sc - professional car detailing team at customer location',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'On-site mobile detailing service in Columbia SC'
  },
  exterior7: {
    url: `${baseUrl}/exterior7.jpg`,
    alt: 'Auto detailing results columbia sc - mirror-like paint finish from professional car detailing service',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Mirror finish achieved through professional detailing in Columbia SC'
  },

  // Interior Images
  interior1: {
    url: `${baseUrl}/interior1.jpg`,
    alt: 'Interior car detailing service columbia sc - deep cleaning of leather seats and dashboard by mobile detailing professionals',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Deep interior cleaning and conditioning in Columbia SC'
  },
  interior2: {
    url: `${baseUrl}/interior2.jpg`,
    alt: 'Interior auto detailing services columbia sc - spotless car interior after professional automotive cleaning service',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Complete interior restoration in Columbia SC'
  },

  // Favicons
  favicon16: {
    url: `${baseUrl}/favicon-16x16.png`,
    alt: 'Mikah\'s Auto Detailing Favicon',
    width: 16,
    height: 16,
    type: 'image/png',
    category: 'favicon'
  },
  favicon32: {
    url: `${baseUrl}/favicon-32x32.png`,
    alt: 'Mikah\'s Auto Detailing Favicon',
    width: 32,
    height: 32,
    type: 'image/png',
    category: 'favicon'
  },
  appleTouchIcon: {
    url: `${baseUrl}/apple-touch-icon.png`,
    alt: 'Mikah\'s Auto Detailing App Icon',
    width: 180,
    height: 180,
    type: 'image/png',
    category: 'favicon'
  },
  androidChrome192: {
    url: `${baseUrl}/android-chrome-192x192.png`,
    alt: 'Mikah\'s Auto Detailing Android Icon',
    width: 192,
    height: 192,
    type: 'image/png',
    category: 'favicon'
  },
  androidChrome512: {
    url: `${baseUrl}/android-chrome-512x512.png`,
    alt: 'Mikah\'s Auto Detailing Android Icon',
    width: 512,
    height: 512,
    type: 'image/png',
    category: 'favicon'
  }
};

// Helper function to generate ImageObject schema
export const generateImageSchema = (imageKey: keyof typeof images) => {
  const image = images[imageKey];
  return {
    '@type': 'ImageObject',
    url: image.url,
    width: image.width,
    height: image.height,
    caption: image.caption || image.alt,
    description: image.alt,
    encodingFormat: image.type,
    ...(image.photographer && {
      creator: {
        '@type': 'Person',
        name: image.photographer
      }
    })
  };
};

// Generate array of ImageObjects for gallery
export const generateGallerySchema = (imageKeys: Array<keyof typeof images>) => {
  return {
    '@type': 'ImageGallery',
    name: "Mikah's Auto Detailing Project Gallery",
    description: 'Professional auto detailing results from our completed projects',
    image: imageKeys.map(key => generateImageSchema(key))
  };
};

// Logo schema for Organization
export const generateLogoSchema = () => ({
  '@type': 'ImageObject',
  url: images.logo.url,
  width: images.logo.width,
  height: images.logo.height,
  caption: images.logo.alt,
  encodingFormat: images.logo.type
});

// Default OG image for social sharing
export const getDefaultOGImage = () => images.ogDefault;

// Get images by category
export const getImagesByCategory = (category: ImageMetadata['category']) => {
  return Object.entries(images)
    .filter(([_, img]) => img.category === category)
    .map(([key, img]) => ({ key, ...img }));
};
