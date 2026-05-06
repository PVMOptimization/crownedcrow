/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Parchment & ink palette — committed, not safely distributed
        parchment: {
          50:  '#faf6ec',
          100: '#f4ecd8',
          200: '#ece1c4', // primary background
          300: '#e0d2af',
          400: '#cdba90',
        },
        ink: {
          900: '#1a1411', // dominant text
          800: '#2a2320',
          700: '#3d342f',
          600: '#574a42',
          500: '#7a6a5d',
        },
        oxblood: {
          DEFAULT: '#7a1a1a',
          light: '#9a2424',
          dark: '#561010',
        },
        // a single warm gold for very small accents
        gilt: '#a07d3a',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Newsreader"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      letterSpacing: {
        masthead: '-0.04em',
      },
      boxShadow: {
        // soft, paper-like shadows. No fake-glassy glow.
        'paper': '0 1px 0 rgba(26,20,17,0.06), 0 12px 24px -12px rgba(26,20,17,0.18)',
        'pinned': '0 18px 32px -20px rgba(26,20,17,0.35), 0 2px 4px rgba(26,20,17,0.08)',
        'card': '0 1px 0 rgba(26,20,17,0.05), 0 24px 48px -28px rgba(26,20,17,0.25)',
      },
    },
  },
  plugins: [],
}
