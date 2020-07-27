import bing from "../apis/bing";
import openCage from "../apis/openCage";
import openWeather from "../apis/openWeather";
import {
  FETCH_BACKGROUND,
  FETCH_CURRENT_POSITION,
  FETCH_CURRENT_POSITION_FAIL,
  FETCH_LOCATION,
  FETCH_WEATHER,
  FETCH_WEATHER_FAIL,
} from "./types";
// TODO: FETCH_WEATHER_FAIL, FETCH_LOCATION_FAIL
import { weatherPerDay } from "../utils";

export const fetchBackground = () => async dispatch => {
  const { data } = await bing.get("/");
  const { images } = data;
  const [backgroundImage] = images;
  const backgroundUrl = `https://www.bing.com${backgroundImage.url}`;

	dispatch({ type: FETCH_BACKGROUND, payload: backgroundUrl });
};

export const fetchCurrentPosition = () => dispatch => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      dispatch({
        type: FETCH_CURRENT_POSITION,
        payload: { latitude, longitude }
      });
      dispatch(fetchLocation(latitude, longitude));
    },
    (err) => dispatch({ type: FETCH_CURRENT_POSITION_FAIL, payload: err.message })
  );
};

export const fetchLocation = (latitude, longitude) => async dispatch => {
  const { data } = await openCage.get(`?q=${latitude}+${longitude}&key=c63386b4f77e46de817bdf94f552cddf`);
  const { results } = data;
  const [location] = results;
  const { city, country, state, suburb } = location.components;

  dispatch({ type: FETCH_LOCATION, payload: { city, country, state, suburb } });
  dispatch(fetchWeather(city));
}

export const fetchWeather = (location) => async dispatch => {
  const param = (typeof location === "object") ? location.location : location;
  try {
    const { data } = await openWeather.get(`/forecast?q=${param}&cnt=3&appid=7ba73e0eb8efe773ed08bfd0627f07b8`);
    const { list } = data;
    const weathersList = list.map(weatherPerDay);

    const weathers = Object.fromEntries(new Map([
      ["today", weathersList[0]],
      ["tomorrow", weathersList[1]],
      ["after", weathersList[2]],
    ]));

    dispatch({ type: FETCH_WEATHER, payload: weathers });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAIL });
  }
}
