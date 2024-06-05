import { useState, useEffect } from 'react';
import "./App.css";
import { useGeoLocation } from "./hooks/GeoLocationHook";
import { useWeather } from "./hooks/WeatherHook";
import {useBackgroundImage} from "./hooks/BackgroundImageHook"
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import InputLocation from "./components/InputLocation/InputLocation";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import FutureWeather from "./components/FutureWeather/FutureWeather";
import Loading from "./components/Loading/Loading";
import Error from './components/Error/Error';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useGeoLocation();
    const { futureWeatherData, currentWeather, setWeatherByCityName } = useWeather();
    const { url, alt, loading, error } = useBackgroundImage();

    useEffect(() => {
        if (location.loaded && currentWeather && futureWeatherData && futureWeatherData.length > 0) {
            setIsLoading(false);
        }
    }, [location.loaded, currentWeather, futureWeatherData]);

    const handleLocationSubmit = newState => {
        setWeatherByCityName(newState);
    };

    if (location.error || (!location.loaded && !isLoading)) {
        return <Error />;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="app-container">
            <InputLocation
                city={location.state}
                onSubmit={handleLocationSubmit}
            />
            <BackgroundImage 
               url={url}
               alt={alt}
               loading={loading}
               error={error}
            />
            <CurrentWeather data={currentWeather} />

            {futureWeatherData.slice(0, 2).map((weather, index) => (
                <FutureWeather
                    key={index}
                    label={index === 0 ? "Tomorrow" : "After tomorrow"}
                    temperature={weather.temp}
                    color={index === 0 ? 0 : 1}
                />
            ))}
        </div>
    );
}

export default App;
