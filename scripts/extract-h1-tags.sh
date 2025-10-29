#!/bin/bash

echo "=== Extracting H1 Tags from All Pages ==="
echo ""

for file in src/pages/*.tsx src/pages/**/*.tsx; do
  if [ -f "$file" ]; then
    h1=$(grep -m1 "<h1" "$file" 2>/dev/null | sed 's/.*<h1[^>]*>//' | sed 's/<\/h1>.*//' | sed 's/{[^}]*}//g' | tr -d '\n' | xargs)
    if [ -n "$h1" ]; then
      echo "$h1 ||| $file"
    fi
  fi
done | sort

echo ""
echo "=== Finding Duplicates ==="
echo ""

for file in src/pages/*.tsx src/pages/**/*.tsx; do
  if [ -f "$file" ]; then
    h1=$(grep -m1 "<h1" "$file" 2>/dev/null | sed 's/.*<h1[^>]*>//' | sed 's/<\/h1>.*//' | sed 's/{[^}]*}//g' | tr -d '\n' | xargs)
    if [ -n "$h1" ]; then
      echo "$h1"
    fi
  fi
done | sort | uniq -c | sort -rn | awk '$1 > 1 {print "DUPLICATE (" $1 "x): " substr($0, index($0,$2))}'
