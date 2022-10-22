import { useState, useEffect } from "react";
import Weather from "../../assets/WeatherIcons/2.svg";
import Compass from "../../assets/WeatherIcons/44.svg";
import { GeolocalizationIP } from "../../services/GeolocalizationIP";
import { OpenWeatherCityApi } from "../../services/OpenWeatherAPI";
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
export const Middle = () => {
  const [information, setInformation] = useState(null);
  const [city, setCity] = useState();
  const [WeatherData, setWeatherData] = useState();
  //geolocalização
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
  //cidade
  useEffect(() => {
    OpenWeatherCityApi(city)
      .get()
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        toast.error("Cidade não encontrada");
      });
  }, [city]);

  const ChangeColor = (temp) => {
    if (temp > 30) {
      return "red";
    } else if (temp > 20) {
      return "orange";
    } else if (temp > 10) {
      return "yellow";
    } else if (temp > 0) {
      return "blue";
    }
  };
  return (
    <Content color="black">
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
                <p>{WeatherData.main.temp}º</p>
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

          <TomorrowContainer color={ChangeColor(WeatherData.main.temp)}>
            <p>Amanhã</p>
            <p>32º</p>
          </TomorrowContainer>

          <NextDaysContainer color={ChangeColor(WeatherData.main.temp)}>
            <p>Depois de Amanhã</p>
            <p>30º</p>
          </NextDaysContainer>
        </>
      ) : null}
    </Content>
  );
};
