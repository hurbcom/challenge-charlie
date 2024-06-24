import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon13 } from '../assets/icons/13.svg';
import { ReactComponent as Icon14 } from '../assets/icons/14.svg';
import { ReactComponent as Icon17 } from '../assets/icons/17.svg';
import { ReactComponent as Icon18 } from '../assets/icons/18.svg';
import { ReactComponent as Icon2 } from '../assets/icons/2.svg';
import { ReactComponent as Icon23 } from '../assets/icons/23.svg';
import { ReactComponent as Icon25 } from '../assets/icons/25.svg';
import { ReactComponent as Icon27 } from '../assets/icons/27.svg';
import { ReactComponent as Icon45 } from '../assets/icons/45.svg';
import { ReactComponent as Icon8 } from '../assets/icons/8.svg';
import { useWeatherForecastContext } from '../stores/WeatherForecastProvider';
import { COLORS } from '../utils/colors';

const StyledIcon = styled.svg`
    padding: 0;
    width: 50%;
    height: 50%;
    fill: ${COLORS.white};
`

const iconMap: { [key: string]: React.FC } = {
    '02': Icon2,
    '08': Icon8,
    '13': Icon13,
    '14': Icon14,
    '17': Icon17,
    '18': Icon18,
    '23': Icon23,
    '25': Icon25,
    '27': Icon27,
    '45': Icon45,
};

// Component that renders the icon according to the value provided in the context.
const Icon: React.FC = () => {
    const { weatherIcon } = useWeatherForecastContext();

    const IconComponent = weatherIcon ? iconMap[weatherIcon] : Icon45;

    return <StyledIcon as={IconComponent} />
}

export default Icon