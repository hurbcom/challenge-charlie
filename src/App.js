import React, { useState, useEffect } from 'react';
import { Field, Image, Label } from "./components";
import styled from "styled-components";
import fetchBackground from './components/services/fetchBackground';
import { DefaultTheme, SummerTheme, WinterTheme, WarmTheme } from './components/styles/themes';
import { ThemeProvider } from "styled-components";
import sunImage from './assets/svg/2.svg';

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
  const [backgroundUrl, setBackgroundUrl] = useState();

  const getImage = async () => {
    const response = await fetchBackground();
    setBackgroundUrl(response);
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <ThemeProvider theme={WinterTheme}>
      <Container backgroundUrl={backgroundUrl}>
        <Main className="App">
          <Field
            gridArea='field'
            placeholder={'Carregando...'}
          />

          <Image src={icons.sunImage} alt='sol' gridArea='image' />

          <TodayTemperature>
            <Label bold value={'Hoje'}/>
            <Label value={`35°C`}/>
          </TodayTemperature>

          <TodayWeather>
            <Label bold value={'ensolarado'} />
            <Label value={`Vento: 10km/h`} />
            <Label value={`Humidade: 10%`} />
            <Label value={`Pressão: 10hPa`} />
          </TodayWeather>

          <TomorrowWeather>
            <Label bold value={'Amanhã'}/>
            <Label value={`25°C`}/>
          </TomorrowWeather>

          <EmptySpaceBackgroundTomorrow />

          <AfterTomorrowWeather>
            <Label bold value={'Depois de amanhã'}/>
            <Label value={`20°C`}/>
          </AfterTomorrowWeather>

          <EmptySpaceBackgroundAfterTomorrow />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
