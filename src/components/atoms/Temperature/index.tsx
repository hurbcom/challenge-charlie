import React, { FC } from 'react';
import styled from 'styled-components';

interface TemperatureProps {
  temp: number;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: 200;
  }
`;

const Temperature: FC<TemperatureProps> = ({ temp }) => {
  const scale = window ? '°C' : '°F';

  return (
    <Container onClick={() => alert('hi')}>
      {temp}
      <span>{scale}</span>
    </Container>
  );
};

export default Temperature;
