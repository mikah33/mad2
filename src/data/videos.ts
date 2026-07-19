export interface VideoMetadata {
  url: string;
  title: string;
  description: string;
  alt: string;
  width: number;
  height: number;
  duration?: string; // in ISO 8601 duration format (e.g., "PT1M30S" for 1 minute 30 seconds)
  type: 'video/mp4' | 'video/quicktime' | 'video/webm';
  thumbnail?: string;
  category: 'hero' | 'service' | 'process' | 'testimonial' | 'tutorial';
  keywords?: string[];
  uploadDate?: string; // ISO 8601 date format
}

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export const videos: Record<string, VideoMetadata> = {
  // Hero Video
  heroVideo: {
    url: `${baseUrl}/hero-video.mp4`,
    title: "Mikah's Auto Detailing - Professional Mobile Detailing Services",
    description: "Experience premium mobile auto detailing in Columbia SC. Watch our professional detailers transform vehicles with ceramic coating, paint correction, and comprehensive detailing services. We bring showroom quality results to your location.",
    alt: "Professional mobile auto detailing service showcasing exterior wash, ceramic coating application, and interior deep cleaning in Columbia SC",
    width: 1920,
    height: 1080,
    duration: "PT45S",
    type: 'video/mp4',
    thumbnail: `${baseUrl}/exterior1.jpg`,
    category: 'hero',
    keywords: [
      'mobile detailing columbia sc',
      'auto detailing video',
      'ceramic coating application',
      'professional car detailing',
      'mobile car wash'
    ],
    uploadDate: '2024-10-25'
  },

  // Ceramic Coating Process Video 1
  ceramicVideo1: {
    url: `${baseUrl}/ceramic-video1.mp4`,
    title: "Ceramic Coating Application Process - Step by Step",
    description: "Professional ceramic coating application on a luxury vehicle. Watch as our IDA-certified detailer prepares the surface through paint correction and applies premium ceramic coating for long-lasting protection against South Carolina's harsh climate.",
    alt: "Step-by-step ceramic coating application showing surface preparation, paint correction, and professional coating installation",
    width: 1920,
    height: 1080,
    duration: "PT2M15S",
    type: 'video/mp4',
    thumbnail: `${baseUrl}/exterior4.jpg`,
    category: 'process',
    keywords: [
      'ceramic coating columbia sc',
      'ceramic coating application',
      'paint protection',
      'auto ceramic coating',
      'professional ceramic coating'
    ],
    uploadDate: '2024-10-25'
  },

  // Ceramic Coating Process Video 2
  ceramicVideo2: {
    url: `${baseUrl}/ceramic-video2.mp4`,
    title: "Ceramic Coating Results - Before and After Comparison",
    description: "See the dramatic difference ceramic coating makes on vehicle paint. This video showcases the hydrophobic properties, enhanced gloss, and superior protection that professional ceramic coating provides. Perfect for South Carolina's hot and humid climate.",
    alt: "Before and after comparison of ceramic coating showing enhanced gloss, water beading, and paint protection on detailed vehicle",
    width: 1920,
    height: 1080,
    duration: "PT1M50S",
    type: 'video/mp4',
    thumbnail: `${baseUrl}/exterior5.jpg`,
    category: 'service',
    keywords: [
      'ceramic coating results',
      'before and after ceramic coating',
      'ceramic coating benefits',
      'hydrophobic coating',
      'paint protection film alternative'
    ],
    uploadDate: '2024-10-25'
  }
};

// Helper function to generate VideoObject schema for SEO
export const generateVideoSchema = (videoKey: keyof typeof videos) => {
  const video = videos[videoKey];
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail || `${baseUrl}/logo.png`,
    uploadDate: video.uploadDate || new Date().toISOString().split('T')[0],
    contentUrl: video.url,
    embedUrl: video.url,
    duration: video.duration,
    width: video.width,
    height: video.height,
    ...(video.keywords && {
      keywords: video.keywords.join(', ')
    })
  };
};

// Generate VideoObject schema for all videos
export const generateAllVideosSchema = () => {
  return Object.keys(videos).map(key =>
    generateVideoSchema(key as keyof typeof videos)
  );
};

// Get videos by category
export const getVideosByCategory = (category: VideoMetadata['category']) => {
  return Object.entries(videos)
    .filter(([_, video]) => video.category === category)
    .map(([key, video]) => ({ key, ...video }));
};

// Get video metadata for a specific video
export const getVideoMetadata = (videoKey: keyof typeof videos): VideoMetadata | undefined => {
  return videos[videoKey];
};
