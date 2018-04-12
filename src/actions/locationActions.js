// Flow
import axios from 'axios';

export function getCurrentLocationByCoordinates(location) {
  const { latitude, longitude } = location;
  const api = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${latitude},${longitude})")&format=json`;
  const request = axios.get(api).then(({ data }) => data);
  return {
    type: 'REQUEST_LOCATION_BY_POSITION',
    payload: request,
  };
}
export function getByLocationName(location) {
  const api = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{${location}}}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
  const request = axios.get(api).then(({ data }) => data);
  return {
    type: 'REQUEST_LOCATION_BY_POSITION',
    payload: request,
  };
}
export function getCurrentLocation() {
  return (dispatch) => {
    const geolocation = navigator.geolocation;

    return new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('Not Supported'));
      }

      geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
          dispatch(getCurrentLocationByCoordinates(position.coords));
        },
        () => {
          reject(new Error('Permission denied'));
        },
      );
    });
  };
}
