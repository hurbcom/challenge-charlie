import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-size: bold;
  }

  p, strong {
    font-size: 1.6rem;
  }
`;
