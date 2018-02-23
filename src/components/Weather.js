import React from 'react'

//esse componente vai acabar sendo stateless pelo visto, pode ser reescrito para melhor entendimento
class Weather extends React.Component{

    render(){
        const newBackgroundColor = this.changeBackgroundColor();
        return (
            <div className = {newBackgroundColor}>
                <div className = "weather-icon">
                    {this.props.icon}
                </div>
                <div className = "weather-info">
                    <h1>{this.props.day}</h1>
                    {
                        //https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                        (this.props.temperature !== undefined) && 
                        <span onClick={ (event) => {this.props.changeScale ? this.props.changeScale(event) : undefined}}>
                            <h1>{this.showTemperature(this.props.temperature)} °{this.props.scale} </h1> 
                        </span>
                    }
                    {
                        this.props.weather && <div className="weather-info__description"><h1>{this.props.weather} </h1> </div>
                    }
                    {
                        this.props.wind && <p>Vento: {this.props.wind} km/h</p> 
                    }
                    {
                        this.props.humidity && <p>Humidade: {this.props.humidity} %</p> 
                    }
                    {
                        this.props.pressure && <p>Pressão: {this.props.pressure} mb</p> 
                    }
                </div>
                
  
            </div>
        );
    }
    //mostra a temperatura em celsius oum fahrenheit
    showTemperature(){
        if(this.props.scale === "C"){
            return parseInt(this.props.temperature,10);
        } else {
            let temperatureImperial = this.props.temperature;
            temperatureImperial = parseFloat(temperatureImperial);
            temperatureImperial = (temperatureImperial / 5) * 9 + 32;
            return parseInt(temperatureImperial,10);
        }
    }

    //representa a variacao de degrade de acordo com a temperatura
    //o correto seria usar tons ja pre-estabelecidos para cada um dos dias. Essa ideia pode ficar de backup. Talvez de para variar a transparencia
    changeBackgroundColor(){
        const temperature = this.props.temperature;
        const coldColorValue = 15;
        const hotColorValue = 35;
        
        let backgroundColor = this.props.className;
        if(temperature > coldColorValue && temperature < hotColorValue){ //tons de amarelo
            backgroundColor += " weather__normalDay";
        } else if(temperature < coldColorValue){ //tons de azul
            backgroundColor += " weather__coldDay";
        } else if(temperature > hotColorValue){ //tons de vermelho
            backgroundColor += " weather__hotDay";
        } else { //tons cinza
            backgroundColor += " weather__unknown";
        }
        return backgroundColor;
        
    }
}

export default Weather