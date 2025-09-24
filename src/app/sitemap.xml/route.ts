import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://techtodayglobal.com';
  
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
  <!-- New Aruba Articles - July 2025 -->
  <url>
    <loc>${baseUrl}/blog/aruba-zero-trust-network-security-july-2025</loc>
    <lastmod>2025-07-25T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-wifi-7-enterprise-deployment-july-2025</loc>
    <lastmod>2025-07-18T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-sdwan-edge-computing-july-2025</loc>
    <lastmod>2025-07-12T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-central-cloud-management-revolution-july-2025</loc>
    <lastmod>2025-07-05T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- New Aruba Articles - August 2025 -->
  <url>
    <loc>${baseUrl}/blog/aruba-switching-solutions-enterprise-network-foundation</loc>
    <lastmod>2025-08-20T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-wireless-access-points-enterprise-wifi-performance</loc>
    <lastmod>2025-08-15T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-network-security-framework-edge-cloud-protection</loc>
    <lastmod>2025-08-10T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-enterprise-networking-solutions-infrastructure-transformation</loc>
    <lastmod>2025-08-05T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- New Aruba Articles - September 2025 -->
  <url>
    <loc>${baseUrl}/blog/aruba-clearpass-access-management-identity-network-security</loc>
    <lastmod>2025-09-22T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-network-optimization-ai-powered-performance-analytics</loc>
    <lastmod>2025-09-18T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-enterprise-wireless-solutions-business-connectivity-performance</loc>
    <lastmod>2025-09-16T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/aruba-edge-services-platform-intelligent-branch-office-computing</loc>
    <lastmod>2025-09-29T00:00:00.000Z</lastmod>
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
