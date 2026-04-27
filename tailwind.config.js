/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f7f8',
        'paper-warm': '#eef2f5',
        ink: {
          DEFAULT: '#0e1f33',
          soft: '#3a4a5e',
        },
        navy: {
          DEFAULT: '#1f3a5f',
          deep: '#162c48',
        },
        sky: {
          DEFAULT: '#7fb3d5',
          soft: '#cfe1ee',
        },
        teal: {
          50:  '#f0f9fa',
          100: '#d9f1f4',
          200: '#b3e3e9',
          300: '#7dccd6',
          400: '#46aebb',
          500: '#2a939f',
          600: '#1e7a86',
          700: '#19636e',
          800: '#18515c',
          900: '#0d3a42',
          950: '#0a2a30',
        },
        gold: {
          300: '#f0d080',
          400: '#e8bc54',
          500: '#d4a030',
          600: '#b8861e',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tighter2: '-0.03em' },
      lineHeight:    { relaxed2: '1.7' },
    },
  },
  plugins: [],
}
