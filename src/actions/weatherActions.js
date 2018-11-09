
import * as constants from '../constants/weather';
import * as weatherApi from '../api/yahoo/weatherApi';

const getWeatherSuccess = (weather = {}) =>
  ({ type: constants.WEATHER_FETCH_SUCCESS, weather });

export const getWeatherByLocation = (location = '') => {
  return(dispatch) => {
    return weatherApi.getWeatherByLocation(location).then(response => {
      dispatch(getWeatherSuccess(response));
    });
  }
}

export const getWeatherByCoordinates = (lat = 0, long = 0) => {
    return(dispatch) => {
      return weatherApi.getWeatherByCoordinates(lat,long).then(response => {
        dispatch(getWeatherSuccess(response));
      });
    }
  }