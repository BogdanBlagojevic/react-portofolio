/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Dodajte novi breakpoint za 375px
        '2xs': '300px', // Dodajte novi breakpoint za 375px
      },
    },
  },
  plugins: [],
}