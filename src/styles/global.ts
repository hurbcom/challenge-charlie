import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-200: #1f2729;
  --black: #001219;

  --blue-100: rgba(148, 210, 189, 0.7);
  --blue-200: rgba(10, 147, 150, 0.8);
  --blue-300: rgba(0, 95, 115, 0.9);

  --yellow-100: rgba(233, 216, 166, 0.7);
  --yellow-200: rgba(238, 155, 0, 0.8);
  --yellow-300: rgba(187, 62, 3, 0.9);

  --red-100: rgba(187, 62, 3, 0.7);
  --red-200: rgba(174, 32, 18, 0.8);
  --red-300: rgba(155, 34, 38, 0.9);
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`;
