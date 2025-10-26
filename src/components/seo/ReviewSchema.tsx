import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface Review {
  author: string;
  rating: number;
  reviewText: string;
  datePublished: string;
  platform?: string;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

interface ReviewSchemaProps {
  reviews: Review[];
  aggregateRating: AggregateRating;
}

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews, aggregateRating }) => {
  const reviewsSchema = reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.reviewText,
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: review.platform || 'Google'
    }
  }));

  const aggregateRatingSchema = {
    '@type': 'AggregateRating',
    ratingValue: aggregateRating.ratingValue.toFixed(1),
    reviewCount: aggregateRating.reviewCount.toString(),
    bestRating: aggregateRating.bestRating.toString(),
    worstRating: aggregateRating.worstRating.toString()
  };

  const itemReviewedSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Mikah's Auto Detailing",
    aggregateRating: aggregateRatingSchema,
    review: reviewsSchema
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(itemReviewedSchema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema;
