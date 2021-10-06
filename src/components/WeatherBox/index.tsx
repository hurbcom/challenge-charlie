import React, { useState, useEffect, useCallback } from 'react';
import CityInput from 'components/CityInput';
import WeatherStatus from 'components/WeatherStatus';

import GeoLocationService from 'services/GeoLocationService';
import CacheService from 'services/CacheService';
import * as S from './styles';

export type locationProps = {
    lat: number;
    lng: number;
    city: string;
    state: string;
    stateCode: string;
    country: string;
};

const WeatherBox = () => {
    const [currentLocation, setCurrentLocation] = useState<locationProps>({
        lat: 0,
        lng: 0,
        city: '',
        state: '',
        stateCode: '',
        country: ''
    });

    const handleSuccess = useCallback(
        async (pos: { coords: { latitude: number; longitude: number } }) => {
            try {
                const { coords } = pos;
                const locationInfos =
                    await GeoLocationService.getUserCityByLocation(
                        coords.latitude,
                        coords.longitude
                    );
                if (locationInfos) {
                    const location = {
                        lat: coords.latitude,
                        lng: coords.longitude,
                        city: locationInfos?.city,
                        state: locationInfos?.state,
                        stateCode: locationInfos?.state_code,
                        country: locationInfos?.country
                    };
                    CacheService.setCookie(
                        GeoLocationService.cacheLocationKey,
                        JSON.stringify(location),
                        5
                    );
                    setCurrentLocation(location);
                }
            } catch (error) {
                console.error(error);
            }
        },
        []
    );

    const handleError = useCallback(
        (err: { code: number; message: string }) => {
            // colocando como default as coordenadas default caso
            // usuário se recuse forcencer a localização
            if (err.code === 1) {
                handleSuccess({
                    coords: {
                        latitude: -22.91430764816798,
                        longitude: -47.058726209516394
                    }
                });
            } else {
                console.warn(
                    'ocorreu um erro ao solicitar a localização do usuário'
                );
                // tratamento de erro default
            }
        },
        [handleSuccess]
    );

    const handlePosition = useCallback(() => {
        const localLocation = CacheService.getCookie(
            GeoLocationService.cacheLocationKey
        );
        if (localLocation.length <= 0) {
            GeoLocationService.getUserLocation(handleSuccess, handleError);
        } else {
            setCurrentLocation(JSON.parse(localLocation));
        }
    }, [handleError, handleSuccess]);

    const handleChangeCity = useCallback((newLocation: locationProps) => {
        CacheService.setCookie(
            GeoLocationService.cacheLocationKey,
            JSON.stringify(newLocation),
            5
        );
        setCurrentLocation({ ...newLocation });
    }, []);

    useEffect(() => {
        handlePosition();
    }, []);

    return (
        <S.BoxWrapper>
            <CityInput
                state={currentLocation?.state}
                city={currentLocation?.city}
                onChangeCity={handleChangeCity}
            />
            <WeatherStatus />
        </S.BoxWrapper>
    );
};

export default WeatherBox;
