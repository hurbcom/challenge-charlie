import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/App';
import './theme/reset.css';

const App = () => <Main />;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
