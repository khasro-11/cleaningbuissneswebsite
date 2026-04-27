import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INK = '#0e1f33'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

function LogoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill={PAPER} />
      <path d="M16 4 a12 12 0 0 1 12 12 L16 16 Z" fill={SKY} />
      <circle cx="16" cy="16" r="2.4" fill={INK} />
    </svg>
  )
}

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ablauf',     label: 'Ablauf' },
  { href: '#vorteile',   label: 'Vorteile' },
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
    <div className="fixed top-0 left-0 right-0 z-50 px-3 pt-3" style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 12 }}>
      <motion.nav
        style={{ background: INK, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <LogoMark size={22} />
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', color: PAPER }}>
            CleanPro <span style={{ color: SKY, fontWeight: 400 }}>Reinigungsservice</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ display: 'none', alignItems: 'center', gap: 28 }}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: 'rgba(245,247,248,0.70)', fontSize: 14, textDecoration: 'none', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* CTA — visible on all sizes */}
          <motion.a
            href="#kontakt"
            style={{
              background: SKY, color: INK, padding: '7px 14px',
              borderRadius: 999, fontWeight: 700, fontSize: 13,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
              whiteSpace: 'nowrap',
            }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Termin →
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            style={{ color: 'rgba(245,247,248,0.8)', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', width: 32, height: 32, borderRadius: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 0 }}
            onClick={() => setOpen(o => !o)}
            aria-label="Menü"
          >
            {open ? (
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span style={{ width: 14, height: 1.5, background: PAPER, borderRadius: 1 }} />
                <span style={{ width: 14, height: 1.5, background: PAPER, borderRadius: 1 }} />
              </>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={{ background: INK, borderRadius: 20, marginTop: 8 }}
            className="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ color: 'rgba(245,247,248,0.75)', fontSize: 15, textDecoration: 'none', fontWeight: 500 }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (min-width: 768px) {
          nav .hidden { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
