/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {},

    fontFamily: {},
    extend: {
      width: {
        smartPhone: '375px'
      },
      colors: {
        fuchsiaSt: '#FF0079',
        fuchsiaHover: '#E5016D',
        purpleLight: '#1E1E53',
        purpleDark: '#01003C'
      },
      borderRadius: {
        generalRound: '12px'
      }
    }
  },
  plugins: []
};
