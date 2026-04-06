'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'getoutloop_cookie_consent'

type ConsentState = 'accepted' | 'rejected' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null)
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentState
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored)
        setVisible(false)
      } else {
        // Small delay so banner doesn't flash before hydration
        const timer = setTimeout(() => setVisible(true), 800)
        return () => clearTimeout(timer)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch { /* noop */ }
    setConsent('accepted')
    setVisible(false)
  }

  const handleReject = () => {
    try { localStorage.setItem(STORAGE_KEY, 'rejected') } catch { /* noop */ }
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible || consent !== null) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="max-w-4xl mx-auto rounded-2xl p-5 md:p-6"
        style={{
          background: 'rgba(10,14,39,0.97)',
          border: '1px solid rgba(0,168,255,0.25)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -4px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,168,255,0.08)',
          pointerEvents: 'auto',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-5">
          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <span className="text-xl shrink-0 mt-0.5">🍪</span>
            <div>
              <p className="text-white text-sm font-semibold font-syne mb-1">
                We use cookies &amp; analytics
              </p>
              <p className="text-muted text-xs leading-relaxed font-inter">
                GetOutLoop uses essential cookies for the site to function, and optional analytics
                to understand how visitors use our pages. We do not sell your data.{' '}
                <button
                  onClick={() => setShowDetails((v) => !v)}
                  className="text-electric underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {showDetails ? 'Hide details' : 'See details'}
                </button>
              </p>

              {showDetails && (
                <div className="mt-3 space-y-2 text-xs text-muted font-inter">
                  <div className="flex items-start gap-2">
                    <span className="text-neon mt-0.5 shrink-0">✓</span>
                    <span><strong className="text-white">Essential cookies</strong> — required for forms, navigation, and security. Always active.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span style={{ color: '#B0B8C8' }} className="mt-0.5 shrink-0">○</span>
                    <span><strong className="text-white">Analytics cookies</strong> — help us understand page performance (e.g. Google Analytics). Only set if you Accept.</span>
                  </div>
                  <p className="text-muted/60 pt-1">
                    See our{' '}
                    <Link href="/privacy-policy" className="text-electric underline underline-offset-2">Privacy Policy</Link>
                    {' '}for full details. Applies to visitors from the EU, UK, Australia, and globally.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={handleReject}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold font-inter text-muted transition-colors hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'transparent' }}
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleAccept}
              className="btn-primary px-5 py-2.5 text-xs"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
