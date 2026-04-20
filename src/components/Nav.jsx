import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Logo = () => (
  <a href="#" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-gold-300 focus-visible:outline-offset-2 rounded">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2a939f,#19636e)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 22V12M3 7l9 5 9-5" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="font-display font-semibold text-white text-lg tracking-tight">CleanPro</span>
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
            <a href="tel:+4915511435755" className="text-white/75 text-sm font-medium hover:text-white transition-colors duration-200">
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
            className="md:hidden text-white/80 hover:text-white transition-colors rounded p-1"
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
                <a key={l.href} href={l.href} className="text-white/80 text-sm font-medium hover:text-white transition-colors" onClick={() => setOpen(false)}>
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
