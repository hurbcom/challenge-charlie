// Imports React Defaults
import React from 'react'
import { initializeStore } from './reducers'

// Iniciaiza Variáveis
const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState) {
  // Inicializa Store
  if (isServer) {
    return initializeStore(initialState)
  }

  // Verifica se o client já possui uma store, caso contrário, cria
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps (appContext) {
      // Obter ou criar a store com `undefined` como initialState
      // Isso permite que você defina um initialState padrão personalizado
      const reduxStore = getOrCreateStore()

      // Fornecer a store para getInitialProps das páginas
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
