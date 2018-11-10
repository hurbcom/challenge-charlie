
import * as constants from '../constants/weather';
import * as weatherApi from '../api/yahoo/weatherApi';

const getWeatherSuccess = (weather = []) =>
  ({ type: constants.WEATHER_FETCH_SUCCESS, weather });

const getWeatherFail = (weather = []) =>
  ({ type: constants.WEATHER_FETCH_FAIL, weather });

export const getWeatherByLocation = (location = '') => {
  return(dispatch) => {
    return weatherApi.getWeatherByLocation(location).then(response => {
      dispatch(getWeatherSuccess(response));
    }).catch(err => {
      dispatch(getWeatherFail());
    })
  }
}

export const getWeatherByCoordinates = (lat = 0, long = 0) => {
  return(dispatch) => {
    return weatherApi.getWeatherByCoordinates(lat,long).then(response => {
      dispatch(getWeatherSuccess(response));
    }).catch(err => {
      dispatch(getWeatherFail());
    })
  }
}