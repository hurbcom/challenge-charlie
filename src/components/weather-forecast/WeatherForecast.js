import React, { useState, useEffect } from 'react';
import classes from './WeatherForecast.module.css'


const WeatherForecast = (props) => {

    const [siglaUnit, setSiglaUnit] = useState('');

    /**
     * It is looking at the unit variable and changes the sigla to DOM 
     * Once the useEffect is done, React remembers that the 
     * state of counter has changed during its execution, thus
     * it will re-render the App
     */
    useEffect(() => {
        if ((props.unit === 'imperial')) {
            setSiglaUnit('˚F')
        } else {
            setSiglaUnit('˚C')
        }
    }, [props.unit])

    const getBackground = (temp) => {
        if (!props.initialUnit) {
            let currentTempArray = {
                temp1: 59,
                temp2: 95
            }
            /**
             * change the metric to imperial 
             * it works to sandardize the background color
             */
            if (props.unit === 'metric') temp = Math.round((temp * 9 / 5) + 32)

            return setBackground(temp, currentTempArray);
        }
    }
    
    /**
     * Changes background color according to temperature
     * For temperatures below 15ºC, shades of blue should be used, 
     * for temperatures above 35ºC, shades of red should be used 
     * and shades of yellow should be used for other temperatures.
     *  */ 
    const setBackground = (temp, currentTempArray) => {
        if (temp < currentTempArray.temp1) {
            return `rgba(161, 200, 236, ${temp / 130})`;
        } else if (temp > currentTempArray.temp2) {
            return `rgba(255, 107, 87, ${temp / 130})`;
        } else {
            return `rgba(249, 193, 51,${temp / 120})`
        }
    }

    /**
     * check the unit and change it. 
     * imperial: fahrenheit
     * metrica: celsius 
     * */
    
    const checkUnit = () => {
        props.onSetInitialUnit(true);
        props.unit === 'imperial' ? props.onSetUnit?.('metric') : props.onSetUnit?.('imperial');
    }

    /**
     * 
     * @param {*} day 
     * @returns the temperature and its unit
     */
    const getTemp = (day) => {
        return (
            <div>
                <button type="submit" className={classes.Button} onClick={() => {
                    checkUnit()
                }
                }>
                    <p><span>{Math.round(props.responseObj.list[day].temp.day)}{siglaUnit}</span></p>
                </button>
            </div>
        )
    }

    return (

        <div className={classes.Container}>
            <div className={classes.MainBox}>
                <div className={classes.Box} style={{
                    backgroundColor: `${(getBackground(props.responseObj.list[0].temp.day))}`
                }}>
                    <div>
                        <span className={classes.Icon}>B</span>
                    </div>
                    <div>
                        <p>HOJE:</p>
                        {(getTemp(0))}
                        <div><p>{props.responseObj.list[0].weather[0].main}</p></div>
                        <p><span>Vento: </span>{props.responseObj.list[0].speed}<span> km/h</span></p>
                        <p><span>Humidade: </span>{props.responseObj.list[0].humidity}<span>%</span></p>
                        <p><span>Pressão: </span>{props.responseObj.list[0].pressure}<span>hpa</span></p>
                    </div>
                </div>
                <div className={classes.Box} style={{
                    backgroundColor: `${(getBackground(props.responseObj.list[1].temp.day))}`
                }}>
                    <p className={classes.NextTemp}>AMANHÃ:</p>
                    {(getTemp(1))}
                </div>
                <div className={classes.Box} style={{
                    backgroundColor: `${(getBackground(props.responseObj.list[2].temp.day))}`
                }}>
                    <p className={classes.NextTemp}>DEPOIS DA AMANHÃ: </p>
                    {(getTemp(2))}
                </div>
            </div>
        </div>
    )
}

export default WeatherForecast;