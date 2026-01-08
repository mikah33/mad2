import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className,
  loading = 'lazy',
  width,
  height,
  priority = false
}) => {
  // Generate WebP source URLs
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '_optimized.webp');
  const optimizedSrc = src.replace(/\.(jpg|jpeg|png)$/i, (match) =>
    `_optimized${match}`
  );

  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
        {...(width && height && { sizes: `(max-width: 768px) ${Math.floor(width * 0.8)}px, ${width}px` })}
      />
      <img
        src={priority ? optimizedSrc : src}
        alt={alt}
        title={title}
        loading={priority ? 'eager' : loading}
        className={className}
        width={width}
        height={height}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
};

export default OptimizedImage;