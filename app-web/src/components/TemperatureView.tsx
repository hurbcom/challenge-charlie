import React from 'react'
import { useTranslation } from "react-i18next"
import styled from 'styled-components'
import { ITemperatureViewProps } from '../interfaces/temperatureView.interface'
import { useWeatherForecastContext } from '../stores/WeatherForecastProvider'
import { screenBreakpoints } from '../utils/screenBreakpoints'
import Text from './Text'
import View from './View'

const StyledView = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 80px;
    justify-content: space-evenly;
    padding-top: 10px;

    @media screen and (max-width: ${screenBreakpoints.laptopsLG}){
        padding-top: 0px;
        height: 60px;
    }
`
// Component responsible for displaying the day and its temperature, it is repeated in the application,
// so it's important to reduce it to a reusable component.
const TemperatureView: React.FC<ITemperatureViewProps> = ({ day, temperature }) => {
    const { t } = useTranslation();

    const { currentTemperatureScale, setCurrentTemperatureScale } = useWeatherForecastContext();


    const handleChangeTemperatureScale = () => {
        //Change the current temperature scale from celsious to fahrenheit and vice versa
        setCurrentTemperatureScale(currentTemperatureScale === 'celsius' ? 'fahrenheit' : 'celsius')
    }

    return (
        <StyledView>
            <Text as="h2">
                {t(day).toUpperCase()}
            </Text>
            <Text as="h2"
                onClick={handleChangeTemperatureScale}
            >
                {temperature ? temperature[currentTemperatureScale] : '-'} º{currentTemperatureScale === 'celsius' ? 'C' : 'F'}
            </Text>
        </StyledView>
    )
}

export default TemperatureView;

