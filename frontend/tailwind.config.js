/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        municipalBlue: '#0A3D62',
        municipalGold: '#D4A017'
      }
    }
  },
  plugins: []
};
