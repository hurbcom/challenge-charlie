import React from 'react'
import weatherUtils from '../utils/weather';

const WeatherStateContext = React.createContext()
const WeatherDispatchContext = React.createContext()

function createWeatherDayData(weatherDay){
  let weatherData = {};

  if(weatherDay){
    if(weatherDay.weather && weatherDay.weather.length){
      weatherData = {
        ...weatherData,
        weather: weatherDay.weather[0].main,
      };
    }
    if(weatherDay.wind){
      weatherData = {
        ...weatherData,
        windDeg: weatherDay.wind.deg,
        windSpeed: weatherDay.wind.speed,
      };
    }
    if(weatherDay.main){
      weatherData = {
        ...weatherData,
        humidity: weatherDay.main.humidity,
        pressure: weatherDay.main.pressure,
        tempK: weatherDay.main.temp,
        tempC: weatherUtils.kelvinToCelsius(weatherDay.main.temp),
        tempF: weatherUtils.kelvinToFahrenheit(weatherDay.main.temp)
      };
    }
  }
  return weatherData;
}

function countReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_DEGREE_METRIC': {
      return {
        ...state,
        currentDegreeMetric: state.currentDegreeMetric === 'celsius' ? 'fahrenheit' : 'celsius'
      }
    }
    case 'UPDATE_WEATHER': {
      const weather = action.data.weather;
      const weatherList = weather && weather.list ? weather.list : [];
      return {
        ...state,
        weatherList: weatherList.map((weatherDay, index) => {
          return createWeatherDayData(weatherDay, index);
        })
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function WeatherProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    weatherList:[],
    currentDegreeMetric: 'celsius'
  })
  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherStateContext.Provider>
  )
}

function useWeatherState() {
  const context = React.useContext(WeatherStateContext)
  if (context === undefined) {
    throw new Error('useWeatherState must be used within a WeatherProvider')
  }
  return context
}

function useWeatherDispatch() {
  const context = React.useContext(WeatherDispatchContext)
  if (context === undefined) {
    throw new Error('useWeatherDispatch must be used within a WeatherProvider')
  }
  return context
}

function useWeather(){
  return [useWeatherState(), useWeatherDispatch()];
}

export { WeatherProvider, useWeatherState, useWeatherDispatch, useWeather }

export default WeatherProvider;