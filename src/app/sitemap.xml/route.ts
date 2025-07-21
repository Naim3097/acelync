import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://acelync.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/enterprise-digital-transformation-trends-2025</loc>
    <lastmod>2025-01-15T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/cloud-migration-challenges-guide</loc>
    <lastmod>2025-01-12T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/cybersecurity-remote-workforce-best-practices</loc>
    <lastmod>2025-01-10T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/category/digital-transformation</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/category/cloud-computing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/category/cybersecurity</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/category/it-consulting</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
