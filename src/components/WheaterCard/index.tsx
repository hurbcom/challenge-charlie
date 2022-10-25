


import { useEffect, useState } from 'react';
import {
  WeatherCardContainer,
  WeatherCardForm,
  TodayContainer,
  WeatherIconContainer,
  TodayWeatherInfo,
  TomorrowContainer,
  AfterTomorrowContainer
} from './styles';


export function WeatherCard() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentState, setCurrentState] = useState('');


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


  return (
    <WeatherCardContainer>
      <WeatherCardForm action="">
        <p>(</p>
        <input type="text" placeholder={returnLocationForPlaceholder()} />
      </WeatherCardForm>
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
    </WeatherCardContainer>
  )
}