import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Appear in Google AI Overviews: Complete GEO Guide 2026',
  description:
    'Step-by-step guide to getting your business featured in Google AI Overviews. Learn the exact optimization factors, content structure, and schema signals that Gemini uses to select citations. By Ronnel Besagre.',
  alternates: { canonical: 'https://getoutloop.com/blog/how-to-appear-in-google-ai-overviews' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Appear in Google AI Overviews: Complete GEO Guide 2026',
  description:
    'Step-by-step guide to getting your business featured in Google AI Overviews. Learn the exact optimization factors, content structure, and schema signals that Gemini uses to select citations.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/#ronnel',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
    jobTitle: 'GEO/SEO Consultant & AI Automation Specialist',
    knowsAbout: ['Generative Engine Optimization', 'Google AI Overviews', 'SEO', 'Structured Data'],
  },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/how-to-appear-in-google-ai-overviews',
  keywords: ['Google AI Overviews', 'Google SGE', 'AI Overviews optimization', 'GEO', 'Gemini SEO'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.definition-block'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://getoutloop.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'How to Appear in Google AI Overviews', item: 'https://getoutloop.com/blog/how-to-appear-in-google-ai-overviews' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google AI Overviews (formerly Search Generative Experience / SGE) are AI-generated summaries that appear at the very top of Google Search results — above all paid ads and organic results — for many informational and commercial queries. They are powered by Google\'s Gemini model and synthesize information from multiple web sources, citing 3–10 sources inline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my website to appear in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To appear in Google AI Overviews: (1) Ensure Googlebot and Google-Extended are allowed in your robots.txt. (2) Implement FAQPage, Article, and Organization JSON-LD schemas. (3) Structure key pages with clear definitions, comparison tables, and direct Q&A pairs. (4) Build strong E-E-A-T signals — author credentials, original research, third-party citations. (5) Optimize Core Web Vitals (LCP under 2.5s). (6) Create concise, quotable answers of 40–60 words for each target question.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Google AI Overviews replace traditional SEO rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google AI Overviews appear above organic rankings but do not replace them. However, they significantly reduce click-through rates for queries where an AI Overview appears — making citation in the AI Overview the new #1 position. Businesses cited in AI Overviews receive brand visibility even when users don\'t click through to the site.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is optimization for Google AI Overviews different from regular SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular SEO targets Google\'s PageRank algorithm (backlinks, keyword density, CTR). AI Overview optimization targets Gemini\'s content evaluation system, which prioritizes: content citability (clear, quotable statements), E-E-A-T depth (first-hand experience, verifiable credentials), structured data completeness, and concise answer-format writing. Both disciplines are complementary but require different content strategies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to appear in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After implementing AI Overview optimizations, Googlebot typically re-crawls changed pages within 1–4 weeks. First appearances in AI Overviews for target queries usually occur within 1–3 months. Consistent, reliable citations across multiple query types take 3–6 months of sustained content and E-E-A-T building.',
      },
    },
  ],
}

const optimizationFactors = [
  {
    number: '01',
    title: 'E-E-A-T Depth — Experience First',
    description:
      'Google\'s AI Overviews system places heavy weight on firsthand experience. Content written by a practitioner who has actually done the work — with specific case details, real numbers, and personal observations — scores significantly higher than generic "expert" content. Ronnel\'s consulting experience across 24+ years and active GEO engagements in Malaysia, Singapore, and the Philippines gives this content legitimate E-E-A-T standing.',
    action: 'Add "Based on my experience working with [X] clients in [industry]" statements. Reference specific, verifiable projects. Include your professional credentials visibly near your author byline.',
  },
  {
    number: '02',
    title: 'Concise, Quotable Answer Blocks',
    description:
      'Gemini\'s content extraction system looks for responses to specific questions that are 40–80 words — long enough to be informative, short enough to quote directly in an AI Overview. Answers longer than 150 words are typically paraphrased or skipped. Answers shorter than 30 words lack sufficient context. The 40–80 word "answer block" is the core unit of AI Overview content.',
    action: 'Identify the top 10 questions your target audience asks. Write a 40–80 word answer for each, formatted as a clear paragraph starting with a direct answer to the question.',
  },
  {
    number: '03',
    title: 'FAQPage Schema Markup',
    description:
      'FAQPage JSON-LD schema is the most direct signal Google\'s Gemini model uses to locate extractable Q&A content. Pages with FAQPage schema are significantly more likely to appear in AI Overviews because the structured data explicitly tells Google: "this section contains a question and its answer." Without FAQPage schema, Google must infer Q&A structure from raw text — far less reliable.',
    action: 'Add FAQPage schema to every key service page, your GEO Explained page, and every blog post. Include the exact question text that users actually search for.',
  },
  {
    number: '04',
    title: 'Google-Extended Crawler Access',
    description:
      'Google uses a separate crawler, Google-Extended, specifically for Gemini and AI Overview training and retrieval. Many websites that allow Googlebot inadvertently block Google-Extended. If Google-Extended is blocked in your robots.txt, your content cannot be included in AI Overviews — regardless of how well-optimized your content is.',
    action: 'Add "User-agent: Google-Extended\\nAllow: /" to your robots.txt. Also add GoogleOther for additional AI-related retrieval. Verify at yourdomain.com/robots.txt.',
  },
  {
    number: '05',
    title: 'Topical Authority Through Content Depth',
    description:
      'Google AI Overviews favor sources that have demonstrated comprehensive expertise on a topic — not just one well-written page, but a cluster of related, interlinked content. A website with one GEO article loses to a website with 10 interlinked GEO articles, a GEO Explained cornerstone page, a GEO FAQ, and GEO service pages — all internally linking to each other.',
    action: 'Build topic clusters. For each core topic, create: a cornerstone page, at least 3 supporting blog posts, a FAQ page, and a service page — all interlinked.',
  },
  {
    number: '06',
    title: 'Core Web Vitals — Speed as a Trust Signal',
    description:
      'Google\'s AI Overview system inherits traditional SEO\'s trust framework, which includes page quality signals. Slow-loading pages (LCP above 2.5 seconds), pages with significant layout shift (CLS above 0.1), and poor interaction responsiveness (INP above 200ms) are deprioritized in citation. This is why server-side rendered static HTML — not JavaScript SPAs — is the correct technical foundation for AI visibility.',
    action: 'Test your Core Web Vitals at pagespeed.web.dev. Target LCP under 2.5s, CLS under 0.1, INP under 200ms. Static HTML sites on fast CDNs (like Vercel) typically achieve this easily.',
  },
  {
    number: '07',
    title: 'Fresh Content With dateModified Schema',
    description:
      'Google AI Overviews strongly prefer recently published or updated content. A page with a datePublished of 2025 and dateModified of 2026-03 signals freshness. A page with a 2022 publication date and no update signals sends stale content signals. Importantly, you must use the Article or WebPage schema\'s dateModified property — simply editing the page without updating the schema is insufficient.',
    action: 'Add datePublished and dateModified to all Article schemas. Add a visible "Last Updated: [Month Year]" label near the top of your key pages. Set a quarterly content review schedule.',
  },
  {
    number: '08',
    title: 'Statistics With Cited Sources',
    description:
      'Gemini\'s content quality evaluation rewards factual, verifiable claims. Pages that cite statistics with inline source references — not generic claims — score higher on trustworthiness. "Studies show 65% of searches are zero-click" with a Sparktoro source reference outperforms the same claim without attribution. This directly mirrors how academic papers establish credibility.',
    action: 'Every key statistic on your site should have a source reference, even if just inline text like "Source: Sparktoro, 2025." Avoid vague claims like "many businesses" — use specific percentages with attributed sources.',
  },
]

export default function GoogleAIOverviewsPost() {
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
              <li className="text-[#00A8FF]">How to Appear in Google AI Overviews</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span className="px-2.5 py-1 rounded-full text-[#00A8FF] text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)' }}>GEO</span>
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span>·</span>
              <span>11 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              How to Appear in Google AI Overviews: Complete GEO Guide 2026
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#B0B8C8]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <span>By <Link href="/about" className="text-white hover:text-[#00A8FF] transition-colors font-medium">Ronnel Besagre</Link></span>
              <span>·</span>
              <span>GEO/SEO Consultant, AI Automation Specialist</span>
            </div>
          </header>

          <div className="prose-custom space-y-10 text-[#B0B8C8] leading-relaxed">

            <div className="definition-block rounded-2xl p-7" style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}>
              <p className="label-tag mb-2">What Are Google AI Overviews?</p>
              <p>
                <strong className="text-white">Google AI Overviews</strong> (formerly Search Generative Experience / SGE) are AI-generated summaries powered by Google&apos;s Gemini model that appear at the very top of Search results — above all paid ads and organic listings — for millions of daily queries. They synthesize content from 3–10 cited web sources and display it as a coherent answer. <strong className="text-white">Being cited in a Google AI Overview is now the most valuable position in Google Search.</strong>
              </p>
            </div>

            <section aria-labelledby="why-ai-overviews-matter">
              <h2 id="why-ai-overviews-matter" className="font-syne font-bold text-2xl text-white mb-4">Why Google AI Overviews Matter More Than #1 Rankings</h2>
              <p>In 2026, Google AI Overviews appear for an estimated 26–40% of all searches — and that percentage grows weekly. When an AI Overview appears, it:</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Occupies the entire above-the-fold area on mobile (users must scroll past it to reach organic results)',
                  'Displays your brand name, URL, and a quoted excerpt — even when users don\'t click through',
                  'Positions your business as the authoritative source on the topic for that query',
                  'Cannot be purchased — unlike Google Ads, AI Overview placement is entirely merit-based',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#00FF9D] font-bold shrink-0 mt-0.5">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Based on my experience optimizing sites for GEO across Malaysia and Singapore, businesses cited in AI Overviews see significantly higher brand recall and inbound inquiry rates — even when the click-through rate itself is modest. The impression alone builds authority.
              </p>
            </section>

            <section aria-labelledby="how-google-selects">
              <h2 id="how-google-selects" className="font-syne font-bold text-2xl text-white mb-4">How Google Selects AI Overview Sources</h2>
              <p>
                Google AI Overviews are generated by Gemini, which uses a retrieval-augmented generation (RAG) process: it retrieves relevant web pages via Google&apos;s search index, then synthesizes a response citing the most authoritative and citable sources. The selection criteria differ from standard PageRank — here are the 8 factors that actually determine inclusion:
              </p>
            </section>

            <section aria-labelledby="optimization-factors">
              <h2 id="optimization-factors" className="font-syne font-bold text-2xl text-white mb-6">8 Optimization Factors for Google AI Overviews</h2>
              <div className="space-y-5">
                {optimizationFactors.map((factor) => (
                  <div key={factor.number} className="glass-card p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-syne font-bold text-2xl shrink-0 leading-none" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {factor.number}
                      </span>
                      <h3 className="font-syne font-bold text-lg text-white leading-tight">{factor.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4">{factor.description}</p>
                    <div className="text-sm px-4 py-3 rounded-lg" style={{ background: 'rgba(0,255,157,0.06)', border: '1px solid rgba(0,255,157,0.2)' }}>
                      <strong className="text-[#00FF9D]">Action: </strong><span>{factor.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="ai-overviews-vs-seo">
              <h2 id="ai-overviews-vs-seo" className="font-syne font-bold text-2xl text-white mb-5">AI Overviews vs Traditional SEO: Key Differences</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <th className="text-left py-3 pr-4 text-white font-syne font-bold">Dimension</th>
                      <th className="text-left py-3 pr-4 text-[#00A8FF] font-syne font-bold">Traditional SEO</th>
                      <th className="text-left py-3 text-[#00FF9D] font-syne font-bold">AI Overview Optimization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      ['Primary Signal', 'PageRank (backlinks, authority)', 'E-E-A-T + content citability'],
                      ['Target', 'Keyword ranking position', 'Citation in AI-generated summary'],
                      ['Content Format', 'Keyword-optimized paragraphs', '40–80 word answer blocks'],
                      ['Schema Priority', 'Title/meta optimization', 'FAQPage, Article, Organization'],
                      ['Measurement', 'Keyword rankings, organic traffic', 'AI Overview impression share (GSC)'],
                      ['Purchase Option', 'Not directly purchasable', 'Not purchasable (organic only)'],
                      ['Timeline', '3–6 months', '1–3 months with correct signals'],
                    ].map(([dim, seo, ai], i) => (
                      <tr key={i}>
                        <td className="py-3 pr-4 text-[#B0B8C8] font-medium">{dim}</td>
                        <td className="py-3 pr-4 text-[#B0B8C8]">{seo}</td>
                        <td className="py-3 text-[#B0B8C8]">{ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="step-by-step">
              <h2 id="step-by-step" className="font-syne font-bold text-2xl text-white mb-5">Step-by-Step Implementation Plan</h2>
              <ol className="space-y-4">
                {[
                  { step: 'Audit robots.txt for Google-Extended', detail: 'Add User-agent: Google-Extended and User-agent: GoogleOther with Allow: / rules. Verify immediately.' },
                  { step: 'Identify your top 10 AI Overview target queries', detail: 'Use Google Search Console → Search Results → filter by "AI Overview" impression. Also check which queries already show AI Overviews by searching manually in incognito mode.' },
                  { step: 'Write 40–80 word answer blocks for each target query', detail: 'Format: direct answer first, then supporting detail. No fluff, no padding. Think: "If this were the only sentence Google quoted from my page, would it fully answer the question?"' },
                  { step: 'Add FAQPage schema to all key pages', detail: 'Include the exact search queries as question names. Answer text should match or closely mirror your on-page answer blocks.' },
                  { step: 'Build your topic cluster', detail: 'Create a cornerstone page + 3 supporting posts + a service page for each core topic. Interlink all of them. Topical depth signals expertise to Gemini.' },
                  { step: 'Add author credentials to every content page', detail: 'Include author name, job title, credentials, and a link to your About page. Add Person schema with knowsAbout and hasCredential properties.' },
                  { step: 'Track AI Overview appearances in Google Search Console', detail: 'Filter Search Results by "Search appearance: AI Overview" to see which queries trigger AI Overview impressions for your domain.' },
                ].map((item, i) => (
                  <li key={i} className="glass-card p-5 flex gap-4">
                    <span className="font-syne font-bold text-xl shrink-0 w-7 leading-none pt-0.5" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{i + 1}.</span>
                    <div>
                      <strong className="text-white">{item.step}</strong>
                      <p className="text-sm mt-1">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="faq-ai-overviews">
              <h2 id="faq-ai-overviews" className="font-syne font-bold text-2xl text-white mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: 'What are Google AI Overviews?', a: 'Google AI Overviews are AI-generated summaries powered by Gemini that appear at the top of Google Search results — above ads and organic listings — for many informational and commercial queries. They cite 3–10 web sources inline.' },
                  { q: 'How do I get my website to appear in Google AI Overviews?', a: 'Allow Google-Extended in robots.txt, implement FAQPage and Article schemas, write 40–80 word answer blocks for target queries, build E-E-A-T signals through author credentials and third-party citations, and maintain fast Core Web Vitals.' },
                  { q: 'Does Google AI Overviews replace traditional SEO?', a: 'It doesn\'t replace SEO but significantly changes the #1 position from a blue link to an AI citation. AI Overview citations deliver brand visibility even on zero-click queries.' },
                  { q: 'How is optimization for Google AI Overviews different from regular SEO?', a: 'Regular SEO targets PageRank signals. AI Overview optimization targets Gemini\'s content evaluation: E-E-A-T depth, answer-format writing (40–80 words), FAQPage schema, and topical authority clusters.' },
                  { q: 'How long does it take to appear in Google AI Overviews?', a: 'First appearances typically occur within 1–3 months of implementing optimizations. Consistent citations across multiple queries take 3–6 months.' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))', border: '1px solid rgba(0,168,255,0.2)' }}>
              <h2 className="font-syne font-bold text-2xl text-white mb-3">Is Your Site Appearing in Google AI Overviews?</h2>
              <p className="mb-6 text-sm">I offer a free AI Visibility Audit that checks your Google AI Overview optimization alongside ChatGPT, Perplexity, Claude, and Gemini visibility — giving you a complete AI search picture.</p>
              <Link href="/audit" className="btn-primary px-8 py-3">Get Free AI Visibility Audit</Link>
            </div>

          </div>

          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">Ronnel Besagre</Link>
                <p className="text-[#00A8FF] text-xs mb-2">GEO/SEO Consultant · AI Automation Specialist · 24+ Years APAC Expertise</p>
                <p className="text-[#B0B8C8] text-sm">Based in Johor Bahru, Malaysia. I help businesses across APAC get cited in Google AI Overviews, ChatGPT, Perplexity, and Claude through systematic GEO optimization.</p>
              </div>
            </div>
          </footer>

          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/how-chatgpt-recommends-businesses" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">How ChatGPT Decides Which Businesses to Recommend</p>
              </Link>
              <Link href="/blog/what-is-geo-generative-engine-optimization" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">What is GEO? The Complete Guide</p>
              </Link>
              <Link href="/geo-explained" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00FF9D] mb-1">Cornerstone</p>
                <p className="text-sm text-white font-medium">GEO Explained: Full Framework</p>
              </Link>
              <Link href="/services/seo-geo-consulting" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">Service</p>
                <p className="text-sm text-white font-medium">SEO/GEO Consulting Service</p>
              </Link>
            </div>
          </nav>

        </div>
      </article>
    </>
  )
}
