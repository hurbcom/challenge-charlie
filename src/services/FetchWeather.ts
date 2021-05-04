import axios from "axios";

interface FetchWeatherServiceProps {
  latitude: number;
  longitude: number;
}

interface Temperature {
  celsius: number;
  fahrenheit: number;
}

interface Weather {
  today: {
    temperature: Temperature;
    condition: string;
    wind: number;
    humidity: number;
    pressure: number;
    icon: string;
  };
  tomorrow: {
    label: string;
    temperature: Temperature;
  };
  afterTomorrow: {
    label: string;
    temperature: Temperature;
  };
}

const FetchWeatherService = async ({
  latitude,
  longitude,
}: FetchWeatherServiceProps): Promise<Weather> => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=pt_br&exclude=part,minutely,hourly&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_ACCESS_TOKEN}`
  );

  const weather: Weather = {
    today: {
      temperature: {
        celsius: data.current.temp,
        fahrenheit: Math.floor(data.current.temp * 1.8 + 32),
      },
      condition: data.current.weather[0].description,
      wind: data.current.wind_speed,
      humidity: data.current.humidity,
      pressure: data.current.pressure,
      icon: data.current.weather[0].icon,
    },
    tomorrow: {
      label: "amanhã",
      temperature: {
        celsius: data.daily[0].temp.day,
        fahrenheit: Math.floor(data.daily[0].temp.day * 1.8 + 32),
      },
    },
    afterTomorrow: {
      label: "depois de amanhã",
      temperature: {
        celsius: data.daily[1].temp.day,
        fahrenheit: Math.floor(data.daily[1].temp.day * 1.8 + 32),
      },
    },
  };

  return weather;
};

export default FetchWeatherService;
