import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
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
import Daily from "../components/dailies-info/Daily";
import CurrentInfo from "../components/dailies-info/CurrentInfo";
import ReactLoading from "react-loading";
import ICoordinates from "./api/interfaces/ICoordinates";

export default function Home() {
  const [data, setData] = useState<IMountedData>();
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const debouncedValue = useDebounce<string>(city, 1300);
  const [bgColor, setBGColor] = useState(pbTheme);
  const [location, setLocation] = useState<ICoordinates>();
  const regEx = new RegExp(/[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/);
  const [hasError, setHasError] = useState(false);

  const fetchWeatherData = async () => {
    // checks if the city name contains special characters
    if (regEx.test(city)) {
      setHasError(true);
      setData(undefined);
      return;
    }

    setLoading(true);

    // fetches the weather data from the api
    try {
      const response = await fetch(`/api/cityWeatherInfo?q=${city}`);
      const resultData = await response.json();

      setLoading(false);

      // checks if the api returned an error or if the object is empty
      if (resultData.error || Object.keys(resultData).length === 0) {
        setData(undefined);
        setBGColor(pbTheme);
        setHasError(true);
        return;
      }

      setHasError(false);

      // sets the data and the background color
      setData(resultData);
      getColor(resultData.temp);

      setHasError(false);
    } catch (error) {
      // sets the error state to true
      console.log(error.message);
      setHasError(true);
      setLoading(false);
      console.log("error");
    }
  };

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };

  // gets the user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  // fetches the weather data based on the user's location
  const fetchGeoLocationData = async () => {
    setLoading(true);
    // fetches the weather data from the api
    try {
      const response = await fetch(
        `/api/geoLocation?latitude=${location?.latitude}&longitude=${location?.longitude}`
      );
      const resultData = await response.json();

      // checks if the api returned an error or if the object is empty
      if (resultData.error || Object.keys(resultData).length === 0) {
        setData(undefined);
        setBGColor(pbTheme);
        setHasError(true);
        return;
      }

      setHasError(false);

      // sets the data and the background color
      setCity(resultData.results[0].components.city);
      getColor(resultData.temp);
      setLoading(false);
    } catch (error) {
      // sets the error state to true
      setHasError(true);
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      fetchGeoLocationData();
    }
  }, [location]);

  // fetches the weather data when the user stops typing
  useEffect(() => {
    debouncedValue ? fetchWeatherData() : setData(undefined);
    // checks if the city name contains special characters
    if (hasError && debouncedValue.length > 3) {
      setHasError(false);
    }
  }, [debouncedValue]);

  // sets the background color based on the temperature
  const getColor = (temperature: number) => {
    return temperature < -10
      ? setBGColor(feTheme)
      : temperature >= -10 && temperature < -1
      ? setBGColor(mfTheme)
      : temperature >= -1 && temperature < 10
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
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: bgColor.palette.primary.contrastText,
        }}
      >
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
              data-testid="input-component"
            />
          </FormControl>

          {hasError ? (
            <Alert severity="error" style={{ width: "60%", margin: "0 auto" }}>
              <AlertTitle>Error</AlertTitle>
              <strong>
                <p>Não foi possível encontrar uma cidade, busque novamente</p>
              </strong>
            </Alert>
          ) : !data || (isLoading && city.length < 2) ? (
            <ReactLoading
              type={"spin"}
              color={"#000"}
              height={100}
              width={100}
              className={style.main}
              data-testid="loading-component"
            />
          ) : (
            <div>
              <div className={style.currentInfo}>
                <CurrentInfo
                  temp={data.temp}
                  maximumTemp={data.max_temp}
                  minimumTemp={data.min_temp}
                  humidity={data.humidity}
                  weather={data.main}
                  description={data.description}
                  windSpeed={data.wind_speed}
                  windDegree={data.wind_deg}
                  isDesktop={true}
                  color={bgColor.palette.primary.contrastText}
                  data-testid="current-info-component"
                ></CurrentInfo>
              </div>

              <div className={style.footer}>
                <div className={style.daily}>
                  <Daily
                    title="Amanhã"
                    weather={data.main_tomorrow}
                    maxTemp={data.max_temp_tomorrow}
                    minTemp={data.min_temp_tomorrow}
                    width={"40"}
                    height={"40"}
                    color={bgColor.palette.primary.contrastText}
                  />
                </div>

                <div className={style.daily}>
                  <Daily
                    title="Depois de amanhã"
                    weather={data.main_atomorrow}
                    width={"40"}
                    height={"40"}
                    color={bgColor.palette.primary.contrastText}
                    maxTemp={data.max_temp_atomorrow}
                    minTemp={data.min_temp_atomorrow}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
