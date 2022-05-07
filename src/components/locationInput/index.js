import React, { useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import locationService from '../../services/locationService';
import weatherService from '../../services/weatherService';
import { update as updateLocation } from '../../store/slices/locationSlice';
import { update as updateWeather, reset as resetWeather } from '../../store/slices/weatherSlice';
import { update as updateLoading } from '../../store/slices/loadingSlice';

function LocationInput() {
    const location = useSelector((state) => state.location.value);
    const dispatch = useDispatch();

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
                    // TODO: error treatment
                    dispatch(updateLoading(false));
                });
        }, (error) => {
            // TODO: error treatment
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
            <input name="search" placeholder="Digite para buscar uma cidade..." value={location} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />
            <button type="button" onClick={handleClickSearch}>
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>
            <hr />
            <button type="button" onClick={handleClickLocation}>
                <span className="material-symbols-outlined">
                    my_location
                </span>
            </button>
        </div>
    );
}

export default LocationInput;
