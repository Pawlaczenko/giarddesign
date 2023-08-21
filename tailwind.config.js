/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
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
            'white': "#FFFFFF",
            'faded-beige': "rgba(214,183,158,0)"
        },
        gridTemplateColumns: {
            'bleed': '1fr min(1262px, 90%) 1fr',
            'bleed-right': 'min(600px, 50%) 1fr',
            'bleed-left': '1fr min(600px, 50%)',
        },
        width: {
            'gallery-item-lg': 'calc((100% - 86px) / 3)',
            'gallery-item-md': 'calc((100% - 43px) / 2)',
            'gallery-item': '100%',
        },
        keyframes: {
            ballIn: {
                '0%': {transform: 'scale(1.5)', opacity: .3},
                '50%': {background: 'transparent', opacity: 1},
                '100%': {transform: 'scale(1)', background: 'black'}
            },
            ballOut: {
                '0%': {transform: 'scale(1)', background: 'black'},
                '50%': {background: 'transparent', opacity: 1},
                '100%': {transform: 'scale(1.8)', opacity: .1},
            }
        },
        animation: {
            'ball-enter': 'ballIn .3s linear both',
            'ball-expand': 'ballOut .3s linear both'
        }
    },
  },
  plugins: [],
}