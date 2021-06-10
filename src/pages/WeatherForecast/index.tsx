import React from 'react';

import Background from '../../components/Background';
import CardVertical from '../../components/SecondarySectionWeather';
import WeatherForecastCard from '../../components/WeatherForecastCard';

const WeatherForecast: React.FC = () => {
    return (
        <Background>
            <WeatherForecastCard />
        </Background>
    );
};

export default WeatherForecast;
