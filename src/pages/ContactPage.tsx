import { SEOHead } from '../components/seo/SEOHead';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

export const ContactPage = () => {
  // Generate enhanced comprehensive LocalBusiness schema
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Mikah's Auto Detailing. Schedule your mobile detailing appointment today or ask us any questions."
        keywords="contact auto detailing, book detailing appointment, mobile detailing contact"
        canonical="https://mikahsautodetailing.com/contact"
        schema={enhancedBusinessSchema}
      />


      <div className="contact-page">
        {/* Content placeholder */}
        <h1>Contact Us</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
