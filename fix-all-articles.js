const fs = require('fs');
const path = require('path');

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

const urlMappings = {
  'network-security-management': 'aceteam-connect',
  'centralized-network-management-analytics': 'aceteam-digital',
  'wired-and-wireless-networking': 'aceteam-networks',
  'network-access-control-structured-cabling': 'aceteam-networks'
};

console.log('Starting blog article fixes...\n');

blogArticles.forEach((articleSlug, index) => {
  const articlePath = path.join(__dirname, 'src', 'app', 'blog', articleSlug, 'page.tsx');
  
  if (!fs.existsSync(articlePath)) {
    console.log(`❌ Article not found: ${articleSlug}`);
    return;
  }

  try {
    let content = fs.readFileSync(articlePath, 'utf8');
    let hasChanges = false;

    // Fix 1: Title color - change text-gray-700 to text-gray-900 for h1
    if (content.includes('className="text-4xl font-bold text-gray-700')) {
      content = content.replace(
        'className="text-4xl font-bold text-gray-700',
        'className="text-4xl font-bold text-gray-900'
      );
      hasChanges = true;
    }

    // Fix 2: Date color - change text-blue-600 to text-gray-600 for date section
    if (content.includes('className="flex items-center text-blue-600"')) {
      content = content.replace(
        'className="flex items-center text-blue-600"',
        'className="flex items-center text-gray-600"'
      );
      hasChanges = true;
    }

    // Fix 3: Update old URL patterns
    Object.keys(urlMappings).forEach(oldPattern => {
      const newPattern = urlMappings[oldPattern];
      const oldUrl = `https://aceit.asia/${oldPattern}/`;
      const newUrl = `https://aceit.asia/${newPattern}/`;
      
      if (content.includes(oldUrl)) {
        content = content.replaceAll(oldUrl, newUrl);
        hasChanges = true;
      }
    });

    // Fix 4: CTA border button styling - ensure consistent border-blue-600
    const borderButtonRegex = /className="inline-block border border-[\w-]+ text-[\w-]+ px-5 py-2 rounded-lg font-medium hover:bg-[\w-]+ transition-colors"/g;
    if (borderButtonRegex.test(content)) {
      content = content.replace(
        borderButtonRegex,
        'className="inline-block border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"'
      );
      hasChanges = true;
    }

    // Fix 5: Ensure consistent spacing and remove any empty placeholders
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove triple+ line breaks
    content = content.replace(/\{\s*\/\*.*?\*\/\s*\}/g, ''); // Remove comment placeholders

    if (hasChanges) {
      fs.writeFileSync(articlePath, content, 'utf8');
      console.log(`✅ Fixed: ${articleSlug}`);
    } else {
      console.log(`✨ Already clean: ${articleSlug}`);
    }

  } catch (error) {
    console.log(`❌ Error fixing ${articleSlug}:`, error.message);
  }
});

console.log('\n✅ Blog article fixes complete!');
