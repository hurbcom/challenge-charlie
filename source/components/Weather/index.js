import style from './style.css';
import React from 'react';

import LocationInput from '../LocationInput';
import Description from '../Description';
import Tile from '../Tile';

class Weather extends React.Component {
    render() {
        return (
            <div className={style.weatherBlock}>
                <LocationInput />
                <Description />
                <Tile
                    day="amanhã"
                    temperature="25ºC"
                    color="darkgoldenrod" />
                <Tile
                    day="depois de amanhã"
                    temperature="26ºC"
                    color="darkgoldenrod" />
            </div>
        );
    }
}

export default Weather;
