'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.getoutloop.cloud/webhook/getoutloop-contact'

const tierOptions = [
  { value: 'free',       label: 'GEO Free — Score + top 5 issues (Free)' },
  { value: 'pro',        label: 'GEO PRO — Full PDF report ($120/mo)' },
  { value: 'complete',   label: 'GEO Complete — Audit + fix code ($480/mo)' },
  { value: 'reputation', label: 'Reputation Management Audit ($150/mo)' },
]

const tierBenefits: Record<string, { items: string[]; color: string; note?: string }> = {
  free: {
    color: 'rgba(0,168,255,0.2)',
    items: [
      'GEO score (0–100)',
      'Top 5 critical issues',
      'Plain-English business impact',
      'Delivered by email in 24 hrs',
    ],
  },
  pro: {
    color: 'rgba(0,168,255,0.3)',
    items: [
      'Full 8-section PDF report',
      'Complete issue list + severity',
      'Priority action matrix',
      'Monthly re-audit included',
    ],
  },
  complete: {
    color: 'rgba(0,255,157,0.25)',
    items: [
      'Everything in GEO PRO',
      'Guided fix code (copy-paste)',
      'Schema implementation templates',
      '1 strategy call/month',
    ],
  },
  reputation: {
    color: 'rgba(168,85,247,0.25)',
    items: [
      'AI perception audit (ChatGPT, Perplexity)',
      'Review sentiment analysis',
      'Brand mention monitoring',
      'Crisis risk assessment',
      'Recovery roadmap + action plan',
      'Monthly re-audit',
    ],
    note: 'Includes what AI platforms say about your brand today.',
  },
}

const tierLabels: Record<string, string> = {
  free:       'GEO Free',
  pro:        'GEO PRO',
  complete:   'GEO Complete',
  reputation: 'Reputation',
}

const VALID_TIERS = ['free', 'pro', 'complete', 'reputation']

export default function AuditPage() {
  const [tier, setTier] = useState('free')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', message: '' })

  // Read ?tier= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('tier')
    if (t && VALID_TIERS.includes(t)) setTier(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const normalizeUrl = (url: string): string => {
    const trimmed = url.trim()
    if (!trimmed) return trimmed
    if (/^https?:\/\//i.test(trimmed)) return trimmed
    return `https://${trimmed}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorDetail('')

    const payload = {
      ...form,
      website: normalizeUrl(form.website),
      tier,
      service: tierOptions.find((o) => o.value === tier)?.label ?? tier,
      timestamp: new Date().toISOString(),
      source: 'getoutloop.com/audit',
    }

    // Abort after 10 seconds so the user doesn't wait forever
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      clearTimeout(timeout)

      if (res.ok) {
        setStatus('success')
      } else {
        setErrorDetail(`Server responded ${res.status}`)
        setStatus('error')
      }
    } catch (err: unknown) {
      clearTimeout(timeout)
      const isTimeout = err instanceof Error && err.name === 'AbortError'
      setErrorDetail(isTimeout ? 'Request timed out.' : 'Network error.')
      setStatus('error')
    }
  }

  const mailtoFallback = `mailto:support@getoutloop.com?subject=GEO Audit Request — ${form.name || 'New Lead'}&body=Name: ${form.name}%0AEmail: ${form.email}%0AWebsite: ${form.website}%0AService: ${tierOptions.find((o) => o.value === tier)?.label}%0AMessage: ${form.message}`

  const inputClass = 'w-full rounded-xl px-4 py-3 text-sm text-white font-inter outline-none transition-colors focus:border-electric'
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }
  const labelClass = 'block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-inter'
  const benefits = tierBenefits[tier]

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
                    : tier === 'reputation'
                    ? 'Your Reputation Audit request is confirmed. Expect your report within 48 hours.'
                    : 'Your GEO audit is queued. Expect your full PDF report within 48 hours.'}
                </p>
                <p className="text-muted text-sm mt-4">
                  Questions? Email{' '}
                  <a href="mailto:support@getoutloop.com" className="text-electric">support@getoutloop.com</a>
                </p>
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
                  <input name="website" type="text" required value={form.website} onChange={handleChange}
                    placeholder="yourwebsite.com or https://yourwebsite.com"
                    className={inputClass} style={inputStyle} autoComplete="url" />
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
                  <div className="p-4 rounded-lg text-sm space-y-2" style={{ background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.3)' }}>
                    <div className="flex items-center gap-2" style={{ color: '#FF5050' }}>
                      <AlertCircle size={16} />
                      <span>Submission failed{errorDetail ? ` — ${errorDetail}` : ''}.</span>
                    </div>
                    <p className="text-muted text-xs">
                      Please try again, or send your request directly by email:
                    </p>
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
                    >
                      <ExternalLink size={12} /> Email support@getoutloop.com with your details →
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center text-base py-3.5"
                >
                  {status === 'sending'
                    ? 'Submitting…'
                    : tier === 'free'
                    ? 'Request Free Audit →'
                    : `Request ${tierLabels[tier]} Audit →`}
                </button>

                <p className="text-center text-muted/50 text-xs font-inter">
                  {tier === 'free'
                    ? 'Free · No credit card · 24-hr delivery'
                    : 'We will contact you to confirm payment before processing.'}
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            {/* Dynamic benefits card */}
            <div className="glass-card p-6" style={{ border: `1px solid ${benefits.color}` }}>
              <h3 className="font-syne font-semibold text-white mb-4">
                {tierOptions.find((o) => o.value === tier)?.label.split(' —')[0]} includes:
              </h3>
              <ul className="space-y-2.5">
                {benefits.items.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle size={15} className="text-neon mt-0.5 shrink-0" style={{ color: tier === 'reputation' ? '#A855F7' : undefined }} />
                    {b}
                  </li>
                ))}
              </ul>
              {benefits.note && (
                <p className="text-xs text-muted/60 mt-4 italic border-t pt-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  {benefits.note}
                </p>
              )}
            </div>

            {/* What we audit */}
            <div className="glass-card p-6">
              <h3 className="font-syne font-semibold text-white mb-3">
                {tier === 'reputation' ? 'What we audit (Reputation)' : 'What we audit (GEO)'}
              </h3>
              {tier === 'reputation' ? (
                <ol className="space-y-1.5 text-sm text-muted list-decimal list-inside">
                  <li>AI platform perception (ChatGPT, Perplexity)</li>
                  <li>Google Business Profile health</li>
                  <li>Review platform coverage & sentiment</li>
                  <li>Brand mention monitoring</li>
                  <li>Crisis risk indicators</li>
                  <li>Competitor reputation gap</li>
                  <li>Recovery roadmap</li>
                  <li>Monthly sentiment tracking</li>
                </ol>
              ) : (
                <ol className="space-y-1.5 text-sm text-muted list-decimal list-inside">
                  <li>Technical crawler access</li>
                  <li>Structured data (JSON-LD)</li>
                  <li>Content citability</li>
                  <li>E-E-A-T signals</li>
                  <li>Brand authority</li>
                  <li>Platform citations (ChatGPT, Perplexity…)</li>
                  <li>llms.txt presence</li>
                  <li>Competitor gap analysis</li>
                </ol>
              )}
            </div>

            {/* Contact fallback */}
            <div className="glass-card p-5">
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
