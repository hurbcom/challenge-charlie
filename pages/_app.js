import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../src/assets/fonts/meteocons/css/fontello.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #FFF;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

const theme = {
  colors: {
    boxBlue: '#006E90DE',
    boxYellow: '#E9C46ADE',
    boxRed: '#E76F51DE',
    backgroundBlue: '#006E9080',
    backgroundYellow: '#E9C46A80',
    backgroundRed: '#E76F5180',
    text: '#535353',
    boxText: '#FFF'
  },
  measures: {
    radius: '4px',
    tablet: '768px',
    phone: '460px',
    marginIn: '16px',
    marginOut: '20px',
    padding: '20px 20px 30px'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
