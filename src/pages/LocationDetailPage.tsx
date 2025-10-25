import { useParams } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { generateLocalBusinessSchema } from '../components/seo/StructuredData';
import { getLocationBySlug } from '../data/locations';
import { businessInfo } from '../data/business';
import { NotFoundPage } from './NotFoundPage';

export const LocationDetailPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;

  if (!location) {
    return <NotFoundPage />;
  }

  const schema = generateLocalBusinessSchema({
    name: `${businessInfo.name} - ${location.city}`,
    description: `Professional auto detailing services in ${location.city}, ${location.state}`,
    phone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      ...businessInfo.address,
      city: location.city,
      zip: location.zipCodes[0]
    },
    hours: businessInfo.hours
  });

  return (
    <>
      <SEOHead
        title={`Auto Detailing in ${location.city}, ${location.state}`}
        description={`Professional mobile auto detailing services in ${location.city}, ${location.state}. Book ceramic coating, paint correction, and detailing services today.`}
        keywords={`auto detailing ${location.city}, mobile detailing ${location.city}, ceramic coating ${location.city}`}
        canonical={`https://mikahsautodetailing.com/locations/${location.slug}`}
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { name: 'Locations', url: '/locations' },
          { name: `${location.city}, ${location.state}`, url: `/locations/${location.slug}` }
        ]}
      />

      <div className="location-detail-page">
        {/* Content placeholder */}
        <h1>Auto Detailing in {location.city}, {location.state}</h1>
        <p>Content to be added</p>
      </div>
    </>
  );
};
