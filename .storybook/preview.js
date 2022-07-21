import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/GlobalStyles";
import theme from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ margin: " 0 auto", maxWidth: "900px" }}>
        <Story />
      </div>
      <div id="notification"></div>
    </ThemeProvider>
  ),
];

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "notification");

document.querySelector("body").appendChild(modalRoot);

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      { name: "black", value: "#3F3F3F" },
      { name: "white", value: "#F9F9f9  " },
    ],
  },
};
