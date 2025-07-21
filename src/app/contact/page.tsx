import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tech Info - Get In Touch for Technology Insights",
  description: "Contact Tech Info for enterprise technology consultations, media inquiries, or to discuss AI infrastructure, cybersecurity, and digital transformation needs.",
  keywords: "contact tech info, technology consultation, enterprise technology contact, AI infrastructure consulting, cybersecurity consulting",
  openGraph: {
    title: 'Contact Tech Info - Get In Touch for Technology Insights',
    description: 'Contact Tech Info for enterprise technology consultations, media inquiries, or to discuss AI infrastructure, cybersecurity, and digital transformation needs.',
    url: 'https://acelync.com/contact/',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Tech Info
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch for enterprise technology insights, consultation requests, 
          or media inquiries. We're here to help with your technology analysis needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="consultation">Technology Consultation</option>
                <option value="media">Media Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="content">Content Collaboration</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your technology needs, questions, or how we can help..."
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                Subscribe to our technology insights newsletter for the latest analysis 
                on AI infrastructure, cybersecurity, and enterprise technology trends.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Information */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Main Office</h3>
                  <p className="text-gray-600">
                    Level 3, 29 Hurstmere Road<br />
                    Takapuna, Auckland 0622<br />
                    New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+6493021768" className="hover:text-blue-600 transition-colors">
                      +64 9 302 1768
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@techinfo.com" className="hover:text-blue-600 transition-colors">
                      info@techinfo.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:30 PM NZST<br />
                    Weekend: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">How We Can Help</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-blue-900">Technology Consultation</h3>
                  <p className="text-blue-800 text-sm">Expert guidance on AI infrastructure, cybersecurity strategy, and digital transformation planning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-blue-900">Enterprise Analysis</h3>
                  <p className="text-blue-800 text-sm">Custom research and analysis for specific technology implementations and business requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-blue-900">Strategic Planning</h3>
                  <p className="text-blue-800 text-sm">Technology roadmap development and strategic planning for enterprise technology initiatives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-blue-900">Media & Content</h3>
                  <p className="text-blue-800 text-sm">Expert commentary, thought leadership content, and media interviews on enterprise technology topics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Services */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need Professional Technology Services?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              For comprehensive enterprise technology solutions including network infrastructure, 
              cybersecurity services, and digital transformation implementation, 
              contact our professional services partners.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://aceit.asia/aceteam-networks/" 
                target="_blank" 
                rel="noopener"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Network Solutions →
              </a>
              <a 
                href="https://aceit.asia/aceteam-connect/" 
                target="_blank" 
                rel="noopener"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Security Services →
              </a>
              <a 
                href="https://aceit.asia/aceteam-digital/" 
                target="_blank" 
                rel="noopener"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Digital Solutions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
