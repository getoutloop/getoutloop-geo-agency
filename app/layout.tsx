import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://getoutloop.com'),
  title: {
    default: 'GetOutLoop | GEO-as-a-Service — AI Search Visibility Agency',
    template: '%s | GetOutLoop',
  },
  description: 'GetOutLoop is a GEO-as-a-Service agency helping businesses get cited in ChatGPT, Perplexity, Claude, Google AI Overviews, and Bing Copilot. Free AI visibility audit. Serving APAC and globally.',
  keywords: ['GEO agency', 'generative engine optimization', 'AI search visibility', 'AI citation optimization', 'SEO GEO audit', 'get cited in ChatGPT', 'Perplexity optimization', 'AI search audit', 'GEO consultant APAC', 'GetOutLoop'],
  authors: [{ name: 'Ronnel Besagre', url: 'https://getoutloop.com/about' }],
  creator: 'Ronnel Besagre',
  publisher: 'GetOutLoop',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getoutloop.com',
    siteName: 'GetOutLoop',
    title: 'GetOutLoop | GEO-as-a-Service — AI Search Visibility Agency',
    description: 'Get Cited by AI. Get Found by Everyone. GEO audits that reveal exactly why ChatGPT, Perplexity, and Gemini are ignoring your business.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GetOutLoop — GEO-as-a-Service Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@getoutloop',
    creator: '@getoutloop',
    title: 'GetOutLoop | GEO-as-a-Service — AI Search Visibility Agency',
    description: 'Get Cited by AI. Get Found by Everyone.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://getoutloop.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://getoutloop.com/#agency',
  name: 'GetOutLoop',
  url: 'https://getoutloop.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://getoutloop.com/getoutloop-logo.svg',
  },
  slogan: 'Get Cited by AI. Get Found by Everyone.',
  description: 'GetOutLoop is a GEO-as-a-Service agency helping businesses get cited in ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot.',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
    jobTitle: 'Founder & GEO Strategist',
    sameAs: 'https://www.linkedin.com/in/ronnelbesagredotcom',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johor Bahru',
    addressRegion: 'Johor',
    addressCountry: 'MY',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+60174980981',
    contactType: 'customer service',
    email: 'support@getoutloop.com',
    availableLanguage: 'English',
  },
  areaServed: [
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Philippines' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'United States' },
  ],
  knowsAbout: [
    'Generative Engine Optimization',
    'SEO',
    'AI search citation',
    'E-E-A-T',
    'JSON-LD schema markup',
    'llms.txt',
    'AI crawler access',
    'Content citability',
    'Brand authority',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'GEO Audit Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'GEO Free Audit',
        price: '0',
        priceCurrency: 'USD',
        url: 'https://getoutloop.com/audit?tier=free',
      },
      {
        '@type': 'Offer',
        name: 'GEO PRO',
        price: '120',
        priceCurrency: 'USD',
        url: 'https://getoutloop.com/pricing',
      },
      {
        '@type': 'Offer',
        name: 'GEO Complete',
        price: '480',
        priceCurrency: 'USD',
        url: 'https://getoutloop.com/pricing',
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/in/ronnelbesagredotcom',
    'https://ronnelbesagre.com',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://getoutloop.com/#website',
  name: 'GetOutLoop',
  url: 'https://getoutloop.com',
  description: 'GEO-as-a-Service agency for AI search visibility',
  publisher: { '@id': 'https://getoutloop.com/#agency' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
