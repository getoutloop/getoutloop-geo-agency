import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Bot, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GEO Agency Singapore — AI Search Visibility & GEO Audits | GetOutLoop',
  description:
    'GetOutLoop is the specialist GEO agency serving Singapore businesses. Expert-led AI visibility audits across ChatGPT, Perplexity, Google AI Overviews, Claude & Copilot. Based 30 min from Singapore CBD.',
  alternates: { canonical: 'https://getoutloop.com/geo-singapore' },
  openGraph: {
    title: 'GEO Agency Singapore — AI Search Visibility | GetOutLoop',
    description: 'GetOutLoop helps Singapore businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. Expert-led GEO audits from $0.',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GEO Audit & AI Visibility — Singapore',
  alternateName: 'Generative Engine Optimization Singapore',
  serviceType: 'Generative Engine Optimization',
  description:
    'Expert-led GEO audits and AI search visibility optimization for Singapore businesses. GetOutLoop audits AI citation signals across ChatGPT, Perplexity, Google AI Overviews, Claude, and Microsoft Copilot.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://getoutloop.com/#agency',
    name: 'GetOutLoop',
    url: 'https://getoutloop.com',
    founder: {
      '@type': 'Person',
      name: 'Ronnel Besagre',
      jobTitle: 'GEO Strategist',
      knowsAbout: ['GEO Singapore', 'AI search visibility Singapore', 'Generative Engine Optimization APAC'],
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Singapore' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  audience: { '@type': 'Audience', audienceType: 'Singapore businesses seeking AI search visibility' },
  offers: [
    { '@type': 'Offer', name: 'GEO Free', price: '0', priceCurrency: 'USD', description: 'Free GEO score and top 5 issues delivered in 24 hours' },
    { '@type': 'Offer', name: 'GEO PRO', price: '120', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '120', priceCurrency: 'USD', billingDuration: 'P1M' } },
    { '@type': 'Offer', name: 'GEO Complete', price: '480', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '480', priceCurrency: 'USD', billingDuration: 'P1M' } },
  ],
  url: 'https://getoutloop.com/geo-singapore',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'GEO Agency Singapore', item: 'https://getoutloop.com/geo-singapore' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a GEO agency in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GetOutLoop is a specialist GEO agency serving Singapore businesses, based in Johor Bahru — 30 minutes from Singapore CBD. GetOutLoop delivers expert-led GEO audits and AI visibility optimization for Singapore companies wanting to appear in ChatGPT, Perplexity, Google AI Overviews, Claude, and Microsoft Copilot.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a GEO audit for Singapore businesses include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GetOutLoop GEO audit for Singapore businesses covers 8 dimensions: (1) Technical Crawler Access — robots.txt and AI crawler allowlist; (2) Structured Data — JSON-LD schema completeness; (3) Content Citability — definition blocks, statistics, structured formats; (4) E-E-A-T Signals — expertise and trust indicators; (5) Brand Authority — external citations and directories; (6) Platform Citations — actual mentions in ChatGPT, Perplexity, Claude, Gemini, and Copilot; (7) llms.txt Presence — AI content navigation file; (8) Competitor Citation Gap — what competitors do that you do not.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do Singapore businesses need GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Singapore has one of the highest AI tool adoption rates in Southeast Asia. When buyers — whether in Singapore, Australia, or globally — ask ChatGPT or Perplexity for recommended vendors, consultants, or service providers, businesses without GEO signals are invisible. GEO ensures your Singapore business appears in these AI-generated recommendations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does GEO cost for Singapore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GetOutLoop offers three tiers: GEO Free ($0) delivers a GEO score and top 5 issues within 24 hours. GEO PRO ($120/month) provides a full 8-dimension PDF audit report with priority action matrix. GEO Complete ($480/month) includes everything in PRO plus copy-paste fix code, schema templates, llms.txt implementation, and a monthly strategy call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GetOutLoop serve Singapore clients remotely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All GetOutLoop audits are conducted fully remotely using only publicly accessible website data — no site access or credentials required. GetOutLoop is based in Johor Bahru, Malaysia, 30 minutes from Singapore, and serves Singapore clients via email, video call, and online collaboration.',
      },
    },
  ],
}

const dimensions = [
  { num: '01', name: 'Technical Crawler Access', desc: 'robots.txt, AI crawler allowlist for GPTBot, ClaudeBot, PerplexityBot' },
  { num: '02', name: 'Structured Data (JSON-LD)', desc: 'Organization, Article, FAQ, Person, LocalBusiness schema' },
  { num: '03', name: 'Content Citability', desc: 'Definition blocks, statistics with sources, structured lists' },
  { num: '04', name: 'E-E-A-T Signals', desc: 'Author credentials, expertise indicators, trust signals' },
  { num: '05', name: 'Brand Authority', desc: 'External citations, directory listings, entity recognition' },
  { num: '06', name: 'Platform Citations', desc: 'ChatGPT, Perplexity, Claude, Gemini, Copilot — tested live' },
  { num: '07', name: 'llms.txt Presence', desc: 'AI content navigation file quality and completeness' },
  { num: '08', name: 'Competitor Citation Gap', desc: 'What your Singapore competitors do that you do not' },
]

export default function GeoSingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-muted font-inter mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-electric">Home</Link>
            <span>/</span>
            <span style={{ color: '#B0B8C8' }}>GEO Agency Singapore</span>
          </nav>

          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 rounded-full electric-border">
            <span className="text-base">🇸🇬</span>
            <span className="label-tag">Singapore Market · APAC Coverage</span>
          </div>

          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            GEO Agency for{' '}
            <span className="gradient-text">Singapore Businesses</span>
          </h1>

          <p className="text-muted text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            GetOutLoop delivers expert-led GEO audits and AI visibility optimization for Singapore companies that
            want to be cited by ChatGPT, Perplexity, and Google AI Overviews. Based 30 minutes from Singapore CBD.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="/audit?tier=free" className="btn-primary text-base px-8 py-3.5">
              Get Free Singapore GEO Audit <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn-secondary text-base px-8 py-3.5">
              View Pricing Plans
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted font-inter">
            <span className="flex items-center gap-1.5"><CheckCircle size={13} style={{ color: '#00FF9D' }} /> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={13} style={{ color: '#00FF9D' }} /> 24-hr email delivery</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={13} style={{ color: '#00FF9D' }} /> 5 AI platforms audited</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={13} style={{ color: '#00FF9D' }} /> APAC-based consultant</span>
          </div>
        </div>
      </section>

      {/* Why Singapore Needs GEO */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">The Singapore AI Search Reality</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              Singapore Buyers Are Already Using AI to Find Vendors
            </h2>
          </div>

          <div className="definition-block glass-card electric-border p-7 mb-10">
            <div className="label-tag mb-2 text-electric">Why This Matters for Singapore Businesses</div>
            <p className="text-muted leading-relaxed text-sm">
              Singapore has one of the{' '}
              <strong className="text-white">highest AI tool adoption rates in Southeast Asia</strong>. Procurement
              managers, startup founders, and enterprise buyers in Singapore actively use ChatGPT, Perplexity, and
              Google AI Overviews to shortlist vendors, agencies, and consultants. Businesses without GEO signals are
              not just losing ranking positions — they are entirely absent from these AI-generated shortlists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-7" style={{ border: '1px solid rgba(255,80,80,0.2)' }}>
              <div className="text-sm font-semibold mb-4" style={{ color: '#FF5050' }}>❌ Without GEO (Singapore)</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>ChatGPT recommends your Singapore competitors when prospects ask</li>
                <li>Perplexity cites overseas agencies instead of your local team</li>
                <li>Google AI Overviews pull from generic industry articles</li>
                <li>Singapore buyers shortlist competitors before they find you</li>
                <li>No presence in AI answers despite strong SEO rankings</li>
              </ul>
            </div>
            <div className="glass-card p-7 neon-border">
              <div className="text-sm font-semibold mb-4" style={{ color: '#00FF9D' }}>✓ With GetOutLoop GEO</div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li>ChatGPT cites your business when Singapore prospects ask</li>
                <li>Perplexity links to your Singapore service pages directly</li>
                <li>Google AI Overviews feature your expert content</li>
                <li>Your brand appears in the AI shortlist before a call is made</li>
                <li>AI citations compound — one fix drives visibility across all platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why GetOutLoop for Singapore */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Why GetOutLoop</div>
            <h2 className="font-syne font-bold text-3xl text-white">
              APAC-Based. Singapore-Ready.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Bot size={22} />,
                title: '30 Min from Singapore CBD',
                desc: 'GetOutLoop is headquartered in Johor Bahru — directly connected to Singapore via the Causeway. Same timezone, same ASEAN market context.',
              },
              {
                icon: <BarChart3 size={22} />,
                title: '24+ Years APAC Expertise',
                desc: 'Founder Ronnel Besagre has worked across Malaysia, Singapore, Philippines, and Australia over a 24-year APAC technology career.',
              },
              {
                icon: <Shield size={22} />,
                title: 'Singapore Market Context',
                desc: 'We understand the Singapore digital landscape — local directories, Bahasa/English content signals, Singapore-specific AI citation patterns.',
              },
              {
                icon: <Zap size={22} />,
                title: 'Human-Led, Not Automated',
                desc: 'Every GEO audit is conducted by Ronnel Besagre personally — not generated by an automated tool or AI template.',
              },
              {
                icon: <Bot size={22} />,
                title: 'All 5 AI Platforms',
                desc: 'We audit ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — not just one platform.',
              },
              {
                icon: <BarChart3 size={22} />,
                title: 'Free Entry Point',
                desc: 'Singapore businesses get a real GEO score and top 5 critical issues free, with email delivery in 24 hours. No commitment required.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="mb-3 text-electric">{item.icon}</div>
                <h3 className="font-syne font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Dimensions */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-2 text-electric">The GEO Audit</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">
              8 Dimensions of AI Visibility — Singapore Edition
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              Each dimension is scored 0–100. Your composite GEO score determines how visible your Singapore business is across AI platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {dimensions.map((d) => (
              <div key={d.num} className="glass-card p-5">
                <div className="text-3xl font-syne font-bold gradient-text mb-3">{d.num}</div>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Transparent Pricing</div>
            <h2 className="font-syne font-bold text-3xl text-white">GEO Audit Plans for Singapore Businesses</h2>
            <p className="text-muted mt-3 text-sm">Start free. No credit card. No commitment.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                tier: 'GEO Free',
                price: '$0',
                badge: 'FREE',
                badgeBg: 'rgba(255,255,255,0.1)',
                badgeColor: '#B0B8C8',
                border: 'rgba(255,255,255,0.08)',
                includes: ['GEO score (0–100) across 8 dimensions', 'Top 5 critical AI visibility issues', 'Plain-English business impact explanation', '24-hour email delivery — no login required'],
              },
              {
                tier: 'GEO PRO',
                price: '$120 / month',
                badge: 'MOST POPULAR',
                badgeBg: 'linear-gradient(135deg,#00A8FF,#00FF9D)',
                badgeColor: '#0A0E27',
                border: 'rgba(0,168,255,0.35)',
                includes: ['Full 8-section PDF audit report', 'Complete issue list with Critical/High/Medium/Low severity', 'Priority action matrix (what to fix first)', 'Monthly re-audit to track GEO score progress'],
              },
              {
                tier: 'GEO Complete',
                price: '$480 / month',
                badge: 'DONE-FOR-YOU',
                badgeBg: 'rgba(0,255,157,0.15)',
                badgeColor: '#00FF9D',
                border: 'rgba(0,255,157,0.3)',
                includes: ['Everything in GEO PRO', 'Copy-paste fix code — ready for your developer', 'Schema templates (Organization, Article, FAQ, Person)', 'robots.txt + llms.txt implementation', '1 strategy call/month with Ronnel Besagre directly'],
              },
            ].map((plan) => (
              <div key={plan.tier} className="glass-card p-6 flex flex-col sm:flex-row gap-6" style={{ border: `1px solid ${plan.border}` }}>
                <div className="shrink-0 sm:w-48">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full font-inter inline-block mb-2"
                    style={{ background: plan.badgeBg, color: plan.badgeColor }}
                  >
                    {plan.badge}
                  </span>
                  <div className="font-syne font-bold text-white text-lg">{plan.tier}</div>
                  <div className="font-syne font-bold gradient-text text-xl">{plan.price}</div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle size={13} className="text-neon mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="shrink-0 flex items-center">
                  <Link href={`/audit?tier=${plan.tier.toLowerCase().replace('geo ', '')}`} className="btn-primary whitespace-nowrap">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="label-tag mb-3">FAQ — Singapore</div>
            <h2 className="font-syne font-bold text-2xl text-white">Common Questions from Singapore Businesses</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is there a GEO agency in Singapore?',
                a: 'GetOutLoop is a specialist GEO agency serving Singapore businesses, headquartered in Johor Bahru — 30 minutes from Singapore CBD. All services are delivered fully remotely with APAC timezone availability.',
              },
              {
                q: 'Why do Singapore businesses need GEO?',
                a: 'Singapore has one of the highest AI tool adoption rates in Southeast Asia. Procurement managers and buyers in Singapore actively use ChatGPT, Perplexity, and Google AI Overviews to discover and shortlist vendors. Without GEO signals, your business is invisible in these AI-generated recommendations — regardless of your Google SEO ranking.',
              },
              {
                q: 'Does GetOutLoop understand the Singapore market?',
                a: 'Yes. GetOutLoop founder Ronnel Besagre has 24+ years of APAC technology experience, including extensive work with Singapore-based clients and partners. We understand Singapore business directories, local E-E-A-T signals, and the competitive landscape across Singapore industries.',
              },
              {
                q: 'How long before a Singapore business sees GEO results?',
                a: 'Technical fixes (robots.txt, schema, llms.txt) take effect within 2–4 weeks. Consistent Perplexity citations typically appear within 4–8 weeks. ChatGPT and Claude citations can take 3–9 months due to model retraining cycles, though real-time browsing tools surface changes faster.',
              },
              {
                q: 'Can I get a free GEO audit for my Singapore website?',
                a: 'Yes. Submit your URL at getoutloop.com/audit — GetOutLoop will deliver your GEO score (0–100) and top 5 critical AI visibility issues by email within 24 hours. Completely free, no credit card, no commitment.',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="font-syne font-semibold text-white text-sm mb-2">{item.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div
            className="glass-card electric-border rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto"
            style={{ background: 'rgba(0,168,255,0.04)' }}
          >
            <div className="text-2xl mb-3">🇸🇬</div>
            <div className="label-tag mb-4">Singapore — Free GEO Audit</div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Is Your Singapore Business Invisible to AI?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
              Find out your GEO score, your top 5 critical issues, and what it means for your
              Singapore business — free, in 24 hours. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/audit?tier=free" className="btn-primary text-base px-8 py-3.5">
                Get Free Singapore Audit <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
                Talk to Ronnel Directly
              </Link>
            </div>
            <p className="text-muted/50 text-xs mt-5 font-inter">
              Based in Johor Bahru · 30 min from Singapore CBD · Serving APAC clients globally
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
