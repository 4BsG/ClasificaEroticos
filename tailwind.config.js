/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fuchsiaHover: '#E5016D',
        "primary": "#FF0079",
        "primary-dark": "#790252",
        "foreground": "#1E1E53",
        "background": "#01003C",
        "background-dark": "rgba(1, 0, 60, 0.2)",
        "error": "#FF5252",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        generalRound: '12px'
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        smartPhone: '375px'
      },
    },
  },
  plugins: [],
}