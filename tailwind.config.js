/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#19083D',
        'purple': '#B069FF',
        'vvip': '#E8D105',
        'vip': '#D0C66A',
        'transparent': '#00FFFFFF',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins']
      },
    },
  },
  plugins: [],
}
