import Link from 'next/link';

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      title: "AI Infrastructure Revolution: NVIDIA's July 2025 Breakthrough Changes Everything",
      excerpt: "NVIDIA's Blackwell Ultra GPUs and OpenAI's GPT-5 launch are reshaping enterprise AI infrastructure. Learn how to prepare your network for AI workloads.",
      category: "AI Infrastructure",
      readTime: "11 min read",
      slug: "ai-infrastructure-revolution-july-2025"
    },
    {
      id: 2,
      title: "Cybersecurity Mega Breaches: How July 2025 Changed Enterprise Security Forever",
      excerpt: "Major security incidents in July 2025 forced enterprises to completely rethink their cybersecurity strategies and infrastructure investments.",
      category: "Cybersecurity",
      readTime: "12 min read",
      slug: "cybersecurity-mega-breaches-july-2025"
    },
    {
      id: 3,
      title: "5G Enterprise Networks: How June 2025 Deployments Transform Business Operations",
      excerpt: "Private 5G networks are revolutionizing enterprise connectivity with ultra-low latency and massive IoT device support capabilities.",
      category: "Network Infrastructure",
      readTime: "9 min read",
      slug: "5g-enterprise-networks-june-2025"
    },
    {
      id: 4,
      title: "Cloud Computing Revolution: June 2025's Multi-Cloud Breakthrough",
      excerpt: "New multi-cloud orchestration platforms are enabling seamless workload distribution across AWS, Azure, and Google Cloud environments.",
      category: "Cloud Computing",
      readTime: "10 min read",
      slug: "cloud-computing-revolution-june-2025"
    },
    {
      id: 5,
      title: "Digital Transformation Acceleration: May 2025's Enterprise Evolution",
      excerpt: "Enterprises are achieving unprecedented digital transformation speeds through AI-powered automation and cloud-native architectures.",
      category: "Digital Transformation",
      readTime: "8 min read",
      slug: "digital-transformation-acceleration-may-2025"
    },
    {
      id: 6,
      title: "Quantum Computing Threat: Post-Quantum Cryptography Revolution July 2025",
      excerpt: "IBM's quantum breakthrough forces immediate enterprise adoption of post-quantum cryptography to protect sensitive data.",
      category: "Quantum Security",
      readTime: "13 min read",
      slug: "quantum-computing-threat-post-quantum-cryptography-july-2025"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Technology &<br />
              <span className="text-blue-200">Digital Innovation Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert analysis on AI infrastructure, cybersecurity breaches, 
              5G networks, and cutting-edge enterprise technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Articles
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Technology Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover breaking developments in AI infrastructure, cybersecurity, 
              5G networks, and enterprise digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
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
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore specific domains of enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI Infrastructure", count: "3 articles", slug: "ai-infrastructure" },
              { name: "Cybersecurity", count: "6 articles", slug: "cybersecurity" },
              { name: "Network Solutions", count: "4 articles", slug: "network-solutions" },
              { name: "Digital Transformation", count: "3 articles", slug: "digital-transformation" }
            ].map((category) => (
              <Link 
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Technology Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest analysis on AI infrastructure, cybersecurity threats, 
            5G networks, and enterprise technology innovations delivered to your inbox.
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
      </section>
    </>
  );
}
