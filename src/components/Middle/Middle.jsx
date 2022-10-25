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
import { OpenWeatherCityApi } from "../../services/OpenWeatherAPI";

export const Middle = () => {
  const [currentCity, setCurrentCity] = useState(null);
  const [information, setInformation] = useState(null);
  const [WeatherData, setWeatherData] = useState();
  const [fahrenheit, setFahrenheit] = useState(false);
  //geolocalização/separar em outro arquivo
  useEffect(() => {
    GeolocalizationIP()
      .get()
      .then((response) => {
        setInformation(response.data);
        setCurrentCity(response.data.city);
      })
      .catch((error) => {
        toast.error("Erro ao buscar dados de localização");
      });
  }, []);
  //cidade/separar em outro arquivo
  useEffect(() => {
    OpenWeatherCityApi(currentCity)
      .get()
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        toast.error("Cidade não encontrada");
      });
  }, [currentCity]);
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
              {information.city},{information.state},{information.country_code}
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

          <TomorrowContainer color={ChangeColor(38)}>
            <p>Amanhã</p>
            <p>32º</p>
          </TomorrowContainer>

          <NextDaysContainer color={ChangeColor(18)}>
            <p>Depois de Amanhã</p>
            <p>30º</p>
          </NextDaysContainer>
        </>
      ) : null}
    </Content>
  );
};
