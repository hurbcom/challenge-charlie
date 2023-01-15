import React, { useEffect, useState } from "react";
import { getBingBackgroung } from "../../../services/getBingBackground";
import { getLocationByCoordinates, getLocationByLocalName } from "../../../services/getLocation";
import { getCurrentWeather, getForecastForNextDays } from "../../../services/getWeather";
import { Colors } from "../../../utils/colors";
import Banner from "../../atoms/Banner";
import Input from "../../atoms/Input";
import Icon from  '../../../assets/icons/sun.svg'

import { Container, Wrapper } from "./styles";

const Weather: React.FC = () => {
  const [locationName, setLocationName] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')
  const [forecast, setForecast] = useState('')
  const [bingBackground, setBingBackground] = useState('')
  const [localName, setLocalName] = useState('')

  const callLocationByCoordinates = async (latitude: number, longitude: number) =>  {
    const response = await getLocationByCoordinates(latitude, longitude)
    setLocationName(response)
  }

  const callCurrentWeather = async (latitude: number, longitude: number) =>  {
    const response = await getCurrentWeather(latitude, longitude)
    setCurrentWeather(response)
  }

  const callForecastNextDays = async (latitude: number, longitude: number) =>  {
    const response = await getForecastForNextDays(latitude, longitude)
    setForecast(response)
  }

  const getBackground = async () => {
    const response = await getBingBackgroung()
    setBingBackground(response[0].url)
  }

  const callLocationByName = async () =>  {
    if (localName !== "") {
     const response = await getLocationByLocalName(localName)
     setLocationName(response)
    }
  }

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( position => {
      callLocationByCoordinates(position.coords.latitude, position.coords.longitude)
      callCurrentWeather(position.coords.latitude, position.coords.longitude)
      callForecastNextDays(position.coords.latitude, position.coords.longitude)
    })
    getBackground()
  }, [] )

  return (
  <Container backgroundUrl={bingBackground}>
    <Wrapper>
      <Input value={localName} onChange={(value) => setLocalName(value)} onBlur={callLocationByName}/>
      <Banner
        imgSrc={Icon}
        dayTitle="HOJE"
        temperature="23"
        temperatureDescription="Calor"
        additionalInfo={{
          vento: 'NO 6.4km/h',
          umidade: '78%',
          pressao: '100 3h PA'
        }}
        backgroundColor={Colors.MEDIUM_YELLOW}/>
      <Banner dayTitle="AMANHÃ"  temperature="25" backgroundColor={Colors.DARK_YELLOW}/>
      <Banner dayTitle="DEPOIS DE AMANHÃ"  temperature="26" backgroundColor={Colors.DARKEST_YELLO}/>
    </Wrapper>

  </Container>
  )
};

export default Weather
