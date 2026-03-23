import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About GetOutLoop — GEO-as-a-Service Agency | APAC & Global',
  description: 'GetOutLoop is a GEO-as-a-Service agency helping businesses get cited by AI search engines — ChatGPT, Perplexity, Google AI Overviews, Gemini, and Copilot. Based in APAC, serving globally.',
  alternates: { canonical: 'https://getoutloop.com/about' },
}

const howWeWork = [
  {
    step: '01',
    title: 'Audit',
    body: 'We run an 8-dimension GEO scan — technical crawler access, structured data, content citability, E-E-A-T signals, brand authority, platform citations, llms.txt, and competitor gap. Every dimension scored.',
    color: '#00FF9D',
  },
  {
    step: '02',
    title: 'Report',
    body: 'You receive a scored PDF with clear findings per dimension, business impact framing, and a priority action matrix ranked by impact vs. effort. No jargon — just what to fix and why.',
    color: '#00A8FF',
  },
  {
    step: '03',
    title: 'Fix',
    body: 'GEO Complete clients get copy-paste fix code, schema templates, robots.txt updates, and llms.txt implementation. Or use the report as a DIY roadmap — either way, AI visibility improves.',
    color: '#7B61FF',
  },
]

const stats = [
  { value: '8', label: 'Audit Dimensions Scored' },
  { value: '25+', label: 'AI Platforms Tracked' },
  { value: 'APAC', label: 'Regional Base' },
  { value: '24hr', label: 'Free Audit Delivery' },
]

const problems = [
  {
    title: 'AI Search is Replacing Google',
    body: '30–40% of searches now return AI-generated answers. ChatGPT, Perplexity, and Google AI Overviews cite sources — your business is either in the answer or invisible to it.',
  },
  {
    title: 'Traditional SEO Doesn\'t Fix This',
    body: 'Ranking #1 in Google doesn\'t make you citable by AI. AI engines require structured data, answer-format content, brand authority signals, and crawler access — none of which standard SEO addresses.',
  },
  {
    title: 'Most Businesses Don\'t Know They\'re Invisible',
    body: 'Your site may look great and rank well in Google. But if AI crawlers are blocked, schema is missing, or content isn\'t structured for citation — every AI-powered search ignores you completely.',
  },
]

const agencySchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://getoutloop.com/#agency',
  name: 'GetOutLoop',
  url: 'https://getoutloop.com',
  logo: 'https://getoutloop.com/og-image.png',
  description: 'GetOutLoop is a GEO-as-a-Service agency specializing in Generative Engine Optimization — helping businesses get cited by AI search engines across APAC and globally.',
  foundingDate: '2026',
  areaServed: ['MY', 'SG', 'PH', 'AU', 'US', 'Global'],
  founder: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/about#ronnel',
    name: 'Ronnel Besagre',
    jobTitle: 'Founder & GEO Strategist',
    sameAs: ['https://www.linkedin.com/in/ronnelbesagredotcom'],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@getoutloop.com',
    contactType: 'customer support',
    areaServed: 'Global',
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto text-center">
          <div className="label-tag mb-3">About GetOutLoop</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            We Get Businesses <span className="gradient-text">Cited by AI.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            GetOutLoop is a GEO-as-a-Service agency helping businesses across APAC and globally appear inside ChatGPT,
            Perplexity, Google AI Overviews, Gemini, and every AI answer engine that matters.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Why GEO Exists</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">The Problem We Solve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((p) => (
              <div key={p.title} className="glass-card p-6">
                <h3 className="font-syne font-semibold text-electric mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Our Process</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">How GetOutLoop Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeWork.map((step) => (
              <div key={step.step} className="glass-card p-6">
                <div className="font-syne font-bold text-3xl mb-3" style={{ color: step.color }}>{step.step}</div>
                <h3 className="font-syne font-semibold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-syne font-bold text-3xl md:text-4xl gradient-text mb-1">{s.value}</div>
                <div className="text-muted text-sm font-inter">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Brief */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-64 md:w-72 rounded-2xl overflow-hidden"
                  style={{ height: '420px', border: '2px solid rgba(0,168,255,0.3)', boxShadow: '0 0 40px rgba(0,168,255,0.15)' }}
                >
                  <Image
                    src="/ronnel-besagre.png"
                    alt="Ronnel Besagre — Founder of GetOutLoop"
                    width={288}
                    height={420}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 glass-card electric-border px-3 py-2 text-xs font-syne font-semibold text-white">
                  Ronnel Besagre<br />
                  <span className="text-electric text-[10px]">Founder & GEO Strategist</span>
                </div>
              </div>
            </div>
            <div>
              <div className="label-tag mb-3">The Founder</div>
              <h2 className="font-syne font-bold text-2xl text-white mb-5">Built by Someone Who Has Seen Both Sides</h2>
              <p className="text-muted leading-relaxed mb-6">
                GetOutLoop was founded by Ronnel Besagre — 24 years of APAC technical expertise across Malaysia,
                Singapore, Philippines, and Australia. The shift from traditional SEO to AI-first visibility is the
                most important technical transition businesses face today. GetOutLoop exists to close that gap.
              </p>
              <a
                href="https://www.linkedin.com/in/ronnelbesagredotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-3 inline-flex"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center">
          <div className="label-tag mb-3">Coverage</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-6">APAC Base. Global Reach.</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {['🇲🇾 Malaysia', '🇸🇬 Singapore', '🇵🇭 Philippines', '🇦🇺 Australia', '🇺🇸 USA', '🌏 Remote Worldwide'].map((loc) => (
              <span key={loc} className="glass-card electric-border px-4 py-2 text-sm font-inter text-white">{loc}</span>
            ))}
          </div>
          <p className="text-muted text-sm">Based in Johor Bahru, Malaysia. All audits delivered remotely.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">Ready to Get Found by AI?</h2>
          <p className="text-muted mb-8 leading-relaxed">
            Start with a free GEO audit — your score, top 5 issues, and business impact delivered to your inbox in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="btn-primary px-8 py-3.5">Get Free GEO Audit</Link>
            <Link href="/pricing" className="btn-secondary px-8 py-3.5">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
