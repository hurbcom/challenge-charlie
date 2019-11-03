import React from 'react';

import { Container, Rain, RainDrop, Text } from './styles';
import { ReactComponent as Cloud } from './../../icons/loading/cloud.svg';
import { ReactComponent as Sun } from './../../icons/loading/sun.svg';

export default function Loading() {
  return (
    <Container>
      <Sun />
      <Cloud />
      <Rain>
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
        <RainDrop />
      </Rain>

      <Text>
        Olhando pela janela por você... aguarde um segundo...
      </Text>
    </Container>
  );
}
