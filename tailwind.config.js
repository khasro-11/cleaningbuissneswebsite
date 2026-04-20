/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
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
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tighter2: '-0.03em' },
      lineHeight:    { relaxed2: '1.7' },
    },
  },
  plugins: [],
}
