import styled from "styled-components";
import { Background } from "./components/background/background";
import GlobalStyles from "./global-styles";
function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Background>
                <Main></Main>
            </Background>
        </div>
    );
}

export default App;
const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;
