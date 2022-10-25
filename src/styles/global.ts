import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`
