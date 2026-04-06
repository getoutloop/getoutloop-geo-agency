'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, BarChart3, Star } from 'lucide-react'

const servicesMenu = [
  {
    href: '/services#geo-audit',
    label: 'GEO Audit',
    desc: 'Get cited by AI search',
    icon: <BarChart3 size={16} className="text-electric" />,
    color: '#00A8FF',
  },
  {
    href: '/reputation',
    label: 'Reputation Management',
    desc: 'Control what AI says about you',
    icon: <Star size={16} style={{ color: '#A855F7' }} />,
    color: '#A855F7',
  },
]

const navLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-syne font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)', color: '#0A0E27' }}
            >
              GL
            </div>
            <div className="hidden sm:block">
              <div className="font-syne font-bold text-white text-lg leading-tight">GetOutLoop</div>
              <div className="text-[10px] text-muted font-inter tracking-widest uppercase">AI Visibility Agency</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm text-muted hover:text-white transition-colors font-inter"
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass-effect rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                >
                  <div className="p-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="mt-0.5 shrink-0">{item.icon}</div>
                        <div>
                          <div className="text-sm font-inter font-medium text-white group-hover:text-white">{item.label}</div>
                          <div className="text-xs text-muted mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="mx-3 my-1 border-t border-white/5" />
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-xs text-muted font-inter">View all services →</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors font-inter"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/audit" className="btn-primary text-sm py-2 px-5 hidden md:inline-flex">
              Get Free Audit
            </Link>
            <button
              className="md:hidden text-muted hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-effect border-t border-white/5">
          <div className="section-container py-4 flex flex-col gap-1">
            {/* Services label */}
            <div className="text-xs text-muted/50 font-inter uppercase tracking-widest px-1 pt-2 pb-1">Services</div>
            {servicesMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.icon}
                <div>
                  <div className="text-sm text-white font-inter">{item.label}</div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
              </Link>
            ))}
            <div className="border-t border-white/5 my-2" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors font-inter py-2.5 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/audit" className="btn-primary text-sm py-2.5 text-center justify-center mt-2" onClick={() => setMobileOpen(false)}>
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
