import { Helmet } from 'react-helmet-async';
import { getDefaultOGImage } from '../../data/images';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterImage?: string;
  twitterImageAlt?: string;
  noindex?: boolean;
  schema?: object | object[];
  ogVideo?: string;
  ogVideoType?: string;
  ogVideoWidth?: number;
  ogVideoHeight?: number;
  author?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  ogImageAlt,
  ogImageWidth,
  ogImageHeight,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterImage,
  twitterImageAlt,
  noindex = false,
  schema,
  ogVideo,
  ogVideoType,
  ogVideoWidth,
  ogVideoHeight,
  author
}) => {
  const fullTitle = `${title} | Mikah's Auto Detailing`;
  const currentUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : '');

  // Use provided image or default
  const defaultImage = getDefaultOGImage();
  const finalOgImage = ogImage || defaultImage.url;
  const finalOgImageAlt = ogImageAlt || defaultImage.alt;
  const finalOgImageWidth = ogImageWidth || defaultImage.width;
  const finalOgImageHeight = ogImageHeight || defaultImage.height;
  const finalTwitterImage = twitterImage || finalOgImage;
  const finalTwitterImageAlt = twitterImageAlt || finalOgImageAlt;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={finalOgImageAlt} />
      <meta property="og:image:width" content={finalOgImageWidth.toString()} />
      <meta property="og:image:height" content={finalOgImageHeight.toString()} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Mikah's Auto Detailing" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalTwitterImage} />
      <meta name="twitter:image:alt" content={finalTwitterImageAlt} />

      {/* Additional Image Meta */}
      <meta name="image" content={finalOgImage} />
      <meta itemProp="image" content={finalOgImage} />

      {/* Video Meta Tags */}
      {ogVideo && (
        <>
          <meta property="og:video" content={ogVideo} />
          {ogVideoType && <meta property="og:video:type" content={ogVideoType} />}
          {ogVideoWidth && <meta property="og:video:width" content={ogVideoWidth.toString()} />}
          {ogVideoHeight && <meta property="og:video:height" content={ogVideoHeight.toString()} />}
        </>
      )}

      {/* Author */}
      {author && <meta name="author" content={author} />}

      {/* Schema.org structured data */}
      {schema && (
        <>
          {Array.isArray(schema) ? (
            schema.map((schemaItem, index) => (
              <script key={`schema-${index}`} type="application/ld+json">
                {JSON.stringify(schemaItem)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
};
