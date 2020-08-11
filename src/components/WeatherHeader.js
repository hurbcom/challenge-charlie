import React from 'react';

import {
    WeatherHeader,
    WeatherHeaderInput,
    WeatherHeaderIcon,
    WeatherHeaderForm
} from './WeatherHeader.css.js';
import location from '../icons/location.svg';


export default function Header(props) {
    return (
        <WeatherHeader>
            <WeatherHeaderForm onSubmit={props.handleSubmit}>
                <WeatherHeaderIcon src={location} alt="Localização Atual" />
                <WeatherHeaderInput
                    value={props.city}
                    placeholder="Digite sua cidade"
                    onChange={props.handleChange}
                />
            </WeatherHeaderForm>
        </WeatherHeader>
    );
}