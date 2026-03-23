import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GEO Audit & SEO Strategy Service | GetOutLoop',
  description: 'GetOutLoop\'s flagship GEO audit service — 8-dimension analysis covering AI crawler access, schema markup, content citability, E-E-A-T, brand authority, and platform citations. Three tiers available.',
  alternates: { canonical: 'https://getoutloop.com/services/seo-geo-consulting' },
}

const deliverablesByTier = [
  {
    tier: 'GEO Free',
    price: '$0',
    border: 'rgba(255,255,255,0.08)',
    items: ['GEO score (0–100)', 'Top 5 critical issues with business impact', 'Email delivery in 24 hrs', 'No PDF, no fix guides'],
  },
  {
    tier: 'GEO PRO',
    price: '$120/mo',
    border: 'rgba(0,168,255,0.3)',
    items: ['Full 8-section PDF report', 'Complete issue list with severity (Critical/High/Medium/Low)', 'Priority action matrix', 'Monthly re-audit', 'What\'s missing (not how to fix)'],
    featured: true,
  },
  {
    tier: 'GEO Complete',
    price: '$480/mo',
    border: 'rgba(0,255,157,0.3)',
    items: ['Everything in GEO PRO', 'Guided fix code (copy-paste ready)', 'Schema implementation templates', 'Monthly monitoring + re-audit', '1 strategy call/month'],
  },
]

const faqs = [
  {
    q: 'How is GEO different from SEO?',
    a: 'SEO targets Google\'s blue-link ranking algorithm — backlinks, keywords, on-page factors. GEO targets AI citation systems — the models that decide what to include in ChatGPT answers, Perplexity responses, and Google AI Overviews. Good SEO does not guarantee AI citations. You need both.',
  },
  {
    q: 'How long before I see results?',
    a: 'Technical improvements (robots.txt, schema, llms.txt) take effect within 2–4 weeks. Consistent AI citations from Perplexity typically appear within 4–8 weeks. ChatGPT and Claude citations depend on their training cycles and can take 3–9 months.',
  },
  {
    q: 'Can I do GEO myself after the audit?',
    a: 'Yes. GEO Free and GEO PRO give you the roadmap — your dev team can implement the fixes. GEO Complete provides the actual fix code so you can copy-paste directly without needing to interpret the recommendations.',
  },
  {
    q: 'Do you audit competitors as part of the service?',
    a: 'Yes — GEO PRO and Complete include a competitor citation gap analysis (Dimension 8). We identify which competitors are being cited by AI platforms in your niche and what signals they have that you are missing.',
  },
]

export default function SeoGeoConsultingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GEO Audit & AI Visibility Strategy',
    serviceType: 'Generative Engine Optimization',
    description: 'Comprehensive 8-dimension GEO audit analyzing AI crawler access, structured data, content citability, E-E-A-T, brand authority, platform citations, llms.txt, and competitor gap.',
    provider: { '@id': 'https://getoutloop.com/#agency' },
    areaServed: [{ '@type': 'Country', name: 'Malaysia' }, { '@type': 'Country', name: 'Singapore' }, { '@type': 'Country', name: 'Philippines' }],
    url: 'https://getoutloop.com/services/seo-geo-consulting',
    offers: [
      { '@type': 'Offer', name: 'GEO Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'GEO PRO', price: '120', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'GEO Complete', price: '480', priceCurrency: 'USD' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://getoutloop.com/services' },
      { '@type': 'ListItem', position: 3, name: 'GEO Audit & SEO Strategy', item: 'https://getoutloop.com/services/seo-geo-consulting' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="pt-20" style={{ background: '#0D1429', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-container py-3">
          <nav className="text-xs text-muted font-inter flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">GEO Audit & SEO Strategy</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-grid-pattern" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="label-tag mb-3">Primary Service · Most Requested</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            GEO Audit & AI Visibility Strategy
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
            A comprehensive 8-dimension audit of your website&apos;s AI search visibility. Covers every signal that
            ChatGPT, Perplexity, Claude, Gemini, and Copilot use to decide whether to cite your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/audit" className="btn-primary">Start Free Audit <ArrowRight size={16} /></Link>
            <Link href="/pricing" className="btn-secondary">Compare All Plans</Link>
          </div>
        </div>
      </section>

      {/* What is GEO */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="glass-card electric-border p-7 md:p-9">
            <div className="label-tag mb-3">Service Definition</div>
            <h2 className="font-syne font-bold text-xl text-white mb-4">What is a GEO Audit?</h2>
            <p className="text-muted leading-relaxed">
              A GEO (Generative Engine Optimization) audit systematically examines 8 dimensions of your website&apos;s
              AI search visibility. Unlike a traditional SEO audit that focuses on Google rankings, a GEO audit determines
              how well AI platforms can discover, read, interpret, and cite your business in their generated responses.
              The result is a scored report (0–100) with a prioritized list of issues ranked by their impact on your AI citation frequency.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables by Tier */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">What You Get</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Deliverables by Tier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverablesByTier.map((t) => (
              <div key={t.tier} className={`glass-card p-7 ${t.featured ? 'relative' : ''}`} style={{ border: `1px solid ${t.border}` }}>
                {t.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full font-inter"
                      style={{ background: 'linear-gradient(135deg,#00A8FF,#00FF9D)', color: '#0A0E27' }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="font-syne font-bold text-white mb-1 mt-2">{t.tier}</div>
                <div className="gradient-text font-syne font-bold text-xl mb-5">{t.price}</div>
                <ul className="space-y-2.5">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle size={14} className="text-neon mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="label-tag mb-3">FAQ</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-syne font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Audit Your AI Visibility?
          </h2>
          <p className="text-muted mb-8">Start free. No credit card. Delivered in 24 hours.</p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">Get Free GEO Audit <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
