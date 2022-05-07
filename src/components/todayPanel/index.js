/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Temperature from '../temperature';
import './styles.scss';

function TodayPanel() {
    const weather = useSelector((state) => state.weather.value);
    const [icon, setIcon] = useState();
    const [description, setDescription] = useState();
    const [temperature, setTemperature] = useState({
        celsius: null,
        fahrenheit: null,
    });

    useEffect(() => {
        if (weather && weather.weather) {
            const desc = weather.weather[0].description;
            const upperDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
            setIcon(weather.weather[0].icon);
            setDescription(upperDesc);
            setTemperature({
                celsius: Math.round(weather.main.temp),
                fahrenheit: Math.round((weather.main.temp) * (9 / 5) + 32),
            });
        } else {
            setIcon();
            setDescription();
            setTemperature({
                celsius: null,
                fahrenheit: null,
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
                    <div className="weather-icon">
                        {icon
                                ? <img src={require(`../../static/svg/${icon}.svg`)} alt={description} />
                                : <div />}
                    </div>
                    <div className="weather-info">
                        <div>
                            <p>HOJE </p>
                            <Temperature temperature={temperature} />
                            <br />
                        </div>
                        <div>
                            <p className="description">{description}</p>
                            <div className="details">
                                <p>{`Vento: ${1}`}</p>
                                <p>{`Humidade: ${1}`}</p>
                                <p>{`Pressão: ${1}`}</p>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}

export default TodayPanel;
