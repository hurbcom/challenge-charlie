import React, { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "usehooks-ts";
import IMountedData from "./api/interfaces/IMountedData";
import style from "../styles/Home.module.scss";
import {
  feTheme,
  freTheme,
  fTheme,
  mfTheme,
  mqTheme,
  pbTheme,
  qTheme,
} from "../styles/themes";
import Weather from "../components/weather-icons/Weather";
import Daily from "../components/dailies-info/Daily";

export default function Home() {
  const [data, setData] = useState<IMountedData>();
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const debouncedValue = useDebounce<string>(city, 1300);
  const [bgColor, setBGColor] = useState(pbTheme);

  const fetchWeatherData = async () => {
    if (city.length > 3) {
      setLoading(true);
      try {
        const response = await fetch(`/api/cityWeatherInfo?q=${city}`);
        const resultData = await response.json();
        console.log(resultData);
        setData(resultData);
        getColor(resultData.temp);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    debouncedValue ? fetchWeatherData() : setData(undefined);
  }, [debouncedValue]);

  const getColor = (temperature: number) => {
    return temperature < -10
      ? setBGColor(feTheme)
      : temperature >= -10 && temperature < -1
      ? setBGColor(mfTheme)
      : temperature >= 0 && temperature < 10
      ? setBGColor(fTheme)
      : temperature >= 10 && temperature < 20
      ? setBGColor(freTheme)
      : temperature >= 20 && temperature < 30
      ? setBGColor(qTheme)
      : temperature >= 30
      ? setBGColor(mqTheme)
      : pbTheme;
  };

  return (
    <ThemeProvider theme={bgColor}>
      <div
        className={style.container}
        style={{
          backgroundColor: bgColor.palette.primary.main,
        }}
      >
        <FormControl variant="outlined" className={style.formControll}>
          <InputLabel
            className={style.inputLabel}
            color="primary"
            htmlFor="input-with-icon-adornment"
          >
            {data && (
              <div>
                {data.cityName}, {data.country}
              </div>
            )}
          </InputLabel>
          <Input
            color="primary"
            className={style.input}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={city}
            onChange={(e) => handleCityChange(e)}
          />
        </FormControl>

        {!data || isLoading ? (
          <div>
            <p>Clima: Loading</p>
            <p>Temperatura: Loading</p>
            <p>Máxima: Loading</p>
            <p>Mínima: Loading</p>
            <p>Umidade: Loading%</p>
            <p>Próximos dias:</p>
            <p>Max: Loading</p>
            <p>Min: Loading</p>
            <p>Amanhã: Loading</p>
            <p>Max: Loading</p>
            <p>Min:Loading </p>
            <p>Depois de amanhã: Loading</p>
            <p>Max: Loading</p>
            <p>Min: Loading</p>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: bgColor.palette.primary.main,
            }}
          >
            <Weather
              weather={data.main}
              width={"100"}
              height={"100"}
              color={"#000"}
            ></Weather>

            <p>Temperatura: {data.temp}</p>
            <p>Máxima: {data.max_temp}</p>
            <p>Mínima: {data.min_temp}</p>
            <p>Umidade: {data.humidity}%</p>
            <p>Próximos dias:</p>

            <footer className={style.footer}>
              <div className={style.daily}>
                <p>Amanhã:</p>
                <Daily
                  weather={data.main_tomorrow}
                  maxTemp={data.max_temp_tomorrow}
                  minTemp={data.min_temp_tomorrow}
                  width={"40"}
                  height={"40"}
                  color={"#000"}
                />
              </div>

              <div className={style.daily}>
                <p>Depois de amanhã:</p>
                <Daily
                  weather={data.main_atomorrow}
                  width={"40"}
                  height={"40"}
                  color={"#000"}
                  maxTemp={data.max_temp_atomorrow}
                  minTemp={data.min_temp_atomorrow}
                />
              </div>
            </footer>

            <img src={data.image} alt="" />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
