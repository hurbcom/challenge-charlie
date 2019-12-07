import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import api from '../../services/api';

import {
    GlobalStyles,
    Container,
    InputWrapper,
    WeatherDiv,
    Image,
    Content,
} from './styles';

import { ReactComponent as Compass } from '../../assets/icons/44.svg';

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [background, setBackground] = useState('');
    const [unit, setUnit] = useState('metric');
    const [location, setLocation] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [weather, setWeather] = useState(undefined);

    useEffect(() => {
        async function getBackground() {
            const { data } = await api.get('/wallpaper');
            setBackground(data);
        }

        async function getUserLocation() {
            const geo = navigator.geolocation;
            await geo.getCurrentPosition(async position => {
                const { latitude, longitude } = position.coords;
                const { data } = await api.get('/geo-location', {
                    params: { latitude, longitude },
                });
                setLocation(`${data.state}, ${data.country}`);
                setInputValue(`${data.state}, ${data.country}`);
            });
        }
        setLoading(true);
        getBackground();
        getUserLocation();
        setLoading(false);
    }, []);

    useEffect(() => {
        async function getWeather() {
            const { data } = await api.get('/weather', {
                params: { location, unit },
            });
            setWeather(data);
        }
        setLoading(true);
        getWeather();
        setLoading(false);
    }, [location, unit]);

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleInputBlur(e) {
        setLocation(e.target.value);
    }

    function handleUnit() {
        return unit === 'metric' ? setUnit('imperial') : setUnit('metric');
    }

    return (
        <>
            <GlobalStyles background={background} />
            <Container>
                <InputWrapper>
                    {inputValue ? (
                        <Compass />
                    ) : (
                        <Loader type="Puff" color="#8c8885" />
                    )}
                    <input
                        type="text"
                        placeholder="Where are you?"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </InputWrapper>
                {inputValue && weather && !loading ? (
                    <>
                        <WeatherDiv onClick={handleUnit}>
                            <Image />
                            <Content>
                                <p>Hoje</p>
                                <p>{weather[0].temp}</p>
                                <p className="description">
                                    {weather[0].description}
                                </p>
                                <p>
                                    Vento: {weather[0].windDirection}{' '}
                                    {weather[0].windSpeed}
                                </p>
                                <p>Humidade: {weather[0].humidity}</p>
                                <p>Pressão: {weather[0].pressure}</p>
                            </Content>
                        </WeatherDiv>
                        <WeatherDiv onClick={handleUnit}>
                            <Content>
                                <p>Amanhã</p>
                                <p>{weather[0].temp}</p>
                            </Content>
                        </WeatherDiv>
                        <WeatherDiv onClick={handleUnit}>
                            <Content>
                                <p>Depois de amanhã</p>
                                <p>{weather[0].temp}</p>
                            </Content>
                        </WeatherDiv>
                    </>
                ) : (
                    <>
                        <WeatherDiv>
                            <Loader type="ThreeDots" color="#8c8885" />
                        </WeatherDiv>
                        <WeatherDiv>
                            <Loader type="ThreeDots" color="#8c8885" />
                        </WeatherDiv>
                        <WeatherDiv>
                            <Loader type="ThreeDots" color="#8c8885" />
                        </WeatherDiv>
                    </>
                )}
            </Container>
        </>
    );
}
