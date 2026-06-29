/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#10b981',      // emerald-500
        'brand-green-dark': '#047857', // emerald-700
        'brand-blue': '#0284c7',       // sky-600
        'brand-blue-dark': '#0369a1',  // sky-700
        'brand-light': '#f8fafc',      // slate-50 (espacio en blanco)
        'brand-gray': '#f1f5f9',       // slate-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
