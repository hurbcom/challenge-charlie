
import * as constants from '../constants/weather';
import * as weatherApi from '../api/yahoo/weatherApi';
import * as ramda from 'ramda';

const getWeatherSuccess = (weather = []) =>
  ({ type: constants.WEATHER_FETCH_SUCCESS, weather });

const getWeatherFail = (weather = []) =>
  ({ type: constants.WEATHER_FETCH_FAIL, weather });


export const getThisLocationWeather = () => {
  return(dispatch) => {
    new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let { coords } = position;
                weatherApi.getWeatherByCoordinates(coords.latitude, coords.longitude)
                .then(response => {
                    const channel = ramda.path(
                        ['query', 'results', 'channel'], response);
                    if (channel) {
                        return dispatch(getWeatherSuccess(channel));
                    }
                    return dispatch(getWeatherFail());
                }).catch(err => {
                    dispatch(getWeatherFail());
                })
            });
        }
        dispatch(getWeatherFail());
    })
    .catch(() => dispatch(getWeatherFail()));  
  }
}