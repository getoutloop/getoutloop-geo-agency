import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, BarChart3, Search, Bot, Shield, Globe, Star, ChevronDown } from 'lucide-react'
import AICitationFeed from '@/components/ui/AICitationFeed'

export const metadata: Metadata = {
  title: 'GetOutLoop | Specialist GEO Agency — AI Search Visibility',
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

const faqItems = [
  {
    q: 'What is GEO (Generative Engine Optimization)?',
    a: 'GEO is the systematic process of optimizing your website so AI platforms — ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can find, understand, and cite your business in their generated answers. Unlike SEO which targets ranking positions, GEO targets citation frequency inside AI responses.',
  },
  {
    q: 'How much does a GEO audit cost?',
    a: 'GetOutLoop offers three tiers: GEO Free ($0) delivers a GEO score and top 5 critical issues by email within 24 hours. GEO PRO is $120/month and includes a full 8-section PDF report with priority action matrix. GEO Complete is $480/month and adds copy-paste fix code, schema templates, robots.txt updates, llms.txt implementation, and a monthly strategy call.',
  },
  {
    q: 'How long does GEO optimization take to show results?',
    a: 'Technical improvements — robots.txt, structured data, and llms.txt — typically take effect within 2–4 weeks. Consistent Perplexity citations usually appear within 4–8 weeks. ChatGPT and Claude citations can take 3–9 months due to longer model retraining cycles.',
  },
  {
    q: 'Is the free GEO audit really free?',
    a: 'Yes — completely free, no credit card, no commitment required. The free audit delivers your GEO score (0–100) and top 5 critical issues by email within 24 hours. It is designed to demonstrate the methodology and show you exactly where your AI visibility gaps are before any paid engagement.',
  },
  {
    q: 'Which AI platforms does GetOutLoop audit for?',
    a: 'GetOutLoop audits AI visibility across five major platforms: ChatGPT (OpenAI), Perplexity AI, Google Gemini / AI Overviews, Claude (Anthropic), and Microsoft Copilot (Bing). Each platform has different citation signals and the audit evaluates all five.',
  },
  {
    q: 'Do you serve businesses outside Malaysia?',
    a: 'Yes. GetOutLoop serves clients globally, fully remote. The agency is headquartered in Johor Bahru, Malaysia, with active clients in Singapore, Philippines, Australia, and the USA. All audits are conducted remotely using only publicly accessible website data.',
  },
  {
    q: 'What is the difference between GEO, SEO, and AEO?',
    a: 'SEO (Search Engine Optimization) targets Google ranking positions using keywords and backlinks. AEO (Answer Engine Optimization) targets featured snippets and direct answer boxes in traditional search. GEO (Generative Engine Optimization) targets citation frequency inside AI-generated responses — it is the newest discipline and addresses a fundamentally different mechanism than SEO or AEO.',
  },
  {
    q: 'What is Share of AI Voice (SAV)?',
    a: 'Share of AI Voice (SAV) is the primary GEO performance metric. It measures what percentage of relevant AI-generated responses mention your brand versus your competitors. For example, if 3 out of 10 AI answers about "GEO agencies in Malaysia" mention your business, your SAV is 30%. GetOutLoop tracks SAV across all five major AI platforms.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden">
        <div className="section-container relative z-10 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

            {/* Left — text + CTAs */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 rounded-full electric-border">
                <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: '#00FF9D' }} />
                <span className="label-tag">GEO Agency · APAC & Global</span>
              </div>

              <h1 className="font-syne font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                <span className="gradient-text">Get Cited by AI.</span>
                <br />
                Get Found by Everyone.
              </h1>

              <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Your customers are asking ChatGPT, Perplexity, and Gemini who to hire.
                GetOutLoop audits exactly why AI is ignoring your business — and fixes it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
                  Get Free GEO Audit <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="btn-secondary text-base px-8 py-3.5">
                  View Pricing Plans
                </Link>
              </div>

              {/* Social proof mini row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-muted font-inter">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={13} style={{ color: '#00FF9D' }} /> No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={13} style={{ color: '#00FF9D' }} /> 24-hr delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={13} style={{ color: '#00FF9D' }} /> 5 AI platforms audited
                </span>
              </div>
            </div>

            {/* Right — animated AI citation feed */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[360px]">
              <AICitationFeed />
              <p className="text-[11px] text-center mt-3 font-inter" style={{ color: 'rgba(255,255,255,0.2)' }}>
                This is what GetOutLoop clients achieve. Is your business in the AI answer?
              </p>
            </div>

          </div>
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
                <li>
                  65% of searches end without a click — you get nothing{' '}
                  <a href="https://sparktoro.com/blog/2024-zero-click-search-study/" target="_blank" rel="noopener noreferrer" className="text-xs opacity-50 hover:opacity-80" style={{ color: '#B0B8C8' }}>[SparkToro]</a>
                </li>
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

      {/* Services Overview */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Our Services</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              Get Found. Look Great. Win in AI Search.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="glass-card electric-border p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl" style={{ background: 'rgba(0,168,255,0.1)' }}>
                  <BarChart3 size={22} className="text-electric" />
                </div>
                <div>
                  <div className="text-[10px] text-muted/60 uppercase tracking-widest font-inter">Service 01</div>
                  <h3 className="font-syne font-bold text-white text-lg">GEO Audit</h3>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                8-dimension AI visibility audit. Find out why ChatGPT, Perplexity, and Gemini are ignoring your
                business — and get a scored, prioritized fix plan.
              </p>
              <Link href="/services#geo-audit" className="text-electric text-sm hover:underline font-inter flex items-center gap-1 mt-auto">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
            <div className="glass-card p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl" style={{ background: 'rgba(168,85,247,0.1)' }}>
                  <Star size={22} style={{ color: '#A855F7' }} />
                </div>
                <div>
                  <div className="text-[10px] text-muted/60 uppercase tracking-widest font-inter">Service 02</div>
                  <h3 className="font-syne font-bold text-white text-lg">Reputation Management</h3>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Audit your reviews, brand mentions, and AI perception. Find out what ChatGPT says about your brand
                today — then control the narrative.
              </p>
              <Link href="/reputation" className="text-sm hover:underline font-inter flex items-center gap-1 mt-auto" style={{ color: '#A855F7' }}>
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
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
      <section className="section-padding" style={{ background: '#0A0E27' }}>
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

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">FAQ</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              Common Questions About GEO
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="glass-card group" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="font-syne font-semibold text-white text-sm leading-snug">{item.q}</span>
                  <ChevronDown size={16} className="text-muted shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <p className="pt-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-electric text-sm hover:underline font-inter">
              View all FAQ answers →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
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
