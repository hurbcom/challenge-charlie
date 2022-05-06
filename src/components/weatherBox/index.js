import React from 'react';
import LocationInput from '../locationInput';
import './styles.scss';

function WeatherBox() {
    return (
        <div id="weather-box">
            <div className="container">
                <div className="content">
                    <LocationInput />
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;
