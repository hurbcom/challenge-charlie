


import {
  WeatherCardContainer,
  WeatherCardForm,
  TodayContainer,
  WeatherIconContainer,
  TodayWeatherInfo,
  TomorrowContainer,
  AfterTomorrowContainer
} from './styles';


export function WeatherCard() {
  return (
    <WeatherCardContainer>
      <WeatherCardForm action="">
        <p>(</p>
        <input type="text" placeholder='Rio de Janeiro, Rio de Janeiro' />
      </WeatherCardForm>
      <TodayContainer>
        <WeatherIconContainer>B</WeatherIconContainer>
        <TodayWeatherInfo>
          <div>
            <span>Hoje</span>
            <span>32°C</span>
          </div>
          <h2>Ensolarado</h2>
          <div>
            <span>Vento: NO 6.4km/h</span>
            <span>Humidade: 78%</span>
            <span>Pressão: 1003hPA</span>
          </div>
        </TodayWeatherInfo>
      </TodayContainer>
      <TomorrowContainer>
        <span>AMANHÃ</span>
        <span>32°C</span>
      </TomorrowContainer>
      <AfterTomorrowContainer>
        <span>DEPOIS DE AMANHÃ</span>
        <span>32°C</span>
      </AfterTomorrowContainer>
    </WeatherCardContainer>
  )
}