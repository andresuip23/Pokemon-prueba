/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'poke-yellow':'#fbd743',
        'poke-yellow-d':'#ecbf05',
        'poke-red':'#ff1f1f',
        'poke-blue-l':'#5db9ff',
        'poke-blue-d':'#363b81',
      },
    },
  },
  plugins: [],
};