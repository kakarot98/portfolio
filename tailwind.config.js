/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5DC',       // page background (beige)
        secondary: '#FFFFFF',     // card / surface
        accent: '#ADD8E6',        // surfaces, borders, underlines, chip backgrounds
        accentDeep: '#2C6E8F',    // same hue darkened — text/icons on light backgrounds
        text: '#333333',
        muted: '#6B6B6B',         // secondary text
        line: '#E2E5DC',          // hairline borders / dividers
        navBg: '#E0EBF0',
        cardBg: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '68rem',
      },
      width: {
        '25': '25%',
        '75': '75%',
      },
      height: {
        '20': '20%',
        '80': '80%',
      }
    },
  },
  plugins: [],
}
