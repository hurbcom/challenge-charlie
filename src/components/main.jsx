import { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeatherByCityName } from "../apis/weather";
import { Day } from "./day";
import { InputLocation } from "./inputLocation";
import { TodayWeather } from "./todayWeather";
import { getLocationName } from "../apis/locationName";
export const MainComponent = () => {
    const [location, setLocation] = useState({
        municipality: "",
        state: "",
    });
    const [error, setError] = useState("");
    const [weather, setWeather] = useState();
    useEffect(() => {
        navigator?.geolocation.getCurrentPosition(
            async (position) => {
                setError("");
                setLocation(await getLocationName(position.coords));
            },
            () => {
                setError("ops! erro ao reconhecer seu local ou coordenadas");
            }
        );
    }, [setLocation]);
    useEffect(() => {
        if (location.municipality) {
            getWeatherByCityName(location)
                .then((weather) => {
                    setWeather(weather);
                    setError("");
                })
                .catch(() => {
                    setError(
                        "ops! erro ao obter previsōes para" +
                            location.municipality
                    );
                });
        }
    }, [location]);

    return (
        <Main>
            <InputLocation location={location} setLocation={setLocation} />
            {weather && (
                <>
                    <TodayWeather {...weather} />
                    <Day day={1} temp="21" />
                    <Day day={2} temp="25" />
                </>
            )}
            {error && <>{error}</>}
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
