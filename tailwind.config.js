/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Merriweather"', 'serif'], // Para h1, h2, h3
        'body': ['"Ubuntu"', 'sans-serif'],     // Para el resto del texto
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '1210px',
    },
  },
  plugins: [],
}