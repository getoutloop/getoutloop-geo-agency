import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is GEO? Complete Guide to Generative Engine Optimization (2026)',
  description: 'GEO explained: What is Generative Engine Optimization, how AI search citation works, GEO vs SEO vs AEO, and how to implement GEO step by step for ChatGPT, Perplexity, and Gemini.',
  alternates: { canonical: 'https://getoutloop.com/geo-explained' },
}

const geoFactors = [
  { num: '1', title: 'Content Clarity & Density', body: 'AI systems prefer content with clear definitions, structured headings, and high information density per sentence. Vague content is ignored.' },
  { num: '2', title: 'E-E-A-T Signals', body: 'Experience, Expertise, Authoritativeness, Trustworthiness. Author credentials, original research, and transparent sourcing matter significantly.' },
  { num: '3', title: 'Structured Data (Schema.org)', body: 'JSON-LD markup helps AI systems identify entities, understand page purpose, and extract key facts reliably without guessing.' },
  { num: '4', title: 'AI Crawler Access', body: 'Your robots.txt must explicitly allow GPTBot, ClaudeBot, PerplexityBot, and Google-Extended. Blocking them means zero AI citations.' },
  { num: '5', title: 'Brand Authority', body: 'The more your brand is mentioned on authoritative external sites, the more confident AI systems are in citing you. External mentions = trust signals.' },
  { num: '6', title: 'Content Freshness', body: 'AI systems favor recently updated content. dateModified schema and visible "Last Updated" dates signal freshness to both AI and Google.' },
]

const implementationSteps = [
  { step: 'Step 1', title: 'Audit AI Crawler Access', body: 'Check robots.txt. Explicitly allow: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot. Blocking these = zero AI visibility.' },
  { step: 'Step 2', title: 'Create llms.txt', body: 'Build a structured content map at yourdomain.com/llms.txt. It\'s the sitemap.xml equivalent for AI crawlers — defines your site\'s key content for LLMs.' },
  { step: 'Step 3', title: 'Implement JSON-LD Schemas', body: 'Add Organization, Person, FAQPage, Article, Service, and BreadcrumbList schemas. This is how AI systems understand who you are and what you do.' },
  { step: 'Step 4', title: 'Optimize E-E-A-T Signals', body: 'Add author bios with credentials, publication dates, citations, and clear expertise indicators. AI systems heavily weight these trust signals.' },
  { step: 'Step 5', title: 'Create Citation-Optimized Content', body: 'Write definition blocks (like the GEO definition above), comparison tables, statistics with sources, and answer-format sections that AI can directly quote.' },
  { step: 'Step 6', title: 'Build Brand Authority', body: 'Get listed in directories (Crunchbase, Clutch, G2), answer questions on Reddit and Quora, get guest posts published. External mentions = AI confidence.' },
  { step: 'Step 7', title: 'Monitor AI Citations', body: 'Test weekly in Perplexity, ChatGPT, and Claude. Search for your brand + relevant keywords. Track mentions over time using Peec AI or Promptmonitor.' },
  { step: 'Step 8', title: 'Measure & Iterate', body: 'Track Share of AI Voice monthly. Run quarterly GEO audits. Update and expand content regularly to maintain AI citation frequency.' },
]

const faqs = [
  { q: 'What is GEO optimization?', a: 'GEO optimization is the process of structuring your content, technical setup, and brand presence so that AI platforms like ChatGPT, Perplexity, and Google Gemini retrieve and cite your business in their generated responses.' },
  { q: 'How is GEO different from SEO?', a: 'SEO targets Google\'s blue-link ranking algorithm. GEO targets AI citation systems — the underlying models that decide what to include in AI-generated answers. You need both in 2026.' },
  { q: 'What is llms.txt?', a: 'llms.txt is an emerging standard file placed at yourdomain.com/llms.txt that provides AI systems with a structured navigation guide for your website — similar to sitemap.xml but designed for LLM comprehension.' },
  { q: 'How long does GEO take to work?', a: 'Technical improvements show within 2–4 weeks. Consistent AI citations typically appear within 3–6 months. Full topical authority typically requires 6–12 months of consistent content and GEO strategy.' },
  { q: 'What AI platforms does GEO target?', a: 'ChatGPT (OpenAI), Perplexity AI, Claude (Anthropic), Google AI Overviews (Gemini), Microsoft Copilot (Bing), and Apple Intelligence.' },
  { q: 'Do I need GEO if my SEO is already good?', a: 'Yes. Good SEO does not guarantee AI citations. GEO requires additional signals: AI crawler access, entity clarity, E-E-A-T author markup, and structured data that standard SEO tools don\'t check.' },
  { q: 'What is Share of AI Voice?', a: 'Share of AI Voice (SAV) is a GEO metric measuring what percentage of relevant AI-generated responses mention your brand vs. competitors — the AI equivalent of Share of Voice in traditional marketing.' },
  { q: 'What is a good GEO score?', a: 'Using standard GEO audit frameworks, 65+ is considered a passing score with meaningful AI visibility. 80+ indicates strong AI search presence. Below 50 means significant gaps in AI discoverability.' },
]

export default function GeoExplainedPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is GEO? The Complete Guide to Generative Engine Optimization (2026)',
    description: 'Complete guide to GEO — what it is, how AI search citation works, and how to implement Generative Engine Optimization step by step.',
    datePublished: '2026-01-01',
    dateModified: '2026-03-22',
    author: { '@id': 'https://getoutloop.com/about#ronnel' },
    publisher: { '@id': 'https://getoutloop.com/#agency' },
    url: 'https://getoutloop.com/geo-explained',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.geo-definition', 'h1', 'h2'] },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 glass-card electric-border px-4 py-2 rounded-full mb-6">
            <span className="label-tag">Definitive Guide · Updated March 2026</span>
            <span className="text-muted text-xs font-inter">· 12 min read</span>
          </div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            What is GEO? The Complete Guide to<br />
            <span className="gradient-text">Generative Engine Optimization</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Everything you need to know about GEO — what it is, how AI search citation works, and how to implement it step by step.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted font-inter">
            <span>By <a href="https://www.linkedin.com/in/ronnelbesagredotcom" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">Ronnel Besagre</a></span>
            <span>·</span>
            <span>Founder, GetOutLoop</span>
            <span>·</span>
            <span>March 2026</span>
          </div>
        </div>
      </section>

      {/* GEO Definition Block */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="glass-card electric-border p-8 md:p-10 geo-definition">
            <div className="label-tag mb-3">GEO Definition</div>
            <h2 className="font-syne font-bold text-2xl text-white mb-4">What is Generative Engine Optimization?</h2>
            <p className="text-muted leading-relaxed text-base">
              <strong className="text-white">GEO (Generative Engine Optimization)</strong> is the systematic process of
              optimizing website content, technical infrastructure, and brand signals so that AI-powered search platforms —
              including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve, understand,
              and cite your business in their generated responses. GEO operates on fundamentally different principles than
              traditional SEO: rather than targeting ranking positions, GEO targets <em>citation frequency</em> and{' '}
              <em>brand authority</em> within AI-generated answers.
            </p>
          </div>
        </div>
      </section>

      {/* GEO vs SEO vs AEO Comparison */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-5xl mx-auto">
          <div className="label-tag mb-3 text-center">Comparison</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white text-center mb-8">GEO vs SEO vs AEO</h2>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <th className="text-left p-4 text-muted font-inter font-normal">Dimension</th>
                  <th className="text-left p-4 font-syne font-semibold text-white">SEO</th>
                  <th className="text-left p-4 font-syne font-semibold text-electric">GEO</th>
                  <th className="text-left p-4 font-syne font-semibold text-neon">AEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['What it targets', 'Google blue-link rankings', 'AI citation in LLM responses', 'Featured snippets / answer boxes'],
                  ['Primary goal', 'Organic traffic from rankings', 'Brand mentions in AI answers', 'Position-zero / voice answers'],
                  ['Key signals', 'Backlinks, keywords, authority', 'E-E-A-T, content density, entity clarity', 'Q&A structure, structured data'],
                  ['Key platforms', 'Google, Bing', 'ChatGPT, Perplexity, Claude, Gemini', 'Google, Siri, Alexa, voice search'],
                  ['Timeframe', '3–6 months', '3–9 months', '4–8 weeks for snippets'],
                  ['Best metric', 'Organic traffic, keyword rankings', 'AI citation frequency, Share of AI Voice', 'Featured snippet capture rate'],
                ].map(([dim, seo, geo, aeo], i, arr) => (
                  <tr key={dim} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <td className="p-4 text-muted font-inter font-medium">{dim}</td>
                    <td className="p-4 text-muted/80 text-xs">{seo}</td>
                    <td className="p-4 text-electric/90 text-xs">{geo}</td>
                    <td className="p-4 text-neon/90 text-xs">{aeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="label-tag mb-3">Why GEO Matters in 2026</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-8">The AI Search Reality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { stat: '65%', desc: 'of searches now end without a click (SparkToro, 2025)' },
              { stat: '26%', desc: 'of Google queries show AI Overviews above the fold (BrightEdge, 2025)' },
              { stat: '100M+', desc: 'weekly ChatGPT users asking purchasing-intent questions (OpenAI, 2024)' },
              { stat: '10M+', desc: 'daily Perplexity queries — most without clicking any result (Perplexity, 2025)' },
              { stat: '3–5×', desc: 'more inbound for businesses cited in AI search vs. those that don\'t appear' },
              { stat: '0', desc: 'Most businesses have done ZERO GEO optimization — massive first-mover advantage' },
            ].map((item) => (
              <div key={item.stat} className="glass-card electric-border p-5">
                <div className="font-syne font-bold text-3xl gradient-text mb-2">{item.stat}</div>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Ranking Factors */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="label-tag mb-3">GEO Ranking Factors</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-8">How AI Systems Decide What to Cite</h2>
          <div className="space-y-5">
            {geoFactors.map((f) => (
              <div key={f.num} className="glass-card p-6 flex gap-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-syne font-bold text-sm"
                  style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)', color: '#00A8FF' }}>
                  {f.num}
                </div>
                <div>
                  <h3 className="font-syne font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="label-tag mb-3">How to Implement GEO</div>
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-8">8-Step GEO Implementation Guide</h2>
          <div className="space-y-4">
            {implementationSteps.map((s, i) => (
              <div key={s.step} className="glass-card p-6 flex gap-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-syne font-bold text-sm text-neon"
                  style={{ background: 'rgba(0,255,157,0.1)', border: '1px solid rgba(0,255,157,0.3)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-xs text-muted font-inter mb-0.5">{s.step}</div>
                  <h3 className="font-syne font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="label-tag mb-3">GEO FAQ</div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-syne font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Audit Your GEO Score?
          </h2>
          <p className="text-muted mb-8">Find out your GEO score and top 5 critical issues — free, in 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="btn-primary px-8 py-3.5">Get Free GEO Audit</Link>
            <Link href="/pricing" className="btn-secondary px-8 py-3.5">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
