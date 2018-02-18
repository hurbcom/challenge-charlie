import React from 'react'

//esse componente vai acabar sendo stateless pelo visto, pode ser reescrito para melhor entendimento
class Weather extends React.Component{
    state = {
        scale : "C",
    }
    render(){
        return (
            <div>
                <p>{this.props.day}</p>
            {
                //https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                this.props.temperature && <p>Temperatura: {this.showTemperature()} °{this.state.scale} </p> 
            }
            {
                this.props.weather && <p>Clima: {this.props.weather} </p> 
            }
            {
                this.props.wind && <p>Vento: {this.props.wind} km/h</p> 
            }
            {
                this.props.humidity && <p>Humidade: {this.props.humidity} %</p> 
            }
            {
                this.props.pression && <p>Pressao: {this.props.pression} mb</p> 
            }
  
            </div>
        );
    }
    //mostra a temperatura em celsius oum fahrenheit
    showTemperature(){
        if(this.state.scale === "C"){
            return this.props.temperature;
        } else {
            let temperatureImperial = this.props.temperature;
            temperatureImperial = parseFloat(temperatureImperial);
            temperatureImperial = (temperatureImperial / 5) * 9 + 32;
            return temperatureImperial;
        }
    }
}
export default Weather