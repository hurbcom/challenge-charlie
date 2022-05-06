import React from 'react';
import LocationInput from '../locationInput';
import TodayPanel from '../todayPanel';
import './styles.scss';

function WeatherBox() {
    return (
        <div id="weather-box">
            <div className="container">
                <div className="content">
                    <LocationInput />
                    <TodayPanel />
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;
