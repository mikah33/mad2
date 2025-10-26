export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  authorJobTitle?: string;
  datePublished: string;
  dateModified?: string;
  category: 'tips' | 'guides' | 'news' | 'maintenance' | 'reviews';
  tags: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  readTime?: number; // minutes
  wordCount?: number;
}

const baseUrl = 'https://mikahsmobiledetailingsc.com';
const defaultImage = `${baseUrl}/exterior1.jpg`;

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'How Often Should You Detail Your Car in Columbia SC?',
    slug: 'how-often-detail-your-car',
    excerpt: 'Learn the optimal frequency for detailing your vehicle to maintain its appearance and value in South Carolina\'s climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-15',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['maintenance', 'detailing', 'car care', 'Columbia SC'],
    image: defaultImage,
    imageAlt: 'Professional car detailing maintenance schedule',
    featured: true,
    readTime: 5,
    wordCount: 850
  },
  {
    id: 'blog-002',
    title: 'Ceramic Coating vs. Wax: Which is Better for Columbia SC?',
    slug: 'ceramic-coating-vs-wax',
    excerpt: 'Compare the benefits and drawbacks of ceramic coating versus traditional wax for South Carolina\'s hot and humid climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-20',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['ceramic coating', 'wax', 'paint protection', 'Columbia SC'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Ceramic coating vs wax comparison on vehicle',
    featured: true,
    readTime: 7,
    wordCount: 1200
  },
  {
    id: 'blog-003',
    title: 'Top 10 Car Detailing Mistakes to Avoid in Columbia SC',
    slug: 'car-detailing-mistakes-to-avoid',
    excerpt: 'Common detailing errors that can damage your vehicle and how to prevent them - expert advice from Columbia SC professionals',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-01',
    dateModified: '2025-10-26',
    category: 'tips',
    tags: ['tips', 'mistakes', 'car care', 'DIY detailing', 'Columbia SC'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Common car detailing mistakes to avoid',
    readTime: 6,
    wordCount: 1050
  },
  {
    id: 'blog-004',
    title: 'The Benefits of Mobile Auto Detailing in Columbia SC',
    slug: 'benefits-mobile-detailing-columbia',
    excerpt: 'Discover why mobile auto detailing is the convenient choice for busy professionals in Columbia, Lexington, and Irmo',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-10',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['mobile detailing', 'convenience', 'Columbia SC'],
    image: `${baseUrl}/exterior4.jpg`,
    imageAlt: 'Mobile auto detailing service in Columbia SC',
    featured: true,
    readTime: 5,
    wordCount: 900
  },
  {
    id: 'blog-005',
    title: 'Paint Correction: Is It Worth the Investment in Columbia SC?',
    slug: 'paint-correction-worth-investment',
    excerpt: 'Learn about paint correction, its benefits, and whether it\'s the right choice for your vehicle in Columbia SC',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-18',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['paint correction', 'restoration', 'investment', 'Columbia SC'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Paint correction process showing before and after',
    readTime: 8,
    wordCount: 1350
  },
  {
    id: 'blog-006',
    title: 'Interior Detailing: Deep Clean Your Car\'s Cabin in Columbia SC',
    slug: 'interior-detailing-deep-clean',
    excerpt: 'Complete guide to interior detailing including upholstery cleaning, leather conditioning, and odor removal in Columbia SC',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-01',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['interior detailing', 'upholstery', 'cleaning', 'Columbia SC'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional interior car detailing service in Columbia SC',
    readTime: 6,
    wordCount: 1100
  },
  {
    id: 'blog-007',
    title: 'Preparing Your Car for Summer in South Carolina',
    slug: 'prepare-car-summer-south-carolina',
    excerpt: 'Essential summer car care tips for South Carolina\'s intense heat and humidity',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-15',
    category: 'maintenance',
    tags: ['summer care', 'South Carolina', 'heat protection'],
    image: defaultImage,
    imageAlt: 'Summer car care preparation in South Carolina',
    featured: true,
    readTime: 5,
    wordCount: 950
  },
  {
    id: 'blog-008',
    title: 'How to Maintain Your Ceramic Coating in Columbia SC',
    slug: 'maintain-ceramic-coating',
    excerpt: 'Step-by-step guide to maintaining your ceramic coating for maximum longevity and protection in South Carolina\'s climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-05-01',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['ceramic coating', 'maintenance', 'longevity', 'Columbia SC'],
    image: `${baseUrl}/exterior6.jpg`,
    imageAlt: 'Maintaining ceramic coating on vehicle in Columbia SC',
    readTime: 6,
    wordCount: 1000
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, limit);
};
