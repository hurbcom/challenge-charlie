import { useStoreState } from 'easy-peasy';
import React from 'react';
import { getColorFromTemperature } from '../../utils/functions';
import Temperature from '../temperature/temperature';
import './highlightedForecast.scss';

function HighlightedForecast() {
    const { weatherData, loading, showIcon } = useStoreState((state) => state);
    console.log(weatherData)
    const temperature = weatherData?.main?.temp;
    const color = getColorFromTemperature(temperature, !!weatherData?.name)[0];

    return (
        <div className="weather-container" style={{ backgroundColor: color }}>

            { weatherData?.name && !loading && (
                <div className="container-today">
                <div className="icon">
                <img src={`./styles/svg${showIcon}.svg`}/>
                </div>
                <div className="top">
                    <div className="location">
                        <p>Hoje</p>
                        <p>{weatherData?.name}</p>
                    </div>
                    <Temperature temperature={temperature} bigNumber={true}/>
                    <div className="description">
                        {weatherData?.weather ? <p>{weatherData.weather[0].description}</p> : null}
                    </div>
                    <div className="humidity">
                        {weatherData?.main && <p className="bold">Umidade {weatherData.main.humidity}%</p>}
                    </div>
                    <div className="wind">
                        {weatherData?.wind && <p className="bold">Vento {weatherData.wind.speed}m/s</p>}
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}

export default HighlightedForecast;