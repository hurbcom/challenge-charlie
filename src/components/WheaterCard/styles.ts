import styled from 'styled-components';


function todayBackgroundBasedOnTemperature(temperature?: number) {
  if (temperature || temperature === 0) {
    if (temperature > 35) return 'rgba(255, 51, 0, 0.9)';
    else if (temperature < 15) return 'rgba(0, 51, 255, 0.9)';
    else return 'rgba(233,215,0, .9);'
  } else {
    return 'rgba(75,75,75, 0.8)'
  }
}

function tomorrowBackgroundBasedOnTemperature(temperature?: number) {
  if (temperature || temperature === 0) {
    if (temperature > 35) return 'rgba(204, 51, 0, 0.9)';
    else if (temperature < 15) return 'rgba(0, 51, 204, 0.9)';
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


export const WeatherCardContainer = styled.main`
  width: 55rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  

  @media (max-width: 795px) {
    width: 40rem;
  }

  @media (max-width: 585px) {
    width: 35rem;
  }

  @media (max-width: 415px) {
    width: 24.5rem;
  }

  @media (max-width: 300px) {
    width: 18rem;
  }
`

export const WeatherCardForm = styled.form`
  height: 7rem;
  width: 100%;
  display: grid;
  grid-template-columns: 7rem 1fr;
  background-color: rgba(255,255,255,0.9);
  color: #8B8884;
  position: relative;

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    position: absolute;
    right: 0;
  }

  p {
    font-family: 'MeteoconsRegular';
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border: none;
    font-size: 3.5rem;
    line-height: 1.6;
    background-color: transparent;
    color: #8B8884;
    overflow: hidden;
  }


  @media (max-width: 795px) {
    height: 5rem;
    grid-template-columns: 5rem 1fr;

    p {
      font-size: 4rem;
    }
    input {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 585px) {
    height: 4.5rem;
    grid-template-columns: 4.5rem 1fr;

    p {
      font-size: 3.5rem;
    }
    input {
      font-size: 2rem;
    }
  }

  @media (max-width: 415px) {
    height: 4rem;
    grid-template-columns: 4rem 1fr;
    p {
      font-size: 3rem;
    }
    input {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 300px) {
    height: 3rem;
    grid-template-columns: 3rem 1fr;
    p {
      font-size: 2rem;
    }
    input {
      font-size: 1.5rem;
    }
  }
`

interface WeatherInfoProps {
  temperature: number | undefined
}

export const TodayContainer = styled.div<WeatherInfoProps>`
  background-color: ${(props) => todayBackgroundBasedOnTemperature(props.temperature)};
  height: 25rem;
  display: grid;
  grid-template-columns: 50% 1fr;

  @media (max-width: 795px) {
   display: flex;
   flex-direction: column;
  }

  

`

export const WeatherIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'MeteoconsRegular';
  font-size: 20rem;
  color: whitesmoke;

  @media (max-width: 795px) {
    font-size: 10.5rem;
  }
`

export const TodayWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  color: whitesmoke;
  font-size: 1.7rem;
  margin-top: 0.5rem;
  
  div {
    display: flex;
    flex-direction: column;
    margin: 0.5;
  }

  h2 {
    margin: 1rem 0;
    font-weight: bold;
    text-transform: capitalize;
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
    color: whitesmoke;
    font-size: 1.7rem;
    line-height: 1.2;
    cursor: pointer;
    max-width: 20%;
  }

  @media (max-width: 795px) {
    padding-left: 2rem;
  }

  @media (max-width: 300px) {
    padding-left: 1rem;
  }
`

const PostWeatherContainer = styled.div<WeatherInfoProps>`
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 0.5rem;

  div {
    width: 50%;
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
    color: whitesmoke;
    font-size: 1.7rem;
    line-height: 1.2;
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

export const TomorrowContainer = styled(PostWeatherContainer)`
  background-color: ${(props) => tomorrowBackgroundBasedOnTemperature(props.temperature)};
`

export const AfterTomorrowContainer = styled(PostWeatherContainer)`
  background-color: ${(props) => afterTomorrowBackgroundBasedOnTemperature(props.temperature)};
`

export const SearchbarContainer = styled.div`
  position: relative;
`

export const AutocompleteDropdownContainer = styled.div`
  width: 100%;
  background-color: rgba(255,255,255,0.9);
  position: absolute;
`


export const AutocompleteSugestionsContainer = styled.div`
  width: 100%;
  cursor: pointer;
  font-size: 2rem;
  background-color: rgba(255,255,255,0.9);
  line-height: 1.6;

  transition: all 0.6s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ErrorMessageContainer = styled.div`
  width: 100%;
  background-color: rgba(75,75,75, 0.9);
  height: 8rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  span {
    font-size: 1.4rem;
    color: whitesmoke;
  }
`