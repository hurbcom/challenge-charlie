import style from './style.css';
import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className={style.weatherBlock}>
                Location
            </div>
        );
    }
}

export default Weather;
