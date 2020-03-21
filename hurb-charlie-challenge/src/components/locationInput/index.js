/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const { locationData } = useSelector(state => state.location.data);
    const [teste, setTeste] = useState();

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

    function handleChangeLocation(e) {
        setTeste(e);
        console.tron.log(teste);
    }

    return (
        <Container>
            <img src={RadarIconInput} alt="Radar" />
            <input
                placeholder={
                    locationData
                        ? `${locationData.results[0].components.city}, ${locationData.results[0].components.state}`
                        : 'Carregando...'
                }
                onChange={e => handleChangeLocation(e.target.value)}
            />
        </Container>
    );
}
