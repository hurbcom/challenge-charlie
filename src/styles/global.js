import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  input {
    font-family: 'Overpass', sans-serif;
  }
`;
