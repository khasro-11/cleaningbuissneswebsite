import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'
import { SparkleWordmark } from './logos'

const INK = '#0e1f33'
const INK_SOFT = '#3a4a5e'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

export default function Footer() {
  return (
    <footer style={{ background: PAPER }} className="site-footer">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 40px' }} className="footer-inner">
        <div style={{ height: 1, background: 'rgba(14,31,51,0.08)', marginBottom: 32 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }} className="footer-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SparkleWordmark textColor={INK} accent={SKY} size={14} />
            <div style={{ fontWeight: 600, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: INK_SOFT, opacity: 0.7, fontFamily: 'Manrope, sans-serif' }}>
              Gebäudeservice · Bönen
            </div>
          </div>
          <div style={{ fontSize: 13, color: INK_SOFT }}>
            © 2026 · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>Impressum</a> · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>Datenschutz</a> · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>AGB</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-inner { padding: 0 20px 40px !important; }
          .footer-row { flex-direction: column; align-items: center !important; text-align: center; gap: 12px !important; }
        }
      `}</style>
    </footer>
  )
}
