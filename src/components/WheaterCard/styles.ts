import styled from 'styled-components';

export const WeatherCardContainer = styled.main`
  width: 55rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const WeatherCardForm = styled.form`
  height: 7rem;
  width: 100%;
  display: grid;
  grid-template-columns: 7rem 1fr;
  background-color: rgba(255,255,255,0.9);
  color: #8B8884;
 
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
  }

`

export const TodayContainer = styled.div`
  background-color: rgba(233,215,0, .9);
  height: 25rem;
  display: grid;
  grid-template-columns: 50% 1fr;
`

export const WeatherIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'MeteoconsRegular';
  font-size: 22rem;
  color: whitesmoke;
`

export const TodayWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
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
    font-weight: 100;
  }
`

const PostWeatherContainer = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 0.5rem;

  span {
    width: 50%;
    line-height: 1.6;
    font-size: 1.7rem;
    color: whitesmoke;
  }

`

export const TomorrowContainer = styled(PostWeatherContainer)`
  background-color: rgba(255, 230, 30, .9);
`

export const AfterTomorrowContainer = styled(PostWeatherContainer)`
  background-color: rgb(224, 185, 0);
`