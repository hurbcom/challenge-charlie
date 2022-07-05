/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    colors: {
      red: {
        100: "#ea4848",
        200: "#e73636",
        300: "#e52424",
      },
      blue: {
        100: "#4889ea",
        200: "#3672e7",
        300: "#245ae5",
      },
      yellow: {
        100: "#eadd48",
        200: "#e7c436",
        300: "#e5ae24",
      },
      gray: {
        50: "#e7e7e7",
        100: "#bfbfbf",
        200: "#999999",
        300: "#898989",
        400: "#7a7a7a",
      },
      white: "#ffffff",
      black: "000000",
    },
    extend: {},
  },
  plugins: [],
};
