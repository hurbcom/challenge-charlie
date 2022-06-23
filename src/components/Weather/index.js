import React from 'react';
import {
  WeatherContainer,
  WeatherInfo,
  TopInfo,
  MidInfo,
  BottomInfo,
  IconWrapper,
} from './styles';
import SunSVG from '../../assets/svg/sun.svg';

export const Weather = props => {
  const { id, setId, currentId, day } = props;
  const isOpen = id === currentId;

  return (
    <WeatherContainer id={id} onClick={setId(id)} isOpen={isOpen}>
      <IconWrapper isOpen={isOpen}>
        {isOpen && <img src={SunSVG} alt="sun icon" />}
      </IconWrapper>
      <WeatherInfo isOpen={isOpen}>
        <TopInfo>
          <span>{day}</span>
          <button>32ºC</button>
        </TopInfo>
        {isOpen && (
          <React.Fragment>
            <MidInfo>
              <span>Ensolarado</span>
            </MidInfo>
            <BottomInfo>
              <span>Vento: NO 6.4km/h</span>
              <span>Humidade: 78%</span>
              <span>Pressão: 1003hPA</span>
            </BottomInfo>
          </React.Fragment>
        )}
      </WeatherInfo>
    </WeatherContainer>
  );
};
