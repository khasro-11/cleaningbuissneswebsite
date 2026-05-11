// All 6 Clean Pro logo mark concepts.
// Import whichever you want in Nav.jsx / Footer.jsx.
// Nav usage (dark bg):  <SqueegeeMark size={28} color="#f5f7f8" accent="#7fb3d5" />
// Footer usage (light): <SqueegeeMark size={20} color="#0e1f33" accent="#7fb3d5" />

const C = {
  ink:       '#0e1f33',
  navy:      '#1f3a5f',
  sky:       '#7fb3d5',
  paper:     '#ffffff',
  paperWarm: '#f5f7f8',
};

// ─── 01 · SQUEEGEE ────────────────────────────────────────────────────────────
// A thick rounded arc (cleaning swipe) with a trailing sky-blue dot.
// Most iconic mark for a cleaning service; reads cleanly at 20–120 px.
export function SqueegeeMark({ size = 96, color = C.ink, accent = C.sky, bg = null }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {bg && <rect width="96" height="96" rx="20" fill={bg} />}
      <path
        d="M73 26 C 63 18, 50 16, 40 20 C 24 26, 16 40, 16 50 C 16 64, 28 78, 46 78 C 58 78, 68 72, 73 64"
        stroke={color} strokeWidth="11" strokeLinecap="round" fill="none"
      />
      <circle cx="77" cy="44" r="6"   fill={accent} />
      <circle cx="77" cy="44" r="2.4" fill={color}  />
    </svg>
  );
}

// ─── 02 · WINDOW ──────────────────────────────────────────────────────────────
// Tilted glass pane (−10°) divided into 4 quadrants; one pane lit sky-blue
// with a sparkle — "just cleaned" moment.
export function WindowMark({ size = 96, color = C.ink, accent = C.sky, bg = null }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {bg && <rect width="96" height="96" rx="20" fill={bg} />}
      <g transform="rotate(-10 48 48)">
        <rect x="18" y="18" width="60" height="60" rx="10" fill={color} />
        <line x1="48" y1="22" x2="48" y2="74" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="22" y1="48" x2="74" y2="48" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <rect x="22" y="22" width="22" height="22" rx="5" fill={accent} />
        <path d="M33 28 L34.5 32 L38.5 33 L34.5 34 L33 38 L31.5 34 L27.5 33 L31.5 32 Z" fill={color} />
      </g>
    </svg>
  );
}

// ─── 03 · MONOGRAM ────────────────────────────────────────────────────────────
// Dark rounded-square badge. Inside: a thick "C" arc (white) with a sky-blue
// shine dot floating in the opening. Compact, badge-like, works as favicon.
export function MonogramMark({ size = 96, color = C.paper, accent = C.sky, badge = C.ink, bg = null }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {bg && <rect width="96" height="96" rx="20" fill={bg} />}
      <rect x="6" y="6" width="84" height="84" rx="22" fill={badge} />
      <path
        d="M58 30 C 50 26, 38 28, 32 34 C 25 41, 25 55, 32 62 C 38 68, 50 70, 58 66"
        stroke={color} strokeWidth="9" strokeLinecap="round" fill="none"
      />
      <circle cx="64" cy="48" r="6" fill={accent} />
    </svg>
  );
}

// ─── 04 · SPARKLE ─────────────────────────────────────────────────────────────
// Pure wordmark with a 4-point star woven between "Clean" and "Pro".
// Use <SparkleWordmark> in the nav instead of the separate mark + text.
export function SparkleGlyph({ size = 24, color = C.sky }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M16 2 C 16 10, 18 14, 30 16 C 18 18, 16 22, 16 30 C 16 22, 14 18, 2 16 C 14 14, 16 10, 16 2 Z" fill={color} />
    </svg>
  );
}

export function SparkleMark({ size = 96, color = C.ink, accent = C.sky, bg = null }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {bg && <rect width="96" height="96" rx="20" fill={bg} />}
      <path d="M40 14 C 40 32, 44 40, 64 44 C 44 48, 40 56, 40 74 C 40 56, 36 48, 16 44 C 36 40, 40 32, 40 14 Z" fill={color} />
      <path d="M72 60 C 72 68, 74 72, 84 74 C 74 76, 72 80, 72 88 C 72 80, 70 76, 60 74 C 70 72, 72 68, 72 60 Z" fill={accent} />
    </svg>
  );
}

// Inline wordmark for nav: Clean ✦ Pro
export function SparkleWordmark({ textColor = C.paper, accent = C.sky, size = 15 }) {
  return (
    <div style={{
      fontFamily: 'Manrope, sans-serif', fontSize: size, fontWeight: 800,
      letterSpacing: '-0.04em', color: textColor, lineHeight: 1,
      display: 'flex', alignItems: 'center', gap: size * 0.3,
    }}>
      <span>Clean</span>
      <SparkleGlyph size={size * 0.75} color={accent} />
      <span>Pro</span>
    </div>
  );
}

// ─── 05 · DROPLET ─────────────────────────────────────────────────────────────
// Water-drop shape with an inner highlight — replaces the "o" in "Pro"
// in the full wordmark, or stands alone as an app-icon mark.
export function DropletMark({ size = 96, color = C.sky, bg = null }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      {bg && <rect width="96" height="96" rx="20" fill={bg} />}
      <g transform="translate(28 18)">
        <path
          d="M20 2 C 20 2, 0 28, 0 42 C 0 55, 9 62, 20 62 C 31 62, 40 55, 40 42 C 40 28, 20 2, 20 2 Z"
          fill={color}
        />
        <ellipse cx="13" cy="44" rx="4" ry="7" fill="rgba(255,255,255,0.45)" transform="rotate(-20 13 44)" />
      </g>
    </svg>
  );
}

// ─── 06 · WORDMARK ONLY ───────────────────────────────────────────────────────
// "clean/pro" in Space Grotesk + sky slash accent + rounded dot.
// No symbol needed — the slash does the work.
export function SlashWordmark({ textColor = C.paper, accent = C.sky, size = 15 }) {
  return (
    <div style={{
      fontFamily: '"Space Grotesk", Manrope, sans-serif', fontSize: size, fontWeight: 700,
      letterSpacing: '-0.045em', color: textColor, lineHeight: 1,
      display: 'flex', alignItems: 'baseline', gap: size * 0.04,
    }}>
      <span>clean</span>
      <span style={{ color: accent, fontWeight: 500 }}>/</span>
      <span>pro</span>
      <span style={{
        width: size * 0.13, height: size * 0.13, borderRadius: 99,
        background: accent, display: 'inline-block',
        marginLeft: size * 0.05, alignSelf: 'flex-end', marginBottom: size * 0.1,
      }} />
    </div>
  );
}
