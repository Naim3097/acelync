const fs = require('fs');
const path = require('path');

// List of all blog article directories
const blogArticles = [
  '5g-enterprise-networks-june-2025',
  'advanced-cyber-consultation-strategic-june-2025',
  'ai-infrastructure-revolution-july-2025',
  'behavioral-analytics-ai-breakthrough-april-2025',
  'cloud-computing-revolution-june-2025',
  'cybersecurity-mega-breaches-july-2025',
  'digital-transformation-acceleration-may-2025',
  'edge-computing-iot-revolution-april-2025',
  'endpoint-security-crisis-ransomware-june-2025',
  'enterprise-digital-transformation-trends-2025',
  'enterprise-office-real-estate-revolution-2025',
  'enterprise-security-subscriptions-saas-may-2025',
  'enterprise-website-presentation-revolution-june-2025',
  'managed-security-services-evolution-may-2025',
  'next-generation-firewall-ai-revolution-may-2025',
  'quantum-computing-threat-post-quantum-cryptography-july-2025',
  'voip-evolution-microsoft-zoom-may-2025'
];

const blogDir = 'src/app/blog';

console.log('Checking all blog articles for consistency...\n');

blogArticles.forEach((article, index) => {
  const filePath = path.join(blogDir, article, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`${index + 1}. ${article}`);
    
    // Check for common issues
    const issues = [];
    
    // Check title color
    if (content.includes('text-gray-700 mb-4') && content.includes('<h1')) {
      issues.push('- Title should use text-gray-900, not text-gray-700');
    }
    
    // Check date color
    if (content.includes('text-blue-600') && content.includes('flex items-center')) {
      issues.push('- Date should use text-gray-600, not text-blue-600');
    }
    
    // Check for old URL patterns
    const oldUrlPatterns = [
      'wired-and-wireless-networking',
      'network-access-control-structured-cabling',
      'centralized-network-management-analytics',
      'network-security-management'
    ];
    
    oldUrlPatterns.forEach(pattern => {
      if (content.includes(pattern)) {
        issues.push(`- Contains old URL pattern: ${pattern}`);
      }
    });
    
    // Check CTA button consistency
    if (content.includes('border-gray-200 text-blue-600')) {
      issues.push('- CTA border button should use border-blue-600');
    }
    
    if (issues.length > 0) {
      console.log('  Issues found:');
      issues.forEach(issue => console.log(`    ${issue}`));
    } else {
      console.log('  ✓ No issues found');
    }
    
    console.log('');
  } else {
    console.log(`${index + 1}. ${article} - FILE NOT FOUND`);
  }
});

console.log('Blog article check complete.');
