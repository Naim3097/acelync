import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Categories - Browse by Topic | Tech Today Global",
  description: "Explore our comprehensive technology categories including AI Infrastructure, Cybersecurity, Network Solutions, and Digital Transformation. Find expert insights by topic.",
  keywords: "technology categories, AI infrastructure, cybersecurity, network solutions, digital transformation, enterprise technology topics",
  openGraph: {
    title: 'Technology Categories - Browse by Topic | Tech Today Global',
    description: 'Explore our comprehensive technology categories including AI Infrastructure, Cybersecurity, Network Solutions, and Digital Transformation.',
    url: 'https://techtodayglobal.com/categories/',
    type: 'website',
  },
};

export default function CategoriesPage() {
  const categories = [
    {
      name: "AI Infrastructure",
      description: "Latest developments in artificial intelligence infrastructure, from NVIDIA's breakthrough GPUs to enterprise AI deployment strategies.",
      count: 3,
      slug: "ai-infrastructure",
      articles: [
        { title: "AI Infrastructure Revolution: NVIDIA's July 2025 Breakthrough", slug: "ai-infrastructure-revolution-july-2025" },
        { title: "Behavioral Analytics AI Breakthrough April 2025", slug: "behavioral-analytics-ai-breakthrough-april-2025" },
        { title: "Next-Generation Firewall AI Revolution May 2025", slug: "next-generation-firewall-ai-revolution-may-2025" }
      ]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive analysis of cybersecurity threats, breaches, and enterprise security solutions including ransomware evolution and defense strategies.",
      count: 6,
      slug: "cybersecurity",
      articles: [
        { title: "Cybersecurity Mega Breaches: July 2025 Changed Enterprise Security", slug: "cybersecurity-mega-breaches-july-2025" },
        { title: "Endpoint Security Crisis: Ransomware Evolution June 2025", slug: "endpoint-security-crisis-ransomware-june-2025" },
        { title: "Advanced Cyber Consultation Strategic June 2025", slug: "advanced-cyber-consultation-strategic-june-2025" },
        { title: "Enterprise Security Subscriptions SaaS May 2025", slug: "enterprise-security-subscriptions-saas-may-2025" },
        { title: "Managed Security Services Evolution May 2025", slug: "managed-security-services-evolution-may-2025" },
        { title: "Quantum Computing Threat: Post-Quantum Cryptography July 2025", slug: "quantum-computing-threat-post-quantum-cryptography-july-2025" }
      ]
    },
    {
      name: "Network Solutions",
      description: "Enterprise networking innovations including 5G deployments, VoIP evolution, and edge computing infrastructure transformations.",
      count: 4,
      slug: "network-solutions",
      articles: [
        { title: "5G Enterprise Networks: June 2025 Deployments Transform Business", slug: "5g-enterprise-networks-june-2025" },
        { title: "VoIP Evolution: Microsoft Teams and Zoom May 2025 Updates", slug: "voip-evolution-microsoft-zoom-may-2025" },
        { title: "Edge Computing IoT Revolution April 2025", slug: "edge-computing-iot-revolution-april-2025" },
        { title: "Cloud Computing Revolution: June 2025's Multi-Cloud Breakthrough", slug: "cloud-computing-revolution-june-2025" }
      ]
    },
    {
      name: "Digital Transformation",
      description: "Enterprise digital transformation strategies, office real estate evolution, and website presentation innovations.",
      count: 3,
      slug: "digital-transformation",
      articles: [
        { title: "Digital Transformation Acceleration: May 2025's Enterprise Evolution", slug: "digital-transformation-acceleration-may-2025" },
        { title: "Enterprise Digital Transformation Trends 2025", slug: "enterprise-digital-transformation-trends-2025" },
        { title: "Enterprise Office Real Estate Revolution 2025", slug: "enterprise-office-real-estate-revolution-2025" },
        { title: "Enterprise Website Presentation Revolution June 2025", slug: "enterprise-website-presentation-revolution-june-2025" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Technology Categories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive coverage of enterprise technology topics. 
          From AI infrastructure breakthroughs to cybersecurity analysis, 
          find expert insights organized by domain.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count} articles
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>

              {/* Recent Articles */}
              <div className="space-y-3 mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Recent Articles
                </h3>
                {category.articles.slice(0, 3).map((article) => (
                  <Link 
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm leading-relaxed"
                  >
                    {article.title}
                  </Link>
                ))}
              </div>

              <Link 
                href={`/blog?category=${category.slug}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View All {category.name} Articles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Technology Coverage
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive analysis across key enterprise technology domains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
            <div className="text-gray-600">Current Year Focus</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Weekly</div>
            <div className="text-gray-600">Update Schedule</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Technology Trends
        </h2>
        <p className="text-xl text-blue-100 mb-6">
          Get the latest insights delivered to your inbox. No spam, just expert analysis.
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
