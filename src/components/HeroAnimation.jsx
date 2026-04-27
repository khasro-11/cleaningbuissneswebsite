import { useEffect, useRef, useState } from 'react'

const NAVY = '#1f3a5f'
const SKY = '#7fb3d5'
const PAPER = '#f5f7f8'
const INK = '#0e1f33'
const DURATION = 12

function easeInOutCubic(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2 }
function easeInOutQuad(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2 }
function easeOutCubic(t) { return 1 - Math.pow(1-t, 3) }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)) }

function Sparkle({ cx, cy, t, delay }) {
  const local = clamp((t - delay) * 1.6, 0, 1)
  const s = local < 0.5 ? local * 2 : (1 - local) * 2
  const size = 2 + s * 3
  return (
    <g transform={`translate(${cx} ${cy})`} opacity={s}>
      <path
        d={`M0 ${-size} L0.6 -0.6 L${size} 0 L0.6 0.6 L0 ${size} L-0.6 0.6 L${-size} 0 L-0.6 -0.6 Z`}
        fill="white"
      />
    </g>
  )
}

function CleanWindow({ swipeT, sparkleT }) {
  const wipeX = swipeT * 108
  const squeegeeX = -8 + swipeT * 116

  return (
    <svg
      viewBox="0 0 100 70"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <defs>
        <linearGradient id="ha-cleanGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cfe5f3" />
          <stop offset="60%" stopColor="#7fb3d5" />
          <stop offset="100%" stopColor="#3d6e91" />
        </linearGradient>
        <pattern id="ha-grime" patternUnits="userSpaceOnUse" width="6" height="6">
          <rect width="6" height="6" fill="#6b7a82" />
          <circle cx="1" cy="2" r="0.6" fill="#4a5660" opacity="0.5" />
          <circle cx="4" cy="4" r="0.8" fill="#3b454d" opacity="0.6" />
          <circle cx="3" cy="1" r="0.4" fill="#2c343a" opacity="0.4" />
        </pattern>
        <clipPath id="ha-dirtyClip">
          <rect x={wipeX} y="0" width={100 - wipeX} height="70" />
        </clipPath>
        <clipPath id="ha-cleanClip">
          <rect x="0" y="0" width={wipeX + 0.5} height="70" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="100" height="70" fill={NAVY} />

      {/* Clean layer */}
      <g clipPath="url(#ha-cleanClip)">
        <rect x="2" y="2" width="96" height="66" fill="url(#ha-cleanGrad)" />
        <path d="M10 8 L40 8 L20 28 Z" fill="white" opacity="0.18" />
        <path d="M55 38 L80 38 L65 58 Z" fill="white" opacity="0.10" />
      </g>

      {/* Dirty layer */}
      <g clipPath="url(#ha-dirtyClip)">
        <rect x="2" y="2" width="96" height="66" fill="url(#ha-grime)" opacity="0.85" />
        <path d="M10 14 Q22 22 18 34 T 26 56" stroke="#1d262e" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M54 8 Q60 24 56 40 T 64 60" stroke="#1d262e" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M78 12 Q86 30 82 48" stroke="#1d262e" strokeWidth="0.55" fill="none" opacity="0.5" />
      </g>

      {/* Mullion cross */}
      <line x1="50" y1="2" x2="50" y2="68" stroke={NAVY} strokeWidth="1.2" />
      <line x1="2" y1="35" x2="98" y2="35" stroke={NAVY} strokeWidth="1.2" />

      {/* Squeegee */}
      {swipeT > 0 && swipeT < 1 && (
        <g transform={`translate(${squeegeeX} 0)`}>
          <rect x="-2" y="2" width="3.2" height="66" fill="rgba(255,255,255,0.45)" />
          <rect x="0.6" y="2" width="0.8" height="66" fill={INK} />
          <rect x="-1.5" y="-4" width="5.5" height="6" fill={NAVY} rx="1" />
          <rect x="0.4" y="-7" width="1.6" height="4" fill={INK} />
        </g>
      )}

      {/* Sparkles */}
      {sparkleT > 0 && (
        <g opacity={sparkleT < 0.5 ? sparkleT * 2 : (1 - sparkleT) * 2}>
          <Sparkle cx={22} cy={18} t={sparkleT} delay={0} />
          <Sparkle cx={68} cy={14} t={sparkleT} delay={0.15} />
          <Sparkle cx={42} cy={48} t={sparkleT} delay={0.3} />
          <Sparkle cx={82} cy={52} t={sparkleT} delay={0.45} />
        </g>
      )}

      <rect x="0" y="0" width="100" height="70" fill="none" stroke={NAVY} strokeWidth="2" />
    </svg>
  )
}

export default function HeroAnimation() {
  const [time, setTime] = useState(0)
  const startRef = useRef(null)

  useEffect(() => {
    let raf
    function loop(ts) {
      if (startRef.current === null) startRef.current = ts
      setTime(((ts - startRef.current) / 1000) % DURATION)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const buildProg = clamp(time / 1.8, 0, 1)

  const camProg = (() => {
    if (time < 1.5) return 0
    if (time < 4)   return easeInOutCubic((time - 1.5) / 2.5)
    if (time < 8.0) return 1
    if (time < 10)  return 1 - easeInOutCubic((time - 8.0) / 2.0)
    return 0
  })()

  const swipeT = (() => {
    if (time < 3.6) return 0
    if (time > 7.2) return 1
    return easeInOutQuad((time - 3.6) / 3.6)
  })()

  const sparkleT = (() => {
    if (time < 7.0 || time > 9.0) return 0
    return (time - 7.0) / 2.0
  })()

  const tagT = (() => {
    if (time < 8.5) return 0
    if (time > 11)  return 1
    return easeOutCubic((time - 8.5) / 2.5)
  })()

  const dashLen = 1400
  const dashOffset = (1 - buildProg) * dashLen
  const camScale = 1 + (3.6 - 1) * camProg
  const tx = (300 - 165) * camProg
  const ty = (180 - 145) * camProg

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(circle at 30% 20%, rgba(127,179,213,0.18), transparent 60%), ${PAPER}`,
      overflow: 'hidden',
      fontFamily: 'Manrope, system-ui, sans-serif',
    }}>
      {/* Building + window stage */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        width: 720, height: 432,
        transform: `translate(-50%,-50%) scale(${camScale}) translate(${tx}px,${ty}px)`,
        transformOrigin: 'center',
        willChange: 'transform',
      }}>
        <svg viewBox="0 0 600 360" width="100%" height="100%" style={{ display: 'block' }}>
          <g
            fill="none"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={dashLen}
            strokeDashoffset={dashOffset}
          >
            <path d="M60 320 L60 110 L180 60 L300 110 L300 180 L460 180 L460 320 Z" />
            <line x1="60" y1="180" x2="300" y2="180" />
            <line x1="60" y1="240" x2="460" y2="240" />
            <rect x="90"  y="130" width="34" height="30" />
            <rect x="148" y="130" width="34" height="30" />
            <rect x="206" y="130" width="34" height="30" />
            <rect x="90"  y="200" width="34" height="24" />
            <rect x="148" y="200" width="34" height="24" />
            <rect x="206" y="200" width="34" height="24" />
            <rect x="320" y="200" width="34" height="24" />
            <rect x="378" y="200" width="34" height="24" />
            <rect x="90"  y="260" width="34" height="44" />
            <rect x="148" y="260" width="34" height="44" />
            <rect x="206" y="260" width="34" height="44" />
            <rect x="320" y="260" width="34" height="44" />
            <rect x="378" y="260" width="34" height="44" />
            <rect x="265" y="280" width="22" height="40" />
          </g>
        </svg>

        {/* Clean window overlay on the target window rect (148,130 34×30 in 600×360 space) */}
        <div style={{
          position: 'absolute',
          left:   `${(148/600)*100}%`,
          top:    `${(130/360)*100}%`,
          width:  `${(34/600)*100}%`,
          height: `${(30/360)*100}%`,
          opacity: camProg > 0.05 ? 1 : 0,
          transition: 'opacity 0.2s linear',
        }}>
          <CleanWindow swipeT={swipeT} sparkleT={sparkleT} />
        </div>
      </div>

      {/* Caption chip */}
      <div style={{
        position: 'absolute', top: 28, left: 32,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: time > 0.4 ? Math.min(1, (time - 0.4) * 2) : 0,
      }}>
        <div style={{
          width: 10, height: 10, borderRadius: 99,
          background: SKY, boxShadow: `0 0 0 4px rgba(127,179,213,0.18)`,
        }} />
        <span style={{
          fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: NAVY, fontWeight: 600,
        }}>
          Live · Reinigung in Aktion
        </span>
      </div>

      {/* End tag */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 48,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        opacity: tagT,
        transform: `translateY(${(1 - tagT) * 12}px)`,
        transition: 'none',
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 48, color: INK, fontWeight: 400, lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>
          Klar. Sauber. <em style={{ color: NAVY, fontStyle: 'italic' }}>Erledigt.</em>
        </div>
        <div style={{
          marginTop: 10, fontSize: 12, color: 'rgba(14,31,51,0.55)',
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          Gewerbe · Fenster · Airbnb · Gebäude
        </div>
      </div>
    </div>
  )
}
