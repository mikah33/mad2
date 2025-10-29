import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blog';

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
}

export const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  if (relatedPosts.length === 0) {
    return null;
  }

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
    <div className="mt-16 md:mt-20 py-12 bg-gray-50 rounded-2xl px-6 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Continue Reading
        </h2>
        <p className="text-lg text-gray-600">
          Explore more insights about professional auto detailing in Columbia SC
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
          >
            {/* Image */}
            {post.image && (
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Category Badge */}
              <div className="mb-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getCategoryColor(
                    post.category
                  )}`}
                >
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              {/* Read Time */}
              {post.readTime && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{post.readTime} min read</span>
                </div>
              )}

              {/* Read More Link */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 inline-flex items-center">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Posts CTA */}
      <div className="text-center mt-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
        >
          View All Articles
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
