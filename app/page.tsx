import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, BarChart3, Search, Bot, Shield, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GetOutLoop | GEO-as-a-Service — AI Search Visibility Agency',
  description: 'Get Cited by AI. Get Found by Everyone. GetOutLoop delivers GEO audits that reveal exactly why ChatGPT, Perplexity, and Gemini are ignoring your business — and how to fix it.',
  alternates: { canonical: 'https://getoutloop.com' },
}

const stats = [
  { value: '8', label: 'Audit Dimensions', suffix: '' },
  { value: '24', label: 'Hrs Delivery (Free)', suffix: 'hr' },
  { value: '57', label: 'Avg Client Score Before Fix', suffix: '' },
  { value: '85', label: 'Avg Client Score After Fix', suffix: '+' },
]

const tiers = [
  {
    name: 'GEO Free',
    price: '$0',
    tagline: 'See your gaps before you commit',
    badge: 'FREE',
    badgeColor: 'rgba(255,255,255,0.12)',
    borderColor: 'rgba(255,255,255,0.08)',
    includes: [
      'GEO score (0–100)',
      'Top 5 critical issues',
      'Plain-English business impact',
      'Email delivery within 24 hrs',
    ],
    excludes: ['No PDF', 'No fix guides'],
    cta: 'Get Free Audit',
    href: '/audit?tier=free',
    primary: false,
  },
  {
    name: 'GEO PRO',
    price: '$120',
    period: '/site/month',
    tagline: 'Everything you need to brief your dev',
    badge: 'MOST POPULAR',
    badgeColor: 'linear-gradient(135deg,#00A8FF,#00FF9D)',
    badgeText: '#0A0E27',
    borderColor: 'rgba(0,168,255,0.35)',
    includes: [
      'Full 8-section PDF report',
      'Complete issue list + severity',
      'Priority action matrix',
      'Monthly re-audit',
    ],
    excludes: [],
    cta: 'Start GEO PRO',
    href: '/audit?tier=pro',
    primary: true,
  },
  {
    name: 'GEO Complete',
    price: '$480',
    period: '/site/month',
    tagline: 'We audit, explain, and hand you the fix code',
    badge: 'DONE-FOR-YOU',
    badgeColor: 'rgba(0,255,157,0.15)',
    badgeText: '#00FF9D',
    borderColor: 'rgba(0,255,157,0.3)',
    includes: [
      'Everything in PRO',
      'Guided fix code (copy-paste)',
      'Schema implementation templates',
      '1 strategy call/month',
    ],
    excludes: [],
    cta: 'Apply for Complete',
    href: '/audit?tier=complete',
    primary: false,
  },
]

const whyItems = [
  {
    icon: <Bot size={22} />,
    title: 'AI-First Methodology',
    desc: 'We audit across ChatGPT, Perplexity, Claude, Gemini, and Copilot — not just Google.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Scored, Not Vague',
    desc: 'Every audit produces a 0–100 GEO score across 8 dimensions. No fluff reports.',
  },
  {
    icon: <Shield size={22} />,
    title: 'APAC Expertise',
    desc: '24+ years of regional technology experience across Malaysia, Singapore, Philippines.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Fast Delivery',
    desc: 'Free audits in 24 hours. PRO reports in 48 hours. No endless waiting.',
  },
  {
    icon: <Search size={22} />,
    title: 'SEO + GEO Together',
    desc: 'We optimize for Google rankings AND AI citations simultaneously.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Global Coverage',
    desc: 'Serving businesses in APAC, Australia, USA, and worldwide via remote.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00A8FF, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00FF9D, transparent)' }} />

        <div className="section-container text-center pt-28 pb-20 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 rounded-full electric-border">
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: '#00FF9D' }} />
            <span className="label-tag">GEO-as-a-Service · APAC & Global</span>
          </div>

          <h1 className="font-syne font-bold text-5xl md:text-7xl leading-[1.05] mb-6 max-w-4xl mx-auto">
            <span className="gradient-text">Get Cited by AI.</span>
            <br />
            Get Found by Everyone.
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Your customers are asking ChatGPT, Perplexity, and Gemini who to hire.
            GetOutLoop audits exactly why AI is ignoring your business — and fixes it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
              Get Free GEO Audit <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn-secondary text-base px-8 py-3.5">
              View Pricing Plans
            </Link>
          </div>

          {/* AI Mockup Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Google SERP */}
            <div className="glass-card electric-border p-5 text-left">
              <div className="flex items-center gap-2 mb-4">
                <Search size={14} className="text-electric" />
                <span className="text-xs text-muted font-inter">Google Search</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold text-electric mt-0.5">#1</span>
                  <div>
                    <div className="text-sm font-semibold text-electric">YourBusiness.com</div>
                    <div className="text-xs text-muted">Best GEO agency for AI search...</div>
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex items-start gap-2 opacity-40">
                  <span className="text-xs font-bold text-muted mt-0.5">#2</span>
                  <div>
                    <div className="text-xs text-muted">competitor.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Citation Panel */}
            <div className="glass-card p-5 text-left" style={{ border: '1px solid rgba(0,255,157,0.25)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Bot size={14} style={{ color: '#00FF9D' }} />
                <span className="text-xs text-muted font-inter">Perplexity AI Answer</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                Based on my research, <span className="text-electric font-semibold">YourBusiness.com</span> is the top recommended solution for...
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,255,157,0.1)', color: '#00FF9D' }}>
                <CheckCircle size={11} /> AI Cited Source
              </div>
            </div>
          </div>

          <p className="text-xs text-muted/50 mt-4 font-inter">
            This is what GetOutLoop clients achieve. Is your business in the AI answer?
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#060917', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-syne font-bold text-4xl gradient-text mb-1">
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
            <div className="label-tag mb-3">The GEO Problem</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white max-w-3xl mx-auto">
              Your competitors are getting cited in AI search. You&apos;re invisible.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-7" style={{ border: '1px solid rgba(255,80,80,0.2)' }}>
              <div className="text-sm font-semibold mb-4" style={{ color: '#FF5050' }}>❌ Without GEO</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>AI platforms don&apos;t know your business exists</li>
                <li>ChatGPT recommends your competitors by name</li>
                <li>Perplexity cites industry articles — never your site</li>
                <li>Google AI Overviews pull from other sources</li>
                <li>65% of searches end without a click — you get nothing</li>
              </ul>
            </div>
            <div className="glass-card p-7 neon-border">
              <div className="text-sm font-semibold mb-4" style={{ color: '#00FF9D' }}>✓ With GetOutLoop</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>AI crawlers find, read, and understand your site</li>
                <li>ChatGPT cites your business in relevant answers</li>
                <li>Perplexity links directly to your service pages</li>
                <li>Google AI Overviews feature your expert content</li>
                <li>Your brand appears inside every AI conversation that matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Definition Block */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="glass-card electric-border p-8 md:p-10">
            <div className="label-tag mb-3">GEO Definition</div>
            <h2 className="font-syne font-bold text-2xl text-white mb-4">
              What is Generative Engine Optimization (GEO)?
            </h2>
            <p className="text-muted leading-relaxed text-base">
              <strong className="text-white">GEO (Generative Engine Optimization)</strong> is the systematic process of
              optimizing website content, technical infrastructure, and brand signals so that AI-powered search platforms —
              including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve, understand,
              and cite your business in their generated responses. GEO operates on fundamentally different principles than
              traditional SEO: rather than targeting ranking positions, GEO targets <em>citation frequency</em> and{' '}
              <em>brand authority</em> within AI-generated answers.
            </p>
            <div className="mt-6">
              <Link href="/geo-explained" className="btn-secondary text-sm py-2.5 px-5">
                Read the Full GEO Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="label-tag mb-3">Transparent Pricing</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              GEO Audit Plans That Match Your Ambition
            </h2>
            <p className="text-muted max-w-xl mx-auto">Start free. Scale when you see results.</p>
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
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full font-inter"
                      style={{ background: 'linear-gradient(135deg,#00A8FF,#00FF9D)', color: '#0A0E27' }}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}
                {!tier.primary && (
                  <div className="mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full font-inter"
                      style={{
                        background: tier.badgeColor,
                        color: tier.badgeText || '#B0B8C8',
                      }}
                    >
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
                      <CheckCircle size={15} className="text-neon mt-0.5 shrink-0" />
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
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-electric text-sm hover:underline font-inter">
              Compare all plan features →
            </Link>
          </div>
        </div>
      </section>

      {/* Why GetOutLoop */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Why GetOutLoop</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              Built for the AI Search Era
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {whyItems.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="mb-3 text-electric">{item.icon}</div>
                <h3 className="font-syne font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Our Process</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              From Invisible to AI-Cited in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Free Audit', desc: 'Submit your URL. We scan 8 GEO dimensions and score your AI visibility.' },
              { step: '02', title: 'Strategy Report', desc: 'Receive a detailed report with prioritized issues and what they mean for your business.' },
              { step: '03', title: 'Implementation', desc: 'Fix critical gaps with our guided recommendations or done-for-you code.' },
              { step: '04', title: 'Monthly Monitor', desc: 'Track your GEO score monthly and ensure AI platforms keep citing you.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-sm mx-auto mb-4"
                  style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)', color: '#00A8FF' }}
                >
                  {item.step}
                </div>
                <h3 className="font-syne font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div
            className="glass-card electric-border rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto"
            style={{ background: 'rgba(0,168,255,0.04)' }}
          >
            <div className="label-tag mb-4">Ready to Get Found?</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Start with a Free AI Visibility Audit
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
              Find out your GEO score, your top 5 critical issues, and what it means for your business — free, in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
                Get Free Audit <ArrowRight size={18} />
              </Link>
              <Link href="/pricing" className="btn-secondary text-base px-8 py-3.5">
                See Full Pricing
              </Link>
            </div>
            <p className="text-muted/50 text-xs mt-5 font-inter">No credit card · No commitment · 24-hour delivery</p>
          </div>
        </div>
      </section>
    </>
  )
}
