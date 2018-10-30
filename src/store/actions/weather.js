import axios from 'axios';
import { undefinedWeather } from 'store/actions';
import { LOAD_WEATHER } from 'store/constants';
import { env, urlParser, yahooParser } from 'helpers';


// ====================================================================
// Typed actions
// ====================================================================

const loadWeather = weather => ({
  type: LOAD_WEATHER,
  value: {
    weather,
  },
});

// ====================================================================
// Functions actions
// ====================================================================

export const getWeatherByValue = value => (dispatch) => {
  const {
    REACT_APP_YAHOO_API_LOCATION_NAME: yahooApi,
    REACT_APP_YAHOO_API_LOCATION_NAME_TIMEOUT: timeout,
  } = env;
  const yahooApiUrl = urlParser({ location_name: value }, yahooApi);
  const configRequest = {
    timeout: Number(timeout),
  };
  return axios.get(yahooApiUrl, configRequest)
    .then(({ data }) => data)
    .then((data) => {
      try {
        const parsedData = yahooParser(data);
        dispatch(loadWeather(parsedData));
        return parsedData;
      } catch (err) {
        throw err;
      }
    }).catch(() => {
      dispatch(undefinedWeather());
    });
};
