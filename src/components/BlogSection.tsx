import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "Valentine's Day Car Detailing Gift Guide Columbia SC 2025",
      excerpt: "Perfect Valentine's Day car detailing gifts in Columbia SC. Mobile auto detailing gift certificates, romantic car care packages.",
      slug: "valentine-car-detailing-gift-guide-columbia-sc",
      date: "January 29, 2026",
      image: "/exterior1.jpg",
      tags: ["Valentine's Day", "Gifts", "Columbia SC"]
    },
    {
      id: 2,
      title: "Romantic Car Care for Valentine's Day Columbia SC",
      excerpt: "Prepare for the perfect Valentine's date with professional mobile car detailing. Date night ready vehicles in Columbia SC.",
      slug: "romantic-car-care-valentine-columbia-sc",
      date: "January 29, 2026",
      image: "/exterior2.jpg",
      tags: ["Date Night", "Romance", "Mobile Detailing"]
    },
    {
      id: 3,
      title: "Valentine's Day Detailing Specials Columbia SC 2025",
      excerpt: "Surprise your Valentine with mobile auto detailing. Special packages, couples discounts, and romantic car care in Columbia SC.",
      slug: "valentine-detailing-specials-columbia-sc-2025",
      date: "January 29, 2026",
      image: "/exterior3.jpg",
      tags: ["Specials", "Surprise", "Couples"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert car detailing tips, seasonal specials, and industry insights from Columbia SC's premier mobile detailing service.
          </p>
        </div>

        {/* Featured Valentine's Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={`${blog.title} - Mobile car detailing blog post image`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#023E8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.tags[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#023E8A] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(1).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-[#023E8A] font-semibold hover:text-[#0077B6] transition-colors group-hover:underline"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl p-6 md:p-8 text-white inline-block">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Valentine's Day Car Care?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl">
              Don't miss our special Valentine's Day packages! Perfect for surprising your loved one with professional mobile car detailing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <a
                href="/lp-specials"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white text-[#023E8A] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
              >
                View Valentine's Specials
              </a>

              <a
                href="/blog"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#023E8A] transition-all"
              >
                Read All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;