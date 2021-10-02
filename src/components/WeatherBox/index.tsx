import React from 'react';
import CityInput from 'components/CityInput';
import * as S from './styles';

const WeatherBox = () => {
    return (
        <S.BoxWrapper>
            <CityInput />
        </S.BoxWrapper>
    );
};

export default WeatherBox;
