import { globalCss } from "~/lib/stitches";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    color: "$gray100",
    backgroundColor: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },
});
