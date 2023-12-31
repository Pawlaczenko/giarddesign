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
            'black': '#111111',
            'beige': '#DCC1AB',
            'green': '#1B5B31',
            'gray': '#F5F0EC',
            'white': "#FFFFFF",
            'faded-beige': "rgba(214,183,158,0)"
        },
        gridTemplateColumns: {
            'bleed': '1fr min(1262px, 90%) 1fr',
            'bleed-right': 'min(600px, 50%) 1fr',
            'bleed-left': '1fr min(600px, 50%)',
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
            },
            fadeIn: {
                '0%': {opacity: 0},
                '100%': {opacity: 1},
            },
            enter: {
                '0%': {opacity: 0, transform: 'translateY(-10px)'},
                '100%': {opacity: 1, transform: 'translateY(0)'},
            },
            backgroundPulse: {
                '0%': {'background-size': '100%'},
                '50%': {'background-size': '115%'},
                '100%': {'background-size': '100%'},
            }
            
        },
        animation: {
            'ball-enter': 'ballIn .3s linear both',
            'ball-expand': 'ballOut .3s linear both',
            'fade-in': 'fadeIn .2s linear both .2s',
            'dropdown-enter': 'enter .2s linear both',
            'background-pulse': 'backgroundPulse 15s linear both infinite'
        },
        translate: {
            'screen': '90vw',
        }
    },
  },
  plugins: [],
}