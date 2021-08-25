import React, { useEffect, useState } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import {
    StyledInputContainer,
    StyledDropdown,
    StyledSuggestions,
} from "./WeatherSearchStyles.js";
import Weather from "../Weather";
import { setIcon, setWindDirection, setWeatherBackground } from "../../utils";

const WeatherSearch = (props) => {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

    //Informações do clima
    const [iconToday, setIconToday] = useState();
    const [iconTomorrow, setIconTomorrow] = useState();
    const [iconAfterTomorrow, setIconAfterTomorrow] = useState();
    const [todayTemperature, setTodayTemperature] = useState();
    const [tomorrowTemperature, setTomorrowTemperature] = useState();
    const [afterTomorrowTemperature, setAfterTomorrowTemperature] = useState();
    const [todayDescription, setTodayDescription] = useState();
    const [tomorrowDescription, setTomorrowDescription] = useState();
    const [afterTomorrowDescription, setAfterTomorrowDescription] = useState();
    const [todayWindDirection, setTodayWindDirection] = useState();
    const [tomorrowWindDirection, setTomorrowWindDirection] = useState();
    const [afterTomorrowWindDirection, setAfterTomorrowWindDirection] =
        useState();
    const [todayWindSpeed, setTodayWindSpeed] = useState();
    const [tomorrowWindSpeed, setTomorrowWindSpeed] = useState();
    const [afterTomorrowWindSpeed, setAfterTomorrowWindSpeed] = useState();
    const [todayHumidity, setTodayHumidity] = useState();
    const [tomorrowHumidity, setTomorrowHumidity] = useState();
    const [afterTomorrowHumidity, setAfterTomorrowHumidity] = useState();
    const [todayPressure, setTodayPressure] = useState();
    const [tomorrowPressure, setTomorrowPressure] = useState();
    const [afterTomorrowPressure, setAfterTomorrowPressure] = useState();

    //Funções de requisição das APIs de localização e clima
    const keyLocationAPI = process.env.REACT_APP_OPENCAGE_KEY;
    const keyWeatherAPI = process.env.REACT_APP_OPENWEATHER_KEY;
    let locationURL = (lat, long) =>
        "https://api.opencagedata.com/geocode/v1/json?q=" +
        lat +
        "+" +
        long +
        "&key=" +
        keyLocationAPI;
    let weatherURL = (location) =>
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        location +
        "&APPID=" +
        keyWeatherAPI +
        "&lang=pt&units=metric&cnt=3";

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const responseLocation = await fetch(
                    locationURL(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                );
                const dataLocation = await responseLocation.json();

                const locationName =
                    dataLocation.results[0].components.city +
                    ", " +
                    dataLocation.results[0].components.state_code +
                    ", " +
                    dataLocation.results[0].components.country;

                const responseWeather = await fetch(weatherURL(locationName));
                const dataWeather = await responseWeather.json();

                setAddress(locationName);

                //Preenchendo as informações do clima com base nos dados da API
                setIconToday(dataWeather.list[0].weather[0].description);
                setIconTomorrow(dataWeather.list[1].weather[0].description);
                setIconAfterTomorrow(
                    dataWeather.list[2].weather[0].description
                );
                setTodayDescription(dataWeather.list[0].weather[0].description);
                setTomorrowDescription(
                    dataWeather.list[1].weather[0].description
                );
                setAfterTomorrowDescription(
                    dataWeather.list[2].weather[0].description
                );
                setTodayTemperature(Math.round(dataWeather.list[0].main.temp));
                setTomorrowTemperature(
                    Math.round(dataWeather.list[1].main.temp)
                );
                setAfterTomorrowTemperature(
                    Math.round(dataWeather.list[2].main.temp)
                );
                setTodayWindDirection(
                    setWindDirection(dataWeather.list[0].wind.deg)
                );
                setTomorrowWindDirection(
                    setWindDirection(dataWeather.list[1].wind.deg)
                );
                setAfterTomorrowWindDirection(
                    setWindDirection(dataWeather.list[2].wind.deg)
                );
                setTodayWindSpeed(Math.round(dataWeather.list[0].wind.speed));
                setTomorrowWindSpeed(
                    Math.round(dataWeather.list[1].wind.speed)
                );
                setAfterTomorrowWindSpeed(
                    Math.round(dataWeather.list[2].wind.speed)
                );
                setTodayHumidity(dataWeather.list[0].main.humidity);
                setTomorrowHumidity(dataWeather.list[1].main.humidity);
                setAfterTomorrowHumidity(dataWeather.list[2].main.humidity);
                setTodayPressure(dataWeather.list[0].main.pressure);
                setTomorrowPressure(dataWeather.list[1].main.pressure);
                setAfterTomorrowPressure(dataWeather.list[2].main.pressure);
            });
        }
    }, []);

    return (
        <React.Fragment>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div>
                        <StyledInputContainer>
                            <div className="icon" data-icon="("></div>
                            <input
                                {...getInputProps({
                                    placeholder: "Pesquisar localizações ...",
                                })}
                            />
                        </StyledInputContainer>

                        <StyledDropdown>
                            {loading ? <div>...carregando</div> : null}

                            {suggestions.map((suggestion) => {
                                return (
                                    <StyledSuggestions
                                        {...getSuggestionItemProps(suggestion)}
                                        key={suggestion.placeId}
                                    >
                                        <span>{suggestion.description}</span>
                                    </StyledSuggestions>
                                );
                            })}
                        </StyledDropdown>
                    </div>
                )}
            </PlacesAutocomplete>
            <Weather
                icon={setIcon(iconToday)}
                day="hoje"
                description={todayDescription}
                temperature={todayTemperature}
                windDirection={todayWindDirection}
                windSpeed={todayWindSpeed}
                humidity={todayHumidity}
                pressure={todayPressure}
                backgroundColor={setWeatherBackground(todayTemperature)}
            />
            <Weather
                icon={setIcon(iconTomorrow)}
                day="amanhã"
                description={tomorrowDescription}
                temperature={tomorrowTemperature}
                windDirection={tomorrowWindDirection}
                windSpeed={tomorrowWindSpeed}
                humidity={tomorrowHumidity}
                pressure={tomorrowPressure}
                backgroundColor={setWeatherBackground(tomorrowTemperature)}
            />
            <Weather
                icon={setIcon(iconAfterTomorrow)}
                day="depois de amanhã"
                description={afterTomorrowDescription}
                temperature={afterTomorrowTemperature}
                windDirection={afterTomorrowWindDirection}
                windSpeed={afterTomorrowWindSpeed}
                humidity={afterTomorrowHumidity}
                pressure={afterTomorrowPressure}
                backgroundColor={setWeatherBackground(afterTomorrowTemperature)}
            />
        </React.Fragment>
    );
};

export default WeatherSearch;
