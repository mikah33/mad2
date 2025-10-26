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
    alt: "Mikah's Auto Detailing - Professional Mobile Auto Detailing in Columbia SC",
    width: 512,
    height: 512,
    type: 'image/png',
    category: 'logo'
  },
  logoJpg: {
    url: `${baseUrl}/logo.jpg`,
    alt: "Mikah's Auto Detailing Logo",
    width: 400,
    height: 400,
    type: 'image/jpeg',
    category: 'logo'
  },

  // Social Media & OG Images
  ogDefault: {
    url: `${baseUrl}/logo.png`,
    alt: "Mikah's Auto Detailing - Premium Mobile Detailing Services",
    width: 1200,
    height: 630,
    type: 'image/png',
    category: 'social',
    caption: 'Professional mobile auto detailing serving Columbia, Lexington, and Irmo SC'
  },

  // Service Images
  exterior1: {
    url: `${baseUrl}/exterior1.jpg`,
    alt: 'Professional exterior car detailing showing pristine paint finish',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Exterior detailing with premium polish and protection'
  },
  exterior2: {
    url: `${baseUrl}/exterior2.jpg`,
    alt: 'Clean vehicle exterior after professional detailing service',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Complete exterior wash and detail'
  },
  exterior3: {
    url: `${baseUrl}/exterior3.jpg`,
    alt: 'High-quality exterior auto detailing results',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Professional exterior detailing showcase'
  },
  exterior4: {
    url: `${baseUrl}/exterior4.jpg`,
    alt: 'Luxury vehicle exterior detailing with ceramic coating',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Ceramic coating application on luxury vehicle'
  },
  exterior5: {
    url: `${baseUrl}/exterior5.jpg`,
    alt: 'Paint correction and detailing on black vehicle',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Paint correction revealing deep gloss finish'
  },
  exterior6: {
    url: `${baseUrl}/exterior6.jpg`,
    alt: 'Professional mobile detailing service in progress',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'On-site mobile detailing service'
  },
  exterior7: {
    url: `${baseUrl}/exterior7.jpg`,
    alt: 'Detailed vehicle showing mirror-like paint finish',
    width: 1920,
    height: 1080,
    type: 'image/jpeg',
    category: 'project',
    caption: 'Mirror finish achieved through professional detailing'
  },

  // Interior Images
  interior1: {
    url: `${baseUrl}/interior1.jpg`,
    alt: 'Professional interior car detailing - clean leather seats',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Deep interior cleaning and conditioning'
  },
  interior2: {
    url: `${baseUrl}/interior2.jpg`,
    alt: 'Spotless car interior after professional detailing',
    width: 800,
    height: 600,
    type: 'image/jpeg',
    category: 'service',
    caption: 'Complete interior restoration'
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
