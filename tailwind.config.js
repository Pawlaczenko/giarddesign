/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
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
        },
        gridTemplateColumns: {
            'bleed': '1fr min(1262px, 90%) 1fr',
            'bleed-right': 'min(600px, 50%) 1fr',
            'bleed-left': '1fr min(600px, 50%)',
        }
    },
  },
  plugins: [],
}