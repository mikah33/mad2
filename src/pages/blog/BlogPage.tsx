import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { blogPosts } from '../../data/blog';
import { generateBlogCollectionSchema, generateBlogItemListSchema } from '../../components/seo/BlogSchemas';
import Footer from '../../components/Footer';
import BottomNavbar from '../../components/BottomNavbar';

// Distribute images across blog posts to avoid duplicates
const blogImages = [
  '/exterior1.jpg',
  '/exterior2.jpg',
  '/exterior3.jpg',
  '/exterior4.jpg',
  '/exterior5.jpg',
  '/exterior6.jpg',
  '/exterior7.jpg',
  '/interior1.jpg',
  '/interior2.jpg',
  '/ceramic.jpg',
  '/marine.jpg',
  '/paintcorrection.jpg',
  '/mclarens.jpg',
  '/hero-poster.jpg',
];

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime?: number;
  datePublished: string;
  image: string;
}

export const BlogPage = () => {
  const navigate = useNavigate();

  const blogCollectionSchema = generateBlogCollectionSchema(blogPosts);
  const blogItemListSchema = generateBlogItemListSchema(blogPosts);
  const schemas = [blogCollectionSchema, blogItemListSchema];

  // Map blog posts to grid items with distributed images
  const blogItems: BlogItem[] = blogPosts.map((post, index) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    datePublished: post.datePublished,
    image: blogImages[index % blogImages.length],
  }));

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      tips: 'Tips',
      guides: 'Guide',
      news: 'News',
      maintenance: 'Maintenance',
      reviews: 'Review',
    };
    return labels[category] || category;
  };

  return (
    <>
      <SEOHead
        title="Auto Detailing Blog & Tips - Columbia SC"
        description="Expert advice, tips, and guides on auto detailing, car care, ceramic coating, and vehicle maintenance from Columbia SC professionals."
        keywords="auto detailing blog, car care tips, detailing guides, ceramic coating advice, Columbia SC blog"
        canonical="https://mikahsmobiledetailingsc.com/blog"
        ogImage="https://mikahsmobiledetailingsc.com/exterior1.jpg"
        ogImageAlt="Mikah's Auto Detailing Blog - Expert Car Care Tips"
        schema={schemas}
      />

      <div className="min-h-screen bg-white pb-20">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-14 px-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-800"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Blog</span>
            </div>
            <div className="w-6" />
          </div>
        </div>

        {/* Header Section */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Auto Detailing Tips & Guides</h1>
              <p className="text-gray-500 text-sm">{blogItems.length} articles</p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {blogItems.map((post) => (
            <button
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="relative aspect-square overflow-hidden bg-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-2">
                <span className="text-[#90E0EF] text-[10px] font-semibold uppercase">{getCategoryLabel(post.category)}</span>
                <span className="text-white font-semibold text-xs leading-tight line-clamp-2">{post.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Footer />
      <BottomNavbar />
    </>
  );
};
