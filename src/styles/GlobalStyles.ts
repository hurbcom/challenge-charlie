import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    margin: 0;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  img {
    border-style: none;
  }

  a {
    text-decoration: none;
    background-color: transparent
  }

  li {
    list-style: none
  }

  textarea,
  input,
  button {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
    border: none;
  }

  button {
    cursor: pointer
  }
`;
