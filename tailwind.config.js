/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
        'display': 'Inter, sans-serif',
        'secondary': 'Montserrat, sans-serif'
    },
    colors: {
        transparent: 'transparent',
        'black': '#111',
        'beige': '#DCC1AB',
        'green': '#1B5B31',
        'grey': '#F5F0EC',
        'white': "#FFFFFF"
    }
  },
  plugins: [],
}