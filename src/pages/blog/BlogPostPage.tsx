import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, Phone } from 'lucide-react';
import { marked } from 'marked';
import { SEOHead } from '../../components/seo/SEOHead';
import { generateCompleteBlogPostSchema } from '../../components/seo/BlogSchemas';
import { getBlogPostBySlug, blogPosts } from '../../data/blog';
import { NotFoundPage } from '../NotFoundPage';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

interface BlogContent {
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
  relatedPosts?: string[];
  cta?: string;
  howToSteps?: Array<{ name: string; text: string; image?: string }>;
}

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [fullContent, setFullContent] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Try to load the full JSON content
      import(`../../content/blog/${slug}.json`)
        .then((data) => {
          setFullContent(data.default || data);
          setLoading(false);
        })
        .catch(() => {
          setFullContent(null);
          setLoading(false);
        });
    }
  }, [slug]);

  if (!post) {
    return <NotFoundPage />;
  }

  const postUrl = `https://mikahsmobiledetailingsc.com/blog/${post.slug}`;
  const imageUrl = post.image || 'https://mikahsmobiledetailingsc.com/exterior1.jpg';

  // NOTE: Schemas are pre-rendered in static HTML by generate-blog-html.ts script
  // DO NOT add schemas here to avoid duplication
  // The schemas include: BlogPosting, WebPage, LocalBusiness, FAQPage (if faqs exist), HowTo (if steps exist)

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

  const relatedPosts = fullContent?.relatedPosts
    ? blogPosts.filter(p => fullContent.relatedPosts?.includes(p.slug))
    : blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={postUrl}
        ogType="article"
        ogImage={imageUrl}
        ogImageAlt={post.imageAlt || post.title}
        ogImageWidth={1200}
        ogImageHeight={630}
        author={post.author}
      />

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gray-900 text-white py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

          </div>
        </div>

        {/* Article */}
        <article
          className="py-12 md:py-16"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Article Header */}
            <header className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                {post.readTime && (
                  <span className="text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                )}
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                itemProp="headline"
              >
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-gray-900"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <span itemProp="name">{post.author}</span>
                    </p>
                    {post.authorJobTitle && (
                      <p className="text-sm text-gray-500">{post.authorJobTitle}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time itemProp="datePublished" dateTime={post.datePublished}>
                    {formatDate(post.datePublished)}
                  </time>
                  {post.dateModified && (
                    <meta itemProp="dateModified" content={post.dateModified} />
                  )}
                </div>
              </div>

              {post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 md:mb-12 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-auto"
                  itemProp="image"
                  loading="eager"
                />
              </div>
            )}

            {/* Excerpt */}
            <div className="mb-8 p-6 bg-gray-50 border-l-4 border-primary-600 rounded-r-lg">
              <p className="text-lg text-gray-700 italic" itemProp="description">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading content...</p>
              </div>
            ) : fullContent?.content ? (
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-primary-700
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary-700
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-6 prose-ul:space-y-3
                  prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-2
                  prose-ol:my-6 prose-ol:space-y-3
                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-8
                  prose-blockquote:border-l-4 prose-blockquote:border-primary-600 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-code:bg-gray-100 prose-code:text-primary-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg
                  prose-table:border-collapse prose-table:w-full prose-table:my-8
                  prose-th:bg-gray-100 prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-gray-300
                  prose-td:p-4 prose-td:border prose-td:border-gray-300
                  [&_h2]:scroll-mt-20 [&_h3]:scroll-mt-20
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:marker:text-primary-600
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li]:marker:text-primary-700 [&_ol>li]:marker:font-bold"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{ __html: marked.parse(fullContent.content) as string }}
              />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <p className="text-gray-600 italic mt-8">
                  Full content for this article is being prepared. Check back soon!
                </p>
              </div>
            )}

            {/* FAQs */}
            {fullContent?.faqs && fullContent.faqs.length > 0 && (
              <div className="mt-12 md:mt-16 p-8 bg-gray-50 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {fullContent.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 md:mt-16 p-8 bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {fullContent?.cta || 'Ready for Professional Detailing?'}
              </h3>
              <p className="text-lg mb-6 text-gray-200">
                Get your free quote today from Columbia SC's trusted mobile detailing experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8036678731"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call (803) 667-8731
                </a>
                <Link
                  to="/#quote"
                  className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 md:mt-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      {relatedPost.image && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.imageAlt || relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${getCategoryColor(relatedPost.category)}`}>
                          {relatedPost.category}
                        </span>
                        <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <meta itemProp="url" content={postUrl} />
        </article>
      </div>

      <Footer />
    </>
  );
};
