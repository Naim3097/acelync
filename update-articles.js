/**
 * Script to update all blog articles with the new design system
 * This script replaces the old article structure with the new BlogArticle component
 */

const fs = require('fs');
const path = require('path');

// Blog articles to update
const articles = [
  {
    folder: 'cybersecurity-mega-breaches-july-2025',
    title: 'Cybersecurity Crisis: How July 2025\'s Mega-Breaches Changed Enterprise Security Forever',
    date: 'July 21, 2025',
    time: '13 min read',
    category: 'Cybersecurity'
  },
  {
    folder: 'cloud-computing-revolution-june-2025',
    title: 'Cloud Computing Revolution: AWS, Azure, and Google\'s June 2025 Quantum Leap',
    date: 'July 21, 2025',
    time: '10 min read',
    category: 'Cloud Computing'
  },
  {
    folder: '5g-enterprise-networks-june-2025',
    title: '5G Enterprise Networks Explosion: How Verizon Standalone and WiFi 7 in June 2025 Revolutionized Business Connectivity',
    date: 'July 21, 2025',
    time: '10 min read',
    category: '5G Networks'
  },
  {
    folder: 'digital-transformation-acceleration-may-2025',
    title: 'Digital Transformation Acceleration: How Microsoft Copilot Enterprise and Salesforce Einstein 2.0 in May 2025 Revolutionized Business Operations',
    date: 'July 21, 2025',
    time: '11 min read',
    category: 'Digital Transformation'
  },
  {
    folder: 'voip-evolution-microsoft-zoom-may-2025',
    title: 'VoIP Evolution: How Microsoft Teams Phone 2.0 and Zoom AI Platform in May 2025 Transformed Business Communications',
    date: 'July 21, 2025',
    time: '10 min read',
    category: 'VoIP & Communications'
  },
  {
    folder: 'edge-computing-iot-revolution-april-2025',
    title: 'Edge Computing Explosion: How April 2025\'s IoT Revolution Changed Enterprise Operations',
    date: 'July 21, 2025',
    time: '11 min read',
    category: 'Edge Computing'
  },
  {
    folder: 'endpoint-security-crisis-ransomware-june-2025',
    title: 'Endpoint Security Crisis: How Ransomware Evolution in June 2025 Changed Cybersecurity Forever',
    date: 'July 21, 2025',
    time: '14 min read',
    category: 'Endpoint Security'
  },
  {
    folder: 'next-generation-firewall-ai-revolution-may-2025',
    title: 'Next-Generation Firewall Revolution: How AI-Powered Security Changed Network Protection in May 2025',
    date: 'July 21, 2025',
    time: '12 min read',
    category: 'Network Security'
  },
  {
    folder: 'behavioral-analytics-ai-breakthrough-april-2025',
    title: 'Behavioral Analytics Breakthrough: How AI Detection in April 2025 Revolutionized Enterprise Security',
    date: 'July 21, 2025',
    time: '11 min read',
    category: 'Security Analytics'
  },
  {
    folder: 'enterprise-security-subscriptions-saas-may-2025',
    title: 'Enterprise Security Subscriptions: How May 2025\'s SaaS Revolution Transformed Cybersecurity Delivery',
    date: 'July 21, 2025',
    time: '13 min read',
    category: 'Security Subscriptions'
  },
  {
    folder: 'enterprise-office-real-estate-revolution-2025',
    title: 'Office Real Estate Revolution: How Smart Buildings and Hybrid Work Technology in June 2025 Transformed Commercial Space',
    date: 'July 21, 2025',
    time: '10 min read',
    category: 'Real Estate Technology'
  },
  {
    folder: 'advanced-cyber-consultation-strategic-june-2025',
    title: 'Advanced Cyber Consultation Revolution: How Deloitte AI Security and PwC Quantum Defense in July 2025 Transformed Enterprise Advisory',
    date: 'July 21, 2025',
    time: '13 min read',
    category: 'Cyber Consultation'
  },
  {
    folder: 'quantum-computing-threat-post-quantum-cryptography-july-2025',
    title: 'Quantum Computing Security Threat: How NIST Post-Quantum Standards and IBM Quantum Network in July 2025 Reshaped Cybersecurity',
    date: 'July 21, 2025',
    time: '11 min read',
    category: 'Quantum Security'
  },
  {
    folder: 'managed-security-services-evolution-may-2025',
    title: 'Managed Security Services Evolution: How IBM Security Services 3.0 and Accenture AI SOC in July 2025 Transformed Enterprise Protection',
    date: 'July 21, 2025',
    time: '12 min read',
    category: 'Managed Security'
  },
  {
    folder: 'enterprise-website-presentation-revolution-june-2025',
    title: 'Enterprise Website Presentation Revolution: How AI-Powered Digital Experiences in June 2025 Transformed Business',
    date: 'July 21, 2025',
    time: '10 min read',
    category: 'Website Development'
  }
];

console.log('Starting blog article updates...');

articles.forEach((article, index) => {
  const filePath = path.join(__dirname, 'src', 'app', 'blog', article.folder, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract metadata section
    const metadataMatch = content.match(/export const metadata[\s\S]*?};/);
    const metadata = metadataMatch ? metadataMatch[0] : '';
    
    // Extract content between prose div tags
    const contentMatch = content.match(/<div className="prose prose-lg max-w-none">([\s\S]*?)<\/div>/);
    let articleContent = contentMatch ? contentMatch[1].trim() : '';
    
    // If no content found, try different pattern
    if (!articleContent) {
      const altMatch = content.match(/<p className="lead[\s\S]*?(?=<\/article>|$)/);
      articleContent = altMatch ? altMatch[0] : 'Content extraction failed';
    }
    
    const newContent = `import Link from 'next/link';
import type { Metadata } from "next";
import BlogArticle from '@/components/BlogArticle';

${metadata}

export default function ArticlePage() {
  return (
    <BlogArticle
      title="${article.title}"
      publishDate="${article.date}"
      readTime="${article.time}"
      category="${article.category}"
    >
      ${articleContent}
    </BlogArticle>
  );
}`;

    fs.writeFileSync(filePath, newContent);
    console.log(`✅ Updated: ${article.folder}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('Blog article updates completed!');
