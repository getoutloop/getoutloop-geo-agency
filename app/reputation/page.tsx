import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, AlertTriangle, TrendingUp, MessageSquare, Shield, BarChart3, Globe, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Reputation Management | GetOutLoop',
  description: 'Find out what ChatGPT, Perplexity, and Google AI say about your brand — and fix it. GetOutLoop\'s Reputation Management audits your reviews, brand mentions, sentiment, and AI perception.',
  alternates: { canonical: 'https://getoutloop.com/reputation' },
}

const auditDimensions = [
  { num: '01', name: 'Review Aggregation', desc: 'Google, Facebook, Yelp, Trustpilot, G2 — consolidated reputation score across all platforms' },
  { num: '02', name: 'Sentiment Analysis', desc: 'Emotional tone mapping — positive, negative, neutral — across every public mention of your brand' },
  { num: '03', name: 'Brand Mention Monitor', desc: 'What blogs, forums, news sites, and social media say about your business right now' },
  { num: '04', name: 'AI Perception Audit', desc: 'What ChatGPT, Perplexity, and Gemini say when asked about your brand — verbatim' },
  { num: '05', name: 'Competitor Benchmarking', desc: 'How your reputation score compares to 3 direct competitors in your category' },
  { num: '06', name: 'Crisis Risk Detection', desc: 'Identify unresolved negative content, viral risks, and reputational landmines before they explode' },
  { num: '07', name: 'Review Response Audit', desc: 'Are you responding to reviews? Is the tone right? We score your response strategy and quality' },
  { num: '08', name: 'Recovery Roadmap', desc: 'Prioritized action plan — what to fix first, what to monitor, and how to build social proof fast' },
]

const tiers = [
  {
    name: 'Reputation Snapshot',
    price: '$0',
    period: '',
    tagline: 'Know your reputation score before you commit',
    badge: 'FREE',
    badgeStyle: { background: 'rgba(255,255,255,0.10)', color: '#B0B8C8' },
    borderColor: 'rgba(255,255,255,0.08)',
    includes: [
      'Overall reputation score (0–100)',
      'Top 3 critical issues identified',
      'AI perception check (what ChatGPT says)',
      'Email delivery within 24 hrs',
    ],
    excludes: ['No PDF report', 'No competitor data'],
    cta: 'Get Free Snapshot',
    href: '/audit?service=reputation&tier=free',
    primary: false,
  },
  {
    name: 'Reputation PRO',
    price: '$150',
    period: '/mo',
    tagline: 'Full audit + monthly monitoring + response templates',
    badge: 'MOST POPULAR',
    badgeStyle: { background: 'linear-gradient(135deg,#00A8FF,#00FF9D)', color: '#0A0E27' },
    borderColor: 'rgba(0,168,255,0.35)',
    includes: [
      'Full 8-dimension PDF audit report',
      'Monthly reputation re-audit',
      'Review response templates (10/mo)',
      'Competitor snapshot (1 competitor)',
      'Crisis risk flag alerts',
    ],
    excludes: [],
    cta: 'Start Reputation PRO',
    href: '/audit?service=reputation&tier=pro',
    primary: true,
  },
  {
    name: 'Reputation Complete',
    price: '$390',
    period: '/mo',
    tagline: 'PRO + crisis playbook + deep competitor analysis',
    badge: 'DONE-FOR-YOU',
    badgeStyle: { background: 'rgba(0,255,157,0.15)', color: '#00FF9D' },
    borderColor: 'rgba(0,255,157,0.3)',
    includes: [
      'Everything in PRO',
      'Crisis response playbook',
      'Competitor deep-dive (3 competitors)',
      'Negative content suppression strategy',
      '1 strategy call/month',
    ],
    excludes: [],
    cta: 'Apply for Complete',
    href: '/audit?service=reputation&tier=complete',
    primary: false,
  },
]

const faqs = [
  {
    q: 'What does an AI Reputation Audit actually check?',
    a: 'We check your reviews across Google, Facebook, Yelp, Trustpilot, and G2; what blogs and news sites say about your brand; your sentiment score; and critically — what AI platforms like ChatGPT and Perplexity actually say when someone asks about your business by name.',
  },
  {
    q: 'How is reputation management different from GEO?',
    a: 'GEO (Generative Engine Optimization) is about getting AI to find and cite your business proactively. Reputation Management is about controlling what AI says about you when it does. You need both: GEO makes you visible, Reputation makes you look good.',
  },
  {
    q: 'What if ChatGPT says something false about my business?',
    a: 'This is more common than people think. Our AI Perception Audit identifies exactly what AI platforms say about your brand. The Recovery Roadmap then tells you how to correct the record — through content, citations, and brand signal updates.',
  },
  {
    q: 'How quickly can I improve my reputation score?',
    a: 'Quick wins (responding to unaddressed reviews, fixing NAP inconsistencies) can show impact within 2–4 weeks. Deeper improvements (AI perception, brand authority) take 60–90 days of consistent effort.',
  },
  {
    q: 'Do you handle crisis management if something goes viral?',
    a: 'Reputation Complete includes a Crisis Response Playbook — a pre-built response framework for the most common reputation crises. For active crisis management, contact us directly at support@getoutloop.com.',
  },
]

export default function ReputationPage() {
  const reputationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://getoutloop.com/reputation#service',
    name: 'AI Reputation Management',
    provider: { '@id': 'https://getoutloop.com/#agency' },
    description: 'Comprehensive AI reputation audit covering reviews, brand mentions, sentiment analysis, competitor benchmarking, and AI perception across ChatGPT, Perplexity, and Gemini.',
    serviceType: 'Reputation Management',
    areaServed: 'Worldwide',
    url: 'https://getoutloop.com/reputation',
    offers: [
      { '@type': 'Offer', name: 'Reputation Snapshot', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Reputation PRO', price: '150', priceCurrency: 'USD', billingIncrement: 'monthly' },
      { '@type': 'Offer', name: 'Reputation Complete', price: '390', priceCurrency: 'USD', billingIncrement: 'monthly' },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reputationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 rounded-full" style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: '#A855F7' }} />
            <span className="label-tag">Service 02 · Reputation Management</span>
          </div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.1]">
            Control What AI Says<br />
            <span style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              About Your Brand.
            </span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            When someone asks ChatGPT about your business, what does it say? GetOutLoop audits your reviews,
            brand mentions, and AI perception — then builds your recovery roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit?service=reputation&tier=free" className="btn-primary text-base px-8 py-3.5">
              Get Free Reputation Snapshot <ArrowRight size={18} />
            </Link>
            <Link href="#pricing" className="btn-secondary text-base px-8 py-3.5">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#060917', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '8', label: 'Reputation Dimensions', suffix: '' },
              { value: '5', label: 'Review Platforms Checked', suffix: '+' },
              { value: '3', label: 'AI Platforms Audited', suffix: '' },
              { value: '24', label: 'Hour Free Delivery', suffix: 'hr' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-syne font-bold text-4xl mb-1" style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.value}{s.suffix}
                </div>
                <div className="text-muted text-sm font-inter">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="label-tag mb-3">The Reputation Problem</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white max-w-3xl mx-auto">
              AI is forming opinions about your brand. Are you in control?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-7" style={{ border: '1px solid rgba(255,80,80,0.2)' }}>
              <div className="text-sm font-semibold mb-4" style={{ color: '#FF5050' }}>❌ Unmanaged Reputation</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>ChatGPT repeats outdated or negative reviews</li>
                <li>Perplexity surfaces a 1-star complaint as top result</li>
                <li>Unanswered negative reviews signal you don&apos;t care</li>
                <li>Competitors&apos; better reviews push you down in AI answers</li>
                <li>Brand crisis spreads before you even know it started</li>
              </ul>
            </div>
            <div className="glass-card p-7" style={{ border: '1px solid rgba(168,85,247,0.35)' }}>
              <div className="text-sm font-semibold mb-4" style={{ color: '#A855F7' }}>✓ With GetOutLoop Reputation</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>Know exactly what AI says about your brand today</li>
                <li>Respond to every review with the right tone and language</li>
                <li>Proactively build 5-star signals before a crisis hits</li>
                <li>Outrank competitors in AI-driven brand queries</li>
                <li>Crisis playbook ready when you need it most</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Block */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10" style={{ border: '1px solid rgba(168,85,247,0.25)' }}>
            <div className="label-tag mb-3">Why It Matters in the AI Era</div>
            <h2 className="font-syne font-bold text-2xl text-white mb-4">
              Reputation Management in the Age of AI Search
            </h2>
            <p className="text-muted leading-relaxed text-base">
              <strong className="text-white">AI reputation management</strong> is the practice of auditing, monitoring, and
              improving how your business appears across review platforms, social media, news coverage, and — critically —
              in AI-generated responses. When a user asks ChatGPT &ldquo;Is [your business] trustworthy?&rdquo; or
              Perplexity &ldquo;What do customers say about [your brand]?&rdquo;, the AI pulls from your review history,
              brand mentions, and publicly indexed sentiment. A poor reputation score doesn&apos;t just lose you customers
              — it trains AI to recommend your competitors instead.
            </p>
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
                <div className="text-3xl font-syne font-bold mb-3" style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{d.num}</div>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="label-tag mb-3">Transparent Pricing</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Reputation Plans That Fit Your Risk Level
            </h2>
            <p className="text-muted max-w-xl mx-auto">Start with a free snapshot. Upgrade when the gaps surprise you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass-card p-7 flex flex-col ${tier.primary ? 'relative' : ''}`}
                style={{ border: `1px solid ${tier.borderColor}` }}
              >
                {tier.primary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full font-inter" style={tier.badgeStyle}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                {!tier.primary && (
                  <div className="mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full font-inter" style={tier.badgeStyle}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                {tier.primary && <div className="mb-4 h-5" />}

                <div className="mb-2">
                  <span className="font-syne font-bold text-3xl text-white">{tier.price}</span>
                  {tier.period && <span className="text-muted text-sm">{tier.period}</span>}
                </div>
                <div className="font-syne font-semibold text-white text-lg mb-1">{tier.name}</div>
                <p className="text-muted text-sm mb-6">{tier.tagline}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#A855F7' }} />
                      {item}
                    </li>
                  ))}
                  {tier.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted/40">
                      <span className="mt-0.5 shrink-0 text-xs">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={tier.primary ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                  style={tier.primary ? { background: 'linear-gradient(135deg,#A855F7,#00A8FF)' } : {}}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO + Reputation Bundle Callout */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10 text-center" style={{ border: '1px solid rgba(0,168,255,0.2)' }}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold font-inter"
              style={{ background: 'linear-gradient(135deg,rgba(0,168,255,0.15),rgba(168,85,247,0.15))', border: '1px solid rgba(0,168,255,0.2)', color: '#00A8FF' }}>
              💡 Pro Tip — Bundle & Save
            </div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">
              GEO + Reputation = AI Visibility Suite
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              GEO makes sure AI <em>finds</em> your business. Reputation Management makes sure AI <em>recommends</em> it.
              Clients who run both audits together get a complete picture of their AI presence — and fix twice as fast.
              Ask about bundled pricing when you submit your audit request.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/audit" className="btn-primary">
                Start AI Visibility Suite <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Compare All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="label-tag mb-3">Common Questions</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Reputation Management FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6" style={{ border: '1px solid rgba(168,85,247,0.12)' }}>
                <h3 className="font-syne font-semibold text-white mb-3 text-base">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">
            What is AI saying about your brand right now?
          </h2>
          <p className="text-muted mb-8">The free snapshot takes 24 hours and costs nothing. The answer might surprise you.</p>
          <Link href="/audit?service=reputation&tier=free" className="btn-primary text-base px-8 py-3.5"
            style={{ background: 'linear-gradient(135deg,#A855F7,#00A8FF)' }}>
            Get Free Reputation Snapshot <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
