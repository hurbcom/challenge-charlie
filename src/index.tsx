import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/App';
import './theme/reset.css';

const App = () => <Main />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
