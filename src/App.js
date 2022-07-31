import { Background } from "./components/background";
import GlobalStyles from "./global-styles";
import "./font/stylesheet.css";
import { MainComponent } from "./components/main";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Background>
                <MainComponent />
            </Background>
        </div>
    );
}

export default App;
