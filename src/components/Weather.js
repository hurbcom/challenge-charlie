import React from 'react'

//esse componente vai acabar sendo stateless pelo visto, pode ser reescrito para melhor entendimento
class Weather extends React.Component{
    state = {
        scale : "C",
    }
    render(){
        const newBackgroundColor = this.changeBackgroundColor();
        const divStyle = {backgroundColor : newBackgroundColor}
        return (
            <div className = {this.props.className} style = {divStyle}>
                <div className = "weather-icon">
                </div>
                <div className = "weather-info">
                    <p>{this.props.day}</p>
                    {
                        //https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                        this.props.temperature && 
                        <span onClick={ (event) => {this.changeTemperatureScale(event)}}>
                            <p>Temperatura: {this.showTemperature()} °{this.state.scale} </p> 
                        </span>
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
            return parseInt(temperatureImperial,10);
        }
    }
    changeTemperatureScale(e){
        e.preventDefault();
        if(this.state.scale === "C"){
            this.setState({scale: "F"});
        } else {
            this.setState({scale: "C"});
        }
    }
    /*
    componentDidUpdate(){
        changeBackgroundColor();
    }
    */
    changeBackgroundColor(){
        const visibility = 0.5;
        const temperature = this.props.temperature;
        const coldColorValue = 15;
        const hotColorValue = 35;
        const initialColorValue = 64;
        
        let colorValue = initialColorValue;
        
        
        if(temperature === "undefined"){ //cinza
            return `rgba(0,0,0,${visibility})`;
        } else if(temperature < coldColorValue){ //tons de azul
            if(temperature > 0){ //so tera degrade se a temperatura for maior que zero
                colorValue = initialColorValue + (initialColorValue * temperature)/coldColorValue;
            }
            return `rgba(0,0,${colorValue},${visibility})`;
        } else if(temperature > hotColorValue){ //tons de vermelho
            return `rgba(255,0,0,${visibility})`;
        } else { //tons de amarelo
            colorValue = initialColorValue + ( (temperature-coldColorValue) * ( (255 - initialColorValue) / (hotColorValue-coldColorValue) ) );
            return `rgba(${colorValue},${colorValue},0,${visibility})`;
        }
    }
}
export default Weather