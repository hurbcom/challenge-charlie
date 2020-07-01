import React, { Component } from "react";
import { TemperatureStyles } from './TemperatureStyles';

class Temperature extends Component {

    constructor(props){
      super(props);
      this.state = {
          todayTemp: null, 
          todayDescription: null, 
          todayWindDeg: null, 
          todayWindSpeed: null, 
          todayHumidity: null, 
          todayPressure: null, 
          tomorrowTemp: null, 
          tomorrowDescription: null, 
          tomorrowWindDeg: null, 
          tomorrowWindSpeed: null, 
          tomorrowHumidity: null, 
          tomorrowPressure: null, 
          afterTomorrowTemp: null, 
          afterTomorrowDescription: null, 
          afterTomorrowWindDeg: null, 
          afterTomorrowWindSpeed: null, 
          afterTomorrowHumidity: null, 
          afterTomorrowPressure: null, 
        //   toggleOn: false,

      };
    }

    componentDidMount = async () => {

        // Pega a localização do usuário e puxa os dados do clima da API do OpenWeather
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async(position) => {
                
                const apiOpenWeather = 'https://api.openweathermap.org/data/2.5/onecall';
                const keyOpenWeather = '7ba73e0eb8efe773ed08bfd0627f07b8';
                const weatherUrl = apiOpenWeather + '?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&%20exclude=hourly,minutely' + '&appid=' + keyOpenWeather + '&lang=pt&units=metric&cnt=3';
                console.log(weatherUrl);
                const response = await fetch(weatherUrl);
                const data = await response.json();
                this.setState({ 
                    todayTemp: data.daily[0].temp.day,
                    todayDescription: data.daily[0].weather[0].description,
                    todayWindDeg: data.daily[0].wind_deg,
                    todayWindSpeed: data.daily[0].wind_speed,
                    todayHumidity: data.daily[0].humidity,
                    todayPressure: data.daily[0].pressure,
                    tomorrowTemp: data.daily[1].temp.day,
                    tomorrowDescription: data.daily[1].weather[0].description,
                    tomorrowWindDeg: data.daily[1].wind_deg,
                    tomorrowWindSpeed: data.daily[1].wind_speed,
                    tomorrowHumidity: data.daily[1].humidity,
                    tomorrowPressure: data.daily[1].pressure,
                    afterTomorrowTemp: data.daily[2].temp.day,
                    afterTomorrowDescription: data.daily[2].weather[0].description,
                    afterTomorrowWindDeg: data.daily[2].wind_deg,
                    afterTomorrowWindSpeed: data.daily[2].wind_speed,
                    afterTomorrowHumidity: data.daily[2].humidity,
                    afterTomorrowPressure: data.daily[2].pressure,
                });
            });
        } 
    }

    //Converte a temperatura de Celsius para Fahrenheit e vice-versa
    // convertTemperature() {
    //     this.setState(prevState => ({
    //         toggleOn: !prevState.toggleOn
    //     }));
    //     console.log(this.state.toggleOn);
    // }


    render() {
      return (
        <TemperatureStyles>
          <div className="temp-container">
            <div className="temperature" onClick={this.convertTemperature}>
                <div className="icon" data-icon="B"></div>
                <div>
                    <div className="info">
                        <h2>Hoje</h2>
                        <p>{this.state.todayTemp} &deg;C</p>                                      
                    </div>
                    <div className="info details">
                        <h3>{this.state.todayDescription}</h3>
                        <p>Vento: {this.state.todayWindDeg} Graus {this.state.todayWindSpeed}km/h</p>
                        <p>Humidade: {this.state.todayHumidity}%</p>
                        <p>Pressão: {this.state.todayPressure}hPA</p>
                    </div> 
                </div>
            </div>
            <div className="temperature" onClick={this.convertTemperature}>
                <div className="icon" data-icon="B"></div>
                <div>
                    <div className="info">
                        <h2>Amanhã</h2>
                        <p>{this.state.tomorrowTemp} &deg;C</p>                                      
                    </div>
                    <div className="info details">
                        <h3>{this.state.tomorrowDescription}</h3>
                        <p>Vento: {this.state.tomorrowWindDeg} Graus {this.state.tomorrowWindSpeed}km/h</p>
                        <p>Humidade: {this.state.tomorrowHumidity}%</p>
                        <p>Pressão: {this.state.tomorrowPressure}hPA</p>
                    </div>
                </div> 
            </div>
            <div className="temperature" onClick={this.convertTemperature}>
                <div className="icon" data-icon="B"></div>
                <div>
                    <div className="info">
                        <h2>Depois de amanhã</h2>
                        <p>{this.state.afterTomorrowTemp} &deg;C</p>                                      
                    </div>
                    <div className="info details">
                        <h3>{this.state.afterTomorrowDescription}</h3>
                        <p>Vento: {this.state.afterTomorrowWindDeg} Graus {this.state.afterTomorrowWindSpeed}km/h</p>
                        <p>Humidade: {this.state.afterTomorrowHumidity}%</p>
                        <p>Pressão: {this.state.afterTomorrowPressure}hPA</p>
                    </div>
                </div> 
            </div>
          </div>        
        </TemperatureStyles>
      );      
    }
}

export default Temperature;
