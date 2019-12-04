import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Main() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    return (
        <Container>
            <span>{latitude}</span>
            <span>{longitude}</span>
        </Container>
    );
}
