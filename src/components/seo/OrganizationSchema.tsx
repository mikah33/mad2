import { generateLogoSchema } from '../../data/images';

export interface OrganizationInfo {
  name: string;
  legalName?: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
  };
  foundingDate?: string;
  founders?: Array<{ name: string; jobTitle: string }>;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  sameAs?: string[];
}

export const generateOrganizationSchema = (org: OrganizationInfo) => {
  const logoSchema = generateLogoSchema();

  const sameAsUrls = [];
  if (org.socialMedia) {
    if (org.socialMedia.facebook) sameAsUrls.push(org.socialMedia.facebook);
    if (org.socialMedia.instagram) sameAsUrls.push(org.socialMedia.instagram);
    if (org.socialMedia.twitter) sameAsUrls.push(org.socialMedia.twitter);
    if (org.socialMedia.youtube) sameAsUrls.push(org.socialMedia.youtube);
  }
  if (org.sameAs) {
    sameAsUrls.push(...org.sameAs);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${org.url}#organization`,
    name: org.name,
    legalName: org.legalName || org.name,
    description: org.description,
    url: org.url,
    logo: logoSchema,
    image: logoSchema,
    telephone: org.telephone,
    email: org.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.street,
      addressLocality: org.address.city,
      addressRegion: org.address.state,
      postalCode: org.address.zip,
      addressCountry: org.address.country || 'US'
    },
    ...(org.foundingDate && { foundingDate: org.foundingDate }),
    ...(org.founders && org.founders.length > 0 && {
      founder: org.founders.map(founder => ({
        '@type': 'Person',
        name: founder.name,
        jobTitle: founder.jobTitle
      }))
    }),
    ...(sameAsUrls.length > 0 && { sameAs: sameAsUrls })
  };
};

export default generateOrganizationSchema;
