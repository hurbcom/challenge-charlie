import { useState, useEffect } from 'react'
import axios from 'axios'

import { useStoreActions} from 'easy-peasy';
import { REACT_APP_LOCATION_URL, REACT_APP_OPEN_LOCATION_KEY, REACT_APP_OPEN_WHEATER_KEY, REACT_APP_WEATHER_URL } from '../../utils/variables';

import './InputLocation.scss'

function InputLocation() {
     const { setWeatherData, setLoading } = useStoreActions((actions) => actions);
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchLocation(position.coords.latitude, position.coords.longitude)
        })
    }, [])

    function fetchLocation(latitude, longitude) {
        console.log("fetchLocation ~ fetchLocation");
        setLoading(true);
        const params = {
            q: `${latitude},${longitude}`,
            key: REACT_APP_OPEN_LOCATION_KEY,
            language: 'pt',
        };

        console.log(`${latitude},${longitude}`);

        axios
        .get(`${REACT_APP_LOCATION_URL}/geocode/v1/json?${new URLSearchParams(params).toString()}`)
        .then(({data}) => {
            if(data.results && data.results[0]) {
                const { city, state_code: stateCode, country } = data.results[0].components;

                searchWeather(`${city},${stateCode},${country}`)
            } else {
                console.log("deu erro")
                throw new Error("no data")
            }
        })
        .catch((err) => {
            setLoading(false);
            console.warn(err)
        })
    }

    function searchWeather(location) {
        console.log("searchWeather ~ searchWeather");
        const params = {
            q: location,
            appid: REACT_APP_OPEN_WHEATER_KEY,
            lang: 'pt_br',
            units: 'metric',
        };

        axios
        .get(`${REACT_APP_WEATHER_URL}/weather?${new URLSearchParams(params).toString()}`)
        .then(({data}) => searchForecast(data))
        .catch((err) => {
            setLoading(false);
            console.warn(err)
        })
    }

    function searchForecast(locationData) {
        console.log("searchForecast ~ searchForecast");
        const params = {
            appid: REACT_APP_OPEN_WHEATER_KEY,
            lang: 'pt_br',
            units: 'metric',
            lat: locationData.coord.lat,
            lon: locationData.coord.lon,
            exclude: 'minutely,hourly,alerts',
        };

        axios
        .get(`${REACT_APP_WEATHER_URL}/onecall?${new URLSearchParams(params).toString()}`)
        .then(({data}) => {
            setWeatherData({...data, ...locationData})
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            console.warn(err)
        })
    }

    const hangleKeyPress = (event) => {
        if (event.key == 'Enter'){
            searchWeather(search)
            setWeatherData(undefined)
        }
    }

    return (
                <div id="search" className="search">
                    <input
                        className="input"
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        onKeyDown={hangleKeyPress}
                        placeholder='Buscar localização'
                        type="text"
                    />
                </div>

    )
}

export default InputLocation
