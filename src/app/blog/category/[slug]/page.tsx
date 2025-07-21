import Link from 'next/link';
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Define the articles data with categories
const allArticles = [
  {
    id: 1,
    title: "AI Infrastructure Revolution: How NVIDIA's July 2025 Breakthrough Changes Everything",
    excerpt: "NVIDIA's Blackwell Ultra GPUs and OpenAI's GPT-5 launch in July 2025 are reshaping enterprise AI infrastructure. Learn how to prepare your network for AI workloads.",
    category: "ai-infrastructure",
    categoryDisplay: "AI Infrastructure",
    readTime: "11 min read",
    publishDate: "July 8, 2025",
    slug: "ai-infrastructure-revolution-july-2025",
    featured: true
  },
  {
    id: 2,
    title: "Cybersecurity Mega Breaches: How July 2025 Changed Enterprise Security Forever",
    excerpt: "Major security incidents in July 2025 forced enterprises to completely rethink their cybersecurity strategies and infrastructure investments.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "12 min read",
    publishDate: "July 15, 2025",
    slug: "cybersecurity-mega-breaches-july-2025",
    featured: true
  },
  {
    id: 3,
    title: "Cloud Computing Revolution: June 2025's Multi-Cloud Breakthrough",
    excerpt: "New multi-cloud orchestration platforms are enabling seamless workload distribution across AWS, Azure, and Google Cloud environments.",
    category: "cloud-computing",
    categoryDisplay: "Cloud Computing",
    readTime: "10 min read",
    publishDate: "June 10, 2025",
    slug: "cloud-computing-revolution-june-2025",
    featured: false
  },
  {
    id: 4,
    title: "5G Enterprise Networks: How June 2025 Deployments Transform Business Operations",
    excerpt: "Private 5G networks are revolutionizing enterprise connectivity with ultra-low latency and massive IoT device support capabilities.",
    category: "network-solutions",
    categoryDisplay: "Network Solutions",
    readTime: "9 min read",
    publishDate: "June 3, 2025",
    slug: "5g-enterprise-networks-june-2025",
    featured: false
  },
  {
    id: 5,
    title: "Digital Transformation Acceleration: May 2025's Enterprise Software Revolution",
    excerpt: "Microsoft's Copilot Enterprise launch, Salesforce's Einstein 2.0, and Adobe's Creative Cloud AI accelerated digital transformation.",
    category: "digital-transformation",
    categoryDisplay: "Digital Transformation",
    readTime: "12 min read",
    publishDate: "May 6, 2025",
    slug: "digital-transformation-acceleration-may-2025",
    featured: false
  },
  {
    id: 6,
    title: "VoIP Evolution: How Microsoft Teams Phone and Zoom's May 2025 Updates Changed Business Communications",
    excerpt: "Microsoft Teams Phone 2.0 and Zoom's AI-powered calling platform revolutionized enterprise communication with advanced features.",
    category: "network-solutions",
    categoryDisplay: "Network Solutions",
    readTime: "10 min read",
    publishDate: "May 31, 2025",
    slug: "voip-evolution-microsoft-zoom-may-2025",
    featured: false
  },
  {
    id: 7,
    title: "Edge Computing Explosion: How April 2025's IoT Revolution Changed Enterprise Operations",
    excerpt: "AWS IoT TwinMaker, Microsoft Azure IoT Accelerator, and Google's Edge TPU revolutionized enterprise IoT deployments.",
    category: "network-solutions",
    categoryDisplay: "Network Solutions",
    readTime: "11 min read",
    publishDate: "April 22, 2025",
    slug: "edge-computing-iot-revolution-april-2025",
    featured: false
  },
  {
    id: 8,
    title: "Endpoint Security Crisis: How Ransomware Evolution in June 2025 Changed Cybersecurity Forever",
    excerpt: "LockBit 4.0, BlackCat's AI variants, and state-sponsored attacks forced enterprises to rethink endpoint security strategies.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "14 min read",
    publishDate: "June 17, 2025",
    slug: "endpoint-security-crisis-ransomware-june-2025",
    featured: false
  },
  {
    id: 9,
    title: "Next-Generation Firewall Revolution: How AI-Powered Security Changed Network Protection in May 2025",
    excerpt: "Palo Alto's AI-powered NGFW, Fortinet's ML security fabric, and Cisco's adaptive firewalls revolutionized enterprise network protection.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "12 min read",
    publishDate: "May 28, 2025",
    slug: "next-generation-firewall-ai-revolution-may-2025",
    featured: false
  },
  {
    id: 10,
    title: "Behavioral Analytics Breakthrough: How AI Detection in April 2025 Revolutionized Enterprise Security",
    excerpt: "Microsoft Sentinel's UEBA 2.0, Splunk's behavioral AI, and Exabeam's fusion platform transformed insider threat detection.",
    category: "ai-infrastructure",
    categoryDisplay: "AI Infrastructure",
    readTime: "11 min read",
    publishDate: "April 8, 2025",
    slug: "behavioral-analytics-ai-breakthrough-april-2025",
    featured: false
  },
  {
    id: 11,
    title: "Enterprise Security Subscriptions: How SaaS Security Models in May 2025 Transformed Cybersecurity",
    excerpt: "CrowdStrike's Falcon Complete 2.0, Microsoft's Security Copilot subscriptions, and Palo Alto's Prisma Cloud revolutionized security delivery.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "10 min read",
    publishDate: "May 14, 2025",
    slug: "enterprise-security-subscriptions-saas-may-2025",
    featured: false
  },
  {
    id: 12,
    title: "Enterprise Office Real Estate Revolution: How Hybrid Work in 2025 Transformed Commercial Space Strategies",
    excerpt: "WeWork's enterprise solutions, flexible office platforms, and smart building technologies revolutionized commercial real estate.",
    category: "it-consulting",
    categoryDisplay: "IT Consulting",
    readTime: "9 min read",
    publishDate: "June 5, 2025",
    slug: "enterprise-office-real-estate-revolution-2025",
    featured: false
  },
  {
    id: 13,
    title: "Advanced Cyber Consultation: How June 2025's Strategic Security Advisory Transformed Enterprise Defense",
    excerpt: "Deloitte's Cyber Risk services, PwC's digital trust platform, and KPMG's cyber resilience framework revolutionized strategic cybersecurity.",
    category: "it-consulting",
    categoryDisplay: "IT Consulting",
    readTime: "13 min read",
    publishDate: "June 24, 2025",
    slug: "advanced-cyber-consultation-strategic-june-2025",
    featured: false
  },
  {
    id: 14,
    title: "Quantum Computing Threat: How Post-Quantum Cryptography in July 2025 Saved Enterprise Security",
    excerpt: "NIST's post-quantum cryptography standards, IBM's quantum-safe solutions, and enterprise quantum threat preparation revolutionized cybersecurity.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "14 min read",
    publishDate: "July 22, 2025",
    slug: "quantum-computing-threat-post-quantum-cryptography-july-2025",
    featured: false
  },
  {
    id: 15,
    title: "Managed Security Services Evolution: How May 2025 AI SOC Transformed Enterprise Protection",
    excerpt: "AI-powered Security Operations Centers revolutionized managed security services with autonomous threat hunting capabilities.",
    category: "cybersecurity",
    categoryDisplay: "Cybersecurity",
    readTime: "12 min read",
    publishDate: "May 20, 2025",
    slug: "managed-security-services-evolution-may-2025",
    featured: false
  },
  {
    id: 16,
    title: "Enterprise Website Presentation Revolution: How AI-Powered Digital Experiences in June 2025 Transformed Business",
    excerpt: "Adobe's AI web builder, Webflow's enterprise platform, and Squarespace's business intelligence tools revolutionized enterprise website development.",
    category: "digital-transformation",
    categoryDisplay: "Digital Transformation",
    readTime: "10 min read",
    publishDate: "June 30, 2025",
    slug: "enterprise-website-presentation-revolution-june-2025",
    featured: false
  },
  {
    id: 17,
    title: "Enterprise Digital Transformation Trends 2025",
    excerpt: "Comprehensive analysis of digital transformation strategies, AI integration, and enterprise modernization trends shaping business in 2025.",
    category: "digital-transformation",
    categoryDisplay: "Digital Transformation",
    readTime: "8 min read",
    publishDate: "May 1, 2025",
    slug: "enterprise-digital-transformation-trends-2025",
    featured: false
  }
];

const categoryInfo = {
  "ai-infrastructure": {
    name: "AI Infrastructure",
    description: "Latest developments in artificial intelligence infrastructure, from NVIDIA's breakthrough GPUs to enterprise AI deployment strategies.",
    color: "from-purple-500 to-blue-600"
  },
  "cybersecurity": {
    name: "Cybersecurity",
    description: "Comprehensive analysis of cybersecurity threats, breaches, and enterprise security solutions including ransomware evolution and defense strategies.",
    color: "from-red-500 to-orange-600"
  },
  "network-solutions": {
    name: "Network Solutions",
    description: "Enterprise networking innovations including 5G deployments, VoIP evolution, and edge computing infrastructure transformations.",
    color: "from-green-500 to-teal-600"
  },
  "digital-transformation": {
    name: "Digital Transformation",
    description: "Enterprise digital transformation strategies, website presentation innovations, and business modernization approaches.",
    color: "from-indigo-500 to-purple-600"
  },
  "cloud-computing": {
    name: "Cloud Computing",
    description: "Multi-cloud strategies, cloud infrastructure optimization, and enterprise cloud adoption insights for modern business operations.",
    color: "from-sky-500 to-blue-600"
  },
  "it-consulting": {
    name: "IT Consulting",
    description: "Strategic IT consulting services, enterprise advisory solutions, and professional guidance for technology transformation initiatives.",
    color: "from-emerald-500 to-green-600"
  }
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryInfo[slug as keyof typeof categoryInfo];
  
  if (!category) {
    return {
      title: "Category Not Found | Tech Info",
      description: "The requested category could not be found."
    };
  }

  return {
    title: `${category.name} Articles - Tech Info`,
    description: `${category.description} Browse our comprehensive ${category.name} insights and analysis.`,
    keywords: `${category.name.toLowerCase()}, enterprise technology, tech insights, ${slug}`,
    openGraph: {
      title: `${category.name} Articles - Tech Info`,
      description: category.description,
      url: `https://techtodayglobal.com/blog/category/${slug}/`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categoryInfo[slug as keyof typeof categoryInfo];
  
  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The requested category could not be found.</p>
        <Link 
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    );
  }

  const categoryArticles = allArticles.filter(article => article.category === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Header */}
      <div className="text-center mb-12">
        <div className={`bg-gradient-to-r ${category.color} text-white rounded-lg p-8 mb-8`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {category.description}
          </p>
          <div className="mt-6">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium text-white">
              {categoryArticles.length} articles
            </span>
          </div>
        </div>
        
        {/* Breadcrumb */}
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium">
              {category.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* Articles Grid */}
      <div className="space-y-8">
        {categoryArticles.map((article, index) => (
          <article key={article.id} className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${index === 0 ? 'lg:flex' : ''}`}>
            {index === 0 ? (
              // Featured article layout
              <>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      Featured
                    </span>
                    <span className="ml-4">{article.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{article.publishDate}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight text-center sm:text-left">
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`lg:w-1/2 bg-gradient-to-br ${category.color} p-8 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold opacity-20 mb-4">01</div>
                    <div className="text-xl font-semibold opacity-90">Featured Article</div>
                    <div className="text-sm opacity-75 mt-2">{category.name}</div>
                  </div>
                </div>
              </>
            ) : (
              // Regular article layout
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {article.categoryDisplay}
                  </span>
                  <span className="ml-auto">{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{article.publishDate}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight text-center sm:text-left">
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Other Categories */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Other Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(categoryInfo)
            .filter(([categorySlug]) => categorySlug !== slug)
            .map(([categorySlug, info]) => (
              <Link 
                key={categorySlug}
                href={`/blog/category/${categorySlug}`}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {info.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {allArticles.filter(article => article.category === categorySlug).length} articles
                </p>
              </Link>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with {category.name}
        </h2>
        <p className="text-xl text-blue-100 mb-6">
          Get the latest insights and analysis delivered to your inbox.
        </p>
        <Link 
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
        >
          Subscribe to Updates
        </Link>
      </div>
    </div>
  );
}
