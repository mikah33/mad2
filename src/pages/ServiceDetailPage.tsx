import { useParams } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { generateServiceSchema } from '../components/seo/StructuredData';
import { getServiceBySlug } from '../data/services';
import { businessInfo } from '../data/business';
import { NotFoundPage } from './NotFoundPage';

export const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const schema = generateServiceSchema(
    {
      name: service.name,
      description: service.shortDescription,
      price: service.pricing?.starting,
      url: `https://mikahsautodetailing.com/services/${service.slug}`
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
        title={service.name}
        description={service.shortDescription}
        keywords={`${service.name}, auto detailing, ${businessInfo.address.city}`}
        canonical={`https://mikahsautodetailing.com/services/${service.slug}`}
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${service.slug}` }
        ]}
      />

      <div className="service-detail-page">
        {/* Content placeholder */}
        <h1>{service.name}</h1>
        <p>{service.shortDescription}</p>
      </div>
    </>
  );
};
