/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  safelist: [{ pattern: /(bg|fill)-(blue|yellow|red|gray)-(100|200|300)/ }],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
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
          50: "#D8D8DE",
          100: "#ADACB9",
          200: "#888897",
          300: "#4B5862",
        },
        dark: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
