import React from 'react';
import { Container } from './styles';
import { App, Loading, Error } from '../';
import { useBackground } from '../../services/hooks/useBackground';

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
