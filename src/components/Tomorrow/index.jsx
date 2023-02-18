import React from 'react';
import {Container, TextContainer, Title, ContainerEmpty} from "./Styles"

export function Tomorrow({days}) {
  return (
    <Container>
      <ContainerEmpty />
      <TextContainer>
        <Title>Amanhã</Title>
        <Title>{Math.round(days?.tomorrow?.main?.temp)} ºC</Title>
      </TextContainer>
    </Container>
  );
}

