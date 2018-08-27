import React from 'react';
import WeatherBrief from './WeatherBrief';
import WheaterToday from './WeatherToday';

const Weather = ({ results, toggleUnit, unit }) => (
    <section className="Weather">
        <WheaterToday
            toggleUnit={toggleUnit}
            unit={unit}
            {...results.channel}
        />
        <WeatherBrief
            label="Amanhã"
            unit={unit}
            {...results.channel.item.forecast[1]}
        />
        <WeatherBrief
            label="Depois de Amanhã"
            unit={unit}
            {...results.channel.item.forecast[2]}
        />
    </section>
);

export default Weather;
