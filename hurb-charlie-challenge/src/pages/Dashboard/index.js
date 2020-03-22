import React from 'react';

import { Container } from './styles';

import Locationinput from '../../components/LocationInput';
import WeatherDetails from '../../components/WeatherDetails';
import WeatherMinDetails from '../../components/WeatherMinDetails';
import bingApi from '../../services/bingApi';

async function getBackground() {
    const response = await bingApi.get('/');
    console.tron.log(response);
}

getBackground();

export default function Dashboard() {
    return (
        <Container>
            <Locationinput />
            <WeatherDetails />
            <WeatherMinDetails />
        </Container>
    );
}
