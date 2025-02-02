/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        cream: '#edf5eb',
        primary: "#121212",      
        secondary: "#1e1e1e",    
        accent: "#BB86FC",        
        text: "#E0E0E0",          
        navBg: "#1F1F1F",         
        cardBg: "#1E1E1E",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

