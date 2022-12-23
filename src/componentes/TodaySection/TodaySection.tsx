import React, { useContext } from 'react'

import {
    TodaySectionContainer,
    IconColumn,
    InformationsColumn,
    InformationText,
    InformationTitle,
    InformationsColumnItem
} from './TodaySection.styles'


import { getCardBackgroundColor } from '../../helpers/utils'
import { WeatherContext } from '../../contexts/WeatherContext'
import { formattedTemperature, formattedPressure, formattedUmidity, formattedUppercase, formattedWindSpeed } from '../../helpers/format'

interface TodaySectionProps {
    onclick: () => void
}

function TodaySection({ onclick }: TodaySectionProps) {

    const { weatherInformations, isFahrenheit
    } = useContext(WeatherContext)

    return (
        <>
            <TodaySectionContainer data-testid='today-section' onClick={onclick} variant={getCardBackgroundColor(weatherInformations.today.temp)}>
                <IconColumn>
                    <img
                        src={`/src/assets/WeatherIcons/${weatherInformations.today.icon}.svg`}
                        alt={`${weatherInformations.today.description}`}
                    ></img>
                </IconColumn>
                <InformationsColumn>
                    <InformationsColumnItem>
                        <InformationTitle>Hoje</InformationTitle>
                        <InformationTitle>{formattedTemperature(weatherInformations.today.temp, isFahrenheit)}</InformationTitle>
                    </InformationsColumnItem>
                    <InformationsColumnItem>
                        <InformationTitle>{formattedUppercase(weatherInformations.today.description)}</InformationTitle>
                    </InformationsColumnItem>
                    <InformationsColumnItem>
                        <InformationText>Vento: {formattedWindSpeed(weatherInformations.today.wind)}</InformationText>
                        <InformationText>Umidade: {formattedUmidity(weatherInformations.today.humidity)}</InformationText>
                        <InformationText>Pressão: {formattedPressure(weatherInformations.today.pressure)}</InformationText>
                    </InformationsColumnItem>

                </InformationsColumn>
            </TodaySectionContainer>
        </>)
}

export { TodaySection }

