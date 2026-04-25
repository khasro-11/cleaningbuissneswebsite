import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const steps = [
  { num: '01', title: 'Kontakt aufnehmen',   desc: 'Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unser Online-Formular. Wir melden uns innerhalb von 24 Stunden.' },
  { num: '02', title: 'Angebot erhalten',     desc: 'Wir erstellen Ihnen ein individuelles, transparentes Angebot — ganz ohne versteckte Kosten oder Überraschungen.' },
  { num: '03', title: 'Loslegen & entspannen', desc: 'Wir kümmern uns um alles. Sie lehnen sich zurück und genießen Ihr makelloses Ergebnis.' },
]

// Ablauf.jsx

export default function Ablauf() {
  return (
    <section id="ablauf" className="py-16 md:py-24 lg:py-32" style={{ background: '#f8f6f1' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3 block" variants={fadeUp}>Einfach & transparent</motion.span>
          <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 tracking-tighter2 mb-4" variants={fadeUp}>
            So funktioniert's
          </motion.h2>
          <motion.p className="text-teal-700/70 text-lg leading-relaxed2 max-w-xl mx-auto" variants={fadeUp}>
            In drei einfachen Schritten zu Ihrem perfekten Reinigungsservice.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8 relative" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px"
            style={{ background: 'linear-gradient(to right, #19636e, #2a939f, #19636e)' }} />

          {steps.map((s, i) => (
            <motion.div key={s.num} className="flex flex-col items-center text-center" variants={fadeUp}>
              <motion.div
                className="step-num w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <div className="text-center">
                  <span className="text-white/40 text-xs font-semibold tracking-widest block">SCHRITT</span>
                  <p className="text-white font-display text-3xl font-bold leading-none">{s.num}</p>
                </div>
              </motion.div>
              <h3 className="font-display text-xl font-bold text-teal-950 mb-3 tracking-tight">{s.title}</h3>
              <p className="text-teal-700/70 text-sm leading-relaxed2">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={viewport}>
          <motion.a
            href="#kontakt"
            className="btn-primary inline-block px-10 py-4 rounded-xl text-base font-semibold text-teal-950 no-underline"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Jetzt kostenlos anfragen
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
