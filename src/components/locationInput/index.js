import React, { useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import locationService from '../../services/locationService';
import weatherService from '../../services/weatherService';
import { update as updateLocation } from '../../store/slices/locationSlice';
import { update as updateWeather } from '../../store/slices/weatherSlice';

function LocationInput() {
    const location = useSelector((state) => state.location.value);
    const dispatch = useDispatch();

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            locationService.fetchLocation(position.coords.latitude, position.coords.longitude)
                .then((locationString) => {
                    dispatch(updateLocation(locationString));
                })
                // TODO: error treatment
                .catch((error) => console.log(error));
        }, (error) => {
            // TODO: error treatment
            console.log(error);
        });
    }

    useEffect(getCurrentPosition, []);

    function handleInput(event) {
        dispatch(updateLocation(event.target.value));
    }

    function handleClickSearch() {
        weatherService.fetchWeather(location)
            .then((result) => locationService
                .fetchLocation(result.coord.lat, result.coord.lon)
                .then((locationString) => {
                    dispatch(updateLocation(locationString));
                    dispatch(updateWeather(result));
                }));
    }

    function handleClickLocation() {
        getCurrentPosition();
    }

    return (
        <div id="location-input">
            <input name="search" placeholder="Search for a city..." value={location} onChange={handleInput} />
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
