import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const Stars = () => (
  <div className="flex items-center gap-1 mb-4">
    {Array(5).fill(0).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#d4a030">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

const testimonials = [
  {
    quote: '„CleanPro reinigt unser Büro seit über zwei Jahren. Das Team ist immer pünktlich, diskret und das Ergebnis übertrifft jedes Mal unsere Erwartungen. Absolut empfehlenswert!"',
    name: 'Michael Kaufmann',
    role: 'Geschäftsführer, TechBerlin GmbH',
    avatar: 'MK',
    color: '#19636e',
    dark: false,
  },
  {
    quote: '„Ich nutze CleanPro für die Wohnungsreinigung und bin restlos begeistert. Dieselbe Reinigungskraft jede Woche — das ist Gold wert. Meine Wohnung war noch nie so sauber!"',
    name: 'Sarah Becker',
    role: 'Privatkundin, München',
    avatar: 'SB',
    color: '#2a939f',
    dark: true,
  },
  {
    quote: '„Die Grundreinigung nach unserem Umbau war hervorragend. Das Team hat selbst die unmöglichsten Ecken blitzsauber gemacht. Preis-Leistung ist top!"',
    name: 'Thomas Müller',
    role: 'Immobilienmakler, Hamburg',
    avatar: 'TM',
    color: '#0d3a42',
    dark: false,
  },
]

const logos = ['TechBerlin', 'ImmoPro', 'Gastro GmbH', 'KlinikCenter', 'EventHouse']

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3 block" variants={fadeUp}>Das sagen unsere Kunden</motion.span>
          <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 tracking-tighter2 mb-4" variants={fadeUp}>
            Bewertungen & Referenzen
          </motion.h2>
          <motion.p className="text-teal-700/70 text-lg leading-relaxed2 max-w-xl mx-auto" variants={fadeUp}>
            Vertrauen, das durch Qualität entsteht.
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {testimonials.map(t => (
            <motion.div
              key={t.name}
              className="testimonial-card rounded-2xl p-7"
              style={t.dark ? { background: 'linear-gradient(145deg, #0d3a42, #19636e)', boxShadow: '0 8px 32px rgba(13,58,66,0.3)' } : {}}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <Stars />
              <p className={`text-sm leading-relaxed2 mb-6 ${t.dark ? 'text-white/85' : 'text-teal-900'}`}>{t.quote}</p>
              <div className="flex items-center gap-3">
                <img src={`https://placehold.co/44x44/${t.color.replace('#','')}/ffffff?text=${t.avatar}`} className="w-11 h-11 rounded-full" alt={t.name} />
                <div>
                  <p className={`font-semibold text-sm ${t.dark ? 'text-white' : 'text-teal-950'}`}>{t.name}</p>
                  <p className={`text-xs ${t.dark ? 'text-white/50' : 'text-teal-600/70'}`}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust logos */}
        <motion.div className="mt-16 pt-12 border-t border-teal-100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={viewport}>
          <p className="text-center text-teal-600/50 text-sm font-medium tracking-wider uppercase mb-8">Vertrauen von über 500 Unternehmen & Privatpersonen</p>
          <motion.div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-40" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {logos.map(l => (
              <motion.div key={l} className="text-teal-950 font-display font-bold text-xl tracking-tight" variants={fadeUp}>{l}</motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
