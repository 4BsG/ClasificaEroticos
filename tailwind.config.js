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
        purpleDark: '#01003C',
        "primary": "#FF0079",
        "primary-dark": "#790252",
        "foreground": "#1E1E53",
        "background": "#01003C",
        "background-dark": "rgba(1, 0, 60, 0.2)",
        "error": "#FF5252",
      },
      borderRadius: {
        generalRound: '12px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    }
  },
  plugins: []
};
