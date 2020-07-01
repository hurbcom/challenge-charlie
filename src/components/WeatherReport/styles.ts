import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  loading: number | undefined;
}
interface WeatherContainerProps {
  temperature?: number | null;
}

export const Wrapper = styled.div`
  font-size: 24px;

  .small {
    font-size: 18px;
  }

  .changeSystemButtonContainer {
    display: flex;
    align-items: flex-start;
    button {
      color: #fff;
      cursor: default;
      font-size: 20px;
    }
  }

  @media (max-width: 550px) {
    font-size: 20px;
    .small {
      font-size: 16px;
    }
  }

  @media (max-width: 450px) {
    font-size: 17px;
    .small {
      font-size: 14px;
    }
  }

  @media (max-width: 380px) {
    font-size: 16px;
    .small {
      font-size: 14px;
    }
  }
`;

export const Container = styled.div`
  width: 550px;
  height: 550px;

  @media (max-width: 550px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 450px) {
    width: 380px;
    height: 380px;
  }

  @media (max-width: 380px) {
    width: 350px;
    height: 380px;
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
  width: 550px;
  height: 500px;
  background: rgba(200, 200, 200, 0.7);
  border-radius: 0 0 3px 3px;

  > svg {
    font-size: 100px;
    color: #444;
    animation: ${rotate360} 1.5s linear infinite;
  }

  @media (max-width: 550px) {
    width: 450px;
    height: 500px;

    > svg {
      font-size: 75px;
    }
  }

  @media (max-width: 450px) {
    width: 380px;
    height: 420px;

    > svg {
      font-size: 50px;
    }
  }

  @media (max-width: 380px) {
    width: 350px;
    height: 370px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: rgb(240, 235, 230);
  padding: 10px;
  border-radius: 3px 3px 0 0;
  max-height: 100px;

  input {
    margin-left: 10px;
    border: none;
    max-width: 400px;
    background: rgb(240, 235, 230);
    color: rgb(125, 125, 125);
    font-size: 24px;
  }

  svg {
    font-size: 70px;
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

  @media (max-width: 550px) {
    max-height: 80px;
  }

  @media (max-width: 450px) {
    max-height: 75px;

    svg {
      font-size: 50px;
    }

    input {
      max-width: 290px;
    }
  }

  @media (max-width: 380px) {
    width: 350px;
    height: 65px;
    input {
      max-width: 250px;
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
  height: 300px;

  svg {
    padding-top: 5px;
    height: 300px;
    width: 300px;
    color: #fff;
  }

  @media (max-width: 550px) {
    svg {
      height: 250px;
      width: 250px;
    }
  }

  @media (max-width: 450px) {
    height: 210px;
    svg {
      height: 200px;
      width: 200px;
    }
  }

  @media (max-width: 380px) {
    height: 190px;
    svg {
      height: 190px;
      width: 190px;
    }
  }
`;

export const WeatherInfo = styled.div`
  margin: 10px 0;
  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
  }
`;

export const TomorrowForecast = styled.div<WeatherContainerProps>`
  padding: 15px 0 20px;
  padding-left: 55%;
  height: 100px;

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

    @media (max-width: 551px) {
    width: 450px;
    height: 90px;
  }

  @media (max-width: 450px) {
    width: 380px;
    height: 80px;
  }

  @media (max-width: 380px) {
    padding: 5px 0 10px;
    padding-left: 53%;
    width: 350px;
    height: 60px;
  }
`;

export const AfterTomorrowForecast = styled.div<WeatherContainerProps>`
  padding: 15px 0 20px;
  padding-left: 55%;
  border-radius: 0 0 3px 3px;
  height: 100px;

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
    @media (max-width: 550px) {
    width: 450px;
    height: 90px;
  }
  @media (max-width: 450px) {
    width: 380px;
    height: 80px;
  }

  @media (max-width: 380px) {
    padding: 5px 0 10px;
    padding-left: 53%;
    width: 350px;
    height: 60px;
  }
`;
