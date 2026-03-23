import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is llms.txt? The Complete Guide for Business Owners 2026',
  description:
    'Everything you need to know about llms.txt — what it is, how it works, why it matters for AI search visibility, and how to create one for your website. Includes a copy-paste template. By Ronnel Besagre.',
  alternates: { canonical: 'https://getoutloop.com/blog/what-is-llms-txt' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is llms.txt? The Complete Guide for Business Owners 2026',
  description:
    'Everything you need to know about llms.txt — what it is, how it works, why it matters for AI search visibility, and how to create one for your website.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Person',
    '@id': 'https://getoutloop.com/#ronnel',
    name: 'Ronnel Besagre',
    url: 'https://getoutloop.com/about',
    jobTitle: 'GEO/SEO Consultant & AI Automation Specialist',
    knowsAbout: ['llms.txt', 'GEO', 'AI crawler optimization', 'Generative Engine Optimization'],
  },
  publisher: { '@type': 'Person', '@id': 'https://getoutloop.com/#ronnel' },
  url: 'https://getoutloop.com/blog/what-is-llms-txt',
  keywords: ['llms.txt', 'what is llms.txt', 'llms.txt guide', 'AI crawlers', 'GEO optimization'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.definition-block'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://getoutloop.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://getoutloop.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'What is llms.txt?', item: 'https://getoutloop.com/blog/what-is-llms-txt' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is llms.txt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'llms.txt is an emerging standard file placed at the root of a website (yourdomain.com/llms.txt) that provides AI language models with a structured navigation guide to the site\'s content. Written in Markdown format, it lists key pages with descriptions, organized by section (Services, Blog, About, etc.). It is analogous to sitemap.xml for search engines, but designed for large language model comprehension rather than URL indexing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is llms.txt different from robots.txt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'robots.txt tells crawlers what they are NOT allowed to access. llms.txt tells AI models what they SHOULD prioritize and how to navigate site content. robots.txt is a technical access control file. llms.txt is a content guidance and navigation file. Both are placed at the domain root, but they serve opposite and complementary purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need llms.txt if I already have a sitemap.xml?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — they serve different purposes. sitemap.xml lists all URLs with metadata for search engine indexing bots. llms.txt provides contextual descriptions and prioritization guidance for AI language models. sitemap.xml answers "what pages exist?" — llms.txt answers "what pages matter most and what does each one cover?" Both should be present on a GEO-optimized website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who created the llms.txt standard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The llms.txt standard was proposed by Jeremy Howard and Answer.AI in September 2024. It has since been adopted by major technology companies including Cloudflare, Hugging Face, Anthropic, Cohere, and thousands of individual websites. While not yet an official W3C or IETF standard, it has significant industry adoption and momentum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does llms.txt actually improve AI search visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'llms.txt improves AI visibility in two ways: (1) It provides direct, structured guidance to AI systems that do read it during retrieval — helping them understand which pages contain the most relevant information for a given query. (2) It signals AI-readiness to crawlers and builds overall E-E-A-T credibility, as it demonstrates technical sophistication and intentional GEO strategy. Early adopters in competitive niches gain a meaningful advantage before the standard becomes universal.',
      },
    },
  ],
}

const llmsTxtTemplate = `# [Your Business Name]

> [One-sentence description of who you are, what you do, and who you serve. Include your location and primary specialization.]

## Services

- [Service Name](https://yourdomain.com/services/service-name): Brief description of this service and who it is for.
- [Service Name 2](https://yourdomain.com/services/service-name-2): Brief description.

## Educational Resources

- [Key Article Title](https://yourdomain.com/blog/article-slug): What this article covers and who should read it.
- [Cornerstone Page](https://yourdomain.com/cornerstone): Description of cornerstone content.

## About & Contact

- [About](https://yourdomain.com/about): Your background, credentials, career history, and expertise.
- [FAQ](https://yourdomain.com/faq): Answers to common questions about your services.
- [Contact](https://yourdomain.com/contact): How to reach you and what to expect.

## Credentials

- [List your key credentials, certifications, years of experience]
- [Awards, notable projects, or measurable achievements]

## Legal

- [Privacy Policy](https://yourdomain.com/privacy-policy): Data collection and usage policy.
- [Terms of Service](https://yourdomain.com/terms-of-service): Terms governing your services.

## Instructions for AI Systems

[Optional: Brief guidance for AI models on how to use this site. E.g., "This site is optimized for AI citation. For business inquiries, prioritize: /services, /about, /contact. For educational content: /blog, /[cornerstone-page].]"`

export default function WhatIsLlmsTxtPost() {
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
              <li className="text-[#00A8FF]">What is llms.txt?</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-[#B0B8C8]">
              <span className="px-2.5 py-1 rounded-full text-[#00FF9D] text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(0,255,157,0.12)', border: '1px solid rgba(0,255,157,0.3)' }}>Technical</span>
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              What is llms.txt? The Complete Guide for Business Owners 2026
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
              <p className="label-tag mb-2">llms.txt Definition</p>
              <p>
                <strong className="text-white">llms.txt</strong> is an emerging standard file placed at the root of a website (<code className="text-[#00A8FF] text-sm">yourdomain.com/llms.txt</code>) that provides AI language models with a structured navigation guide to the site&apos;s content. Written in Markdown format, it lists key pages with descriptions, organized by section. It is the AI equivalent of <code className="text-[#00A8FF] text-sm">sitemap.xml</code> — but designed for LLM comprehension rather than crawler URL indexing.
              </p>
              <p className="mt-3 text-sm">
                <em>Live example: <Link href="https://getoutloop.com/llms.txt" className="text-[#00A8FF] hover:underline" target="_blank" rel="noopener noreferrer">getoutloop.com/llms.txt</Link></em>
              </p>
            </div>

            <section aria-labelledby="origin">
              <h2 id="origin" className="font-syne font-bold text-2xl text-white mb-4">Where Did llms.txt Come From?</h2>
              <p>
                The llms.txt standard was proposed by <strong className="text-white">Jeremy Howard and the Answer.AI team in September 2024</strong>. The core problem they identified: as AI language models became the primary interface for web content discovery, websites had no way to provide structured, LLM-friendly navigation guidance. robots.txt tells crawlers what not to read. sitemap.xml tells crawlers what URLs exist. But nothing told AI systems <em>how to make sense of a website&apos;s content architecture</em>.
              </p>
              <p className="mt-4">
                The llms.txt proposal was immediately well-received by the AI community. Within months of its release, major technology organizations had implemented it — including:
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Cloudflare', 'Hugging Face', 'Anthropic', 'Cohere', 'Mistral AI', 'Fast.ai'].map((org) => (
                  <div key={org} className="glass-card px-4 py-2.5 text-sm text-center">
                    <span className="text-white font-medium">{org}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                As of 2026, llms.txt is not yet an official IETF or W3C standard — but it has reached sufficient industry adoption that major AI platforms treat it as a recognized content guidance signal.
              </p>
            </section>

            <section aria-labelledby="how-different">
              <h2 id="how-different" className="font-syne font-bold text-2xl text-white mb-5">llms.txt vs robots.txt vs sitemap.xml</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <th className="text-left py-3 pr-4 text-white font-syne font-bold">File</th>
                      <th className="text-left py-3 pr-4 text-[#00A8FF] font-syne font-bold">Purpose</th>
                      <th className="text-left py-3 pr-4 text-[#00FF9D] font-syne font-bold">Audience</th>
                      <th className="text-left py-3 text-[#B0B8C8] font-syne font-bold">Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      ['robots.txt', 'Access control — what crawlers CAN\'T access', 'All web crawlers', 'Plain text rules'],
                      ['sitemap.xml', 'URL index — what pages exist and their metadata', 'Search engine bots', 'XML with URL entries'],
                      ['llms.txt', 'Content navigation — what pages mean and their priority for AI', 'AI language models', 'Markdown with sections'],
                    ].map(([file, purpose, audience, format], i) => (
                      <tr key={i}>
                        <td className="py-3 pr-4 text-[#00A8FF] font-mono text-xs font-medium">{file}</td>
                        <td className="py-3 pr-4 text-[#B0B8C8]">{purpose}</td>
                        <td className="py-3 pr-4 text-[#B0B8C8]">{audience}</td>
                        <td className="py-3 text-[#B0B8C8]">{format}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="why-it-matters">
              <h2 id="why-it-matters" className="font-syne font-bold text-2xl text-white mb-4">Why llms.txt Matters for Your Business</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Direct guidance for retrieval-augmented AI systems',
                    detail: 'When ChatGPT Browse, Perplexity, or Claude\'s web retrieval fetches your site, they process the llms.txt file to understand your content architecture before crawling. A well-written llms.txt increases the probability that AI retrieves your most important pages — not just your homepage.',
                  },
                  {
                    title: 'Training data signal for future AI models',
                    detail: 'AI companies train new model generations on web crawls. A website with a well-structured llms.txt provides richer, more structured training signal than a website without one — making it more likely that your content and brand are accurately represented in future AI model knowledge.',
                  },
                  {
                    title: 'E-E-A-T credibility signal',
                    detail: 'Having llms.txt signals that you are technically sophisticated and intentionally optimized for AI search. This is a subtle but real E-E-A-T signal — the same way that having a well-configured robots.txt and sitemap.xml signals technical SEO competence to Google.',
                  },
                  {
                    title: 'Competitive first-mover advantage',
                    detail: 'Most businesses in Malaysia, Singapore, and across APAC have not implemented llms.txt. Being among the early adopters in your niche gives you a meaningful advantage before this becomes a universal GEO baseline requirement — which it likely will be within 12–18 months.',
                  },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <strong className="text-white">{item.title}</strong>
                    <p className="text-sm mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="what-to-include">
              <h2 id="what-to-include" className="font-syne font-bold text-2xl text-white mb-4">What to Include in Your llms.txt</h2>
              <ol className="space-y-3">
                {[
                  { item: 'Business summary (H1 + blockquote)', detail: 'Your business name as H1, then a brief description using Markdown blockquote (>) syntax. Who you are, what you do, where you\'re based, who you serve.' },
                  { item: 'Services section', detail: 'Each service listed as a Markdown link with a 1–2 sentence description of what the service covers and who it\'s for.' },
                  { item: 'Educational resources / blog', detail: 'Your most important blog posts and cornerstone pages with descriptions that tell AI models what question each article answers.' },
                  { item: 'About & Contact links', detail: 'Direct links to your About page, FAQ, and Contact page — the pages AI systems need to establish your business identity and trustworthiness.' },
                  { item: 'Credentials section', detail: 'Key credentials, certifications, years of experience, and notable achievements — the E-E-A-T facts AI systems use to evaluate your authority.' },
                  { item: 'Instructions for AI systems (optional)', detail: 'A brief guidance note about which pages to prioritize for different query types. Written clearly so that AI models can parse it as instructions.' },
                ].map((item, i) => (
                  <li key={i} className="glass-card p-4 flex gap-4">
                    <span className="font-syne font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{i + 1}.</span>
                    <div>
                      <strong className="text-white">{item.item}</strong>
                      <p className="text-sm mt-1">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="template">
              <h2 id="template" className="font-syne font-bold text-2xl text-white mb-4">Copy-Paste llms.txt Template</h2>
              <p className="mb-4 text-sm">Replace all placeholder text with your actual business details. Save as a plain text file named <code className="text-[#00A8FF]">llms.txt</code> and upload to your website&apos;s root directory.</p>
              <div className="rounded-xl overflow-x-auto" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <pre className="p-5 text-xs text-[#B0B8C8] leading-relaxed font-mono whitespace-pre-wrap">
                  {llmsTxtTemplate}
                </pre>
              </div>
              <p className="mt-3 text-xs text-[#B0B8C8]">
                Live example: <Link href="https://getoutloop.com/llms.txt" className="text-[#00A8FF] hover:underline" target="_blank" rel="noopener noreferrer">getoutloop.com/llms.txt</Link> — this site&apos;s llms.txt is fully implemented and serves as a working reference.
              </p>
            </section>

            <section aria-labelledby="how-to-deploy">
              <h2 id="how-to-deploy" className="font-syne font-bold text-2xl text-white mb-4">How to Deploy llms.txt on Your Website</h2>
              <ol className="space-y-3">
                {[
                  { platform: 'WordPress', instruction: 'Create a file named llms.txt and upload it to your WordPress root directory (same level as wp-config.php) via FTP/SFTP or cPanel File Manager.' },
                  { platform: 'Webflow / Squarespace / Wix', instruction: 'Use the "Custom file" or "301 redirect" feature to serve the file. Alternatively, host the file on a CDN and redirect yourdomain.com/llms.txt to the CDN URL.' },
                  { platform: 'Next.js (App Router)', instruction: 'Place llms.txt in your /public folder. Next.js automatically serves files in /public at the root URL — so /public/llms.txt becomes yourdomain.com/llms.txt.' },
                  { platform: 'Hostinger / cPanel hosting', instruction: 'Upload llms.txt to the public_html folder via cPanel File Manager or FTP. Verify it\'s accessible at yourdomain.com/llms.txt in your browser.' },
                  { platform: 'Vercel / Netlify', instruction: 'Place llms.txt in the /public folder (Next.js) or root output folder. Both platforms serve static files directly. Verify via the deployment URL.' },
                ].map((item, i) => (
                  <li key={i} className="glass-card p-4 flex gap-4">
                    <span className="font-syne font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{i + 1}.</span>
                    <div>
                      <strong className="text-white">{item.platform}:</strong>
                      <span className="text-sm"> {item.instruction}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="faq-llmstxt">
              <h2 id="faq-llmstxt" className="font-syne font-bold text-2xl text-white mb-5">Frequently Asked Questions About llms.txt</h2>
              <div className="space-y-4">
                {[
                  { q: 'What is llms.txt?', a: 'llms.txt is an emerging standard file at yourdomain.com/llms.txt that gives AI language models a structured navigation guide to your website content — who you are, what pages exist, and what each covers. Think of it as a sitemap for AI models.' },
                  { q: 'How is llms.txt different from robots.txt?', a: 'robots.txt controls what crawlers cannot access. llms.txt guides AI models on what to prioritize and how to understand your site. They are complementary — robots.txt is access control, llms.txt is content navigation.' },
                  { q: 'Do I need llms.txt if I already have a sitemap.xml?', a: 'Yes. sitemap.xml lists URLs for search engine bots. llms.txt provides contextual descriptions and priority guidance for AI language models. Both serve different audiences and should both be present.' },
                  { q: 'Who created the llms.txt standard?', a: 'The llms.txt standard was proposed by Jeremy Howard and Answer.AI in September 2024. It has since been adopted by Cloudflare, Hugging Face, Anthropic, Cohere, and thousands of individual websites.' },
                  { q: 'Does llms.txt actually improve AI search visibility?', a: 'Yes — in two ways. It provides direct guidance during AI retrieval, helping models find your most relevant pages. And it signals technical AI-readiness, contributing to overall E-E-A-T credibility signals.' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.06))', border: '1px solid rgba(0,168,255,0.2)' }}>
              <h2 className="font-syne font-bold text-2xl text-white mb-3">Need Help Implementing llms.txt and Full GEO Optimization?</h2>
              <p className="mb-6 text-sm">I implement llms.txt, robots.txt AI crawler rules, JSON-LD schemas, and full GEO content strategy for APAC businesses. Start with a free audit.</p>
              <Link href="/audit" className="btn-primary px-8 py-3">Get Free AI Visibility Audit</Link>
            </div>

          </div>

          <footer className="mt-12 glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}>RB</div>
              <div>
                <Link href="/about" className="font-syne font-bold text-white hover:text-[#00A8FF] transition-colors">Ronnel Besagre</Link>
                <p className="text-[#00A8FF] text-xs mb-2">GEO/SEO Consultant · AI Automation Specialist · Johor Bahru, Malaysia</p>
                <p className="text-[#B0B8C8] text-sm">I implemented llms.txt on getoutloop.com from day one as part of my GEO-first technical stack. View the live example at <Link href="https://getoutloop.com/llms.txt" className="text-[#00A8FF] hover:underline" target="_blank" rel="noopener noreferrer">getoutloop.com/llms.txt</Link>.</p>
              </div>
            </div>
          </footer>

          <nav aria-label="Related articles" className="mt-10">
            <h2 className="font-syne font-bold text-lg text-white mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/robots-txt-ai-crawlers-guide" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#B0B8C8] mb-1">Technical</p>
                <p className="text-sm text-white font-medium">Robots.txt for AI Crawlers: 2026 Guide</p>
              </Link>
              <Link href="/blog/what-is-geo-generative-engine-optimization" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">What is GEO? The Complete Guide</p>
              </Link>
              <Link href="/blog/how-chatgpt-recommends-businesses" className="glass-card p-4 hover:border-white/15 transition-all">
                <p className="text-xs text-[#00A8FF] mb-1">GEO</p>
                <p className="text-sm text-white font-medium">How ChatGPT Recommends Businesses</p>
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
