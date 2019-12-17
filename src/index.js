import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const root = document.getElementById('root-app')
const load = () => {
  ReactDOM.render(<App />, root)
}

load()
