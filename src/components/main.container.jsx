import styled from "styled-components";
import { Day } from "./day";
import { InputLocation } from "./inputLocation";
import { TodayWeather } from "./todayWeather";
import { useAppContext } from "../context/weatherLocation.context";

export const MainComponent = () => {
    const { error, status, forecast } = useAppContext();

    switch (status) {
        case "success":
            return (
                <Main data-cy="main-success">
                    <InputLocation />
                    {forecast &&
                        forecast.map((day, index) => {
                            if (index === 0) {
                                return (
                                    <TodayWeather key={index} forecast={day} />
                                );
                            }
                            return (
                                <Day
                                    day={index}
                                    key={index}
                                    temp={day.main.temp}
                                />
                            );
                        })}
                </Main>
            );
        case "error":
            return (
                <Main>
                    <InputLocation />
                    <ErrorMessage>{error}</ErrorMessage>
                </Main>
            );
        default:
        case "loading":
            return (
                <Main>
                    <Loader data-icon={"("}>
                        <p>localizando...</p>
                    </Loader>
                </Main>
            );
    }
};

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:before {
        font-size: 15vh;
        animation: spin infinite 1200ms;
    }
`;
const Main = styled.main`
    width: 57%;
    min-width: 300px;
    height: 100vh;
    margin: auto;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 15vh 1fr 17vh 17vh;
`;
const ErrorMessage = styled.p`
    font-size: 4vh;
    padding: 3vh;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: rgba(249, 204, 6, 0.5);
`;
