import React from 'react';

import { DayInfoExtraLabel, DayInfoExtraValue } from './WeatherDayExtraInfo.css.js';


export default function WeatherDayExtraInfo(props) {
    return (
        <React.Fragment>
            <DayInfoExtraLabel>
                {props.label}
            </DayInfoExtraLabel>

            <DayInfoExtraValue>
                {props.value}
            </DayInfoExtraValue>
        </React.Fragment>
    );
}