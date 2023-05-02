import React from "react";
import { WeatherIcon } from "@components/Icon";
import Text from "@components/Text";
import { WeatherData } from "@interfaces/WeatherData";
import Spacer from "@components/Spacer";
import ToggleScaleButton from "@components/ToggleScaleButton";
import useWindDegreeToDirection from "@hooks/useWindDegreeToDirection";
import useTemperatureColor from "@hooks/useTemperatureColor";
import { WeatherInfoContent, WeatherText } from "./style";

const WeatherInfo = ({
    weather,
    day,
    main,
    wind,
    isOpen,
    position,
}: WeatherData & { isOpen: boolean; position: number }) => {
    const backgroundColor = useTemperatureColor(main.temp, position);
    const windDirection = useWindDegreeToDirection(wind.deg);
    return (
        <WeatherInfoContent bg={backgroundColor} position={position}>
            <Spacer width={"45%"} padding={"5% 0"}>
                {isOpen && (
                    <WeatherIcon
                        data-testid="weather-icon"
                        icon={weather[0].icon}
                    />
                )}
            </Spacer>
            <WeatherText>
                <Text strong>{day}</Text>
                {!main.temp && isOpen && (
                    <Text m={"1rem 0"} size="1.35rem">
                        Sem informações de previsão, busque por uma cidade
                    </Text>
                )}
                {!!main.temp && (
                    <>
                        <ToggleScaleButton temperature={main.temp} />
                        <Text m={"1rem 0"} size="1.35rem" capitalize strong>
                            {weather[0].description}
                        </Text>
                        <div>
                            <Text>
                                Vento: <strong>{windDirection}</strong>{" "}
                                {wind.speed}km/h
                            </Text>
                            <Text>Umidade: {main.humidity}%</Text>
                            <Text>Pressão {main.pressure}hPA</Text>
                        </div>
                    </>
                )}
            </WeatherText>
        </WeatherInfoContent>
    );
};

export default WeatherInfo;
