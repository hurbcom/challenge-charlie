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

export const fetchWeather = async (reqLat: number, reqLon: number) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/3.0/onecall",
    {
      params: {
        lat: reqLat,
        lon: reqLon,
        exclude: "minutely,hourly,alerts",
        units: "metric",
        lang: "pt-br",
        APPID: `${process.env.OPEN_WEATHER_KEY}`,
      },
    }
  );
  return response.data;
};
