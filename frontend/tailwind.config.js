/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // tailwind.config.js


    extend: {
      colors: {
        'primary': '#E53935',
        'primary-dark': '#C62828',
        
        // --- NUEVA PALETA DE GRISES BASADA EN TU ELECCIÓN ---
        'dark': '#1B1C1D',     
        'medium': '#2C2D2E',   
        'subtle': '#9CA3AF',  
        'light': '#E5E7EB',     
      }
    },
// ...
  },
   plugins: [
    require('@tailwindcss/typography'), 
  ],
}