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
        if(this.props.temperature === "undefined"){ //cinza
            return "gray";
        } else if(this.props.temperature < 15){ //tons de azul
            return "blue";
        } else if(this.props.temperature > 35){ //tons de vermelho
            return "red";
        } else { //tons de amarelo
            return "yellow";
        }
    }
}
export default Weather