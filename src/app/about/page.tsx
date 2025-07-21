import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tech Info - Enterprise Technology Insights & Analysis",
  description: "Learn about Tech Info's mission to provide cutting-edge analysis on AI infrastructure, cybersecurity, 5G networks, and enterprise technology solutions.",
  keywords: "about tech info, technology analysis, AI infrastructure, cybersecurity insights, enterprise technology, digital transformation",
  openGraph: {
    title: 'About Tech Info - Enterprise Technology Insights & Analysis',
    description: 'Learn about Tech Info\'s mission to provide cutting-edge analysis on AI infrastructure, cybersecurity, 5G networks, and enterprise technology solutions.',
    url: 'https://techtodayglobal.com/about/',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Tech Info
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted source for enterprise technology insights and cutting-edge analysis
        </p>
      </div>

      {/* Mission Section */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tech Info is dedicated to providing comprehensive, expert analysis of the most significant developments 
            in enterprise technology. We focus on the real-world impact of technological breakthroughs, 
            helping businesses understand and prepare for the rapid evolution of AI infrastructure, 
            cybersecurity threats, network solutions, and digital transformation.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Cover</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Infrastructure</h3>
            <p className="text-gray-600">
              In-depth analysis of breakthrough technologies like NVIDIA's Blackwell Ultra GPUs, 
              OpenAI's GPT-5 deployment requirements, and enterprise AI infrastructure strategies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity Evolution</h3>
            <p className="text-gray-600">
              Comprehensive coverage of major security breaches, ransomware evolution, 
              enterprise security strategies, and emerging threats like quantum computing risks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Solutions</h3>
            <p className="text-gray-600">
              Expert insights on 5G enterprise deployments, VoIP evolution, edge computing, 
              and the infrastructure requirements of modern distributed systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation</h3>
            <p className="text-gray-600">
              Analysis of enterprise digital strategies, office real estate evolution, 
              website presentation innovations, and business transformation trends.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based Analysis</h3>
              <p className="text-gray-600 text-sm">
                Every article is backed by real-world data, industry reports, and concrete examples 
                from leading technology companies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Coverage</h3>
              <p className="text-gray-600 text-sm">
                We focus on the most recent developments, with particular emphasis on 
                breakthrough events from 2025 that are reshaping the industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Focus</h3>
              <p className="text-gray-600 text-sm">
                All content is specifically tailored for enterprise decision-makers, 
                IT leaders, and technology professionals.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Tech Info Matters</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          The technology landscape is evolving at an unprecedented pace. In July 2025 alone, we witnessed 
          NVIDIA's revolutionary Blackwell Ultra launch, major cybersecurity breaches that changed enterprise 
          security forever, and quantum computing threats that forced immediate cryptography updates.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Tech Info exists to help enterprise leaders navigate this complex landscape. We don't just report 
          on technology news – we analyze its implications, explore its impact on business operations, 
          and provide actionable insights for strategic planning.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Content Standards</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comprehensive research using primary sources and industry reports
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Real-world examples from leading enterprises and technology companies
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Strategic insights for business and technology decision-making
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Clear, professional writing accessible to technical and business audiences
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          Technology moves fast, and so do we. Our editorial team continuously monitors the latest 
          developments in AI infrastructure, cybersecurity, networking, and digital transformation 
          to bring you timely, relevant analysis.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our Technology Community
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Get exclusive insights, early access to analysis, and expert commentary 
          on the technology trends shaping enterprise business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Read Latest Articles
          </Link>
          <Link 
            href="/contact"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
