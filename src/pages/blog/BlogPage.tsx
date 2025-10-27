import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { blogPosts, getFeaturedPosts } from '../../data/blog';
import { generateBlogCollectionSchema, generateBlogItemListSchema } from '../../components/seo/BlogSchemas';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const BlogPage = () => {
  // Generate comprehensive blog schemas
  const blogCollectionSchema = generateBlogCollectionSchema(blogPosts);
  const blogItemListSchema = generateBlogItemListSchema(blogPosts);

  // Combine schemas (blogCollectionSchema already includes LocalBusiness as publisher)
  const schemas = [blogCollectionSchema, blogItemListSchema];

  const featuredPosts = getFeaturedPosts();
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      tips: 'bg-blue-100 text-blue-800',
      guides: 'bg-green-100 text-green-800',
      news: 'bg-purple-100 text-purple-800',
      maintenance: 'bg-orange-100 text-orange-800',
      reviews: 'bg-pink-100 text-pink-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8">
              Auto Detailing Blog & Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Expert tips, guides, and advice on car care, detailing, and vehicle maintenance from Columbia SC's trusted professionals
            </p>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <span className="text-primary-600">⭐</span> Featured Articles
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    {post.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        {post.readTime && (
                          <span className="text-gray-500 text-sm flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min read
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.datePublished)}
                        </div>
                        <span className="text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-500 group"
                >
                  {post.image && (
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      {post.readTime && (
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Tag className="w-4 h-4 text-gray-400" />
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.datePublished)}
                      </div>
                      <span className="text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Professional Detailing?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get your free quote today and see why Columbia SC trusts Mikah's Auto Detailing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8036678731"
                className="px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                Call Now: (803) 667-8731
              </a>
              <Link
                to="/#quote"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
