import type { NextPage } from "next";
import { useEffect } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import { GetCurrentCityState } from "../service/GetCurrentCityState";
import * as React from "react";
import { useWheather } from "../service/getWheather";
import Home from "../components/templates/Home";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { debounce } from "../utils/debounce";
import { iconWeather } from "../utils/iconWeather";
import { defaultValueCurrent, noResultFound } from "../Json/currentClimate";
import { variantColor } from "../utils/variantColor";
import { getWindDirection } from "../utils/getWindDirection";
import { textPortuguese } from "../Json/text";
import { formatTemperature } from "../utils/templateStringTemperature";
import { defaultValueForecast, noResultFoundForecast } from "../Json/foreCastClimate";

const Principal: NextPage = () => {
  const [response, setResponse] = React.useState<string>("Carregando");
  const [load, setLoad] = React.useState<boolean>(false);
  const [currentClimate, setCurrentClimate] = React.useState(defaultValueCurrent);
  const [foreCastClimate, setForeCastClimate] = React.useState(defaultValueForecast);
  const [unit, setUnit] = useLocalStorage("unit", "metric");
  const [unitMeasurement, setUnitMeasurement] = React.useState({
    temperature: "C",
    speed: "Km/h",
  });
  const local = useGeoLocation();
  const cidadeEstado = GetCurrentCityState();
  const climate = useWheather();

  const unitTemp = unitMeasurement.temperature
  const unitSpeed = unitMeasurement.speed

  useEffect(() => {
    if (unit === "metric") {
      setUnitMeasurement({
        temperature: "C",
        speed: "Km/h",
      });
    } else if (unit === "imperial") {
      setUnitMeasurement({
        temperature: "F",
        speed: "Mph",
      });
    }
  }, []);

  useEffect(() => {
    if (response !== "Carregando" && response.length > 3) {
      const dataCurrent = climate
        .GetCurrent(response, unit)
        .then((i) => {
          const dados: ICurrentClimateResponse = i;
          const windDirection = getWindDirection(dados.wind.deg);
          const newData = {
            climateFigure: iconWeather(dados.weather[0].icon),
            dayDescription: dados.weather[0].description,
            temperature:formatTemperature(dados.main.temp,unitTemp),
            maxTemperature: formatTemperature(dados.main.temp_max,unitTemp),
            minTemperature: formatTemperature(dados.main.temp_min,unitTemp),
            climate: `${dados.weather[0].description}`,
            humidity: `${dados.main.humidity}%`,
            pressure: `${dados.main.humidity} hPA`,
            wind: `${windDirection} ${Math.floor(dados.wind.speed)} ${unitSpeed}`,
            temperatureNumber: Math.floor(dados.main.temp),
          };
          setCurrentClimate(newData);
        })
        .catch((i) => {
          setCurrentClimate(noResultFound);
        });

      dataCurrent;

      climate
        .GetForecast(response)
        .then((i) => {
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
            temperatureTomorrow: formatTemperature(avgTomorrow,unitTemp),
            maxTemperatureTomorrow: formatTemperature(maxTommorrow,unitTemp),
            minTemperatureTomorrow: formatTemperature(minTommorrow,unitTemp),
            temperatureAfterTomorrow: formatTemperature(avgAfterTomorrow,unitTemp),
            maxTemperatureAfterTomorrow: formatTemperature(maxAfterTommorrow,unitTemp),
            minTemperatureAfterTomorrow: formatTemperature(minAfterTommorrow,unitTemp),
          };

          setForeCastClimate(newData);
        })
        .catch((i) => setForeCastClimate(noResultFoundForecast));
    }
  }, [response, unit]);

  useEffect(() => {
    if (local.loaded) {
      Promise.all([
        getDescriptionLocation(
          local.coordinates?.lat as number,
          local.coordinates?.lng as number
        ),
      ]).then((i) => setResponse(i[0] as string))
      .catch((i) => setResponse('Digite um local'));
    }
  }, [local.loaded]);
  console.log(foreCastClimate);

  const getDescriptionLocation = async (lat: number, lng: number) => {
    return await cidadeEstado.Get(lat as number, lng as number);
  };


  const getColorVariant = React.useCallback(
    (temperature: number, unit: string) => {
      return variantColor(temperature, unit);
    },
    [currentClimate.temperatureNumber, unit]
  );
  const variant = load ? 'White' : getColorVariant(
    Math.round(currentClimate.temperatureNumber),
    unit
  );

  const changeUnit = () => {
    setLoad(true)
    
    if (unit === "metric") {
      setUnit("imperial");
      setUnitMeasurement({
        temperature: "F",
        speed: "Mph",
      });
    } else if (unit === "imperial") {
      setUnit("metric");
      setUnitMeasurement({
        temperature: "C",
        speed: "Km/h",
      });
    }

    setLoad(false)
  };

  const variantMemo = React.useMemo(() => variant, [variant, load]);
  const responseMemo = React.useMemo(() => response, [response]);
  const foreCastClimateMemo = React.useMemo(() => foreCastClimate, [foreCastClimate]);
  const currentClimateMemo = React.useMemo(() => currentClimate, [currentClimate]);

  console.log('variantMemo =>',variantMemo)


  return (
    <>
      <Home
        variant={variantMemo}
        value={responseMemo}
        onClick={debounce(changeUnit, 1000)}
        text={textPortuguese}
        dataCurrent={currentClimateMemo}
        dataForecast={foreCastClimateMemo} 
        onChange={(e) => setResponse(e.target.value)}
      />
    </>
  );
};

export default Principal;
