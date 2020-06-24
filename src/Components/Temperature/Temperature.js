import React, { Component } from "react";
import { TemperatureStyles } from './TemperatureStyles';

class Temperature extends Component {

    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const apiOpenCage = 'https://api.opencagedata.com/geocode/v1/json?q=';
                const apiKey = 'c63386b4f77e46de817bdf94f552cddf';
                const finalUrl = apiOpenCage + position.coords.latitude + '%2C' + position.coords.longitude + '&key=' + apiKey;
                                
                console.log(finalUrl);
            });
        }
       
    }

  render() {
    return (
      <TemperatureStyles>
        <div className="temp-container">
            <div className="temperature">
                <div className="info">
                    <h2>Hoje</h2>
                    <p>32°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
            <div className="temperature">
                <div className="info">
                    <h2>Amanhã</h2>
                    <p>25°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
            <div className="temperature">
                <div className="info">
                    <h2>Depois de amanhã</h2>
                    <p>22°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
        </div>
        
      </TemperatureStyles>
    );
  }
}

export default Temperature;