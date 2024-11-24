/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#764BFC",
        },
        background: {
          DEFAULT: "#242424",
        },
        overlay: {
          DEFAULT: "#4C4C4C",
        },
      },
    },
  },
  plugins: [],
};
