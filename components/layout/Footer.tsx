import Link from 'next/link'

const serviceLinks = [
  { href: '/services/seo-geo-consulting', label: 'GEO Audit & Strategy' },
  { href: '/pricing', label: 'Pricing Plans' },
  { href: '/audit', label: 'Self-Service Audit' },
  { href: '/geo-explained', label: 'What is GEO?' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#060917', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-syne font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}
              >
                GL
              </div>
              <span className="font-syne font-bold text-white text-lg">GetOutLoop</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Get Cited by AI. Get Found by Everyone.
            </p>
            <p className="text-xs text-muted/60 leading-relaxed mb-5">GEO · AI Search · Schema · E-E-A-T</p>
            <a
              href="https://www.linkedin.com/in/ronnelbesagredotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-electric transition-colors"
            >
              Founder — Ronnel Besagre on LinkedIn ↗
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:support@getoutloop.com" className="text-muted text-sm hover:text-white transition-colors">
                  support@getoutloop.com
                </a>
              </li>
              <li>
                <a href="tel:+60174980981" className="text-muted text-sm hover:text-white transition-colors">
                  +60 174 980 981
                </a>
              </li>
              <li className="text-muted text-sm">Johor Bahru, Malaysia</li>
              <li className="text-muted text-xs">Serving APAC · Global Remote</li>
            </ul>
            <Link href="/audit" className="btn-primary text-sm py-2.5 px-5">
              Get Free Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} GetOutLoop. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-muted text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-muted text-xs hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-muted text-xs flex items-center gap-1">
              <span style={{ color: '#00FF9D' }}>●</span> HTTPS Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
