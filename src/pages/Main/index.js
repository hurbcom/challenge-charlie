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
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState('metric');
    const [location, setLocation] = useState('');
    const [browserLocation, setBrowserLocation] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude},${coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
            );
            setLocation(response.data.results[0].formatted);
            setBrowserLocation(response.data.results[0]);
        });
    }, []);

    function handleInputChange(e) {
        setLocation(e.target.value);
    }

    function handleUnit() {
        if (unit === 'metric') {
            setUnit('imperial');
        } else {
            setUnit('metric');
        }
    }

    async function handleLocationSearch() {
        setLoading(true);
        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/
            weather?q=${browserLocation.components.state},${browserLocation.components.country}
            &APPID=7ba73e0eb8efe773ed08bfd0627f07b8
            &units=${unit}`
        );
        console.log(response);
        setLoading(false);
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
            <TodayWeather onClick={handleUnit}>Hoje</TodayWeather>
            <TomorowWeather onClick={handleUnit}>Amanhã</TomorowWeather>
            <AfterTomorowWeather onClick={handleUnit}>
                Depois de amanhã
            </AfterTomorowWeather>
        </Container>
    );
}
