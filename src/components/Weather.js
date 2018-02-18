import React from 'react'

class Weather extends React.Component{
    render(){
        return (
            <div>
                Nome da Cidade: {this.props.name}
                Temperatura: {this.props.temperature}
            </div>
        );
    }
}
export default Weather