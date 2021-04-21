module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: '#0100CD'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
