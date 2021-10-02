import React from 'react';
import CityInput from 'components/CityInput';
import WeatherStatus from 'components/WeatherStatus';
import * as S from './styles';

const WeatherBox = () => {
    return (
        <S.BoxWrapper>
            <CityInput />
            <WeatherStatus />
        </S.BoxWrapper>
    );
};

export default WeatherBox;
