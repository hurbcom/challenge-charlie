import React, { useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import locationService from '../../services/locationService';
import { update } from '../../store/slices/locationSlice';

function LocationInput() {
    const location = useSelector((state) => state.location.value);
    const dispatch = useDispatch();

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            locationService.fetchLocation(position.coords.latitude, position.coords.longitude)
                .then((locationString) => {
                    dispatch(update(locationString));
                })
                // TODO: error treatment
                .catch((error) => console.log(error));
        }, (error) => {
            // TODO: error treatment
            console.log(error);
        });
    }

    useEffect(getCurrentPosition, []);

    function onInputChange(event) {
        dispatch(update(event.target.value));
    }

    return (
        <div id="location-input">
            <input name="search" placeholder="Search for a city..." value={location} onChange={onInputChange} />
            <button type="button">
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>
            <hr />
            <button type="button">
                <span className="material-symbols-outlined">
                    my_location
                </span>
            </button>
        </div>
    );
}

export default LocationInput;
