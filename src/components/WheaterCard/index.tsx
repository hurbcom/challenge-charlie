


import { useEffect, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
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


export function WeatherCard() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [address, setAddress] = useState('');

  function openCageUrl(lat: number, lon: number) {
    const openCageApiKey = process.env.REACT_APP_OPENCAGE_API_KEY
    return "https://api.opencagedata.com/geocode/v1/json?q=" +
      lat + "+" + lon + "&key=" + openCageApiKey
  }

  function returnLocationForPlaceholder() {
    if (currentCity && currentState) {
      return `${currentCity}, ${currentState}`
    } else {
      return ""
    }
  }

  useEffect(() => {
    try {
      //colocar o loading
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (result) => {
          const response = await fetch(openCageUrl(result.coords.latitude, result.coords.longitude))
          const openCageData = await response.json()

          setCurrentCity(openCageData.results[0].components.city)
          setCurrentState(openCageData.results[0].components.state)
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      // retirar o loading
    }
  }, [])

  function handleSelect() {
    return
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
            <WeatherCardForm action="">
              <p>(</p>
              <input {...getInputProps({ placeholder: returnLocationForPlaceholder() })} />
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

      <TodayContainer>
        <WeatherIconContainer>B</WeatherIconContainer>
        <TodayWeatherInfo>
          <div>
            <span>Hoje</span>
            <span>32°C</span>
          </div>
          <h2>Ensolarado</h2>
          <div>
            <span>Vento: NO 6.4km/h</span>
            <span>Humidade: 78%</span>
            <span>Pressão: 1003hPA</span>
          </div>
        </TodayWeatherInfo>
      </TodayContainer>
      <TomorrowContainer>
        <span>AMANHÃ</span>
        <span>32°C</span>
      </TomorrowContainer>
      <AfterTomorrowContainer>
        <span>DEPOIS DE AMANHÃ</span>
        <span>32°C</span>
      </AfterTomorrowContainer>
    </WeatherCardContainer >
  )
}