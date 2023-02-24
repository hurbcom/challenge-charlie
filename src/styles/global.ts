import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  body, #root {
    max-width: 100%;
    min-height: calc(100vh);
    -webkit-font-smoothing: antialiased;
  }


    button {
      cursor: pointer;
    }
  }
`;
