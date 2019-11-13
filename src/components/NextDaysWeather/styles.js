import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: #FFF;
  display: flex;
  width: 100%;
`;

export const WeatherIcon = styled.div`
  width: 60%;
`;

export const WeatherInfo = styled.div`
  padding: 16px 0 32px;
  width: 40%;

  p {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .clickable {
    cursor: pointer;
  }
`;