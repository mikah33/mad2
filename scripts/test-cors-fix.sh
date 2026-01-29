#!/bin/bash

# Test script for CORS fix validation

echo "🔍 CORS Fix Test Script"
echo "======================"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
else
    echo "✅ Netlify CLI found: $(netlify version)"
fi

# Check if logged into Netlify
if ! netlify status &> /dev/null; then
    echo "❌ Not logged into Netlify. Please run: netlify auth:login"
    exit 1
else
    echo "✅ Netlify authentication verified"
fi

# Test function syntax
echo ""
echo "🧪 Testing Netlify function syntax..."
if netlify functions:list | grep -q "submit-form"; then
    echo "✅ submit-form function found"
else
    echo "❌ submit-form function not found"
fi

# Test local development setup
echo ""
echo "🚀 Starting development environment test..."
echo "This will start Netlify dev server. Press Ctrl+C to stop when done testing."
echo ""
echo "Test instructions:"
echo "1. Navigate to http://localhost:4000"
echo "2. Fill out a form and submit"
echo "3. Check browser console for any CORS errors"
echo "4. Verify form submission succeeds"
echo ""
read -p "Press Enter to start netlify dev..."

netlify dev