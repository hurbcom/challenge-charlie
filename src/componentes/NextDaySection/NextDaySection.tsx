import React, { useContext } from 'react'

import {
    NextDaysSectionContainer,
    IconColumn,
    InformationsColumn,
    InformationText,
    InformationTitle,
    InformationsColumnItem
} from './NextDaySection.styles'


import { getCardBackgroundColor } from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { formattedDegrees } from '../../helpers/format'

interface IWeatherInformations {
    tempMax: number
    tempMin: number
    icon: string
}
interface NextDaySectionProps {
    onclick: () => void,
    weatherInformations: IWeatherInformations,
    title: string
}



function NextDaySection({ onclick, weatherInformations, title }: NextDaySectionProps) {

    const { isFahrenheit } = useContext(WeatherContext)

    return (
        <>
            <NextDaysSectionContainer onClick={onclick} variant={getCardBackgroundColor(weatherInformations.tempMax)}>
                <IconColumn>
                    <img
                        src={`/src/assets/WeatherIcons/${weatherInformations.icon}.svg`}
                    ></img>
                </IconColumn>
                <InformationsColumn>
                    <InformationsColumnItem>
                        <InformationTitle>{title}</InformationTitle>
                    </InformationsColumnItem>
                    <InformationsColumnItem>
                        <InformationText>Mín: {formattedDegrees(weatherInformations.tempMin, isFahrenheit)}</InformationText>
                        <InformationText>Máx: {formattedDegrees(weatherInformations.tempMax, isFahrenheit)} </InformationText>
                    </InformationsColumnItem>
                </InformationsColumn>
            </NextDaysSectionContainer>
        </>)
}

export { NextDaySection }

