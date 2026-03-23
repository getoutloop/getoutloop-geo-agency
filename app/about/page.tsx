import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About GetOutLoop — Founder Ronnel Besagre | GEO Agency',
  description: 'GetOutLoop was founded by Ronnel Besagre — GEO pioneer and AI visibility strategist with 24+ years of APAC technology expertise. Learn the story behind the agency.',
  alternates: { canonical: 'https://getoutloop.com/about' },
}

const credentials = [
  { title: 'GEO Pioneer', body: 'Early adopter of Generative Engine Optimization methodology in APAC, building frameworks before most agencies recognized AI search existed.' },
  { title: 'SEO Strategist', body: 'Combines traditional on-page SEO with GEO signals — the only approach that covers both Google rankings and AI citations simultaneously.' },
  { title: '24+ Years APAC', body: 'Two decades of regional technology expertise across Malaysia, Singapore, Philippines — deep understanding of APAC business environments.' },
  { title: 'AI Automation Expert', body: 'Deploys n8n workflows, Claude API integrations, and custom LLM pipelines that power GetOutLoop\'s automated audit delivery system.' },
  { title: 'APAC Coverage', body: 'Based in Johor Bahru. Available onsite, hybrid, or remote across Singapore, Malaysia, Philippines, Australia, and worldwide.' },
  { title: '95%+ Client CSAT', body: 'Consistent satisfaction record maintained across 24+ years of client-facing technical and consulting roles.' },
]

const timeline = [
  { period: '2026 – Present', role: 'Founder & GEO Strategist', org: 'GetOutLoop', location: 'Johor Bahru, Malaysia', color: '#00FF9D' },
  { period: '2025', role: 'AI Automation Specialist & Consultant', org: 'Self-Employed', location: 'Johor Bahru, Malaysia', color: '#00A8FF' },
  { period: '2024 – 2025', role: 'Project Management & Technical Manager APAC', org: 'Matica Group', location: 'Malaysia / APAC', color: '#00A8FF' },
  { period: '2019 – 2023', role: 'Technical Support Engineer SEA', org: 'Matica Group', location: 'SEA Region', color: '#33BCFF' },
  { period: '2014 – 2019', role: 'General Technical Manager', org: 'ALL ID Asia Pte Ltd', location: 'Singapore', color: '#33BCFF' },
  { period: '2008 – 2014', role: 'Technical Manager', org: 'Digital Scanning Corporation', location: 'Singapore', color: '#66C9FF' },
  { period: '2000 – 2008', role: 'Technical Support Representative', org: 'Auto ID Philippines Inc', location: 'Manila, Philippines', color: '#99D6FF' },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://getoutloop.com/about#ronnel',
  name: 'Ronnel Besagre',
  url: 'https://getoutloop.com/about',
  jobTitle: 'Founder & GEO Strategist',
  worksFor: { '@id': 'https://getoutloop.com/#agency' },
  description: 'Ronnel Besagre is a GEO pioneer and AI visibility strategist with 24+ years of APAC technology expertise, specializing in Generative Engine Optimization and AI search citability.',
  address: { '@type': 'PostalAddress', addressLocality: 'Johor Bahru', addressCountry: 'MY' },
  sameAs: ['https://www.linkedin.com/in/ronnelbesagredotcom', 'https://ronnelbesagre.com'],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-4xl mx-auto text-center">
          <div className="label-tag mb-3">Our Story</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            The GEO Pioneer Behind <span className="gradient-text">GetOutLoop</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            24+ years of APAC technology expertise. Now applied to the future of search.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-tag mb-3">From Barcode Scanners to AI Citations</div>
              <h2 className="font-syne font-bold text-2xl text-white mb-5">Why GetOutLoop Exists</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Ronnel Besagre spent 24 years building technical expertise across Asia-Pacific — deploying barcode systems,
                  RFID infrastructure, and ID card personalization technology for enterprises across Malaysia, Singapore,
                  Philippines, and APAC. His reputation: complex regional projects, delivered.
                </p>
                <p>
                  In 2025, Ronnel pivoted decisively into AI Automation — deploying smart chatbots, voice AI agents, n8n
                  workflows, and custom LLM solutions for businesses. During this journey, he discovered a massive gap:
                  businesses were obsessing over Google rankings while completely ignoring their visibility in AI search
                  engines like ChatGPT, Perplexity, and Gemini.
                </p>
                <p>
                  GetOutLoop was built to solve this. By combining technical SEO with Generative Engine Optimization, Ronnel
                  helps businesses get found not just in Google — but inside the AI conversations that are reshaping how
                  customers discover solutions.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden"
                  style={{ border: '2px solid rgba(0,168,255,0.3)', boxShadow: '0 0 40px rgba(0,168,255,0.15)' }}
                >
                  <Image
                    src="/ronnel-besagre.png"
                    alt="Ronnel Besagre — Founder of GetOutLoop"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 glass-card electric-border px-3 py-2 text-xs font-syne font-semibold text-white">
                  Ronnel Besagre<br />
                  <span className="text-electric text-[10px]">Founder & GEO Strategist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Credentials & Expertise</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Built on Real Experience</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {credentials.map((c) => (
              <div key={c.title} className="glass-card p-6">
                <h3 className="font-syne font-semibold text-electric mb-2">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="label-tag mb-3">Career Journey</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">24+ Years Across APAC</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #00FF9D, #00A8FF, rgba(0,168,255,0.1))' }} />
            <div className="space-y-8 pl-12">
              {timeline.map((item) => (
                <div key={item.period} className="relative">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  <div className="text-xs text-muted font-inter mb-1">{item.period}</div>
                  <div className="font-syne font-semibold text-white">{item.role}</div>
                  <div className="text-electric text-sm">{item.org}</div>
                  <div className="text-muted text-xs mt-0.5">{item.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APAC Coverage */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container text-center">
          <div className="label-tag mb-3">Serving APAC</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-6">Regional Reach, Global Service</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {['🇲🇾 Malaysia', '🇸🇬 Singapore', '🇵🇭 Philippines', '🇦🇺 Australia', '🇺🇸 USA', '🌏 Remote Worldwide'].map((loc) => (
              <span key={loc} className="glass-card electric-border px-4 py-2 text-sm font-inter text-white">{loc}</span>
            ))}
          </div>
          <p className="text-muted text-sm">Based in Johor Bahru, Malaysia. Available onsite, hybrid, or fully remote.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">Work with Ronnel</h2>
          <p className="text-muted mb-8 leading-relaxed">
            Ready to get your business found in both Google and AI search? Start with a free GEO audit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="btn-primary px-8 py-3.5">Get Free GEO Audit</Link>
            <a href="https://www.linkedin.com/in/ronnelbesagredotcom" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-3.5">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
