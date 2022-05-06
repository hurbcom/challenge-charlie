/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

function TodayPanel() {
    const weather = useSelector((state) => state.weather.value);
    const [icon, setIcon] = useState();
    const [description, setDescription] = useState();
    const [temperature, setTemperature] = useState({
        celsius: null,
        farenheit: null,
    });
    const [unit, setUnit] = useState('c');

    useEffect(() => {
        if (weather && weather.weather) {
            setIcon(weather.weather[0].icon);
            setDescription(weather.weather[0].description);
            setTemperature({
                celsius: Math.round(weather.main.temp - 273.15),
                farenheit: Math.round((weather.main.temp - 273.15) * (9 / 5) + 32),
            });
        } else {
            setIcon();
            setDescription();
            setTemperature({
                celsius: null,
                farenheit: null,
            });
        }
    }, [weather]);

    function getColor() {
        if (temperature.celsius == null) return 'rgba(255, 255, 255, 0.85)';
        if (temperature.celsius < 15) return 'rgba(41, 182, 246, 0.85)';
        if (temperature.celsius > 35) return 'rgba(239, 83, 80, 0.85)';
        return 'rgba(255, 202, 40, 0.85)';
    }

    return (
        <div id="today-panel" style={{ backgroundColor: getColor() }}>
            { (weather && weather.weather) && (
                <>
                    <div className="weather-icon" style={{ width: '60%' }}>
                        {icon
                                ? <img src={require(`../../static/svg/${icon}.svg`)} alt={description} />
                                : <div />}
                    </div>
                    <div style={{ width: '40%' }} />

                </>
            )}
        </div>
    );
}

export default TodayPanel;
