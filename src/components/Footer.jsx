import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const INK = '#0e1f33'
const INK_SOFT = '#3a4a5e'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

function LogoMark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill={PAPER} />
      <path d="M16 4 a12 12 0 0 1 12 12 L16 16 Z" fill={SKY} />
      <circle cx="16" cy="16" r="2.4" fill={INK} />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: PAPER }} className="site-footer">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 40px' }} className="footer-inner">
        <div style={{ height: 1, background: 'rgba(14,31,51,0.08)', marginBottom: 32 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }} className="footer-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoMark size={20} />
            <span style={{ fontWeight: 700, fontSize: 14, color: INK }}>CleanPro <span style={{ color: SKY, fontWeight: 400 }}>Reinigungsservice</span></span>
          </div>
          <div style={{ fontSize: 13, color: INK_SOFT }}>
            © 2026 · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>Impressum</a> · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>Datenschutz</a> · <a href="#" style={{ color: INK_SOFT, textDecoration: 'none' }}>AGB</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-inner { padding: 0 20px 100px !important; }
          .footer-row { flex-direction: column; align-items: center !important; text-align: center; gap: 12px !important; }
        }
      `}</style>
    </footer>
  )
}
