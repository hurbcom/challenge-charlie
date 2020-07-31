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
    city: string;
}

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    // const [loading, setLoading] = useState<boolean>(false);
    // const [image, setImage] = useState<string>('');
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
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

    const key = 'c63386b4f77e46de817bdf94f552cddf';
    const appid = '08dbab0eeefe53317d2e0ad7c2a2e060';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            if(lat && lon) {
                setLatitude(lat);
                setLongitude(lon);
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

                    setIcon(icon => icon.concat(today.weather[0].icon));

                    setTomorrow(response.data.list[1]);

                    setAfterTomorrow(response.data.list[2]);
                });
        }

        if(formattedCity) {
            loadWeather();
        }
    }, [city]);

    const handleSubmitCity = useCallback((data: SearchFormData) => {
        console.log(data.city);
    }, []);

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
                            name="city"
                            icon={FiMap}
                            type="text"
                            placeholder="Cidade"
                        />

                        <Button type="submit">
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
                    <Today celsius={today.temp.day} city={city}>
                        <i className={icon}></i>

                        <Weather>
                            <time>Hoje</time>
                            <span>{today.temp.day} °C</span>

                            <p>{today.weather[0].description}</p>

                            <div>
                                <p>Vento: {today.speed} km/h</p>
                                <p>Humidade: {today.humidity}%</p>
                                <p>Pressão: {today.pressure}hPA</p>
                            </div>
                        </Weather>
                    </Today>

                    <Tomorrow celsius={tomorrow.temp.day} city={city}>
                        <Weather>
                            <time>Amanhã</time>
                            <span>{tomorrow.temp.day} °C</span>
                        </Weather>
                    </Tomorrow>

                    <AfterTomorrow celsius={afterTomorrow.temp.day} city={city}>
                        <Weather>
                            <time>Depois de Amanhã</time>
                            <span>{afterTomorrow.temp.day} °C</span>
                        </Weather>
                    </AfterTomorrow>
                </Days>
            </Content>
        </Container>
    );
};

export default Dashboard;