/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
