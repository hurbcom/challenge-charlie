import React from 'react'
import weatherUtils from '../utils/weather';

const WeatherDayStateContext = React.createContext();
const WeatherDayDispatchContext = React.createContext();

function getBackgroundColor(weather, day){
  const tempC = weather ? weather.tempC : undefined;
  const theme = weatherUtils.getThemeByTemp(tempC);
  switch(day % 3){
    case 0:  
      return theme.lighten;
    case 1: 
      return theme.normal;
    case 2: 
      return theme.darken;
    default:
      return theme.normal;
  }
}

function countReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_WEATHER': {
      const weather = action.data.weather;
      return {
        ...state,
        ...weather,
        backgroundColor: getBackgroundColor(weather, state.day)
      }
    }
    case 'UPDATE_TITLE': {
      const title = action.data.title;
      return {
        ...state,
        title: title
      }
    }
    case 'UPDATE_DAY': {
      const day = action.data.day;
      return {
        ...state,
        day: day,
        backgroundColor: getBackgroundColor(state, day)
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function WeatherDayProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    title: '',
    backgroundColor: undefined,
    day: -1
  })


  return (
    <WeatherDayStateContext.Provider value={state}>
      <WeatherDayDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDayDispatchContext.Provider>
    </WeatherDayStateContext.Provider>
  )
}

function useWeatherDayState() {
  const context = React.useContext(WeatherDayStateContext)
  if (context === undefined) {
    throw new Error('useWeatherDayState must be used within a WeatherDayProvider')
  }
  return context
}

function useWeatherDayDispatch() {
  const context = React.useContext(WeatherDayDispatchContext)
  if (context === undefined) {
    throw new Error('useWeatherDayDispatch must be used within a WeatherDayProvider')
  }
  return context
}

function useWeatherDay(){
  return [useWeatherDayState(), useWeatherDayDispatch()];
}

export { WeatherDayProvider, useWeatherDayState, useWeatherDayDispatch, useWeatherDay }

export default WeatherDayProvider;