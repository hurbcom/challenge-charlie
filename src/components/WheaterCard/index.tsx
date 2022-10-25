


import { useCallback, useEffect, useState, useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
import { returnWeatherIconString, returnWindDirectionString, convertFromKelvinToCelsius, convertFromKelvinToFahrenheit } from '../../assets/utils/utils';


import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
  WeatherCardContainer,
  WeatherCardForm,
  TodayContainer,
  WeatherIconContainer,
  TodayWeatherInfo,
  TomorrowContainer,
  AfterTomorrowContainer,
  AutocompleteDropdownContainer,
  AutocompleteSugestionsContainer,
  SearchbarContainer
} from './styles';

interface ApiWeatherInfo {
  main: string
  description: string
  temperature: number
  temperatureFahrenheit: number
  windDirection: number
  windSpeed: number
  humidity: number
  pressure: number
}

interface GeometryType {
  lat: number,
  lng: number
}

export function WeatherCard() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [address, setAddress] = useState('');
  const [todayWeatherReport, setTodayWeatherReport] = useState<ApiWeatherInfo | undefined>();
  const [tomorrowWeatherReport, setTomorrowWeatherReport] = useState<ApiWeatherInfo | undefined>();
  const [afterTomorrowWeatherReport, setAfterTomorrowWeatherReport] = useState<ApiWeatherInfo | undefined>();
  const [temperatureShowType, setTemperatureShowType] = useState<"celsius" | "fahrenheit">("celsius");

  //context
  const { handleLoadingState } = useContext(LoadingContext);

  function openCageUrl(latitude: number, longitude: number) {
    const openCageApiKey = process.env.REACT_APP_OPENCAGE_API_KEY
    return `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageApiKey}`
  }

  function openWeatherUrl(geo: GeometryType) {
    const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_KEY
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${geo.lat}&lon=${geo.lng}&%20exclude=daily&appid=${openWeatherApiKey}&lang=pt_br`
  }

  function returnLocationForPlaceholder() {
    if (currentCity && currentState) {
      return `${currentCity}, ${currentState}`
    } else {
      return ""
    }
  }

  function organizeAndReturnCurrentWeatherInfo(weatherForTheDay: any) {
    return {
      main: weatherForTheDay.weather[0].main,
      description: weatherForTheDay.weather[0].description,
      temperature: convertFromKelvinToCelsius(weatherForTheDay.temp),
      temperatureFahrenheit: convertFromKelvinToFahrenheit(weatherForTheDay.temp),
      windDirection: weatherForTheDay.wind_deg,
      windSpeed: weatherForTheDay.wind_speed,
      humidity: weatherForTheDay.humidity,
      pressure: weatherForTheDay.pressure,
    }
  }

  function organizeAndReturnFutureWeatherInfo(weatherForTheDay: any) {
    return {
      main: weatherForTheDay.weather[0].main,
      description: weatherForTheDay.weather[0].description,
      temperature: convertFromKelvinToCelsius(weatherForTheDay.temp.day),
      temperatureFahrenheit: convertFromKelvinToFahrenheit(weatherForTheDay.temp.day),
      windDirection: weatherForTheDay.wind_deg,
      windSpeed: weatherForTheDay.wind_speed,
      humidity: weatherForTheDay.humidity,
      pressure: weatherForTheDay.pressure,
    }
  }

  const fetchWeatherInformationFromApi = useCallback(async (geo: GeometryType) => {
    const weatherResponse = await fetch(openWeatherUrl(geo))
    const currentWeather = await weatherResponse.json()
    const todayWeather = organizeAndReturnCurrentWeatherInfo(currentWeather.current)
    const tomorrowWeather = organizeAndReturnFutureWeatherInfo(currentWeather.daily[1])
    const afterTomorrowWeather = organizeAndReturnFutureWeatherInfo(currentWeather.daily[2])

    setTodayWeatherReport(todayWeather)
    setTomorrowWeatherReport(tomorrowWeather)
    setAfterTomorrowWeatherReport(afterTomorrowWeather)
  }, [])

  useEffect(() => {
    handleLoadingState(true)
    if ("geolocation" in navigator) {
      try {
        navigator.geolocation.getCurrentPosition(async (result) => {
          const response = await fetch(openCageUrl(result.coords.latitude, result.coords.longitude))
          const openCageData = await response.json()

          const geo = openCageData.results[0].geometry
          const city = openCageData.results[0].components.city

          setCurrentCity(city)
          setCurrentState(openCageData.results[0].components.state)

          await fetchWeatherInformationFromApi(geo)
          handleLoadingState(false)
        })
      } catch (error) {
        console.error(error)
        handleLoadingState(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSelect(value: string) {
    handleLoadingState(true)
    try {
      setAddress(value)
      const geocode = await geocodeByAddress(value);
      const latLng = await getLatLng(geocode[0])
      await fetchWeatherInformationFromApi(latLng)
      handleLoadingState(false)
    } catch (e) {
      console.error(e)
      handleLoadingState(false)
    }
    return
  }

  function SwitchTemperatureType() {
    if (temperatureShowType === 'celsius') { setTemperatureShowType('fahrenheit') }
    else { setTemperatureShowType('celsius') }
  }

  return (
    <WeatherCardContainer>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
        }) => (
          <SearchbarContainer>
            <WeatherCardForm action="" >
              <p>(</p>
              <input {...getInputProps({ placeholder: returnLocationForPlaceholder() })} value={address} />
            </WeatherCardForm>
            <AutocompleteDropdownContainer>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                return (
                  <AutocompleteSugestionsContainer {...getSuggestionItemProps(suggestion)} key={suggestion.id}>
                    {suggestion.description}
                  </AutocompleteSugestionsContainer>
                );
              })}
            </AutocompleteDropdownContainer>
          </SearchbarContainer>
        )}
      </PlacesAutocomplete>
      <TodayContainer temperature={todayWeatherReport?.temperature} >
        <WeatherIconContainer>{returnWeatherIconString(todayWeatherReport?.main)}</WeatherIconContainer>
        <TodayWeatherInfo>
          <div>
            <span>Hoje</span>
            <button onClick={SwitchTemperatureType}>
              {
                temperatureShowType === 'celsius' ? <span>{todayWeatherReport?.temperature}°C</span> : <span>{todayWeatherReport?.temperatureFahrenheit}°F</span>
              }
            </button>
          </div>
          <h2>{todayWeatherReport?.description}</h2>
          <div>
            <span>Vento: {returnWindDirectionString(todayWeatherReport?.windDirection)} {todayWeatherReport?.windSpeed}km/h</span>
            <span>Humidade: {todayWeatherReport?.humidity}%</span>
            <span>Pressão: {todayWeatherReport?.pressure}hPA</span>
          </div>
        </TodayWeatherInfo>
      </TodayContainer>
      <TomorrowContainer temperature={todayWeatherReport?.temperature}>
        <div>
          <span>AMANHÃ</span>
          <button onClick={SwitchTemperatureType}>
            {
              temperatureShowType === 'celsius' ? <span>{tomorrowWeatherReport?.temperature}°C</span> : <span>{tomorrowWeatherReport?.temperatureFahrenheit}°F</span>
            }
          </button>
        </div>
      </TomorrowContainer>
      <AfterTomorrowContainer temperature={todayWeatherReport?.temperature}>
        <div>
          <span>DEPOIS DE AMANHÃ</span>
          <button onClick={SwitchTemperatureType}>
            {
              temperatureShowType === 'celsius' ? <span>{afterTomorrowWeatherReport?.temperature}°C</span> : <span>{afterTomorrowWeatherReport?.temperatureFahrenheit}°F</span>
            }
          </button>
        </div>
      </AfterTomorrowContainer>
    </WeatherCardContainer >
  )
}