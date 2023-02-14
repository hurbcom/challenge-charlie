import { createStitches, defaultThemeMap } from "@stitches/react";

import { colors } from "~/styles/colors";
import { space } from "~/styles/space";

export const {
  css,
  theme,
  reset,
  styled,
  prefix,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: { colors, space },

  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
});
