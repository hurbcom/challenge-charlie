import React from 'react';
import { Container } from './styles';
import { useBackground } from '../../services/background';
import { App, Loading, Error } from '../';

export const AppContainer = () => {
  const { backgroundImage, isLoading, isSuccess, isError } = useBackground();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (isSuccess) {
    return (
      <Container backgroundImage={backgroundImage}>
        <App />
      </Container>
    );
  }
};
