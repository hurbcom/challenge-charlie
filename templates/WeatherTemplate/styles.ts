import styled from 'styled-components';

export const Background = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: ${props => `url(${props.backgroundUrl})`};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RootCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

export const BigCard = styled.div`
  background-color: rgba(234, 192, 39, 0.7);
  height: 55%;
  display: flex;
  flex-direction: row;
`;

export const SmallCard = styled.div`
  height: 15%;
  width: 100%;
  background-color: white;
`;

export const InputCard = styled(SmallCard)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 24px;
`;

export const TopSmallCard = styled(SmallCard)`
  background-color: rgba(250, 204, 5, 0.9);
  height: 15%;
`;

export const BottomSmallCard = styled(SmallCard)`
  background-color: rgba(182, 149, 3, 0.9);
  height: 15%;
`;

export const CurrentWeatherInfoColumn = styled.div`
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  padding-left: 10%;
`;

export const CurrentTemperatureBox = styled.div`
  width: auto;
`;

export const TemperatureLabelParagraph = styled.p`
  font-size: 1.5rem;
  font-family: Signika, Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-weight: 300;
  color: white;
  width: auto;
  margin: 0;
`

export const TemperatureParagraph = styled.p`
  font-size: 2rem;
  font-family: Signika, Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-weight: 300;
  color: white;
  width: auto;
  margin: 0;
`;
