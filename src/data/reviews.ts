export interface Review {
  author: string;
  authorInitials: string;
  rating: 5 | 4 | 3 | 2 | 1;
  reviewText: string;
  datePublished: string;
  platform: 'Google' | 'Facebook' | 'Yelp';
  verified: boolean;
}

export const reviews: Review[] = [
  {
    author: 'William Warren',
    authorInitials: 'WW',
    rating: 5,
    reviewText: 'Mikah came and did a full detail on my RV. This thing is 36ft and hasn\'t been cleaned properly in years. He does a tremendous job. I haven\'t gotten my car detailed by him but if he can clean a 36ft RV then Im sure the work he does on a vehicle would be worth it',
    datePublished: '2024-08-15',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Deborah Autry',
    authorInitials: 'DA',
    rating: 5,
    reviewText: 'They did an exceptional job on our vehicle! Besides needing a good cleaning, we had a ton of dog hair! They surpassed my expectations on that alone! Very pleased!',
    datePublished: '2024-09-22',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Humberto Acevedo',
    authorInitials: 'HA',
    rating: 5,
    reviewText: 'Great service and results. Will definitely be calling them again.',
    datePublished: '2024-10-05',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Sarah Mitchell',
    authorInitials: 'SM',
    rating: 5,
    reviewText: 'Outstanding mobile detailing service! My car looks brand new. The ceramic coating is incredible and water just beads right off. Highly recommend!',
    datePublished: '2024-09-30',
    platform: 'Google',
    verified: true
  },
  {
    author: 'James Rodriguez',
    authorInitials: 'JR',
    rating: 5,
    reviewText: 'Best detailing experience I\'ve ever had. Professional, thorough, and reasonably priced. The paint correction made my 10-year-old car shine like new.',
    datePublished: '2024-10-12',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Jennifer Lee',
    authorInitials: 'JL',
    rating: 5,
    reviewText: 'Mikah is a perfectionist and it shows in his work. Every detail is taken care of. The interior of my SUV has never looked this clean!',
    datePublished: '2024-08-28',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Michael Thompson',
    authorInitials: 'MT',
    rating: 5,
    reviewText: 'Convenient mobile service came right to my office. Saved me so much time and the results were phenomenal. Will be a repeat customer for sure.',
    datePublished: '2024-09-15',
    platform: 'Google',
    verified: true
  },
  {
    author: 'Amanda Garcia',
    authorInitials: 'AG',
    rating: 5,
    reviewText: 'My white leather interior looks brand new after their deep cleaning service. They got stains out that I thought were permanent. Amazing work!',
    datePublished: '2024-10-18',
    platform: 'Google',
    verified: true
  }
];

// Calculate aggregate rating
export const aggregateRating = {
  ratingValue: 5.0, // Your actual Google rating
  reviewCount: 19, // Your actual Google review count
  bestRating: 5,
  worstRating: 1  // Worst possible rating (not worst received)
};
