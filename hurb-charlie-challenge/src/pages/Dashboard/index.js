import React from 'react';

import { Container } from './styles';

import Locationinput from '../../components/LocationInput';
import WeatherDetails from '../../components/WeatherDetails';

export default function Dashboard() {
    return (
        <Container>
            <Locationinput />
            <WeatherDetails />
        </Container>
    );
}
