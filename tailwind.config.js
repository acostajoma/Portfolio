/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily : {
      'MonoJet' : ['JetBrains Mono', 'monospace'],
      'quicksand' : ['Quicksand', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
