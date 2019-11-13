import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: #FFF;
  display: flex;
  width: 100%;
`;

export const WeatherInfo = styled.div`
  margin-left: 60%;
  padding: 16px 0 32px;
  width: 40%;

  p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  span {
    font-size: 16px;
  }

  .clickable {
    cursor: pointer;
  }
`;