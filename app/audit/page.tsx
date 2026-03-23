'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.getoutloop.cloud/webhook-test/getoutloop-contact'

const tierOptions = [
  { value: 'free', label: 'GEO Free — Score + top 5 issues (Free)' },
  { value: 'pro', label: 'GEO PRO — Full PDF report ($120/mo)' },
  { value: 'complete', label: 'GEO Complete — Audit + fix code ($480/mo)' },
]

const tierBenefits: Record<string, string[]> = {
  free: [
    'GEO score (0–100)',
    'Top 5 critical issues',
    'Plain-English business impact',
    'Delivered by email in 24 hrs',
  ],
  pro: [
    'Full 8-section PDF report',
    'Complete issue list + severity',
    'Priority action matrix',
    'Monthly re-audit included',
  ],
  complete: [
    'Everything in GEO PRO',
    'Guided fix code (copy-paste)',
    'Schema implementation templates',
    '1 strategy call/month',
  ],
}

export default function AuditPage() {
  const [tier, setTier] = useState('free')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', message: '' })

  // Read ?tier= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('tier')
    if (t && ['free', 'pro', 'complete'].includes(t)) setTier(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tier,
          timestamp: new Date().toISOString(),
          source: 'getoutloop.com/audit',
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-xl px-4 py-3 text-sm text-white font-inter outline-none transition-colors focus:border-electric'
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }
  const labelClass = 'block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-inter'

  return (
    <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27', minHeight: '100vh' }}>
      <div className="section-container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="label-tag mb-3">Self-Service GEO Audit</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Request Your GEO Audit
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Submit your website URL, choose your plan, and we will deliver your GEO audit report directly to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3 glass-card p-7">
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-neon mx-auto mb-4" />
                <h2 className="font-syne font-bold text-2xl text-white mb-3">Audit Request Received!</h2>
                <p className="text-muted leading-relaxed">
                  {tier === 'free'
                    ? 'Your free GEO audit report will be delivered to your email within 24 hours.'
                    : 'Your GEO audit is queued. Expect your full PDF report within 48 hours.'}
                </p>
                <p className="text-muted text-sm mt-4">Questions? Email <a href="mailto:support@getoutloop.com" className="text-electric">support@getoutloop.com</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Your name" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@company.com" className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Website URL *</label>
                  <input name="website" type="url" required value={form.website} onChange={handleChange}
                    placeholder="https://yourwebsite.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input name="company" type="text" value={form.company} onChange={handleChange}
                    placeholder="Your company name" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass}>Audit Plan *</label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className={inputClass}
                    style={{ ...inputStyle, background: '#0D1429' }}
                  >
                    {tierOptions.map((o) => (
                      <option key={o.value} value={o.value} style={{ background: '#0D1429', color: '#fff' }}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Tell us about your goals (optional)</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="What are you trying to achieve? Any specific AI platforms you want to rank in?"
                    className={inputClass} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg text-sm" style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', color: '#FF5050' }}>
                    <AlertCircle size={16} /> Error submitting. Please email <a href="mailto:support@getoutloop.com" className="underline ml-1">support@getoutloop.com</a> directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-base py-3.5">
                  {status === 'sending' ? 'Submitting...' : tier === 'free' ? 'Request Free Audit →' : `Request ${tier === 'pro' ? 'GEO PRO' : 'GEO Complete'} Audit →`}
                </button>
                <p className="text-center text-muted/50 text-xs font-inter">
                  {tier === 'free' ? 'Free · No credit card · 24-hr delivery' : 'We will contact you to confirm payment before processing.'}
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            <div className="glass-card p-6" style={{ border: '1px solid rgba(0,168,255,0.2)' }}>
              <h3 className="font-syne font-semibold text-white mb-4">
                {tier === 'free' ? 'GEO Free includes:' : tier === 'pro' ? 'GEO PRO includes:' : 'GEO Complete includes:'}
              </h3>
              <ul className="space-y-2.5">
                {tierBenefits[tier].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle size={15} className="text-neon mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-syne font-semibold text-white mb-3">What we audit</h3>
              <ol className="space-y-1.5 text-sm text-muted list-decimal list-inside">
                <li>Technical crawler access</li>
                <li>Structured data (JSON-LD)</li>
                <li>Content citability</li>
                <li>E-E-A-T signals</li>
                <li>Brand authority</li>
                <li>Platform citations (ChatGPT, Perplexity...)</li>
                <li>llms.txt presence</li>
                <li>Competitor gap analysis</li>
              </ol>
            </div>

            <div className="glass-card p-6">
              <p className="text-muted text-sm leading-relaxed">
                Questions? Contact{' '}
                <a href="mailto:support@getoutloop.com" className="text-electric hover:underline">support@getoutloop.com</a>
                {' '}or WhatsApp{' '}
                <a href="https://wa.me/60174980981" className="text-electric hover:underline">+60 174 980 981</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
