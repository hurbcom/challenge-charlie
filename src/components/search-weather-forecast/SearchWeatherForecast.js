import React, { useState, useEffect } from 'react';
import { Geolocation } from '../geolocation/Geolocation';
import classes from './SearchWeatherForecast.module.css';
import WeatherForecast from '../weather-forecast/WeatherForecast';
const { REACT_APP_API_KEY_WEATHER_FORECAST } = process.env;


const SearchWeatherForecast = () => {

    //UseState is used so that state variables are preserved.

    /**
     * State variable boollean 
     * this variable is true when we still don't have the return of the API
     */
    let [loading, setLoading] = useState(true);
    let [initialUnit, setInitialUnit] = useState(false);

    //it works to get API return 
    let [responseObj, setResponseObj] = useState({});

    //handle api call function error
    let [error, setError] = useState(false);

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');

    //geolocation callback
    const { position, err } = Geolocation();

    const getWeatherForecast = (city) => {

        /**
         * HTTP Headers represent the meta-data associated with the API
         * request and response
         */
        var myHeaders = new Headers();

        //access key for Open Weather API
        let apiKey = REACT_APP_API_KEY_WEATHER_FORECAST;
        myHeaders.append("x-rapidapi-key", apiKey);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let uriEncodedCity = encodeURIComponent(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${uriEncodedCity}&cnt=3&units=${unit}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Unable to fetch data");
                }
            })
            .then(data => {
                console.log('data', data);
                setResponseObj(data);
                setError(false);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }

    /**
     * It is looking at the unit variable
     * Once the useEffect is done, React remembers that the 
     * state of counter has changed during its execution, thus
     * it will re-render the App
     */
    useEffect(() => {
        // callback variable of weather forecast component
        if (initialUnit) {
            getWeatherForecast(responseObj.city.name)
        }
    }, [unit])


    /**
     * Event handler that calls another function to get informations about 
     * the city passed by parameter 
     * @param {*} evt 
     * @param city
     */
    const search = evt => {
        if (evt.key === "Enter") {
            city.length === 0 ? setError(true) : getWeatherForecast(city);
        }
    }

    /**
     * It works to get the geolocation callback 
     * then calls getWeatherForecast function passing 
     * city by parameter
     */
    if (position.render) {
        position.render = false;
        setLoading(true);
        getWeatherForecast(position.position);
    }

    return (
        <div className={classes.Wrapper}>
            {loading && <div>Loading...</div>}
            {parseInt(responseObj.cod) === 200 ?
                <div className={classes.Container}>
                    <div className={classes.Flex}>
                        <div className={classes.FlexSearch}>
                            <div className={classes.SearchInput}>
                                <i className={classes.Icon}>(</i>
                                <input
                                    type="text"
                                    className={classes.SearchBox}
                                    placeholder={responseObj.city.name}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    onKeyPress={search}
                                />
                            </div>
                            {error ? <span style={{ position: `absolute`, color: `red`, fontWeight: `bold` }}>Digite uma cidade válida</span> : null}
                            <WeatherForecast
                                responseObj={responseObj}
                                onSetUnit={(newUnit) => setUnit(newUnit)}
                                onSetInitialUnit={(newInitialunit) => setInitialUnit(newInitialunit)}
                                initialUnit={initialUnit}
                                unit={unit}
                            />
                        </div>
                    </div>

                </div>
                : <span>{err}</span>
            }
        </div >
    )
}

export default SearchWeatherForecast;