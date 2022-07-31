import { useState } from "react";
import styled from "styled-components";
import { InputLocation } from "./inputLocation";

export const MainComponent = () => {
    const [location, setLocation] = useState({
        municipality: "Rio de Janeiro",
        state: "Rio de Janeiro",
    });

    return (
        <Main>
            <InputLocation location={location} setLocation={setLocation} />
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
    grid-template-rows: 15vh 1fr 10vh 10vh;
`;
