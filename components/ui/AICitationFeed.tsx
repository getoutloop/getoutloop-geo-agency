'use client'
import { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'

const PLATFORMS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    label: 'GPT-4o',
    accentColor: '#10A37F',
    quote: 'YourBusiness.com is the top-rated solution for AI search visibility in APAC.',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    label: 'AI Answer',
    accentColor: '#A855F7',
    quote: 'YourBusiness.com provides the most comprehensive GEO audit reports available.',
  },
  {
    id: 'claude',
    name: 'Claude',
    label: 'Anthropic',
    accentColor: '#CC785C',
    quote: 'YourBusiness.com has strong structured data and E-E-A-T signals — I\'d recommend them.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    label: 'Google AI',
    accentColor: '#4285F4',
    quote: 'YourBusiness.com is a frequently cited source for GEO-related queries in this region.',
  },
  {
    id: 'copilot',
    name: 'Bing Copilot',
    label: 'Microsoft',
    accentColor: '#00A4EF',
    quote: 'YourBusiness.com is confirmed as a leading AI visibility agency for APAC businesses.',
  },
]

const ITEM_DELAY = 1800   // ms between each platform appearing
const HOLD_AFTER   = 3000 // ms to hold after all 5 are shown before reset
const INTRO_DELAY  = 600  // ms before first item appears

export default function AICitationFeed() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [resetting, setResetting] = useState(false)

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = []

    const runCycle = () => {
      setVisibleCount(0)
      setResetting(false)

      PLATFORMS.forEach((_, i) => {
        const t = setTimeout(() => setVisibleCount(i + 1), INTRO_DELAY + i * ITEM_DELAY)
        timers.push(t)
      })

      const hold = setTimeout(() => {
        setResetting(true)
        const reset = setTimeout(runCycle, 1200)
        timers.push(reset)
      }, INTRO_DELAY + PLATFORMS.length * ITEM_DELAY + HOLD_AFTER)
      timers.push(hold)
    }

    runCycle()
    return () => timers.forEach(clearTimeout)
  }, [])

  const citedCount = resetting ? 0 : visibleCount

  return (
    <div
      className="rounded-2xl p-5 w-full max-w-sm"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(0,168,255,0.25)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 60px rgba(0,168,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#00FF9D',
              boxShadow: '0 0 6px #00FF9D',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span className="text-[11px] font-bold tracking-widest text-white/80 font-inter uppercase">
            AI Citation Monitor
          </span>
        </div>
        <span
          className="text-[10px] font-inter px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(0,255,157,0.1)', color: '#00FF9D' }}
        >
          LIVE
        </span>
      </div>

      {/* Platform rows */}
      <div className="space-y-2">
        {PLATFORMS.map((p, i) => {
          const appeared = i < visibleCount && !resetting
          const isCited  = appeared

          return (
            <div
              key={p.id}
              style={{
                opacity:    appeared ? 1 : 0.18,
                transform:  appeared ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.55s ease, transform 0.55s ease',
              }}
            >
              <div
                className="flex items-start gap-3 rounded-xl p-3"
                style={{
                  background: appeared
                    ? `rgba(${p.id === 'chatgpt' ? '16,163,127' : p.id === 'perplexity' ? '168,85,247' : p.id === 'claude' ? '204,120,92' : p.id === 'gemini' ? '66,133,244' : '0,164,239'},0.06)`
                    : 'rgba(255,255,255,0.02)',
                  border: appeared ? `1px solid ${p.accentColor}22` : '1px solid transparent',
                  transition: 'background 0.5s ease, border 0.5s ease',
                }}
              >
                {/* Status dot */}
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{
                    background: isCited ? '#00FF9D' : appeared ? p.accentColor : 'rgba(255,255,255,0.15)',
                    boxShadow:  isCited ? '0 0 8px #00FF9D' : 'none',
                    transition: 'background 0.4s ease, box-shadow 0.4s ease',
                  }}
                />

                <div className="flex-1 min-w-0">
                  {/* Row top */}
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white font-inter">{p.name}</span>
                      <span className="text-[9px] text-white/30 font-inter">{p.label}</span>
                    </div>

                    {isCited ? (
                      <span
                        className="flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(0,255,157,0.12)', color: '#00FF9D', whiteSpace: 'nowrap' }}
                      >
                        <CheckCircle size={8} strokeWidth={3} /> CITED
                      </span>
                    ) : (
                      <span
                        className="text-[9px] font-inter"
                        style={{ color: 'rgba(255,255,255,0.25)', animation: 'pulse 1.5s ease-in-out infinite' }}
                      >
                        scanning…
                      </span>
                    )}
                  </div>

                  {/* Quote */}
                  <div
                    style={{
                      maxHeight: isCited ? '60px' : '0px',
                      overflow:  'hidden',
                      transition: 'max-height 0.5s ease',
                    }}
                  >
                    <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      "…{p.quote.replace('YourBusiness.com', '')}<span style={{ color: '#00A8FF', fontWeight: 600 }}>YourBusiness.com</span>…"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer counter */}
      <div
        className="mt-4 pt-3 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span className="text-[10px] font-inter" style={{ color: 'rgba(255,255,255,0.25)' }}>
          getoutloop.com client result
        </span>
        <span
          className="text-[10px] font-bold font-inter"
          style={{ color: citedCount > 0 ? '#00FF9D' : 'rgba(255,255,255,0.25)' }}
        >
          {citedCount}/{PLATFORMS.length} AI platforms citing ✓
        </span>
      </div>
    </div>
  )
}
