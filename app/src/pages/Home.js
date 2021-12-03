import styled from 'styled-components/macro';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { API_BASE_URL } = process.env;

const HomePage = styled.div`
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  height: 100vh;
`;

function Home() {
  const [city, setCity] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const onChangeCity = ({ target: { value: city } }) => {
    setCity(city);
  };

  const onSubmitCity = (event) => {
    setCity(city);
  };

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  useEffect(() => {
    axios
      .get(API_BASE_URL + '/background', { headers, mode: 'cors' })
      .then((res) => setBackgroundUrl(res.data));
  }, []);

  return (
    <HomePage className='Home' backgroundUrl={backgroundUrl}>
      <header className='Home-header'></header>
      <div className='Home-body'>
        <input
          name='city'
          type='text'
          value={city}
          onChange={onChangeCity}
          onSubmit={onSubmitCity}
        />
      </div>
      <footer className='Home-footer'></footer>
    </HomePage>
  );
}

export default Home;
