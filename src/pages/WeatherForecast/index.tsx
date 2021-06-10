import React, { useEffect, useRef, useState } from 'react';

import sun from '../../assets/clear_sky.png';
import Background from '../../components/Background';
import Input from '../../components/Input';
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
import {
    BoxContent,
    TodayContainer,
    AfterTomorrowInfo,
    TomorrowInfo,
    TodayOthersInfoContainer,
    TodayOthersInfo,
    TodayInfo,
    FormSearchContainer,
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
    const [latitude, setLatitude] = useState(defaultLocation.lat);
    const [longitude, setLongitude] = useState(defaultLocation.long);

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
        const setWeatherForecast = () => {
            getCurrentWeatherForecast(searchLocation).then(currentWeather =>
                setTodayData(currentWeather),
            );
            getNextWeatherForecast(latitude, longitude).then(nextWeather => {
                if (nextWeather && nextWeather.daily.length >= 3) {
                    const [_, tomorrow, afterTomorrow] = nextWeather.daily;
                    setTomorrowData(tomorrow);
                    setAfterTomorrowData(afterTomorrow);
                }
            });
        };

        setWeatherForecast();
    }, [searchLocation, latitude, longitude]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef.current?.value) {
            setSearchLocation(inputRef.current?.value);
            const { lat, lon } = await getCoordinatesByLocation(searchLocation);
            setLatitude(lat);
            setLongitude(lon);
        }
    };

    return (
        <Background>
            <BoxContent temperature={todayData?.main.temp}>
                <SearchBar onSubmit={handleSubmit} inputRef={inputRef} />
                <TodayContainer>
                    <TodayInfo>
                        <h2>{todayData?.name}</h2>
                        <h3>Hoje</h3>
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
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Vento</b>
                                <p>
                                    <span>
                                        {todayData?.wind.deg &&
                                            windDirection(todayData?.wind.deg)}
                                    </span>
                                    {todayData?.wind.speed} km/h
                                </p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Pressão</b>
                                <p>
                                    {todayData?.main.pressure &&
                                        todayData?.main.pressure}
                                    hPA
                                </p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Humidade</b>
                                <p>{todayData?.main.humidity} %</p>
                            </div>
                        </TodayOthersInfo>
                    </TodayOthersInfoContainer>
                </TodayContainer>
                <TomorrowInfo>
                    <h3>Amanhã</h3>
                    <div onClick={() => setIsCelsius(!isCelsius)}>
                        {isCelsius ? (
                            <span>
                                {tomorrowData?.temp.day &&
                                    Math.round(tomorrowData?.temp.day)}{' '}
                                °C
                            </span>
                        ) : (
                            <span>
                                {tomorrowData?.temp.day &&
                                    celsiusForFahrenheit(
                                        Math.round(tomorrowData?.temp.day),
                                    )}{' '}
                                °F
                            </span>
                        )}

                        <img
                            src={weatherIcons(
                                tomorrowData?.weather[0].icon as any,
                            )}
                            alt={tomorrowData?.weather[0].description}
                        />
                    </div>
                </TomorrowInfo>
                <AfterTomorrowInfo>
                    <h3>Depois de Amanhã</h3>
                    <div onClick={() => setIsCelsius(!isCelsius)}>
                        {isCelsius ? (
                            <span>
                                {afterTomorrowData?.temp.day &&
                                    Math.round(
                                        afterTomorrowData?.temp.day,
                                    )}{' '}
                                °C
                            </span>
                        ) : (
                            <span>
                                {afterTomorrowData?.temp.day &&
                                    celsiusForFahrenheit(
                                        Math.round(afterTomorrowData?.temp.day),
                                    )}{' '}
                                °F
                            </span>
                        )}

                        <img
                            src={weatherIcons(
                                afterTomorrowData?.weather[0].icon as any,
                            )}
                            alt={afterTomorrowData?.weather[0].description}
                        />
                    </div>
                </AfterTomorrowInfo>
            </BoxContent>
        </Background>
    );
};

export default WeatherForecast;
