/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1b3b2c',    // Dark forest green (Hero background)
          beige: '#f6f4ed',    // Warm beige (Main page background)
          orange: '#e09f5b',   // Earthy orange (Buttons and accents)
          card: '#e8eedc',     // Light green-tinted beige for destination cards
          text: '#1b3b2c'      // Default dark text
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}