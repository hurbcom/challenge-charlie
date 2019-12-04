import React, { useState, useEffect } from 'react';
import { Roller } from 'react-awesome-spinners';
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
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
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
