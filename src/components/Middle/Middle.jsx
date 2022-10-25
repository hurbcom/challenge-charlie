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
import Weather from "../../assets/WeatherIcons/2.svg";
import Compass from "../../assets/WeatherIcons/44.svg";
import { GeolocalizationIP } from "../../services/GeolocalizationIP";
import {
  OpenWeatherCityApi,
  OpenWeatherGeoApi,
  OpenWeatherForecastApi,
} from "../../services/OpenWeatherAPI";
import { CustomerContext } from "../../providers/CustomerContext";

export const Middle = () => {
  const { city, setCity } = useContext(CustomerContext);
  const [information, setInformation] = useState(null);
  const [WeatherData, setWeatherData] = useState();
  const [fahrenheit, setFahrenheit] = useState(false);
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

  //cidade/separar em outro arquivo
  useEffect(() => {
    if (city) {
      OpenWeatherCityApi(city)
        .get()
        .then((response) => {
          setWeatherData(response.data);
          getForecast(response.data.coord.lat, response.data.coord.lon);
        })
        .catch(() => {
          toast.error("Cidade não encontrada");
        });
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
    }
  }, [city]);
  //separar em outro arquivo
  const ChangeColor = (temp) => {
    if (temp > 35) {
      return "#AA2429";
    } else if (temp < 15) {
      return "#0954A5";
    } else {
      return "#F0C000";
    }
  };
  //separar em outro arquivo
  const ConvertTemp = (temp) => {
    if (fahrenheit === false) {
      let Convert = (temp * 9) / 5 + 32;
      setFahrenheit(true);
      return `${Convert}°F`;
    } else {
      setFahrenheit(false);
      return `${temp}°C`;
    }
  };

  return (
    <Content color={ChangeColor(24)}>
      <TitleContainer>
        <ImgTitleContainer>
          <img src={Compass} alt="Bússola" />
        </ImgTitleContainer>
        {information ? (
          <div>
            <p>Previsão do tempo</p>
            <p>
              {`${information.city}, ${information.state}, ${information.country_code}`}
            </p>
          </div>
        ) : null}
      </TitleContainer>

      {WeatherData ? (
        <>
          <ContainerWeatherData color={ChangeColor(WeatherData.main.temp)}>
            <ContentImgLeft>
              <img src={Weather} alt=""></img>
            </ContentImgLeft>
            <ContentDetailsRight>
              <div>
                <p>Hoje</p>
                <p>{Math.round(WeatherData.main.temp)}º</p>
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
            <p>{tomorrow}º</p>
          </TomorrowContainer>

          <NextDaysContainer color={ChangeColor(nextDays)}>
            <p>Depois de Amanhã</p>
            <p>{nextDays}º</p>
          </NextDaysContainer>
        </>
      ) : null}
    </Content>
  );
};
