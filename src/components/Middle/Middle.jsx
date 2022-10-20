import Weather from "../../assets/WeatherIcons/2.svg";
import Compass from "../../assets/WeatherIcons/44.svg";
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
  return (
    <Content color="#161616">
      <TitleContainer>
        <ImgTitleContainer>
          <img src={Compass} alt="Bússola" />
        </ImgTitleContainer>
        <div>
          <p>Previsão do tempo</p>
          <p>Rio de Janeiro, RJ</p>
        </div>
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
