import React from 'react';
//import Api from './api-Yahoo.js' //se quiser mudar a API, pode faze-la aqui.
import Search from "./components/Search";
import Weather from "./components/Weather";

class App extends React.Component {
    /*
    constructor(props){
        console.log("teste");
        super(props);
        this.getWeather();
    }
    */
    state = {
        city: undefined,
        day0 : { //hoje
            temperature: undefined,
            weather:undefined,
            wind:undefined,
            humidity:undefined,
            pression:undefined
        },
        day1 : { //amanha
            temperature: undefined,
        },
        day2 : { //depois de amanha
            temperature: undefined,
        },
        latitude: undefined,
        longitude: undefined,
        error: undefined,
        
    }
    //todo: colocar isso a parte no codigo para alterar as apis mais facilmente
    //so para constar, isso ai e uma arrow function assincrona
    getWeatherByAddress = async (e) => {
        e.preventDefault(); //impedindo de recarregar a tela
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{${city}}%22)and u="c"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
        const data = await api_call.json();
        this.setWeatherState(data);
    }
    
    getWeatherByGeolocation = async (latitude,longitude) => {
        console.log("latitude: "+latitude+", longitude:"+longitude);
        const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${latitude},${longitude})") and u="c"&format=json`);
        const data = await api_call.json();
        this.setWeatherState(data);
    }
    
    setWeatherState(data){
        this.setState({
            city : data.query.results.channel.location.city,
            day0 : {
                temperature: data.query.results.channel.item.condition.temp,
                weather: data.query.results.channel.item.condition.text,
                wind: data.query.results.channel.wind.speed,
                humidity: data.query.results.channel.atmosphere.humidity,
                pression: data.query.results.channel.atmosphere.pression
            },
            day1 : { //como nao existe a temperatura media, faz-se uma estimativa
                temperature: (parseInt(data.query.results.channel.item.forecast[1].high) + parseInt(data.query.results.channel.item.forecast[1].low))/2
            },
            day2 : {
                temperature: 
                (parseInt(data.query.results.channel.item.forecast[2].high) + parseInt(data.query.results.channel.item.forecast[2].low))/2
            }
        })
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              //latitude: position.coords.latitude,
              //longitude: position.coords.longitude,
              error: null,
            });
          this.getWeatherByGeolocation(position.coords.latitude,position.coords.longitude)
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Search getWeather={this.getWeatherByAddress} />
            Nome da Cidade: {this.state.city}
            <Weather temperature = {this.state.day0.temperature} 
                weather = {this.state.day0.weather}
                wind = {this.state.day0.wind}
                humidity = {this.state.day0.humidity}
                pression = {this.state.day0.pression}
                day = "Hoje"
            />
            <Weather temperature = {this.state.day1.temperature} day= "Amanha" />
            <Weather temperature = {this.state.day2.temperature} day = "Depois de amanha" />
        </header>
      </div>
    );
  }
}

export default App;
