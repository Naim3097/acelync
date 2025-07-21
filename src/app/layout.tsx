import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techtodayglobal.com'),
  title: "Tech Today Global - Enterprise Technology Insights & AI Infrastructure",
  description: "Latest insights on AI infrastructure, cybersecurity breaches, 5G networks, and enterprise technology solutions. Expert analysis on digital transformation.",
  keywords: "AI infrastructure, cybersecurity, 5G networks, enterprise technology, digital transformation, NVIDIA Blackwell, GPT-5, quantum computing",
  authors: [{ name: "Tech Today Global Editorial Team" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techtodayglobal.com',
    siteName: 'Tech Today Global',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Today Global - Enterprise Technology Insights & AI Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Today Global - Technology Insights & Digital Solutions',
    description: 'Expert insights on technology trends, IT solutions, and digital transformation strategies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Today Global",
  "url": "https://techtodayglobal.com",
  "logo": "https://techtodayglobal.com/logo.png",
  "description": "Expert insights on technology trends, IT solutions, and digital transformation strategies.",
  "sameAs": [
    "https://linkedin.com/company/techtodayglobal",
    "https://twitter.com/techtodayglobal"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://techtodayglobal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
