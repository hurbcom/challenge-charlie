import { useState, useEffect } from 'react';
import { getLocation } from '../../utils/getLocation';
import { fetchData } from '../../services/Resource';

const useContainer = () => {

    const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
    const { lat, lon } = getLocation();

    const [geolocation, setGeolocation] = useState(null);

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        const { current, daily } = await fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&lang=pt_br&APPID=${OPENWEATHER_KEY}&cnt=1`);
        console.log(current, daily)
    };

    return {
        geolocation,
        setGeolocation
    }
};

export default useContainer;