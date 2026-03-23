import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Robots.txt for AI Crawlers: The Complete 2026 Configuration Guide',
  description:
    'Is your robots.txt blocking GPTBot, ClaudeBot, and PerplexityBot? Complete guide to configure robots.txt for AI search visibility in 2026. Copy-paste templates included.',
  alternates: { canonical: 'https://getoutloop.com/blog/robots-txt-ai-crawlers-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Robots.txt for AI Crawlers: The Complete 2026 Configuration Guide',
  description: 'Complete guide to configure robots.txt for AI search visibility — including GPTBot, ClaudeBot, PerplexityBot, and Google-Extended.',
  datePublished: '2026-03-14',
  dateModified: '2026-03-14',
  author: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel', name: 'Ronnel Besagre', url: 'https://getoutloop.com/about' },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/robots-txt-ai-crawlers-guide',
  keywords: ['robots.txt', 'AI crawlers', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'GEO', 'AI visibility'],
}

const crawlers = [
  { name: 'GPTBot', company: 'OpenAI (ChatGPT)', tier: 'Tier 1' },
  { name: 'OAI-SearchBot', company: 'OpenAI Search', tier: 'Tier 1' },
  { name: 'ClaudeBot', company: 'Anthropic (Claude)', tier: 'Tier 1' },
  { name: 'PerplexityBot', company: 'Perplexity AI', tier: 'Tier 1' },
  { name: 'Google-Extended', company: 'Google (Gemini / AI Overviews)', tier: 'Tier 1' },
  { name: 'Bingbot', company: 'Microsoft (Copilot)', tier: 'Tier 1' },
  { name: 'Applebot-Extended', company: 'Apple Intelligence', tier: 'Tier 2' },
  { name: 'FacebookBot', company: 'Meta AI', tier: 'Tier 2' },
  { name: 'Amazonbot', company: 'Amazon / Alexa', tier: 'Tier 2' },
  { name: 'cohere-ai', company: 'Cohere', tier: 'Tier 2' },
]

const robotsTxtTemplate = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Crawl-delay: 1

# === AI SEARCH INDEXING (ALLOW ALL — GEO Visibility Strategy) ===

# ChatGPT / OpenAI
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

# Claude / Anthropic
User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Perplexity AI
User-agent: PerplexityBot
Allow: /

# Google AI (Gemini, AI Overviews)
User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

# Microsoft Bing / Copilot
User-agent: Bingbot
Allow: /

# Apple Intelligence
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Meta AI
User-agent: FacebookBot
Allow: /

# Amazon Alexa / AI
User-agent: Amazonbot
Allow: /

# Common Crawl (AI Training)
User-agent: CCBot
Allow: /

# Cohere AI
User-agent: cohere-ai
Allow: /

# === STANDARD SEARCH ENGINES ===

User-agent: Googlebot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# === SITEMAP ===

Sitemap: https://getoutloop.com/sitemap.xml`

export default function RobotsTxtPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="pt-28 pb-20">
        <div className="section-container max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#B0B8C8]">Robots.txt for AI Crawlers</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span className="px-2.5 py-1 rounded-full text-[#B0B8C8] text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(176,184,200,0.10)', border: '1px solid rgba(176,184,200,0.2)' }}>Technical</span>
              <time dateTime="2026-03-14">March 14, 2026</time>
              <span>·</span>
              <span>7 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Robots.txt for AI Crawlers: The Complete 2026 Configuration Guide
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#B0B8C8]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <span>By <Link href="/about" className="text-white hover:text-[#00A8FF] font-medium">Ronnel Besagre</Link></span>
            </div>
          </header>

          <div className="space-y-8 text-[#B0B8C8] leading-relaxed">

            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,157,0,0.06)', border: '1px solid rgba(255,157,0,0.2)' }}>
              <p className="text-sm"><strong className="text-yellow-400">⚠️ Critical Finding:</strong> In Audit 1 of getoutloop.com, the robots.txt was missing entries for all major AI crawlers. Result: GEO Technical score of 0/15. One file change fixed this entirely.</p>
            </div>

            <section aria-labelledby="what-is-robots">
              <h2 id="what-is-robots" className="font-syne font-bold text-2xl text-white mb-4">What is robots.txt and Why Does It Matter for GEO?</h2>
              <p>
                robots.txt is a plain text file located at yourdomain.com/robots.txt that tells web crawlers which pages they can and cannot access. Every major search engine and AI platform respects this file before indexing your content.
              </p>
              <p className="mt-4">
                For GEO purposes, robots.txt is the <strong className="text-white">most critical single technical file</strong> on your website. If GPTBot, ClaudeBot, or PerplexityBot are blocked — either explicitly or by a catch-all restriction — those AI platforms cannot read your content. They will never cite you. Your GEO score will be zero regardless of how well you&apos;ve optimized everything else.
              </p>
            </section>

            <section aria-labelledby="crawler-table">
              <h2 id="crawler-table" className="font-syne font-bold text-2xl text-white mb-5">Major AI Crawlers Reference Table</h2>
              <div className="overflow-x-auto rounded-xl border border-[#1A2230]">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-[#1A2230]">
                      <th className="text-left p-4 text-[#B0B8C8] text-xs font-semibold uppercase tracking-wider">User-agent</th>
                      <th className="text-left p-4 text-[#B0B8C8] text-xs font-semibold uppercase tracking-wider">AI Platform</th>
                      <th className="text-left p-4 text-[#B0B8C8] text-xs font-semibold uppercase tracking-wider">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crawlers.map((crawler, i) => (
                      <tr key={crawler.name} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                        <td className="p-4 font-mono text-[#00A8FF] text-sm">{crawler.name}</td>
                        <td className="p-4 text-[#B0B8C8] text-sm">{crawler.company}</td>
                        <td className="p-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${crawler.tier === 'Tier 1' ? 'text-[#00FF9D] bg-[#00FF9D]/10' : 'text-[#B0B8C8] bg-white/5'}`}>
                            {crawler.tier}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="template-section">
              <h2 id="template-section" className="font-syne font-bold text-2xl text-white mb-4">Copy-Paste robots.txt Template</h2>
              <p className="mb-4">Save this as <code className="text-[#00A8FF] bg-[#00A8FF]/10 px-1.5 py-0.5 rounded text-sm">robots.txt</code> in your website root directory:</p>
              <div className="rounded-xl overflow-hidden border border-[#1A2230]">
                <div className="bg-[#0D1429] px-4 py-2 border-b border-[#1A2230] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" aria-hidden="true" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" aria-hidden="true" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" aria-hidden="true" />
                  <span className="text-xs text-[#B0B8C8] ml-2">robots.txt</span>
                </div>
                <pre className="p-5 text-xs text-[#B0B8C8] overflow-x-auto leading-relaxed font-mono whitespace-pre">
                  {robotsTxtTemplate}
                </pre>
              </div>
            </section>

            <section aria-labelledby="verification">
              <h2 id="verification" className="font-syne font-bold text-2xl text-white mb-4">How to Verify Your robots.txt Works</h2>
              <ol className="space-y-3">
                {[
                  'Visit https://yourdomain.com/robots.txt in your browser — you should see the plain text content',
                  'Use Google Search Console → Settings → robots.txt tester to verify each crawler user-agent',
                  'Test with: curl -A "GPTBot" https://yourdomain.com/ — should return 200 OK',
                  'Run a GEO audit using the /seo-geo-audit skill — AI Crawler Access score should jump to 12+/15',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#00FF9D] font-bold shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <div className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))', border: '1px solid rgba(0,168,255,0.2)' }}>
              <h2 className="font-syne font-bold text-2xl text-white mb-3">Want Me to Audit Your robots.txt?</h2>
              <p className="mb-6 text-sm">The free AI Visibility Audit includes a full robots.txt review + all GEO technical gaps with a prioritized fix plan.</p>
              <Link href="/audit" className="btn-primary px-8 py-3">Get Free Audit</Link>
            </div>
          </div>

          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">Ronnel Besagre</Link>
                <p className="text-[#00A8FF] text-xs mb-2">GEO/SEO Consultant · AI Automation Specialist</p>
                <p className="text-[#B0B8C8] text-sm">GEO pioneer helping APAC businesses maximize their visibility in AI search engines. Based in Johor Bahru, Malaysia.</p>
              </div>
            </div>
          </footer>

          <nav aria-label="Related articles" className="mt-8">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/what-is-geo-generative-engine-optimization" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">What is GEO? Complete Guide</p>
              </Link>
              <Link href="/blog/seo-vs-geo-vs-aeo-difference" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00FF9D] mb-1">Strategy</p>
                <p className="text-sm text-white font-medium">SEO vs GEO vs AEO Difference</p>
              </Link>
            </div>
          </nav>
        </div>
      </article>
    </>
  )
}
