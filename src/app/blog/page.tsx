import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Info Blog - AI Infrastructure, Cybersecurity & Enterprise Technology",
  description: "Latest analysis on AI infrastructure breakthroughs, cybersecurity threats, 5G networks, and enterprise technology solutions. Expert insights from July 2025.",
  keywords: "AI infrastructure blog, cybersecurity analysis, 5G networks, enterprise technology, NVIDIA Blackwell Ultra, GPT-5, quantum computing",
  openGraph: {
    title: 'Tech Info Blog - AI Infrastructure, Cybersecurity & Enterprise Technology',
    description: 'Latest analysis on AI infrastructure breakthroughs, cybersecurity threats, 5G networks, and enterprise technology solutions.',
    url: 'https://acelync.com/blog/',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Info Technology Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "AI Infrastructure Revolution: How NVIDIA's July 2025 Breakthrough Changes Everything",
      excerpt: "NVIDIA's Blackwell Ultra GPUs and OpenAI's GPT-5 launch in July 2025 are reshaping enterprise AI infrastructure. Learn how to prepare your network for AI workloads.",
      category: "AI Infrastructure",
      readTime: "11 min read",
      publishDate: "July 8, 2025",
      slug: "ai-infrastructure-revolution-july-2025",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Crisis: How July 2025's Mega-Breaches Changed Enterprise Security Forever",
      excerpt: "Microsoft's Azure breach, Apple's supply chain compromise, and the CrowdStrike incident revealed critical vulnerabilities. Learn how to protect your enterprise.",
      category: "Cybersecurity",
      readTime: "13 min read",
      publishDate: "July 15, 2025",
      slug: "cybersecurity-mega-breaches-july-2025",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Computing Revolution: AWS, Azure, and Google's June 2025 Quantum Leap",
      excerpt: "Amazon's Graviton4 processors, Microsoft's Azure Quantum Cloud, and Google's Axion chips revolutionized enterprise cloud strategies.",
      category: "Cloud Computing",
      readTime: "10 min read",
      publishDate: "June 10, 2025",
      slug: "cloud-computing-revolution-june-2025",
      featured: true
    },
    {
      id: 4,
      title: "5G Enterprise Networks: How June 2025's Breakthroughs Changed Business Connectivity",
      excerpt: "Verizon's 5G Standalone launch, AT&T's private network expansion, and WiFi 7 enterprise rollouts revolutionized business connectivity.",
      category: "Network Infrastructure",
      readTime: "9 min read",
      publishDate: "June 3, 2025",
      slug: "5g-enterprise-networks-june-2025",
      featured: false
    },
    {
      id: 5,
      title: "Digital Transformation Acceleration: May 2025's Enterprise Software Revolution",
      excerpt: "Microsoft's Copilot Enterprise launch, Salesforce's Einstein 2.0, and Adobe's Creative Cloud AI accelerated digital transformation.",
      category: "Digital Transformation",
      readTime: "12 min read",
      publishDate: "May 6, 2025",
      slug: "digital-transformation-acceleration-may-2025",
      featured: false
    },
    {
      id: 6,
      title: "VoIP Evolution: How Microsoft Teams Phone and Zoom's May 2025 Updates Changed Business Communications",
      excerpt: "Microsoft Teams Phone 2.0 and Zoom's AI-powered calling platform revolutionized enterprise communication with advanced features.",
      category: "Business Communications",
      readTime: "10 min read",
      publishDate: "May 31, 2025",
      slug: "voip-evolution-microsoft-zoom-may-2025",
      featured: false
    },
    {
      id: 7,
      title: "Edge Computing Explosion: How April 2025's IoT Revolution Changed Enterprise Operations",
      excerpt: "AWS IoT TwinMaker, Microsoft Azure IoT Accelerator, and Google's Edge TPU revolutionized enterprise IoT deployments.",
      category: "Edge Computing",
      readTime: "11 min read",
      publishDate: "April 22, 2025",
      slug: "edge-computing-iot-revolution-april-2025",
      featured: false
    },
    {
      id: 8,
      title: "Endpoint Security Crisis: How Ransomware Evolution in June 2025 Changed Cybersecurity Forever",
      excerpt: "LockBit 4.0, BlackCat's AI variants, and state-sponsored attacks forced enterprises to rethink endpoint security strategies.",
      category: "Endpoint Security",
      readTime: "14 min read",
      publishDate: "June 17, 2025",
      slug: "endpoint-security-crisis-ransomware-june-2025",
      featured: false
    },
    {
      id: 9,
      title: "Next-Generation Firewall Revolution: How AI-Powered Security Changed Network Protection in May 2025",
      excerpt: "Palo Alto's AI-powered NGFW, Fortinet's ML security fabric, and Cisco's adaptive firewalls revolutionized enterprise network protection.",
      category: "Network Security",
      readTime: "12 min read",
      publishDate: "May 28, 2025",
      slug: "next-generation-firewall-ai-revolution-may-2025",
      featured: false
    },
    {
      id: 10,
      title: "Behavioral Analytics Breakthrough: How AI Detection in April 2025 Revolutionized Enterprise Security",
      excerpt: "Microsoft Sentinel's UEBA 2.0, Splunk's behavioral AI, and Exabeam's fusion platform transformed insider threat detection.",
      category: "Security Analytics",
      readTime: "11 min read",
      publishDate: "April 8, 2025",
      slug: "behavioral-analytics-ai-breakthrough-april-2025",
      featured: false
    },
    {
      id: 11,
      title: "Enterprise Security Subscriptions: How SaaS Security Models in May 2025 Transformed Cybersecurity",
      excerpt: "CrowdStrike's Falcon Complete 2.0, Microsoft's Security Copilot subscriptions, and Palo Alto's Prisma Cloud revolutionized security delivery.",
      category: "Security Services",
      readTime: "10 min read",
      publishDate: "May 14, 2025",
      slug: "enterprise-security-subscriptions-saas-may-2025",
      featured: false
    },
    {
      id: 12,
      title: "Enterprise Office Real Estate Revolution: How Hybrid Work in 2025 Transformed Commercial Space Strategies",
      excerpt: "WeWork's enterprise solutions, flexible office platforms, and smart building technologies revolutionized commercial real estate.",
      category: "Enterprise Services",
      readTime: "9 min read",
      publishDate: "June 5, 2025",
      slug: "enterprise-office-real-estate-revolution-2025",
      featured: false
    },
    {
      id: 13,
      title: "Advanced Cyber Consultation: How June 2025's Strategic Security Advisory Transformed Enterprise Defense",
      excerpt: "Deloitte's Cyber Risk services, PwC's digital trust platform, and KPMG's cyber resilience framework revolutionized strategic cybersecurity.",
      category: "Cyber Strategy",
      readTime: "13 min read",
      publishDate: "June 24, 2025",
      slug: "advanced-cyber-consultation-strategic-june-2025",
      featured: false
    },
    {
      id: 14,
      title: "Quantum Computing Threat: How Post-Quantum Cryptography in July 2025 Saved Enterprise Security",
      excerpt: "NIST's post-quantum cryptography standards, IBM's quantum-safe solutions, and enterprise quantum threat preparation revolutionized cybersecurity.",
      category: "Quantum Security",
      readTime: "14 min read",
      publishDate: "July 22, 2025",
      slug: "quantum-computing-threat-post-quantum-cryptography-july-2025",
      featured: false
    },
    {
      id: 15,
      title: "Managed Security Services Evolution: How 24/7 SOC Operations in May 2025 Redefined Enterprise Protection",
      excerpt: "IBM's managed security services 3.0 and AI-powered SOC operations transformed enterprise security with 24/7 monitoring and response capabilities.",
      category: "Managed Security",
      readTime: "12 min read",
      publishDate: "May 20, 2025",
      slug: "managed-security-services-evolution-may-2025",
      featured: false
    },
    {
      id: 16,
      title: "Enterprise Website Presentation Revolution: How AI-Powered Digital Experiences in June 2025 Transformed Business",
      excerpt: "Adobe's AI web builder, Webflow's enterprise platform, and Squarespace's business intelligence tools revolutionized enterprise website development.",
      category: "Website Development",
      readTime: "10 min read",
      publishDate: "June 30, 2025",
      slug: "enterprise-website-presentation-revolution-june-2025",
      featured: false
    },
    {
      id: 17,
      title: "Enterprise Digital Transformation Trends: Strategic Technology Evolution Throughout 2025",
      excerpt: "Comprehensive analysis of digital transformation trends, AI automation, and cloud computing strategies that shaped enterprise technology in 2025.",
      category: "Digital Transformation",
      readTime: "15 min read",
      publishDate: "May 1, 2025",
      slug: "enterprise-digital-transformation-trends-2025",
      featured: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Tech Info Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Latest analysis on AI infrastructure, cybersecurity breaches, 5G networks, 
          and cutting-edge enterprise technology solutions from July 2025.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link 
          href="/blog"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          All Articles
        </Link>
        <Link 
          href="/blog/category/digital-transformation"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          Digital Transformation
        </Link>
        <Link 
          href="/blog/category/cloud-computing"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          Cloud Computing
        </Link>
        <Link 
          href="/blog/category/cybersecurity"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          Cybersecurity
        </Link>
        <Link 
          href="/blog/category/it-consulting"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          IT Consulting
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article 
            key={article.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
                <time dateTime={article.publishDate}>{article.publishDate}</time>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link 
                  href={`/blog/${article.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {article.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{article.readTime}</span>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-blue-100 mb-6">
          Get the latest technology insights and industry trends delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            required
          />
          <button 
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
