import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../utils/animations'

const Star = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#d4a030">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const usps = [
  {
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>,
    title: 'Geprüfte & versicherte Fachkräfte',
    desc: 'Alle Mitarbeiter werden sorgfältig ausgewählt, geschult und sind vollständig versichert.',
  },
  {
    icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
    title: 'Pünktlichkeit & Zuverlässigkeit',
    desc: 'Wir erscheinen pünktlich und halten Termine ein — ohne Ausreden.',
  },
  {
    icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>,
    title: 'Umweltfreundliche Reinigungsmittel',
    desc: 'Wir verwenden biologisch abbaubare, zertifizierte Produkte — schonend für Mensch und Umwelt.',
  },
  {
    icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>,
    title: 'Persönlicher Ansprechpartner',
    desc: 'Kein Callcenter — ein fester Ansprechpartner, der Ihre Wünsche kennt.',
  },
]

export default function Vorteile() {
  return (
    <section
      id="vorteile"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden grain"
      style={{ background: 'linear-gradient(160deg, #0d3a42 0%, #19636e 50%, #0d3a42 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 90% 50%, rgba(212,160,48,0.08) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 10% 60%, rgba(42,147,159,0.15) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block" variants={fadeUp}>
              Warum CleanPro?
            </motion.span>
            <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter2 mb-6 leading-tight" variants={fadeUp}>
              Qualität, auf die<br />Sie sich verlassen können
            </motion.h2>
            <motion.p className="text-white/65 text-lg leading-relaxed2 mb-10" variants={fadeUp}>
              Wir verstehen, dass Vertrauen die Grundlage jeder guten Geschäftsbeziehung ist. Deshalb setzen wir auf geschulte Fachkräfte, geprüfte Reinigungsmittel und transparente Kommunikation.
            </motion.p>

            <div className="space-y-5">
              {usps.map((u, i) => (
                <motion.div key={u.title} className="flex items-start gap-4" variants={slideLeft} custom={i}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <svg width="18" height="18" fill="none" stroke="#d4a030" strokeWidth="2" viewBox="0 0 24 24">{u.icon}</svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">{u.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div className="relative pb-8 md:pb-6" variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)' }}>
              <img src="https://placehold.co/600x700/19636e/4db8c6?text=Professionelle+Reinigung" alt="Reinigung" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/30 to-transparent" />
            </div>

            {/* Floating review card — desktop only */}
            <motion.div
              className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl p-5"
              style={{ boxShadow: '0 8px 32px rgba(13,58,66,0.2)' }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={viewport}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {['A','B','C'].map(l => (
                    <img key={l} src={`https://placehold.co/32x32/19636e/ffffff?text=${l}`} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                  ))}
                </div>
                <div>
                  <p className="text-teal-950 font-semibold text-sm">Neueste Bewertung</p>
                  <div className="flex gap-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} />)}</div>
                </div>
              </div>
              <p className="text-teal-800 text-xs leading-relaxed max-w-[180px]">"Sehr professionell und immer pünktlich!"</p>
            </motion.div>

            {/* ISO badge — desktop only */}
            <motion.div
              className="hidden md:flex absolute -top-4 -right-4 bg-gold-400 text-teal-950 rounded-full w-16 h-16 flex-col items-center justify-center text-center"
              style={{ boxShadow: '0 4px 16px rgba(212,160,48,0.4)' }}
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 18 }}
              viewport={viewport}
            >
              <p className="text-xs font-bold leading-none">ISO</p>
              <p className="text-xs font-bold leading-none">9001</p>
            </motion.div>

            {/* Mobile inline review */}
            <div className="md:hidden mt-4 bg-white/10 border border-white/15 rounded-2xl p-4 flex items-center gap-3">
              <div className="flex -space-x-2 flex-shrink-0">
                {['A','B','C'].map(l => (
                  <img key={l} src={`https://placehold.co/32x32/19636e/ffffff?text=${l}`} className="w-8 h-8 rounded-full border-2 border-white/30" alt="" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} />)}</div>
                <p className="text-white/75 text-xs">"Sehr professionell und immer pünktlich!"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
