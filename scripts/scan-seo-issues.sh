#!/bin/bash

echo "=== SEO DUPLICATE TITLE SCANNER ==="
echo ""
echo "Extracting all page titles..."
echo ""

# Extract titles from all page files
find src/pages -name "*.tsx" -type f -exec grep -h 'title="' {} \; | \
  sed 's/.*title="\([^"]*\).*/\1/' | \
  sort | \
  uniq -c | \
  awk '$1 > 1 {print "DUPLICATE (" $1 "x): " substr($0, index($0,$2))}'

echo ""
echo "=== SEO H1 TAG SCANNER ==="
echo ""
echo "Extracting all H1 tags..."
echo ""

# Extract H1 content
find src/pages -name "*.tsx" -type f -exec grep -h '<h1' {} \; | \
  sed 's/<h1[^>]*>//' | \
  sed 's/<\/h1>.*//' | \
  sed 's/{.*}//' | \
  sort | \
  uniq -c | \
  awk '$1 > 1 {print "DUPLICATE H1 (" $1 "x): " substr($0, index($0,$2))}'

echo ""
echo "=== CHECKING FOR MULTIPLE CANONICAL IMPLEMENTATIONS ==="
echo ""

# Find files with both Helmet and SEOHead
for file in src/pages/**/*.tsx; do
  if [ -f "$file" ]; then
    has_helmet=$(grep -l "import.*Helmet" "$file" 2>/dev/null)
    has_seohead=$(grep -l "SEOHead" "$file" 2>/dev/null)

    if [ -n "$has_helmet" ] && [ -n "$has_seohead" ]; then
      echo "⚠️  POTENTIAL CONFLICT: $file has both Helmet and SEOHead imports"
    fi
  fi
done

echo ""
echo "=== EXTERNAL LINK SCANNER ==="
echo ""
echo "Finding external links..."
echo ""

# Extract external URLs (http/https links)
find src/pages -name "*.tsx" -type f -exec grep -ho 'href="http[^"]*"' {} \; | \
  sed 's/href="//;s/"$//' | \
  sort -u | \
  head -20

echo ""
echo "Scan complete!"
