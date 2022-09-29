/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#240D57",
        "primary-pink": "#E87BF8",
        secondary: " #4F4F4F",
        secondary_purple_1: "#CCB6",
        secondary_purple_3: "#F6F2FF",
        border_primary: "#4F4F4F",
        text_1: "#4F4F4F",
        text_2: "#828282",
      },
    },
    fontFamily: {
      sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
