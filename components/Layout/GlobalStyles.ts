import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100vh;
  }

  body {
    background-color: #262626;
    margin: 0;
    padding: 0;
    font-family: Signika, Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }

`;
