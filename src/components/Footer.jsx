import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const Logo = () => (
  <div className="flex items-center gap-2.5 mb-4">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2a939f,#19636e)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 22V12M3 7l9 5 9-5" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="font-display font-semibold text-white text-lg tracking-tight">CleanPro</span>
  </div>
)

const SocialBtn = ({ label, children }) => (
  <motion.a
    href="#"
    aria-label={label}
    className="w-9 h-9 rounded-lg flex items-center justify-center"
    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
    whileHover={{ background: 'rgba(255,255,255,0.16)', scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  >
    {children}
  </motion.a>
)

export default function Footer() {
  return (
    <footer className="bg-teal-950 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-12 border-b border-white/10"
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Brand */}
          <motion.div className="col-span-2 md:col-span-2" variants={fadeUp}>
            <Logo />
            <p className="text-white/45 text-sm leading-relaxed2 max-w-xs mb-5">
              Professionelle Reinigungsdienstleistungen für Gewerbe und Privat — seit über 10 Jahren eine feste Größe in Deutschland.
            </p>
            <div className="flex items-center gap-3">
              <SocialBtn label="Instagram">
                <svg width="15" height="15" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialBtn>
              <SocialBtn label="Facebook">
                <svg width="15" height="15" fill="rgba(255,255,255,0.7)" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </SocialBtn>
              <SocialBtn label="LinkedIn">
                <svg width="15" height="15" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </SocialBtn>
            </div>
          </motion.div>

          {/* Leistungen */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Leistungen</h4>
            <ul className="space-y-3">
              {['Büroreinigung','Gebäudereinigung','Grundreinigung','Fensterreinigung','Baureinigung'].map(l => (
                <li key={l}><a href="#leistungen" className="text-white/45 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* Unternehmen */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Unternehmen</h4>
            <ul className="space-y-3">
              {[
                { href: '#vorteile',   label: 'Über uns' },
                { href: '#referenzen', label: 'Referenzen' },
                { href: '#kontakt',    label: 'Kontakt' },
                { href: '#',           label: 'Impressum' },
                { href: '#',           label: 'Datenschutz' },
              ].map(l => (
                <li key={l.label}><a href={l.href} className="text-white/45 text-sm hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 CleanPro GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Versichert & zertifiziert in Deutschland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
