


import { useCallback, useEffect, useState, useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
import { returnWeatherIconString, returnWindDirectionString, convertFromKelvinToCelsius, convertFromKelvinToFahrenheit } from '../../assets/utils/utils';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Forecast } from './components/Forecast';


import {
  WeatherCardContainer,
  WeatherCardForm,
  TodayContainer,
  WeatherIconContainer,
  TodayWeatherInfo,
  AutocompleteDropdownContainer,
  AutocompleteSugestionsContainer,
  SearchbarContainer,
  ErrorMessageContainer,
} from './styles';
import "./searching.css";

interface ApiWeatherInfo {
  main: string
  description: string
  temperature: number
  minTemperature?: number,
  maxTemperature?: number,
  temperatureFahrenheit: number
  minTemperatureFahrenheit?: number,
  maxTemperatureFahrenheit?: number,
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      minTemperature: convertFromKelvinToCelsius(weatherForTheDay.temp.min),
      maxTemperature: convertFromKelvinToCelsius(weatherForTheDay.temp.max),
      temperatureFahrenheit: convertFromKelvinToFahrenheit(weatherForTheDay.temp.day),
      minTemperatureFahrenheit: convertFromKelvinToFahrenheit(weatherForTheDay.temp.min),
      maxTemperatureFahrenheit: convertFromKelvinToFahrenheit(weatherForTheDay.temp.max),
      windDirection: weatherForTheDay.wind_deg,
      windSpeed: weatherForTheDay.wind_speed,
      humidity: weatherForTheDay.humidity,
      pressure: weatherForTheDay.pressure,
    }
  }

  const fetchWeatherInformationFromApi = useCallback(async (geo: GeometryType) => {
    try {
      const weatherResponse = await fetch(openWeatherUrl(geo))
      const currentWeather = await weatherResponse.json()
      const todayWeather = organizeAndReturnCurrentWeatherInfo(currentWeather.current)
      const tomorrowWeather = organizeAndReturnFutureWeatherInfo(currentWeather.daily[1])
      const afterTomorrowWeather = organizeAndReturnFutureWeatherInfo(currentWeather.daily[2])

      setTodayWeatherReport(todayWeather)
      setTomorrowWeatherReport(tomorrowWeather)
      setAfterTomorrowWeatherReport(afterTomorrowWeather)
      setErrorMessage(null)
    } catch (error) {
      setErrorMessage("Erro ao buscar previsão da API")
      console.error(error)
    }
  }, [])



  useEffect(() => {
    handleLoadingState(true)
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        try {
          navigator.geolocation.getCurrentPosition(async (result) => {
            try {
              const response = await fetch(openCageUrl(result.coords.latitude, result.coords.longitude))
              const openCageData = await response.json()
              const geo = openCageData.results[0].geometry
              const city = openCageData.results[0].components.city

              setCurrentCity(city)
              setCurrentState(openCageData.results[0].components.state)

              await fetchWeatherInformationFromApi(geo)
              setErrorMessage(null)
              handleLoadingState(false)
            } catch (error) {
              handleLoadingState(false)
              console.error(error)
              setErrorMessage('Algo deu errado com a sua requisição')
            }
          })
        } catch (error) {
          console.error(error)
          setErrorMessage('Algo deu errado com a sua requisição')
          handleLoadingState(false)
        }
      } else {
        handleLoadingState(false)
        setErrorMessage('Sem permissão de localização. Você ainda pode buscar pela barra de busca')
      }
    })
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
      setErrorMessage("Não foi possível encontrar a localização")
      handleLoadingState(false)
    }
    return
  }

  function switchTemperatureType() {
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
              {loading && <div className="lds-ripple"><div></div><div></div></div>}
            </WeatherCardForm>
            <AutocompleteDropdownContainer>
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
      {(errorMessage || !todayWeatherReport) ?
        <ErrorMessageContainer><span>{errorMessage}</span></ErrorMessageContainer> :
        <>
          <TodayContainer temperature={todayWeatherReport?.temperature} >
            <WeatherIconContainer>{returnWeatherIconString(todayWeatherReport?.main)}</WeatherIconContainer>
            <TodayWeatherInfo>
              <div>
                <span>Hoje</span>
                <button onClick={switchTemperatureType}>
                  {
                    temperatureShowType === 'celsius' ? <span>{todayWeatherReport?.temperature}°C</span> : <span>{todayWeatherReport?.temperatureFahrenheit}°F</span>
                  }
                </button>
              </div>
              <h2>{todayWeatherReport?.description}</h2>
              <div>
                <span>Vento: {returnWindDirectionString(todayWeatherReport?.windDirection)} - {todayWeatherReport?.windSpeed}km/h</span>
                <span>Humidade: {todayWeatherReport?.humidity}%</span>
                <span>Pressão: {todayWeatherReport?.pressure}hPA</span>
              </div>
            </TodayWeatherInfo>
          </TodayContainer>
          <Forecast
            dayWeather={tomorrowWeatherReport}
            todayTemperature={todayWeatherReport?.temperature}
            temperatureType={temperatureShowType}
            dayShow={'tomorrow'}
            switchTemperatureType={switchTemperatureType}
          />
          <Forecast
            dayWeather={afterTomorrowWeatherReport}
            todayTemperature={todayWeatherReport?.temperature}
            temperatureType={temperatureShowType}
            dayShow={'afterTomorrow'}
            switchTemperatureType={switchTemperatureType}
          />
        </>
      }
    </WeatherCardContainer >
  )
}