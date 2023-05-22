import { createGlobalStyle } from 'styled-components'
import colors from './assets/styles/colors'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    background-color: ${colors.white};
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    height: 100%;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  #content {
    flex: 1 0 auto;
  }
` as any
