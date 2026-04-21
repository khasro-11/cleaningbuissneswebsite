import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Logo = () => (
  <a href="#" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-gold-300 focus-visible:outline-offset-2 rounded">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="navLogoBg" cx="38%" cy="28%" r="85%">
          <stop offset="0%" stopColor="#52d4e6"/>
          <stop offset="100%" stopColor="#0b4a56"/>
        </radialGradient>
        <filter id="navLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Outer subtle ring */}
      <circle cx="20" cy="20" r="19.5" fill="url(#navLogoBg)" opacity="0.18"/>
      {/* Main badge */}
      <circle cx="20" cy="20" r="18" fill="url(#navLogoBg)"/>
      {/* 4-pointed sparkle star — clean shine + perfection */}
      <path d="M20 7 L23.3 16.7 L33 20 L23.3 23.3 L20 33 L16.7 23.3 L7 20 L16.7 16.7 Z" fill="white" filter="url(#navLogoGlow)"/>
      {/* Accent sparkle dots */}
      <circle cx="11.5" cy="11.5" r="1.3" fill="white" opacity="0.55"/>
      <circle cx="29" cy="11" r="0.9" fill="white" opacity="0.4"/>
      <circle cx="29.5" cy="28.5" r="1.2" fill="white" opacity="0.45"/>
    </svg>
    <div className="flex flex-col leading-none gap-[3px]">
      <span className="font-display font-bold text-white text-[1.05rem] tracking-tight leading-none">CleanPro</span>
      <span className="text-[8.5px] text-white/40 tracking-[0.2em] uppercase font-sans">Reinigungsservice</span>
    </div>
  </a>
)

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#vorteile',   label: 'Vorteile' },
  { href: '#ablauf',     label: 'Ablauf' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#kontakt',    label: 'Kontakt' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('scroll', close)
    return () => window.removeEventListener('scroll', close)
  }, [])

  return (
    <motion.nav
      className="nav-glass fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-white/75 text-sm font-medium">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+4915511435755" className="text-white/75 text-sm font-medium hover:text-white focus-visible:text-gold-300 focus-visible:outline-none active:text-white/60 transition-colors duration-200">
              +49 155 1143 5755
            </a>
            <motion.a
              href="#kontakt"
              className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-teal-950 no-underline"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Angebot anfragen
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white focus-visible:text-gold-300 focus-visible:outline-none active:opacity-60 transition-colors rounded p-1"
            onClick={() => setOpen(o => !o)}
            aria-label="Menü"
          >
            <motion.svg
              width="22" height="22" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.8"
              animate={open ? 'open' : 'closed'}
            >
              {open ? (
                <motion.path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-white/10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-4 flex flex-col gap-4 bg-teal-950/95">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-white/80 text-sm font-medium hover:text-white focus-visible:text-gold-300 focus-visible:outline-none active:opacity-60 transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" className="btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-teal-950 text-center mt-1" onClick={() => setOpen(false)}>
                Angebot anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
