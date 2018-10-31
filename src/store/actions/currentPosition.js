import { getWeatherByCoords } from 'store/actions';


// ====================================================================
// Functions actions
// ====================================================================

export const getCurrentPosition = () => (dispatch) => {
  const navigator = window.navigator.geolocation;
  if (!navigator) return;
  navigator.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    dispatch(getWeatherByCoords(latitude, longitude));
  }, () => {});
};
