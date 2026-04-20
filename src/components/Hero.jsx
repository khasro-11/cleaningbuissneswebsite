import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const stats = [
  { num: '500+', label: 'Zufriedene Kunden' },
  { num: '10+',  label: 'Jahre Erfahrung' },
  { num: '98%',  label: 'Empfehlungsrate' },
  { num: '24h',  label: 'Reaktionszeit' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grain"
      style={{ background: 'linear-gradient(155deg, #0a2a30 0%, #0d3a42 35%, #19636e 70%, #0d3a42 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 40%, rgba(42,147,159,0.25) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 70%, rgba(212,160,48,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <motion.div className="max-w-2xl" variants={stagger} initial="hidden" animate="visible">

          {/* Trust badge */}
          <motion.div
            className="trust-badge inline-flex items-center gap-2 px-4 py-2 mb-8"
            variants={fadeUp}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
            <span className="text-white/80 text-xs font-medium tracking-wide uppercase">Über 500 zufriedene Kunden in Deutschland</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tighter2 mb-6"
            variants={fadeUp}
          >
            Sauberkeit,<br />
            <span style={{ background: 'linear-gradient(135deg,#e8bc54,#f0d080)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              die überzeugt.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p className="text-white/70 text-base sm:text-lg leading-relaxed2 mb-10 max-w-md" variants={fadeUp}>
            Professionelle Reinigungsdienstleistungen für Büros, Wohnungen und Gewerbeimmobilien — zuverlässig, gründlich und auf Ihren Bedarf zugeschnitten.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp}>
            <motion.a
              href="#kontakt"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-teal-950 text-center no-underline"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Kostenloses Angebot
            </motion.a>
            <motion.a
              href="#leistungen"
              className="btn-outline px-8 py-4 rounded-xl text-base font-semibold text-center no-underline"
              whileHover={{ background: 'rgba(255,255,255,0.12)', borderColor: 'white', y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Unsere Leistungen
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8 mt-16" variants={stagger}>
            {stats.map(s => (
              <motion.div
                key={s.num}
                className="bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 border border-white/10 sm:border-0"
                variants={fadeUp}
              >
                <p className="text-white text-3xl font-display font-bold">{s.num}</p>
                <p className="text-white/55 text-sm mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Scrollen</span>
        <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </motion.svg>
      </motion.div>
    </section>
  )
}
