import React from 'react';
import { Weather } from '../../components';
import useContainer from './Container';
import { Container, Card } from './Stylesheet';

export default function Section() {

    const { geolocation } = useContainer();

    return (
        <Container>
            <Card>
                <Weather city={geolocation?.city} />
            </Card>
        </Container>
    )
};