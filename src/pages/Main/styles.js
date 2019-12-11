import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    width: 100%
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
`;

export const WeatherContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const WeatherDiv = styled.div`
  width: 100%;
  height: 20%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
    text-align: center;
    margin: auto;
  }

  .day {
    font-size: 1.3em;
  }
  .temperature {
    font-size: 1.3em;
  }
  .description {
    font-size: 1.3em;
    margin: 5px 0;
    text-transform: capitalize;
  }
  .wind {
    font-size: 1.1em;
  }
  .humidity {
    font-size: 1.1em;
  }
  .pressure {
    font-size: 1.1em;
  }

  &:nth-child(1) {
    height: 60%;
    background: ${props => {
      if (props.temp <= 15) return '#004BFF';
      if (props.temp > 15 && props.temp < 35) return '#ffb600';
      if (props.temp <= 35) return '#ff0000';
      return '#ccc';
    }};
  }
  &:nth-child(2) {
    background: ${props => {
      if (props.temp <= 15) return '#0040d9';
      if (props.temp > 15 && props.temp < 35) return '#ffda00';
      if (props.temp <= 35) return '#d60000';
      return '#a0a0a0';
    }};
  }
  &:nth-child(3) {
    background: ${props => {
      if (props.temp <= 15) return '#0036d9';
      if (props.temp > 15 && props.temp < 35) return '#b79403';
      if (props.temp <= 35) return '#b70000';
      return '#878787';
    }};
  }

  @media (min-width: 768px) {
    & {
      align-items: inherit;
      justify-content: inherit;
      align-items: center;
      font-size: 22px;

      div {
        width: 50%;
        text-align: inherit;
        margin: 0;
        margin-left: auto;

        .description {
          margin: 20px 0;
        }
      }

      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &:nth-child(1) {
        flex-direction: row;
        width: 100%;
      }
    }
  }
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  background-image: ${props => `url('../src/assets/icons/${props.icon}.svg')`};
`;

export const Meteocons = styled.p`
  font-family: 'MeteoconsRegular';
  font-size: 150px;
  width: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;

  @media (min-width: 768px) {
    & {
      font-size: 200px;
    }
  }
`;
