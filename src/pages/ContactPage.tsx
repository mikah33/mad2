import { SEOHead } from '../components/seo/SEOHead';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

export const ContactPage = () => {
  // Generate enhanced comprehensive LocalBusiness schema
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  return (
    <>
      <SEOHead
        title="Contact Us | Auto Detailing Services Columbia SC | Mikah's"
        description="Contact Mikah's Auto Detailing for professional auto detailing services in Columbia, SC. Schedule your mobile detailing appointment. Call (803) 667-8731 for a free quote!"
        keywords="auto detailing services columbia sc, contact auto detailing, book detailing appointment columbia sc, mobile detailing contact, auto detailing services in columbia sc"
        canonical="https://mikahsmobiledetailingsc.com/contact"
        schema={enhancedBusinessSchema}
      />


      <div className="contact-page min-h-screen bg-gray-50">
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Mikah's Auto Detailing</h1>
            <p className="text-xl text-blue-100">Get in touch for mobile auto detailing services in Columbia, Lexington & Irmo SC</p>
          </div>
        </section>

        {/* Content placeholder */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-gray-600">Content to be added</p>
        </div>
      </div>
    </>
  );
};
