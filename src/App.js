import React, { Component } from 'react';
import logo from './logo.svg';
import BingBg from './background-bing';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BingBg />
        <input placeholder="Digite a localidade" />
      </div>
    );
  }
}

export default App;
