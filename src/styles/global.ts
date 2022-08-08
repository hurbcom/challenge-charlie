import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #ffffff;
  --black: #001219;
  --gray:#e1e1e6;

  --gray-100: rgba(206, 212, 218, 0.7);
  --gray-200: rgba(108, 117, 125, 0.9);
  --gray-300: rgba(73, 80, 87, 0.9);

  --blue-100: rgba(148, 210, 189, 0.7);
  --blue-200: rgba(10, 147, 150, 0.8);
  --blue-300: rgba(0, 95, 115, 0.9);

  --yellow-100: rgba(255, 242, 178, 0.7);
  --yellow-200: rgba(255, 229, 102, 0.8);
  --yellow-300: rgba(255, 212, 0, 0.9);

  --red-100: rgba(236, 131, 133, 0.7);
  --red-200: rgba(227, 80, 83, 0.8);
  --red-300: rgba(208, 34, 36, 0.9);
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--black);
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`;
