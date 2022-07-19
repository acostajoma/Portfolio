/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx"
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
