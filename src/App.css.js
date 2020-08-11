import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, Sans-Serif;
    font-size: 16px;

    @media(min-width: 425px) {
        font-size: 18px;
    }

    @media(min-width: 768px) {
        font-size: 20px;
    }
  }
`;

export default GlobalStyle;