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
} from "./styled";
import Compass from "@assets/WeatherIcons/44.svg";
import { GeolocalizationIP } from "@services/GeolocalizationIP";
import {
  OpenWeatherCityApi,
  OpenWeatherGeoApi,
  OpenWeatherForecastApi,
  OpenWeatherLatLonApi,
} from "@services/OpenWeatherAPI";
import { CustomerContext } from "@providers/CustomerContext";
import { showCityInformation, ChangeColor } from "@/functions/MiddleHelpers";
import { CircularProgress } from "@mui/material";

export const Middle = () => {
  const { city, setCity } = useContext(CustomerContext);
  const { coordinate } = useContext(CustomerContext);
  const [temp, setTemp] = useState("");
  const [information, setInformation] = useState(null);
  const [WeatherData, setWeatherData] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const [tomorrow, setTomorrow] = useState();
  const [nextDays, setNextDays] = useState();
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

  useEffect(() => {
    if (city) {
      getCurrentWeatherByCity(city);
      getCityInformation(city);
    } else if (coordinate && coordinate.length === 2) {
      getCurrentWeatherByLatLon(coordinate[0], coordinate[1]);
    }
  }, [city, coordinate]);

  const ConvertTemp = (temp) => {
    let Convert = (temp * 9) / 5 + 32;

    setTemp(`${Convert}°F`);

    // setFahrenheit(false);
    // setTemp(`${temp}°C`);
  };

  const HandleClick = (temp) => {
    ConvertTemp(Math.round(temp));
  };
  return (
    <>
      {WeatherData ? (
        <Content color={ChangeColor(WeatherData.main.temp)}>
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
              <div>
                <p>Hoje</p>
                <p className="clickText" onClick={HandleClick}>
                  {`${Math.round(WeatherData.main.temp)} °C`}
                </p>
              </div>
              <div>
                <p>{WeatherData.weather[0].description}</p>
              </div>
              <div>
                <p>Vento: {WeatherData.wind.speed}KM/H</p>
                <p>Umidade: {WeatherData.main.humidity}%</p>
                <p>Pressão: {WeatherData.main.pressure}hPA</p>
              </div>
            </ContentDetailsRight>
          </ContainerWeatherData>

          <TomorrowContainer color={ChangeColor(tomorrow)}>
            <p>Amanhã</p>
            <p className="clickText">{`${tomorrow} °C`}</p>
          </TomorrowContainer>

          <NextDaysContainer color={ChangeColor(nextDays)}>
            <p>Depois de Amanhã</p>
            <p className="clickText">{`${nextDays} ºC`}</p>
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
