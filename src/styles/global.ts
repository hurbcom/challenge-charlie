import { globalCss } from "~/lib/stitches";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    fontFamily: 'Roboto, sans-serif'
  },

  body: {
    color: '$white',
    backgroundColor: '$black',
    '-webkit-font-smoothing': 'antialiased'
  }
});
