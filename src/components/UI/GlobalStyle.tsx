import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 16px;
    overflow-x: hidden;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: monospace,opensans, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    background-color: #eee;
  }

  ol, ul {
    list-style: none;
  } 
`
