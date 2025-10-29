#!/bin/bash
# Script to add metaDescription fields to all blog posts

FILE="/Users/mikahalbertson/mad2/src/data/blog.ts"

# Blog 004
sed -i '' '/id: .blog-004/,/readTime:/{
/excerpt: /a\
    metaDescription: '"'"'Best interior car detailing near me Columbia SC. Professional interior detailing services including upholstery cleaning, leather conditioning, and odor removal. Mobile interior detailing from $99!'"'"',
}' "$FILE"

# Blog 005
sed -i '' '/id: .blog-005/,/readTime:/{
/excerpt: /a\
    metaDescription: '"'"'Prepare your car for South Carolina summer heat. Expert guide to best car detailing for summer protection. Professional mobile detailing near me keeps your vehicle cool and protected.'"'"',
}' "$FILE"

# Blog 006
sed -i '' '/id: .blog-006/,/readTime:/{
/excerpt: /a\
    metaDescription: '"'"'Best car detailing Lexington SC. Top-rated mobile detailing services in Lexington County. Professional auto detailing near me serves Lake Murray area. Free quotes!'"'"',
}' "$FILE"

echo "Meta descriptions added to blog.ts"
