import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  loading: number | undefined;
}

interface WeatherContainerProps {
  temperature?: number | null;
}

export const Wrapper = styled.div`
  .changeSystemButtonContainer {
    display: flex;
    align-items: flex-start;

    button {
      color: #fff;
      cursor: default;
    }
  }
`;

export const Container = styled.div`
  font-size: 18px;
  width: 440px;
  height: 420px;

  @media (max-width: 450px) {
    width: 100vw;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingScreen = styled.div<ContainerProps>`
  display: none;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.loading &&
    css`
      display: flex;
    `}
  width: 440px;
  height: 334px;
  background: rgba(200, 200, 200, 0.7);
  border-radius: 0 0 3px 3px;

  svg {
    font-size: 70px;
    color: #444;
    animation: ${rotate360} 1.5s linear infinite;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: rgb(240, 235, 230);
  padding: 10px;
  border-radius: 3px 3px 0 0;

  input {
    margin-left: 10px;
    font-size: 24px;
    border: none;
    background: rgb(240, 235, 230);
    color: rgb(125, 125, 125);

    @media (max-width: 450px) {
      max-width: 75vw;
    }
  }

  svg {
    font-size: 50px;
    color: rgb(125, 125, 125);
    transition: color 0.3s;

    &:hover {
      color: rgb(100, 170, 150);
    }
  }

  .autocomplete-dropdown-container {
    background: rgb(240, 235, 230);
    color: rgb(125, 125, 125);
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    min-width: 330px;
    max-width: 440px;

    &:hover {
      background-color: rgb(220, 220, 220);
    }
  }
`;

export const ContentContainer = styled.div<ContainerProps>`
  ${(props) =>
    props.loading &&
    css`
      display: none;
    `}
`;

export const TodayWeather = styled.div<WeatherContainerProps>`
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  background: rgba(245, 229, 27, 0.6);
  ${(props) =>
    props.temperature &&
    props.temperature > 35 &&
    css`
      background: rgba(255, 51, 0, 0.6);
    `}
  ${(props) =>
    props.temperature &&
    props.temperature < 15 &&
    css`
      background: rgba(0, 51, 255, 0.6);
    `}
`;

export const WeatherIconContainer = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding-top: 5px;
    height: 200px;
    width: 200px;
    color: #fff;
  }
`;

export const WeatherInfo = styled.div`
  margin: 10px 0;
  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
  }
  .small {
    font-size: 14px;
  }
`;

export const TomorrowForecast = styled.div<WeatherContainerProps>`
  padding: 5px 0 20px;
  padding-left: 55%;

  background: rgba(251, 205, 8, 0.9);
  ${(props) =>
    props.temperature &&
    props.temperature > 35 &&
    css`
      background: rgba(204, 51, 0, 0.9);
    `}
  ${(props) =>
    props.temperature &&
    props.temperature < 15 &&
    css`
      background: rgba(0, 51, 204, 0.9);
    `}
`;

export const AfterTomorrowForecast = styled.div<WeatherContainerProps>`
  padding: 5px 0 20px;
  padding-left: 55%;
  border-radius: 0 0 3px 3px;

  background: rgba(181, 149, 4, 1);
  ${(props) =>
    props.temperature &&
    props.temperature > 35 &&
    css`
      background: rgba(255, 51, 51, 1);
    `}
  ${(props) =>
    props.temperature &&
    props.temperature < 15 &&
    css`
      background: rgba(51, 51, 255, 1);
    `}
`;
