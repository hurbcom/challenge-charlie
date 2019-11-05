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
    height: 100%;
    padding: 34px;
    width: 100%;

    path {
      fill: #FFF;
    }
  }
`;

export const WeatherInfo = styled.div`
  padding: 32px 0;
  width: 40%;

  p {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 4px;
    text-transform: uppercase;
  }
  
  h2 {
    font-size: 24px;
    font-weight: 400;
    margin: 24px 0 16px;
    text-transform: capitalize;
  }

  div {
    margin-bottom: 4px;
    
    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;