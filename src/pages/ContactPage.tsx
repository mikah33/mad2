import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Mikah's Auto Detailing. Schedule your mobile detailing appointment today or ask us any questions."
        keywords="contact auto detailing, book detailing appointment, mobile detailing contact"
        canonical="https://mikahsautodetailing.com/contact"
      />

      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      <div className="contact-page">
        {/* Content placeholder */}
        <h1>Contact Us</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
