import DailyForecast from './components/dailyForecast/dailyForecast';
import BingImage from './components/background/background'
import HighlightedForecast from './components/highlightedForecast/highlightedForecast';
import InputLocation from './components/inputLocation/inputLocation';
import './app.scss';

function App() {
    return (
        <div className="app">
            <BingImage />
            <div className="middleContainer">
                <InputLocation/>
                <HighlightedForecast />
                <DailyForecast index={0} />
                <DailyForecast index={1} />
            </div>
        </div>
    )
}

export default App
