import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogArticleProps {
  title: string;
  publishDate: string;
  readTime: string;
  category: string;
  children: ReactNode;
}

export default function BlogArticle({ 
  title, 
  publishDate, 
  readTime, 
  category, 
  children 
}: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                Tech Today Global
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                Blog
              </Link>
              <Link href="https://aceit.asia/contacts/" target="_blank" rel="noopener" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 blog-article">
        {/* Article Header */}
        <header className="article-header">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {category}
          </div>
          <h1>{title}</h1>
          <div className="article-meta">
            <span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {publishDate}
            </span>
            <span>•</span>
            <span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Technology Infrastructure?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get expert consultation and cutting-edge solutions tailored to your business needs. 
                Our team of specialists is ready to help you implement the latest technology trends.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="https://aceit.asia/contacts/" 
                  target="_blank" 
                  rel="noopener"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Expert Consultation
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="https://aceit.asia/" 
                  target="_blank" 
                  rel="noopener"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Related Articles Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
            <div className="text-sm text-gray-500">
              Share this article to help others stay informed about technology trends
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
