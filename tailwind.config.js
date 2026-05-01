/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          50: '#e6f1f5',
          100: '#c2dde7',
          200: '#92c2d3',
          300: '#5fa3bd',
          400: '#3187a5',
          500: '#0c6e8b',
          600: '#0a5a73',
          700: '#08465a',
          800: '#063442',
          900: '#04222b',
        },
        saffron: {
          50: '#fff5e6',
          100: '#ffe5bf',
          200: '#ffd089',
          300: '#ffb84d',
          400: '#ffa31f',
          500: '#f08800',
          600: '#cc7400',
          700: '#a35c00',
          800: '#7a4400',
          900: '#522d00',
        },
        gold: {
          DEFAULT: '#d4a017',
          light: '#f0c640',
          dark: '#a87c0e',
        },
        parchment: {
          50: '#fdfaf2',
          100: '#f9f1de',
          200: '#f3e3bc',
          300: '#ead09a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' /%3E%3CfeColorMatrix values='0 0 0 0 0.85 0 0 0 0 0.78 0 0 0 0 0.6 0 0 0 0.04 0' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}