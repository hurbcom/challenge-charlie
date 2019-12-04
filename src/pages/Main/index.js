import React, { useState, useEffect } from 'react';
import { Roller } from 'react-awesome-spinners';
import axios from 'axios';
import {
    Container,
    InputWrapper,
    TodayWeather,
    TomorowWeather,
    AfterTomorowWeather,
} from './styles';

import { ReactComponent as Compass } from '../../assets/icons/44.svg';

export default function Main() {
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude},${coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
            );
            setLocation(response.data.results[0].formatted);
        });
    }, []);

    function handleInputChange(e) {
        setLocation(e.target.value);
    }

    function handleLocationSearch() {
        setLoading(true);
    }

    return (
        <Container>
            <InputWrapper>
                {loading ? <Roller color="#8c8885" /> : <Compass />}

                <input
                    type="text"
                    placeholder="Where are you?"
                    value={location}
                    onChange={handleInputChange}
                    onBlur={handleLocationSearch}
                />
            </InputWrapper>
            <TodayWeather>Hoje</TodayWeather>
            <TomorowWeather>Amanhã</TomorowWeather>
            <AfterTomorowWeather>Depois de amanhã</AfterTomorowWeather>
        </Container>
    );
}
