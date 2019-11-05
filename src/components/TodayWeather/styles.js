import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: #FFF;
  display: flex;
  width: 100%;
`;

export const IconWrapper = styled.div`
  width: 60%;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: #FFF;
    }
  }
`;

export const WeatherInfo = styled.div`
  padding: 16px 32px;
  width: 40%;
`;