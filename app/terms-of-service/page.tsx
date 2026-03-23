import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | GetOutLoop',
  description: 'Terms of Service for getoutloop.com and GEO audit services.',
  alternates: { canonical: 'https://getoutloop.com/terms-of-service' },
  robots: { index: false },
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="font-syne font-bold text-4xl text-white mb-4">Terms of Service</h1>
        <p className="text-[#B0B8C8] text-sm mb-10"><time dateTime="2026-03-22">Last updated: March 22, 2026</time></p>

        <div className="space-y-8 text-[#B0B8C8] leading-relaxed">
          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing getoutloop.com or engaging GetOutLoop&apos;s GEO audit services, you agree to these terms. If you do not agree, please do not use this website or services.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">2. Services</h2>
            <p>GetOutLoop provides GEO audit and AI visibility services across three tiers: GEO Free, GEO PRO ($120/site/month), and GEO Complete ($480/site/month). Specific deliverables and timelines are defined on the pricing page and agreed upon prior to commencement.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">3. Free GEO Audit</h2>
            <p>The free GEO Audit is provided as a no-obligation service. Results are based on publicly available information and automated analysis. No guarantees are made regarding specific outcomes from implementing audit recommendations. One free audit per domain per 30-day period.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">4. Subscriptions & Billing</h2>
            <p>GEO PRO and GEO Complete are billed monthly. Subscriptions may be cancelled at any time with 30 days notice. No refunds are issued for partial months. Annual billing options are available at a discounted rate — contact us for details.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">5. Intellectual Property</h2>
            <p>All content on getoutloop.com — including articles, guides, and educational material — is the intellectual property of GetOutLoop. Audit reports delivered to clients are for the client&apos;s internal use only. You may share excerpts with attribution but may not reproduce content in full without written permission.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">6. Limitation of Liability</h2>
            <p>SEO and GEO results depend on many factors outside our control (AI model updates, algorithm changes, competitor actions, market conditions). We do not guarantee specific AI citation frequencies or ranking positions. Our liability is limited to the fees paid for services rendered in the preceding 30 days.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">7. Governing Law</h2>
            <p>These terms are governed by the laws of Malaysia. Any disputes shall be resolved in the courts of Johor Bahru, Malaysia.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">8. Contact</h2>
            <p>For terms-related inquiries: <a href="mailto:rbesagre@gmail.com" className="text-[#00A8FF] hover:underline">rbesagre@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
