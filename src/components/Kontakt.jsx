import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeUp, slideLeft, slideRight, stagger, viewport } from '../utils/animations'

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_KEY

const contactItems = [
  {
    icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>,
    label: 'Telefon',
    value: <a href="tel:+4915511435755" className="text-white font-medium hover:text-gold-300 transition-colors">+49 155 1143 5755</a>,
  },
  {
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
    label: 'E-Mail',
    value: <a href="mailto:info@cleanpro.de" className="text-white font-medium hover:text-gold-300 transition-colors">info@cleanpro.de</a>,
  },
  {
    icon: <><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></>,
    label: 'Standort',
    value: <span className="text-white font-medium">Musterstraße 12, 10115 Berlin</span>,
  },
  {
    icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
    label: 'Öffnungszeiten',
    value: <span className="text-white font-medium">Mo–Fr: 8–18 Uhr · Sa: 9–14 Uhr</span>,
  },
]

export default function Kontakt() {
  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', telefon: '', leistung: '', nachricht: '' })
  const [honeypot, setHoneypot] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const update = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (honeypot) return
    setSending(true)
    setError(null)
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          vorname:   form.vorname,
          nachname:  form.nachname,
          email:     form.email,
          telefon:   form.telefon  || '—',
          leistung:  form.leistung || '—',
          nachricht: form.nachricht || '—',
        },
        EMAILJS_KEY
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || JSON.stringify(err)
      setError(msg)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="kontakt"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden grain"
      style={{ background: 'linear-gradient(160deg, #0a2a30 0%, #0d3a42 40%, #19636e 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(42,147,159,0.2) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(212,160,48,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="order-2 md:order-1">
            <motion.span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block" variants={fadeUp}>Kontakt</motion.span>
            <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter2 mb-6 leading-tight" variants={fadeUp}>
              Lassen Sie uns<br />ins Gespräch kommen
            </motion.h2>
            <motion.p className="text-white/65 text-lg leading-relaxed2 mb-10" variants={fadeUp}>
              Fordern Sie noch heute Ihr kostenloses Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </motion.p>

            <div className="space-y-5">
              {contactItems.map(c => (
                <motion.div key={c.label} className="flex items-center gap-4" variants={fadeUp}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <svg width="20" height="20" fill="none" stroke="#d4a030" strokeWidth="1.8" viewBox="0 0 24 24">{c.icon}</svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{c.label}</p>
                    {c.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 order-1 md:order-2"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {!sent ? (
              <>
                <h3 className="font-display text-lg font-bold text-teal-950 mb-0.5 tracking-tight">Kostenloses Angebot</h3>
                <p className="text-teal-700/60 text-xs mb-4">Ausfüllen, absenden, fertig — wir melden uns!</p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="vorname" className="block text-teal-900 text-xs font-medium mb-1">Vorname</label>
                      <input id="vorname" type="text" placeholder="Max" required value={form.vorname} onChange={update}
                        className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30" />
                    </div>
                    <div>
                      <label htmlFor="nachname" className="block text-teal-900 text-xs font-medium mb-1">Nachname</label>
                      <input id="nachname" type="text" placeholder="Mustermann" required value={form.nachname} onChange={update}
                        className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-teal-900 text-xs font-medium mb-1">E-Mail-Adresse</label>
                    <input id="email" type="email" placeholder="max@beispiel.de" required value={form.email} onChange={update}
                      className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30" />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-teal-900 text-xs font-medium mb-1">Telefonnummer <span className="text-teal-400/60 font-normal">(optional)</span></label>
                    <input id="telefon" type="tel" placeholder="+49 155 1143 5755" value={form.telefon} onChange={update}
                      className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30" />
                  </div>
                  <div>
                    <label htmlFor="leistung" className="block text-teal-900 text-xs font-medium mb-1">Gewünschte Leistung</label>
                    <select id="leistung" required value={form.leistung} onChange={update}
                      className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30 appearance-none cursor-pointer">
                      <option value="" disabled>Bitte wählen...</option>
                      <option>Büroreinigung</option>
                      <option>Gebäudereinigung</option>
                      <option>Grundreinigung / Tiefenreinigung</option>
                      <option>Fensterreinigung</option>
                      <option>Baureinigung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nachricht" className="block text-teal-900 text-xs font-medium mb-1">Nachricht</label>
                    <textarea id="nachricht" rows={2} placeholder="Beschreiben Sie kurz Ihren Reinigungsbedarf..." value={form.nachricht} onChange={update}
                      className="form-input w-full px-3 py-1.5 rounded-lg text-sm text-teal-950 bg-teal-50/30 resize-none" />
                  </div>

                  {/* Honeypot — hidden from humans, filled by bots */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  />

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full py-2.5 rounded-lg text-sm font-semibold text-teal-950 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={sending ? {} : { scale: 1.02, y: -1 }}
                    whileTap={sending ? {} : { scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {sending ? 'Wird gesendet…' : 'Angebot kostenlos anfragen →'}
                  </motion.button>

                  {error && (
                    <p className="text-red-500 text-xs text-center">
                      Fehler: {error}
                    </p>
                  )}

                  <p className="text-teal-500/60 text-xs text-center leading-relaxed">
                    Mit dem Absenden stimmen Sie unserer <a href="#" className="underline hover:text-teal-600 transition-colors">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              </>
            ) : (
              <motion.div className="text-center py-8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg,#2a939f,#19636e)' }}
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.1 }}
                >
                  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                </motion.div>
                <h4 className="font-display text-xl font-bold text-teal-950 mb-2">Vielen Dank!</h4>
                <p className="text-teal-700/70 text-sm leading-relaxed">Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
