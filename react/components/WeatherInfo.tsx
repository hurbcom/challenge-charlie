import React from "react";
import { WeatherIcon } from "@components/Icon";
import Text from "@components/Text";
import styled from "styled-components";
import { WeatherData } from "@interfaces/WeatherData";
import Spacer from "./Spacer";
import { opacityVariables } from "../styles/mixins";
import { POSITIONS_TO_OPACITIES } from "../../shared/constants/index";
import ToggleScaleButton from "./ToggleScaleButton";

//Let's just leave this guy right here because it's not generic enough to go to utils
const getTemperatureColor = (temperature: number, position: number) => {
    const roundedTemp = Math.round(temperature);
    // I'll stick with the browser default "yellow", "red", and "blue" colors given that the specs don't mention a specific color.
    if (roundedTemp <= 15) {
        return `rgba(0,0,255, var(${POSITIONS_TO_OPACITIES[position]}))`;
    }

    if (roundedTemp >= 35) {
        return `rgba(255,0,0, var(${POSITIONS_TO_OPACITIES[position]}))`;
    }

    return `rgba(255,255,0, var(${POSITIONS_TO_OPACITIES[position]}))`;
};

const WeatherInfoContent = styled.div<{ bg?: string; position?: number }>`
    ${opacityVariables}
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    padding: 0 5%;
    display: flex;
    background-color: ${({ bg }) => (bg ? bg : "gray")};
`;

const WeatherText = styled.div`
    margin-left: 5%;
    margin-top: 5%;
`;

const WeatherInfo = ({
    weather,
    day,
    main,
    wind,
    isOpen,
    position,
}: WeatherData & { isOpen: boolean; position: number }) => {
    const backgroundColor = getTemperatureColor(main.temp, position);
    return (
        <WeatherInfoContent bg={backgroundColor} position={position}>
            <Spacer width={"45%"} padding={"5% 0"}>
                {isOpen && <WeatherIcon icon={weather.icon} />}
            </Spacer>
            <WeatherText>
                <Text strong size="1.2rem">
                    {day}
                </Text>
                <ToggleScaleButton temperature={main.temp} />
                <Text m={"1rem 0"} size="1.35rem" capitalize strong>
                    {weather.description}
                </Text>
                <div>
                    <Text>
                        Vento: {wind.deg} {wind.speed}
                    </Text>
                    <Text>Umidade: {main.humidity}%</Text>
                    <Text>Pressão {main.pressure}hPA</Text>
                </div>
            </WeatherText>
        </WeatherInfoContent>
    );
};

export default WeatherInfo;
