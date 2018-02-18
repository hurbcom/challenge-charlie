import React from 'react';
//import Api from './api-Yahoo.js' //se quiser mudar a API, pode faze-la aqui.

class App extends React.Component {
    constructor(props){
        console.log("teste");
        super(props);
        this.getWeather();
    }
    
    //todo: colocar isso a parte no codigo para alterar as apis mais facilmente
    //getWeather = async (e) => {
    async getWeather() {
        //e.preventDefault();
        const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{rio%20de%20janeiro}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
        const data = await api_call.json();
        console.log(data);
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
