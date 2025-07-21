const fs = require('fs');
const path = require('path');

// List of all blog article directories
const blogArticles = [
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
  'enterprise-website-presentation-revolution-june-2025',
  'enterprise-digital-transformation-trends-2025'
];

// Function to update title classes in a file
function updateTitleClass(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the main title h1 class
    content = content.replace(
      /className="text-4xl font-bold text-gray-900 mb-4"/g,
      'className="text-4xl font-bold text-gray-900 mb-4 text-center sm:text-left"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Update all blog article pages
blogArticles.forEach(slug => {
  const filePath = path.join(__dirname, 'src', 'app', 'blog', slug, 'page.tsx');
  updateTitleClass(filePath);
});

// Update blog listing page
const blogListingPath = path.join(__dirname, 'src', 'app', 'blog', 'page.tsx');
try {
  let content = fs.readFileSync(blogListingPath, 'utf8');
  
  // Update article titles in blog listing
  content = content.replace(
    /className="text-xl font-bold text-gray-900 mb-3"/g,
    'className="text-xl font-bold text-gray-900 mb-3 text-center sm:text-left"'
  );
  
  fs.writeFileSync(blogListingPath, content, 'utf8');
  console.log(`Updated: ${blogListingPath}`);
} catch (error) {
  console.error(`Error updating blog listing:`, error.message);
}

// Update category page titles
const categoryPagePath = path.join(__dirname, 'src', 'app', 'blog', 'category', '[slug]', 'page.tsx');
try {
  let content = fs.readFileSync(categoryPagePath, 'utf8');
  
  // Update featured article title
  content = content.replace(
    /className="text-2xl font-bold text-gray-900 mb-4 leading-tight"/g,
    'className="text-2xl font-bold text-gray-900 mb-4 leading-tight text-center sm:text-left"'
  );
  
  // Update regular article titles
  content = content.replace(
    /className="text-xl font-bold text-gray-900 mb-3 leading-tight"/g,
    'className="text-xl font-bold text-gray-900 mb-3 leading-tight text-center sm:text-left"'
  );
  
  fs.writeFileSync(categoryPagePath, content, 'utf8');
  console.log(`Updated: ${categoryPagePath}`);
} catch (error) {
  console.error(`Error updating category page:`, error.message);
}

console.log('Title centering update completed!');
