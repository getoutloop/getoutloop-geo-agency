import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | GEO & AI Search Visibility Insights | GetOutLoop',
  description:
    'Expert insights on GEO, SEO, and AI search visibility from the GetOutLoop team — practical guides for businesses that want to get cited by ChatGPT, Perplexity, and Gemini.',
  alternates: { canonical: 'https://getoutloop.com/blog' },
}

const posts = [
  {
    slug: 'best-geo-agency-singapore-2026',
    category: 'Singapore',
    categoryColor: '#00A8FF',
    title: 'Best GEO Agency Singapore 2026 — AI Search Visibility Specialists',
    excerpt:
      'Singapore has Southeast Asia\'s highest AI tool adoption. When buyers use ChatGPT or Perplexity to find vendors, which businesses appear? A complete guide to GEO for Singapore businesses.',
    date: 'April 6, 2026',
    dateTime: '2026-04-06',
    readTime: '11 min read',
  },
  {
    slug: 'best-geo-agency-malaysia-2026',
    category: 'Malaysia',
    categoryColor: '#00A8FF',
    title: 'Best GEO Agency Malaysia 2026 — AI Search Visibility Specialists',
    excerpt:
      'What makes a credible GEO agency, why Malaysian businesses need AI search visibility in 2026, and how GetOutLoop delivers expert-led GEO audits across 8 dimensions for APAC clients.',
    date: 'April 6, 2026',
    dateTime: '2026-04-06',
    readTime: '10 min read',
  },
  {
    slug: 'understanding-seo-geo-aeo',
    category: 'Strategy',
    categoryColor: '#00FF9D',
    title: 'Understanding SEO, GEO, and AEO: The Complete 2026 Guide',
    excerpt:
      'A deep-dive comparison of all three search disciplines — what each one is, how they work, when to prioritize each, and how to build an integrated search strategy for 2026.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '13 min read',
  },
  {
    slug: 'geo-for-startups-2026',
    category: 'Startup',
    categoryColor: '#00FF9D',
    title: 'GEO for Startups: Get AI Search Visibility from Day One (2026)',
    excerpt:
      'Why startups should implement GEO before SEO — and how to build AI search visibility on a startup budget. Includes a 90-day sprint plan and free vs paid tool breakdown.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '10 min read',
  },
  {
    slug: 'geo-optimization-malaysia',
    category: 'Malaysia',
    categoryColor: '#00A8FF',
    title: 'GEO for Malaysian Businesses: Step-by-Step Guide 2026',
    excerpt:
      'How Malaysian businesses can get cited in ChatGPT, Perplexity, and Google AI Overviews. Written by the GetOutLoop team — with Malaysia-specific directory list and local GEO tactics.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '12 min read',
  },
  {
    slug: 'what-is-llms-txt',
    category: 'Technical',
    categoryColor: '#B0B8C8',
    title: 'What is llms.txt? The Complete Guide for Business Owners 2026',
    excerpt:
      'Everything you need to know about llms.txt — what it is, how it differs from robots.txt and sitemap.xml, who created it, and a copy-paste template to implement it today.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-appear-in-google-ai-overviews',
    category: 'GEO',
    categoryColor: '#00A8FF',
    title: 'How to Appear in Google AI Overviews: Complete GEO Guide 2026',
    excerpt:
      'Step-by-step guide to getting your business featured in Google AI Overviews. The 8 optimization factors that Gemini uses to select citations — and how to implement each.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '11 min read',
  },
  {
    slug: 'why-business-not-appearing-chatgpt',
    category: 'GEO Fix',
    categoryColor: '#FF8C00',
    title: "Why Your Business Doesn't Appear in ChatGPT — And How to Fix It",
    excerpt:
      'The 8 most common reasons businesses are invisible to ChatGPT, Perplexity, and Gemini — with exact diagnostic steps and fixes for each. Includes a self-audit checklist.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '10 min read',
  },
  {
    slug: 'how-chatgpt-recommends-businesses',
    category: 'GEO',
    categoryColor: '#00A8FF',
    title: 'How ChatGPT Decides Which Businesses to Recommend (And How to Get Cited)',
    excerpt:
      'Learn the exact factors ChatGPT uses when recommending businesses — training data presence, E-E-A-T, structured data, and real-time retrieval — and how to get your business cited.',
    date: 'March 15, 2026',
    dateTime: '2026-03-15',
    readTime: '9 min read',
  },
  {
    slug: 'what-is-geo-generative-engine-optimization',
    category: 'GEO',
    categoryColor: '#00A8FF',
    title: 'What is GEO? The Complete Guide to Generative Engine Optimization',
    excerpt:
      'Learn what GEO is, why it matters in 2026, and how to get your business cited by ChatGPT, Perplexity, and Gemini. The most comprehensive GEO guide for APAC businesses.',
    date: 'March 12, 2026',
    dateTime: '2026-03-12',
    readTime: '8 min read',
  },
  {
    slug: 'seo-vs-geo-vs-aeo-difference',
    category: 'Strategy',
    categoryColor: '#00FF9D',
    title: "SEO vs GEO vs AEO: What's the Difference and Which Do You Need?",
    excerpt:
      'Three optimization disciplines. One goal: maximum search visibility. Learn how SEO, GEO, and AEO work together in 2026 and when to prioritize each.',
    date: 'March 13, 2026',
    dateTime: '2026-03-13',
    readTime: '6 min read',
  },
  {
    slug: 'robots-txt-ai-crawlers-guide',
    category: 'Technical',
    categoryColor: '#B0B8C8',
    title: 'Robots.txt for AI Crawlers: The Complete 2026 Configuration Guide',
    excerpt:
      "Is your robots.txt blocking ChatGPT, Claude, and Perplexity? Here's how to configure it correctly for maximum AI visibility — with copy-paste templates.",
    date: 'March 14, 2026',
    dateTime: '2026-03-14',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10 text-center">
          <p className="label-tag mb-4">Insights & Guides</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            GEO & AI Search Visibility Blog
          </h1>
          <p className="text-[#B0B8C8] max-w-xl mx-auto">
            In-depth guides on GEO, SEO, and AI search visibility — written for businesses that want to get cited by ChatGPT, Perplexity, Gemini, and Claude.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="posts-heading">
        <div className="section-container max-w-4xl">
          <h2 id="posts-heading" className="sr-only">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="glass-card p-7 flex flex-col group hover:border-white/12 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ background: `${post.categoryColor}18`, color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#B0B8C8] text-xs">
                    <time dateTime={post.dateTime}>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="font-syne font-bold text-lg text-white mb-3 leading-snug flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#00A8FF] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[#B0B8C8] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#B0B8C8]">
                    <span className="font-medium text-white">GetOutLoop</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-[#00A8FF] hover:gap-3 transition-all"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
