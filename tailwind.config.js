const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      'md-lg' : '896px',
    },
  },
  plugins: [],
}
