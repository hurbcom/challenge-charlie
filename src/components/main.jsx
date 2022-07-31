import { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeather } from "../apis/weather";
import { Day } from "./day";
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
            <Day day={1} temp="21" />
            <Day day={2} temp="25" />
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
    grid-template-rows: 15vh 1fr 17vh 17vh;
`;
