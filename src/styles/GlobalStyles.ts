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

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #ffffff
  }

  // Selection color

  ::-moz-selection {
    color: #555;
    background: rgba(22, 102, 73, .5);
  }

  ::selection {
    color: #555;
    background: rgba(22, 102, 73, .5);
  }

  body {
    font-family: "Arial";
    font-size: .9rem;
    line-height: 1.42857143;
    margin: 0;
    background: #ffffff;
    color: #ffffff;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  img {
    border-style: none;
  }

  /* Texts */

  a {
    text-decoration: none;
    background-color: transparent
  }

  a:not([href]):not([tabindex]),
  a:not([href]):not([tabindex]):focus,
  a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
  }

  a:not([href]):not([tabindex]):focus {
    outline: 0
  }

  li {
    list-style: none
  }

  /* Inputs and Buttons */

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
  }

  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
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
