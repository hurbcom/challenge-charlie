import { noResultFound } from "../Json/currentClimate";
import { noResultFoundForecast } from "../Json/foreCastClimate";
import { getWindDirection } from "../utils/getWindDirection";
import { iconWeather } from "../utils/iconWeather";
import { formatTemperature } from "../utils/templateStringTemperature";
import Wheather from "./getWheather";

export const updateData = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  response: string,
  climate: Wheather,
  unit: any,
  language: any,
  unitSpeed: string,
  unitTemp: string,
  setCurrentClimate: React.Dispatch<React.SetStateAction<ICurrentClimate>>,
  setForeCastClimate: React.Dispatch<React.SetStateAction<IForecastClimate>>,
  humidity:string,
  pressure:string,
  wind:string
) => {
  await setIsLoading(true);
  if (response.length > 3) {
    climate
      .GetCurrent(response, unit, language)
      .then((i: ICurrentClimateResponse) => {
        const dados: ICurrentClimateResponse = i;
        const windDirection = getWindDirection(dados.wind.deg, language);
        const climateText = `${dados.weather[0].description}`;
        const humidityText = `${humidity}: ${dados.main.humidity}%`;
        const pressureText = `${pressure}: ${dados.main.humidity} hPA`;
        const windText = `${wind}: ${windDirection} ${Math.floor(
          dados.wind.speed
        )} ${unitSpeed}`;

        const newData = {
          climateFigure: iconWeather(dados.weather[0].icon),
          dayDescription: dados.weather[0].description,
          temperature: formatTemperature(dados.main.temp, unitTemp),
          maxTemperature: formatTemperature(dados.main.temp_max, unitTemp),
          minTemperature: formatTemperature(dados.main.temp_min, unitTemp),
          climate: climateText,
          humidity: humidityText,
          pressure: pressureText,
          wind: windText,
          temperatureNumber: Math.floor(dados.main.temp),
        };
        setCurrentClimate(newData);
        setIsLoading(false);
      })
      .catch((i: any) => {
        setCurrentClimate(noResultFound);
        setIsLoading(false);
      });
    climate
      .GetForecast(response, unit, language)
      .then((i: IForecastClimateResponse) => {
        const dados: IForecastClimateResponse = i;
        const dataTomorrow = dados.list
          .filter(
            (i) => new Date(i.dt_txt).getDate() === new Date().getDate() + 1
          )
          .map((i) => i.main);
        const minTommorrow = Math.min(
          ...dataTomorrow.map((i: any) => i?.temp_min)
        );
        const maxTommorrow = Math.max(
          ...dataTomorrow.map((i: any) => i?.temp_max)
        );
        const sumTomorrow = dataTomorrow.reduce(function (
          accumulator,
          curValue: any
        ) {
          return accumulator + curValue?.temp;
        },
        0);
        const avgTomorrow = sumTomorrow / dataTomorrow.length;
        const dataAfterTomorrow = dados.list
          .filter(
            (i) => new Date(i.dt_txt).getDate() === new Date().getDate() + 2
          )
          .map((i) => i.main);
        const sumAfterTomorrow = dataAfterTomorrow.reduce(function (
          accumulator,
          curValue: any
        ) {
          return accumulator + curValue?.temp;
        },
        0);
        const avgAfterTomorrow = sumAfterTomorrow / dataAfterTomorrow.length;
        const minAfterTommorrow = Math.min(
          ...dataAfterTomorrow.map((i: any) => i?.temp_min)
        );
        const maxAfterTommorrow = Math.max(
          ...dataAfterTomorrow.map((i: any) => i?.temp_max)
        );
        const newData = {
          temperatureTomorrow: formatTemperature(avgTomorrow, unitTemp),
          maxTemperatureTomorrow: formatTemperature(maxTommorrow, unitTemp),
          minTemperatureTomorrow: formatTemperature(minTommorrow, unitTemp),
          temperatureAfterTomorrow: formatTemperature(
            avgAfterTomorrow,
            unitTemp
          ),
          maxTemperatureAfterTomorrow: formatTemperature(
            maxAfterTommorrow,
            unitTemp
          ),
          minTemperatureAfterTomorrow: formatTemperature(
            minAfterTommorrow,
            unitTemp
          ),
        };

        setForeCastClimate(newData);
        setIsLoading(false);
      })
      .catch((i: any) => {
        setForeCastClimate(noResultFoundForecast);
        setIsLoading(false);
      });
  }
};
