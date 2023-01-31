import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const RootElement = document.getElementById('root');

const RootApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(RootElement as HTMLElement).render(<RootApp />);
