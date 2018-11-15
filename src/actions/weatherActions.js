
import * as constants from '../constants/weather';
import * as weatherApi from '../api/yahoo/weatherApi';
import * as ramda from 'ramda';

export const getWeatherSuccess = (weather = []) =>
  ({ type: constants.WEATHER_FETCH_SUCCESS, weather });

export const getWeatherFail = () =>
  ({ type: constants.WEATHER_FETCH_FAIL });

export const getWeatherByLocation = (location = '') => {
  return(dispatch) => {
    return weatherApi.getWeatherByLocation(location).then(response => {
      const channel = ramda.path(
        ['query', 'results', 'channel'], response);
      if (channel) {
        return dispatch(getWeatherSuccess(channel));
      }
      return dispatch(getWeatherFail());
    }).catch(err => {
      dispatch(getWeatherFail());
    })
  }
}

export const getWeatherByCoordinates = (lat = 0, long = 0) => {
  return(dispatch) => {
    return weatherApi.getWeatherByCoordinates(lat,long).then(response => {
      const channel = ramda.path(
        ['query', 'results', 'channel'], response);
      if (channel) {
        return dispatch(getWeatherSuccess(channel));
      }
      return dispatch(getWeatherFail());
    }).catch(err => {
      dispatch(getWeatherFail());
    })
  }
}