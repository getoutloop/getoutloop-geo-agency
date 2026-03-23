import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding SEO, GEO, and AEO: The Complete 2026 Guide',
  description:
    'A deep-dive comparison of SEO, GEO, and AEO — what each discipline is, how they work, when to prioritize each, and how to build an integrated search strategy for 2026. By Ronnel Besagre.',
  alternates: { canonical: 'https://getoutloop.com/blog/understanding-seo-geo-aeo' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Understanding SEO, GEO, and AEO: The Complete 2026 Guide',
  description:
    'A deep-dive comparison of SEO, GEO, and AEO — what each is, how they work, when to prioritize each, and how to build an integrated search strategy for 2026.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/#ronnel',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
    jobTitle: 'GEO/SEO Consultant & AI Automation Specialist',
    knowsAbout: ['SEO', 'GEO', 'AEO', 'search optimization', 'AI search', 'generative engine optimization'],
  },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/understanding-seo-geo-aeo',
  keywords: ['SEO vs GEO vs AEO', 'understanding SEO GEO AEO', 'search optimization 2026', 'AI search strategy'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.definition-block'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://getoutloop.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Understanding SEO, GEO, and AEO', item: 'https://getoutloop.com/blog/understanding-seo-geo-aeo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between SEO, GEO, and AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO (Search Engine Optimization) optimizes for Google and Bing blue-link rankings using backlinks, keyword relevance, and PageRank signals. GEO (Generative Engine Optimization) optimizes for citation in AI-generated responses from ChatGPT, Perplexity, Claude, and Gemini using E-E-A-T, structured data, and content citability. AEO (Answer Engine Optimization) optimizes for featured snippets, position-zero results, and voice search answers using question-answer content structure and speakable schema. All three are complementary disciplines targeting different parts of the 2026 search landscape.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is more important in 2026: SEO, GEO, or AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All three matter, but the relative priority depends on your business type. B2B professional services and expert consultants should prioritize GEO first (AI tools are heavily used for vendor research). E-commerce and local businesses should prioritize SEO and AEO (intent-to-purchase searches still heavily use Google). Content publishers and news sites benefit most from AEO (featured snippet capture drives significant traffic). Most businesses in 2026 need at least a baseline of all three.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do SEO, GEO, and AEO simultaneously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and the three disciplines share significant overlap. Many GEO optimizations (E-E-A-T, structured data, content quality) also improve traditional SEO rankings. Many AEO optimizations (FAQ sections, answer-format content, featured snippet targeting) also improve GEO citability. A well-structured content strategy naturally serves all three simultaneously. The main additional investment GEO requires over traditional SEO is: robots.txt AI crawler rules, llms.txt file, and explicit E-E-A-T author markup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AEO (Answer Engine Optimization)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AEO (Answer Engine Optimization) is the practice of optimizing web content to appear in direct answer formats — Google featured snippets (position zero), Google\'s "People Also Ask" boxes, voice search answers (Siri, Alexa, Google Assistant), and Bing answer boxes. AEO focuses on question-answer content structure, speakable schema markup, and concise direct answers (40–60 words) to commonly searched questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the relationship between GEO and AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO and AEO share overlapping optimization signals but target different systems. AEO targets Google\'s featured snippet and People Also Ask algorithms — traditional, deterministic ranking systems. GEO targets AI generative models (ChatGPT, Perplexity, Claude, Gemini) — probabilistic, LLM-based citation systems. Content optimized for AEO (clear Q&A structure, direct answers) is also highly citable for GEO. FAQPage schema serves both disciplines simultaneously.',
      },
    },
  ],
}

const disciplines = [
  {
    name: 'SEO',
    fullName: 'Search Engine Optimization',
    since: 'Mid-1990s',
    color: '#B0B8C8',
    definition: 'SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in traditional search engine results pages — primarily Google and Bing blue-link organic listings — by improving relevance, authority, and technical performance signals as measured by PageRank and related algorithms.',
    primaryTargets: ['Google organic results', 'Bing organic results', 'Google Image Search', 'Google Maps (Local SEO)'],
    keySignals: ['Backlinks and domain authority', 'Keyword relevance and density', 'Core Web Vitals (LCP, CLS, INP)', 'Click-through rate (CTR)', 'User engagement signals', 'Technical crawlability and indexation'],
    primaryMetric: 'Keyword ranking position + organic traffic',
    timeToResults: '3–12 months',
    contentFormat: 'Long-form keyword-optimized articles, service pages, product pages',
    schemaFocus: 'Title tags, meta descriptions, breadcrumbs',
    budgetLevel: 'Medium to High (content + link building)',
  },
  {
    name: 'GEO',
    fullName: 'Generative Engine Optimization',
    since: '2023 (emerging)',
    color: '#00A8FF',
    definition: 'GEO (Generative Engine Optimization) is the systematic process of optimizing website content, technical infrastructure, and brand signals so that AI-powered platforms — including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve, understand, and cite your business in their generated responses. GEO targets AI citation frequency, not ranking positions.',
    primaryTargets: ['ChatGPT (OpenAI)', 'Perplexity AI', 'Claude (Anthropic)', 'Google AI Overviews (Gemini)', 'Microsoft Copilot (Bing)'],
    keySignals: ['E-E-A-T depth (author credentials, experience)', 'Content citability (definitions, tables, Q&A)', 'Structured data completeness (JSON-LD)', 'AI crawler access (robots.txt)', 'Brand authority (third-party mentions)', 'llms.txt presence and quality'],
    primaryMetric: 'AI citation frequency + Share of AI Voice',
    timeToResults: '1–6 months',
    contentFormat: 'Definition blocks, comparison tables, FAQ sections, answer-format paragraphs (40–80 words)',
    schemaFocus: 'Person/Organization, FAQPage, Article, Service, speakable',
    budgetLevel: 'Low to Medium (content quality + technical setup)',
  },
  {
    name: 'AEO',
    fullName: 'Answer Engine Optimization',
    since: '~2019 (featured snippets era)',
    color: '#00FF9D',
    definition: 'AEO (Answer Engine Optimization) is the practice of structuring web content to appear in direct answer formats — Google featured snippets (position zero), People Also Ask boxes, voice search answers (Siri, Alexa, Google Assistant), and Bing answer boxes. AEO targets algorithm-determined answer extraction from specific content patterns.',
    primaryTargets: ['Google Featured Snippets', 'Google People Also Ask', 'Voice Search (Siri, Alexa, Google Assistant)', 'Bing Answer Box', 'Apple Intelligence'],
    keySignals: ['Question-answer content structure', 'Concise direct answers (40–60 words)', 'speakable schema markup', 'FAQ and HowTo schema', 'Page authority for the target query', 'Header tag hierarchy (H2/H3 as questions)'],
    primaryMetric: 'Featured snippet capture rate + voice search appearances',
    timeToResults: '4–8 weeks (for snippet capture)',
    contentFormat: 'Direct question-answer pairs, how-to numbered steps, definition paragraphs',
    schemaFocus: 'FAQPage, HowToStep, speakable, DefinedTerm',
    budgetLevel: 'Low (content restructuring + schema)',
  },
]

export default function UnderstandingSEOGEOAEOPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="pt-28 pb-20">
        <div className="section-container max-w-3xl">

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00A8FF]">Understanding SEO, GEO & AEO</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span className="px-2.5 py-1 rounded-full text-[#00A8FF] text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)' }}>Strategy</span>
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span>·</span>
              <span>13 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Understanding SEO, GEO, and AEO: The Complete 2026 Guide
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#B0B8C8]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <span>By <Link href="/about" className="text-white hover:text-[#00A8FF] transition-colors font-medium">Ronnel Besagre</Link></span>
              <span>·</span>
              <span>GEO/SEO Consultant · AI Automation Specialist</span>
            </div>
          </header>

          <div className="prose-custom space-y-10 text-[#B0B8C8] leading-relaxed">

            <div className="definition-block rounded-2xl p-7" style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}>
              <p className="label-tag mb-2">The Three-Discipline Framework</p>
              <p>
                <strong className="text-white">Search optimization in 2026 has three distinct disciplines:</strong> SEO targets Google/Bing blue-link rankings. GEO targets AI-generated citations in ChatGPT, Perplexity, Claude, and Gemini. AEO targets featured snippets, voice search answers, and position-zero content. A business that only practices one of these three is visible in approximately one-third of the modern search landscape. <strong className="text-white">Maximum visibility requires all three.</strong>
              </p>
            </div>

            <section aria-labelledby="why-three-disciplines">
              <h2 id="why-three-disciplines" className="font-syne font-bold text-2xl text-white mb-4">Why There Are Now Three Search Disciplines</h2>
              <p>
                For most of internet history, &quot;search optimization&quot; meant one thing: SEO. Rank higher in Google, get more traffic. But the search landscape has fractured into three distinct systems — each powered by fundamentally different technology:
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { era: '1996–2019: The SEO Era', desc: 'Google\'s PageRank algorithm dominated. Backlinks = authority. Keywords = relevance. Technical SEO = crawlability. This era created a generation of SEO specialists optimizing for a single, well-understood ranking system.' },
                  { era: '2019–2023: The AEO Era', desc: 'Google introduced Featured Snippets and People Also Ask boxes at scale. Answer Engine Optimization emerged — structuring content to capture zero-click positions above organic results. Voice search (Siri, Alexa) created demand for natural-language answer formats.' },
                  { era: '2023–Present: The GEO Era', desc: 'ChatGPT\'s mass adoption in late 2022/2023 created a new search behavior: asking AI for recommendations instead of Googling. Perplexity, Claude, and Google AI Overviews followed. GEO emerged as the discipline for optimizing for AI citation — a fundamentally different system from both SEO and AEO.' },
                ].map((item) => (
                  <div key={item.era} className="glass-card p-5">
                    <strong className="text-white">{item.era}</strong>
                    <p className="text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="discipline-deep-dives">
              <h2 id="discipline-deep-dives" className="font-syne font-bold text-2xl text-white mb-6">The Three Disciplines: Deep Dive</h2>
              <div className="space-y-8">
                {disciplines.map((disc) => (
                  <div key={disc.name} className="glass-card p-6 space-y-4" style={{ borderTop: `3px solid ${disc.color}` }}>
                    <div className="flex items-start gap-3 flex-wrap">
                      <span className="font-syne font-black text-4xl" style={{ color: disc.color }}>{disc.name}</span>
                      <div>
                        <div className="text-white font-semibold">{disc.fullName}</div>
                        <div className="text-xs text-[#B0B8C8]">Since: {disc.since}</div>
                      </div>
                    </div>
                    <div className="rounded-xl p-4 text-sm" style={{ background: `${disc.color}08`, border: `1px solid ${disc.color}25` }}>
                      <strong style={{ color: disc.color }}>Definition: </strong>
                      <span>{disc.definition}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-[#B0B8C8] mb-2">Primary Targets</p>
                        <ul className="space-y-1">
                          {disc.primaryTargets.map((t) => <li key={t} className="flex items-start gap-2"><span style={{ color: disc.color }}>·</span>{t}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-[#B0B8C8] mb-2">Key Signals</p>
                        <ul className="space-y-1">
                          {disc.keySignals.slice(0, 4).map((s) => <li key={s} className="flex items-start gap-2"><span style={{ color: disc.color }}>·</span>{s}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      {[
                        { label: 'Primary Metric', val: disc.primaryMetric },
                        { label: 'Time to Results', val: disc.timeToResults },
                        { label: 'Content Format', val: disc.contentFormat },
                        { label: 'Budget Level', val: disc.budgetLevel },
                      ].map((item) => (
                        <div key={item.label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="text-[9px] uppercase tracking-wider text-[#B0B8C8] mb-1">{item.label}</div>
                          <div className="text-white font-medium leading-snug">{item.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="master-comparison">
              <h2 id="master-comparison" className="font-syne font-bold text-2xl text-white mb-5">Master Comparison Table: SEO vs GEO vs AEO</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <th className="text-left py-3 pr-3 text-white font-syne font-bold">Dimension</th>
                      <th className="text-left py-3 pr-3 text-[#B0B8C8] font-syne font-bold">SEO</th>
                      <th className="text-left py-3 pr-3 text-[#00A8FF] font-syne font-bold">GEO</th>
                      <th className="text-left py-3 text-[#00FF9D] font-syne font-bold">AEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-xs" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      ['What it targets', 'Google/Bing rank positions', 'AI citation in LLM responses', 'Featured snippets/voice answers'],
                      ['Primary goal', 'Organic traffic via rankings', 'Brand mentions in AI answers', 'Position-zero / direct answers'],
                      ['Key platform', 'Google, Bing', 'ChatGPT, Perplexity, Claude, Gemini', 'Google, Siri, Alexa, voice search'],
                      ['Top signal', 'Backlinks + PageRank', 'E-E-A-T + content citability', 'Q&A structure + speakable schema'],
                      ['Primary schema', 'BreadcrumbList, meta tags', 'Person, FAQPage, Article, Service', 'FAQPage, HowTo, speakable'],
                      ['Content length', '1,500–3,000 words (pillar)', '40–80 word answer blocks', '40–60 word direct answers'],
                      ['Best metric', 'Keyword rankings + traffic', 'Citation frequency + Share of AI Voice', 'Snippet capture rate'],
                      ['DA/authority need', 'High (competitive keywords)', 'Low-Medium (E-E-A-T instead)', 'Medium (per-query authority)'],
                      ['Time to first result', '3–12 months', '1–3 months', '4–8 weeks'],
                      ['Paid alternative', 'Google Ads (PPC)', 'None — all organic', 'None — all organic'],
                    ].map(([dim, seo, geo, aeo], i) => (
                      <tr key={i}>
                        <td className="py-2.5 pr-3 text-white font-medium">{dim}</td>
                        <td className="py-2.5 pr-3 text-[#B0B8C8]">{seo}</td>
                        <td className="py-2.5 pr-3 text-[#B0B8C8]">{geo}</td>
                        <td className="py-2.5 text-[#B0B8C8]">{aeo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="which-to-prioritize">
              <h2 id="which-to-prioritize" className="font-syne font-bold text-2xl text-white mb-5">Which Discipline Should You Prioritize?</h2>
              <div className="space-y-4">
                {[
                  {
                    scenario: 'B2B professional services (consulting, legal, accounting, IT)',
                    recommendation: 'GEO first, then SEO',
                    rationale: 'Business decision-makers use AI tools extensively for vendor research. A consultant cited in ChatGPT for "best [service] consultant in Malaysia" captures high-intent leads. SEO remains important for organic traffic but GEO generates faster, higher-quality B2B leads in this category.',
                    color: '#00A8FF',
                  },
                  {
                    scenario: 'E-commerce and product businesses',
                    recommendation: 'SEO first + AEO, then GEO',
                    rationale: 'Product searches ("buy X in Malaysia," "cheapest Y in Singapore") still predominantly happen on Google. AEO captures featured snippets for comparison queries. GEO is valuable for brand positioning but less directly commercial at this stage.',
                    color: '#B0B8C8',
                  },
                  {
                    scenario: 'Local businesses (restaurants, clinics, salons)',
                    recommendation: 'Local SEO first + AEO, then GEO',
                    rationale: 'Google Maps and local search results dominate local intent queries. AEO captures voice search for "near me" queries. GEO is valuable long-term but lower priority than Google Business Profile and local citations.',
                    color: '#B0B8C8',
                  },
                  {
                    scenario: 'Content publishers, blogs, educational sites',
                    recommendation: 'AEO + SEO simultaneously, add GEO',
                    rationale: 'Featured snippets and People Also Ask drive significant traffic for informational content. SEO maintains long-tail keyword traffic. GEO expands brand reach into AI-generated content recommendations.',
                    color: '#00FF9D',
                  },
                  {
                    scenario: 'Startups launching in 2026',
                    recommendation: 'GEO technical foundations from day one + SEO + AEO',
                    rationale: 'New startups can\'t compete in SEO for 6–12 months (no domain authority). GEO allows citation in AI platforms from launch day with proper content and technical setup. Implement all three from the beginning rather than retrofitting.',
                    color: '#00A8FF',
                  },
                ].map((item) => (
                  <div key={item.scenario} className="glass-card p-5">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <strong className="text-white">{item.scenario}</strong>
                      <span className="text-xs font-bold px-3 py-1 rounded-full shrink-0" style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}>
                        {item.recommendation}
                      </span>
                    </div>
                    <p className="text-sm">{item.rationale}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="integrated-strategy">
              <h2 id="integrated-strategy" className="font-syne font-bold text-2xl text-white mb-4">The Integrated 2026 Search Strategy</h2>
              <p>
                In practice, the three disciplines share more than they differ. Most content optimized for GEO also improves SEO — clearer content, better structure, and stronger E-E-A-T signals are ranking factors Google values too. The additional investment required to add GEO on top of a good SEO strategy is relatively small.
              </p>
              <p className="mt-4">The integrated strategy I recommend for APAC businesses:</p>
              <ol className="mt-5 space-y-3">
                {[
                  'Build with SSR/SSG from day one — your technical foundation serves all three disciplines equally',
                  'Implement JSON-LD schemas comprehensively — FAQPage, Article, Person/Organization, Service, speakable',
                  'Write content in answer-format blocks (40–80 words per key question) — citable for GEO, extractable for AEO, engaging for SEO',
                  'Build E-E-A-T signals consistently — author credentials, original experience, third-party citations benefit all three',
                  'Create topic clusters — cornerstone + supporting articles — depth signals authority to Google, Gemini, and all AI platforms',
                  'Allow all crawlers in robots.txt — Googlebot, Google-Extended, GPTBot, ClaudeBot, PerplexityBot, Bingbot',
                  'Measure all three separately — Google rankings, AI citation frequency, and featured snippet capture require different tracking tools',
                ].map((item, i) => (
                  <li key={i} className="glass-card p-4 flex gap-4">
                    <span className="font-syne font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{i + 1}.</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="faq-seo-geo-aeo">
              <h2 id="faq-seo-geo-aeo" className="font-syne font-bold text-2xl text-white mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: 'What is the difference between SEO, GEO, and AEO?', a: 'SEO optimizes for Google/Bing blue-link rankings. GEO optimizes for AI citations in ChatGPT, Perplexity, Claude, and Gemini. AEO optimizes for featured snippets and voice search answers. All three target different parts of the modern search landscape and serve complementary roles.' },
                  { q: 'Which is more important in 2026: SEO, GEO, or AEO?', a: 'Priority depends on your business type. B2B professional services should prioritize GEO. E-commerce should prioritize SEO and AEO. Most businesses in 2026 need a baseline of all three — the integrated approach is more effective than choosing just one.' },
                  { q: 'Can I do SEO, GEO, and AEO simultaneously?', a: 'Yes — and there is significant overlap. E-E-A-T improvements benefit all three. FAQ sections with FAQPage schema serve AEO and GEO simultaneously. Clear content structure serves SEO and AEO. The incremental cost of adding GEO to a good SEO strategy is relatively low.' },
                  { q: 'What is AEO (Answer Engine Optimization)?', a: 'AEO is the practice of optimizing content to appear in direct answer formats — Google featured snippets, People Also Ask boxes, and voice search answers. It focuses on concise direct answers (40–60 words), question-header structures, and speakable schema.' },
                  { q: 'What is the relationship between GEO and AEO?', a: 'GEO and AEO share content structure overlap (Q&A format, concise answers) but target different systems. AEO targets Google\'s algorithmic snippet extraction. GEO targets AI language model citation. FAQPage schema serves both simultaneously.' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))', border: '1px solid rgba(0,168,255,0.2)' }}>
              <h2 className="font-syne font-bold text-2xl text-white mb-3">Need Help Building Your Integrated SEO + GEO + AEO Strategy?</h2>
              <p className="mb-6 text-sm">I build integrated search strategies for APAC businesses covering all three disciplines — from technical foundations to content and authority building. Start with a free AI Visibility Audit.</p>
              <Link href="/audit" className="btn-primary px-8 py-3">Get Free AI Visibility Audit</Link>
            </div>

          </div>

          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">Ronnel Besagre</Link>
                <p className="text-[#00A8FF] text-xs mb-2">GEO/SEO Consultant · AI Automation Specialist · Triple ABNLP Certified</p>
                <p className="text-[#B0B8C8] text-sm">24+ years APAC technology expertise. I help businesses across Malaysia, Singapore, and the Philippines build search visibility across Google, AI platforms, and voice search — simultaneously.</p>
              </div>
            </div>
          </footer>

          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/seo-vs-geo-vs-aeo-difference" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00FF9D] mb-1">Strategy</p>
                <p className="text-sm text-white font-medium">SEO vs GEO vs AEO: Which Do You Need?</p>
              </Link>
              <Link href="/blog/what-is-geo-generative-engine-optimization" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">What is GEO? The Complete Guide</p>
              </Link>
              <Link href="/blog/how-to-appear-in-google-ai-overviews" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">How to Appear in Google AI Overviews</p>
              </Link>
              <Link href="/geo-explained" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00FF9D] mb-1">Cornerstone</p>
                <p className="text-sm text-white font-medium">GEO Explained: The Full Framework</p>
              </Link>
            </div>
          </nav>

        </div>
      </article>
    </>
  )
}
