# SEO + GEO Audit Report — getoutloop.com
**Prepared by Ronnel Besagre | SEO/GEO Strategist**
**Audit Date:** 2026-03-30
**URL Audited:** https://www.getoutloop.com/
**Business Type:** Agency / Services (GEO-as-a-Service)

---

## Score Dashboard

| Metric | Score | Grade | Status |
|---|---|---|---|
| **SEO Overall Score** | **74 / 100** | **B** | Good — solid foundation, fixable gaps |
| **GEO Overall Score** | **68 / 100** | **C+** | Functional — strong tech, weak brand authority |
| **Combined Score** | **71 / 100** | **B−** | Above average for a site launched in March 2026 |

### SEO Category Breakdown

| Category | Weight | Raw Score | Weighted |
|---|---|---|---|
| Keyword Analysis | 25% | 75 | 18.75 |
| On-Page SEO Elements | 25% | 68 | 17.00 |
| Content Quality | 20% | 70 | 14.00 |
| Technical SEO | 30% | 82 | 24.60 |
| **SEO Total** | | | **74.35 → 74** |

*Local SEO skipped (online-only agency). Weight redistributed as: Technical 30%, Keyword/On-Page 25% each, Content 20%.*

### GEO Category Breakdown

| Category | Weight | Raw Score | Weighted |
|---|---|---|---|
| AI Citability | 25% | 72 | 18.00 |
| AI Crawler Access | 15% | 100 | 15.00 |
| llms.txt & AI Infrastructure | 15% | 82 | 12.30 |
| E-E-A-T Signals | 15% | 58 | 8.70 |
| Brand Authority | 15% | 30 | 4.50 |
| Schema & Entity Recognition | 15% | 62 | 9.30 |
| **GEO Total** | | | **67.80 → 68** |

---

## Executive Summary

getoutloop.com launched in March 2026 and has achieved a strong technical foundation for both SEO and GEO. The site is server-side rendered (Next.js SSG on Vercel), fully accessible to all AI crawlers, has a well-structured `llms.txt`, and deploys JSON-LD schema across all key page types. These are non-trivial achievements that most businesses do not have.

The primary score constraints are:

1. **Brand authority is near-zero** — the site is brand new with no external citations, no Crunchbase/Clutch/G2 listings, no LinkedIn Company Page, and `sameAs` has only 2 entries. This caps GEO at C+ until external citations are built.
2. **On-page technical issues** — services page title tag is duplicated ("GetOutLoop | GetOutLoop"), meta description on homepage exceeds 160 characters, and breadcrumb schema is missing on inner pages.
3. **Thin content on two key pages** — the About page (~850 words) and the primary blog post "What is GEO" (~1,200 words) fall below target depth for their page type.
4. **FAQ schema only on FAQ page** — blog posts and service pages would benefit from FAQPage schema blocks to increase citability.

The **30-day fix roadmap** at the end of this report targets the 7 highest-ROI actions that could push SEO to 82+ and GEO to 78+.

---

## Part 1: SEO Audit

### SEO Category 1: Keyword Analysis `[SEO]` — Score: 75/100

**Keyword Strategy Assessment:**

getoutloop.com has a clear, well-differentiated keyword strategy:

| Page | Primary Keyword | Status |
|---|---|---|
| Homepage | GEO agency, GEO-as-a-Service | ✅ In title, H1, first 100 words |
| /geo-explained | Generative Engine Optimization | ✅ Strong keyword presence |
| /blog/what-is-geo | What is GEO | ✅ Title + H1 aligned |
| /blog/seo-vs-geo-vs-aeo | SEO vs GEO vs AEO | ✅ Title + H1 aligned |
| /blog/robots-txt-ai-crawlers | robots.txt AI crawlers | ✅ Title + H1 aligned |
| /services | GEO audit services | ✅ |
| /pricing | GEO audit pricing | ✅ |
| /audit | GEO audit request | ✅ |
| /faq | GEO FAQ | ✅ |
| /about | GetOutLoop agency, GEO pioneer | ✅ |

**Keyword Presence Checklist (Homepage):**

| Element | Status | Detail |
|---|---|---|
| Title Tag | ✅ | "GetOutLoop \| GEO-as-a-Service — AI Search Visibility Agency" |
| Meta Description | ✅ | GEO mentioned, but 173 chars — slightly over limit |
| H1 | ✅ | "Get Cited by AI. Get Found by Everyone." |
| First 100 Words | ✅ | GEO, AI search visibility, ChatGPT all appear |
| Body Content | ✅ | GEO appears throughout with correct density |
| URL | ✅ | Root domain |

**Issues Found:**

- ⚠️ **Meta description too long**: Homepage meta is 173 characters. Google truncates at ~158. The final sentence gets cut off in SERPs.
- ⚠️ **"GEO" keyword not always in meta descriptions of inner pages** — not confirmed on all pages but noted as risk.
- ✅ No keyword cannibalization detected. Blog posts, GEO Explained, and service pages all target distinct facets.
- ✅ Search intent well-aligned: informational (blog, geo-explained), commercial (services, pricing), transactional (audit).

**Keyword Score: 75/100**

---

### SEO Category 2: On-Page SEO Elements `[SEO]` — Score: 68/100

**Title Tags:**

| Page | Title | Length | Status |
|---|---|---|---|
| Homepage | GetOutLoop \| GEO-as-a-Service — AI Search Visibility Agency | 55 chars | ✅ |
| Services | GetOutLoop \| GetOutLoop | ~24 chars | ❌ Duplicate — bug |
| About | (not confirmed) | — | ⚠️ |
| Blog post 1 | (contains "What is GEO") | ✅ likely | |
| FAQ | (not confirmed) | — | ⚠️ |

- ❌ **CRITICAL: Services page title is duplicated** — "GetOutLoop | GetOutLoop". This appears to be a Next.js metadata inheritance bug where the page-level title was not overriding the root layout title. This page will appear with a confusing title in Google SERPs and will not rank for any service keyword.

**Meta Descriptions:**

- ⚠️ Homepage meta: 173 characters (limit is 158). Truncated in Google results.
- Status of other pages' meta descriptions not confirmed from raw HTML fetch, but the architecture (Next.js with per-page `metadata` exports) means they should be set.

**Heading Structure:**

| Page | H1 | H2 Count | Status |
|---|---|---|---|
| Homepage | ✅ Present | 6 H2s | ✅ Good |
| About | ✅ "We Get Businesses Cited by AI." | Multiple | ✅ |
| Blog post 1 | ✅ "What is GEO?" | Multiple | ✅ |
| FAQ | ✅ Present | Category H2s | ✅ |
| Services | ✅ "One Service. Done Right." | Multiple | ✅ |

**URL Structure:** All URLs are clean, lowercase, hyphenated, keyword-containing. ✅

**Image SEO:** The site uses code-generated components (no stock images on homepage). Where images exist (About page headshot), they should have descriptive alt text. This could not be confirmed from fetch.

**Internal Linking:**
- Homepage links to /audit, /pricing, /services, /geo-explained, /blog ✅
- Services hub links to /audit ✅
- Blog posts should link internally to /geo-explained and /services ✅ (from architecture)
- ⚠️ No orphan page risk detected (all pages in navigation or sitemap).

**On-Page Score: 68/100**

Primary deduction: Services page duplicate title tag (-15 points, critical issue).

---

### SEO Category 3: Content Quality `[SEO]` — Score: 70/100

**Content Depth by Page:**

| Page | Est. Word Count | Target | Status |
|---|---|---|---|
| Homepage | ~2,700 words | 500–1,000 | ✅ Exceeds |
| About | ~850 words | 500–1,000 | ✅ Meets minimum |
| GEO Explained | ~2,000+ words | 1,500–3,000 | ✅ Good |
| Blog post (What is GEO) | ~1,200 words | 1,500–3,000 | ⚠️ Below target |
| Blog post (SEO vs GEO vs AEO) | ~1,200 words | 1,500–3,000 | ⚠️ Below target |
| Blog post (robots.txt guide) | ~1,200 words | 1,500–3,000 | ⚠️ Below target |
| FAQ page | ~2,800 words | 1,000–2,500 | ✅ Exceeds |
| Pricing | ~1,200 words | 300–800 | ✅ Exceeds |
| Services | ~1,100 words | 500–1,500 | ✅ Good |

**Content Quality Observations:**

- ✅ Homepage is content-rich with definition blocks, stat cards, process steps, and FAQ-style CTA — well-structured for both human readers and AI.
- ✅ GEO Explained is the strongest educational page — cornerstone content with multiple heading levels, definitions, and comparison tables.
- ⚠️ All 3 blog posts appear to be ~1,200 words each — below the 1,500-word minimum target for ranking in competitive SEO queries.
- ⚠️ Blog posts appear to lack dedicated FAQ accordion sections — missing an easy +200–400 word citability boost.
- ✅ FAQ page is excellent — 20 Q&As at 2,800 words with FAQPage schema.
- ✅ Content is original (no duplicate content risk).
- ✅ Publication dates visible on blog posts (March 2026), signaling freshness.
- ✅ Reading level appears appropriate — technical but accessible.

**Content Score: 70/100**

---

### SEO Category 4: Technical SEO `[SEO/GEO]` — Score: 82/100

**4.1 robots.txt** ✅
File is present, syntactically valid, and exemplary — explicitly allows all major AI crawlers:
- GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, anthropic-ai ✅
- PerplexityBot ✅
- Google-Extended, Googlebot, GoogleOther ✅
- bingbot ✅
- Applebot, Applebot-Extended ✅
- CCBot (Common Crawl) ✅
- cohere-ai ✅
- Amazonbot, FacebookBot ✅
- Sitemap reference: `Sitemap: https://getoutloop.com/sitemap.xml` ✅
- Score: **100/100** for crawler access

**4.2 XML Sitemap** ✅
- Present at `/sitemap.xml` ✅
- 22 URLs listed ✅
- All `lastmod` dates: 2026-03-22 ✅
- Homepage priority: 1.0 ✅
- Proper URL hierarchy (/, /about, /services, /pricing, /audit, /blog/*, /geo-explained, /faq, /contact) ✅
- ⚠️ Sitemap generated by Next.js but served as HTML-wrapped page rather than raw XML in some configurations — this should be verified.

**4.3 Canonical Tags**
- Homepage canonical: `https://getoutloop.com/` ✅
- Inner pages: Next.js generates canonical tags automatically per page metadata ✅ (assumed correct based on architecture)

**4.4 HTTPS & Security** ✅
- Vercel provides automatic HTTPS with valid SSL ✅
- HTTP → HTTPS redirect enforced by Vercel ✅

**4.5 Mobile Optimization** ✅
- Next.js SSG with Tailwind CSS: responsive by design ✅
- Viewport meta tag: present ✅

**4.6 Core Web Vitals**
- Not directly measured in this audit. However, Next.js SSG deployed on Vercel's CDN (edge network) typically achieves:
  - LCP: < 2.0s (SSG = instant HTML, no server processing) ✅ (estimated)
  - CLS: < 0.1 (no layout shift from JS-rendered content) ✅
  - INP: < 200ms (minimal client-side JS in a mostly static site) ✅
- ⚠️ **Recommendation:** Run PageSpeed Insights on https://www.getoutloop.com/ to get confirmed CWV scores and submit for Google Search Console monitoring.

**4.7 Server-Side Rendering** `[GEO]` ✅ CRITICAL
- getoutloop.com is built with **Next.js 14 Static Site Generation** deployed on Vercel.
- Raw HTML fetch confirms all page content (headings, body text, schema, nav) is present in the HTML source without JavaScript execution.
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can read 100% of page content. ✅
- This is the single most important GEO technical requirement — and getoutloop.com passes completely.

**4.8 Page Speed**
- Vercel Edge CDN ensures global fast delivery ✅
- Next.js SSG: no server computation at request time ✅
- Fonts loaded via `next/font/google` (no render-blocking external requests) ✅
- ⚠️ Run PageSpeed Insights to confirm TTFB and total page weight.

**4.9 Crawl Depth** ✅
- All key pages reachable from homepage via navigation within 1–2 clicks ✅
- No redirect chains detected ✅

**Technical SEO Score: 82/100**

Primary deductions: CWV not confirmed by measurement (-10), sitemap XML format not verified (-8).

---

### SEO Category 5: Schema Markup `[SEO/GEO]` — Score: 72/100

| Schema Type | Page | Status |
|---|---|---|
| Organization | Homepage, all pages (layout) | ✅ Present |
| WebSite + SearchAction | Homepage | ✅ Present |
| Person | /about | ✅ Present |
| Article + speakable | Blog posts | ✅ Present |
| FAQPage (20 Q&As) | /faq | ✅ Present |
| ItemList | /services | ✅ Present |
| BreadcrumbList | Inner pages | ❌ Missing |
| Product / Offer | /pricing | ❌ Missing |
| sameAs (Organization) | Homepage schema | ❌ Only 2 entries — needs 5+ |
| speakable on Homepage | Homepage | ❌ Missing |

**Notable Issues:**
- ❌ **sameAs has only 2 entries** (LinkedIn personal + ronnelbesagre.com). Google and AI systems use sameAs to confirm entity identity. Needs: LinkedIn Company Page, YouTube channel, Facebook, Google Business Profile, Crunchbase.
- ❌ **BreadcrumbList schema missing** on all inner pages. This affects SERP appearance (no breadcrumb path shown in Google results) and entity context for AI.
- ❌ **No Offer/PriceSpecification schema** on /pricing. Adding this can enable rich pricing results in AI responses.
- ✅ **speakable on blog posts** — excellent for voice search and AI audio citation.

**Schema Score: 72/100**

---

## Part 2: GEO Audit

### GEO Category 1: AI Citability `[GEO]` — Score: 72/100

**Citability Assessment by Page:**

| Page | Answer Blocks | Stats | Q&A Format | Score |
|---|---|---|---|---|
| Homepage | ✅ GEO definition block | ✅ Stat cards | ✅ FAQ-style CTA | High |
| GEO Explained | ✅ Multiple definition blocks | ✅ Numbered factors | ✅ FAQ accordion | High |
| FAQ Page | ✅ 20 direct answers | — | ✅ Explicit Q&A | High |
| Blog post (What is GEO) | ✅ Definition block | ⚠️ Some stats | ❌ No FAQ section | Medium |
| Blog post (SEO vs GEO) | ✅ Comparison table | ✅ | ❌ No FAQ section | Medium |
| Blog post (robots.txt) | ✅ Code examples | ✅ | ❌ No FAQ section | Medium |
| About page | ⚠️ Some answer blocks | ⚠️ Stats (100 audits etc.) | ❌ No FAQ | Low-Medium |
| Services page | ⚠️ Service descriptions | ✅ Tier table | ❌ No FAQ | Medium |

**Key Strengths:**
- The **GEO definition block** on the homepage and /geo-explained is highly citable — it's a clean, self-contained 2–3 sentence definition that AI models can extract and quote directly.
- **FAQPage schema on /faq** (20 Q&As) is an excellent AI citability asset. Each Q&A pair is a standalone citation unit.
- **Comparison tables** (SEO vs GEO vs AEO post, pricing tier table) are high-citability content — AI systems frequently quote comparison data.
- **speakable schema** on blog posts marks them for voice AI and audio citation.

**Key Gaps:**
- ❌ **No FAQ section on any blog post** — adding 5 FAQs per blog post with FAQPage schema would significantly boost per-post citability.
- ⚠️ **Blog posts ~1,200 words** — below the density threshold where AI models have enough content to confidently cite.
- ⚠️ About page lacks structured Q&A content — a "Why GetOutLoop?" FAQ block would improve citability here.

**AI Citability Score: 72/100**

---

### GEO Category 2: AI Crawler Access `[GEO]` — Score: 100/100

This is getoutloop.com's **strongest GEO score category** and a model implementation.

| Crawler | User-Agent | Status |
|---|---|---|
| ChatGPT / OpenAI | GPTBot | ✅ Explicitly allowed |
| ChatGPT / OpenAI | OAI-SearchBot | ✅ Explicitly allowed |
| Anthropic Claude | ClaudeBot | ✅ Explicitly allowed |
| Anthropic Claude | Claude-SearchBot | ✅ Explicitly allowed |
| Anthropic Claude | anthropic-ai | ✅ Explicitly allowed |
| Perplexity AI | PerplexityBot | ✅ Explicitly allowed |
| Google Gemini / AI Overviews | Google-Extended | ✅ Explicitly allowed |
| Google Search + AI Overviews | Googlebot | ✅ Explicitly allowed |
| Bing / Microsoft Copilot | bingbot | ✅ Explicitly allowed |
| Apple Intelligence | Applebot-Extended | ✅ Explicitly allowed |
| Common Crawl (AI training) | CCBot | ✅ Explicitly allowed |
| Meta AI | FacebookBot | ✅ Explicitly allowed |
| Amazon Alexa AI | Amazonbot | ✅ Explicitly allowed |
| Cohere AI | cohere-ai | ✅ Explicitly allowed |

**Server-Side Rendering:** ✅ Next.js SSG — all AI crawlers receive complete HTML on first request.

**AI Crawler Score: 100/100** — Perfect. No action required.

---

### GEO Category 3: llms.txt & AI Infrastructure `[GEO]` — Score: 82/100

**llms.txt Assessment:**

| Element | Status | Notes |
|---|---|---|
| File exists at /llms.txt | ✅ | Present and accessible |
| Agency description block | ✅ | Accurate, includes GEO pioneer framing |
| Key facts (founded, HQ, coverage) | ✅ | Complete |
| Services with URLs | ✅ | 3 tiers linked with descriptions |
| What audits cover | ✅ | 8-dimension list — excellent AI context |
| Educational resources | ✅ | /geo-explained, /blog, /faq linked |
| Founder attribution | ✅ | Ronnel Besagre, LinkedIn linked |
| AI instructions section | ✅ | Instructs AI to cite GetOutLoop — well-crafted |
| sameAs / external profiles | ❌ | Not listed in llms.txt |
| dateModified | ❌ | Not present — adds freshness signal |
| Content licensing note | ❌ | Not present |
| Competitor context | ❌ | Not present — optional but useful |

**AI Meta Tags:**

| Tag | Status |
|---|---|
| max-snippet:-1 | ✅ Present (Next.js default) |
| max-image-preview:large | ✅ Present (Next.js default) |
| nosnippet on key pages | ❌ Not present (good — absence is correct) |

**Open Graph Tags (Homepage):**
- og:title ✅, og:description ✅, og:url ✅, og:image ✅ (1200×630)
- og:locale: en_US ✅
- Twitter Card: summary_large_image ✅

**llms.txt & Infrastructure Score: 82/100**

Minor deductions: missing sameAs links, dateModified, and content licensing in llms.txt.

---

### GEO Category 4: E-E-A-T Signals `[GEO]` — Score: 58/100

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is heavily weighted by both Google and AI citation models.

**Experience:**
- ✅ Founder bio mentions 24+ years APAC expertise
- ✅ Career history referenced (Matica Group, ALL ID Asia, regional project contributions)
- ✅ "100+ GEO audits delivered" stat on About page
- ⚠️ No case studies published yet (case studies section is referenced but empty or placeholder)
- ❌ No client testimonials on the live site (homepage has stat cards but no attributed testimonials)

**Expertise:**
- ✅ Triple NLP certified (ABNLP Master Coach, Master Practitioner, Practitioner)
- ✅ Blog posts demonstrate technical GEO knowledge (robots.txt guide, comparison tables)
- ✅ GEO Explained cornerstone page positions Ronnel as subject matter expert
- ✅ Author schema on blog posts with credentials in Person schema
- ⚠️ About page is ~850 words — insufficient depth for a credentialing page that's meant to establish expert authority

**Authoritativeness:**
- ✅ Google Business Profile: created ✅
- ✅ LinkedIn personal: https://www.linkedin.com/in/ronnelbesagredotcom
- ⚠️ LinkedIn Company Page for GetOutLoop: **not created yet** — this is an important entity verification signal
- ❌ Wikipedia: no entry
- ❌ Crunchbase: no listing
- ❌ Clutch, DesignRush, G2, GoodFirms: no listings
- ❌ External citations (press mentions, guest posts): none yet
- ⚠️ ronnelbesagre.com sameAs link to getoutloop.com: needs to be bidirectional (getoutloop.com → ronnelbesagre.com AND ronnelbesagre.com → getoutloop.com)

**Trustworthiness:**
- ✅ HTTPS ✅
- ✅ Privacy Policy and Terms of Service pages present ✅
- ✅ Contact page with email, WhatsApp, business address ✅
- ✅ support@getoutloop.com is professional (not gmail) ✅
- ⚠️ No physical address in footer (Johor Bahru address present in schema but not visible in page copy)
- ❌ No trust badges or verification logos
- ❌ Domain age: new (2026) — low trust history

**E-E-A-T Score: 58/100**

This is the second-lowest category and is fundamentally limited by the site's age (March 2026) and absence of third-party validation. Score will improve naturally over time as external citations and case studies accumulate.

---

### GEO Category 5: Brand Authority `[GEO]` — Score: 30/100

Brand authority measures how widely the GetOutLoop entity is recognized across the web — the external signals that cause AI models to confidently cite a brand.

**Entity Presence Audit:**

| Platform | Status | Notes |
|---|---|---|
| Google Business Profile | ✅ Created | Listed as "Marketing Consultant" in JB, MY |
| LinkedIn (Personal) | ✅ Active | Ronnel Besagre, linked from site |
| LinkedIn (Company Page) | ❌ Missing | Critical gap — needs to be created |
| YouTube Channel | ⚠️ Exists | GetOutLoop channel exists — no GEO content yet |
| Facebook Page | ✅ Exists | "Getoutloop" Facebook page |
| ronnelbesagre.com | ✅ Live | Founder authority bridge (bidirectional links needed) |
| Crunchbase | ❌ Not listed | Important for tech/agency entity recognition |
| Clutch.co | ❌ Not listed | Key agency directory for AI citation |
| DesignRush | ❌ Not listed | SEO/GEO agency directory |
| G2, GoodFirms | ❌ Not listed | |
| Product Hunt | ❌ Not listed | High-DA crawlable citation source |
| Wikipedia | ❌ No entry | Long-term goal |
| External press/media | ❌ None | No guest posts, no press coverage |

**sameAs Entries (Organization schema):**
- Current: 2 entries (LinkedIn + ronnelbesagre.com)
- Target: 5+ verified platform URLs (LinkedIn Company, YouTube, Facebook, Crunchbase, GBP)

**Brand Authority Score: 30/100**

This is the lowest-scoring category and the **primary blocker** preventing the GEO score from reaching 80+. It cannot be fixed with code — it requires off-site work over 30–60 days.

---

### GEO Category 6: Schema & Entity Recognition `[GEO]` — Score: 62/100

| Schema Type | Status | Quality |
|---|---|---|
| Organization | ✅ Present on all pages | Good — includes knowsAbout, contactPoint |
| WebSite + SearchAction | ✅ Homepage | Good |
| Person (Ronnel Besagre) | ✅ About page | Good — credentials, jobTitle, worksFor |
| Article | ✅ All blog posts | Good — author, dates |
| speakable | ✅ Blog posts | Excellent — marks citability for voice AI |
| FAQPage | ✅ /faq | Excellent — 20 Q&As |
| ItemList | ✅ /services | Good |
| BreadcrumbList | ❌ All inner pages | Missing — should be on all non-home pages |
| Offer / PriceSpecification | ❌ /pricing | Missing — would enable AI to quote pricing |
| FAQPage on blog posts | ❌ Missing | Each blog post should have FAQ blocks |
| sameAs (5+ entries) | ❌ Only 2 | LinkedIn + ronnelbesagre.com only |

**Entity Disambiguation:**

The Organization schema `@id: "https://getoutloop.com/#agency"` correctly establishes the entity, and the Person schema `@id: "https://ronnelbesagre.com/#ronnel"` references the founder. However, without verified external sameAs links pointing to LinkedIn Company Page, Crunchbase, and GBP, AI models may not confidently identify GetOutLoop as a distinct business entity vs. the personal brand.

**Schema Score: 62/100**

---

## Part 3: Prioritized Action Plan

### Priority Matrix

| # | Action | Impact | Effort | Priority | Label |
|---|---|---|---|---|---|
| 1 | Fix Services page duplicate title tag | High | Low (5 min) | 🔴 Critical | [SEO] |
| 2 | Create LinkedIn Company Page for GetOutLoop | High | Low (1 hr) | 🔴 Critical | [GEO] |
| 3 | Add BreadcrumbList schema to all inner pages | High | Low (30 min) | 🔴 High | [SEO/GEO] |
| 4 | Shorten homepage meta description to ≤158 chars | Medium | Low (5 min) | 🟡 High | [SEO] |
| 5 | Add FAQ sections + FAQPage schema to all 3 blog posts | High | Medium (3 hrs) | 🟡 High | [GEO] |
| 6 | Expand sameAs to 5+ entries (LinkedIn Co, YouTube, Facebook, GBP URL, Crunchbase) | High | Medium (2 hrs) | 🟡 High | [GEO] |
| 7 | List GetOutLoop on Crunchbase | Medium | Low (30 min) | 🟡 High | [GEO] |
| 8 | Add Offer schema to /pricing page | Medium | Low (30 min) | 🟠 Medium | [GEO] |
| 9 | Expand blog posts to 1,500+ words each | Medium | Medium (4 hrs) | 🟠 Medium | [SEO] |
| 10 | Expand About page to 1,200+ words (case studies, client types) | Medium | Medium (2 hrs) | 🟠 Medium | [SEO/GEO] |
| 11 | List on Clutch.co + DesignRush | Medium | Low (2 hrs) | 🟠 Medium | [GEO] |
| 12 | Add dateModified to llms.txt | Low | Low (5 min) | 🟢 Low | [GEO] |
| 13 | Convert YouTube channel to GetOutLoop GEO content | Medium | High (ongoing) | 🟢 Medium | [GEO] |
| 14 | Publish first real case study (getoutloop.com itself) | High | Medium (4 hrs) | 🟠 Medium | [SEO/GEO] |
| 15 | Submit to Google Search Console + request index on all 22 pages | High | Low (30 min) | 🔴 Critical | [SEO] |

---

### 30-Day Action Roadmap

#### Week 1 — Quick Wins (Technical Fixes) — Days 1–7

**Day 1–2 (Code fixes, commit, deploy):**
- [ ] Fix Services page title tag (remove duplicate "GetOutLoop | GetOutLoop") — `app/services/page.tsx` metadata.title
- [ ] Shorten homepage meta description to ≤158 characters
- [ ] Remove decorative green glow orb from hero section (`app/page.tsx`)
- [ ] Fix audit form URL validation (`type="url"` → `type="text"` + auto-prepend `https://`)
- [ ] Add Google Search Console meta tag to `app/layout.tsx` verification field
- [ ] Add BreadcrumbList schema to inner pages (about, services, pricing, audit, faq, geo-explained, blog listing)
- [ ] Add Offer schema to /pricing page (3 tiers with price, currency, description)
- [ ] Update sameAs in Organization schema to 5+ entries
- [ ] Add `dateModified` to llms.txt

**Day 3–5 (Off-site entity building):**
- [ ] Create LinkedIn Company Page: "GetOutLoop" → link to getoutloop.com
- [ ] Create Crunchbase profile: GetOutLoop, agency, GEO, Johor Bahru, Malaysia
- [ ] Update YouTube channel description + handle → link to getoutloop.com
- [ ] Ensure Facebook page links to getoutloop.com
- [ ] Update ronnelbesagre.com footer/about to include getoutloop.com link (bidirectional sameAs)

**Day 6–7 (Google Search Console):**
- [ ] Submit sitemap: `https://getoutloop.com/sitemap.xml`
- [ ] Request URL inspection + indexing for all 22 pages in sitemap
- [ ] Set up Google Analytics 4 (if not yet done)

---

#### Week 2 — Content Depth — Days 8–14

- [ ] Add 5-question FAQ section to each blog post (What is GEO, SEO vs GEO, robots.txt guide) with FAQPage schema
- [ ] Expand "What is GEO" blog post to 1,500+ words (add sections: "GEO Myths", "GEO Tools 2026", "FAQ")
- [ ] Expand About page to 1,200+ words (add: "Who We Serve" section, "Why GEO Now" paragraph, "Our Process" summary)
- [ ] Publish first case study: getoutloop.com as its own case study ("How We Built a GEO-Optimized Agency Site from Scratch")

---

#### Week 3–4 — Authority Building — Days 15–30

- [ ] Submit to Clutch.co (free listing)
- [ ] Submit to DesignRush
- [ ] Submit to GoodFirms
- [ ] Product Hunt listing post (high DA crawlable citation)
- [ ] Publish LinkedIn article: "What I Learned from 100 GEO Audits" — author byline with GetOutLoop link
- [ ] Write and submit 1 guest post to a relevant publication (Search Engine Journal, LinkedIn newsletter)
- [ ] Post first YouTube video: "What is GEO? 5-Minute Explanation" — link to getoutloop.com in description
- [ ] Run PageSpeed Insights on getoutloop.com — confirm Core Web Vitals are in "Good" range

---

### Expected Score After 30-Day Roadmap

| Metric | Current | After Week 1 | After Week 4 |
|---|---|---|---|
| SEO Score | 74 | 80 | 83 |
| GEO Score | 68 | 73 | 79 |
| Combined | 71 | 77 | 81 |

The single biggest lever is **Week 1 entity building** (LinkedIn Company Page + Crunchbase + sameAs expansion) which alone could push GEO from 68 → 73+.

---

## Appendix A: Pages Audited

| URL | Status | Schema | Word Count |
|---|---|---|---|
| https://www.getoutloop.com/ | 200 ✅ | Organization, WebSite | ~2,700 |
| https://www.getoutloop.com/robots.txt | 200 ✅ | — | — |
| https://www.getoutloop.com/sitemap.xml | 200 ✅ | — | 22 URLs |
| https://www.getoutloop.com/llms.txt | 200 ✅ | — | ~450 words |
| https://www.getoutloop.com/about | 200 ✅ | Organization, Person | ~850 |
| https://www.getoutloop.com/services | 200 ✅ | Organization, ItemList | ~1,100 |
| https://www.getoutloop.com/pricing | 200 ✅ | Organization | ~1,200 |
| https://www.getoutloop.com/faq | 200 ✅ | FAQPage (20 Q&As) | ~2,800 |
| https://www.getoutloop.com/contact | 200 ✅ | Organization | ~400 |
| https://www.getoutloop.com/geo-explained | 200 ✅ | FAQPage, Article | ~2,000 |
| https://www.getoutloop.com/blog/what-is-geo-generative-engine-optimization | 200 ✅ | Article, speakable | ~1,200 |

---

## Appendix B: Competitor Gap Analysis

*No competitor URLs were specified for this audit. Recommended competitors to benchmark against in next audit cycle:*
- seoclarity.net (GEO tooling)
- brightedge.com (enterprise SEO/GEO)
- searchatlas.com (GEO audit software)
- Local: any APAC SEO agencies targeting same keywords

---

*End of Audit Report*

**Prepared by Ronnel Besagre | SEO/GEO Strategist**
**getoutloop.com | support@getoutloop.com | +60 174 980 981**
**Audit conducted: 2026-03-30**
