import React, { useState } from 'react';
import { ArrowLeft, X, BookOpen, Clock, Calendar } from 'lucide-react';
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
  const [selectedPost, setSelectedPost] = useState<BlogItem | null>(null);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

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
              onClick={() => setSelectedPost(post)}
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

      {/* Blog Post Preview Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white w-full sm:max-w-lg sm:mx-4 rounded-t-2xl sm:rounded-2xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-[#90E0EF] text-xs font-semibold uppercase">{getCategoryLabel(selectedPost.category)}</span>
                <h2 className="text-white font-bold text-lg leading-tight">{selectedPost.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto max-h-[40vh]">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedPost.datePublished)}
                </span>
                {selectedPost.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime} min read
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{selectedPost.excerpt}</p>
            </div>

            {/* Modal Actions */}
            <div className="p-4 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => {
                  setSelectedPost(null);
                  navigate(`/blog/${selectedPost.slug}`);
                }}
                className="flex-1 py-3 bg-[#023E8A] text-white font-semibold rounded-lg text-center text-sm"
              >
                Read Full Article
              </button>
              <button
                onClick={() => setSelectedPost(null)}
                className="py-3 px-4 bg-gray-100 text-gray-800 font-semibold rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BottomNavbar />
    </>
  );
};
