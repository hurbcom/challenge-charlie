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
import {
    getCoordinatesByLocation,
    getLocationFromCoordinates,
} from '../../services/GeolocationService';
import {
    getCurrentWeatherForecast,
    getNextWeatherForecast,
} from '../../services/WeatherForecastService';
import { celsiusForFahrenheit } from '../../utils/temperature';
import { weatherIcons } from '../../utils/weatherIcons';
import { windDirection } from '../../utils/windDirection';
import SecondarySectionWeather from '../SecondarySectionWeather';
import { SkeletonLoader } from '../SkeletonLoader';
import WeatherDetails from '../WeatherDetails';
import {
    BoxContent,
    TodayContainer,
    TodayOthersInfoContainer,
    TodayInfo,
    TomorrowContainer,
    AfterTomorrowContainer,
    ErrorMessageContainer,
} from './styles';

const WeatherForecast: React.FC = () => {
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const [searchLocation, setSearchLocation] = useState<string | null>(null);
    const latitude = useRef<number | null>(null);
    const longitude = useRef<number | null>(null);

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
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        let options = {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0,
        };

        async function success(position: any) {
            let coordinates = position.coords;
            latitude.current = coordinates.latitude;
            longitude.current = coordinates.longitude;
            const userLocation = await getLocationFromCoordinates(
                coordinates.latitude,
                coordinates.longitude,
            );
            setSearchLocation(userLocation);
            setIsLoading(false);
            setIsError(false);
        }

        function error(err: any) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            setIsLoading(false);
            setIsError(true);
            setMessageError(
                'Utilize o campo de busca para pesquisar a Previsão do Tempo de uma localidade. ',
            );
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    useEffect(() => {
        const setWeatherForecast = () => {
            searchLocation &&
                getCurrentWeatherForecast(searchLocation)
                    .then(currentWeather => {
                        if (!currentWeather) {
                            setIsError(true);
                        } else {
                            setTodayData(currentWeather);
                            setIsError(false);
                        }
                    })
                    .catch(() => setIsError(true));

            latitude.current &&
                longitude.current &&
                getNextWeatherForecast(latitude.current, longitude.current)
                    .then(nextWeather => {
                        if (nextWeather && nextWeather.daily.length >= 3) {
                            const [, tomorrow, afterTomorrow] =
                                nextWeather.daily;
                            setTomorrowData(tomorrow);
                            setAfterTomorrowData(afterTomorrow);
                            setIsError(false);
                        } else {
                            setIsError(true);
                        }
                    })
                    .catch(() => setIsError(true));
        };

        setWeatherForecast();
    }, [searchLocation, latitude, longitude]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (inputRef.current?.value) {
                setIsLoading(true);
                const { lat, lon } = await getCoordinatesByLocation(
                    inputRef.current?.value,
                );

                latitude.current = lat;
                longitude.current = lon;
                setSearchLocation(inputRef.current?.value);
                setIsError(false);
            }
        } catch (err) {
            console.error(err);
            setIsError(true);
            setMessageError('Local não encontrado.Tente Novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }, []);

    return (
        <Background>
            <BoxContent
                temperature={isLoading || isError ? 1000 : todayData?.main.temp}
            >
                <SearchBar onSubmit={handleSubmit} inputRef={inputRef} />
                {isLoading ? (
                    <>
                        <TodayContainer>
                            <SkeletonLoader width={'50%'} height={'25px'} />
                            <SkeletonLoader width={'30%'} height={'20px'} />
                            <SkeletonLoader width={'25%'} height={'60px'} />
                            <SkeletonLoader width={'30%'} height={'55px'} />
                            <SkeletonLoader width={'50%'} height={'30px'} />
                        </TodayContainer>
                        <TodayOthersInfoContainer>
                            <SkeletonLoader width={'30%'} height={'50px'} />
                            <SkeletonLoader width={'30%'} height={'50px'} />
                            <SkeletonLoader width={'30%'} height={'50px'} />
                        </TodayOthersInfoContainer>
                        <TomorrowContainer>
                            <SkeletonLoader width={'50%'} height={'25px'} />
                            <SkeletonLoader width={'35%'} height={'25px'} />
                        </TomorrowContainer>
                        <AfterTomorrowContainer>
                            <SkeletonLoader width={'50%'} height={'25px'} />
                            <SkeletonLoader width={'35%'} height={'25px'} />
                        </AfterTomorrowContainer>
                    </>
                ) : (
                    <>
                        {!isError ? (
                            <>
                                <TodayContainer>
                                    <TodayInfo>
                                        <span>{todayData?.name}</span>
                                        <p>Hoje</p>
                                        <img
                                            src={weatherIcons(
                                                todayData?.weather[0]
                                                    .icon as any,
                                            )}
                                            alt={
                                                todayData?.weather[0]
                                                    .description
                                            }
                                        />
                                        <div
                                            onClick={() =>
                                                setIsCelsius(!isCelsius)
                                            }
                                        >
                                            {isCelsius ? (
                                                <h1 title="Clique para converter para Fahrenheit">
                                                    {todayData?.main.temp &&
                                                        Math.round(
                                                            todayData?.main
                                                                .temp,
                                                        )}
                                                    °C
                                                </h1>
                                            ) : (
                                                <h1 title="Clique para converter para Celsius">
                                                    {todayData?.main.temp &&
                                                        celsiusForFahrenheit(
                                                            Math.round(
                                                                todayData?.main
                                                                    .temp,
                                                            ),
                                                        )}
                                                    °F
                                                </h1>
                                            )}
                                        </div>
                                        <span>
                                            {todayData?.weather[0].description}
                                        </span>
                                    </TodayInfo>
                                    <TodayOthersInfoContainer>
                                        <WeatherDetails
                                            label="Vento"
                                            content={
                                                todayData?.wind.deg &&
                                                windDirection(
                                                    todayData?.wind.deg,
                                                )
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
                                              `${Math.round(
                                                  tomorrowData?.temp.day,
                                              )}°C`
                                            : tomorrowData?.temp.day &&
                                              `${celsiusForFahrenheit(
                                                  Math.round(
                                                      tomorrowData?.temp.day,
                                                  ),
                                              )}°F`
                                    }
                                />
                                <SecondarySectionWeather
                                    title="Depois de Amanhã"
                                    onClick={() => setIsCelsius(!isCelsius)}
                                    iconSource={weatherIcons(
                                        afterTomorrowData?.weather[0]
                                            .icon as any,
                                    )}
                                    alt={
                                        afterTomorrowData?.weather[0]
                                            .description
                                    }
                                    value={
                                        isCelsius
                                            ? afterTomorrowData?.temp.day &&
                                              `${Math.round(
                                                  afterTomorrowData?.temp.day,
                                              )}°C`
                                            : afterTomorrowData?.temp.day &&
                                              `${celsiusForFahrenheit(
                                                  Math.round(
                                                      afterTomorrowData?.temp
                                                          .day,
                                                  ),
                                              )}°F`
                                    }
                                />{' '}
                            </>
                        ) : (
                            <>
                                <ErrorMessageContainer>
                                    <span>{messageError}</span>
                                </ErrorMessageContainer>
                            </>
                        )}
                    </>
                )}
            </BoxContent>
        </Background>
    );
};

export default WeatherForecast;
