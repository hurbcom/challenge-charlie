/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from './styles';
import RadarIconInput from '../../assets/meteocons-icons/SVG/44.svg';
import * as LocationActions from '../../store/modules/location/actions';

export default function AvatarInput() {
    const [userCoords, setUserCoords] = useState({
        region: { latitude: null, longitude: null }
    });
    const [loadingCoords, setLoadingCoords] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setUserCoords({
                    region: { latitude, longitude }
                });
                setLoadingCoords(true);
                if (loadingCoords) {
                    dispatch(
                        LocationActions.LocationDataRequest(userCoords.region)
                    );
                }
            },
            () => {
                toast.error(
                    'Não foi possivel detectar sua localização, verifique sua KEY ou a permissão do browser'
                );
            },
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        );
    }, [dispatch, loadingCoords]);

    return (
        <Container>
            <img src={RadarIconInput} alt="Radar" />
            <input placeholder="Não foi possivel achar sua localização" />
        </Container>
    );
}
