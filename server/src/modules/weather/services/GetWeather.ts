import ConvertToDirection from "@shared/helpers/functions/DegreeToDirectionConverter";
import UpperCaseConverter from "@shared/helpers/functions/UpperCaseConverter";

const axios = require("axios").default;

type Request = {
  query: string;
  units: "metric" | "imperial";
};

type Weather = {
  weatherId: number;
  temp: number;
  unit: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
};

type WeatherResponse = {
  weathers: Array<Weather>;
};

class GetWeather {
  public execute({ query, units }: Request): Promise<WeatherResponse> {
    return new Promise<WeatherResponse>((resolve, reject) => {
      try {
        let url = process.env.REACT_APP_OPEN_WEATHER_URL as string;
        let apiKey = process.env.REACT_APP_OPEN_WEATHER_APIKEY as string;
        let baseParams = `appid=${apiKey}&q=${query}&units=${units}&cnt=3&lang=pt_br`;

        const response = (axios
          .get(`${url}?${baseParams}`)
          .then((response) => {
            if (response.status === 200) {
              let formattedData = response.data?.list.map((item) => {
                return {
                  weatherId: item.weather[0].id,
                  temp: +item.main.temp,
                  unit: units === "metric" ? "°C" : "°F",
                  description: UpperCaseConverter(item.weather[0].description),
                  wind: `${ConvertToDirection(item.wind.deg)} ${
                    units === "metric"
                      ? (item.wind.speed * 3.6).toFixed(1)
                      : item.wind.speed.toFixed(1)
                  }${units === "metric" ? "km/h" : "mph"}`,
                  humidity: `${item.main.humidity}%`,
                  pressure: `${item.main.pressure}hPA`,
                };
              });
              return {
                weathers: formattedData,
              };
            }
          })) as WeatherResponse;

        resolve(response);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data.message);
          reject(error);
        } else if (error instanceof Error) {
          console.error(error.message);
          reject(error);
        } else {
          console.error("Unexpected error");
          reject(new Error("Unexpected error"));
        }
      }
    });
  }
}

export default GetWeather;
