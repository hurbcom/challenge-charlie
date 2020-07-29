import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// import bingAPI from '../../services/bingAPI';

import {
    Container,
    Content,
    Location,
    Days,
    Today,
    Tomorrow,
    AfterTomorrow,
    Weather,
} from './styles';

const Dashboard: React.FC = () => {
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');

    const key = 'c63386b4f77e46de817bdf94f552cddf';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setLatitude(lat);
            setLongitude(lon);
        });
    }, [latitude, longitude]);

    useEffect(() => {
        const geoAPI = axios.create({
            baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}&language=en`,
        });

        async function loadLocation(): Promise<void> {
            await geoAPI.get('/results').then(response => {
                const state = response.data.results[0].components.state;
                const city = response.data.results[0].components.city;

                setState(state);
                setCity(city);
            });
        }
        loadLocation();
    }, [latitude, longitude, state, city]);

    return (
        <Container>
            <Content>
                <Location>
                    <i className="icon-compass"></i>

                    <p>{state},</p>
                    <p>{city}</p>
                </Location>

                <Days>
                    <Today celcius={22}>
                        <i className="icon-sun"></i>

                        <Weather>
                            <time>Hoje</time>
                            <span>22 C</span>

                            <p>Ensolarado</p>

                            <div>
                                <p>Vento:</p>
                                <p>Humidade:</p>
                                <p>Pressão:</p>
                            </div>
                        </Weather>
                    </Today>

                    <Tomorrow celcius={22}>
                        <Weather>
                            <time>Amanhã</time>
                            <span>22 C</span>
                        </Weather>
                    </Tomorrow>

                    <AfterTomorrow celcius={22}>
                        <Weather>
                            <time>Depois de Amanhã</time>
                            <span>22 C</span>
                        </Weather>
                    </AfterTomorrow>
                </Days>
            </Content>
        </Container>
    );
};

export default Dashboard;