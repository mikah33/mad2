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
    title: 'The Ultimate Guide to Mobile Car Detailing in Columbia SC',
    slug: 'ultimate-guide-mobile-car-detailing-columbia-sc',
    excerpt: 'Everything you need to know about mobile car detailing in Columbia, SC - from services offered to pricing and scheduling',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-10',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['mobile detailing', 'Columbia SC', 'car care guide'],
    image: defaultImage,
    imageAlt: 'Mobile car detailing service in Columbia SC',
    featured: true,
    readTime: 7,
    wordCount: 1800
  },
  {
    id: 'blog-002',
    title: 'How Often Should You Detail Your Car in South Carolina?',
    slug: 'how-often-detail-car-south-carolina',
    excerpt: 'Learn the optimal frequency for detailing your vehicle to maintain its appearance and value in South Carolina\'s climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-15',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['maintenance', 'detailing frequency', 'car care', 'Columbia SC'],
    image: defaultImage,
    imageAlt: 'Professional car detailing maintenance schedule',
    featured: true,
    readTime: 8,
    wordCount: 2400
  },
  {
    id: 'blog-003',
    title: 'Ceramic Coating vs. Wax: Which is Better for South Carolina?',
    slug: 'ceramic-coating-vs-wax-south-carolina',
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
    readTime: 9,
    wordCount: 2200
  },
  {
    id: 'blog-004',
    title: 'Interior Car Detailing: The Complete Guide',
    slug: 'interior-car-detailing-complete-guide',
    excerpt: 'Complete guide to interior detailing including upholstery cleaning, leather conditioning, and odor removal',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-01',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['interior detailing', 'upholstery', 'cleaning', 'Columbia SC'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional interior car detailing service',
    readTime: 8,
    wordCount: 2100
  },
  {
    id: 'blog-005',
    title: 'Preparing Your Car for Summer in South Carolina',
    slug: 'prepare-car-summer-south-carolina',
    excerpt: 'Essential summer car care tips for South Carolina\'s intense heat and humidity',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-15',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['summer care', 'South Carolina', 'heat protection', 'seasonal detailing'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Summer car care preparation in South Carolina',
    featured: true,
    readTime: 7,
    wordCount: 1950
  },
  {
    id: 'blog-006',
    title: 'Best Car Detailing in Lexington SC',
    slug: 'best-car-detailing-lexington-sc',
    excerpt: 'Discover why Lexington SC residents choose professional mobile detailing for their vehicles',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-10',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['Lexington SC', 'mobile detailing', 'local services'],
    image: `${baseUrl}/exterior4.jpg`,
    imageAlt: 'Car detailing service in Lexington SC',
    readTime: 6,
    wordCount: 1750
  },
  {
    id: 'blog-007',
    title: 'Paint Correction: Before and After Guide',
    slug: 'paint-correction-before-after-guide',
    excerpt: 'Learn about paint correction, its benefits, and see dramatic before and after results',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-18',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['paint correction', 'restoration', 'before and after', 'Columbia SC'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Paint correction process showing before and after',
    readTime: 9,
    wordCount: 2350
  },
  {
    id: 'blog-008',
    title: 'Mobile vs Shop Detailing: Comparison',
    slug: 'mobile-vs-shop-detailing-comparison',
    excerpt: 'Compare mobile detailing vs traditional shop detailing to find the best option for your needs',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-25',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['mobile detailing', 'comparison', 'convenience', 'Columbia SC'],
    image: `${baseUrl}/exterior6.jpg`,
    imageAlt: 'Mobile detailing vs shop detailing comparison',
    readTime: 7,
    wordCount: 1850
  },
  {
    id: 'blog-009',
    title: 'Car Detailing Prices: Value Breakdown',
    slug: 'car-detailing-prices-value-breakdown',
    excerpt: 'Understand car detailing pricing and what you get for your money in Columbia SC',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-15',
    category: 'tips',
    tags: ['pricing', 'value', 'detailing costs', 'Columbia SC'],
    image: defaultImage,
    imageAlt: 'Car detailing price breakdown and value guide',
    readTime: 6,
    wordCount: 1650
  },
  {
    id: 'blog-010',
    title: 'What to Expect from Professional Auto Detailing',
    slug: 'what-expect-professional-auto-detailing',
    excerpt: 'Complete guide to what happens during a professional auto detailing service',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-20',
    category: 'guides',
    tags: ['professional detailing', 'what to expect', 'process', 'Columbia SC'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional auto detailing process explained',
    readTime: 8,
    wordCount: 2050
  },
  {
    id: 'blog-011',
    title: 'How to Maintain Your Car Between Details',
    slug: 'maintain-car-between-details',
    excerpt: 'Tips and tricks to keep your car looking great between professional detailing sessions',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-01',
    category: 'maintenance',
    tags: ['car maintenance', 'DIY tips', 'between details', 'Columbia SC'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Car maintenance tips between detailing sessions',
    readTime: 7,
    wordCount: 1900
  },
  {
    id: 'blog-012',
    title: 'Signs Your Car Needs Detailing',
    slug: 'signs-your-car-needs-detailing',
    excerpt: 'Learn to recognize the warning signs that your vehicle needs professional detailing',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-10',
    category: 'tips',
    tags: ['car care', 'detailing signs', 'maintenance', 'Columbia SC'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Warning signs your car needs professional detailing',
    readTime: 6,
    wordCount: 1700
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
