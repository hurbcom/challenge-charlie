import { Background } from "./components/background";
import GlobalStyles from "./global-styles";
import "./font/stylesheet.css";
import { MainComponent } from "./components/main.container";
import { AppProvider } from "./components/weatherLocation.provider";
function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Background>
                <AppProvider>
                    <MainComponent />
                </AppProvider>
            </Background>
        </div>
    );
}

export default App;
