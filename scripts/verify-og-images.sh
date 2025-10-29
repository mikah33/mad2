#!/bin/bash

# Verify OG Images Script
# This script checks that all pages have unique OG images set correctly

echo "🔍 Verifying OG Images for all pages..."
echo ""

success_count=0
fail_count=0

# Function to check OG image
check_og_image() {
    local page=$1
    local expected=$2

    if [ -f "$page" ]; then
        # Check if the expected image is in the OG tag
        if grep -q "og:image\" content=\"https://mikahsmobiledetailingsc.com/$expected\"" "$page"; then
            echo "✅ $page → $expected"
            success_count=$((success_count + 1))
        else
            echo "❌ $page → Expected $expected but found:"
            grep "og:image\"" "$page" | head -1
            fail_count=$((fail_count + 1))
        fi
    else
        echo "⚠️  $page → File not found"
        fail_count=$((fail_count + 1))
    fi
}

# Check all pages
check_og_image "dist/index.html" "mclarens-og.jpg"
check_og_image "dist/services/index.html" "logo.jpg"
check_og_image "dist/services/interior-detailing/index.html" "interior1.jpg"
check_og_image "dist/services/exterior-detailing/index.html" "exterior1.jpg"
check_og_image "dist/services/ceramic-coating/index.html" "mclarens.jpg"
check_og_image "dist/services/paint-correction/index.html" "exterior2.jpg"
check_og_image "dist/services/full-detail/index.html" "interior1.jpg"
check_og_image "dist/services/mobile-detailing/index.html" "exterior1.jpg"
check_og_image "dist/locations/index.html" "exterior3.jpg"
check_og_image "dist/locations/columbia-sc/index.html" "exterior1.jpg"
check_og_image "dist/locations/lexington-sc/index.html" "exterior2.jpg"
check_og_image "dist/locations/irmo-sc/index.html" "mclarens.jpg"
check_og_image "dist/locations/cayce-sc/index.html" "interior1.jpg"
check_og_image "dist/contact/index.html" "logo.jpg"
check_og_image "dist/faq/index.html" "exterior4.jpg"
check_og_image "dist/faq/ceramic-coating/index.html" "mclarens.jpg"
check_og_image "dist/faq/mobile-detailing/index.html" "exterior5.jpg"
check_og_image "dist/resources/index.html" "exterior6.jpg"

echo ""
echo "📊 Results:"
echo "   ✅ Success: $success_count"
echo "   ❌ Failed: $fail_count"
echo ""

if [ $fail_count -eq 0 ]; then
    echo "🎉 All pages have correct OG images!"
    exit 0
else
    echo "⚠️  Some pages have incorrect OG images"
    exit 1
fi
