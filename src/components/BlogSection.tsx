import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "How to Prepare Your Car for Summer in South Carolina",
      excerpt: "Beat the SC heat. Protect your paint, interior, and trim from intense summer sun, humidity, and love bugs with these pro detailing tips.",
      slug: "prepare-car-summer-south-carolina",
      date: "June 1, 2026",
      image: "/exterior1.jpg",
      tags: ["Summer Car Care", "Heat Protection", "Columbia SC"]
    },
    {
      id: 2,
      title: "Ceramic Coating vs Wax: Best Choice for SC Summers",
      excerpt: "Which protects your paint better against brutal South Carolina summer UV and heat? We break down ceramic coating vs traditional wax.",
      slug: "ceramic-coating-vs-wax-south-carolina",
      date: "June 8, 2026",
      image: "/exterior2.jpg",
      tags: ["Ceramic Coating", "UV Protection", "Paint Protection"]
    },
    {
      id: 3,
      title: "Summer Interior Detailing: Beat the Columbia SC Heat",
      excerpt: "Sweat, sunscreen, sand, and AC funk take a toll in summer. Professional interior detailing removes stains, odors, and built-up grime.",
      slug: "interior-car-detailing-columbia-sc",
      date: "June 15, 2026",
      image: "/interior1.jpg",
      tags: ["Interior Detailing", "Odor Removal", "Mobile Detailing"]
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

        {/* Featured Summer Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={`${blog.title} - Auto detailing services columbia sc blog`}
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
              Ready to Get Your Car Summer-Ready?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl">
              Beat the South Carolina heat! Protect your car from summer sun, humidity, and road grime with professional mobile detailing that comes to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <a
                href="/book"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white text-[#023E8A] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
              >
                Book Your Summer Detail
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