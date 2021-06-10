import React, { useEffect, useRef, useState } from 'react';

import humidity from '../../assets/humidity.png';
import pressure from '../../assets/pressure.png';
import wind from '../../assets/wind.png';
import Background from '../../components/Background';
import SearchBar from '../../components/SearchBar';
import type {
    CurrentWeatherData,
    DailyForecast,
} from '../../interfaces/WeatherForecast';
import { getCoordinatesByLocation } from '../../services/GeolocationService';
import {
    getCurrentWeatherForecast,
    getNextWeatherForecast,
} from '../../services/WeatherForecastService';
import { celsiusForFahrenheit } from '../../utils/temperature';
import { weatherIcons } from '../../utils/weatherIcons';
import { windDirection } from '../../utils/windDirection';
import SecondarySectionWeather from '../SecondarySectionWeather';
import WeatherDetails from '../WeatherDetails';
import {
    BoxContent,
    TodayContainer,
    TodayOthersInfoContainer,
    TodayInfo,
} from './styles';

interface WeatherForecastProps {
    temperature?: number;
}

const defaultLocation = {
    city: 'Rio de Janeiro',
    lat: -22.9110137,
    long: -43.2093727,
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ temperature }) => {
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const [searchLocation, setSearchLocation] = useState(defaultLocation.city);
    const [userLocation, setUserLocation] = useState({});
    const latitude = useRef(defaultLocation.lat);
    const longitude = useRef(defaultLocation.long);

    const [todayData, setTodayData] = useState<
        CurrentWeatherData | undefined
    >();
    const [tomorrowData, setTomorrowData] = useState<
        DailyForecast | undefined
    >();
    const [afterTomorrowData, setAfterTomorrowData] = useState<
        DailyForecast | undefined
    >();

    const [isCelsius, setIsCelsius] = useState(true);

    useEffect(() => {
        let options = {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0,
        };

        function success(position: any) {
            let coordinates = position.coords;
            setUserLocation(coordinates);
            console.log('Latitude : ' + coordinates.latitude);
            console.log('Longitude: ' + coordinates.longitude);
        }

        function error(err: any) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    useEffect(() => {
        console.log('userLocation', userLocation);
        const setWeatherForecast = () => {
            getCurrentWeatherForecast(searchLocation).then(currentWeather =>
                setTodayData(currentWeather),
            );

            getNextWeatherForecast(latitude.current, longitude.current).then(
                nextWeather => {
                    if (nextWeather && nextWeather.daily.length >= 3) {
                        const [, tomorrow, afterTomorrow] = nextWeather.daily;
                        setTomorrowData(tomorrow);
                        setAfterTomorrowData(afterTomorrow);
                    }
                },
            );
        };

        setWeatherForecast();
    }, [searchLocation, latitude, longitude]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef.current?.value) {
            const { lat, lon } = await getCoordinatesByLocation(
                inputRef.current?.value,
            );

            latitude.current = lat;
            longitude.current = lon;

            setSearchLocation(inputRef.current?.value);
        }
    };

    return (
        <Background>
            <BoxContent temperature={todayData?.main.temp}>
                <SearchBar onSubmit={handleSubmit} inputRef={inputRef} />
                <TodayContainer>
                    <TodayInfo>
                        <span>{todayData?.name}</span>
                        <p>Hoje</p>
                        <img
                            src={weatherIcons(
                                todayData?.weather[0].icon as any,
                            )}
                            alt={todayData?.weather[0].description}
                        />
                        <div onClick={() => setIsCelsius(!isCelsius)}>
                            {isCelsius ? (
                                <h1>
                                    {todayData?.main.temp &&
                                        Math.round(todayData?.main.temp)}
                                    °C
                                </h1>
                            ) : (
                                <h1>
                                    {todayData?.main.temp &&
                                        celsiusForFahrenheit(
                                            Math.round(todayData?.main.temp),
                                        )}
                                    °F
                                </h1>
                            )}
                        </div>
                        <span>{todayData?.weather[0].description}</span>
                    </TodayInfo>
                    <TodayOthersInfoContainer>
                        <WeatherDetails
                            label="Vento"
                            content={
                                todayData?.wind.deg &&
                                windDirection(todayData?.wind.deg)
                            }
                            value={`${todayData?.wind.speed} Km/h`}
                            imageSource={wind}
                        />
                        <WeatherDetails
                            label="Pressão"
                            value={`${todayData?.main.pressure} hPA`}
                            imageSource={pressure}
                        />
                        <WeatherDetails
                            label="Humidade"
                            value={`${todayData?.main.humidity}%`}
                            imageSource={humidity}
                        />
                    </TodayOthersInfoContainer>
                </TodayContainer>
                <SecondarySectionWeather
                    title="Amanhã"
                    onClick={() => setIsCelsius(!isCelsius)}
                    iconSource={weatherIcons(
                        tomorrowData?.weather[0].icon as any,
                    )}
                    alt={tomorrowData?.weather[0].description}
                    value={
                        isCelsius
                            ? tomorrowData?.temp.day &&
                              `${Math.round(tomorrowData?.temp.day)}°C`
                            : tomorrowData?.temp.day &&
                              `${celsiusForFahrenheit(
                                  Math.round(tomorrowData?.temp.day),
                              )}°F`
                    }
                />
                <SecondarySectionWeather
                    title="Depois de Amanhã"
                    onClick={() => setIsCelsius(!isCelsius)}
                    iconSource={weatherIcons(
                        afterTomorrowData?.weather[0].icon as any,
                    )}
                    alt={afterTomorrowData?.weather[0].description}
                    value={
                        isCelsius
                            ? afterTomorrowData?.temp.day &&
                              `${Math.round(afterTomorrowData?.temp.day)}°C`
                            : afterTomorrowData?.temp.day &&
                              `${celsiusForFahrenheit(
                                  Math.round(afterTomorrowData?.temp.day),
                              )}°F`
                    }
                />
            </BoxContent>
        </Background>
    );
};

export default WeatherForecast;
