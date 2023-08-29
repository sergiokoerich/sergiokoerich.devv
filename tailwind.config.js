/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Blue: '#3CD6EB',
      },
      fontFamily: {
        gugi: ['Gugi', 'cursive'],
      },
      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(-500px)',
          },
          '80%': {
            transform: 'translateY(50px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        'slide-top': 'slide-top .7s ease-in both',
      },
    },
  },
  variants: {},
  plugins: [],
}

