import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const INK = '#0e1f33'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

const steps = [
  { n: 1, t: 'Kurze Anfrage',   body: 'Online-Formular oder Anruf. 60 Sekunden.' },
  { n: 2, t: 'Vor-Ort-Termin',  body: 'Wir kommen zur kostenlosen Besichtigung.' },
  { n: 3, t: 'Festes Team',     body: 'Sie bekommen feste Gesichter zugeteilt.' },
  { n: 4, t: 'Monatsbericht',   body: 'Fotos, Stunden, Eigenkontrolle inklusive.' },
]

export default function Ablauf() {
  return (
    <section id="ablauf" style={{ background: PAPER }}>
      <div className="ablauf-container" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: INK, color: PAPER, borderRadius: 28, position: 'relative', overflow: 'hidden' }} className="ablauf-card">

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }} className="ablauf-header" variants={fadeUp}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: SKY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ablauf</div>
                <h2 className="ablauf-heading" style={{ fontWeight: 800, margin: '8px 0 0', letterSpacing: '-0.035em', lineHeight: 1.05 }}>
                  Vom Anruf zum sauberen Objekt<br />
                  in <span style={{ color: SKY }}>vier Schritten.</span>
                </h2>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="steps-grid" style={{ position: 'relative' }}>
              {/* Desktop connector line */}
              <div className="steps-connector" style={{ position: 'absolute', top: 27, left: '12.5%', right: '12.5%', height: 1, borderTop: '1px dashed rgba(127,179,213,0.4)', pointerEvents: 'none' }} />

              {steps.map(s => (
                <motion.div key={s.n} className="step-item" variants={fadeUp}>
                  <div className="step-num" style={{ background: SKY, color: INK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, position: 'relative', zIndex: 1, flexShrink: 0 }}>
                    {s.n}
                  </div>
                  <div className="step-text">
                    <div className="step-title" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>{s.t}</div>
                    <div className="step-body" style={{ color: 'rgba(245,247,248,0.65)', lineHeight: 1.5 }}>{s.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div style={{ display: 'flex', justifyContent: 'center' }} className="ablauf-cta" variants={fadeUp}>
              <motion.a
                href="#kontakt"
                style={{ background: SKY, color: INK, padding: '14px 28px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Jetzt kostenlos anfragen →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Desktop */
        @media (min-width: 768px) {
          .ablauf-container { padding: 40px 40px; }
          .ablauf-card { padding: 56px; }
          .ablauf-heading { font-size: clamp(32px, 3.5vw, 52px); }
          .ablauf-header { margin-bottom: 48px; }
          .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
          .step-item { display: flex; flex-direction: column; padding-right: 24px; }
          .step-num { width: 56px; height: 56px; border-radius: 99px; font-size: 22px; }
          .step-title { font-size: 22px; margin-top: 24px; }
          .step-body { font-size: 14px; margin-top: 8px; }
          .step-text { flex: 1; }
          .ablauf-cta { margin-top: 48px; }
          .steps-connector { display: block; }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .ablauf-container { padding: 32px 12px 0; }
          .ablauf-card { padding: 28px; border-radius: 22px !important; }
          .ablauf-heading { font-size: 28px; }
          .ablauf-header { margin-bottom: 24px; }
          .steps-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
          .step-item { display: grid; grid-template-columns: 44px 1fr; gap: 14px; align-items: flex-start; padding-right: 0 !important; }
          .step-num { width: 44px; height: 44px; border-radius: 99px; font-size: 18px; }
          .step-title { font-size: 16px; margin-top: 0; }
          .step-body { font-size: 13px; margin-top: 4px; }
          .ablauf-cta { margin-top: 28px; }
          .steps-connector { display: none !important; }
        }
      `}</style>
    </section>
  )
}
