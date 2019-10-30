import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const WeatherIcon = styled.div`
  width: 60%;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: #8D8986;
    }
  }
  /* background: ${props => `${props.icon}`} */
`;

export const WeatherInfo = styled.div`
  padding: 16px 32px;
  width: 40%;
`;