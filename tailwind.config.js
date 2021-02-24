const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      'sm': '520px',
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [],
}
