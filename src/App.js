import styled from "styled-components";
import { Background } from "./components/background";
import { InputLocation } from "./components/inputLocation";
import GlobalStyles from "./global-styles";
import "./font/stylesheet.css";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Background>
                <Main>
                    <InputLocation />
                </Main>
            </Background>
        </div>
    );
}

export default App;
const Main = styled.main`
    width: 57%;
    min-width: 300px;
    height: 100vh;
    margin: auto;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 15vh 1fr 10vh 10vh;
`;
