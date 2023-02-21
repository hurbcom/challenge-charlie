import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Roboto, sans-serif;
  }

  body {
    color: white;
    background-color: black;
    -webkit-font-smoothing: 'antialiased'
  }
`;
