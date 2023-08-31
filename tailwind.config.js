/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        white: "#ffff",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};