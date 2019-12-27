import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: #FFF;
  display: flex;
  width: 100%;

  @media (max-width: 840px) {
   display: block;
  }
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

  @media (max-width: 840px) {
    width: 100%;

    svg {
      display: block;
      margin: 0 auto;
      width: 80%;
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

    &.clickable {
      cursor: pointer;
    }
  }

  span {
    font-size: 22px;
    font-weight: 400;
  }

  @media (max-width: 840px) {
    padding: 16px 0;
    text-align: center;
    width: 100%;
  }
`;

export const WeatherDescription = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 24px 0 16px;
  text-transform: capitalize;
`;

export const WeatherDetails = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;