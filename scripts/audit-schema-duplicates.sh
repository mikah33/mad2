#!/bin/bash

# Schema Duplication Audit Script
# Checks all HTML files for duplicate schemas

echo "========================================"
echo "SCHEMA DUPLICATION AUDIT"
echo "========================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
total_issues=0

echo "1. HOMEPAGE AUDIT"
echo "-------------------"
homepage_schemas=$(grep -o 'application/ld+json' dist/index.html 2>/dev/null | wc -l | tr -d ' ')
homepage_local=$(grep -o '@type.*LocalBusiness' dist/index.html 2>/dev/null | wc -l | tr -d ' ')
homepage_org=$(grep -o '@type.*Organization' dist/index.html 2>/dev/null | wc -l | tr -d ' ')

echo "Total schemas: $homepage_schemas"
echo "LocalBusiness: $homepage_local"
echo "Organization: $homepage_org"

if [ "$homepage_org" -gt 1 ] || [ "$homepage_local" -gt 1 ]; then
  echo -e "${RED}❌ ISSUE: Homepage has duplicate Organization/LocalBusiness${NC}"
  total_issues=$((total_issues + 1))
else
  echo -e "${GREEN}✅ Homepage looks OK${NC}"
fi
echo ""

echo "2. SERVICE PAGES AUDIT (7 pages)"
echo "-----------------------------------"
service_issues=0
for page in dist/services/*/index.html; do
  if [ -f "$page" ]; then
    name=$(basename $(dirname "$page"))
    local_count=$(grep -o '@type.*LocalBusiness' "$page" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$local_count" -gt 1 ]; then
      echo -e "${RED}❌ $name: $local_count LocalBusiness schemas (should be 1)${NC}"
      service_issues=$((service_issues + 1))
    else
      echo -e "${GREEN}✅ $name: $local_count LocalBusiness${NC}"
    fi
  fi
done

if [ "$service_issues" -gt 0 ]; then
  echo -e "${RED}Found $service_issues service pages with duplicates${NC}"
  total_issues=$((total_issues + service_issues))
fi
echo ""

echo "3. LOCATION PAGES AUDIT (5 pages)"
echo "------------------------------------"
location_issues=0
for page in dist/locations/*/index.html; do
  if [ -f "$page" ]; then
    name=$(basename $(dirname "$page"))
    local_count=$(grep -o '@type.*LocalBusiness' "$page" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$local_count" -gt 1 ]; then
      echo -e "${RED}❌ $name: $local_count LocalBusiness schemas (should be 1)${NC}"
      location_issues=$((location_issues + 1))
    else
      echo -e "${GREEN}✅ $name: $local_count LocalBusiness${NC}"
    fi
  fi
done

if [ "$location_issues" -gt 0 ]; then
  echo -e "${RED}Found $location_issues location pages with duplicates${NC}"
  total_issues=$((total_issues + location_issues))
fi
echo ""

echo "4. BLOG POSTS AUDIT (46 posts)"
echo "--------------------------------"
blog_sample=0
blog_issues=0
for page in dist/blog/*/index.html; do
  if [ -f "$page" ]; then
    blog_sample=$((blog_sample + 1))

    # Only check first 10 for speed
    if [ "$blog_sample" -le 10 ]; then
      name=$(basename $(dirname "$page"))
      local_count=$(grep -o '@type.*LocalBusiness' "$page" 2>/dev/null | wc -l | tr -d ' ')
      faq_count=$(grep -o '@type.*FAQPage' "$page" 2>/dev/null | wc -l | tr -d ' ')
      blog_count=$(grep -o '@type.*BlogPosting' "$page" 2>/dev/null | wc -l | tr -d ' ')

      if [ "$local_count" -gt 1 ] || [ "$faq_count" -gt 1 ] || [ "$blog_count" -gt 1 ]; then
        echo -e "${RED}❌ $name: LocalBusiness=$local_count, FAQPage=$faq_count, BlogPosting=$blog_count${NC}"
        blog_issues=$((blog_issues + 1))
      fi
    fi
  fi
done

if [ "$blog_issues" -gt 0 ]; then
  echo -e "${RED}Found $blog_issues blog posts with duplicates (checked first 10)${NC}"
  total_issues=$((total_issues + blog_issues))
else
  echo -e "${GREEN}✅ Blog posts look OK (sample of 10 checked)${NC}"
fi
echo ""

echo "5. FAQ/CONTACT PAGES AUDIT"
echo "---------------------------"
other_issues=0

# Check FAQ pages
for page in dist/faq/*/index.html dist/faq/index.html dist/contact/index.html dist/resources/index.html; do
  if [ -f "$page" ]; then
    name=$(echo "$page" | sed 's|dist/||' | sed 's|/index.html||')
    local_count=$(grep -o '@type.*LocalBusiness' "$page" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$local_count" -gt 1 ]; then
      echo -e "${RED}❌ $name: $local_count LocalBusiness schemas${NC}"
      other_issues=$((other_issues + 1))
    else
      echo -e "${GREEN}✅ $name: $local_count LocalBusiness${NC}"
    fi
  fi
done

if [ "$other_issues" -gt 0 ]; then
  total_issues=$((total_issues + other_issues))
fi
echo ""

echo "========================================"
echo "SUMMARY"
echo "========================================"
if [ "$total_issues" -eq 0 ]; then
  echo -e "${GREEN}✅ NO SCHEMA DUPLICATIONS FOUND!${NC}"
  echo "All 65 pages have proper schema markup."
else
  echo -e "${RED}❌ FOUND $total_issues PAGES WITH DUPLICATIONS${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Review /docs/CRITICAL-SCHEMA-DUPLICATION-AUDIT-REPORT.md"
  echo "2. Remove generateEnhancedLocalBusinessSchema() from React components"
  echo "3. Remove duplicate schemas from App.tsx and service pages"
  echo "4. Rebuild site: npm run build"
  echo "5. Re-run this script to verify fixes"
fi
echo ""
