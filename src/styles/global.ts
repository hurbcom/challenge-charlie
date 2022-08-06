import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-200: #1f2729;
  --black: #001219;

  --blue-100: #94D2BD;
  --blue-200: #0A9396;
  --blue-300: #005F73;

  --yellow-100: #E9D8A6;
  --yellow-200: #EE9B00;
  --yellow-300: #CA6702;

  --red-100: #BB3E03;
  --red-200: #AE2012;
  --red-300: #9B2226;
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
