import React, { useContext, useEffect, Fragment } from 'react'
import { getDegree } from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { Column } from '../Grid/Grid'

import './AnotherDayInfo.scss'

const AnotherDayInfo = props => {
    const { data } = useContext(WeatherContext)

    return (
        <Column className={`another_day_info_container ${props.day} ${data.currentTheme}`}>
            {data.wheaterData.tomorrow && props.day === 'tomorrow' && (
                <Fragment>
                    <p>Amanhã</p>
                    <p>{getDegree(data.wheaterData.tomorrow.main.temp, data)}&deg;</p>
                </Fragment>
            )}
            {data.wheaterData.afterTomorrow && props.day === 'afterTomorrow' && (
                <Fragment>
                    <p>Depois de amanhã</p>
                    <p>
                        {getDegree(data.wheaterData.afterTomorrow.main.temp, data)}
                        &deg;
                    </p>
                </Fragment>
            )}
        </Column>
    )
}

export default AnotherDayInfo
