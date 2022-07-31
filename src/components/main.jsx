import { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeather } from "../apis/weather";
import { InputLocation } from "./inputLocation";
import { TodayWeather } from "./todayWeather";

export const MainComponent = () => {
    const [location, setLocation] = useState({
        municipality: "Rio de Janeiro",
        state: "Rio de Janeiro",
    });
    const [weather, setWeather] = useState();
    useEffect(() => {
        getWeather(location).then(setWeather);
    }, [location]);

    return (
        <Main>
            <InputLocation location={location} setLocation={setLocation} />
            {weather && <TodayWeather {...weather} />}
        </Main>
    );
};
const Main = styled.main`
    width: 57%;
    min-width: 300px;
    height: 100vh;
    margin: auto;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 15vh 1fr 15vh 15vh;
`;
