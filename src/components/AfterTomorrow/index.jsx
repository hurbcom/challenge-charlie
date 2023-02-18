import React from 'react';
import {Container, TextContainer, Title, ContainerEmpty} from "./Styles"

export function AfterTomorrow({days}) {
  return (
    <Container>
      <ContainerEmpty />
      <TextContainer>
        <Title>Depois de Amanhã</Title>
        <Title>{Math.round(days?.afterTomorrow?.main?.temp)} ºC</Title>
      </TextContainer>
    </Container>
  );
}
