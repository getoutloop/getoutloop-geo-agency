import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, FileText, CheckCircle, Star, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GEO Audit & Reputation Management Services | GetOutLoop',
  description: 'GetOutLoop offers two AI-era services: GEO Audit (get cited by AI) and Reputation Management (control what AI says about you). APAC & global.',
  alternates: { canonical: 'https://getoutloop.com/services' },
}

const geoAuditDimensions = [
  { num: '01', name: 'Technical Crawler Access', desc: 'robots.txt, AI crawler allowlist, crawl budget' },
  { num: '02', name: 'Structured Data (JSON-LD)', desc: 'Schema completeness — Organization, Article, FAQ, Person' },
  { num: '03', name: 'Content Citability', desc: 'Definition blocks, statistics, comparison tables' },
  { num: '04', name: 'E-E-A-T Signals', desc: 'Author credentials, expertise indicators, trust signals' },
  { num: '05', name: 'Brand Authority', desc: 'External citations, directory listings, entity recognition' },
  { num: '06', name: 'Platform Citations', desc: 'ChatGPT, Perplexity, Claude, Gemini, Copilot' },
  { num: '07', name: 'llms.txt Presence', desc: 'AI content navigation file — the sitemap for AI crawlers' },
  { num: '08', name: 'Competitor Gap', desc: 'What competitors do that you don't — citation gap analysis' },
]

const repDimensions = [
  { num: '01', name: 'Review Aggregation', desc: 'Google, Facebook, Yelp, Trustpilot, G2 consolidated' },
  { num: '02', name: 'Sentiment Analysis', desc: 'Emotional tone mapping across all public brand mentions' },
  { num: '03', name: 'Brand Mention Monitor', desc: 'What blogs, forums, and social media say about you' },
  { num: '04', name: 'AI Perception Audit', desc: 'What ChatGPT and Perplexity say about your brand verbatim' },
  { num: '05', name: 'Competitor Benchmarking', desc: 'Your reputation vs 3 direct competitors in your category' },
  { num: '06', name: 'Crisis Risk Detection', desc: 'Viral risks and reputational landmines — before they explode' },
  { num: '07', name: 'Review Response Audit', desc: 'Scoring your existing response strategy and tone quality' },
  { num: '08', name: 'Recovery Roadmap', desc: 'Prioritized action plan to improve your score fast' },
]

export default function ServicesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GetOutLoop Services',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GEO Audit & AI Visibility Strategy', url: 'https://getoutloop.com/services#geo-audit' },
      { '@type': 'ListItem', position: 2, name: 'AI Reputation Management', url: 'https://getoutloop.com/reputation' },
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
            Two Services. One Mission.
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            GetOutLoop helps businesses win in the AI search era — by making sure AI
            <strong className="text-white"> finds you</strong> and
            <strong className="text-white"> recommends you</strong>.
          </p>
        </div>
      </section>

      {/* Two Service Cards */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Service 1 — GEO Audit */}
            <div id="geo-audit" className="glass-card electric-border p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl shrink-0" style={{ background: 'rgba(0,168,255,0.1)' }}>
                  <BarChart3 size={26} className="text-electric" />
                </div>
                <div>
                  <div className="label-tag mb-1">Service 01</div>
                  <h2 className="font-syne font-bold text-xl text-white">GEO Audit &amp; AI Visibility</h2>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                A comprehensive 8-dimension audit of your website&apos;s AI search visibility. We identify every gap
                preventing ChatGPT, Perplexity, and Gemini from citing your business — and give you a scored,
                prioritized fix plan.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-6 flex-1">
                {['GEO score 0–100 across 8 dimensions', 'Covers ChatGPT, Perplexity, Claude, Gemini, Copilot', 'Technical + content + brand + schema analysis', 'Free / PRO / Complete tiers'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle size={13} className="text-neon mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold px-3 py-1.5 rounded-full font-inter mb-5 inline-block" style={{ background: 'rgba(0,168,255,0.1)', color: '#00A8FF', border: '1px solid rgba(0,168,255,0.2)' }}>
                $0 Free · $120/mo PRO · $480/mo Complete
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/audit" className="btn-primary justify-center">Start Free GEO Audit <ArrowRight size={15} /></Link>
                <Link href="/pricing" className="btn-secondary justify-center"><FileText size={14} /> View All GEO Tiers</Link>
              </div>
            </div>

            {/* Service 2 — Reputation */}
            <div className="glass-card p-8 flex flex-col" style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl shrink-0" style={{ background: 'rgba(168,85,247,0.1)' }}>
                  <Star size={26} style={{ color: '#A855F7' }} />
                </div>
                <div>
                  <div className="label-tag mb-1">Service 02</div>
                  <h2 className="font-syne font-bold text-xl text-white">AI Reputation Management</h2>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Audit what ChatGPT and Perplexity actually say about your brand — then fix it. We analyse your reviews,
                brand mentions, sentiment, and AI perception across 8 dimensions and deliver a recovery roadmap.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-6 flex-1">
                {['AI perception check (what ChatGPT says verbatim)', 'Reviews across Google, Facebook, Trustpilot, G2', 'Competitor reputation benchmarking', 'Crisis risk detection + response playbook'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle size={13} className="mt-0.5 shrink-0" style={{ color: '#A855F7' }} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold px-3 py-1.5 rounded-full font-inter mb-5 inline-block" style={{ background: 'rgba(168,85,247,0.1)', color: '#A855F7', border: '1px solid rgba(168,85,247,0.2)' }}>
                $0 Free · $150/mo PRO · $390/mo Complete
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/reputation" className="btn-primary justify-center" style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)' }}>
                  Explore Reputation Service <ArrowRight size={15} />
                </Link>
                <Link href="/audit?service=reputation&tier=free" className="btn-secondary justify-center">
                  <Shield size={14} /> Get Free Reputation Snapshot
                </Link>
              </div>
            </div>
          </div>

          {/* Bundle Teaser */}
          <div className="mt-6 glass-card p-6 text-center" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-muted text-sm">
              <strong className="text-white">💡 AI Visibility Suite</strong> — Get both GEO Audit + Reputation Management together.
              Ask about bundled pricing when you{' '}
              <Link href="/audit" className="text-electric hover:underline">submit your audit request</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* GEO Audit Dimensions */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-2 text-electric">GEO Audit</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">8 Dimensions of AI Visibility</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {geoAuditDimensions.map((d) => (
              <div key={d.num} className="glass-card p-5">
                <div className="text-3xl font-syne font-bold gradient-text mb-3">{d.num}</div>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation Dimensions */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-2" style={{ color: '#A855F7' }}>Reputation Management</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">8 Dimensions of AI Reputation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {repDimensions.map((d) => (
              <div key={d.num} className="glass-card p-5">
                <div className="text-3xl font-syne font-bold mb-3" style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{d.num}</div>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">Not sure where to start?</h2>
          <p className="text-muted mb-8">Both free audits are no-commitment and delivered within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="btn-primary text-base px-8 py-3.5">Get Free GEO Audit <ArrowRight size={18} /></Link>
            <Link href="/audit?service=reputation&tier=free" className="btn-secondary text-base px-8 py-3.5">Free Reputation Snapshot</Link>
          </div>
        </div>
      </section>
    </>
  )
}
