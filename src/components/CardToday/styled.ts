import styled from 'styled-components';

import { getWeatherColor } from '../../helpers/weather';

import { ITemperature } from './interface';

export const SContainer = styled.section<ITemperature>`
  background: ${(props) =>
    getWeatherColor({
      day: props.day,
      tempToday: props.tempToday
    })};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SWrapperIcon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (min-width: 601px) {
    width: 60%;
  }
`;

export const SWrapperTemperature = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding-top: 1.4rem;
  width: 50%;

  @media (min-width: 601px) {
    width: 40%;
  }
`;
