import React, { useEffect, useState } from 'react';

import sun from '../../assets/clear_sky.png';
import Background from '../../components/Background';
import type {
    CurrentWeatherData,
    DailyForecast,
} from '../../interfaces/WeatherForecast';
import {
    getCurrentWeatherForecast,
    getNextWeatherForecast,
} from '../../services/WeatherForecastService';
import { weatherIcons } from '../../utils/weatherIcons';
import {
    BoxContent,
    SearchContainer,
    TodayContainer,
    AfterTomorrowInfo,
    TomorrowInfo,
    TodayOthersInfoContainer,
    TodayOthersInfo,
    TodayInfo,
} from './styles';

const WeatherForecast: React.FC = () => {
    const [todayData, setTodayData] = useState<
        CurrentWeatherData | undefined
    >();
    const [tomorrowData, setTomorrowData] = useState<
        DailyForecast | undefined
    >();
    const [afterTomorrowData, setAfterTomorrowData] = useState<
        DailyForecast | undefined
    >();

    useEffect(() => {
        getCurrentWeatherForecast().then(currentWeather =>
            setTodayData(currentWeather),
        );
        getNextWeatherForecast().then(nextWeather => {
            if (nextWeather && nextWeather.daily.length >= 3) {
                const [_, tomorrow, afterTomorrow] = nextWeather.daily;
                setTomorrowData(tomorrow);
                setAfterTomorrowData(afterTomorrow);
            }
        });
    }, []);
    return (
        <Background>
            <BoxContent>
                <SearchContainer>Input</SearchContainer>
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
                        <h1>{todayData?.main.temp}º</h1>
                        <span>{todayData?.weather[0].description}</span>
                    </TodayInfo>
                    <TodayOthersInfoContainer>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Vento</b>
                                <p>{todayData?.wind.speed} km/h</p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Pressão</b>
                                <p>{todayData?.main.pressure} %</p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Humidade</b>
                                <p>{todayData?.main.humidity}</p>
                            </div>
                        </TodayOthersInfo>
                    </TodayOthersInfoContainer>
                </TodayContainer>
                <TomorrowInfo>
                    <h3>Amanhã</h3>
                    <div>
                        <span>{tomorrowData?.temp.day}</span>
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
                    <div>
                        <span>{afterTomorrowData?.temp.day}</span>
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
