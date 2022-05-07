import React from 'react';
import './app.scss';
import Background from './components/background';
import ToastNotification from './components/shared/toastNotification';
import WeatherBox from './components/weatherBox';

function App() {
    return (
        <div id="app">
            <ToastNotification />
            <Background />
            <div>
                <WeatherBox />
            </div>
        </div>
    );
}

export default App;
