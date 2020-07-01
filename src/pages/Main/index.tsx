import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import WeatherReport from '../../components/WeatherReport';

import { Container, Wrapper } from './styles';

const api = axios.create();

const Main: React.FC = () => {
  const [background, setBackground] = useState<string>();

  /**
   * generates a random number from 0 - 7 for a differente background every time the pages refreshes
   */
  const randomBackground = useMemo(() => {
    const randomNum = Math.floor(Math.random() * 7);
    return randomNum;
  }, []);

  /**
   * Connects to Bing's API to get a background image
   */
  useEffect(() => {
    api
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.bing.com/HPImageArchive.aspx?format=js&idx=${randomBackground}&n=1&mkt=pt-BR`,
      )
      .then((response) => {
        setBackground(`http://www.bing.com${response.data.images[0].url}`);
      });
  }, [randomBackground]);

  return (
    <Wrapper background={background}>
      <Container>
        <WeatherReport />
      </Container>
    </Wrapper>
  );
};

export default Main;
