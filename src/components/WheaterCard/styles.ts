import styled from 'styled-components';


function todayBackgroundBasedOnTemperature(temperature?: number) {
  if (temperature || temperature === 0) {
    if (temperature > 35) return 'rgba(255, 51, 0, 0.9)';
    else if (temperature < 15) return 'rgba(0, 51, 255, 0.7)';
    else return 'rgba(233,215,0, .9);'
  } else {
    return 'rgba(75,75,75, 0.8)'
  }
}

export const WeatherCardContainer = styled.main`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 95vw;
  padding: 1.5rem 0;
  

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
  border-radius: 8px;

  transition: all 0.6s;

  &:hover {
    filter: brightness(0.9);
  }

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
    font-size: 3rem;
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

export const TodayContainer = styled.section<WeatherInfoProps>`
  background-color: ${(props) => todayBackgroundBasedOnTemperature(props.temperature)};
  height: 25rem;
  display: grid;
  grid-template-columns: 50% 1fr;
  border-radius: 8px;

  @media (max-width: 795px) {
   display: flex;
   flex-direction: column;
  }

  transition: all 0.6s;
  &:hover {
    filter: brightness(0.85);
  }
`

export const WeatherIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'MeteoconsRegular';
  font-size: 20rem;
  color: whitesmoke;
  box-sizing: border-box;
  padding-top: 0.5rem;

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
  justify-content: center ;
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

  @media (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media (max-width: 795px) {
    padding-left: 2rem;
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    padding-left: 1rem;
  }
`


export const SearchbarContainer = styled.section`
  position: relative;
  margin-bottom: 1rem;
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

export const ErrorMessageContainer = styled.section`
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