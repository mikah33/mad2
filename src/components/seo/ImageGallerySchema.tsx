import React from 'react';
import { Helmet } from 'react-helmet-async';
import { images, generateImageSchema } from '../../data/images';

interface ImageGallerySchemaProps {
  title?: string;
  description?: string;
  imageKeys?: Array<keyof typeof images>;
}

export const ImageGallerySchema: React.FC<ImageGallerySchemaProps> = ({
  title = "Mikah's Auto Detailing Project Gallery",
  description = "Professional auto detailing results from our completed projects in Columbia, SC",
  imageKeys = ['exterior1', 'exterior2', 'exterior3', 'exterior4', 'exterior5', 'exterior6', 'exterior7', 'interior1', 'interior2']
}) => {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: title,
    description: description,
    image: imageKeys.map(key => ({
      '@type': 'ImageObject',
      url: images[key].url,
      description: images[key].alt,
      caption: images[key].caption || images[key].alt,
      width: images[key].width,
      height: images[key].height,
      encodingFormat: images[key].type
    })),
    about: {
      '@type': 'Service',
      name: 'Auto Detailing',
      serviceType: 'Mobile Auto Detailing',
      provider: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(gallerySchema)}
      </script>
    </Helmet>
  );
};

export default ImageGallerySchema;
