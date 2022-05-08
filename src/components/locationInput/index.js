import React, { useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import locationService from '../../services/locationService';
import weatherService from '../../services/weatherService';
import { update as updateLocation } from '../../store/slices/locationSlice';
import { update as updateWeather, reset as resetWeather } from '../../store/slices/weatherSlice';
import { update as updateLoading } from '../../store/slices/loadingSlice';
import { update as updateNotification } from '../../store/slices/notificationSlice';

function LocationInput() {
    const location = useSelector((state) => state.location.value);
    const dispatch = useDispatch();

    function handleError(error) {
        if (error?.cod === '400') return;
        if (error?.cod === '404') {
            dispatch(updateNotification('Cidade não encontrada.'));
        } else if (error?.code === 1) {
            dispatch(updateNotification('Geolocalização não está ativada.'));
        } else {
            dispatch(updateNotification('Something went wrong. Please try again later.'));
        }
    }
    function getCurrentPosition() {
        dispatch(updateLoading(true));
        dispatch(resetWeather());
        navigator.geolocation.getCurrentPosition((position) => {
            locationService.fetchLocation(position.coords.latitude, position.coords.longitude)
                .then((locationString) => {
                    dispatch(updateLocation(locationString));
                    return weatherService.fetchWeather(locationString);
                })
                .then((result) => {
                    dispatch(updateWeather(result));
                    dispatch(updateLoading(false));
                })
                .catch((error) => {
                    handleError(error);
                    dispatch(updateLoading(false));
                });
        }, (error) => {
            handleError(error);
            dispatch(updateLoading(false));
        });
    }

    useEffect(getCurrentPosition, []);

    function handleUpdateWeather(searchLocation) {
        dispatch(updateLoading(true));
        dispatch(resetWeather());
        weatherService.fetchWeather(searchLocation)
            .then((result) => {
                dispatch(updateWeather(result));
                return locationService.fetchLocation(result.coord.lat, result.coord.lon);
            })
            .then((locationString) => {
                dispatch(updateLocation(locationString));
                dispatch(updateLoading(false));
            })
            .catch((error) => {
                // TODO: error treatment
                handleError(error);
                dispatch(updateLoading(false));
            });
    }

    function handleInputChange(event) {
        dispatch(updateLocation(event.target.value));
    }
    function handleInputKeyUp(event) {
        if (event.key === 'Enter') {
            handleUpdateWeather(event.target.value);
        }
    }

    function handleClickSearch() {
        handleUpdateWeather(location);
    }

    function handleClickLocation() {
        getCurrentPosition();
    }

    return (
        <div id="location-input">
            <input
              title="Digite para buscar uma cidade"
              name="search"
              placeholder="Digite para buscar uma cidade"
              value={location}
              onChange={handleInputChange}
              onKeyUp={handleInputKeyUp}
            />
            <button
              title="Buscar"
              type="button"
              onClick={handleClickSearch}
            >
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>
            <hr />
            <button
              title="Minha localização"
              type="button"
              onClick={handleClickLocation}
            >
                <span className="material-symbols-outlined">
                    my_location
                </span>
            </button>
        </div>
    );
}

export default LocationInput;
