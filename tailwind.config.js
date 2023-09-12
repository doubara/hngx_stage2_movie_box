/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        gray: colors.neutral,
        customRed: {
          DEFAULT: '#FD2E2E',
          dark: '#FD2E2E',
          light: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
}

