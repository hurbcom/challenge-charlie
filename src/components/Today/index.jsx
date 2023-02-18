import React from 'react';
import {Container, TextContainer, TextDescription, TextInfo, Title, IconContainer} from "./Styles"
import {Icons} from "../Icons"

export function Today({day}) {

  const getIconSize = () => {
    const realWidth = window.screen.width;
    if (realWidth === 1280 || realWidth === 1366 ) {
      return 260
    } else if (realWidth === 1440 ) {
      return 300
    }
     else {
      return 380
    }
  }

  return (
    <Container>
        <IconContainer>
            <Icons name={day?.weather?.map(x => x.main)} color="white" size={getIconSize()} />
        </IconContainer>
        <TextContainer>
            <Title>Hoje</Title>
            <Title>{ Math.round(day?.main?.temp) } ºC</Title>
            <TextDescription>{ day?.weather?.map(x => x.description) }</TextDescription> 
            <TextInfo>Vento: NO {day?.wind?.speed}km/h</TextInfo>
            <TextInfo>Humidade: {day?.main?.humidity}% </TextInfo>
            <TextInfo>Pressão: {day?.main?.pressure}hPA</TextInfo>

        </TextContainer>
    </Container>
  );
}

