import React from 'react'

//esse componente vai acabar sendo stateless pelo visto, pode ser reescrito para melhor entendimento
class Weather extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.day}</p>
            {
                //https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                this.props.temperature && <p>Temperatura: {this.props.temperature} </p> 
            }
            {
                this.props.weather && <p>Clima: {this.props.weather} </p> 
            }
            {
                this.props.wind && <p>Vento: {this.props.wind} </p> 
            }
            {
                this.props.humidity && <p>Humidade: {this.props.humidity} </p> 
            }
            {
                this.props.pression && <p>Pressao: {this.props.pression} </p> 
            }
  
            </div>
        );
    }
}
export default Weather