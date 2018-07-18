import axios from 'axios';

// Type(s)
// --------
export const types = {
  FETCH_WEATHER: 'fetch_weather',
  FETCH_WEATHER_COMPLETE: 'fetch_weather_complete',
  FETCH_ERROR: 'fetch_error',
  FETCH_BING: 'fetch_bing'
};

export const fetchBingData = () => dispatch => {
  let req = axios.get('/api/bingImg');
  req.then(({ data }) => dispatch({ type: types.FETCH_BING, payload: data }));
};

export const fetchLatLongWeather = (lat, lon) => dispatch => {
  let req = axios.get(
    `https://query.yahooapis.com/v1/public/yql?q=select%20%2A%20from%20weather.forecast%20where%20woeid%20in%20%28SELECT%20woeid%20FROM%20geo.places%20WHERE%20text=%22%28${lat},${lon}%29%22%29&format=json`
  );
  dispatch({ type: types.FETCH_WEATHER });
  req
    .then(({ data }) => dispatch({ type: types.FETCH_WEATHER_COMPLETE, payload: data.query.results.channel }))
    .catch(err => dispatch({ type: types.FETCH_ERROR }));
};

export const fetchCityWeather = city => dispatch => {
  let req = axios.get(
    `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  );
  dispatch({ type: types.FETCH_WEATHER });
  req
    .then(({ data }) => dispatch({ type: types.FETCH_WEATHER_COMPLETE, payload: data.query.results.channel }))
    .catch(err => dispatch({ type: types.FETCH_ERROR }));
};
