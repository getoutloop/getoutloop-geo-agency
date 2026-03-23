import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How ChatGPT Decides Which Businesses to Recommend (And How to Get Cited)',
  description:
    'Learn the exact factors ChatGPT uses when recommending businesses — and the practical GEO steps to get your business cited in AI-generated responses. By Ronnel Besagre.',
  alternates: { canonical: 'https://getoutloop.com/blog/how-chatgpt-recommends-businesses' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How ChatGPT Decides Which Businesses to Recommend (And How to Get Cited)',
  description:
    'Learn the exact factors ChatGPT uses when recommending businesses — and the practical GEO steps to get your business cited in AI-generated responses.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/#ronnel',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
  },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/how-chatgpt-recommends-businesses',
  keywords: [
    'how does ChatGPT recommend businesses',
    'ChatGPT business recommendations',
    'get cited in ChatGPT',
    'GEO optimization',
    'AI search visibility',
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.definition-block'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://getoutloop.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How ChatGPT Recommends Businesses',
      item: 'https://getoutloop.com/blog/how-chatgpt-recommends-businesses',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ChatGPT decide which businesses to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT combines two sources: its base training data (pre-2024 web content, books, and structured datasets) and real-time web retrieval via Bing Search (when Browse mode is active). Businesses that appear frequently in authoritative online sources — reviews, directories, industry publications, and well-structured websites — are more likely to be cited. Technical signals like structured data (JSON-LD), AI crawler access, and E-E-A-T indicators all influence whether a business makes it into an AI-generated recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ChatGPT use Google rankings to recommend businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. ChatGPT does not use Google's ranking algorithm. When Browse mode is active, it retrieves pages via Bing. But even then, the AI model evaluates content for citability — structured definitions, E-E-A-T signals, clear entity markup — which are different criteria from Google's PageRank-based system. A business can rank #1 on Google and still be absent from ChatGPT recommendations if its content isn't structured for AI comprehension.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to appear in ChatGPT recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical GEO changes (robots.txt, llms.txt, JSON-LD schemas) take 2–4 weeks to propagate. First sporadic mentions in ChatGPT typically appear within 1–3 months as AI crawlers re-index your content. Consistent, reliable citations for target queries usually take 3–6 months of sustained GEO effort including content creation, brand mentions, and authority building.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important factor for getting cited in ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The single most important factor is E-E-A-T — demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness. This means having a clearly identified author with verifiable credentials, original content based on real experience, third-party citations and mentions of your brand, and transparent contact and about information. Content citability — how well-structured and quote-worthy your content is — runs a close second.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pay ChatGPT to recommend my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ChatGPT does not sell recommendations or sponsored placements in its generated responses. All citations are organic — based on what the AI model retrieves and deems authoritative. This is why GEO (Generative Engine Optimization) is the only legitimate way to improve your chances of appearing in AI recommendations.',
      },
    },
  ],
}

const factors = [
  {
    number: '01',
    title: 'Training Data Presence',
    description:
      "ChatGPT's base model was trained on a massive snapshot of the web. Businesses that had a strong, well-structured online presence before the training cutoff are more likely embedded in the model's weights. This doesn't mean new businesses can't appear — but it does mean that the older and more established your digital footprint, the higher your baseline visibility.",
    tip: 'Build comprehensive web presence now. Every credible page, directory listing, and brand mention you create today trains tomorrow\'s AI models.',
  },
  {
    number: '02',
    title: 'Real-Time Web Retrieval (Browse Mode)',
    description:
      "When ChatGPT uses Browse mode, it retrieves current web content via Bing. This is where GEO optimization directly impacts your visibility. Pages that are well-structured, fast-loading, fully server-rendered HTML (not JavaScript-dependent), and explicitly accessible to AI crawlers are prioritized in retrieval. A business with GPTBot blocked in robots.txt effectively doesn't exist to ChatGPT Browse.",
    tip: 'Ensure your site is static HTML, not client-side rendered. Allow GPTBot in robots.txt. Make your most important pages load under 2 seconds.',
  },
  {
    number: '03',
    title: 'E-E-A-T Signal Strength',
    description:
      "Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) has become the de facto standard for AI citation decisions too. ChatGPT evaluates whether content comes from an identifiable, credible source. Author markup (Person schema with credentials), original research or case studies, transparent contact information, and consistent brand mentions across the web all boost E-E-A-T score.",
    tip: 'Add Person schema with your credentials to every page you author. Include a detailed About page. Get your business mentioned in industry publications.',
  },
  {
    number: '04',
    title: 'Content Citability Score',
    description:
      'AI systems prefer content that is easy to extract and quote. Definition blocks (clear, concise statements of what something is), comparison tables, numbered lists with specific data, FAQ sections with direct question-answer pairs, and statistics with sources all dramatically increase citability. Padded, vague content with lots of filler phrases gets deprioritized — even if it ranks well in Google.',
    tip: 'Every important page should have: a clear definition of your core topic, at least one comparison table or numbered list, and a FAQ section with 5+ Q&A pairs.',
  },
  {
    number: '05',
    title: 'Structured Data (JSON-LD Schemas)',
    description:
      'Schema.org markup gives AI systems a machine-readable interpretation of your content. Organization schema establishes your business identity. Person schema builds author credibility. FAQPage schema makes your Q&As directly extractable. Service schema clarifies what you offer and to whom. Without structured data, AI systems must infer entity relationships from raw text — and inference is far less reliable than explicit markup.',
    tip: 'Implement at minimum: Organization or Person, FAQPage on key pages, Service for each service you offer, and Article on every blog post.',
  },
  {
    number: '06',
    title: 'Brand Authority & Third-Party Mentions',
    description:
      "The more your business is mentioned in authoritative third-party sources — industry directories, review platforms (Google Business, Clutch, G2), news articles, LinkedIn articles, and high-DA websites — the more confident AI systems are in citing you. A business mentioned 50 times across credible sources is far more likely to appear in ChatGPT recommendations than a business with a perfect website but zero external mentions.",
    tip: 'Target directory submissions (Clutch, DesignRush, Crunchbase), HARO/Connectively for press mentions, and LinkedIn thought leadership articles with your brand prominently named.',
  },
  {
    number: '07',
    title: 'llms.txt Navigation Map',
    description:
      'The emerging llms.txt standard (placed at yourdomain.com/llms.txt) provides AI systems with a structured content map of your website — what pages exist, what each one covers, and which ones are most important. While not yet universally supported, early adopters gain a meaningful advantage as AI platforms increasingly look for explicit guidance files. It signals AI-readiness to both crawlers and the underlying models.',
    tip: 'Create an llms.txt file with clear section headers, page descriptions, and direct URLs to your most important content.',
  },
]

export default function ChatGPTRecommendsBusinessesPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="pt-28 pb-20">
        <div className="section-container max-w-3xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00A8FF]">How ChatGPT Recommends Businesses</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span
                className="px-2.5 py-1 rounded-full text-[#00A8FF] text-[10px] font-bold tracking-wider uppercase"
                style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)' }}
              >
                GEO
              </span>
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span>·</span>
              <span>9 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              How ChatGPT Decides Which Businesses to Recommend (And How to Get Cited)
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#B0B8C8]">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}
              >
                RB
              </div>
              <span>
                By{' '}
                <Link href="/about" className="text-white hover:text-[#00A8FF] transition-colors font-medium">
                  Ronnel Besagre
                </Link>
              </span>
              <span>·</span>
              <span>GEO/SEO Consultant, AI Automation Specialist</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom space-y-10 text-[#B0B8C8] leading-relaxed">

            {/* Key Answer Block */}
            <div
              className="definition-block rounded-2xl p-7"
              style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}
            >
              <p className="label-tag mb-2">The Short Answer</p>
              <p>
                <strong className="text-white">ChatGPT recommends businesses based on three factors:</strong> (1) how prominently the business appears in its training data, (2) how retrievable and well-structured its web content is via real-time search, and (3) how strong its E-E-A-T signals are across the web. Unlike Google, ChatGPT does <em>not</em> use PageRank or backlink counts as primary signals. This means businesses that optimize for AI citability — a practice called <strong className="text-white">GEO (Generative Engine Optimization)</strong> — can appear in ChatGPT recommendations even without dominant Google rankings.
              </p>
            </div>

            {/* Intro */}
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-syne font-bold text-2xl text-white mb-4">
                The Question Every Business Owner Is Asking
              </h2>
              <p>
                &quot;How do I get ChatGPT to recommend my business?&quot;
              </p>
              <p className="mt-4">
                I hear this question constantly from clients across Malaysia, Singapore, and the Philippines. And it&apos;s the right question to be asking. In 2026, ChatGPT handles over 100 million weekly queries — many of them purchasing-intent searches like &quot;best GEO consultant in Malaysia&quot; or &quot;n8n automation specialist in Singapore.&quot; When someone asks ChatGPT for a recommendation, they&apos;re often ready to buy. The business that gets cited wins the lead.
              </p>
              <p className="mt-4">
                The problem is that most businesses assume ChatGPT works like Google — that if you rank well in Google, you&apos;ll automatically appear in AI recommendations. This is completely wrong. ChatGPT uses a fundamentally different citation system, and understanding that system is the first step to getting inside it.
              </p>
            </section>

            {/* How ChatGPT works */}
            <section aria-labelledby="how-chatgpt-works">
              <h2 id="how-chatgpt-works" className="font-syne font-bold text-2xl text-white mb-4">
                How ChatGPT Actually Works — A Plain-English Explanation
              </h2>
              <p>
                ChatGPT is a large language model (LLM) built by OpenAI. It generates responses by predicting the most contextually appropriate next word — drawing on patterns from its training data and (in Browse mode) real-time web retrieval.
              </p>
              <p className="mt-4">There are two distinct modes:</p>
              <div className="mt-5 space-y-3">
                {[
                  {
                    label: 'Base Model (No Browse)',
                    desc: 'ChatGPT responds from its training data alone — a snapshot of the internet up to its knowledge cutoff. Businesses that had strong, well-indexed web presence before this cutoff are embedded in the model\'s weights. New businesses or those with thin web presence simply don\'t exist in this mode.',
                    color: '#B0B8C8',
                  },
                  {
                    label: 'Browse Mode (With Real-Time Search)',
                    desc: 'ChatGPT uses Bing Search to retrieve current web pages, then synthesizes that information into a response. This is where active GEO optimization has direct, measurable impact. Pages that GPTBot can access, that are fully rendered HTML, and that contain clear structured content get retrieved and cited.',
                    color: '#00A8FF',
                  },
                ].map((mode) => (
                  <div
                    key={mode.label}
                    className="glass-card p-5 flex gap-4"
                  >
                    <div
                      className="w-2 rounded-full shrink-0"
                      style={{ background: mode.color, minHeight: '100%' }}
                      aria-hidden="true"
                    />
                    <div>
                      <strong className="text-white">{mode.label}</strong>
                      <p className="text-sm mt-1">{mode.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                The critical implication: optimizing for ChatGPT recommendations requires addressing both layers — your historical web footprint <em>and</em> your current content&apos;s retrievability and citability.
              </p>
            </section>

            {/* 7 Factors */}
            <section aria-labelledby="factors-heading">
              <h2 id="factors-heading" className="font-syne font-bold text-2xl text-white mb-6">
                The 7 Factors That Determine ChatGPT Business Recommendations
              </h2>
              <div className="space-y-5">
                {factors.map((factor) => (
                  <div key={factor.number} className="glass-card p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <span
                        className="font-syne font-bold text-2xl shrink-0 leading-none"
                        style={{
                          background: 'linear-gradient(135deg, #00A8FF, #00FF9D)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {factor.number}
                      </span>
                      <h3 className="font-syne font-bold text-lg text-white leading-tight">{factor.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4">{factor.description}</p>
                    <div
                      className="text-sm px-4 py-3 rounded-lg"
                      style={{ background: 'rgba(0,255,157,0.06)', border: '1px solid rgba(0,255,157,0.2)' }}
                    >
                      <strong className="text-[#00FF9D]">Action: </strong>
                      <span>{factor.tip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What ChatGPT is NOT using */}
            <section aria-labelledby="not-factors">
              <h2 id="not-factors" className="font-syne font-bold text-2xl text-white mb-4">
                What ChatGPT Is NOT Using to Recommend Businesses
              </h2>
              <p>
                Understanding what <em>doesn&apos;t</em> matter is just as important as knowing what does. Many businesses waste effort on signals that have zero impact on AI citation.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { signal: 'Google PageRank / Domain Authority', why: "ChatGPT doesn't consult Google's algorithm. High DA doesn't translate to AI citation." },
                  { signal: 'Google keyword rankings', why: 'A #1 Google ranking for your target keyword does not mean ChatGPT will recommend you for that topic.' },
                  { signal: 'Paid Google Ads (PPC)', why: 'Advertising on Google has zero influence on ChatGPT recommendations.' },
                  { signal: 'Social media follower counts', why: 'Having 10,000 Instagram followers does not make your business more citable in AI responses.' },
                  { signal: 'Meta description optimization', why: 'Meta descriptions are for Google CTR. AI systems parse page content, not meta tags, for citation decisions.' },
                ].map((item) => (
                  <li key={item.signal} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✗</span>
                    <div>
                      <strong className="text-white">{item.signal}</strong>
                      <span className="text-sm"> — {item.why}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Step-by-step action plan */}
            <section aria-labelledby="action-plan">
              <h2 id="action-plan" className="font-syne font-bold text-2xl text-white mb-5">
                Your 6-Step Action Plan to Get Cited in ChatGPT
              </h2>
              <ol className="space-y-4">
                {[
                  {
                    step: 'Audit your robots.txt immediately',
                    detail:
                      'Go to yourdomain.com/robots.txt right now. If you see "Disallow: /" for GPTBot or no mention of GPTBot at all, you\'re invisible to ChatGPT Browse. Add explicit Allow rules for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and Google-Extended.',
                  },
                  {
                    step: 'Switch to server-side rendered HTML',
                    detail:
                      'If your website is built on a JavaScript-heavy CSR framework (React SPA, Vue SPA) hosted on a service that doesn\'t pre-render, AI crawlers see a blank page. Migrate to Next.js with static export, Astro, or any SSG/SSR framework. This is the highest-impact single change you can make.',
                  },
                  {
                    step: 'Create citation-optimized content on every key page',
                    detail:
                      'Each important page needs: a clear 40-60 word definition of your core topic, at least one structured comparison table or numbered list, a FAQ section with natural-language Q&A pairs, and a visible author block with credentials. These are the content patterns AI systems extract and cite.',
                  },
                  {
                    step: 'Implement JSON-LD schemas',
                    detail:
                      'At minimum: Organization or Person schema in your global layout, Service schema on each service page, Article schema on blog posts, FAQPage schema wherever you have Q&A content, and BreadcrumbList on inner pages. Use schema.org validator to confirm there are no errors.',
                  },
                  {
                    step: 'Build external brand mentions systematically',
                    detail:
                      'List your business on Clutch, DesignRush, Crunchbase, and Google Business Profile. Contribute expert quotes to industry publications via HARO/Connectively. Publish LinkedIn articles that get indexed. Each credible external mention reinforces your brand entity in AI training data and real-time retrieval.',
                  },
                  {
                    step: 'Create and maintain your llms.txt file',
                    detail:
                      'Place a structured content map at yourdomain.com/llms.txt listing your key pages with descriptions and direct URLs. Update it whenever you publish major new content. This signals AI-readiness and gives language models explicit guidance on navigating your site.',
                  },
                ].map((item, i) => (
                  <li key={i} className="glass-card p-5 flex gap-4">
                    <span
                      className="font-syne font-bold text-xl shrink-0 w-7 leading-none pt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #00A8FF, #00FF9D)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {i + 1}.
                    </span>
                    <div>
                      <strong className="text-white">{item.step}</strong>
                      <p className="text-sm mt-1">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* How to measure */}
            <section aria-labelledby="measure-heading">
              <h2 id="measure-heading" className="font-syne font-bold text-2xl text-white mb-4">
                How to Measure Your ChatGPT Citation Progress
              </h2>
              <p>
                Unlike Google, where ranking positions are easy to track, AI citation measurement requires a different approach. Here&apos;s the framework I use for APAC clients:
              </p>
              <div className="mt-5 space-y-3">
                {[
                  {
                    method: 'Manual prompt testing (weekly)',
                    detail:
                      'Ask ChatGPT, Perplexity, Claude, and Gemini your 10 target queries ("best GEO consultant in [country]", "who is [your name]?", "[your service] in [your city]"). Screenshot and document which platforms cite you and with what language.',
                  },
                  {
                    method: 'Share of AI Voice (monthly)',
                    detail:
                      'Count how many of your 10 target queries return your brand vs. competitor brands across all 4 AI platforms. Calculate: (Your Citations ÷ Total Citations) × 100 = Share of AI Voice. Track this monthly to see trajectory.',
                  },
                  {
                    method: 'Peec AI / Promptmonitor (ongoing)',
                    detail:
                      'Specialized GEO tracking tools that automatically test your brand across hundreds of AI queries and report citation frequency, sentiment, and competitor share. Useful at scale once manual testing confirms initial traction.',
                  },
                  {
                    method: 'AI referral traffic (Google Analytics)',
                    detail:
                      'Perplexity and Claude now pass referrer headers when users click through from AI responses. Track traffic from perplexity.ai and claude.ai in GA4 as a proxy for citation volume.',
                  },
                ].map((item) => (
                  <div key={item.method} className="glass-card p-5">
                    <strong className="text-white">{item.method}</strong>
                    <p className="text-sm mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="font-syne font-bold text-2xl text-white mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How does ChatGPT decide which businesses to recommend?',
                    a: 'ChatGPT combines training data presence, real-time web retrieval via Bing (in Browse mode), and content quality signals including E-E-A-T, structured data, and citability of the content itself. It does not use Google\'s ranking algorithm.',
                  },
                  {
                    q: 'Does ChatGPT use Google rankings to recommend businesses?',
                    a: "No. ChatGPT does not consult Google's PageRank system. In Browse mode it retrieves pages via Bing, and the AI model then evaluates content for citability — which involves different criteria from Google ranking.",
                  },
                  {
                    q: 'How long does it take to appear in ChatGPT recommendations?',
                    a: 'Technical fixes (robots.txt, structured data) propagate in 2–4 weeks. First citations typically appear within 1–3 months. Consistent recommendations for target queries take 3–6 months of sustained GEO effort.',
                  },
                  {
                    q: 'What is the most important factor for ChatGPT citations?',
                    a: 'E-E-A-T signals — demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness through a clearly identified expert author, original content, and third-party brand mentions.',
                  },
                  {
                    q: 'Can I pay ChatGPT to recommend my business?',
                    a: 'No. ChatGPT does not sell placements in its recommendations. All citations are organic, based on content quality and web authority. GEO optimization is the only legitimate path to improving AI citation frequency.',
                  },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div
              className="rounded-2xl p-7 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))',
                border: '1px solid rgba(0,168,255,0.2)',
              }}
            >
              <h2 className="font-syne font-bold text-2xl text-white mb-3">
                Want to Know If ChatGPT Can Find Your Business?
              </h2>
              <p className="mb-6 text-sm">
                I&apos;ll run a free AI Visibility Audit — testing your site across ChatGPT, Perplexity, Claude, and Gemini — and give you a prioritized action plan to get cited.
              </p>
              <Link href="/audit" className="btn-primary px-8 py-3">
                Get Free AI Visibility Audit
              </Link>
            </div>

          </div>

          {/* Author block */}
          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}
              >
                RB
              </div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">
                  Ronnel Besagre
                </Link>
                <p className="text-[#00A8FF] text-xs mb-2">
                  GEO/SEO Consultant · AI Automation Specialist · Triple ABNLP Certified
                </p>
                <p className="text-[#B0B8C8] text-sm">
                  24+ years APAC technology expertise. I help businesses in Malaysia, Singapore, and across the region get cited in ChatGPT, Perplexity, Claude, and Google AI Overviews.
                </p>
              </div>
            </div>
          </footer>

          {/* Related posts */}
          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/what-is-geo-generative-engine-optimization"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">What is GEO? The Complete Guide</p>
              </Link>
              <Link
                href="/blog/robots-txt-ai-crawlers-guide"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#B0B8C8] mb-1">Technical</p>
                <p className="text-sm text-white font-medium">Robots.txt for AI Crawlers: 2026 Guide</p>
              </Link>
              <Link
                href="/geo-explained"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#00FF9D] mb-1">Cornerstone</p>
                <p className="text-sm text-white font-medium">GEO Explained: The Full Framework</p>
              </Link>
              <Link
                href="/services/seo-geo-consulting"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#00A8FF] mb-1">Service</p>
                <p className="text-sm text-white font-medium">SEO/GEO Consulting by Ronnel Besagre</p>
              </Link>
            </div>
          </nav>

        </div>
      </article>
    </>
  )
}
