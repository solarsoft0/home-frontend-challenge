module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors:{
        darkgray:"rgb(51, 51, 51)",
        lightgray:"rgb(170, 168, 159)",
        midgray:"rgb(170, 168, 159)",
        lemon:"rgb(122, 196, 85)",
        lightlemon:"rgb(149, 208, 119)"
      },
      minWidth:{
      button:"4rem"
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
