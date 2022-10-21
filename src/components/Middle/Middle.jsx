import { useState, useEffect } from "react";
import { Toastify } from "toastify";
import Weather from "../../assets/WeatherIcons/2.svg";
import Compass from "../../assets/WeatherIcons/44.svg";
import { GeolocalizationIP } from "../../services/GeolocalizationIP";
import { OpenWeatherCityApi } from "../../services/OpenWeatherAPI";
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
  const [city, setCity] = useState(null);
  //geolocalização
  useEffect(() => {
    GeolocalizationIP()
      .get()
      .then((response) => {
        setInformation(response.data);
        setCity(response.data.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //cidade

  return (
    <Content color="#161616">
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

      <ContainerWeatherData color="#F0C000">
        <ContentImgLeft>
          <img src={Weather} alt=""></img>
        </ContentImgLeft>
        <ContentDetailsRight>
          <div>
            <p>Hoje</p>
            <p>32º</p>
          </div>
          <div>
            <p>Ensolarado</p>
          </div>
          <div>
            <p>Vento: NO 6.4KM/H</p>
            <p>Umidade: 80%</p>
            <p>Pressão: 1003hPA</p>
          </div>
        </ContentDetailsRight>
      </ContainerWeatherData>

      <TomorrowContainer color="#F0C000">
        <p>Amanhã</p>
        <p>32º</p>
      </TomorrowContainer>

      <NextDaysContainer color="#F0C000">
        <p>Depois de Amanhã</p>
        <p>30º</p>
      </NextDaysContainer>
    </Content>
  );
};
