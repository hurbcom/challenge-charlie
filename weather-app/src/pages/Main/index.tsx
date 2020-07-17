import React from 'react';

import BackgroundImage from '../../components/BackgroundImage';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Main page</h1>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Main;
