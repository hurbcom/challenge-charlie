import React from 'react';
import './app.scss';
import Background from './components/background';
import WeatherBox from './components/weatherBox';

function App() {
    return (
        <div id="app">
            <Background />
            <div>
                <WeatherBox />
            </div>
        </div>
    );
}

export default App;
