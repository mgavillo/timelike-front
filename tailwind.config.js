/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        "2xs": '330px',
        '3xl': '1720px'
      },
      fontSize:{
        '2xs': '0.65rem'
      }
    },
  },
  plugins: [],
};
