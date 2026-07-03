/**
 * Post-build script to generate separate HTML files for each blog post
 * This ensures each blog post has its own HTML file with proper schema markup for SEO
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import blog data
import { blogPosts } from '../src/data/blog.js';
import { generateCompleteBlogPostSchema } from '../src/components/seo/BlogSchemas.js';

// Read the base index.html
const distPath = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Create blog directory if it doesn't exist
const blogDir = path.join(distPath, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

console.log(`\n📝 Generating pre-rendered HTML files for ${blogPosts.length} blog posts...\n`);

// Generate HTML for each blog post
blogPosts.forEach((post) => {
  const postDir = path.join(blogDir, post.slug);

  // Create directory for this blog post
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // Load full blog content
  let fullContent: any = null;
  try {
    const contentPath = path.join(__dirname, `../src/content/blog/${post.slug}.json`);
    fullContent = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  } catch (error) {
    console.log(`⚠️  No full content for ${post.slug}`);
  }

  // Generate schemas for this blog post
  const schemas = generateCompleteBlogPostSchema(post, fullContent?.faqs, fullContent?.howToSteps);

  // Enrich BlogPosting schema: full article text (AI crawlers don't run JS,
  // so schema + static HTML below are all they can read) + real update date.
  if (fullContent?.content) {
    const plainText = fullContent.content
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const blogPosting = schemas.find((s: any) => s['@type'] === 'BlogPosting');
    if (blogPosting) {
      (blogPosting as any).articleBody = plainText;
      if (fullContent.lastModified) {
        (blogPosting as any).dateModified = fullContent.lastModified.includes('T')
          ? fullContent.lastModified
          : `${fullContent.lastModified}T09:00:00-05:00`;
      }
    }
  }

  // Create schema script tags
  const schemaScripts = schemas
    .map((schema) => {
      return `    <script type="application/ld+json">
    ${JSON.stringify(schema, null, 2)}
    </script>`;
    })
    .join('\n');

  // Update meta tags for this specific blog post
  const postUrl = `https://mikahsmobiledetailingsc.com/blog/${post.slug}`;
  const imageUrl = post.image || 'https://mikahsmobiledetailingsc.com/exterior1.jpg';
  const fullTitle = `${post.title} | Mikah's Auto Detailing`;

  let html = baseHtml;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

  // Update meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"[^>]*>/,
    `<meta name="description" content="${(post.metaDescription || post.excerpt).replace(/"/g, '&quot;')}"/>`
  );

  // Update keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*"[^>]*>/,
    `<meta name="keywords" content="${post.tags.join(', ')}"/>`
  );

  // Update canonical
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${postUrl}"/>\n  </head>`
    );
  } else {
    html = html.replace(/<link rel="canonical" href=".*?"\/?>/, `<link rel="canonical" href="${postUrl}"/>`);
  }

  // Update OG tags
  html = html.replace(/<meta property="og:title" content="[^"]*"[^>]*>/g, `<meta property="og:title" content="${fullTitle.replace(/"/g, '&quot;')}"/>`);
  html = html.replace(
    /<meta property="og:description" content="[^"]*"[^>]*>/g,
    `<meta property="og:description" content="${(post.metaDescription || post.excerpt).replace(/"/g, '&quot;')}"/>`
  );
  html = html.replace(/<meta property="og:url" content="[^"]*"[^>]*>/g, `<meta property="og:url" content="${postUrl}"/>`);
  html = html.replace(/<meta property="og:image" content="[^"]*"[^>]*>/g, `<meta property="og:image" content="${imageUrl}"/>`);
  html = html.replace(/<meta property="og:type" content="[^"]*"[^>]*>/g, `<meta property="og:type" content="article"/>`);

  // Update Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*"[^>]*>/g, `<meta name="twitter:title" content="${fullTitle.replace(/"/g, '&quot;')}"/>`);
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"[^>]*>/g,
    `<meta name="twitter:description" content="${(post.metaDescription || post.excerpt).replace(/"/g, '&quot;')}"/>`
  );
  html = html.replace(/<meta name="twitter:image" content="[^"]*"[^>]*>/g, `<meta name="twitter:image" content="${imageUrl}"/>`);

  // Inject blog-specific schemas right before </head>
  html = html.replace('</head>', `${schemaScripts}\n  </head>`);

  // Inject the real article HTML into #root so non-JS crawlers (GPTBot,
  // PerplexityBot, ClaudeBot) can read the content. React replaces this
  // static markup when it hydrates, so users see the normal app.
  if (fullContent?.content) {
    const faqHtml = (fullContent.faqs || [])
      .map((f: any) => `<h3>${f.question}</h3><p>${f.answer}</p>`)
      .join('\n');
    const staticBody = `<div id="root"><main><article><h1>${post.title}</h1><p>By ${post.author} — updated ${fullContent.lastModified || post.datePublished}</p>${fullContent.content}${faqHtml ? `<section><h2>Frequently Asked Questions</h2>${faqHtml}</section>` : ''}</article></main></div>`;
    html = html.replace('<div id="root"></div>', staticBody);
  }

  // Write the HTML file
  const outputPath = path.join(postDir, 'index.html');
  fs.writeFileSync(outputPath, html);

  const schemaTypes = schemas.map((s: any) => s['@type']).join(', ');
  console.log(`✅ Generated: /blog/${post.slug}/index.html (${schemas.length} schemas: ${schemaTypes})`);
});

console.log(`\n✨ Successfully generated ${blogPosts.length} blog post HTML files!\n`);
