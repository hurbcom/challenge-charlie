import styled from "styled-components";
import { useState } from "react";
import LocationInput from "@components/LocationInput";
import WeatherTab from "@components/WeatherTab";

const WidgetBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export default () => {
    const [tabOpen, setTabOpen] = useState(0);
    const weatherData = {
        day: "HOJE",
        weather: {
            icon: "B",
            description: "nublado",
        },
        main: {
            temp: 14,
            pressure: 1014,
            humidity: 73,
        },
        wind: {
            speed: 2.97,
            deg: 130,
        },
    };
    return (
        <WidgetBody>
            <LocationInput />
            <div>
                <WeatherTab
                    number={0}
                    open={tabOpen == 0}
                    weatherData={weatherData}
                    onClick={() => setTabOpen(0)}
                />
                <WeatherTab
                    number={1}
                    open={tabOpen == 1}
                    weatherData={weatherData}
                    onClick={() => setTabOpen(1)}
                />
                <WeatherTab
                    number={2}
                    open={tabOpen == 2}
                    weatherData={weatherData}
                    onClick={() => setTabOpen(2)}
                />
            </div>
        </WidgetBody>
    );
};
