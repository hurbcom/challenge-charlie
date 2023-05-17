import { createRoot } from 'react-dom/client'
import Reset from './assets/styles/reset'
import Features from './features'
import GlobalStyle from './style'

createRoot(document.getElementById('root')).render(
  <>
    <Reset />
    <GlobalStyle />
    <Features />
  </>,
)
