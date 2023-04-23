import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Field, Image, Label } from "./components";
import sunImage from './assets/svg/2.svg';
import fetchBackground from './components/services/fetchBackground';
import getLocation from './components/services/getLocation';
import fetchCity from './components/services/fetchCity';
import backgroundTemperature from './components/utils/backgroundTemperature';
import { fetchTodayWeather, fetchNextDaysWeather } from './components/services/fetchWeather';
import { INITIAL_STATE } from './components/utils/consts';

const icons = {
  sunImage,
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ backgroundUrl }) => {
    return `background-image: url(${backgroundUrl});`
  }}
  background-size: cover;
  background-repeat; no-repeat;
`

const Main = styled.main`
  margin: 20px;
  display: grid;
  width: 800px;
  grid-template-areas: 'field field'
                        'image todayTemperature'
                        'image weather'
                        'tomorrowWeatherBackground tomorrowWeather'
                        'afterTomorrowWeatherBackground afterTomorrowWeather';
  grid-template-columns: 1.2fr 1fr;
`

const Section = styled.section`
  background-color: ${props => props.theme.main.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const TodayTemperature = styled(Section)`
  grid-area: todayTemperature;
`

const TodayWeather = styled(Section)`
  grid-area: weather;
`

const TomorrowWeather = styled.div`
  background-color: ${props => props.theme.tomorrow.backgroundColor};
  grid-area: tomorrowWeather;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`
const AfterTomorrowWeather = styled.div`
  background-color: ${props => props.theme.afterTomorrow.backgroundColor};
  grid-area: afterTomorrowWeather;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const EmptySpaceBackgroundTomorrow = styled.div`
  background-color: ${props => props.theme.tomorrow.backgroundColor};
  grid-area: tomorrowWeatherBackground;
`

const EmptySpaceBackgroundAfterTomorrow = styled.div`
  background-color: ${props => props.theme.afterTomorrow.backgroundColor};
  grid-area: afterTomorrowWeatherBackground;
`

function App() {
  const [cityValue, setCityValue] = useState('');
  const [weather, setWeather] = useState(INITIAL_STATE.CURRENT_WEATHER);
  const [location, setLocation] = useState();
  const [backgroundUrl, setBackgroundUrl] = useState();

  const getImage = async () => {
    const response = await fetchBackground();
    setBackgroundUrl(response);
  }

  const locationHandler = async () => {
    const res = await getLocation();
    setLocation(res);
  }

  useEffect(() => {
    getImage();
    locationHandler();
  }, []);

  useEffect(() => {
    if (location) {
      async function cityHandler () {
        const response = await fetchCity(location.latitude, location.longitude);
        const city = response.data.results[0].components.city;
        const state = response.data.results[0].components.state;

        const weatherResponse = await Promise.all([
          fetchTodayWeather(state),
          fetchNextDaysWeather(state)
        ]);

        setCityValue(`${city}, ${state}`);
        setWeather(weatherResponse);
      }
      cityHandler();
    }
  }, [location]);

  const onSearch = async (event) => {
    if (event.key === 'Enter') {
      const weatherResponse = await Promise.all([
        fetchTodayWeather(event.target.value),
        fetchNextDaysWeather(event.target.value)
      ]);

      setCityValue(`${event.target.value}`);
      setWeather(weatherResponse);
    }
  }

  return (
    <ThemeProvider theme={backgroundTemperature(weather[0].data.main.feels_like)}>
      <Container backgroundUrl={backgroundUrl}>
        <Main className="App">
          <Field
            gridArea='field'
            placeholder={'Carregando...'}
            value={cityValue}
            onChange={(event) => setCityValue(event.target.value)}
            onKeyPress={(event) => onSearch(event)}
          />

          <Image src={icons.sunImage} alt='sol' gridArea='image' />

          <TodayTemperature>
            <Label bold value={'Hoje'}/>
            <Label value={`${weather[0].data.main.feels_like}°C`}/>
          </TodayTemperature>

          <TodayWeather>
            <Label bold value={weather[0].data.weather[0].description} />
            <Label value={`Vento: ${weather[0].data.wind.speed}km/h`} />
            <Label value={`Umidade: ${weather[0].data.main.humidity}%`} />
            <Label value={`Pressão: ${weather[0].data.main.pressure}hPa`} />
          </TodayWeather>

          <TomorrowWeather>
            <Label bold value={'Amanhã'}/>
            <Label value={`${weather[1].data.list[0].main.feels_like}°C`}/>
          </TomorrowWeather>

          <EmptySpaceBackgroundTomorrow />

          <AfterTomorrowWeather>
            <Label bold value={'Depois de amanhã'}/>
            <Label value={`${weather[1].data.list[1].main.feels_like} °C`}/>
          </AfterTomorrowWeather>

          <EmptySpaceBackgroundAfterTomorrow />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
