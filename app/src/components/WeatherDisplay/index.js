import React from 'react';

const WeatherDisplay = props => {
    return (
        <div style={{ color: '#ffffff' }}>
            <p>Code: {props.condition.code}</p>
            <p>Date: {props.condition.date}</p>
            <p>Temp: {props.condition.temp}</p>
            <p>text: {props.condition.text}</p>
            <div>
                <p>Amanhã Temp: {props.tomorrow}</p>
            </div>
            <div>
                <p>Depois de Amanhã: {props.afterTomorrow}</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
