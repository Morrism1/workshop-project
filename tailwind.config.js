module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: '#0100CD'
      },
      'primary': '#96D2AA',
      letterSpacing: {
        widest: '.25em',
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
