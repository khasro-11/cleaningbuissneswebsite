import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const INK = '#0e1f33'
const INK_SOFT = '#3a4a5e'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

function LogoMark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill={INK} />
      <path
        d="M 25.27 11.54 A 10.5 10.5 0 1 0 25.27 24.46"
        stroke={SKY}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M 26.5 12.3 L 27.1 13.9 L 28.7 14.5 L 27.1 15.1 L 26.5 16.7 L 25.9 15.1 L 24.3 14.5 L 25.9 13.9 Z"
        fill={PAPER}
      />
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
            <span style={{ fontWeight: 300, fontSize: 14, letterSpacing: '0.01em', color: 'rgba(14,31,51,0.7)' }}>
              Clean<span style={{ fontWeight: 800, color: INK, letterSpacing: '-0.02em' }}>Pro</span>
              <span style={{ fontWeight: 400, fontSize: 12, color: INK_SOFT, marginLeft: 6 }}>Reinigungsservice</span>
            </span>
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
