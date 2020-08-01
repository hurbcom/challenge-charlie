import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMap } from 'react-icons/fi';

// import bingAPI from '../../services/bingAPI';

import InitializeIDayProps from './utils/InitializeIDayProps';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Header,
    Content,
    Location,
    Days,
    Today,
    Tomorrow,
    AfterTomorrow,
    Weather,
} from './styles';

interface IDayProps {
    temp: {
        day: number;
    },
    weather: [
        {
            description: string;
            icon: string;
        }
    ],
    pressure: number;
    humidity: number;
    speed: number;
}

interface IListDaysProps {
    list: [
        IDayProps,
        IDayProps,
        IDayProps
    ]
}

interface SearchFormData {
    state: string;
    city: string;
}

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    // const [image, setImage] = useState<string>('');
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [today, setToday] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [tomorrow, setTomorrow] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [afterTomorrow, setAfterTomorrow] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [icon, setIcon] = useState<string>('icon-');
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);
    const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);
    const [tempUnity, setTempUnity] = useState<string>('°C');

    // To serve as a reference to css
    const [tempCelsiusToday, setTempCelsiusToday] = useState<number>(0);
    const [tempCelsiusTomorrow, setTempCelsiusTomorrow] = useState<number>(0);
    const [
        tempCelsiusAfterTomorrow,
        setTempCelsiusAfterTomorrow
    ] = useState<number>(0);

    const key = 'c63386b4f77e46de817bdf94f552cddf';
    const appid = '08dbab0eeefe53317d2e0ad7c2a2e060';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;

            if(lat && lon) {
                setLongitude(lon);
                setLatitude(lat);
            }
        });

        const geoAPI = axios.create({
            baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}&language=pt_br`,
        });

        async function loadLocation(): Promise<void> {
            await geoAPI.get('/').then(response => {
                const state = response.data.results[0].components.state;
                const city = response.data.results[0].components.city;

                if(state && city) {
                    setState(state);
                    setCity(city);
                }
            });
        }
        loadLocation();
    }, [latitude, longitude]);

    useEffect(() => {
        // Treat the city by removing spaces
        const formattedCity = city.replace(/\s/g, '+').trim();

        const weatherAPI = axios.create({
            baseURL: `http://api.openweathermap.org/data/2.5/`,
        });

        async function loadWeather(): Promise<void> {
            await weatherAPI
                .get<IListDaysProps>(
                    `/forecast/daily?q=${formattedCity}&APPID=${appid}&cnt=3&units=metric&lang=pt_br`
                )
                .then(response => {
                    const today = response.data.list[0];
                    setToday(today);
                    setTempCelsiusToday(today.temp.day);

                    // If a city search is made
                    if(isSearch) {
                        // Treat the icon by removing the previous value
                        const formattedIcon = icon.substring(0, 5); // icon-
                        setIcon(formattedIcon);

                        setIsSearch(false);
                    }

                    // Join 'icon-' with icon that comes from the api response
                    setIcon(icon => icon.concat(today.weather[0].icon));

                    setTomorrow(response.data.list[1]);
                    setTempCelsiusTomorrow(response.data.list[1].temp.day);

                    setAfterTomorrow(response.data.list[2]);
                    setTempCelsiusAfterTomorrow(
                        response.data.list[2].temp.day
                    );
                });
        }

        if(formattedCity) {
            loadWeather();
        }
    }, [city]);

    const handleSubmitCity = useCallback((data: SearchFormData) => {
        setIsSearch(true);

        const { state, city } = data;

        setState(state);
        setCity(city);
    }, []);

    const handleClickTemp = useCallback(() => {
        // Conversions
        if(isCelsius) {
            const celsiusToday = today.temp.day;
            today.temp.day = (Math.round(((celsiusToday * 9/5) + 32) * 100) / 100);

            const celsiusTomorrow = tomorrow.temp.day;
            tomorrow.temp.day = (Math.round(((celsiusTomorrow * 9/5) + 32) * 100) / 100);

            const celsiusAfterTomorrow = afterTomorrow.temp.day;
            afterTomorrow.temp.day = (Math.round(((celsiusAfterTomorrow * 9/5) + 32) * 100) / 100);

            setTempUnity('°F');
        } else {
            const fahrenheitToday = today.temp.day;
            today.temp.day = (Math.round((fahrenheitToday - 32) * 5/9 * 100) / 100);

            const fahrenheitTomorrow = tomorrow.temp.day;
            tomorrow.temp.day = (Math.round((fahrenheitTomorrow - 32) * 5/9 * 100) / 100);

            const fahrenheitAfterTomorrow = afterTomorrow.temp.day;
            afterTomorrow.temp.day = (Math.round((fahrenheitAfterTomorrow - 32) * 5/9 * 100) / 100);

            setTempUnity('°C');
        }

        setIsCelsius(!isCelsius);
        setIsFahrenheit(!isFahrenheit);
    }, [
        today.temp.day,
        tomorrow.temp.day,
        afterTomorrow.temp.day,
        isCelsius,
        isFahrenheit
    ]);

    return (
        <Container>
            <Header>
                <main>
                    <img
                        src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg"
                        alt="HU"
                        width="50"
                    />

                    <Form ref={formRef} onSubmit={handleSubmitCity}>
                        <Input
                            name="state"
                            icon={FiMap}
                            type="text"
                            placeholder="Estado"
                        />

                        <Input
                            name="city"
                            icon={FiMap}
                            type="text"
                            placeholder="Cidade"
                        />

                        <Button type="submit" loading={isSearch}>
                            Buscar
                        </Button>
                    </Form>
                </main>
            </Header>

            <Content>
                <Location>
                    <i className="icon-compass"></i>

                    <p>{state},</p>
                    <p>{city}</p>
                </Location>

                <Days>
                    <Today
                        celsius={tempCelsiusToday}
                        city={city}
                    >
                        <i className={icon}></i>

                        <Weather>
                            <time>Hoje</time>
                            <span onClick={handleClickTemp}>
                                {today.temp.day} {tempUnity}
                            </span>

                            <p>{today.weather[0].description}</p>

                            <div>
                                <p>Vento: {today.speed} km/h</p>
                                <p>Humidade: {today.humidity}%</p>
                                <p>Pressão: {today.pressure}hPA</p>
                            </div>
                        </Weather>
                    </Today>

                    <Tomorrow
                        celsius={tempCelsiusTomorrow}
                        city={city}
                    >
                        <Weather>
                            <time>Amanhã</time>
                            <span onClick={handleClickTemp}>
                                {tomorrow.temp.day} {tempUnity}
                            </span>
                        </Weather>
                    </Tomorrow>

                    <AfterTomorrow
                        celsius={tempCelsiusAfterTomorrow}
                        city={city}
                    >
                        <Weather>
                            <time>Depois de Amanhã</time>
                            <span onClick={handleClickTemp}>
                                {afterTomorrow.temp.day} {tempUnity}
                            </span>
                        </Weather>
                    </AfterTomorrow>
                </Days>
            </Content>
        </Container>
    );
};

export default Dashboard;