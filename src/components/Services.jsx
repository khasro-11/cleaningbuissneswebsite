import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../utils/animations'

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a939f" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

const services = [
  {
    gradient: 'linear-gradient(135deg,#0d3a42 0%,#19636e 50%,#2a939f 100%)',
    radial: 'radial-gradient(ellipse 80% 80% at 30% 40%,rgba(255,255,255,0.07) 0%,transparent 70%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    ghostIcon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Büroreinigung',
    desc: 'Saubere Arbeitsumgebungen steigern die Produktivität. Wir reinigen Büros, Konferenzräume und Gemeinschaftsflächen — diskret und termingerecht.',
    items: ['Tägliche & wöchentliche Reinigung', 'Sanitäranlagen & Küchen', 'Auf Wunsch außerhalb der Bürozeiten'],
  },
  {
    gradient: 'linear-gradient(135deg,#19636e 0%,#2a939f 50%,#46aebb 100%)',
    radial: 'radial-gradient(ellipse 80% 80% at 70% 30%,rgba(255,255,255,0.1) 0%,transparent 70%)',
    badge: 'Beliebt',
    cardBg: 'linear-gradient(160deg, #f8fffe 0%, #ffffff 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="15" rx="1"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    ghostIcon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1">
        <rect x="2" y="7" width="20" height="15" rx="1"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Gebäudereinigung',
    desc: 'Sauberkeit für Bürogebäude, Wohnanlagen und Gewerbeimmobilien — regelmäßig, zuverlässig und nach höchsten Standards.',
    items: ['Treppenhäuser & Gemeinschaftsflächen', 'Bürogebäude & Gewerbeimmobilien', 'Individuelle Reinigungsintervalle'],
  },
  {
    gradient: 'linear-gradient(135deg,#0a2a30 0%,#0d3a42 50%,#19636e 100%)',
    radial: 'radial-gradient(ellipse 80% 80% at 50% 20%,rgba(212,160,48,0.12) 0%,transparent 70%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    ghostIcon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Grund- & Tiefenreinigung',
    desc: 'Wenn es mehr braucht als den Standard. Unsere Grundreinigung beseitigt hartnäckige Verschmutzungen und bringt Ihre Räume wieder zum Strahlen.',
    items: ['Ein- & Auszugsreinigung', 'Baureinigung nach Renovierung', 'Fliesen-, Parkett- & Teppichpflege'],
  },
]

const pills = ['Fensterreinigung', 'Treppenhaus', 'Kliniken & Praxen', 'Gastronomie', 'Eventaufbau & -abbau', 'Schädlingsbekämpfung']

export default function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3 block" variants={fadeUp}>Was wir anbieten</motion.span>
          <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 tracking-tighter2 mb-4" variants={fadeUp}>
            Unsere Leistungen
          </motion.h2>
          <motion.p className="text-teal-700/70 text-lg leading-relaxed2 max-w-xl mx-auto" variants={fadeUp}>
            Maßgeschneiderte Reinigungslösungen für jeden Bedarf — mit Qualitätssicherung und festen Ansprechpartnern.
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-elevated rounded-2xl overflow-hidden cursor-default"
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: '0 2px 4px rgba(13,58,66,0.06), 0 8px 24px rgba(13,58,66,0.12), 0 32px 64px rgba(13,58,66,0.10)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              {/* Card header */}
              <div className="relative h-44 overflow-hidden flex items-center justify-center" style={{ background: s.gradient }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: s.radial }} />
                <div className="absolute right-4 bottom-4">{s.ghostIcon}</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {s.icon}
                  </div>
                </div>
                {s.badge && (
                  <div className="absolute top-4 right-4 bg-gold-400 text-teal-950 text-xs font-bold px-3 py-1 rounded-full">{s.badge}</div>
                )}
              </div>

              {/* Card body */}
              <div className="p-7" style={s.cardBg ? { background: s.cardBg } : {}}>
                <h3 className="font-display text-xl font-bold text-teal-950 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-teal-700/70 text-sm leading-relaxed2 mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-teal-800">
                      <Check />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pill tags */}
        <motion.div className="mt-12 flex flex-wrap gap-3 justify-center" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {pills.map(p => (
            <motion.span key={p} className="bg-teal-50 text-teal-700 text-sm font-medium px-4 py-2 rounded-full border border-teal-100" variants={fadeUp}>
              {p}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
