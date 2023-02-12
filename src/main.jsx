import { StoreProvider } from 'easy-peasy';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store';
import './styles/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
  </React.StrictMode>,
)
