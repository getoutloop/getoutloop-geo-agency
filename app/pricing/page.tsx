import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GEO Audit Pricing — Free, PRO & Complete | GetOutLoop',
  description: 'Three GEO audit tiers for every budget. GEO Free ($0), GEO PRO ($120/mo), GEO Complete ($480/mo). Start free — no credit card required.',
  alternates: { canonical: 'https://getoutloop.com/pricing' },
}

const tiers = [
  {
    name: 'GEO Free',
    price: '$0',
    tagline: 'See your gaps before you commit',
    badge: 'FREE',
    borderColor: 'rgba(255,255,255,0.08)',
    includes: [
      'GEO score (0–100)',
      'Top 5 critical issues',
      'Plain-English business impact summary',
      'Email delivery within 24 hrs',
    ],
    excludes: ['No PDF report', 'No fix guides', 'No schema code', 'No monthly monitoring'],
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
    borderColor: 'rgba(0,168,255,0.35)',
    includes: [
      'Full 8-section PDF report',
      'Complete issue list with severity ratings',
      'Priority action matrix',
      'Monthly re-audit',
      'What\'s missing (no how-to-fix)',
    ],
    excludes: ['No implementation code', 'No strategy call'],
    cta: 'Start GEO PRO',
    href: '/audit?tier=pro',
    primary: true,
  },
  {
    name: 'GEO Complete',
    price: '$480',
    period: '/site/month',
    tagline: 'Audit + report + copy-paste fix code',
    badge: 'DONE-FOR-YOU',
    borderColor: 'rgba(0,255,157,0.3)',
    includes: [
      'Everything in GEO PRO',
      'Guided fix guides with code',
      'Schema implementation templates',
      'Monthly monitoring + re-audit',
      '1 strategy call/month',
    ],
    excludes: [],
    cta: 'Apply for Complete',
    href: '/audit?tier=complete',
    primary: false,
  },
]

const compareRows = [
  { feature: 'GEO Score (0–100)', free: true, pro: true, complete: true },
  { feature: 'Top 5 Critical Issues', free: true, pro: true, complete: true },
  { feature: 'Email Report', free: true, pro: true, complete: true },
  { feature: 'Full 8-Section PDF', free: false, pro: true, complete: true },
  { feature: 'Complete Issue List', free: false, pro: true, complete: true },
  { feature: 'Severity Ratings', free: false, pro: true, complete: true },
  { feature: 'Priority Action Matrix', free: false, pro: true, complete: true },
  { feature: 'Monthly Re-Audit', free: false, pro: true, complete: true },
  { feature: 'Guided Fix Code', free: false, pro: false, complete: true },
  { feature: 'Schema Templates', free: false, pro: false, complete: true },
  { feature: 'Monthly Strategy Call', free: false, pro: false, complete: true },
]

const faqs = [
  { q: 'Can I upgrade from Free to PRO?', a: 'Yes, at any time. Simply submit your site again via the audit form and select GEO PRO. We will apply any insights from your Free audit to the paid report.' },
  { q: 'Is the GEO score accurate for my industry?', a: 'Yes. The 8-dimension GEO audit framework is industry-agnostic. It scores technical, schema, content, E-E-A-T, brand authority, platform citations, llms.txt, and competitor gap — all of which apply to any business type.' },
  { q: 'What is included in the PDF report?', a: 'The PDF covers all 8 GEO audit dimensions with individual scores, a complete issue list with severity ratings (Critical/High/Medium/Low), a priority action matrix ranked by impact, and an executive summary with overall GEO score and grade.' },
  { q: 'Do you offer annual pricing?', a: 'Yes — contact us for annual billing. Annual PRO is $1,080/yr (save $360). Annual Complete is $4,320/yr (save $1,440). Email rbesagre@gmail.com to arrange.' },
]

export default function PricingPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://getoutloop.com/pricing' },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center">
          <div className="label-tag mb-3">Transparent Pricing</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            GEO Audit Plans That Match Your Ambition
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">Start free. Scale when you see results.</p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass-card p-7 flex flex-col relative ${tier.primary ? 'md:-mt-4 md:pb-11' : ''}`}
                style={{ border: `1px solid ${tier.borderColor}` }}
              >
                {tier.primary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full font-inter"
                      style={{ background: 'linear-gradient(135deg,#00A8FF,#00FF9D)', color: '#0A0E27' }}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                {!tier.primary && (
                  <div className="mb-5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full font-inter"
                      style={{ background: 'rgba(255,255,255,0.08)', color: '#B0B8C8' }}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                {tier.primary && <div className="mb-5 h-5" />}

                <div className="mb-1">
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
                      <Minus size={15} className="mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={tier.href}
                  className={tier.primary ? 'btn-primary justify-center' : 'btn-secondary justify-center'}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Full Feature Comparison</h2>
          </div>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <th className="text-left p-4 text-muted font-inter font-normal">Feature</th>
                  <th className="text-center p-4 font-syne font-semibold text-white">Free</th>
                  <th className="text-center p-4 font-syne font-semibold text-electric">PRO</th>
                  <th className="text-center p-4 font-syne font-semibold text-neon">Complete</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.feature}
                    style={{ borderBottom: i < compareRows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <td className="p-4 text-muted font-inter">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.free ? <CheckCircle size={16} className="text-neon mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {row.pro ? <CheckCircle size={16} className="text-neon mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {row.complete ? <CheckCircle size={16} className="text-neon mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-syne font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">
            Start with the free audit — no risk
          </h2>
          <p className="text-muted mb-8">Get your GEO score and top 5 issues delivered to your inbox within 24 hours.</p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
            Get Free GEO Audit
          </Link>
        </div>
      </section>
    </>
  )
}
