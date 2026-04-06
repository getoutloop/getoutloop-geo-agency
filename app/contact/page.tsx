'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.getoutloop.cloud/webhook/getoutloop-contact'

const serviceOptions = [
  'GEO Free Audit (I just want to see my score)',
  'GEO PRO — Full PDF Report ($120/mo)',
  'GEO Complete — Audit + Fix Code ($480/mo)',
  'I want to discuss a custom arrangement',
  'Not sure — help me decide',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', service: '', message: '' })

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
    try {
      const payload = { ...form, website: normalizeUrl(form.website), timestamp: new Date().toISOString(), source: 'getoutloop.com/contact' }
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-xl px-4 py-3 text-sm text-white font-inter outline-none transition-colors'
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }
  const labelClass = 'block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-inter'

  return (
    <section className="section-padding pt-32 bg-grid-pattern" style={{ background: '#0A0E27', minHeight: '100vh' }}>
      <div className="section-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="label-tag mb-3">Get in Touch</div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">Send Your Request</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">We respond within 24 hours. No credit card required for the free audit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 glass-card p-7">
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-neon mx-auto mb-4" />
                <h2 className="font-syne font-bold text-2xl text-white mb-3">Message Received!</h2>
                <p className="text-muted leading-relaxed">
                  We&apos;ll be in touch within 24 hours. Check your inbox for a confirmation.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Company</label>
                    <input name="company" type="text" value={form.company} onChange={handleChange}
                      placeholder="Your company" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className={labelClass}>Website URL</label>
                    <input name="website" type="text" value={form.website} onChange={handleChange}
                      placeholder="yourwebsite.com" className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Service Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className={inputClass} style={{ ...inputStyle, background: '#0D1429' }}>
                    <option value="" style={{ background: '#0D1429' }}>Select a service...</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} style={{ background: '#0D1429', color: '#fff' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell me about your goals, challenges, or questions..."
                    className={inputClass} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg text-sm"
                    style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', color: '#FF5050' }}>
                    <AlertCircle size={16} /> Error sending. Email <a href="mailto:support@getoutloop.com" className="underline ml-1">support@getoutloop.com</a> directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-base py-3.5">
                  {status === 'sending' ? 'Sending...' : 'Send My Request →'}
                </button>
                <p className="text-center text-muted/50 text-xs font-inter">Free audit · 24-hour response · No credit card required</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-syne font-semibold text-white mb-4">Contact Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-electric mt-0.5 shrink-0" />
                  <a href="mailto:support@getoutloop.com" className="text-muted text-sm hover:text-white transition-colors">support@getoutloop.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-electric mt-0.5 shrink-0" />
                  <a href="https://wa.me/60174980981" className="text-muted text-sm hover:text-white transition-colors">+60 174 980 981 (WhatsApp)</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-electric mt-0.5 shrink-0" />
                  <span className="text-muted text-sm">Johor Bahru, Malaysia<br /><span className="text-xs text-muted/60">APAC · Remote Worldwide</span></span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-syne font-semibold text-white mb-3">Book a Discovery Call</h3>
              <p className="text-muted text-sm mb-4">Prefer to talk first? Book a 30-min GEO walkthrough call.</p>
              <a href="https://calendly.com/ronnelbesagre/geo-audit-walkthrough" target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-sm py-2.5 w-full justify-center">
                Book A Discovery Call →
              </a>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-syne font-semibold text-white mb-3">Process</h3>
              <ol className="space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-electric font-bold">1.</span> Submit your request</li>
                <li className="flex gap-2"><span className="text-electric font-bold">2.</span> We confirm within 24 hrs</li>
                <li className="flex gap-2"><span className="text-electric font-bold">3.</span> Audit runs & report delivered</li>
                <li className="flex gap-2"><span className="text-electric font-bold">4.</span> Implement & monitor</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
