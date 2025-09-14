/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#F5F5F5',      
        secondary: '#FFFFFF',    
        accent: '#A9A9A9',        
        text: '#000000',          
        navBg: '#F5F5F5',         
        cardBg: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

