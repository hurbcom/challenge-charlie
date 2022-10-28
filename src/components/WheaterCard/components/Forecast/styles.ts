import styled from 'styled-components';

interface WeatherInfoProps {
  temperature: number | undefined
  dayShow: "tomorrow" | "afterTomorrow"
}

function tomorrowBackgroundBasedOnTemperature(temperature?: number) {
  if (temperature || temperature === 0) {
    if (temperature > 35) return 'rgba(204, 51, 0, 0.9)';
    else if (temperature < 15) return 'rgba(0, 51, 204, 0.8)';
    else return 'rgba(251, 205, 8, 0.9);'
  } else {
    return 'rgba(75,75,75, 0.9)'
  }
}

function afterTomorrowBackgroundBasedOnTemperature(temperature?: number) {
  if (temperature || temperature === 0) {
    if (temperature > 35) return 'rgba(255, 51, 51, 1)';
    else if (temperature < 15) return 'rgba(51, 51, 255, 1)';
    else return 'rgba(181, 149, 4, 1)';
  } else {
    return 'rgba(75,75,75, 1)'
  }
}

export const ForecastContainer = styled.div<WeatherInfoProps>`
  background-color: ${(props) => props.dayShow === "tomorrow" ? tomorrowBackgroundBasedOnTemperature(props.temperature) : afterTomorrowBackgroundBasedOnTemperature(props.temperature)};
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 0.5rem;
  border-radius: 8px;
  
  transition: all 0.6s;
  &:hover {
    filter: brightness(0.85);
  }
  
  div {
    width: 50%;
  }

  .minMaxContainer {
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
    color: whitesmoke;
    font-size: 1.7rem;
    line-height: 1.2;
    gap: 0.5rem;
    cursor: pointer;
  }

  span {
    line-height: 1.3;
    font-size: 1.7rem;
    color: whitesmoke;
  }

  @media (max-width: 795px) {
    align-items: flex-start;
    padding-left: 2rem;

    div {
      width: 100%;
    }
  }

  @media (max-width: 300px) {
    padding-left: 1rem;
    span {
      font-size: 1.5rem;
    }
  }



`