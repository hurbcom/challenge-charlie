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
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();

    function formatDirection(deg) {
        const val = Math.floor((deg / 22.5) + 0.5);
        const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
        return arr[(val % 16)];
    }

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
            setWind(`${formatDirection(weather.wind.deg)} ${(weather.wind.speed * 3.6).toFixed(1)}`);
            setHumidity(weather.main.humidity);
            setPressure(weather.main.pressure);
        } else {
            setIcon();
            setDescription();
            setTemperature({
                celsius: null,
                fahrenheit: null,
            });
            setWind();
            setHumidity();
            setPressure();
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
                                <p>{`Vento: ${wind} km/h`}</p>
                                <p>{`Humidade: ${humidity}%`}</p>
                                <p>{`Pressão: ${pressure} hPA`}</p>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}

export default TodayPanel;
