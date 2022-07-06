import axios from "axios";

export const fetchLocation = async (
  latitude: number | undefined,
  longitude: number | undefined
) => {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json",
    {
      params: {
        q: `${latitude}, ${longitude}`,
        key: `${process.env.OPEN_CAGE_KEY}`,
        abbrv: 1,
        language: "pt-br",
        no_annotations: 1,
        roadinfo: 1,
        pretty: 0,
      },
    }
  );
  return response.data.results[0].components;
};

export const fetchBackground = async () => {
  const response = await axios.get(
    "https://thingproxy.freeboard.io/fetch/https://www.bing.com/HPImageArchive.aspx",
    {
      params: {
        format: "js",
        idx: 0,
        n: 1,
        mkt: "pt-br",
      },
    }
  );
  return response.data.images[0];
};

export const fetchWeather = async (
  reqLat: number | undefined,
  reqLon: number | undefined
) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/3.0/onecall",
    {
      params: {
        lat: reqLat,
        lon: reqLon,
        exclude: "minutely,hourly,alerts",
        units: "metric",
        lang: "pt_br",
        appid: `${process.env.OPEN_WEATHER_KEY}`,
      },
    }
  );
  return {
    today: {
      temp: <number>response.data.current.temp,
      humidity: <number>response.data.current.humidity,
      windSpeed: <number>response.data.current.wind_speed,
      windDirection: <number>response.data.current.wind_deg,
      pressure: <number>response.data.current.pressure,
      weather: {
        icon: `code${response.data.current.weather[0].icon}`,
        main: <string>response.data.current.weather[0].main,
        description: <string>response.data.current.weather[0].description,
      },
    },
    tomorrow: {
      maxTemp: <number>response.data.daily[0].temp.max,
      minTemp: <number>response.data.daily[0].temp.min,
      weather: {
        icon: <string>response.data.daily[0].weather[0].icon,
        main: <string>response.data.daily[0].weather[0].main,
        description: <string>response.data.daily[0].weather[0].description,
      },
    },
    afterTomorrow: {
      maxTemp: <number>response.data.daily[1].temp.max,
      minTemp: <number>response.data.daily[1].temp.min,
      weather: {
        icon: <string>response.data.daily[1].weather[0].icon,
        main: <string>response.data.daily[1].weather[0].main,
        description: <string>response.data.daily[1].weather[0].description,
      },
    },
  };
};
