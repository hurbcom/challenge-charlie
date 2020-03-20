import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';
import RadarIconInput from '../../assets/meteocons-icons/SVG/44.svg';
import openGateApi from '../../services/openGateApi';

export default function AvatarInput() {
    const [, setUserCoords] = useState({
        region: { latitude: null, longitude: null }
    });
    const [locationData, setLocationData] = useState({
        location: { city: null, longitude: null }
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setUserCoords({
                    region: { latitude, longitude }
                });
                setLoading(true);
                async function getCoordsData() {
                    const response = await openGateApi.get('/json', {
                        params: {
                            q: `${latitude} ${longitude}`,
                            key: 'c63386b4f77e46de817bdf94f552cddf'
                        }
                    });
                    setLocationData({
                        location: {
                            city: response.data.results[0].components.city,
                            state: response.data.results[0].components.state
                        }
                    });
                }

                if (loading) getCoordsData();
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
    }, [loading]);

    console.tron.log(locationData);
    return (
        <Container background="#7159c1">
            <img src={RadarIconInput} alt="Radar" />
            <input
                placeholder={
                    locationData.location.city
                        ? `
            ${locationData.location.city}, ${locationData.location.state}
            `
                        : 'Não foi possivel achar sua localização'
                }
            />
        </Container>
    );
}
