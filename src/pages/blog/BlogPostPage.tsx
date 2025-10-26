import { useParams } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { Breadcrumbs } from '../../components/seo/Breadcrumbs';
import { generateCompleteBlogPostSchema } from '../../components/seo/BlogSchemas';
import { getBlogPostBySlug } from '../../data/blog';
import { NotFoundPage } from '../NotFoundPage';

export const BlogPostPage = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = postSlug ? getBlogPostBySlug(postSlug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  // Generate comprehensive blog post schemas (BlogPosting + WebPage with breadcrumbs)
  const schemas = generateCompleteBlogPostSchema(post);

  const postUrl = `https://mikahsmobiledetailingsc.com/blog/${post.slug}`;
  const imageUrl = post.image || 'https://mikahsmobiledetailingsc.com/exterior1.jpg';

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={postUrl}
        ogType="article"
        ogImage={imageUrl}
        ogImageAlt={post.imageAlt || post.title}
        ogImageWidth={1200}
        ogImageHeight={630}
        schema={schemas}
      />

      <Breadcrumbs
        items={[
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <article
        className="blog-post-page"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* Content placeholder */}
        <h1 itemProp="headline">{post.title}</h1>
        <div className="meta">
          <span>
            By <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{post.author}</span>
            </span>
          </span>
          {' | '}
          <time itemProp="datePublished" dateTime={post.datePublished}>
            {new Date(post.datePublished).toLocaleDateString()}
          </time>
          {post.dateModified && (
            <meta itemProp="dateModified" content={post.dateModified} />
          )}
          {post.readTime && ` | ${post.readTime} min read`}
        </div>
        <div itemProp="description">
          <p>{post.excerpt}</p>
        </div>
        {post.image && (
          <meta itemProp="image" content={imageUrl} />
        )}
        <meta itemProp="url" content={postUrl} />
      </article>
    </>
  );
};
