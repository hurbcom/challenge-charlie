import React, { useMemo, useState, useCallback } from 'react';
import { FiSun } from 'react-icons/fi';
import {
    BsCloudSnow,
    BsCloudRain,
    BsCloudLightningRain,
    BsCloudDrizzle,
    BsClouds,
    BsCloudFog2
} from 'react-icons/bs';
import { WiCloudyWindy } from 'react-icons/wi';
import { returnDailyWeather } from 'services/WeatherService';
import * as S from './styled';

type WeatherStatusProps = {
    dailyWeather: returnDailyWeather | null;
};

type TemperatureTypes = 'celsius' | 'fahrenheit';

const WeatherStatus = ({ dailyWeather }: WeatherStatusProps) => {
    const [temperatureMeasurement, setTemperatureMeasurement] =
        useState<TemperatureTypes>('celsius');

    // retorna o status do clima atual (nublado, chovendo...)
    const description = useMemo(() => {
        const weatherDescription = dailyWeather?.today.weather[0].description;
        if (!weatherDescription) return null;
        return (
            weatherDescription.charAt(0).toUpperCase() +
            weatherDescription.slice(1)
        );
    }, [dailyWeather?.today.weather]);

    // retorna velocidade do vento
    const wind = useMemo(() => {
        const directions = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO'];
        let deg = dailyWeather?.today.wind_deg;
        if (deg) {
            deg += 22.5;

            if (deg < 0) deg = 360 - (Math.abs(deg) % 360);
            else deg %= 360;
            const position = Math.floor(deg / 45);

            const windPosition = directions[position];
            return `${windPosition} ${dailyWeather?.today.wind_speed}Km/h`;
        }
        return '';
    }, [dailyWeather?.today.wind_deg, dailyWeather?.today.wind_speed]);

    // retorna temperatura no formato correto
    const celsiusToFahrenheit = useCallback(
        temperature => {
            if (!temperature) return '0ºC';
            if (temperatureMeasurement === 'celsius')
                return `${Math.floor(temperature)}ºC`;

            return `${Math.floor((temperature * 9) / 5 + 32)}ºF`;
        },
        [temperatureMeasurement]
    );

    // retorna o icone referente ao clima atual
    const weatherIcon = useMemo(() => {
        const icon = dailyWeather?.today.weather[0].main;
        const iconList = {
            Atmosphere: <WiCloudyWindy color="#fff" size="80%" />,
            Snow: <BsCloudSnow color="#fff" size="80%" />,
            Rain: <BsCloudRain color="#fff" size="80%" />,
            Thunderstorm: <BsCloudLightningRain color="#fff" size="80%" />,
            Drizzle: <BsCloudDrizzle color="#fff" size="80%" />,
            Clouds: <BsClouds color="#fff" size="80%" />,
            Clear: <FiSun color="#fff" size="80%" />,
            Fog: <BsCloudFog2 color="#fff" size="80%" />,
            Mist: <BsCloudFog2 color="#fff" size="80%" />
        };
        if (icon) return iconList[icon];
        return null;
    }, [dailyWeather?.today.weather]);

    // define a cor de fundo dependendo da temperatura atual
    const backgroundColor = useMemo(() => {
        if (!dailyWeather?.today.temp)
            return {
                one: '#606060',
                two: '#3D3D3D',
                three: '#262626'
            };

        if (dailyWeather?.today.temp < 15)
            return {
                one: '#6497b1',
                two: '#005b96',
                three: '#011f4b'
            };
        if (dailyWeather?.today.temp > 35)
            return {
                one: '#ff5252',
                two: '#ff0000',
                three: '#a70000'
            };

        return {
            one: '#EDB915',
            two: '#facc05',
            three: '#B79404'
        };
    }, [dailyWeather?.today.temp]);

    return (
        <S.WeatherHolder>
            <S.Grid>
                <S.IconWrapper
                    data-testid="weather-icon"
                    bgColor={backgroundColor.one}
                    opacity="85%"
                >
                    {weatherIcon}
                </S.IconWrapper>
                <S.statusWrapper
                    data-testid="today-weather"
                    bgColor={backgroundColor.one}
                >
                    <S.Text
                        fontSize="1.8rem"
                        padding="8px 0 3px 0"
                        breakpoints={{ mobile: { fontSize: '1.5rem' } }}
                    >
                        HOJE
                    </S.Text>
                    <S.Text
                        data-testid="temperature"
                        cursor="pointer"
                        fontSize="1.8rem"
                        fontFamily="'Open Sans'"
                        breakpoints={{ mobile: { fontSize: '1.5rem' } }}
                        onClick={() =>
                            setTemperatureMeasurement(temperatureType =>
                                temperatureType === 'celsius'
                                    ? 'fahrenheit'
                                    : 'celsius'
                            )
                        }
                    >
                        {celsiusToFahrenheit(dailyWeather?.today.temp)}
                    </S.Text>
                    <S.Text
                        fontSize="2rem"
                        padding="16px 0 10px 0"
                        breakpoints={{ mobile: { fontSize: '1.8rem' } }}
                    >
                        {description}
                    </S.Text>
                    <S.Text
                        data-testid="wind"
                        fontSize="1.4rem"
                        breakpoints={{ mobile: { fontSize: '1.2rem' } }}
                    >
                        Vento: {wind}
                    </S.Text>
                    <S.Text
                        data-testid="humidity"
                        fontSize="1.4rem"
                        breakpoints={{ mobile: { fontSize: '1.2rem' } }}
                    >
                        Humidade: {dailyWeather?.today.humidity}%
                    </S.Text>
                    <S.Text
                        data-testid="pressure"
                        fontSize="1.4rem"
                        breakpoints={{ mobile: { fontSize: '1.2rem' } }}
                    >
                        Pressão: {dailyWeather?.today.pressure}hPA
                    </S.Text>
                </S.statusWrapper>
                <S.IconWrapper bgColor={backgroundColor.two} opacity="93%" />
                <S.TomorrowWrapper
                    data-testid="tomorrow-weather"
                    bgColor={backgroundColor.two}
                >
                    <S.Text fontSize="1.5rem" padding="8px 0 3px 0">
                        AMANHÃ
                    </S.Text>
                    <S.Text fontSize="1.5rem" fontFamily="'Open Sans'">
                        {celsiusToFahrenheit(dailyWeather?.tomorrow.temp.day)}
                    </S.Text>
                </S.TomorrowWrapper>
                <S.IconWrapper bgColor={backgroundColor.three} />
                <S.AfterTomorrowWrapper
                    data-testid="aftertomorrow-weather"
                    bgColor={backgroundColor.three}
                >
                    <S.Text fontSize="1.5rem" padding="8px 0 3px 0">
                        DEPOIS DE AMANHÃ
                    </S.Text>
                    <S.Text fontSize="1.5rem" fontFamily="'Open Sans'">
                        {celsiusToFahrenheit(
                            dailyWeather?.afterTomorrow.temp.day
                        )}
                    </S.Text>
                </S.AfterTomorrowWrapper>
            </S.Grid>
        </S.WeatherHolder>
    );
};

export default WeatherStatus;
