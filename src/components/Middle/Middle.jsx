import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import {
  ContainerWeatherData,
  Content,
  ContentImgLeft,
  ContentDetailsRight,
  TomorrowContainer,
  NextDaysContainer,
  TitleContainer,
  ImgTitleContainer,
  ContainerSpace,
} from "./styled";
import Compass from "@assets/WeatherIcons/44.svg";
import { GeolocalizationIP } from "@services/GeolocalizationIP";
import { styled } from "@mui/material/styles";
import {
  OpenWeatherCityApi,
  OpenWeatherGeoApi,
  OpenWeatherForecastApi,
  OpenWeatherLatLonApi,
} from "@services/OpenWeatherAPI";
import { CustomerContext } from "@providers/CustomerContext";
import { showCityInformation, ChangeColor } from "@/functions/MiddleHelpers";
import { CircularProgress, Grid, Switch } from "@mui/material";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  color: "inherit",
  "& .MuiSwitch-thumb": {
    color: "inherit",
    backgroundColor: "currentColor",
  },
  "& .MuiSwitch-track": {
    color: "inherit",
    backgroundColor: "currentColor",
  },
  "& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
    {
      backgroundColor: "currentColor",
    },
}));

export const Middle = () => {
  const { city, setCity } = useContext(CustomerContext);
  const { coordinate } = useContext(CustomerContext);
  const [temp, setTemp] = useState("");
  const [information, setInformation] = useState(null);
  const [WeatherData, setWeatherData] = useState();
  const [tomorrow, setTomorrow] = useState();
  const [nextDays, setNextDays] = useState();
  const { fahrenheit, setFahrenheit } = useContext(CustomerContext);
  //geolocalização/separar em outro arquivo
  useEffect(() => {
    GeolocalizationIP()
      .get()
      .then((response) => {
        setInformation(response.data);
        setCity(response.data.city);
      })
      .catch((error) => {
        toast.error("Erro ao buscar dados de localização");
      });
  }, []);

  const getCurrentWeatherByCity = (city) => {
    OpenWeatherCityApi(city)
      .get()
      .then((response) => {
        setWeatherData(response.data);
        getForecast(response.data.coord.lat, response.data.coord.lon);
      })
      .catch(() => {
        toast.error("Cidade não encontrada");
      });
  };

  const getCityInformation = (city) => {
    OpenWeatherGeoApi(city)
      .get()
      .then((response) => {
        if (response.data.length > 0) {
          const cityData = response.data[0];
          const cityInformation = {
            city: cityData.name,
            country_code: cityData.country,
            state: cityData.state,
          };
          setInformation({ ...information, ...cityInformation });
        }
      })
      .catch(() => {
        toast.error("Cidade não encontrada");
      });
  };

  const getCurrentWeatherByLatLon = (lat, lon) => {
    OpenWeatherLatLonApi(lat, lon)
      .get()
      .then((response) => {
        setWeatherData(response.data);
        getForecast(response.data.coord.lat, response.data.coord.lon);
        getCityInformation(response.data.name);
      });
  };

  const getForecast = (lat, long) => {
    OpenWeatherForecastApi(lat, long)
      .get()
      .then((response) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const nextDays = new Date();
        nextDays.setDate(nextDays.getDate() + 2);
        nextDays.setHours(0, 0, 0, 0);
        const tomorrowData = response.data.list.filter((item) => {
          const date = new Date(item.dt_txt);
          return date >= tomorrow && date < nextDays;
        });
        const nextDaysData = response.data.list.filter((item) => {
          const date = new Date(item.dt_txt);
          return date >= nextDays;
        });
        const tomorrowTempAcc = tomorrowData.reduce((acc, item) => {
          return acc + item.main.temp;
        }, 0);
        const tomorrowTemp = Math.round(tomorrowTempAcc / tomorrowData.length);
        const nextDaysTempAcc = nextDaysData.reduce((acc, item) => {
          return acc + item.main.temp;
        }, 0);
        const nextDaysTemp = Math.round(nextDaysTempAcc / nextDaysData.length);
        setTomorrow(tomorrowTemp.toFixed(0));
        setNextDays(nextDaysTemp.toFixed(0));
      })
      .catch((error) => {
        toast.error("Erro ao buscar dados de previsão");
      });
  };

  const handleChangeTempFormat = (e) => {
    setFahrenheit(e.target.checked);
  };

  useEffect(() => {
    if (city) {
      getCurrentWeatherByCity(city);
      getCityInformation(city);
    } else if (coordinate && coordinate.length === 2) {
      getCurrentWeatherByLatLon(coordinate[0], coordinate[1]);
    }
  }, [city, coordinate]);

  const ConvertTemp = (temp) => {
    let tempConvert = temp;
    if (fahrenheit) {
      tempConvert = (temp * 9) / 5 + 32;
    }
    return Math.round(tempConvert);
  };

  const tempChar = fahrenheit ? "F" : "C";
  const color = WeatherData ? ChangeColor(WeatherData.main.temp) : "white";
  return (
    <>
      {WeatherData ? (
        <Content>
          <Grid container justifyContent={"flex-end"} alignItems={"center "}>
            <label>ºC</label>
            <div style={{ color }}>
              <MaterialUISwitch
                value={fahrenheit}
                onChange={handleChangeTempFormat}
                style={{ color }}
              />
            </div>
            <label>ºF</label>
          </Grid>
          <TitleContainer>
            <ImgTitleContainer>
              <img src={Compass} alt="Bússola" />
            </ImgTitleContainer>

            <div>
              <p>Previsão do tempo</p>
              <p>{showCityInformation(information)}</p>
            </div>
          </TitleContainer>

          <ContainerWeatherData color={ChangeColor(WeatherData.main.temp)}>
            <ContentImgLeft>
              <img
                src={`../../../src/assets/WeatherIcons/${WeatherData.weather[0].icon}.svg`}
                alt={`${WeatherData.weather[0].description}`}
              ></img>
            </ContentImgLeft>
            <ContentDetailsRight>
              <ContainerSpace space="24px 0px">
                <p>Hoje</p>
                <p>{`${ConvertTemp(WeatherData.main.temp)} °${tempChar}`}</p>
              </ContainerSpace>
              <div>
                <p>{WeatherData.weather[0].description}</p>
              </div>

              <ContainerSpace space="24px 0px">
                <p>Vento: {WeatherData.wind.speed}KM/H</p>
                <p>Umidade: {WeatherData.main.humidity}%</p>
                <p>Pressão: {WeatherData.main.pressure}hPA</p>
              </ContainerSpace>
            </ContentDetailsRight>
          </ContainerWeatherData>

          <TomorrowContainer color={ChangeColor(tomorrow)}>
            <ContainerSpace space="6px 0px">
              <p>Amanhã</p>
              <p>{`${ConvertTemp(tomorrow)} °${tempChar}`}</p>
            </ContainerSpace>
          </TomorrowContainer>

          <NextDaysContainer color={ChangeColor(nextDays)}>
            <ContainerSpace space="6px 0px">
              <p>Depois de Amanhã</p>
              <p>{`${ConvertTemp(nextDays)} º${tempChar}`}</p>
            </ContainerSpace>
          </NextDaysContainer>
        </Content>
      ) : (
        <Content>
          <CircularProgress />
        </Content>
      )}
    </>
  );
};
