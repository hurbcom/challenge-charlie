import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import GlobalStyle from '../src/components/UI/GlobalStyle'

ReactDOM.render(
  <>
    <GlobalStyle />
    <AppContainer />
  </>,
  document.getElementById('root')
)
