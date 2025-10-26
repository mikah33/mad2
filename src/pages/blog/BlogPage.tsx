import { SEOHead } from '../../components/seo/SEOHead';
import { Breadcrumbs } from '../../components/seo/Breadcrumbs';
import { blogPosts } from '../../data/blog';
import { generateBlogCollectionSchema, generateBlogItemListSchema } from '../../components/seo/BlogSchemas';

export const BlogPage = () => {
  // Generate comprehensive blog schemas
  const blogCollectionSchema = generateBlogCollectionSchema(blogPosts);
  const blogItemListSchema = generateBlogItemListSchema(blogPosts);

  // Combine schemas
  const schemas = [blogCollectionSchema, blogItemListSchema];

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

      <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />

      <div className="blog-page">
        {/* Content placeholder */}
        <h1>Blog & Resources</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
