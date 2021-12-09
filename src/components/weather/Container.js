import { useState, useEffect } from 'react';
import { getLocation, getWindDirection, getBackgroundColor, getIcon } from '../../utils';
import { fetchData } from '../../services/Resource';

const useContainer = () => {

    const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
    const { lat, lon } = getLocation();

    const [weather, setWeather] = useState(null);
    const [unit, setUnit] = useState('metric');

    useEffect(() => {
        getWeather();
    }, [unit]);

    const getWeather = async () => {
        const { current, daily } = await fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly&lang=pt_br&APPID=${OPENWEATHER_KEY}&cnt=1`);

        setWeather({
            today: {
                temp: parseInt(current.temp),
                weather: current.weather[0],
                wind_speed: `${current.wind_speed}km/h`,
                wind_deg: getWindDirection(current.wind_deg),
                humidity: `${current.humidity}%`,
                pressure: `${current.pressure}hPA`,
                icon: getIcon(current.weather[0].icon)
            },
            tomorrow: {
                temp: parseInt(daily[1].temp.day),
                icon: getIcon(daily[1].weather[0].icon)
            },
            afterTomorrow: {
                temp: parseInt(daily[2].temp.day),
                icon: getIcon(daily[2].weather[0].icon)
            },
            type: unit,
            colors: getBackgroundColor(unit, [current.temp, daily[1].temp.day, daily[2].temp.day]),
        });
    };

    const convertUnit = () => {
        setUnit(unit === 'metric' ? 'imperial' : 'metric');
    };

    return {
        weather,
        convertUnit
    }
};

export default useContainer;