import { Fonts } from "./fonts";
import { Reset } from "./reset";
import { Defaults } from "./defaults";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Defaults};
  ${Fonts};
`;
