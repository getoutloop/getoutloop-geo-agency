import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — GEO & AI Search Visibility Questions Answered | GetOutLoop',
  description: 'Answers to common questions about GEO, AI search visibility, our audit process, pricing, and timelines — answered by the GetOutLoop team.',
  alternates: { canonical: 'https://getoutloop.com/faq' },
}

const faqCategories = [
  {
    category: 'About GEO',
    faqs: [
      { q: 'What is GEO (Generative Engine Optimization)?', a: 'GEO is the practice of optimizing your website and content so that AI-powered platforms like ChatGPT, Perplexity, Claude, and Google Gemini can retrieve, understand, and cite your business in their AI-generated responses. Unlike traditional SEO which targets Google\'s ranking algorithm, GEO targets AI models\' citation and retrieval systems.' },
      { q: 'What is the difference between SEO, GEO, and AEO?', a: 'SEO (Search Engine Optimization) optimizes for Google\'s blue-link results. GEO (Generative Engine Optimization) optimizes for citations in AI-generated answers from platforms like ChatGPT and Perplexity. AEO (Answer Engine Optimization) optimizes for featured snippets and position-zero results. All three are complementary strategies for maximum search visibility.' },
      { q: 'What is Share of AI Voice?', a: 'Share of AI Voice (SAV) is the GEO equivalent of Share of Voice in traditional marketing. It measures what percentage of relevant AI-generated responses mention your brand vs. competitors. It is the primary KPI for GEO performance.' },
      { q: 'What AI platforms does GEO target?', a: 'GetOutLoop\'s GEO audits target: ChatGPT (OpenAI), Perplexity AI, Claude (Anthropic), Google AI Overviews (Gemini), Microsoft Copilot (Bing), and Apple Intelligence. Each platform has different citation criteria.' },
      { q: 'What is llms.txt?', a: 'llms.txt is an emerging standard file (at yourdomain.com/llms.txt) that provides AI crawlers with a structured content map of your website — similar to sitemap.xml but designed for LLM comprehension. It lists your key pages, describes your business, and instructs AI systems on how to interpret your content.' },
    ],
  },
  {
    category: 'Our Services',
    faqs: [
      { q: 'What does the free GEO audit include?', a: 'The free audit includes: your overall GEO score (0–100), your top 5 critical issues with severity ratings, and a plain-English explanation of what each issue means for your business. Delivered by email within 24 hours. No PDF, no fix guides, no credit card.' },
      { q: 'What is included in GEO PRO?', a: 'GEO PRO ($120/site/month) includes: a full 8-section PDF report covering all audit dimensions, a complete issue list with severity ratings (Critical/High/Medium/Low), a priority action matrix, and a monthly re-audit. It tells you what is missing but not the specific code to fix it.' },
      { q: 'What is included in GEO Complete?', a: 'GEO Complete ($480/site/month) includes everything in GEO PRO plus: guided fix guides with copy-paste code, schema implementation templates, monthly monitoring and re-audit, and one strategy call per month with Ronnel Besagre.' },
      { q: 'Do you audit competitor sites as part of the service?', a: 'Yes. GEO PRO and Complete include Dimension 8 — Competitor Citation Gap Analysis. We identify which competitors are being cited by AI platforms for your target keywords and what signals they have that you are missing.' },
      { q: 'Can I use the audit results to brief my own developer?', a: 'Yes — GEO Free and GEO PRO are designed as briefing documents. They identify what is wrong and why it matters, which is everything a developer or content team needs to implement fixes. GEO Complete provides the actual code so no developer interpretation is needed.' },
    ],
  },
  {
    category: 'Process & Timeline',
    faqs: [
      { q: 'How long does GEO optimization take to show results?', a: 'Technical improvements (robots.txt, schema, llms.txt) typically take effect within 2–4 weeks as AI crawlers re-index your site. Consistent AI citations in Perplexity usually appear within 4–8 weeks. ChatGPT and Claude citations depend on training cycles and can take 3–9 months.' },
      { q: 'How is the audit delivered?', a: 'Free tier: by email within 24 hours. PRO and Complete tiers: PDF report by email within 48 hours, plus a link to your report saved on Google Drive.' },
      { q: 'Do I need to install anything or give you site access?', a: 'No. Our audit analyzes your publicly accessible website — we don\'t need CMS access, FTP credentials, or any site-level permissions. We audit what AI crawlers see.' },
      { q: 'How often should I re-audit my GEO score?', a: 'We recommend quarterly re-audits at minimum. GEO PRO and Complete include monthly re-audits. The AI search landscape changes rapidly — what worked 3 months ago may need updating as AI platforms evolve their citation criteria.' },
      { q: 'What happens after I receive my audit?', a: 'You receive a prioritized action plan. GEO Free: implement fixes yourself using the issue list. GEO PRO: brief your developer. GEO Complete: use the provided code directly. After implementing fixes, request a re-audit to track your improved score.' },
    ],
  },
  {
    category: 'Pricing & Coverage',
    faqs: [
      { q: 'Is the free audit really free?', a: 'Yes — completely free, no credit card, no commitment. We offer it because it demonstrates our methodology and builds trust. Many clients start free and upgrade to PRO or Complete after seeing the value of the report.' },
      { q: 'Do you offer annual pricing?', a: 'Yes. Contact us for annual billing: Annual PRO is $1,080/yr (save $360 vs monthly). Annual Complete is $4,320/yr (save $1,440). Email support@getoutloop.com to arrange.' },
      { q: 'Do you serve clients outside Malaysia?', a: 'Yes. GetOutLoop serves clients globally. We work fully remote and have served clients in Singapore, Philippines, Australia, and the USA. Time zones are not a barrier.' },
      { q: 'What industries do you work with?', a: 'GEO is industry-agnostic. The 8-dimension audit framework applies to any business with a website — SaaS, professional services, e-commerce, healthcare, hospitality, education, and more. If AI is being used to discover your industry, GEO matters.' },
      { q: 'What if I\'m not satisfied with the audit quality?', a: 'We stand behind our work. If you believe the audit missed something significant or the score is inaccurate, contact us and we will review and revise it. Your email: support@getoutloop.com.' },
    ],
  },
]

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      }))
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27' }}>
        <div className="section-container max-w-3xl mx-auto text-center mb-14">
          <div className="label-tag mb-3">FAQ</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-lg">Everything you need to know about GEO, our services, and AI search visibility.</p>
        </div>

        <div className="section-container max-w-3xl mx-auto space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-syne font-bold text-xl text-electric mb-5 pb-3"
                style={{ borderBottom: '1px solid rgba(0,168,255,0.2)' }}>
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.faqs.map((f) => (
                  <div key={f.q} className="glass-card p-6">
                    <h3 className="font-syne font-semibold text-white mb-2">{f.q}</h3>
                    <p className="text-muted text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0D1429' }}>
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-white mb-4">Still have questions?</h2>
          <p className="text-muted mb-8">Email us at <a href="mailto:support@getoutloop.com" className="text-electric hover:underline">support@getoutloop.com</a> or start with a free audit.</p>
          <Link href="/audit" className="btn-primary px-8 py-3.5">Get Free GEO Audit</Link>
        </div>
      </section>
    </>
  )
}
