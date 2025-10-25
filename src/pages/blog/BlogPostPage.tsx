import { useParams } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { Breadcrumbs } from '../../components/seo/Breadcrumbs';
import { generateBlogPostSchema } from '../../components/seo/StructuredData';
import { getBlogPostBySlug } from '../../data/blog';
import { businessInfo } from '../../data/business';
import { NotFoundPage } from '../NotFoundPage';

export const BlogPostPage = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = postSlug ? getBlogPostBySlug(postSlug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const schema = generateBlogPostSchema(
    {
      title: post.title,
      description: post.excerpt,
      author: post.author,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: post.image,
      url: `https://mikahsautodetailing.com/blog/${post.slug}`
    },
    {
      name: businessInfo.name,
      description: businessInfo.description,
      phone: businessInfo.phone,
      email: businessInfo.email,
      address: businessInfo.address
    }
  );

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://mikahsautodetailing.com/blog/${post.slug}`}
        ogType="article"
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <article className="blog-post-page">
        {/* Content placeholder */}
        <h1>{post.title}</h1>
        <p className="meta">
          By {post.author} | {new Date(post.datePublished).toLocaleDateString()}
          {post.readTime && ` | ${post.readTime} min read`}
        </p>
        <p>{post.excerpt}</p>
      </article>
    </>
  );
};
