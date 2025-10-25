import { SEOHead } from '../../components/seo/SEOHead';
import { Breadcrumbs } from '../../components/seo/Breadcrumbs';

export const BlogPage = () => {
  return (
    <>
      <SEOHead
        title="Auto Detailing Blog & Tips"
        description="Expert advice, tips, and guides on auto detailing, car care, ceramic coating, and vehicle maintenance."
        keywords="auto detailing blog, car care tips, detailing guides, ceramic coating advice"
        canonical="https://mikahsautodetailing.com/blog"
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
