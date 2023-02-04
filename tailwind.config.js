/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF0079",
        "primary-dark": "rgba(255, 0, 121, 0.8)",
        "primary-off": "rgba(255, 0, 121, 0.2)",
        "foreground": "#1E1E53",
        "background": "#01003C",
        "background-dark": "rgba(1, 0, 60, 0.2)",
        "background-modal": "rgba(0, 0, 0, 0.6)",
        "color-title": "#FFFFFF",
        "color-text": "rgba(255, 255, 255, 0.4)",
        "color-label": "rgba(255, 255, 255, 0.7)",
        "color-border": "rgba(255, 255, 255, 0.1)",
        "error": "#FF5252",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      borderWidth: {
        1.5: "1.5px",
      },
      lineHeight: {
        1.4: "1.4",
      },
      padding: {
        "sides-sm": "24px",
      },
      margin: {
        "sides-sm": "24px",
      }
    },
  },
  plugins: []
};
