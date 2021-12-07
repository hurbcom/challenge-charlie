import React from 'react';
import { Input, Weather } from '../../components';
import useContainer from './Container';
import { Container, Card } from './Stylesheet';

export default function Section() {

    const { geolocation, setGeolocation } = useContainer();

    return (
        <Container>
            <Card>
                {geolocation && geolocation.city}
                <Input setGeolocation={setGeolocation} />
                <Weather />
            </Card>
        </Container>
    )
};