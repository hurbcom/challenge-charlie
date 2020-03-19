import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container } from './styles';

export default function Dashboard() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setLocation({ latitude, longitude });
            },
            () => {
                toast.error('Você precisa autorizar a localização no brownser');
            },
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        );
    }, []);

    async function getCoordsData() {
        const { latitude, longitude } = location;
        const response = await api.get('/json', {
            params: {
                q: (latitude, longitude),
                key: 'c63386b4f77e46de817bdf94f552cddf'
            }
        });

        console.tron.log(response.data);
    }

    if (location) {
        getCoordsData();
    }

    return (
        <Container>
            <ul>
                <li>Main</li>
            </ul>
        </Container>
    );
}
