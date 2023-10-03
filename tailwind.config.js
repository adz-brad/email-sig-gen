const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      base: colors.gray,
      primary: colors.indigo,
      transparent: 'transparent'
    }
  },
  plugins: [ 
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')
  ],
}
