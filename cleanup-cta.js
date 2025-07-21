/**
 * Script to update all blog articles with consistent, simple CTA styling
 * and remove any emoji/icon usage
 */

const fs = require('fs');
const path = require('path');

// All blog article folders
const blogFolders = [
  'ai-infrastructure-revolution-july-2025',
  'cybersecurity-mega-breaches-july-2025',
  'cloud-computing-revolution-june-2025',
  '5g-enterprise-networks-june-2025',
  'digital-transformation-acceleration-may-2025',
  'voip-evolution-microsoft-zoom-may-2025',
  'edge-computing-iot-revolution-april-2025',
  'endpoint-security-crisis-ransomware-june-2025',
  'next-generation-firewall-ai-revolution-may-2025',
  'behavioral-analytics-ai-breakthrough-april-2025',
  'enterprise-security-subscriptions-saas-may-2025',
  'enterprise-office-real-estate-revolution-2025',
  'advanced-cyber-consultation-strategic-june-2025',
  'quantum-computing-threat-post-quantum-cryptography-july-2025',
  'managed-security-services-evolution-may-2025',
  'enterprise-digital-transformation-trends-2025'
];

console.log('Starting CTA design cleanup...');

blogFolders.forEach((folder, index) => {
  const filePath = path.join(__dirname, 'src', 'app', 'blog', folder, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace bright colored CTA backgrounds with simple gray
    content = content.replace(
      /bg-gradient-to-r from-\w+-\d+ to-\w+-\d+/g,
      'bg-gradient-to-r from-gray-50 to-gray-100'
    );
    
    content = content.replace(
      /border border-\w+-\d+/g,
      'border border-gray-200'
    );
    
    // Update CTA text colors to be consistent
    content = content.replace(
      /text-\w+-\d+ mb-3/g,
      'text-gray-900 mb-3'
    );
    
    content = content.replace(
      /text-\w+-\d+ mb-4/g,
      'text-gray-700 mb-4'
    );
    
    // Standardize button colors to blue
    content = content.replace(
      /bg-\w+-600/g,
      'bg-blue-600'
    );
    
    content = content.replace(
      /hover:bg-\w+-700/g,
      'hover:bg-blue-700'
    );
    
    content = content.replace(
      /border-\w+-600/g,
      'border-blue-600'
    );
    
    content = content.replace(
      /text-\w+-600/g,
      'text-blue-600'
    );
    
    content = content.replace(
      /hover:bg-\w+-50/g,
      'hover:bg-blue-50'
    );
    
    // Remove any emoji characters (basic cleanup)
    content = content.replace(/[🎉🚀✅❌💡🔥⚡️🌟💪🎯🏆📈🔧⭐️🌍🔒💼📊]/g, '');
    
    // Remove common icon references
    content = content.replace(/✓|✗|→|←|↑|↓|★|☆|■|□|●|○/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${folder}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('CTA design cleanup completed!');
