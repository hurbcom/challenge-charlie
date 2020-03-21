import React from 'react';

import { Container } from './styles';

import Locationinput from '../../components/LocationInput';
import WeatherDetails from '../../components/WeatherDetails';
import WeatherMinDetails from '../../components/WeatherMinDetails';

export default function Dashboard() {
    return (
        <Container>
            <Locationinput />
            <WeatherDetails />
            <WeatherMinDetails />
        </Container>
    );
}
