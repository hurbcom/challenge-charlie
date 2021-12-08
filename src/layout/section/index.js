import React from 'react';
import { Input, Weather } from '../../components';
import useContainer from './Container';
import { Container, Card } from './Stylesheet';

export default function Section() {

    const { geolocation, setGeolocation } = useContainer();

    return (
        <Container>
            <Card>
                <Input setGeolocation={setGeolocation} />
                <Weather city={geolocation?.city} />
            </Card>
        </Container>
    )
};