import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is GEO? Complete Guide to Generative Engine Optimization',
  description:
    'GEO explained: Learn what Generative Engine Optimization is, why it matters in 2026, and how to rank in ChatGPT, Perplexity & Google AI Overviews. By Ronnel Besagre.',
  alternates: { canonical: 'https://getoutloop.com/blog/what-is-geo-generative-engine-optimization' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is GEO? The Complete Guide to Generative Engine Optimization',
  description: 'GEO explained: Learn what Generative Engine Optimization is, why it matters in 2026, and how to rank in ChatGPT, Perplexity & Google AI Overviews.',
  datePublished: '2026-03-12',
  dateModified: '2026-03-12',
  author: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel', name: 'Ronnel Besagre', url: 'https://getoutloop.com/about' },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/what-is-geo-generative-engine-optimization',
  keywords: ['GEO', 'Generative Engine Optimization', 'AI search', 'ChatGPT ranking', 'AI visibility'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.definition-block'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://getoutloop.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'What is GEO?', item: 'https://getoutloop.com/blog/what-is-geo-generative-engine-optimization' },
  ],
}

export default function WhatIsGEOPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="pt-28 pb-20">
        <div className="section-container max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00A8FF]">What is GEO?</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span className="px-2.5 py-1 rounded-full text-[#00A8FF] text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)' }}>GEO</span>
              <time dateTime="2026-03-12">March 12, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              What is GEO? The Complete Guide to Generative Engine Optimization
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#B0B8C8]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <span>By <Link href="/about" className="text-white hover:text-[#00A8FF] transition-colors font-medium">Ronnel Besagre</Link></span>
              <span>·</span>
              <span>GEO/SEO Consultant, AI Automation Specialist</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom space-y-8 text-[#B0B8C8] leading-relaxed">

            {/* Definition block */}
            <div className="definition-block rounded-2xl p-7" style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}>
              <p className="label-tag mb-2">GEO Definition</p>
              <p>
                <strong className="text-white">GEO (Generative Engine Optimization)</strong> is the systematic process of optimizing website content, technical infrastructure, and brand signals so that AI-powered search platforms — including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve, understand, and cite your business in their generated responses.
              </p>
            </div>

            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-syne font-bold text-2xl text-white mb-4">Why GEO Matters Now</h2>
              <p>
                Search has fundamentally changed. When someone asks ChatGPT &quot;What&apos;s the best GEO agency in Malaysia?&quot; or Perplexity &quot;Who is the leading AI automation specialist in APAC?&quot; — those AI systems don&apos;t consult Google&apos;s ranking algorithm. They draw from their training data and real-time web access to form citations.
              </p>
              <p className="mt-4">
                Traditional SEO optimizes your chances of appearing in Google&apos;s blue-link results. GEO optimizes your chances of being cited — by name, with your URL — in AI-generated responses across every major AI platform. In 2026, with{' '}
                <a href="https://sparktoro.com/blog/zero-click-searches" target="_blank" rel="noopener noreferrer" className="text-[#00A8FF] hover:underline">65% zero-click search rates</a>
                {' '}(SparkToro, 2024) and{' '}
                <a href="https://openai.com/blog/chatgpt-can-now-see-hear-and-speak" target="_blank" rel="noopener noreferrer" className="text-[#00A8FF] hover:underline">100M+ weekly ChatGPT users</a>
                {' '}(OpenAI, 2023), GEO has moved from &quot;nice to have&quot; to mission-critical.
              </p>
            </section>

            <section aria-labelledby="how-ai-decides">
              <h2 id="how-ai-decides" className="font-syne font-bold text-2xl text-white mb-4">How AI Search Engines Decide What to Cite</h2>
              <p>AI systems don&apos;t rank pages — they evaluate content for citability. Here are the six key factors:</p>
              <ol className="mt-4 space-y-4">
                {[
                  { title: 'Content Clarity & Density', desc: 'AI systems prefer content with clear definitions, structured headings, and high information density per sentence. Vague, padded content gets deprioritized.' },
                  { title: 'E-E-A-T Signals', desc: 'Experience, Expertise, Authoritativeness, Trustworthiness. Author credentials, original research, and transparent sourcing matter enormously to AI citation systems.' },
                  { title: 'Structured Data (Schema.org)', desc: 'JSON-LD markup helps AI systems identify entities, understand page purpose, and extract key facts reliably. FAQPage, Person, Organization schemas are GEO-critical.' },
                  { title: 'AI Crawler Access', desc: 'Your robots.txt must explicitly allow GPTBot, ClaudeBot, PerplexityBot, and Google-Extended. Blocking these crawlers means zero AI visibility — period.' },
                  { title: 'Brand Authority & Third-Party Mentions', desc: 'The more your brand is mentioned on authoritative external sites, the more confident AI systems are in citing you. Directory listings, press mentions, and backlinks all contribute.' },
                  { title: 'Content Freshness', desc: 'AI systems favor recently updated content. dateModified schema and visible "Last Updated" dates signal freshness to crawlers.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 glass-card p-4">
                    <span className="font-syne font-bold text-lg gradient-text shrink-0 w-6">{i + 1}.</span>
                    <div>
                      <strong className="text-white">{item.title}</strong>
                      <p className="text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="implement-geo">
              <h2 id="implement-geo" className="font-syne font-bold text-2xl text-white mb-4">5 Quick-Win GEO Implementations</h2>
              <ol className="space-y-3">
                {[
                  'Update your robots.txt to explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended',
                  'Create an llms.txt file at yourdomain.com/llms.txt with a structured content map for AI navigation',
                  'Add Organization and Person JSON-LD schemas to your site\'s <head> section',
                  'Write a clear GEO definition block for your services page (like the one at the top of this article)',
                  'Add FAQPage schema to your most important pages with natural-language Q&A pairs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#00FF9D] font-bold shrink-0 mt-0.5">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="geo-timeline">
              <h2 id="geo-timeline" className="font-syne font-bold text-2xl text-white mb-4">GEO Timeline: What to Expect</h2>
              <div className="space-y-3">
                {[
                  { period: 'Weeks 1–4', outcome: 'Technical foundations in place (robots.txt, llms.txt, JSON-LD schemas deployed)' },
                  { period: 'Months 2–3', outcome: 'AI crawlers begin indexing updated content; first sporadic citations may appear' },
                  { period: 'Months 3–6', outcome: 'Consistent citations in Perplexity and ChatGPT for target queries; Share of AI Voice measurable' },
                  { period: 'Months 6–12', outcome: 'Topical authority established; brand mentioned across AI platforms for multiple query types' },
                ].map((item) => (
                  <div key={item.period} className="glass-card p-4 flex items-start gap-4">
                    <span className="text-[#00A8FF] font-semibold text-sm shrink-0 w-28">{item.period}</span>
                    <span className="text-sm">{item.outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div
              className="rounded-2xl p-7 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))', border: '1px solid rgba(0,168,255,0.2)' }}
            >
              <h2 className="font-syne font-bold text-2xl text-white mb-3">Ready to Start Your GEO Journey?</h2>
              <p className="mb-6 text-sm">Get a free AI Visibility Audit — I&apos;ll identify your exact GEO gaps and prioritize the fixes with the highest impact.</p>
              <Link href="/audit" className="btn-primary px-8 py-3">Get Free Audit</Link>
            </div>

          </div>

          {/* Author block */}
          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">Ronnel Besagre</Link>
                <p className="text-[#00A8FF] text-xs mb-2">GEO/SEO Consultant · AI Automation Specialist · Triple ABNLP Certified</p>
                <p className="text-[#B0B8C8] text-sm">24+ years APAC technology expertise. Now applying that foundation to help businesses get found in both Google and AI search.</p>
              </div>
            </div>
          </footer>

          {/* Related posts */}
          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/seo-vs-geo-vs-aeo-difference" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00FF9D] mb-1">Strategy</p>
                <p className="text-sm text-white font-medium">SEO vs GEO vs AEO: What&apos;s the Difference?</p>
              </Link>
              <Link href="/blog/robots-txt-ai-crawlers-guide" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#B0B8C8] mb-1">Technical</p>
                <p className="text-sm text-white font-medium">Robots.txt for AI Crawlers: 2026 Guide</p>
              </Link>
            </div>
          </nav>
        </div>
      </article>
    </>
  )
}
