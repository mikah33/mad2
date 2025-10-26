#!/bin/bash

# Script to create favicon files from logo.png
# Requires: imagemagick (install with: brew install imagemagick)

cd "$(dirname "$0")/.."

if [ ! -f "public/logo.png" ]; then
    echo "Error: public/logo.png not found!"
    echo "Please save your logo image as public/logo.png first"
    exit 1
fi

echo "Creating favicon files from logo.png..."

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Installing via brew..."
    brew install imagemagick
fi

# Create favicon.ico (16x16 and 32x32)
convert public/logo.png -resize 16x16 public/favicon-16x16.png
convert public/logo.png -resize 32x32 public/favicon-32x32.png
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico

# Create Android/Chrome icons
convert public/logo.png -resize 192x192 public/android-chrome-192x192.png
convert public/logo.png -resize 512x512 public/android-chrome-512x512.png

# Create Apple touch icon
convert public/logo.png -resize 180x180 public/apple-touch-icon.png

echo "✅ Favicon files created successfully!"
echo "Files created:"
echo "  - favicon.ico"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - android-chrome-192x192.png"
echo "  - android-chrome-512x512.png"
echo "  - apple-touch-icon.png"
