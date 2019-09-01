// Imports React Defaults
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import React from 'react'

// Import Utils
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={{}}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore( MyApp );