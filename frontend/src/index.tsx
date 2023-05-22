import { createRoot } from 'react-dom/client'
import Reset from './assets/styles/reset'
import Features from './features'
import GlobalStyle from './style'

import.meta.glob('./assets/images/*d.svg')
import.meta.glob('./assets/images/*n.svg')

createRoot(document.getElementById('root')).render(
  <>
    <Reset />
    <GlobalStyle />
    <Features />
  </>,
)
