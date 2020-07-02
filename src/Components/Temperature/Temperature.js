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
          toggleUnit: false,
          todayIcon: null,
          tomorrowIcon: null,
          afterTomorrowIcon: null,

      };
    }

    componentDidMount = async () => {

        // Pega a localização do usuário e puxa os dados do clima da API do OpenWeather
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async(position) => {
                
                const apiOpenWeather = 'https://api.openweathermap.org/data/2.5/onecall';
                const keyOpenWeather = '7ba73e0eb8efe773ed08bfd0627f07b8';
                const weatherUrl = apiOpenWeather + '?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&%20exclude=hourly,minutely' + '&appid=' + keyOpenWeather + '&lang=pt&units=metric&cnt=3';
                
                const response = await fetch(weatherUrl);
                const data = await response.json();
                this.setState({ 
                    todayTemp: Math.round(data.daily[0].temp.day),
                    todayDescription: data.daily[0].weather[0].description,
                    todayWindDeg: data.daily[0].wind_deg,
                    todayWindSpeed: (data.daily[0].wind_speed).toFixed(1),
                    todayHumidity: data.daily[0].humidity,
                    todayPressure: data.daily[0].pressure,
                    tomorrowTemp: Math.round(data.daily[1].temp.day),
                    tomorrowDescription: data.daily[1].weather[0].description,
                    tomorrowWindDeg: data.daily[1].wind_deg,
                    tomorrowWindSpeed: (data.daily[1].wind_speed).toFixed(1),
                    tomorrowHumidity: data.daily[1].humidity,
                    tomorrowPressure: data.daily[1].pressure,
                    afterTomorrowTemp: Math.round(data.daily[2].temp.day),
                    afterTomorrowDescription: data.daily[2].weather[0].description,
                    afterTomorrowWindDeg: data.daily[2].wind_deg,
                    afterTomorrowWindSpeed: (data.daily[2].wind_speed).toFixed(1),
                    afterTomorrowHumidity: data.daily[2].humidity,
                    afterTomorrowPressure: data.daily[2].pressure,
                });

                if((this.state.todayDescription).includes("chuva")){
                    this.setState({ 
                        todayIcon: "R",                
                    });
                }else if((this.state.todayDescription).includes("nuvens") || (this.state.todayDescription).includes("nublado")){
                    this.setState({ 
                        todayIcon: "Y",                
                    });
                }else if((this.state.todayDescription).includes("sol") || (this.state.todayDescription).includes("limpo")){
                    this.setState({ 
                        todayIcon: "B",                
                    });
                }

                if((this.state.tomorrowDescription).includes("chuva")){
                    this.setState({ 
                        tomorrowIcon: "R",                
                    });
                }else if((this.state.tomorrowDescription).includes("nuvens") || (this.state.tomorrowDescription).includes("nublado")){
                    this.setState({ 
                        tomorrowIcon: "Y",                
                    });
                }else if((this.state.tomorrowDescription).includes("sol") || (this.state.tomorrowDescription).includes("limpo")){
                    this.setState({ 
                        tomorrowIcon: "B",                
                    });
                }

                if((this.state.afterTomorrowDescription).includes("chuva")){
                    this.setState({ 
                        afterTomorrowIcon: "R",                
                    });
                }else if((this.state.afterTomorrowDescription).includes("nuvens") || (this.state.afterTomorrowDescription).includes("nublado")){
                    this.setState({ 
                        afterTomorrowIcon: "Y",                
                    });
                }else if((this.state.afterTomorrowDescription).includes("sol") || (this.state.afterTomorrowDescription).includes("limpo")){
                    this.setState({ 
                        afterTomorrowIcon: "B",                
                    });
                }

                if(this.state.todayTemp > 35){
                    this.setState({ 
                        todayBg: "linear-gradient(to right,rgba(100,0,0,.9) 0%,rgba(150,0,0,.9) 100%)",                
                    });
                }else if(this.state.todayTemp < 15){
                    this.setState({ 
                        todayBg: "linear-gradient(to right,rgba(0,0,100,.9) 0%,rgba(0,0,150,.9) 100%)",                
                    });
                }else{
                    this.setState({ 
                        todayBg: "linear-gradient(to right, rgba(170, 140, 12, 0.9) 0%, rgba(190, 160, 18, 0.9) 100%)",                
                    });
                }

                if(this.state.tomorrowTemp > 35){
                    this.setState({ 
                        tomorrowBg: "linear-gradient(to right,rgba(80,0,0,.9) 0%,rgba(130,0,0,.9) 100%)",                
                    });
                }else if(this.state.tomorrowTemp < 15){
                    this.setState({ 
                        tomorrowBg: "linear-gradient(to right,rgba(0,0,80,.9) 0%,rgba(0,0,130,.9) 100%)",                
                    });
                }else{
                    this.setState({ 
                        tomorrowBg: "linear-gradient(to right, rgba(190, 170, 12, 0.9) 0%, rgba(200, 190, 18, 0.9) 100%)",                
                    });
                }

                if(this.state.afterTomorrowTemp > 35){
                    this.setState({ 
                        afterTomorrowBg: "linear-gradient(to right,rgba(60,0,0,.9) 0%,rgba(110,0,0,.9) 100%)",                
                    });
                }else if(this.state.afterTomorrowTemp < 15){
                    this.setState({ 
                        afterTomorrowBg: "linear-gradient(to right,rgba(0,0,60,.9) 0%,rgba(0,0,110,.9) 100%)",                
                    });
                }else{
                    this.setState({ 
                        afterTomorrowBg: "linear-gradient(to right,rgba(220,170,12,.9) 0%,rgba(226,180,18,.9) 100%)",                
                    });
                }
                
            });
        } 
        
    }

    //Converte a temperatura de Celsius para Fahrenheit e vice-versa
    convertTemperature = () => {
        this.setState(prevState => ({
            toggleUnit: !prevState.toggleUnit
        }));        
    }

    render() {
      return (
        <TemperatureStyles>
          <div className="temp-container">
            <div className="temperature" style={{background: this.state.todayBg}}>
                <div className="icon" data-icon={this.state.todayIcon}></div>
                <div>
                    <div className="info">
                        <h2>Hoje</h2>
                        <p onClick={this.convertTemperature}>{this.state.toggleUnit ? Math.round((this.state.todayTemp * 1.8) + 32) + '°F' : this.state.todayTemp + '°C' }</p>                                      
                    </div>
                    <div className="info details">
                        <h3>{this.state.todayDescription}</h3>
                        <p>Vento: {this.state.todayWindDeg} Graus {this.state.todayWindSpeed}km/h</p>
                        <p>Humidade: {this.state.todayHumidity}%</p>
                        <p>Pressão: {this.state.todayPressure}hPA</p>
                    </div> 
                </div>
            </div>
            <div className="temperature" style={{background: this.state.tomorrowBg}}>
                <div className="icon" data-icon={this.state.tomorrowIcon}></div>
                <div>
                    <div className="info">
                        <h2>Amanhã</h2>
                        <p onClick={this.convertTemperature}>{this.state.toggleUnit ? Math.round((this.state.tomorrowTemp * 1.8) + 32) + '°F' : this.state.tomorrowTemp + '°C' }</p>                        
                    </div>
                    <div className="info details">
                        <h3>{this.state.tomorrowDescription}</h3>
                        <p>Vento: {this.state.tomorrowWindDeg} Graus {this.state.tomorrowWindSpeed}km/h</p>
                        <p>Humidade: {this.state.tomorrowHumidity}%</p>
                        <p>Pressão: {this.state.tomorrowPressure}hPA</p>
                    </div>
                </div> 
            </div>
            <div className="temperature" style={{background: this.state.afterTomorrowBg}}>
                <div className="icon" data-icon={this.state.afterTomorrowIcon}></div>
                <div>
                    <div className="info">
                        <h2>Depois de amanhã</h2>
                        <p onClick={this.convertTemperature}>{this.state.toggleUnit ? Math.round((this.state.afterTomorrowTemp * 1.8) + 32) + '°F' : this.state.afterTomorrowTemp + '°C' }</p>                                                
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
