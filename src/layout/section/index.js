import React from 'react';
import { Search, Weather } from '../../components';
import useContainer from './Container';
import { Container, Card } from './Stylesheet';

export default function Section() {

    const { geolocation } = useContainer();

    return (
        <Container>
            <Card>
                <Search />
                <Weather city={geolocation?.city} />
            </Card>
        </Container>
    )
};