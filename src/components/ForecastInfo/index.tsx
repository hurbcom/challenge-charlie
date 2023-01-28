import Image from "next/image";
import { useTheme } from "styled-components";
import { DailyWeatherProps } from "@/types";

import * as S from "./styles";

export type ForecastInfoProps = {
    day: "today" | "tomorrow" | "afterTomorrow";
    weatherData: DailyWeatherProps;
};

export default function ForecastInfo({ day, weatherData }: ForecastInfoProps) {
    const theme = useTheme();
    type Colors = (typeof theme.colors)[keyof typeof theme.colors];

    function getColor(): Colors {
        const temp = weatherData?.temp.day || 25;

        if (day === "tomorrow") {
            if (temp > 35) return theme.colors.lightRed;
            if (temp < 15) return theme.colors.lightBlue;
            return theme.colors.lightYellow;
        }

        if (day === "afterTomorrow") {
            if (temp > 35) return theme.colors.darkRed;
            if (temp < 15) return theme.colors.darkBlue;
            return theme.colors.darkYellow;
        }

        if (temp > 35) return theme.colors.red;
        if (temp < 15) return theme.colors.blue;
        return theme.colors.yellow;
    }

    function getDayTitle(day: string) {
        if (day === "afterTomorrow") {
            return "After Tomorrow";
        }
        return day;
    }

    function getTemperature(temp: number) {
        return temp.toString().split(".")[0] + "ºC";
    }

    function getIcon(id: number) {
        const code = id.toString()[0];

        if (id === 800) return "/icons/clear.svg";
        if (code === "2") return "/icons/thunderstorm.svg";
        if (code === "3") return "/icons/drizzle.svg";
        if (code === "5") return "/icons/rain.svg";
        if (code === "6") return "/icons/snow.svg";
        if (code === "8") return "/icons/clouds.svg";
        return "/icons/atmosphere.svg";
    }

    return (
        <S.Wrapper bgColor={getColor()} day={day}>
            {weatherData && (
                <>
                    <S.IconContainer>
                        {day === "today" && (
                            <Image
                                fill
                                src={getIcon(weatherData.weather[0].id)}
                                alt={weatherData.weather[0].description}
                            />
                        )}
                    </S.IconContainer>
                    <S.Info>
                        <S.DayTitle>{getDayTitle(day)}</S.DayTitle>
                        <S.Subtitle>
                            {getTemperature(weatherData.temp.day)}
                        </S.Subtitle>
                        {day === "today" && (
                            <S.Details>
                                <S.Subtitle>
                                    {weatherData.weather[0].description}
                                </S.Subtitle>
                                <p>Wind: {weatherData.wind_speed}km/h</p>
                                <p>Humidity: {weatherData.humidity}%</p>
                                <p>Pressure: {weatherData.pressure}hPa</p>
                            </S.Details>
                        )}
                    </S.Info>
                </>
            )}
        </S.Wrapper>
    );
}
