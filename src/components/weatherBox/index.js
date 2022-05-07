import React from 'react';
import LocationInput from '../locationInput';
import TodayPanel from '../todayPanel';
import ForecastPanel from '../forecastPanel';
import './styles.scss';

function WeatherBox() {
    return (
        <div id="weather-box">
            <div className="container">
                <div className="content">
                    <LocationInput />
                    <TodayPanel />
                    <ForecastPanel day={0} />
                    <ForecastPanel day={1} />
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;
