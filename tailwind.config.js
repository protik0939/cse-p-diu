/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '0px', 'max': '700px' },
      'rsct': { 'min': '0px', 'max': '570px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald"],
  },
  plugins: [
    require('daisyui'),
  ]
}

