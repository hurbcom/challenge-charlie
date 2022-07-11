/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  safelist: [{ pattern: /(bg|fill)-(blue|yellow|red|gray)-(100|200|300)/ }],
  theme: {
    colors: {
      red: {
        100: "#F34545",
        200: "#EC3939",
        300: "#EB2525",
      },
      blue: {
        100: "#39B4F9",
        200: "#21A5EF",
        300: "#1191D9",
      },
      yellow: {
        100: "#FFCE22",
        200: "#F4C108",
        300: "#DDB00F",
      },
      gray: {
        50: "#E7E7E7",
        100: "#ADACB9",
        200: "#888897",
        300: "#898989",
        400: "#7A7A7A",
      },
      dark: "#1C1C1C",
      white: "#FFFFFF",
      black: "000000",
    },
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
