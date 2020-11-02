import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MeteoconsRegular';
    src: url('/meteocons-font/meteocons-webfont.eot');
    src: url('/meteocons-font/meteocons-webfont.eot?#iefix') format('embedded-opentype'),
        url('/meteocons-font/meteocons-webfont.woff') format('woff'),
        url('/meteocons-font/meteocons-webfont.ttf') format('truetype'),
        url('/meteocons-font/meteocons-webfont.svg#MeteoconsRegular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .icon:before {
    font-family: 'MeteoconsRegular';
    content: attr(data-icon);
  }
`

export default GlobalStyles
