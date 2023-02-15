import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Quicksand', sans-serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
`

export default GlobalStyles
