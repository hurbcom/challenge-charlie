import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import openGateApi from '../../services/openGateApi';
import { Container } from './styles';

export default function Dashboard() {
    const [userCoords, setUserCoords] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setUserCoords({
                    region: { latitude, longitude },
                    location: {
                        country: null,
                        state: null,
                        city: null,
                        formattedAddress: null
                    }
                });
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
        const { latitude, longitude } = userCoords.region;
        const response = await openGateApi.get('/json', {
            params: {
                q: `${latitude} ${longitude}`,
                key: 'c63386b4f77e46de817bdf94f552cddf'
            }
        });
        userCoords.location.country =
            response.data.results[0].components.country;
        userCoords.location.city = response.data.results[0].components.city;
        userCoords.location.state = response.data.results[0].components.state;
        userCoords.location.formattedAddress =
            response.data.results[0].components.formatted;
    }
    if (userCoords) {
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
