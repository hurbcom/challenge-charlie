import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { RiCompassLine } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import treatTemperatureSystem from '../../services/treatTemperature';
import windDirection from '../../services/windDirection';
import WeatherIcon from '../../services/weatherIcons';

import config from '../../config';

import {
  Wrapper,
  LoadingScreen,
  Container,
  Header,
  ContentContainer,
  TodayWeather,
  WeatherIconContainer,
  WeatherInfo,
  TomorrowForecast,
  AfterTomorrowForecast,
} from './styles';

// application interfaces
interface ICoordinates {
  lat: number | undefined;
  lng: number | undefined;
}
interface IWind {
  deg: number;
  speed: number;
}

interface IWeatherInfo {
  weather: string;
  icon: string;
  wind: IWind;
  humidity: number;
  pressure: number;
}

interface ITemperature {
  today: {
    celsius: number;
    fahrenheit: number;
  };
  tomorrow: {
    celsius: number;
    fahrenheit: number;
  };
  afterTomorrow: {
    celsius: number;
    fahrenheit: number;
  };
}
const api = axios.create();

const WeatherReport: React.FC = () => {
  const [isLoading, setIsLoading] = useState<number | undefined>(1);
  const [temperatureSystem, setTemperatureSystem] = useState<
    'celsius' | 'fahrenheit'
  >('celsius');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    lat: -22.970368,
    lng: -43.188224,
  });
  const [weatherInfo, setWeatherInfo] = useState<IWeatherInfo | undefined>();
  const [temperatures, setTemperatures] = useState<ITemperature | undefined>();

  /**
   * Uses OpenCage API to find and update coordinates based on name typed in search box
   */
  const findWeather = useCallback(() => {
    if (!address) {
      return;
    }
    setIsLoading(1);
    try {
      api
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${config.openCageApiKey}`,
        )
        .then((response) => {
          if (response.data.results.length <= 0) {
            setIsLoading(undefined);
            return;
          }

          setCoordinates(response.data.results[0].geometry);
        })
        .finally(() => {
          setIsLoading(undefined);
        });
    } catch (err) {
      throw new Error(err);
    }
  }, [address]);

  /*
   * Uses OpeanWeather aPI to find the current weather and the next 2 days forecast.
   * The response is then added to the weatherInfo and forecastInfo states that feeds the application
   */
  useEffect(() => {
    setIsLoading(1);
    api
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&%20exclude=daily&appid=${config.mapApiKey}&lang=pt_br`,
      )
      .then((response) => {
        setTemperatures({
          today: {
            celsius: treatTemperatureSystem(response.data.current.temp)[0],
            fahrenheit: treatTemperatureSystem(response.data.current.temp)[1],
          },
          tomorrow: {
            celsius: treatTemperatureSystem(response.data.daily[1].temp.day)[0],
            fahrenheit: treatTemperatureSystem(
              response.data.daily[1].temp.day,
            )[1],
          },
          afterTomorrow: {
            celsius: treatTemperatureSystem(response.data.daily[2].temp.day)[0],
            fahrenheit: treatTemperatureSystem(
              response.data.daily[2].temp.day,
            )[1],
          },
        });
        setWeatherInfo({
          weather: response.data.current.weather[0].description.toUpperCase(),
          icon: response.data.current.weather[0].icon,
          wind: {
            deg: response.data.current.wind_deg,
            speed: Number((response.data.current.wind_speed * 3.6).toFixed(1)),
          },
          humidity: response.data.current.humidity,
          pressure: response.data.current.pressure,
        });
        setIsLoading(undefined);
      });
  }, [coordinates]);

  /**
   * Asks for permission to get geolocation data from browser and
   * sets the users coordinates as default filling the search bar with current city
   */

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        navigator.geolocation.getCurrentPosition((position) => {
          api
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${config.googleApiKey}`,
            )
            .then((response) => {
              setAddress(
                response.data.results[0].address_components[3].long_name,
              );
            });
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        throw new Error('Geolocalization permission not granted');
      }
    });
  }, []);

  /**
   * Used on PlacesAutocomplete to set states based on the search autocomplete results.
   * Also updates the address state to the value current on box, even if autocomplete is not used
   */
  const handleSelect = useCallback(async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  }, []);

  /**
   * Changes the current temperature system between calsius and fahrenheit
   */
  const changeTemperatureSystem = useCallback(() => {
    if (temperatureSystem === 'celsius') {
      setTemperatureSystem('fahrenheit');
    } else setTemperatureSystem('celsius');
  }, [temperatureSystem]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <button type="button" onClick={findWeather}>
            <RiCompassLine />
          </button>
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
                <input
                  {...getInputProps({
                    placeholder: 'Cidade...',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? 'rgb(220, 220, 220)'
                        : 'rgb(240, 235, 230)',
                      cursor: 'pointer',
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Header>
        <LoadingScreen loading={isLoading}>
          <AiOutlineLoading3Quarters />
        </LoadingScreen>
        <ContentContainer loading={isLoading}>
          <TodayWeather temperature={temperatures?.today.celsius}>
            <WeatherIconContainer>
              <WeatherIcon weatherCode={weatherInfo?.icon} />
            </WeatherIconContainer>
            <WeatherInfo>
              <div>
                <div>
                  <span>HOJE</span>
                  <div className="changeSystemButtonContainer">
                    <button type="button" onClick={changeTemperatureSystem}>
                      {temperatureSystem === 'celsius'
                        ? `${temperatures?.today.celsius}°C`
                        : `${temperatures?.today.fahrenheit}°F`}
                    </button>
                  </div>
                </div>
                <div>{weatherInfo?.weather}</div>
                <div className="small">
                  <span>
                    {`Vento: ${windDirection(weatherInfo?.wind.deg)}. ${
                      weatherInfo?.wind.speed
                    }km/h`}
                  </span>
                  <span>{`Humidade: ${weatherInfo?.humidity}%`}</span>
                  <span>{`Pressão: ${weatherInfo?.pressure}hPA`}</span>
                </div>
              </div>
            </WeatherInfo>
          </TodayWeather>
          <TomorrowForecast temperature={temperatures?.tomorrow.celsius}>
            <div>AMANHÃ</div>
            <div className="changeSystemButtonContainer">
              <button type="button" onClick={changeTemperatureSystem}>
                {temperatureSystem === 'celsius'
                  ? `${temperatures?.tomorrow.celsius}°C`
                  : `${temperatures?.tomorrow.fahrenheit}°F`}
              </button>
            </div>
          </TomorrowForecast>
          <AfterTomorrowForecast
            temperature={temperatures?.afterTomorrow.celsius}
          >
            <div>DEPOIS DE AMANHÃ</div>
            <div className="changeSystemButtonContainer">
              <button type="button" onClick={changeTemperatureSystem}>
                {temperatureSystem === 'celsius'
                  ? `${temperatures?.afterTomorrow.celsius}°C`
                  : `${temperatures?.afterTomorrow.fahrenheit}°F`}
              </button>
            </div>
          </AfterTomorrowForecast>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default WeatherReport;
