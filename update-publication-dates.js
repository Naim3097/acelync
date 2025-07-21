const fs = require('fs');
const path = require('path');

// Define realistic publication dates spread across April-July 2025
const articleDates = [
  // April 2025 articles
  { folder: 'behavioral-analytics-ai-breakthrough-april-2025', date: '2025-04-08', displayDate: 'April 8, 2025' },
  { folder: 'edge-computing-iot-revolution-april-2025', date: '2025-04-22', displayDate: 'April 22, 2025' },
  
  // May 2025 articles
  { folder: 'digital-transformation-acceleration-may-2025', date: '2025-05-06', displayDate: 'May 6, 2025' },
  { folder: 'enterprise-security-subscriptions-saas-may-2025', date: '2025-05-14', displayDate: 'May 14, 2025' },
  { folder: 'managed-security-services-evolution-may-2025', date: '2025-05-20', displayDate: 'May 20, 2025' },
  { folder: 'next-generation-firewall-ai-revolution-may-2025', date: '2025-05-28', displayDate: 'May 28, 2025' },
  { folder: 'voip-evolution-microsoft-zoom-may-2025', date: '2025-05-31', displayDate: 'May 31, 2025' },
  
  // June 2025 articles
  { folder: '5g-enterprise-networks-june-2025', date: '2025-06-03', displayDate: 'June 3, 2025' },
  { folder: 'cloud-computing-revolution-june-2025', date: '2025-06-10', displayDate: 'June 10, 2025' },
  { folder: 'endpoint-security-crisis-ransomware-june-2025', date: '2025-06-17', displayDate: 'June 17, 2025' },
  { folder: 'advanced-cyber-consultation-strategic-june-2025', date: '2025-06-24', displayDate: 'June 24, 2025' },
  { folder: 'enterprise-website-presentation-revolution-june-2025', date: '2025-06-30', displayDate: 'June 30, 2025' },
  
  // July 2025 articles
  { folder: 'ai-infrastructure-revolution-july-2025', date: '2025-07-08', displayDate: 'July 8, 2025' },
  { folder: 'cybersecurity-mega-breaches-july-2025', date: '2025-07-15', displayDate: 'July 15, 2025' },
  { folder: 'quantum-computing-threat-post-quantum-cryptography-july-2025', date: '2025-07-22', displayDate: 'July 22, 2025' },
  
  // Special enterprise transformation article (broader timeline coverage)
  { folder: 'enterprise-digital-transformation-trends-2025', date: '2025-05-01', displayDate: 'May 1, 2025' },
  { folder: 'enterprise-office-real-estate-revolution-2025', date: '2025-06-05', displayDate: 'June 5, 2025' }
];

function updateArticleDates() {
  console.log('Updating publication dates for all blog articles...\n');
  
  articleDates.forEach(({ folder, date, displayDate }) => {
    const filePath = path.join(__dirname, 'src', 'app', 'blog', folder, 'page.tsx');
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Update publishedTime in metadata
      content = content.replace(
        /publishedTime: '[^']*'/g, 
        `publishedTime: '${date}'`
      );
      
      // Update display date in the article header
      content = content.replace(
        /<span>[A-Za-z]+ \d{1,2}, 2025<\/span>/g,
        `<span>${displayDate}</span>`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${folder}: ${displayDate}`);
      
    } catch (error) {
      console.error(`❌ Error updating ${folder}:`, error.message);
    }
  });
  
  console.log('\n🎉 Publication date updates completed!');
  console.log('\nTimeline Summary:');
  console.log('- April 2025: 2 articles');
  console.log('- May 2025: 6 articles');
  console.log('- June 2025: 5 articles'); 
  console.log('- July 2025: 3 articles');
  console.log('\nThis creates a natural publication rhythm with consistent content flow.');
}

// Run the update
updateArticleDates();
