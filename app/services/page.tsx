import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GEO Audit & SEO Services | GetOutLoop',
  description: 'GetOutLoop delivers one focused service: GEO-as-a-Service. Full AI visibility audits across 8 dimensions with 3 pricing tiers — Free, PRO, and Complete.',
  alternates: { canonical: 'https://getoutloop.com/services' },
}

const auditDimensions = [
  { num: '01', name: 'Technical Crawler Access', desc: 'robots.txt, AI crawler allowlist, crawl budget optimization' },
  { num: '02', name: 'Structured Data (JSON-LD)', desc: 'Schema completeness — Organization, Article, FAQ, Service, Person' },
  { num: '03', name: 'Content Citability', desc: 'Definition blocks, statistics, comparison tables, answer-format content' },
  { num: '04', name: 'E-E-A-T Signals', desc: 'Author credentials, expertise indicators, trust and authority signals' },
  { num: '05', name: 'Brand Authority', desc: 'External citations, directory listings, entity recognition across the web' },
  { num: '06', name: 'Platform Citations', desc: 'ChatGPT, Perplexity, Claude, Gemini, and Copilot citation analysis' },
  { num: '07', name: 'llms.txt Presence', desc: 'AI content navigation file — the sitemap.xml for AI crawlers' },
  { num: '08', name: 'Competitor Gap', desc: 'What competitors are doing that you are not — citation gap analysis' },
]

export default function ServicesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GetOutLoop GEO Audit Services',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GEO Free Audit', url: 'https://getoutloop.com/audit?tier=free' },
      { '@type': 'ListItem', position: 2, name: 'GEO PRO', url: 'https://getoutloop.com/pricing' },
      { '@type': 'ListItem', position: 3, name: 'GEO Complete', url: 'https://getoutloop.com/pricing' },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-3xl mx-auto">
          <div className="label-tag mb-3">What We Do</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            One Service. Done Right.
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            GetOutLoop does one thing and does it exceptionally well: <strong className="text-white">GEO-as-a-Service</strong> —
            comprehensive AI search visibility audits that tell you exactly why AI platforms are ignoring your business and how to fix it.
          </p>
        </div>
      </section>

      {/* Main Service */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="glass-card electric-border p-8 md:p-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="p-3 rounded-xl" style={{ background: 'rgba(0,168,255,0.1)' }}>
                <BarChart3 size={28} className="text-electric" />
              </div>
              <div>
                <div className="label-tag mb-1">Primary Service</div>
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">GEO Audit & AI Visibility Strategy</h2>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-8 text-base">
              A comprehensive 8-dimension audit of your website&apos;s AI search visibility. We examine every signal that
              AI platforms use to decide whether to cite your business — from technical crawler access to content citability
              to brand authority across external sources. You receive a scored report with prioritized fixes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Scored across 8 GEO dimensions (0–100)',
                'Covers ChatGPT, Perplexity, Claude, Gemini, Copilot',
                'Technical + content + brand analysis',
                'Priority action matrix by impact',
                'Available as Free, PRO, or Complete tier',
                'Monthly re-audit for ongoing tracking',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle size={15} className="text-neon mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" className="btn-primary">Start Free Audit <ArrowRight size={16} /></Link>
              <Link href="/pricing" className="btn-secondary">View All Tiers</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Audit Dimensions */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Audit Methodology</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">8 Dimensions We Examine</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {auditDimensions.map((d) => (
              <div key={d.num} className="glass-card p-5">
                <div className="text-3xl font-syne font-bold gradient-text mb-3">{d.num}</div>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Overview */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="label-tag mb-3">Three Tiers</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Choose Your Depth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'GEO Free', price: '$0', desc: 'Score + top 5 critical issues by email. No PDF.', href: '/audit?tier=free', border: 'rgba(255,255,255,0.08)' },
              { name: 'GEO PRO', price: '$120/mo', desc: 'Full 8-section PDF report + monthly re-audit.', href: '/audit?tier=pro', border: 'rgba(0,168,255,0.3)' },
              { name: 'GEO Complete', price: '$480/mo', desc: 'PRO + guided fix code + strategy call.', href: '/audit?tier=complete', border: 'rgba(0,255,157,0.3)' },
            ].map((t) => (
              <div key={t.name} className="glass-card p-6" style={{ border: `1px solid ${t.border}` }}>
                <div className="font-syne font-bold text-white mb-1">{t.name}</div>
                <div className="gradient-text font-syne font-bold text-xl mb-3">{t.price}</div>
                <p className="text-muted text-sm mb-4">{t.desc}</p>
                <Link href={t.href} className="text-electric text-sm hover:underline font-inter flex items-center gap-1">
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/pricing" className="btn-secondary">
              <FileText size={16} /> Full Pricing & Feature Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">Not sure where to start?</h2>
          <p className="text-muted mb-8">The free audit tells you exactly what to focus on — no commitment required.</p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">Get Free GEO Audit <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
