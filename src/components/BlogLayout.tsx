import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author?: string;
  structuredData: Record<string, unknown>;
}

export default function BlogLayout({
  children,
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  author = "Tech Today Global Editorial Team",
  structuredData
}: BlogLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2">→</span>
              <span className="text-blue-100">{category}</span>
            </nav>
            
            {/* Category Badge */}
            <div className="inline-block bg-blue-600 bg-opacity-50 text-blue-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              {excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg prose-blue max-w-none">
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles & CTA Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Ahead of Technology Trends</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Get expert insights on digital transformation, cybersecurity, and enterprise technology delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
