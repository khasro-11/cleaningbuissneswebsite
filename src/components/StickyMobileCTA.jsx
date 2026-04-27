const INK = '#0e1f33'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'

export default function StickyMobileCTA() {
  return (
    <>
      <div className="sticky-cta" style={{
        position: 'fixed', bottom: 24, left: 12, right: 12, zIndex: 40,
        background: INK, color: PAPER, padding: '12px 16px', borderRadius: 999,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 12px 28px -8px rgba(14,31,51,0.45)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: '#22c55e', display: 'block', flexShrink: 0 }} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>Heute erreichbar</span>
        </div>
        <a
          href="#kontakt"
          style={{
            background: SKY, color: INK, padding: '8px 14px', borderRadius: 99,
            fontSize: 12, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap',
          }}
        >
          Jetzt anfragen →
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .sticky-cta { display: none !important; } }
      `}</style>
    </>
  )
}
