import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Why Your Business Doesn't Appear in ChatGPT — And How to Fix It",
  description:
    "Discover the 8 most common reasons businesses are invisible to ChatGPT, Perplexity, and Gemini — and the exact GEO fixes to get cited in AI-generated recommendations.",
  alternates: { canonical: 'https://getoutloop.com/blog/why-business-not-appearing-chatgpt' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why Your Business Doesn't Appear in ChatGPT — And How to Fix It",
  description:
    'The 8 most common reasons businesses are invisible to ChatGPT, Perplexity, and Gemini — and the exact GEO fixes to get cited.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/#ronnel',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
  },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/why-business-not-appearing-chatgpt',
  keywords: [
    'business not appearing in ChatGPT',
    'why am I not in ChatGPT',
    'AI search visibility',
    'GEO optimization fix',
    'ChatGPT business citation',
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
      name: "Why Business Not Appearing in ChatGPT",
      item: 'https://getoutloop.com/blog/why-business-not-appearing-chatgpt',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Why doesn't my business appear in ChatGPT results?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common reasons are: (1) your website blocks AI crawlers in robots.txt, (2) your site is client-side rendered (JavaScript SPA) so crawlers see an empty page, (3) your content lacks structured data (JSON-LD schemas), (4) you have weak E-E-A-T signals — no author credentials, thin About page, no third-party brand mentions, and (5) your content isn't structured for citability — no definition blocks, comparison tables, or FAQ sections.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check if ChatGPT can see my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Check three things: (1) Visit yourdomain.com/robots.txt and look for GPTBot rules — if it's blocked or missing, ChatGPT Browse can't access your site. (2) View your website source code (Ctrl+U in browser) — if you see an empty <div id='root'> or <div id='app'> with no content, your site is CSR and invisible to AI crawlers. (3) Use Google's Rich Results Test on your homepage — if schemas aren't detected, AI systems can't read your entity data.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does having a Google ranking guarantee ChatGPT visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Google rankings and ChatGPT citations use completely different criteria. A business can rank #1 on Google and be completely absent from ChatGPT recommendations. Google uses PageRank (backlinks, CTR, keyword relevance). ChatGPT uses training data presence, E-E-A-T signals, content citability, and structured data — none of which are the same as Google ranking factors.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to fix ChatGPT visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Technical fixes (robots.txt, JSON-LD schemas, llms.txt) can be implemented in 1–3 days and are crawled within 2–4 weeks. Content optimization (adding definition blocks, FAQ sections, comparison tables) takes 1–2 weeks to complete across your site. First sporadic ChatGPT citations typically appear within 1–3 months. Consistent, reliable citations for target queries take 3–6 months.",
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    severity: 'CRITICAL',
    severityColor: '#FF4444',
    title: 'AI Crawlers Are Blocked in Your robots.txt',
    symptom: 'ChatGPT Browse mode retrieves content via Bing, using the GPTBot user agent. If your robots.txt blocks GPTBot — or if GPTBot simply isn\'t mentioned — ChatGPT can\'t crawl your site at all.',
    howToCheck: 'Visit yourdomain.com/robots.txt. Look for lines starting with "User-agent: GPTBot". If you see "Disallow: /" or nothing at all, you\'re blocked.',
    fix: 'Add explicit Allow rules: User-agent: GPTBot\\nAllow: /\\n\\nUser-agent: ClaudeBot\\nAllow: /\\n\\nUser-agent: PerplexityBot\\nAllow: /\\n\\nUser-agent: Google-Extended\\nAllow: /',
    timeToFix: '30 minutes',
  },
  {
    number: '02',
    severity: 'CRITICAL',
    severityColor: '#FF4444',
    title: 'Your Website Is Client-Side Rendered (JavaScript SPA)',
    symptom: 'If your website was built with React, Vue, or Angular as a single-page app (SPA) without server-side rendering, AI crawlers receive an empty HTML shell — a blank <div id="root"> with no content. Every word on your website is invisible to ChatGPT, Perplexity, and Claude.',
    howToCheck: 'Press Ctrl+U (or Cmd+U on Mac) in your browser to view page source. If you see an empty <div id="root"> or <div id="app"> with no actual text content between the tags, your site is CSR.',
    fix: 'Migrate to Next.js with static export (SSG), Astro, Gatsby, or any server-rendered framework. This is the highest-impact change you can make for AI visibility. It also significantly improves Google rankings.',
    timeToFix: '1–2 weeks (migration required)',
  },
  {
    number: '03',
    severity: 'HIGH',
    severityColor: '#FF8C00',
    title: 'No Structured Data (JSON-LD Schemas)',
    symptom: "Without JSON-LD schemas, AI systems must guess your business identity, services, and content type from raw text. This guesswork is unreliable. Your competitors with proper Organization, Person, Service, and FAQPage schemas get preferential treatment because the AI model can extract clean, structured facts.",
    howToCheck: 'Visit Google\'s Rich Results Test (search.google.com/test/rich-results) and enter your homepage URL. If no schemas are detected, you have zero structured data.',
    fix: 'Implement at minimum: Organization or Person schema in your site-wide layout, Service schema on each service page, Article schema on blog posts, FAQPage schema on FAQ and educational pages, and BreadcrumbList on inner pages.',
    timeToFix: '2–5 days',
  },
  {
    number: '04',
    severity: 'HIGH',
    severityColor: '#FF8C00',
    title: 'Weak or Missing E-E-A-T Signals',
    symptom: 'AI systems evaluate Experience, Expertise, Authoritativeness, and Trustworthiness before citing a source. If your website has no identifiable author with credentials, no About page with real career history, no contact information, and no third-party brand mentions, you score low on E-E-A-T — and AI systems simply won\'t cite you.',
    howToCheck: 'Ask yourself: Can a visitor (and an AI crawler) immediately identify who wrote this content, what their credentials are, and why they should be trusted? If the answer is "not clearly," you have E-E-A-T gaps.',
    fix: 'Add Person schema with hasCredential properties. Create a comprehensive About page with career timeline and credentials. Add author bylines to every article. Get listed on credible industry directories. Earn press mentions via HARO/Connectively.',
    timeToFix: '1–2 weeks',
  },
  {
    number: '05',
    severity: 'HIGH',
    severityColor: '#FF8C00',
    title: 'Content Isn\'t Structured for Citability',
    symptom: "AI systems extract content patterns that are easy to cite: definitions, statistics, comparison tables, numbered lists, and Q&A pairs. If your website is written in paragraph-heavy prose with no scannable structures, AI models have nothing clean to extract and attribute to you.",
    howToCheck: 'Read your most important service page. Does it have: (a) a 40–60 word definition of your core service, (b) a comparison table or numbered list of deliverables, (c) at least 3 FAQ pairs? If not, it has low citability.',
    fix: 'Add a definition block at the top of each key page. Add a comparison table (you vs. competitors, or service tiers). Restructure your FAQ into explicit Q&A pairs with FAQPage schema. Add statistics with cited sources.',
    timeToFix: '3–5 days per page',
  },
  {
    number: '06',
    severity: 'MEDIUM',
    severityColor: '#F0B429',
    title: 'No llms.txt File',
    symptom: 'Without an llms.txt file at yourdomain.com/llms.txt, AI systems have no structured navigation guide for your website. They must infer your content architecture from crawling alone — which is less reliable and less complete than explicit guidance.',
    howToCheck: 'Visit yourdomain.com/llms.txt in your browser. If you get a 404 error, you don\'t have one.',
    fix: 'Create an llms.txt file with your key pages listed in sections: Services, Educational Resources, About & Contact, Legal. Each entry should have the page URL and a 1–2 sentence description of what that page covers.',
    timeToFix: '2–3 hours',
  },
  {
    number: '07',
    severity: 'MEDIUM',
    severityColor: '#F0B429',
    title: 'Thin or Non-Existent Brand Mentions Across the Web',
    symptom: "AI models cross-reference brand mentions across their training data. A business that's mentioned once on its own website versus one that's discussed in 50 authoritative sources (directories, industry blogs, news articles, LinkedIn posts) has dramatically different AI citation probability. Brand authority is built externally, not just on your own site.",
    howToCheck: "Search '[your business name]' in Google. Count how many external sites (not your own domain) mention your brand. If you can count them on one hand, you have a brand authority gap.",
    fix: 'Submit to Clutch, DesignRush, Crunchbase, and Google Business Profile. Publish LinkedIn thought leadership articles. Contribute expert quotes to industry publications. Engage in relevant Reddit/Quora threads with your brand name visible in your profile.',
    timeToFix: '2–4 weeks for initial listings; ongoing',
  },
  {
    number: '08',
    severity: 'MEDIUM',
    severityColor: '#F0B429',
    title: 'Stale Content With No Freshness Signals',
    symptom: "AI systems — especially in Browse mode — favor recently updated content. Pages with no visible publication date, no dateModified schema, and content that references outdated information are deprioritized. If your website was last updated years ago, AI systems may skip it in favor of fresher sources.",
    howToCheck: 'Check your homepage and top service pages. Is there a visible "Last Updated" date? Does your schema include dateModified? Are statistics and references current (2025–2026)?',
    fix: 'Add datePublished and dateModified to your Article and WebPage schemas. Add a visible "Last Updated: [date]" label to your key pages. Update statistics and references to current data at least quarterly.',
    timeToFix: '1–2 days',
  },
]

export default function WhyNotAppearingChatGPTPost() {
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
              <li className="text-[#00A8FF]">Why Business Not Appearing in ChatGPT</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span
                className="px-2.5 py-1 rounded-full text-[#00A8FF] text-[10px] font-bold tracking-wider uppercase"
                style={{ background: 'rgba(0,168,255,0.12)', border: '1px solid rgba(0,168,255,0.3)' }}
              >
                GEO Fix
              </span>
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Why Your Business Doesn&apos;t Appear in ChatGPT — And How to Fix It
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

            {/* Key insight block */}
            <div
              className="definition-block rounded-2xl p-7"
              style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}
            >
              <p className="label-tag mb-2">The Core Problem</p>
              <p>
                <strong className="text-white">AI invisibility is not random — it is caused by specific, fixable technical and content gaps.</strong> After auditing dozens of APAC business websites, I consistently find the same 8 failure points: blocked AI crawlers, client-side rendering, missing structured data, weak E-E-A-T, low citability content, no llms.txt, thin brand authority, and stale content. Fix these and your AI visibility improves measurably within weeks.
              </p>
            </div>

            {/* Intro */}
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-syne font-bold text-2xl text-white mb-4">
                The Diagnosis: Why You&apos;re Invisible to AI
              </h2>
              <p>
                You type your business name into ChatGPT. Nothing. You ask &quot;best [your service] in [your city]&quot; — and your competitors get mentioned, but not you. It feels arbitrary, but it isn&apos;t.
              </p>
              <p className="mt-4">
                AI platforms like ChatGPT, Perplexity, Claude, and Gemini don&apos;t discover businesses the way Google does. They rely on a combination of training data, real-time web retrieval, and content quality signals that most businesses have never optimized for. The result: technically excellent businesses with great Google rankings are completely absent from AI recommendations.
              </p>
              <p className="mt-4">
                This guide identifies the 8 most common causes of AI invisibility — in order of severity — with exact diagnostic steps and fixes for each.
              </p>
            </section>

            {/* Severity legend */}
            <div className="flex flex-wrap gap-3 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#FF4444' }} />
                <span>CRITICAL — Fix immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#FF8C00' }} />
                <span>HIGH — Fix this week</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#F0B429' }} />
                <span>MEDIUM — Fix this month</span>
              </div>
            </div>

            {/* 8 Reasons */}
            <section aria-labelledby="reasons-heading">
              <h2 id="reasons-heading" className="font-syne font-bold text-2xl text-white mb-6">
                The 8 Reasons Your Business Is Invisible to ChatGPT
              </h2>
              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div
                    key={reason.number}
                    className="glass-card p-6 space-y-4"
                    style={{ borderLeft: `3px solid ${reason.severityColor}` }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-start gap-3">
                        <span
                          className="font-syne font-bold text-2xl shrink-0 leading-none"
                          style={{
                            background: 'linear-gradient(135deg, #00A8FF, #00FF9D)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {reason.number}
                        </span>
                        <h3 className="font-syne font-bold text-lg text-white leading-tight">{reason.title}</h3>
                      </div>
                      <span
                        className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0"
                        style={{
                          background: `${reason.severityColor}18`,
                          color: reason.severityColor,
                          border: `1px solid ${reason.severityColor}30`,
                        }}
                      >
                        {reason.severity}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#B0B8C8] uppercase tracking-wide text-[10px] mb-1">What&apos;s Happening</p>
                      <p className="text-sm">{reason.symptom}</p>
                    </div>

                    <div
                      className="text-sm px-4 py-3 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <strong className="text-[#B0B8C8] text-[10px] uppercase tracking-wide">How to Check: </strong>
                      <span className="text-[#B0B8C8]">{reason.howToCheck}</span>
                    </div>

                    <div
                      className="text-sm px-4 py-3 rounded-lg"
                      style={{ background: 'rgba(0,255,157,0.06)', border: '1px solid rgba(0,255,157,0.2)' }}
                    >
                      <strong className="text-[#00FF9D]">Fix: </strong>
                      <span>{reason.fix}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#B0B8C8]">
                      <span className="text-[#00A8FF]">⏱</span>
                      <span>Estimated fix time: <strong className="text-white">{reason.timeToFix}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Priority order */}
            <section aria-labelledby="priority-order">
              <h2 id="priority-order" className="font-syne font-bold text-2xl text-white mb-4">
                Your Priority Fix Order
              </h2>
              <p>
                Don&apos;t try to fix everything at once. Work through these in order — the first two issues alone account for the majority of AI invisibility cases I see across APAC clients.
              </p>
              <ol className="mt-5 space-y-3">
                {[
                  { label: 'Fix robots.txt to allow AI crawlers', time: '30 min' },
                  { label: 'Migrate to server-side rendering if on a CSR SPA', time: '1–2 weeks' },
                  { label: 'Implement JSON-LD schemas (Person/Org, Service, FAQPage)', time: '2–5 days' },
                  { label: 'Build E-E-A-T signals (author markup, About page, credentials)', time: '1–2 weeks' },
                  { label: 'Add citation-optimized content structures (definitions, tables, FAQs)', time: '3–5 days/page' },
                  { label: 'Create llms.txt at yourdomain.com/llms.txt', time: '2–3 hours' },
                  { label: 'Build external brand mentions (directories, press, LinkedIn)', time: 'Ongoing' },
                  { label: 'Add dateModified schema and freshness signals', time: '1–2 days' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between glass-card px-4 py-3 gap-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="font-syne font-bold shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #00A8FF, #00FF9D)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-xs text-[#00A8FF] shrink-0 font-medium">{item.time}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Self-audit checklist */}
            <section aria-labelledby="checklist-heading">
              <h2 id="checklist-heading" className="font-syne font-bold text-2xl text-white mb-4">
                Quick Self-Audit Checklist
              </h2>
              <p className="mb-5 text-sm">
                Run through these 10 checks right now. Each &quot;no&quot; is a fixable AI visibility gap:
              </p>
              <div className="space-y-2">
                {[
                  'yourdomain.com/robots.txt allows GPTBot, ClaudeBot, and PerplexityBot',
                  'Page source (Ctrl+U) shows real HTML content — not an empty <div id="root">',
                  'Google Rich Results Test detects schemas on your homepage',
                  'Your site has an About page with a career timeline and credentials',
                  'Every blog post has an author byline with the author\'s credentials',
                  'yourdomain.com/llms.txt returns a 200 response (not 404)',
                  'Your homepage has a clear definition of what you do in the first 200 words',
                  'At least one key page has a FAQ section with 5+ Q&A pairs',
                  'Your business appears in at least 5 external directories or publications',
                  'Key pages show a visible "Last Updated" date and have dateModified schema',
                ].map((check, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 glass-card px-4 py-3 text-sm"
                  >
                    <span className="text-[#00A8FF] shrink-0 font-bold mt-0.5">☐</span>
                    <span>{check}</span>
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
                    q: "Why doesn't my business appear in ChatGPT results?",
                    a: "The most common causes are: blocked AI crawlers in robots.txt, a client-side rendered website that shows blank HTML to crawlers, missing structured data schemas, weak E-E-A-T signals, and content not structured for citability. Most businesses have 3–4 of these issues simultaneously.",
                  },
                  {
                    q: 'How do I check if ChatGPT can see my website?',
                    a: "Check robots.txt for GPTBot rules, view your page source for empty JavaScript shells, and use Google's Rich Results Test to verify schema detection. All three checks together give you a complete picture of your AI crawlability.",
                  },
                  {
                    q: 'Does having a Google ranking guarantee ChatGPT visibility?',
                    a: "No. Google rankings and ChatGPT citations use completely different criteria. Many businesses rank well in Google but are invisible to ChatGPT because they haven't optimized for AI-specific citability signals.",
                  },
                  {
                    q: 'How long does it take to fix ChatGPT visibility?',
                    a: "Technical fixes (robots.txt, schemas, llms.txt) propagate in 2–4 weeks. First ChatGPT citations typically appear within 1–3 months. Consistent citations take 3–6 months of sustained GEO effort.",
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
                Want to Know Exactly Why You&apos;re Missing from ChatGPT?
              </h2>
              <p className="mb-6 text-sm">
                I&apos;ll run a free AI Visibility Audit — checking all 8 failure points against your site and giving you a prioritized fix plan with time estimates.
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
                  24+ years APAC technology expertise. I audit businesses across Malaysia, Singapore, and the Philippines for AI search visibility — and build the fixes that get them cited.
                </p>
              </div>
            </div>
          </footer>

          {/* Related posts */}
          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/how-chatgpt-recommends-businesses"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">How ChatGPT Decides Which Businesses to Recommend</p>
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
                href="/contact"
                className="glass-card p-4 hover:border-white/15 transition-all"
              >
                <p className="text-xs text-[#00A8FF] mb-1">Free Audit</p>
                <p className="text-sm text-white font-medium">Get Your Free AI Visibility Audit</p>
              </Link>
            </div>
          </nav>

        </div>
      </article>
    </>
  )
}
